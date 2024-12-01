
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request: NextRequest) {
  try {
    // Accessing the `id` parameter from the URL path for dynamic routing
    const { id } = request.nextUrl.pathname.split("/").pop() as string;  // Get product ID from URL path
    const body = await request.json();  // Get product data from request body

    const updatedProduct = await prisma.product.update({
      where: { id: id },  // Using the ID from the URL
      data: {
        name: body.name,
        price: body.price,
        description: body.description,
        variants: {
          updateMany: body.variants.map((variant: any) => ({
            where: { color: variant.color },
            data: {
              sizes: {
                updateMany: variant.sizes.map((size: any) => ({
                  where: { size: size.size },
                  data: {
                    stock: size.stock,
                    status: size.status
                  }
                }))
              }
            }
          }))
        }
      }
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Error updating product" }, { status: 500 });
  }
}
