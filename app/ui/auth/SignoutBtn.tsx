"use client";
import { signOut } from "next-auth/react";
import { UserMinusIcon } from "@heroicons/react/24/outline";
export default function SignoutBtn() {
  return (
    <div
      onClick={() => signOut()}
      className="h-[54px] flex justify-center items-center group cursor-pointer"
    >
      <UserMinusIcon className="size-7 text-[#4D4D4D] group-hover:text-[#F3F5F7]" />
    </div>
  );
}
