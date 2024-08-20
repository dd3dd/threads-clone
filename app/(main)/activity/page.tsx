import NothingMessage from "@/app/ui/Nothing-message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "動態",
};
export default function ActivityPage() {
  return <NothingMessage />;
}
