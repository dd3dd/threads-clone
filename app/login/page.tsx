import Image from "next/image";
import loginImage from "../../public/login-image.png";
import igLogo from "../../public/ig-logo.png";
import chevronRight from "../../public/chevron-right.svg";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#101010]">
      <div className="absolute top-0 select-none">
        <Image width={1785} src={loginImage} alt="login-image" />
      </div>

      {/* Login Form */}
      <div className="mt-[20vh] loginForm:mt-0 relative w-full max-w-md p-8 mb-8 rounded-lg">
        <h2 className="text-md font-bold mb-6 text-center text-[#F3F5F7]">
          使用 Instagram 帳號登入
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="用戶名稱、手機號碼或電子郵件地址"
            className="w-full p-4 rounded-lg text-sm placeholder-[#777777] focus:outline-none hover:ring-1 hover:ring-[#3E3E3F] focus:ring-1 focus:ring-[#3E3E3F] bg-[#1E1E1E] text-[#F3F5F7]"
          />
          <input
            type="password"
            placeholder="密碼"
            className="w-full p-4 rounded-lg text-sm placeholder-[#777777] focus:outline-none hover:ring-1 hover:ring-[#3E3E3F] focus:ring-1 focus:ring-[#3E3E3F] bg-[#1E1E1E] text-[#F3F5F7]"
          />
          <button
            type="submit"
            className="w-full p-4 rounded-lg bg-white text-black font-bold hover:bg-gray-300"
          >
            登入
          </button>
        </form>
        <div className="flex justify-center items-center mt-4 text-gray-400">
          <span className="cursor-pointer text-sm text-[#777777]">
            忘記密碼？
          </span>
        </div>
        <div className="py-4 flex items-center">
          <div className="flex-grow border-t border-[#323333]"></div>
          <span className="flex-shrink mx-3 text-[#777777]">或</span>
          <div className="flex-grow border-t border-[#323333]"></div>
        </div>
        <div className="flex w-full mt-2 p-5 items-center justify-between rounded-2xl cursor-pointer border border-[#323333] text-[#F3F5F7]">
          <Image width={45} src={igLogo} alt="ig-logo" />
          <span className="mx-1 font-bold">使用 Instagram 帳號繼續</span>
          <Image width={16} src={chevronRight} alt="chevron-right" />
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center items-center w-full h-16 absolute bottom-0 text-xs text-[#777777]">
        <ul className="flex">
          <li className="mr-2"> &copy; 2024</li>
          <li className="mb-[-1px] mr-2 cursor-pointer hover:border-b hover:border-[#777777]">
            《Threads 使用條款》
          </li>
          <li className="mb-[-1px] mr-2 cursor-pointer hover:border-b hover:border-[#777777]">
            《隱私政策》
          </li>
          <li className="mb-[-1px] mr-2 cursor-pointer hover:border-b hover:border-[#777777]">
            《Cookie 政策》
          </li>
          <li className="mb-[-1px] mr-2 cursor-pointer hover:border-b hover:border-[#777777]">
            回報問題
          </li>
        </ul>
      </footer>
    </div>
  );
}
