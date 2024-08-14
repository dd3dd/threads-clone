import Image from "next/image";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { fetchRepliesCount } from "@/app/lib/data";
import { PostWithAuthor } from "@/app/lib/definitions";
import clsx from "clsx";
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

export async function PostContent({ mainPost }: { mainPost: PostWithAuthor }) {
  const { author, content, like_count, id } = mainPost;
  const { name, image } = author;
  const repliesCount = (await fetchRepliesCount(id)) - 1;
  return (
    <div className="w-full mt-2 pb-1">
      <div className="max-h-8 mb-4 flex select-none">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={image}
          alt="avatar"
        />
        <div className="ml-3 flex items-center text-sm">
          <span className="mr-2 font-bold text-[#F3F5F7]">{name}</span>
          <span className="text-[#777777]">1小時</span>
        </div>
      </div>
      <div className="">
        {/* content */}
        <div className="mb-2 text-sm whitespace-pre-wrap text-[#F3F5F7]">
          {content}
        </div>

        {/* interactive row */}
        <div className="ml-[-16px] flex items-center h-9">
          <InteractiveBtn like_count={like_count} type={"like"} />
          <InteractiveBtn repliesCount={repliesCount} type={"comment"} />
        </div>
      </div>
    </div>
  );
}
export default async function Post({
  post,
  threadsStyle,
}: {
  post: PostWithAuthor;
  threadsStyle: boolean;
}) {
  const { author, content, like_count, id } = post;
  const { name, image } = author;
  const repliesCount = (await fetchRepliesCount(id)) - 1;
  return (
    <Link
      href={`/@${name}/post/${id}`}
      className={clsx("flex w-full", {
        "py-3 border-t-[0.5px] first:border-none border-[#323333]":
          !threadsStyle,
        "pt-3": threadsStyle,
      })}
    >
      {/* avatar div */}
      <div className="flex flex-col items-center mr-3 select-none">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={image}
          alt="avatar"
        />
        {threadsStyle ? (
          <div className="my-2 flex-1 w-[2px] bg-[#333638]"></div>
        ) : null}
      </div>
      <div className="flex-1">
        {/* id & time */}
        <div className="mb-1 flex items-start min-h-[21px] text-sm">
          <span className="mr-2 font-bold text-[#F3F5F7]">{name}</span>
          <span className="text-[#777777]">1小時</span>
        </div>

        {/* content */}
        <div className="mb-1 text-sm whitespace-pre-wrap text-[#F3F5F7]">
          {content}
        </div>

        {/* interactive row */}
        <div className="ml-[-16px] flex items-center h-9">
          <InteractiveBtn like_count={like_count} type={"like"} />
          <InteractiveBtn repliesCount={repliesCount} type={"comment"} />
        </div>
      </div>
    </Link>
  );
}
