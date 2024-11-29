/*
  Warnings:

  - Added the required column `product_variant_color_id` to the `Bag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bag" ADD COLUMN     "product_variant_color_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Bag" ADD CONSTRAINT "Bag_product_variant_color_id_fkey" FOREIGN KEY ("product_variant_color_id") REFERENCES "ProductVariantColor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
