import { PrismaClient } from "../../../prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop(); // Extract the ID from the URL path

    if (id && id !== "products") {
      // Fetch the specific product by its ID
      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          Category: true, // Include the category
          ProductVariantColor: {
            include: {
              ProductVariantSize: true, // Include sizes and stock details
            },
          },
        },
      });

      if (!product) {
        return NextResponse.json(
          { message: "Product not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(product);
    } else {
      // If no specific ID, return all products
      const products = await prisma.product.findMany({
        include: {
          Category: true, // Include category for each product
          ProductVariantColor: {
            include: {
              ProductVariantSize: true, // Include sizes and stock details
            },
          },
        },
      });

      return NextResponse.json(products);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
