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

    // Update the order with courier details
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: {
        courier_name,
        tracking_number,
        order_status: "shipped", // Update status to shipped
      },
    });

    // Return a success response
    return NextResponse.json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
  }
}
