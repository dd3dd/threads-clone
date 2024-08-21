"use client";
import Navbar from "./Navbar";
import Link from "next/link";
import BackButton from "./BackButton";
import LogoLink from "./Logo-link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex fixed top-0 w-full px-4 z-10 max-w-[1230px] h-[74px] select-none bg-[#101010]">
      <div className="md:hidden flex-1 flex items-center">
        {pathname.includes("post") && <BackButton />}
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-start">
        <LogoLink />
      </div>
      <div
        className={clsx("hidden md:flex justify-between items-center w-full", {
          "max-w-[520px]": !pathname.includes("post"),
          "max-w-[580px] pr-24": pathname.includes("post"),
        })}
      >
        {pathname.includes("post") && (
          <div className="w-24">
            <BackButton />
          </div>
        )}
        <div className="h-full flex-1">
          <Navbar />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <Link
          className="flex items-center w-16 h-[34px] px-4 rounded-[10px] active:scale-[0.90] duration-200 bg-white"
          href={"/login"}
        >
          <span className="text-sm font-semibold overflow-hidden">登入</span>
        </Link>
      </div>
    </header>
  );
}
