import { PrismaClient } from "../../../../prisma/generated/client";
import { Prisma } from "../../../../prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET method to fetch a product by ID
export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop(); // Extract the ID from the URL path

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

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

    // Transform the response to include images from the ProductVariantColor table
    const response = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.Category?.name || "Uncategorized",
      description: product.description || "No description available.",
      colors: product.ProductVariantColor.map((variant) => ({
        color: variant.color,
        images: variant.images || [], // Fetch images as an array
        sizes: variant.ProductVariantSize.map((size) => ({
          id: size.id,
          label: size.size,
          stock: size.stock || 0,
        })),
      })),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching product details:", error);
    return NextResponse.json(
      { message: "Failed to fetch product details" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop(); // Extract the ID from the URL path

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    // Delete the product
    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);

    // Handle Prisma-specific errors
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Failed to delete product" },
      { status: 500 }
    );
  }
}