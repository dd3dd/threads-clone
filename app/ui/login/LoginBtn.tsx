"use client";
import Image from "next/image";
import igLogo from "../../../public/ig-logo.png";
import chevronRight from "../../../public/chevron-right.svg";
import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <div
      onClick={() => signIn("github", { callbackUrl: "/" })}
      className="flex w-full mt-2 p-5 items-center justify-between rounded-2xl cursor-pointer border border-[#323333] text-[#F3F5F7]"
    >
      <Image width={45} src={igLogo} alt="ig-logo" />
      <span className="mx-1 font-bold">使用 Instagram 帳號繼續</span>
      <Image width={16} src={chevronRight} alt="chevron-right" />
    </div>
  );
}
