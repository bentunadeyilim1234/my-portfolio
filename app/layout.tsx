import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-dvh w-full flex justify-center bg-[#FFF2E1] text-white ${lexend.className}`}>
        <Analytics/>
        <div className="max-w-2xl w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
