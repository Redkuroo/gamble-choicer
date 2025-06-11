import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
// import GeometryBg from "@/components/GeometryBg";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[#18181b]'}>
        {/* <GeometryBg /> */}
        {/* <CustomCursor /> */}
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
