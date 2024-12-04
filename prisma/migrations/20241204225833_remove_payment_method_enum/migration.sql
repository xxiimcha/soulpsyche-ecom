/*
  Warnings:

  - Changed the type of `payment_method` on the `PaymentDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `method_name` on the `PaymentMethodInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PaymentDetail" DROP COLUMN "payment_method",
ADD COLUMN     "payment_method" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PaymentMethodInfo" DROP COLUMN "method_name",
ADD COLUMN     "method_name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "PAYMENT_METHOD";
