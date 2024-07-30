import { PostProps } from "@/app/lib/definitions";
import Image from "next/image";
import avatar from "../../../../public/avatar.png";
import Link from "next/link";
import Chat from "../../svg/Chat";
import Heart from "../../svg/Heart";

export function InteractiveBtn({ type }: { type: "like" | "comment" }) {
  return (
    <div className="flex">
      {type === "like" ? (
        <div className="px-3 py-1 flex items-center rounded-[1000px] cursor-pointer hover:bg-[#1E1E1E]">
          <Heart width={16} height={16} color={"#CCCCCC"} />
          <span className="ml-1 text-sm text-[#CCCCCC]">24</span>
        </div>
      ) : (
        <div className="ml-2 px-3 py-1 flex items-center rounded-[1000px] cursor-pointer hover:bg-[#1E1E1E]">
          <Chat color={"#CCCCCC"} />
          <span className="ml-1 text-sm text-[#CCCCCC]">16</span>
        </div>
      )}
    </div>
  );
}

export default function Post({ post }: { post: PostProps }) {
  const { content, author, id: postId } = post;
  const { id, name, avatarUrl } = author;
  return (
    <Link
      href={`/@${name}/post/${postId}`}
      className="flex w-full py-3 border-t-[0.5px] first:border-none border-[#323333]"
    >
      {/* avatar div */}
      <div className="mr-3 select-none">
        <Image className="rounded-full" width={32} src={avatar} alt="avatar" />
      </div>
      <div className="flex-1">
        {/* id & time */}
        <div className="mb-1 flex items-start min-h-[21px] text-sm">
          <span className="mr-2 font-bold text-[#F3F5F7]">{name}</span>
          <span className="text-[#777777]">1小時</span>
        </div>

        {/* content */}
        <div className="mb-1 text-sm text-[#F3F5F7]">{content}</div>

        {/* interactive row */}
        <div className="ml-[-8px] flex items-center h-9">
          <InteractiveBtn type={"like"} />
          <InteractiveBtn type={"comment"} />
        </div>
      </div>
    </Link>
  );
}
