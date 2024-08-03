import Header from "../ui/main/Header";
import Navbar from "../ui/main/Navbar";
import Sidebar from "../ui/main/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col items-center overflow-hidden bg-[#101010]">
      {/* <Header /> */}
      <Sidebar />
      {children}
      <div className="md:hidden fixed bottom-0 w-screen h-[74px]">
        <Navbar />
      </div>
    </div>
  );
}
