import PostList from "../ui/main/post/PostList";
import PostListContainer from "../ui/main/post/PostListContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "首頁",
};
export default async function Home() {
  return (
    //  change to fixed to disable scroll
    <PostListContainer>
      <PostList />
    </PostListContainer>
  );
}
