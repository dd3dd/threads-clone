import LogoLink from "./Logo-link";
import NavLinks from "../nav-links/Nav-links";
import SignoutBtn from "../auth/SignoutBtn";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col items-center fixed left-0 w-[74px] h-screen">
      <div className="flex h-16 items-center justify-center md:justify-start">
        <LogoLink />
      </div>
      <div className="w-full flex-1">
        <div className="flex flex-col justify-center w-full h-full bg-[#101010]">
          <NavLinks type={"side"} />
        </div>
      </div>
      <div className="flex flex-col justify-evenly w-full">
        <div className="h-[54px] flex justify-center items-center group cursor-pointer">
          {/* pin icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-pin fill-[#4D4D4D] group-hover:fill-[#F3F5F7]"
            viewBox="0 0 16 16"
          >
            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282" />
          </svg>
        </div>
        <SignoutBtn />
      </div>
    </div>
  );
}
