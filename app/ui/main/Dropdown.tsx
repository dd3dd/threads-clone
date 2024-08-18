"use client";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
export default function Dropdown({
  handleIsModalOpen,
  handleIsWarningPopupOpen,
}: {
  handleIsModalOpen: () => void;
  handleIsWarningPopupOpen: () => void;
}) {
  const postOptions = [
    {
      option: "edit",
      name: "編輯",
      icon: <PencilIcon className="size-5 text-[#EEF0F2]" />,
    },
    {
      option: "delete",
      name: "刪除",
      icon: <TrashIcon className="size-5 text-[#FF3040]" />,
    },
  ];

  return (
    <div className="absolute top-8 right-0 w-60 p-2 rounded-lg border border-[#282828] bg-[#181818]">
      {postOptions.map((el) => (
        <div
          onClick={
            el.option === "edit" ? handleIsModalOpen : handleIsWarningPopupOpen
          }
          key={el.option}
          className="p-3 flex items-center justify-between rounded-lg hover:bg-[#2A2A2A]"
        >
          <span
            className={clsx("font-bold text-sm", {
              "text-[#EEF0F2]": el.option === "edit",
              "text-[#FF3040]": el.option === "delete",
            })}
          >
            {el.name}
          </span>
          {el.icon}
        </div>
      ))}
    </div>
  );
}
