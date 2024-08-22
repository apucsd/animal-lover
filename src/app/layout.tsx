import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/home/HeaderSection";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/lib/Providers";
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animal Lover",
  description: "Design and Implemented by Apu Sutra Dhar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black md:px-[150px]  py-10 md:py-[100px]" lang="en">
      <body className={space_grotesk.className}>
        <Providers>
          <HeaderSection />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
