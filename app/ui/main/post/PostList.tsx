import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clsx from "clsx";
import { fetchPosts } from "@/app/lib/data";
import CreateContainer from "./CreateContainer";
import Post from "./Post";

export default async function PostList() {
  const posts = await fetchPosts();
  const session = await getServerSession(authOptions);

  return (
    <div
      className={clsx("px-6 w-full max-w-[620px] flex flex-col items-center", {
        "mt-[74px] bg-[#101010]": !session,
        "mt-[60px] bg-[#181818] rounded-3xl border border-[#323333]": session,
      })}
    >
      {session ? <CreateContainer avatar={session?.user?.image} /> : null}
      {posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
}
