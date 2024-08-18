-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_parent_id_fkey";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
