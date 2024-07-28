"use client";
import Home from "../svg/Home";
import Search from "../svg/Search";
import Newpost from "../svg/Newpost";
import Heart from "../svg/Heart";
import Profile from "../svg/Profile";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="flex w-full h-full">
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
              <Search color={pathname === "/search" ? "#F3F5F7" : "#4D4D4D"} />
            );
            break;
          case "newpost":
            return (
              <div className={commonStyle} key={item.name}>
                <Newpost color={"#4D4D4D"} />
              </div>
            );
          case "/activity":
            if (!isLoggedin) {
              return (
                <div className={commonStyle} key={item.name}>
                  <Heart color={"#4D4D4D"} />
                </div>
              );
            }
            component = (
              <Heart color={pathname === "/activity" ? "#F3F5F7" : "#4D4D4D"} />
            );
            break;
          case "/profile":
            if (!isLoggedin) {
              return (
                <div className={commonStyle} key={item.name}>
                  <Profile color={"#4D4D4D"} />
                </div>
              );
            }
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
          <Link href={item.name} className={commonStyle} key={item.name}>
            {component}
          </Link>
        );
      })}
    </nav>
  );
}
