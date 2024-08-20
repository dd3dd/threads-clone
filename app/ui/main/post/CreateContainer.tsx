import Image from "next/image";
import OpenModal from "./OpenModal";
import defaultImg from "../../../../public/avatar.png";

export default function CreateContainer({
  avatar,
}: {
  avatar?: string | null;
}) {
  return (
    <div className="hidden md:flex py-4 w-full ">
      <div className="mr-3 select-none">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={avatar ?? defaultImg}
          alt="avatar"
        />
      </div>
      <OpenModal />
    </div>
  );
}
