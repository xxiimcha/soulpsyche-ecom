import { NextResponse } from "next/server";
import { PrismaClient } from '../../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function PATCH(req: Request, context: { params: { id: string } }) {
  const { id } = context.params; // Correctly destructure params from context

  try {
    // Fetch the order details including items and their size variants
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        User: true, // Include user details for email
        OrderItem: {
          include: {
            Product: true,
            ProductVariantSize: true,
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (order.order_status !== "pending") {
      return NextResponse.json(
        { error: "Order is not in a pending state" },
        { status: 400 }
      );
    }

    // Deduct stock based on the ordered items
    for (const item of order.OrderItem) {
      await prisma.productVariantSize.update({
        where: {
          id: item.ProductVariantSize.id, // Size ID
        },
        data: {
          stock: {
            decrement: item.quantity, // Deduct the quantity from stock
          },
        },
      });
    }

    // Update the order status to "processing"
    await prisma.order.update({
      where: { id },
      data: { order_status: "processing" },
    });

    // Send email to notify the user
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer re_TeZt35op_NRGa25ycWY3upWgurS9VKcvM`, // Replace with your actual API key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: order.User.email, // User's email from the order
        subject: "Order Confirmation",
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; padding: 20px;">
            <h1 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">Order Confirmed</h1>
            <p style="color: #333; font-size: 16px;">
              Dear ${order.User.username || "Valued Customer"},
              <br /><br />
              Your order has been confirmed and is now being processed. Below are the details of your order:
            </p>
            <div style="margin: 20px 0; border: 1px solid #ddd; padding: 15px; background-color: #fdfdfd;">
              <p style="margin: 5px 0;"><strong>Order ID:</strong> ${order.id}</p>
              <p style="margin: 5px 0;"><strong>Total Amount:</strong> ₱${order.total_amount.toFixed(2)}</p>
              <p style="margin: 5px 0;"><strong>Order Status:</strong> Processing</p>
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
                ${order.OrderItem.map(item => `
                  <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.Product.name}</td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.ProductVariantSize.size}</td>
                    <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">${item.quantity}</td>
                    <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">₱${item.price.toFixed(2)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <p style="color: #333; font-size: 14px; margin-top: 20px;">
              If you have any questions, feel free to contact us at 
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

    return NextResponse.json({ message: "Order confirmed and stock updated" });
  } catch (error) {
    console.error("Error confirming order:", error);
    return NextResponse.json(
      { error: "Failed to confirm the order" },
      { status: 500 }
    );
  }
}
