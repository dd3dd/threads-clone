import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchParents, fetchPosts } from "@/app/lib/data";
import CreateContainer from "./CreateContainer";
import Post, { PostContent } from "./Post";

export default async function PostList({ rootId = "" }: { rootId?: string }) {
  const posts = await fetchPosts(rootId);
  const session = await getServerSession(authOptions);
  const [mainPost, ...rest] = posts;
  const parents = await fetchParents(mainPost?.parent_id);
  return rootId === "" ? (
    <>
      {session ? <CreateContainer avatar={session?.user?.image} /> : null}
      {posts.map((p) => (
        <Post post={p} key={p.id} threadsStyle={false} />
      ))}
    </>
  ) : (
    <div className="w-full flex flex-col pt-4">
      {parents.map((parent) => (
        <Post post={parent} key={parent.id} threadsStyle={true} />
      ))}
      <PostContent mainPost={mainPost} />
      <div className="flex items-center w-full h-12 font-bold text-sm border-t-[0.5px] border-[#323333] text-[#F3F5F7]">
        回覆
      </div>
      {rest.map((p) => (
        <Post post={p} key={p.id} threadsStyle={false} />
      ))}
    </div>
  );
}
