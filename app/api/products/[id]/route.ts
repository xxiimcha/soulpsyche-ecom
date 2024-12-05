import { PrismaClient } from "../../../../prisma/generated/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface Size {
  id: string;
  label: string;
  stock: number;
}

interface Color {
  color: string;
  images: string[];
  sizes: Size[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  colors: Color[];
}

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

    // Transform the response to include images and sizes
    const response = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.Category?.name || "Uncategorized",
      description: product.description || "No description available.",
      colors: product.ProductVariantColor.map((variant) => ({
        color: variant.color || "Unknown Color",
        images: variant.images || [],
        sizes: variant.ProductVariantSize.map((size) => ({
          id: size.id,
          label: size.size || "Unknown Size",
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
export async function PUT(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop(); // Extract the ID from the URL path

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    const data = await req.json(); // Parse the incoming JSON data

    // Update the product
    await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        price: data.price,
        category_id: data.category,
        description: data.description,
      },
    });

    // Handle updating variants
    for (const variant of data.colors) {
      // Ensure `id` is valid or use `undefined` for new records
      const colorVariant = await prisma.productVariantColor.upsert({
        where: { id: variant.id?.length === 36 ? variant.id : undefined },
        create: {
          color: variant.color,
          product_id: id,
          images: variant.images,
        },
        update: {
          color: variant.color,
          images: variant.images,
        },
      });

      // Handle sizes
      for (const size of variant.sizes) {
        await prisma.productVariantSize.upsert({
          where: { id: size.id?.length === 36 ? size.id : undefined },
          create: {
            size: size.label,
            stock: size.stock,
            variant_color_id: colorVariant.id,
            status: "Active", // Assuming default status
          },
          update: {
            stock: size.stock,
          },
        });
      }
    }

    return NextResponse.json(
      { message: "Product updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { message: "Failed to update product" },
      { status: 500 }
    );
  }
}
