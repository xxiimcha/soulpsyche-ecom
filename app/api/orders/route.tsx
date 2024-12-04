import { NextResponse } from "next/server";
import { PrismaClient } from '../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  interface OrderItem {
    productName: string;
    variantSize: string;
    quantity: number;
    price: number;
  }

  
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

      // Delete items from Bag table after order
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

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer re_TeZt35op_NRGa25ycWY3upWgurS9VKcvM`, // Replace with your actual API key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "soulepsycle1201@gmail.com", // Static email for testing
        subject: "Order Confirmation",
        html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; padding: 20px;">
          <h1 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">Order Confirmation</h1>
          <p style="color: #333; font-size: 16px;">
            Thank you for your order! Below are the details of your purchase:
          </p>
          <div style="margin: 20px 0; border: 1px solid #ddd; padding: 15px; background-color: #fdfdfd;">
            <p style="margin: 5px 0;"><strong>Order ID:</strong> ${result.id}</p>
            <p style="margin: 5px 0;"><strong>Total Amount:</strong> ₱${total}</p>
            <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${paymentMethod}</p>
          </div>
          <h2 style="color: #000; margin-top: 20px;">Items:</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Product</th>
                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Size</th>
                <th style="text-align: right; padding: 10px; border-bottom: 1px solid #ddd;">Quantity</th>
                <th style="text-align: right; padding: 10px; border-bottom: 1px solid #ddd;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item: OrderItem) => `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.productName}</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.variantSize}</td>
                  <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">${item.quantity}</td>
                  <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">₱${item.price.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <p style="color: #333; font-size: 14px; margin-top: 20px;">
            If you have any questions about your order, please contact our support team at 
            <a href="mailto:support@soulepsycle.com" style="color: #000; text-decoration: none;">support@soulepsycle.com</a>.
          </p>
          <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center;">
            &copy; 2024 SoulePsycle. All rights reserved.
          </p>
        </div>
      </div>
    `,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Failed to send email:", await emailResponse.text());
    } else {
      console.log("Order confirmation email sent successfully.");
    }

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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");

    if (orderId) {
      // Fetch a specific order by ID
      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: {
          OrderItem: {
            include: {
              Product: true,
            },
          },
          PaymentDetail: true,
        },
      });

      if (!order) {
        return NextResponse.json({ message: "Order not found" }, { status: 404 });
      }

      return NextResponse.json(order, { status: 200 });
    } else {
      // Fetch all orders
      const orders = await prisma.order.findMany({
        include: {
          OrderItem: {
            include: {
              Product: true,
            },
          },
          PaymentDetail: true,
        },
      });

      return NextResponse.json(orders, { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ message: "Failed to fetch orders" }, { status: 500 });
  }
}
