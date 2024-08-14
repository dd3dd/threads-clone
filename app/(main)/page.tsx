import PostList from "../ui/main/post/PostList";
import PostListContainer from "../ui/main/post/PostListContainer";
export default async function Home() {
  return (
    //  change to fixed to disable scroll
    <PostListContainer>
      <PostList />
    </PostListContainer>
  );
}
