import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 bg-[#0A0A0A]">
      <h2 className="font-semibold text-[#F3F5F7]">很抱歉，此頁面無法顯示</h2>
      <p className="text-[#777777]">你追蹤的連結可能故障，或該頁面已遭移除。</p>
      <Link
        href="/"
        className="mt-4 rounded-lg px-5 py-2 text-sm font-bold active:scale-[0.98] bg-[#FFFFFF]"
      >
        返回
      </Link>
    </main>
  );
}
