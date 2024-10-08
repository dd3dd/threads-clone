import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { fetchParents, fetchPosts } from "@/app/lib/data";
import CreateContainer from "./CreateContainer";
import Post from "./Post";
import { redirect } from "next/navigation";
export default async function PostList({ rootId = "" }: { rootId?: string }) {
  const posts = await fetchPosts(rootId);
  if (posts.length === 0) redirect("/");
  const session = await getServerSession(authOptions);
  const [mainPost, ...rest] = posts;
  const parents = await fetchParents(mainPost?.parent_id);
  return rootId === "" ? (
    <div className="w-full pb-14 md:pb-0">
      {session ? <CreateContainer avatar={session?.user?.image} /> : null}
      {posts.map((p) => (
        <Post
          session={session}
          type={"link"}
          post={p}
          key={p.id}
          threadsStyle={false}
        />
      ))}
    </div>
  ) : (
    <div className="w-full flex flex-col pt-3 pb-14 md:pb-0">
      {parents.map((parent) => (
        <Post
          session={session}
          type={"link"}
          post={parent}
          key={parent.id}
          threadsStyle={true}
        />
      ))}
      <Post session={session} type={"div"} post={mainPost} />
      <div className="flex items-center w-full h-12 font-bold text-sm border-t-[0.5px] border-[#323333] text-[#F3F5F7]">
        回覆
      </div>
      {rest.map((p) => (
        <Post
          session={session}
          type={"link"}
          post={p}
          key={p.id}
          threadsStyle={false}
        />
      ))}
    </div>
  );
}
