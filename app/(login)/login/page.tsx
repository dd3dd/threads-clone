import Image from "next/image";
import loginImage from "../../../public/login/login-image.png";
import SigninBtn from "@/app/ui/auth/SigninBtn";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-[#101010]">
      <div className="absolute top-0 select-none">
        <Image width={1785} src={loginImage} alt="login-image" />
      </div>
      <div className="mt-[20vh] loginForm:mt-0 relative w-full max-w-md p-8 mb-8 rounded-lg">
        <SigninBtn />
      </div>
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
