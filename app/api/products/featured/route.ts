import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Query the database for products where isFeatured is true
    const featuredProducts = await prisma.product.findMany({
      where: { isFeatured: true },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        slug: true,
        sku: true,
        isFeatured: true,
        category_id: true,
      },
    });

    return NextResponse.json(featuredProducts, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return NextResponse.json(
      { message: "Failed to fetch featured products" },
      { status: 500 }
    );
  }
}
