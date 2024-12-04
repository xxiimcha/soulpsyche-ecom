import { PrismaClient } from '../../../../prisma/generated/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Log the payload for debugging
    console.log("Received Payload:", body);

    // Validate required fields
    if (!body.name || !body.slug || !body.price || !body.category_id) {
      return NextResponse.json(
        { message: "Missing required fields (name, slug, price, category_id)" },
        { status: 400 }
      );
    }

    // Validate the price
    if (typeof body.price !== "number" || body.price <= 0) {
      return NextResponse.json(
        { message: "Invalid price. It must be a positive number." },
        { status: 400 }
      );
    }

    // Validate image URL
    if (body.image && typeof body.image !== "string") {
      return NextResponse.json(
        { message: "Invalid image URL. It must be a string." },
        { status: 400 }
      );
    }

    // Insert the product with nested relations
    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        slug: body.slug,
        price: body.price,
        description: body.description || null,
        category_id: body.category_id,
        image_url: body.image || null, // Save the main product image

        // Create ProductVariantColor and ProductVariantSize
        ProductVariantColor: {
          create: body.variants?.map((variant: any) => ({
            color: variant.color, // Color of the variant
            images: variant.images || [], // Use `images` directly from the payload
            ProductVariantSize: {
              create: variant.sizes.map((size: any) => ({
                size: size.size, // Size of the variant
                stock: size.stock, // Stock for the size
                status: size.status, // Status (e.g., In Stock, Out of Stock)
              })),
            },
          })),
        },
      },
    });

    // Return a success response
    return NextResponse.json({
      message: "Product added successfully!",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);

    // Handle specific Prisma errors (e.g., unique constraint violations)
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint failed")
    ) {
      return NextResponse.json(
        { message: "Duplicate entry. The slug or SKU must be unique." },
        { status: 400 }
      );
    }

    // Return a generic error message for other errors
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
