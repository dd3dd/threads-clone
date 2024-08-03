"use client";
import Link from "next/link";
import ThreadsLogo from "../svg/ThreadsLogo";
import { usePathname } from "next/navigation";
import Home from "../svg/Home";
import Search from "../svg/Search";
import Heart from "../svg/Heart";
import Profile from "../svg/Profile";
import Pin from "../svg/Pin";
import List from "../svg/List";

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
          <ThreadsLogo color={"#F3F5F7"} />
        </Link>
      </div>
      <div className="w-full flex-1">
        <div className="flex flex-col justify-center w-full h-full bg-[#101010]">
          {items.map((item) => {
            let component;
            switch (item.name) {
              case "/":
                component = (
                  <Home color={pathname === "/" ? "#F3F5F7" : "#4D4D4D"} />
                );
                break;
              case "/search":
                component = (
                  <Search
                    color={pathname === "/search" ? "#F3F5F7" : "#4D4D4D"}
                  />
                );
                break;

              case "/activity":
                component = (
                  <Heart
                    width={26}
                    height={26}
                    color={pathname === "/activity" ? "#F3F5F7" : "#4D4D4D"}
                  />
                );
                break;
              case "/profile":
                component = (
                  <Profile
                    color={pathname === "/profile" ? "#F3F5F7" : "#4D4D4D"}
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
          <Pin />
        </div>
        <div className="h-[54px] flex justify-center group cursor-pointer">
          <List />
        </div>
      </div>
    </div>
  );
}
