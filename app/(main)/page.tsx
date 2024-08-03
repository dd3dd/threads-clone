import PostList from "../ui/main/post/PostList";

export default function Home() {
  return (
    //  change to fixed to disable scroll
    //  suggest post for pt
    <div className="pt-[60px]">
      <PostList />
    </div>
  );
}
