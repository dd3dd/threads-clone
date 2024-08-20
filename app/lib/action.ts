"use server";
import { db } from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
    const threads = [];
    for (let i = 0; i < threadArr.length; i++) {
      const content = threadArr[i][1] as string;
      if (!content) return;
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
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Post",
    };
  }
  revalidatePath("/");
}
export async function updatePost(postId: string, formData: FormData) {
  const data = Array.from(formData.entries());
  const content = data[0][1] as string;
  if (!content) return;
  try {
    await db.post.update({
      where: { id: postId },
      data: { content: content },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Post",
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
    return {
      message: "Database Error: Failed to Toggle Like",
    };
  }
  revalidatePath("/");
}
export async function deletePost(postId: string) {
  try {
    await db.post.delete({
      where: {
        id: postId,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Post",
    };
  }
  revalidatePath("/");
}
