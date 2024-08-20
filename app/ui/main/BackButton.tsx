"use client";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();
  return pathname.includes("post") ? (
    <div
      onClick={() => router.back()}
      className="w-7 flex justify-center items-center cursor-pointer active:scale-[0.95]"
    >
      <ArrowUturnLeftIcon className="size-5 text-[#F3F5F7]" />
    </div>
  ) : (
    <div className="w-7"></div>
  );
}
