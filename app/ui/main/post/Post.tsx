import Image from "next/image";
import Link from "next/link";
import { PostWithAuthor } from "@/app/lib/definitions";
import { Session } from "next-auth";
import clsx from "clsx";
import PostButton from "./PostButton";
import {
  checkIsLiked,
  fetchLikeCount,
  fetchRepliesCount,
} from "@/app/lib/data";
import { formatTimeDifference } from "@/app/lib/util";
import PostControlBtn from "./PostControlBtn";

export default async function Post({
  session,
  post,
  type,
  threadsStyle,
}: {
  session: Session | null;
  post: PostWithAuthor;
  type: "link" | "div";
  threadsStyle?: boolean;
}) {
  const { author, content, id, created_at } = post;
  const { name, image, email } = author;
  const repliesCount = (await fetchRepliesCount(id)) - 1;
  const likeCount = await fetchLikeCount(id);
  const isLiked = await checkIsLiked(session?.user?.email || "", id);
  const timeDiff = formatTimeDifference(created_at);

  return type === "link" ? (
    <Link
      href={`/@${name}/post/${id}`}
      className={clsx("flex w-full", {
        "py-3 border-t-[0.5px] first:border-none border-[#323333]":
          !threadsStyle,
        "pt-3 pb-2": threadsStyle,
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
        <div className="flex justify-between items-start min-h-[21px] text-sm">
          <div>
            <span className="mr-2 font-bold text-[#F3F5F7]">{name}</span>
            <span className="text-[#777777]">{timeDiff}</span>
          </div>
          {email === session?.user?.email ? (
            <PostControlBtn post={post} />
          ) : null}
        </div>

        {/* content */}
        <div className="mb-1 text-sm whitespace-pre-wrap text-[#F3F5F7]">
          {content}
        </div>

        {/* interactive row */}
        <div className="ml-[-16px] flex items-center h-9 select-none">
          <PostButton
            isLiked={isLiked}
            post={post}
            likeCount={likeCount}
            type={"like"}
          />
          <PostButton
            post={post}
            timeDiff={timeDiff}
            repliesCount={repliesCount}
            type={"comment"}
          />
        </div>
      </div>
    </Link>
  ) : (
    <div className="w-full pb-1">
      <div className="flex justify-between max-h-8 mb-4 select-none">
        <div className="flex">
          <Image
            className="rounded-full"
            width={32}
            height={32}
            src={image}
            alt="avatar"
          />
          <div className="ml-3 flex items-center text-sm">
            <span className="mr-2 font-bold text-[#F3F5F7]">{name}</span>
            <span className="text-[#777777]">{timeDiff}</span>
          </div>
        </div>
        {email === session?.user?.email ? <PostControlBtn post={post} /> : null}
      </div>

      {/* content */}
      <div className="mb-2 text-sm whitespace-pre-wrap text-[#F3F5F7]">
        {content}
      </div>

      {/* interactive row */}
      <div className="ml-[-16px] flex items-center h-9 select-none">
        <PostButton
          isLiked={isLiked}
          post={post}
          likeCount={likeCount}
          type={"like"}
        />
        <PostButton
          post={post}
          timeDiff={timeDiff}
          repliesCount={repliesCount}
          type={"comment"}
        />
      </div>
    </div>
  );
}
