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
    });
    return posts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch threads.");
  }
}
export async function fetchRepliesCount(rootId: string): Promise<number> {
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
    throw new Error("Failed to fetch all replies.");
  }
}
export async function fetchParents(
  parentId: string | null
): Promise<PostWithAuthor[]> {
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
