import clsx from "clsx";
import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function PostListContainer({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div
      className={clsx("px-6 w-full max-w-[620px] flex flex-col items-center", {
        "mt-3 bg-[#101010]": !session,
        "bg-[#101010] md:bg-[#181818] md:rounded-3xl md:border md:border-[#323333]":
          session,
      })}
    >
      {children}
    </div>
  );
}
