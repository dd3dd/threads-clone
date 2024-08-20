import { FaceFrownIcon } from "@heroicons/react/24/outline";
export default function NothingMessage() {
  return (
    <>
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="mt-4 text-xl text-white font-semibold">
        There is nothing here.
      </h2>
    </>
  );
}
