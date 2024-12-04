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

    return NextResponse.json({ message: "Order confirmed and stock updated" });
  } catch (error) {
    console.error("Error confirming order:", error);
    return NextResponse.json(
      { error: "Failed to confirm the order" },
      { status: 500 }
    );
  }
}
