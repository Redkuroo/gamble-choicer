import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
// import GeometryBg from "@/components/GeometryBg";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jayson Walang Talo Radores",
  description: "Gamble Choicer Helper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#18180f]'}>
        {/* <GeometryBg /> */}
        {/* <CustomCursor /> */}
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
