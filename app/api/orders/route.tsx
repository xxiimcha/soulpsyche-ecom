import { NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, items, subtotal, total, paymentMethod } = body;

    // Validate required fields
    if (!userId || !items?.length || subtotal === undefined || total === undefined || !paymentMethod) {
      console.log("Validation error: Missing or invalid required fields");
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    console.log("Received request to place order");
    console.log("Request body:", body);

    // Retrieve the payment method name
    const paymentMethodData = await prisma.paymentMethodInfo.findFirst({
      where: { method_name: paymentMethod },
    });

    if (!paymentMethodData) {
      console.log("Validation error: Invalid payment method selected");
      return NextResponse.json(
        { error: "Invalid payment method selected" },
        { status: 400 }
      );
    }

    // Use a transaction to ensure atomicity
    const result = await prisma.$transaction(async (prisma) => {
      // Create the order
      const order = await prisma.order.create({
        data: {
          user_id: userId,
          order_status: "pending", // Default order status
          total_amount: total,
          payment_status: "unpaid", // Default payment status
        },
      });

      console.log("Order created with ID:", order.id);

      // Map items to include the `product_id` and create order items
      const orderItems = await Promise.all(
        items.map(async (item: any) => {
          const bagEntry = await prisma.bag.findFirst({
            where: {
              user_id: userId,
              product_variant_size_id: item.size,
            },
            select: {
              product_id: true,
            },
          });

          if (!bagEntry) {
            throw new Error(`Product ID ${item.id} does not exist in the Bag table`);
          }

          return {
            order_id: order.id,
            product_id: bagEntry.product_id,
            product_variant_size_id: item.size,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.price * item.quantity,
          };
        })
      );

      await prisma.orderItem.createMany({ data: orderItems });

      console.log("Order items created:", orderItems);

      // Delete items from Bag table after order is created
      await prisma.bag.deleteMany({
        where: {
          user_id: userId,
          product_variant_size_id: { in: items.map((item: any) => item.size) },
        },
      });

      console.log("Deleted items from Bag table for user ID:", userId);

      // Add payment details
      await prisma.paymentDetail.create({
        data: {
          order_id: order.id,
          payment_method: paymentMethod,
          transaction_id: "pending", // Placeholder for now
          amount_paid: 0, // Admin will update after verifying payment
          payment_status: "unpaid",
        },
      });

      console.log("Payment details added for order ID:", order.id);

      return order;
    });

    return NextResponse.json(
      { message: "Order placed successfully", orderId: result.id },
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
