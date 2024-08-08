"use client";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const items = [
    { name: "/" },
    { name: "/search" },
    { name: "newpost" },
    { name: "/activity" },
    { name: "/profile" },
  ];
  const [isLoggedin, setIsLoggedin] = useState(true);
  const pathname = usePathname();
  const commonStyle =
    "flex justify-center items-center w-1/5 h-full cursor-pointer rounded-[8px] hover:bg-[#1C1C1C] active:scale-[0.95]";
  return (
    <nav className="flex w-full h-full bg-[#101010]">
      {items.map((item) => {
        let component;
        switch (item.name) {
          case "/":
            component = (
              <HomeIcon
                className={clsx("size-8", {
                  "text-[#F3F5F7]": pathname === "/",
                  "text-[#4D4D4D]": pathname !== "/",
                })}
              />
            );
            break;
          case "/search":
            component = (
              <MagnifyingGlassIcon
                className={clsx("size-8", {
                  "text-[#F3F5F7]": pathname === "/search",
                  "text-[#4D4D4D]": pathname !== "/search",
                })}
              />
            );
            break;
          case "newpost":
            return (
              <div className={commonStyle} key={item.name}>
                <PencilSquareIcon className="size-8 text-[#4D4D4D]" />
              </div>
            );
          case "/activity":
            if (!isLoggedin) {
              return (
                <div className={commonStyle} key={item.name}>
                  <HeartIcon className="size-8 text-[#4D4D4D]" />
                </div>
              );
            }
            component = (
              <HeartIcon
                className={clsx("size-8", {
                  "text-[#F3F5F7]": pathname === "/activity",
                  "text-[#4D4D4D]": pathname !== "/activity",
                })}
              />
            );
            break;
          case "/profile":
            if (!isLoggedin) {
              return (
                <div className={commonStyle} key={item.name}>
                  <UserIcon className="size-8 text-[#4D4D4D]" />
                </div>
              );
            }
            component = (
              <UserIcon
                className={clsx("size-8", {
                  "text-[#F3F5F7]": pathname === "/profile",
                  "text-[#4D4D4D]": pathname !== "/profile",
                })}
              />
            );
            break;
          default:
            component = null;
        }
        return (
          <Link href={item.name} className={commonStyle} key={item.name}>
            {component}
          </Link>
        );
      })}
    </nav>
  );
}
