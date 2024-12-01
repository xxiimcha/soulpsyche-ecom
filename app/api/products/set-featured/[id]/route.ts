import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// PUT method to set a product as featured
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Product ID is required.' }, { status: 400 });
  }

  try {
    // Update the product to set it as featured
    const updatedProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        isFeatured: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Product has been set as featured.',
      product: updatedProduct,
    });
  } catch (error) {
    console.error('Error setting product as featured:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to set product as featured. Please try again later.',
      },
      { status: 500 }
    );
  }
}
