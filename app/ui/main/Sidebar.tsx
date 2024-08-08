"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import clsx from "clsx";

export default function Sidebar() {
  const items = [
    { name: "/" },
    { name: "/search" },
    { name: "/activity" },
    { name: "/profile" },
  ];
  const pathname = usePathname();
  return (
    <div className="hidden md:flex flex-col items-center fixed left-0 w-[74px] h-screen">
      <div className="flex h-16 items-center justify-center md:justify-start">
        <Link href={"/"}>
          {/* threads logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#F3F5F7"
            className="bi bi-threads hover:scale-[1.07] active:scale-[0.98] duration-200"
            viewBox="0 0 16 16"
          >
            <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
          </svg>
        </Link>
      </div>
      <div className="w-full flex-1">
        <div className="flex flex-col justify-center w-full h-full bg-[#101010]">
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

              case "/activity":
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
              <Link
                href={item.name}
                className="flex justify-center items-center w-full h-[60px] cursor-pointer rounded-[8px] hover:bg-[#1C1C1C] active:scale-[0.95]"
                key={item.name}
              >
                {component}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-evenly w-full ">
        <div className="h-[54px] flex justify-center group cursor-pointer">
          {/* pin icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-pin fill-[#4D4D4D] group-hover:fill-[#F3F5F7]"
            viewBox="0 0 16 16"
          >
            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282" />
          </svg>
        </div>
        <div
          onClick={() => signOut()}
          className="h-[54px] flex justify-center group cursor-pointer"
        >
          <EllipsisHorizontalIcon className="size-7 text-[#4D4D4D] group-hover:text-[#F3F5F7]" />
        </div>
      </div>
    </div>
  );
}
