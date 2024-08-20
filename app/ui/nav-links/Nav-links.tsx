"use client";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Modal from "../main/Modal";
import CreateContent from "../main/post/CreateContent";

const links = [
  { name: "home", href: "/", icon: HomeIcon },
  { name: "search", href: "/search", icon: MagnifyingGlassIcon },
  { name: "newpost", href: "/newpost", icon: PencilSquareIcon },
  { name: "activity", href: "/activity", icon: HeartIcon },
  { name: "profile", href: "/profile", icon: UserIcon },
];
const linksWithoutNewpost = links.filter((link) => link.name !== "newpost");
const topNavStyle = "w-1/5 h-full";
const sideNavStyle = "w-full h-[60px]";
const commonStyle =
  "flex justify-center items-center cursor-pointer rounded-[8px] hover:bg-[#1C1C1C] active:scale-[0.95]";
export default function NavLinks({ type }: { type: "top" | "side" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [threadsArr, setThreadsArr] = useState(["0"]);
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <>
      {type === "top"
        ? links.map((link) => {
            const LinkIcon = link.icon;
            return link.name === "newpost" && !session ? (
              <Link
                href={"/login"}
                key={link.name}
                className={`${commonStyle} ${topNavStyle}`}
              >
                <PencilSquareIcon className="size-8 text-[#4D4D4D]" />
              </Link>
            ) : link.name === "newpost" && session ? (
              <div
                onClick={() => setIsModalOpen(true)}
                className={`${commonStyle} ${topNavStyle}`}
              >
                <PencilSquareIcon className="size-8 text-[#4D4D4D]" />
              </div>
            ) : (
              <Link
                key={link.name}
                className={`${commonStyle} ${topNavStyle}`}
                href={link.href}
              >
                <LinkIcon
                  className={clsx("size-8", {
                    "text-[#F3F5F7]": pathname === link.href,
                    "text-[#4D4D4D]": pathname !== link.href,
                  })}
                />
              </Link>
            );
          })
        : linksWithoutNewpost.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                className={`${commonStyle} ${sideNavStyle}`}
                href={link.href}
              >
                <LinkIcon
                  className={clsx("size-8", {
                    "text-[#F3F5F7]": pathname === link.href,
                    "text-[#4D4D4D]": pathname !== link.href,
                  })}
                />
              </Link>
            );
          })}
      {/* ugly */}
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
