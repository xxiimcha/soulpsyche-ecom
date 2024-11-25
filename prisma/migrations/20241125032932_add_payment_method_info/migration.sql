-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PAYMENT_METHOD" ADD VALUE 'PayPal';
ALTER TYPE "PAYMENT_METHOD" ADD VALUE 'Other';

-- DropForeignKey
ALTER TABLE "Bag" DROP CONSTRAINT "Bag_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Bag" DROP CONSTRAINT "Bag_product_variant_size_id_fkey";

-- DropForeignKey
ALTER TABLE "Bag" DROP CONSTRAINT "Bag_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_product_id_fkey";

-- AlterTable
ALTER TABLE "Bag" ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "product_id" SET DATA TYPE TEXT,
ALTER COLUMN "product_variant_size_id" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "PaymentMethodInfo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "method_name" "PAYMENT_METHOD" NOT NULL,
    "description" TEXT,
    "account_name" TEXT,
    "account_number" TEXT,
    "qr_code" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PaymentMethodInfo_pkey" PRIMARY KEY ("id")
);

-- RenameForeignKey
ALTER TABLE "Wishlist" RENAME CONSTRAINT "Wishlist_product_id_fkey1" TO "Wishlist_product_id_fkey";

-- AddForeignKey
ALTER TABLE "Bag" ADD CONSTRAINT "Bag_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
