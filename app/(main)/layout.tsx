import Header from "../ui/main/Header";
import Navbar from "../ui/main/Navbar";
import Sidebar from "../ui/main/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import BackbtnHeader from "../ui/main/Backbtn-header";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden bg-[#101010]">
      {session ? <Sidebar /> : <Header />}
      <BackbtnHeader />
      {children}
      <div className="md:hidden fixed bottom-0 w-screen h-[74px]">
        <Navbar />
      </div>
    </div>
  );
}
