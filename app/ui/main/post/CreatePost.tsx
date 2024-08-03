"use client";
import Image from "next/image";
import avatar from "../../../../public/avatar.png";
import { useState } from "react";
import Modal from "../Modal";
import CreateThreads from "../CreateThreads";
export default function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [threadsArr, setThreadsArr] = useState([{ id: 0 }]);
  return (
    <div className="flex py-4 w-full">
      <div className="mr-3 select-none">
        <Image className="rounded-full" width={32} src={avatar} alt="avatar" />
      </div>
      <div
        onClick={() => setIsModalOpen(true)}
        className="h-8 flex items-center flex-1 cursor-text text-sm text-[#777777]"
      >
        建立串文......
      </div>
      {isModalOpen && (
        <Modal type={"newpost"} closeModal={(): void => setIsModalOpen(false)}>
          {threadsArr.map((el) => (
            <CreateThreads
              id={el.id}
              key={el.id}
              threadsArr={threadsArr}
              handleThreadsArr={(arr: { id: number }[]): void =>
                setThreadsArr(arr)
              }
            />
          ))}
          <div className="flex justify-end">
            <div
              className="flex justify-center items-center w-[64px] h-9 rounded-lg border cursor-pointer text-sm font-semibold
             border-[#383939] text-[#F2F4F6]"
            >
              發佈
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
