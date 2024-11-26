/*
  Warnings:

  - Changed the type of `user_id` on the `Bag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `Bag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_variant_size_id` on the `Bag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bag" ALTER COLUMN "updated_at" DROP NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" UUID NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" UUID NOT NULL,
DROP COLUMN "product_variant_size_id",
ADD COLUMN     "product_variant_size_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "variant_color_required" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "variant_size_required" BOOLEAN NOT NULL DEFAULT false;

-- RenameForeignKey
ALTER TABLE "Wishlist" RENAME CONSTRAINT "Wishlist_product_id_fkey1" TO "Wishlist_product_id_fkey";

-- AddForeignKey
ALTER TABLE "Bag" ADD CONSTRAINT "Bag_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bag" ADD CONSTRAINT "Bag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
