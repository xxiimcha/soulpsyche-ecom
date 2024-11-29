-- DropForeignKey
ALTER TABLE "Bag" DROP CONSTRAINT "Bag_user_id_fkey";

-- AddForeignKey
ALTER TABLE "Bag" ADD CONSTRAINT "Bag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
