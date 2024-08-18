"use client";
import { useRef } from "react";
import { createPortal } from "react-dom";
export default function WarningPopup({
  onClose,
  deleteAction,
}: {
  onClose: () => void;
  deleteAction: () => void;
}) {
  const overlay = useRef(null);
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.stopPropagation();
    if (e.target === overlay.current) {
      onClose();
    }
  };

  return createPortal(
    <div
      ref={overlay}
      onClick={onClick}
      className="fixed top-0 left-0 flex justify-center items-center w-full h-screen z-10 bg-black/60 "
    >
      <div className="flex flex-col justify-between items-center pt-8 w-96 h-60 rounded-2xl ro border-2 border-[#282828] bg-[#181818]">
        <div className="text-lg font-bold text-[#F3F5F7]">刪除貼文 ?</div>
        <div className="text-lg  text-[#777777]">
          刪除這則貼文後，即無法恢復顯示。
        </div>
        <div className="w-full h-20 flex font-bold text-lg border-t-2 select-none border-[#282828] text-[#F3F5F7]">
          <div
            onClick={onClose}
            className="cursor-pointer w-1/2 flex justify-center items-center rounded-bl-2xl border-r border-[#282828] active:bg-[#0A0A0A]"
          >
            取消
          </div>
          <form className="w-1/2" onSubmit={onClose} action={deleteAction}>
            <button
              className="cursor-pointer w-full h-full flex justify-center items-center rounded-br-2xl border-l border-[#282828] active:bg-[#0A0A0A]"
              type="submit"
            >
              刪除
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
