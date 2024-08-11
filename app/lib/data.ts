import { db } from "./db";
export async function fetchPosts() {
  try {
    const posts = await db.post.findMany({
      where: {
        parent_id: null,
      },
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
