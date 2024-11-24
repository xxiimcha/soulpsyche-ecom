import { PrismaClient } from '../../../prisma/generated/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all products from the database, including related categories
    const products = await prisma.product.findMany({
      include: {
        Category: true,  // Correct relation to include the category
      },
    });

    // Return the fetched products as a JSON response
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
