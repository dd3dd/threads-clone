import { FaceFrownIcon } from "@heroicons/react/24/outline";
export default function NothingMessage() {
  return (
    <div className="flex flex-col items-center mt-8">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="mt-4 text-xl text-white font-semibold">
        There is nothing here.
      </h2>
    </div>
  );
}
