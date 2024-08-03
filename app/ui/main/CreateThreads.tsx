"use client";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import ImageIcon from "../svg/ImageIcon";
export default function CreateThreads({
  id,
  threadsArr,
  handleThreadsArr,
}: {
  id: number;
  threadsArr: { id: number }[];
  handleThreadsArr: (arr: { id: number }[]) => void;
}) {
  const deleteThread = (): void => {
    const newArr = threadsArr.filter((el) => el.id !== id);
    handleThreadsArr(newArr);
  };
  const addNewThread = (): void => {
    const id = Math.floor(Math.random() * 10000) + 1;
    handleThreadsArr([...threadsArr, { id }]);
  };
  return (
    <div className="flex">
      <div className="flex flex-col items-center  mr-3 select-none">
        <Image className="rounded-full" width={32} src={avatar} alt="avatar" />
        <div className="my-2 flex-1 w-[2px] bg-[#333638]"></div>
        {id === threadsArr[threadsArr.length - 1].id ? (
          <Image
            className="rounded-full"
            width={16}
            src={avatar}
            alt="avatar"
          />
        ) : null}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex justify-between">
          <span className="text-sm font-semibold text-[#F3F5F7]">dd3dd</span>
          {id !== 0 && (
            <button onClick={deleteThread} className="text-[#777777]">
              x
            </button>
          )}
        </div>
        <textarea
          placeholder={id === 0 ? "建立串文......" : "傳達更多想法......"}
          className="w-full h-8 text-sm overflow-hidden outline-none text-[#D9DBE0] bg-transparent placeholder:text-[#6C6C6C]"
          name=""
          id=""
        ></textarea>
        <div className="mb-4 w-fit cursor-pointer">
          <ImageIcon />
        </div>
        {id === threadsArr[threadsArr.length - 1].id && (
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
