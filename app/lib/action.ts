"use server";
import { db } from "./db";
import { revalidatePath } from "next/cache";
import { Post } from "@prisma/client";
import { checkIsLiked } from "./data";

export async function createPost(
  email: string,
  postId: string,
  formData: FormData
) {
  if (!email) return;
  const threadArr = Array.from(formData.entries());
  try {
    await db.$transaction(async (db) => {
      const threads = [];

      for (let i = 0; i < threadArr.length; i++) {
        const content = threadArr[i][1] as string;

        const post: Post = await db.post.create({
          data: {
            content: content,
            author_email: email,
            parent_id:
              i === 0 && !postId ? null : i === 0 ? postId : threads[i - 1].id,
          },
        });

        threads.push(post);
      }

      return threads;
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Post.",
    };
  }
  revalidatePath("/");
}
export async function toggleLike(email: string, postId: string) {
  if (!email) return;
  try {
    const existingLike = await checkIsLiked(email, postId);

    if (existingLike) {
      await db.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await db.like.create({
        data: {
          user_email: email,
          post_id: postId,
        },
      });
    }
  } catch (error) {
    console.error("Error liking the post:", error);
  }
  revalidatePath("/");
}
