/*
  Warnings:

  - You are about to drop the column `authorEmail` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `likeCount` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Post` table. All the data in the column will be lost.
  - Added the required column `author_email` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorEmail_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_parentId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorEmail",
DROP COLUMN "likeCount",
DROP COLUMN "parentId",
ADD COLUMN     "author_email" TEXT NOT NULL,
ADD COLUMN     "like_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "parent_id" TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_email_fkey" FOREIGN KEY ("author_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
