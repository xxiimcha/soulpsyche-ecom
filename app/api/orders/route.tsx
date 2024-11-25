import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    console.log("Received request to place order");

    const body = await req.json();
    console.log("Request body:", body);

    const {
      userId,
      items,
      subtotal,
      shipping,
      total,
      shippingAddressId,
      paymentMethodId, // This is the payment method ID
    } = body;

    // Validate required fields
    if (
      !userId ||
      !items?.length ||
      subtotal === undefined ||
      shipping === undefined ||
      total === undefined ||
      !shippingAddressId ||
      !paymentMethodId
    ) {
      console.error("Validation error: Missing or invalid required fields");
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    console.log("Validated input fields successfully");

    // Fetch the payment method's method_name from PaymentMethodInfo table
    const paymentMethod = await prisma.paymentMethodInfo.findUnique({
      where: { id: paymentMethodId },
    });

    if (!paymentMethod) {
      console.error("Invalid payment method selected:", paymentMethodId);
      return NextResponse.json(
        { error: "Invalid payment method selected" },
        { status: 400 }
      );
    }

    console.log("Fetched payment method:", paymentMethod.method_name);

    // Create the order
    const order = await prisma.order.create({
      data: {
        user_id: userId,
        order_status: "pending", // Default order status
        total_amount: total,
        payment_status: "unpaid", // Default payment status
      },
    });

    console.log("Created order:", order.id);

    // Insert order items
    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      product_id: item.id,
      product_variant_size_id: item.size, // Assuming size maps to size ID
      quantity: item.quantity,
      price: item.price,
      subtotal: item.price * item.quantity,
    }));

    await prisma.orderItem.createMany({ data: orderItems });

    console.log("Inserted order items successfully");

    // Add payment details using method_name
    await prisma.paymentDetail.create({
      data: {
        order_id: order.id,
        payment_method: paymentMethod.method_name, // Use method_name instead of ID
        transaction_id: "pending", // Placeholder for now
        amount_paid: 0, // Admin will update after verifying payment
        payment_status: "unpaid",
      },
    });

    console.log("Added payment details successfully");

    return NextResponse.json(
      { message: "Order placed successfully", orderId: order.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json(
      { error: "Failed to place order. Please try again later." },
      { status: 500 }
    );
  }
}
