import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: {
    template: "%s • Threads",
    default: "Threads",
  },
  description: "threads clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
