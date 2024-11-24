import { PrismaClient } from '../../../../prisma/generated/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const { id } = req.query; // Extract the product ID from the URL
    const updatedProduct = req.body; // Incoming product data

    try {
      // Update the product's main data
      const result = await prisma.product.update({
        where: { id: id as string },
        data: {
          name: updatedProduct.name,
          slug: updatedProduct.slug,
          price: updatedProduct.price,
          category_id: updatedProduct.category_id,
          description: updatedProduct.description,
          updated_at: new Date(), // Optional: Set `updated_at`
        },
      });

      // Handle variants and their sizes
      if (updatedProduct.variants) {
        // Delete existing variants and sizes
        await prisma.productVariantColor.deleteMany({
          where: { product_id: id as string },
        });

        // Re-create the variants and sizes
        for (const variant of updatedProduct.variants) {
          await prisma.productVariantColor.create({
            data: {
              color: variant.color,
              product_id: id as string,
              ProductVariantSize: {
                create: variant.sizes.map((size: { size: string; stock: number; status: string }) => ({
                  size: size.size,
                  stock: size.stock,
                  status: size.status,
                })),
              },
            },
          });
        }
      }

      res.status(200).json({ product: result });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ error: "Failed to update product" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
