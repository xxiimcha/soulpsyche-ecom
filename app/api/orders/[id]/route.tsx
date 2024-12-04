import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function GET(request: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  if (!id) {
    return NextResponse.json({ message: "Invalid order ID" }, { status: 400 });
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        OrderItem: {
          include: {
            Product: true,
            ProductVariantSize: true,
          },
        },
        PaymentDetail: true,
        User: true,
      },
    });

    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
