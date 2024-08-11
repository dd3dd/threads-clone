export type Post = {
  id: string;
  content: string;
  author_email: string;
  parent_id: string | null;
  like_count: number;
};
export type PostWithAuthor = Post & {
  author: {
    email: string;
    name: string;
    image: string;
  };
};
