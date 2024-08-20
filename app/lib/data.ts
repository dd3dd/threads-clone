import { db } from "./db";
import { PostWithAuthor } from "./definitions";
export async function fetchPosts(rootId: string) {
  try {
    const posts = await db.post.findMany({
      where:
        rootId === ""
          ? { parent_id: null }
          : { OR: [{ id: rootId }, { parent_id: rootId }] },
      include: {
        author: true,
      },
      orderBy: {
        created_at: "asc",
      },
    });
    return posts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts.");
  }
}
export async function fetchRepliesCount(rootId: string) {
  try {
    const result = await db.$queryRaw<{ count: number }[]>`
    WITH RECURSIVE PostHierarchy AS (
        SELECT id
        FROM "Post"
        WHERE id = ${rootId}

        UNION ALL

        SELECT p.id
        FROM "Post" p
        INNER JOIN PostHierarchy ph ON p.parent_id = ph.id
    )
    SELECT COUNT(*) as count FROM PostHierarchy;
    `;

    return Number(result[0]?.count) ?? 0;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch replies count.");
  }
}
export async function fetchParents(parentId: string | null) {
  try {
    const parents: PostWithAuthor[] = [];

    async function findParent(parentId: string | null) {
      if (!parentId) return;

      const post = await db.post.findUnique({
        where: { id: parentId },
        include: { author: true },
      });

      if (post) {
        parents.push(post);
        await findParent(post.parent_id);
      }
    }

    await findParent(parentId);
    return parents.reverse();
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch parent posts.");
  }
}
export async function fetchLikeCount(postId: string) {
  try {
    const likeCount = await db.like.count({
      where: { post_id: postId },
    });
    return likeCount;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch likes count.");
  }
}
export async function checkIsLiked(email: string, postId: string) {
  if (!email) return null;
  try {
    const result = await db.like.findUnique({
      where: {
        user_email_post_id: {
          user_email: email,
          post_id: postId,
        },
      },
    });
    return result ? result : null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch check is liked.");
  }
}
