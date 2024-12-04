import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch total orders by counting rows in the OrderItem table
    const totalOrders = await prisma.orderItem.count();

    // Aggregate total revenue by summing the `subtotal` column from OrderItem
    const totalRevenue = await prisma.orderItem.aggregate({
      _sum: { subtotal: true },
    });

    // Fetch total customers by counting rows in the User table
    const totalCustomers = await prisma.user.count();

    // Fetch total products by counting rows in the Product table
    const totalProducts = await prisma.product.count();

    // Optionally, you can fetch additional metrics here if needed

    return NextResponse.json({
      totalOrders, // Total rows in OrderItem
      totalRevenue: totalRevenue._sum.subtotal || 0, // Total revenue from `subtotal`
      totalCustomers, // Total customers in the User table
      totalProducts, // Total products in the Product table
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
