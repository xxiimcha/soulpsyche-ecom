import { NextResponse } from "next/server";
import { PrismaClient } from '../../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // Fetch the order details
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        User: true,
        OrderItem: {
          include: {
            Product: true,
            ProductVariantSize: true,
          },
        },
        PaymentDetail: true,
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Create a plain text or simple HTML invoice
    const invoiceContent = `
      Order Invoice
      ---------------------------
      Order ID: ${order.id}
      Customer: ${order.User?.username || "N/A"}
      Total Amount: ₱${order.total_amount.toFixed(2)}
      Status: ${order.order_status}
      ${order.courier_name ? `Courier: ${order.courier_name}` : ""}
      ${order.tracking_number ? `Tracking Number: ${order.tracking_number}` : ""}
      
      Items:
      ${order.OrderItem.map(
        (item) =>
          ` - ${item.Product?.name || "Unknown"} (${item.ProductVariantSize?.size || "N/A"}) x ${item.quantity}: ₱${item.price.toFixed(2)}`
      ).join("\n")}

      Payment Details:
      ${order.PaymentDetail.map(
        (payment) =>
          ` - Method: ${payment.payment_method}, Amount Paid: ₱${payment.amount_paid.toFixed(2)}`
      ).join("\n")}
      
      ---------------------------
      Thank you for your purchase!
    `;

    // Create a buffer from the content
    const buffer = Buffer.from(invoiceContent, "utf-8");

    // Respond with the PDF-like plain text file
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf", // Still treat it as a PDF for the browser
        "Content-Disposition": `attachment; filename="invoice_${order.id}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error generating invoice:", error);
    return NextResponse.json({ error: "Failed to generate invoice" }, { status: 500 });
  }
}
