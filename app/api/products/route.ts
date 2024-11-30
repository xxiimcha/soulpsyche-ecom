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
          Category: true, // Include the category details
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

      // Include the category name directly in the response
      return NextResponse.json({
        ...product,
        categoryName: product.Category?.name || "Uncategorized",
      });
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

      // Transform products to include category name
      const transformedProducts = products.map((product) => ({
        ...product,
        categoryName: product.Category?.name || "Uncategorized",
      }));

      return NextResponse.json(transformedProducts);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
