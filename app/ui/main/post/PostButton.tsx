"use client";
import { PostWithAuthor } from "@/app/lib/definitions";
import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFill } from "@heroicons/react/24/solid";
import { useState } from "react";
import Modal from "../Modal";
import Image from "next/image";
import CreateContent from "./CreateContent";
import { toggleLike } from "@/app/lib/action";
import { useSession } from "next-auth/react";
import clsx from "clsx";
export default function PostButton({
  post,
  type,
  likeCount,
  repliesCount,
  isLiked,
  timeDiff,
}: {
  post: PostWithAuthor;
  type: "like" | "comment";
  likeCount?: number;
  repliesCount?: number;
  timeDiff?: string;
  isLiked?: {
    id: string;
    user_email: string;
    post_id: string;
  } | null;
}) {
  const { author, content, id } = post;
  const { name, image } = author;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [threadsArr, setThreadsArr] = useState(["0"]);
  const { data: session } = useSession();

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const likeAction = toggleLike.bind(null, session?.user?.email || "", id);
  return (
    <>
      {type === "like" ? (
        <form onClick={(e) => e.stopPropagation()} action={likeAction}>
          <button
            type="submit"
            className="px-3 py-1 flex items-center rounded-[1000px] cursor-pointer active:scale-[0.95] hover:bg-[#1E1E1E]"
          >
            {isLiked ? (
              <HeartIconFill className="size-5 text-[#FF0034]" />
            ) : (
              <HeartIcon className="size-5 text-[#CCCCCC]" />
            )}
            <span
              className={clsx("ml-1 text-sm", {
                "text-[#FF0034]": isLiked,
                "text-[#CCCCCC]": !isLiked,
              })}
            >
              {likeCount}
            </span>
          </button>
        </form>
      ) : (
        <div
          onClick={onClick}
          className="ml-2 px-3 py-1 flex items-center rounded-[1000px] cursor-pointer active:scale-[0.95] hover:bg-[#1E1E1E]"
        >
          <ChatBubbleOvalLeftIcon className="size-5 text-[#CCCCCC]" />
          <span className="ml-1 text-sm text-[#CCCCCC]">{repliesCount}</span>
        </div>
      )}

      {/* modal */}
      {isModalOpen && (
        <Modal
          type={"reply"}
          closeModal={() => setIsModalOpen(false)}
          postId={id}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div className="flex">
              <div className="flex flex-col items-center mr-3 select-none">
                <Image
                  className="rounded-full"
                  width={32}
                  height={32}
                  src={image}
                  alt="avatar"
                />
                <div className="mt-2 flex-1 w-[2px] bg-[#333638]"></div>
              </div>
              <div className="flex-1">
                {/* id & time */}
                <div className="mb-1 flex items-start min-h-[21px] text-sm">
                  <span className="mr-2 font-bold text-[#F3F5F7]">{name}</span>
                  <span className="text-[#777777]">{timeDiff}</span>
                </div>
                {/* content */}
                <div className="mb-1 text-sm whitespace-pre-wrap text-[#F3F5F7]">
                  {content}
                </div>
              </div>
            </div>
            {threadsArr.map((el) => (
              <CreateContent
                textareaId={el}
                key={el}
                author={name}
                threadsArr={threadsArr}
                reply={true}
                handleThreadsArr={(arr: string[]): void => setThreadsArr(arr)}
              />
            ))}
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex justify-center items-center w-[64px] h-9 rounded-lg border cursor-pointer text-sm font-semibold
       border-[#383939] text-[#F2F4F6]"
              >
                發佈
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
