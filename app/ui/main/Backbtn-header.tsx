import SignoutBtn from "../auth/SignoutBtn";
import BackButton from "./BackButton";
import LogoLink from "./Logo-link";

export default function BackbtnHeader() {
  return (
    <>
      <header className="px-4 md:hidden flex justify-between items-center w-full h-[60px]">
        <BackButton />
        <LogoLink />
        <SignoutBtn />
      </header>
      <div className="px-4 hidden md:flex justify-center w-full h-[60px]">
        <div className="flex items-center w-[620px] h-full">
          <BackButton />
        </div>
      </div>
    </>
  );
}
