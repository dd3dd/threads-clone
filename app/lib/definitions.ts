export type Author = {
  id: number;
  name: string;
  avatarUrl: string;
};

export type PostProps = {
  id: number;
  author: Author;
  content: string;
  likes: number;
  commentsCount: number;
  timestamp: string;
};
