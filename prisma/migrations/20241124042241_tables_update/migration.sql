/*
  Warnings:

  - Made the column `user_id` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "user_id" SET DEFAULT gen_random_uuid();
