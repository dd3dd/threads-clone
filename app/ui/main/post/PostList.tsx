import { posts } from "../../../lib/fakedata";
import Post from "./Post";
export default function PostList() {
  return (
    <div className="px-3 w-full max-w-[620px] flex flex-col items-center bg-[#101010]">
      {posts.map((p) => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  );
}
