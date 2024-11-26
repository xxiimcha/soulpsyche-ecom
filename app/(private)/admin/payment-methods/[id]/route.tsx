import { PrismaClient } from "@/prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Handler for deleting a payment method by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Payment method ID is required" }, { status: 400 });
    }

    const deletedRecord = await prisma.paymentMethodInfo.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Payment method deleted successfully", deletedRecord },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      // Prisma-specific error for record not found
      return NextResponse.json({ error: "Payment method not found" }, { status: 404 });
    }
    console.error("Error deleting payment method:", error);
    return NextResponse.json({ error: "Failed to delete payment method" }, { status: 500 });
  }
}
