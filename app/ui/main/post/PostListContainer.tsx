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
        "mt-[80px] bg-[#101010]": !session,
        "mt-[60px] bg-[#181818] rounded-3xl border border-[#323333]": session,
      })}
    >
      {children}
    </div>
  );
}
