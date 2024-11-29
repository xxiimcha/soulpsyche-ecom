import { PrismaClient } from '../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, productId, productVariantSizeId, quantity } = body;

    // Log the incoming payload for debugging
    console.log('Received payload:', { userId, productId, productVariantSizeId, quantity });

    // Validate input fields
    if (!userId || !productId || !productVariantSizeId || !quantity) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Validate userId
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      console.error('Invalid userId:', userId);
      return new Response(
        JSON.stringify({ error: 'Invalid user_id' }),
        { status: 400 }
      );
    }

    // Validate productId
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      console.error('Invalid productId:', productId);
      return new Response(
        JSON.stringify({ error: 'Invalid product_id' }),
        { status: 400 }
      );
    }

    // Retrieve the `variant_color_id` from `ProductVariantSize`
    const variantSize = await prisma.productVariantSize.findUnique({
      where: { id: productVariantSizeId },
    });

    if (!variantSize) {
      console.error('Invalid productVariantSizeId:', productVariantSizeId);
      return new Response(
        JSON.stringify({ error: 'Invalid product_variant_size_id' }),
        { status: 400 }
      );
    }

    const productVariantColorId = variantSize.variant_color_id;
    if (!productVariantColorId) {
      return new Response(
        JSON.stringify({ error: 'No color associated with this size' }),
        { status: 400 }
      );
    }

    // Ensure quantity is valid
    if (quantity <= 0) {
      return new Response(
        JSON.stringify({ error: 'Quantity must be greater than zero' }),
        { status: 400 }
      );
    }

    // Create the bag item
    const bagItem = await prisma.bag.create({
      data: {
        user_id: userId,
        product_id: productId,
        product_variant_size_id: productVariantSizeId,
        product_variant_color_id: productVariantColorId,
        quantity,
        updated_at: new Date(),
      },
    });

    return new Response(
      JSON.stringify({ message: 'Item added to cart', bagItem }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding to cart:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to add item to cart' }),
      { status: 500 }
    );
  }
}
