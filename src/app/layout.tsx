import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
// import GeometryBg from "@/components/GeometryBg";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

const luckyTips = [
  "Bet on green if you saw a frog today!",
  "If Jai is online, double your bet!",
  "Choose yellow if you had eggs for breakfast.",
  "Blue is lucky if it's raining outside.",
  "If you lost the last round, try Banker!",
  "Ask Jai for a tip, but he might say 'Nope!'",
  "If you hear 'OK John', your next bet is blessed.",
  "Bet on red if you wore slippers today.",
  "Purple is for legends only!",
  "If you smiled today, Player will win!"
];

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
      <body className={inter.className + ' bg-[#18180f]'}>
        {/* <GeometryBg /> */}
        {/* <CustomCursor /> */}
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
