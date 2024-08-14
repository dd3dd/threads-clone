"use server";
import { db } from "./db";
import { revalidatePath } from "next/cache";
import { Post } from "./definitions";
export async function createThread(email: string, formData: FormData) {
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
            parent_id: i === 0 ? null : threads[i - 1].id,
          },
        });

        threads.push(post);
      }

      return threads;
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Thread.",
    };
  }
  revalidatePath("/");
}
