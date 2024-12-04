import { NextResponse } from "next/server";
import { PrismaClient } from '../../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { id } = params; // Extract the order ID from the URL

  try {
    // Parse the request body
    const body = await req.json();
    const { courier_name, tracking_number } = body;

    // Validate input
    if (!courier_name || !tracking_number) {
      return NextResponse.json(
        { error: "Courier name and tracking number are required" },
        { status: 400 }
      );
    }

    // Fetch the order details, including the user email and items
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        User: true, // Include the user details for email
        OrderItem: {
          include: {
            Product: true, // Include product details
            ProductVariantSize: true, // Include size details
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Update the order with courier details
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: {
        courier_name,
        tracking_number,
        order_status: "shipped", // Update status to shipped
      },
    });

    // Prepare the list of items for the email
    const itemsHtml = order.OrderItem.map(
      (item) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.Product.name}</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.ProductVariantSize.size}</td>
        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">${item.quantity}</td>
        <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">₱${item.price.toFixed(2)}</td>
      </tr>`
    ).join("");

    // Send an email to notify the user
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer re_TeZt35op_NRGa25ycWY3upWgurS9VKcvM`, // Replace with your actual API key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: order.User.email, // Use the user's email from the order
        subject: "Your Order Has Been Shipped",
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; padding: 20px;">
              <h1 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">Order Shipped</h1>
              <p style="color: #333; font-size: 16px;">
                Dear ${order.User.username || "Valued Customer"},
                <br /><br />
                Your order has been shipped! Below are your shipping details:
              </p>
              <div style="margin: 20px 0; border: 1px solid #ddd; padding: 15px; background-color: #fdfdfd;">
                <p style="margin: 5px 0;"><strong>Order ID:</strong> ${updatedOrder.id}</p>
                <p style="margin: 5px 0;"><strong>Courier Name:</strong> ${courier_name}</p>
                <p style="margin: 5px 0;"><strong>Tracking Number:</strong> ${tracking_number}</p>
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
                  ${itemsHtml}
                </tbody>
              </table>
              <p style="color: #333; font-size: 14px; margin-top: 20px;">
                You can track your package using the tracking number provided. If you have any questions, feel free to contact us at 
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
      console.log("Shipping notification email sent successfully.");
    }

    // Return a success response
    return NextResponse.json({ message: "Order updated and email sent successfully", order: updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
  }
}
