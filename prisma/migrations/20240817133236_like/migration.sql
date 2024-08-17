/*
  Warnings:

  - You are about to drop the column `like_count` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "like_count";

-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Like_user_email_post_id_key" ON "Like"("user_email", "post_id");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
