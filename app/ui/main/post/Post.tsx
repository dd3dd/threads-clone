import Image from "next/image";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { fetchRepliesCount } from "@/app/lib/data";
import { PostWithAuthor } from "@/app/lib/definitions";
export function InteractiveBtn({
  type,
  like_count,
  repliesCount,
}: {
  type: "like" | "comment";
  like_count?: number;
  repliesCount?: number;
}) {
  return (
    <div className="flex">
      {type === "like" ? (
        <div className="px-3 py-1 flex items-center rounded-[1000px] cursor-pointer hover:bg-[#1E1E1E]">
          <HeartIcon className="size-5 text-[#CCCCCC]" />
          <span className="ml-1 text-sm text-[#CCCCCC]">{like_count}</span>
        </div>
      ) : (
        <div className="ml-2 px-3 py-1 flex items-center rounded-[1000px] cursor-pointer hover:bg-[#1E1E1E]">
          <ChatBubbleOvalLeftIcon className="size-5 text-[#CCCCCC]" />
          <span className="ml-1 text-sm text-[#CCCCCC]">{repliesCount}</span>
        </div>
      )}
    </div>
  );
}

export default async function Post({ post }: { post: PostWithAuthor }) {
  const { author, content, like_count, id } = post;
  const { name, image } = author;
  const repliesCount = (await fetchRepliesCount(id)) - 1;
  return (
    <Link
      href={`/@${name}/post/${id}`}
      className="flex w-full py-3 border-t-[0.5px] first:border-none border-[#323333]"
    >
      {/* avatar div */}
      <div className="mr-3 select-none">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={image}
          alt="avatar"
        />
      </div>
      <div className="flex-1">
        {/* id & time */}
        <div className="mb-1 flex items-start min-h-[21px] text-sm">
          <span className="mr-2 font-bold text-[#F3F5F7]">{name}</span>
          <span className="text-[#777777]">1小時</span>
        </div>

        {/* content */}
        <div className="mb-1 text-sm text-[#F3F5F7]">{content}</div>

        {/* interactive row */}
        <div className="ml-[-8px] flex items-center h-9">
          <InteractiveBtn like_count={like_count} type={"like"} />
          <InteractiveBtn repliesCount={repliesCount} type={"comment"} />
        </div>
      </div>
    </Link>
  );
}
