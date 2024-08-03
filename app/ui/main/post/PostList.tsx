import { posts } from "../../../lib/fakedata";
import CreatePost from "./CreatePost";
import Post from "./Post";
export default function PostList() {
  const listStyle =
    "px-6 w-full max-w-[620px] flex flex-col items-center bg-[#101010]";
  const loggedInStyle =
    "px-6 pt-2 w-full max-w-[620px] flex flex-col rounded-3xl border border-[#323333] items-center bg-[#181818]";
  return (
    <div className={loggedInStyle}>
      <CreatePost />
      {posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
}
