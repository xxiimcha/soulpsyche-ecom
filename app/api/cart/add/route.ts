import { PrismaClient } from '../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, productId, productVariantSizeId, quantity } = body;

    if (!userId || !productId || !productVariantSizeId || !quantity) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const bagItem = await prisma.bag.create({
      data: {
        user_id: userId,
        product_id: productId,
        product_variant_size_id: productVariantSizeId,
        quantity,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return new Response(
      JSON.stringify({ message: "Item added to cart", bagItem }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding to cart:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add item to cart" }),
      { status: 500 }
    );
  }
}
