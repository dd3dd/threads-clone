import PostList from "@/app/ui/main/post/PostList";
import PostListContainer from "@/app/ui/main/post/PostListContainer";
export default async function Page({ params }: { params: { postId: string } }) {
  return (
    <PostListContainer>
      <PostList rootId={params.postId} />
    </PostListContainer>
  );
}
