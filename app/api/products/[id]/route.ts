
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";


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

    // Begin a transaction to ensure all deletions happen atomically
    await prisma.$transaction(async (tx) => {
      // Fetch all ProductVariantColor IDs related to the product
      const variantColors = await tx.productVariantColor.findMany({
        where: { product_id: id },
        select: { id: true },
      });

      const variantColorIds = variantColors.map((variant) => variant.id);

      // Delete ProductVariantSize entries related to the fetched ProductVariantColor IDs
      await tx.productVariantSize.deleteMany({
        where: {
          variant_color_id: { in: variantColorIds },
        },
      });

      // Delete ProductVariantColor entries related to the product
      await tx.productVariantColor.deleteMany({
        where: { product_id: id },
      });

      // Delete the product itself
      await tx.product.delete({
        where: { id },
      });
    });

    return NextResponse.json(
      { message: "Product and related items deleted successfully" },
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
