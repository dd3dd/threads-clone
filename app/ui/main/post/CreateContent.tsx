"use client";
import Image from "next/image";
import defaultImg from "../../../../public/avatar.png";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
export default function CreateContent({
  textareaId,
  threadsArr,
  reply,
  author,
  handleThreadsArr,
}: {
  textareaId: string;
  threadsArr: string[];
  author?: string;
  reply: boolean;
  handleThreadsArr: (arr: string[]) => void;
}) {
  const { data: session } = useSession();
  const { name, image } = session?.user || {};

  const deleteThread = (): void => {
    const newArr = threadsArr.filter((el) => el !== textareaId);
    handleThreadsArr(newArr);
  };
  const addNewThread = (): void => {
    const id = uuidv4();
    handleThreadsArr([...threadsArr, id]);
  };

  return (
    <div className="flex mt-2">
      <div className="flex flex-col items-center mr-3 select-none">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={image ?? defaultImg}
          alt="avatar"
        />
        <div className="my-3 flex-1 w-[2px] bg-[#333638]"></div>
        {textareaId === threadsArr[threadsArr.length - 1] ? (
          <Image
            className="rounded-full"
            width={16}
            height={16}
            src={image ?? defaultImg}
            alt="avatar"
          />
        ) : null}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex justify-between">
          <span className="text-sm font-semibold text-[#F3F5F7]">{name}</span>
          {textareaId !== "0" && (
            <button onClick={deleteThread} className="text-[#777777]">
              x
            </button>
          )}
        </div>
        <textarea
          placeholder={
            textareaId === "0" && reply
              ? `回覆${author}......`
              : textareaId === "0"
              ? "建立串文......"
              : "傳達更多想法......"
          }
          className="w-full h-8 text-sm overflow-hidden outline-none text-[#D9DBE0] bg-transparent placeholder:text-[#6C6C6C]"
          name="content"
        ></textarea>
        <div className="mb-4 w-fit cursor-pointer">
          <PhotoIcon className="size-4 text-[#727272]" />
        </div>
        {textareaId === threadsArr[threadsArr.length - 1] && (
          <div
            onClick={addNewThread}
            className="text-sm cursor-pointer text-[#6C6C6C]"
          >
            新增到串文
          </div>
        )}
      </div>
    </div>
  );
}
