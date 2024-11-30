-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "image_url" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Active';
