import { PrismaClient } from '../../../prisma/generated/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all products from the database, including related categories and variants
    const products = await prisma.product.findMany({
      include: {
        Category: true,  // Correct relation to include the category
        ProductVariantColor: {
          include: {
            ProductVariantSize: true, // This includes related sizes and stock details
          },
        },
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

