"use client";
import { ReactNode, useRef } from "react";
import { createThread } from "@/app/lib/action";
import { useSession } from "next-auth/react";
export default function Modal({
  type,
  closeModal,
  children,
}: {
  type: "newpost" | "reply";
  closeModal: () => void;
  children: ReactNode;
}) {
  const overlay = useRef(null);
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (e.target === overlay.current) {
      closeModal();
    }
  };
  const { data: session } = useSession();
  const createThreadWithEmail = createThread.bind(
    null,
    session?.user?.email || ""
  );
  return (
    <div
      ref={overlay}
      onClick={onClick}
      className="fixed top-0 left-0 flex justify-center items-center w-full h-screen z-10 bg-black/60 "
    >
      <div className="flex flex-col items-center">
        <div className="mb-4 font-semibold text-white">
          {type === "newpost" ? "新串文" : "回覆"}
        </div>

        <form
          onSubmit={() => closeModal()}
          action={createThreadWithEmail}
          className="px-6 pt-6 pb-4 w-screen max-w-[620px] z-20 rounded-2xl border border-[#383939] bg-[#181818]"
        >
          {children}
        </form>
      </div>
    </div>
  );
}
