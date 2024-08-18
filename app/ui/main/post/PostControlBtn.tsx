"use client";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Dropdown from "../Dropdown";
import { PostWithAuthor } from "@/app/lib/definitions";
import Modal from "../Modal";
import Image from "next/image";
import WarningPopup from "../WarningPopup";
import { deletePost } from "@/app/lib/action";
export default function PostControlBtn({ post }: { post: PostWithAuthor }) {
  const { author, content, id } = post;
  const { name, image } = author;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWarningPopupOpen, setIsWarningPopupOpen] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  const deleteAction = deletePost.bind(null, id);

  return (
    <div
      onClick={onClick}
      className="relative w-7 h-7 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#1E1E1E]"
    >
      <EllipsisHorizontalIcon className="size-5 active:scale-[0.9] text-[#777777]" />
      {isDropdownOpen && (
        <Dropdown
          handleIsModalOpen={() => setIsModalOpen(true)}
          handleIsWarningPopupOpen={() => setIsWarningPopupOpen(true)}
        />
      )}
      {isWarningPopupOpen && (
        <WarningPopup
          onClose={() => setIsWarningPopupOpen(false)}
          deleteAction={deleteAction}
        />
      )}
      {isModalOpen && (
        <Modal
          type={"edit"}
          closeModal={() => setIsModalOpen(false)}
          postId={id}
        >
          <div className="flex">
            <div className="mr-3 select-none">
              <Image
                className="rounded-full"
                width={32}
                height={32}
                src={image}
                alt="avatar"
              />
            </div>
            <div className="flex-1 mb-2">
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-semibold text-[#F3F5F7]">
                  {name}
                </span>
              </div>
              <textarea
                defaultValue={content}
                className="w-full h-24 text-sm overflow-hidden outline-none text-[#D9DBE0] bg-transparent placeholder:text-[#6C6C6C]"
                name="content"
              ></textarea>
            </div>
          </div>
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
    </div>
  );
}
