"use client";
import { useState } from "react";
import Modal from "../Modal";
import CreateContent from "./CreateContent";
export default function OpenModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [threadsArr, setThreadsArr] = useState(["0"]);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="h-8 flex items-center flex-1 cursor-text text-sm text-[#777777]"
      >
        建立串文......
      </div>
      {isModalOpen && (
        <Modal
          type={"newpost"}
          closeModal={(): void => setIsModalOpen(false)}
          postId={""}
        >
          {threadsArr.map((el) => (
            <CreateContent
              textareaId={el}
              key={el}
              reply={false}
              threadsArr={threadsArr}
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
        </Modal>
      )}
    </>
  );
}
