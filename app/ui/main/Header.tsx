"use client";

import ThreadsLogo from "../svg/ThreadsLogo";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex fixed top-0 w-screen px-4 max-w-[1230px] h-[74px] select-none">
      <div className="md:hidden flex-1"></div>
      <div className="flex-1 flex items-center justify-center md:justify-start">
        <Link href={"/"}>
          <ThreadsLogo color={"#F3F5F7"} />
        </Link>
      </div>
      <div className="hidden md:flex justify-center w-full max-w-[520px]">
        <Navbar />
      </div>
      <div className="flex-1 flex items-center justify-end">
        <Link
          className="flex items-center w-16 h-[34px] px-4 rounded-[10px] active:scale-[0.90] duration-200 bg-white"
          href={"/login"}
        >
          <span className="font-semibold">登入</span>
        </Link>
      </div>
    </header>
  );
}
