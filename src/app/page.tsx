import LuckyCharm from '@/components/LuckyCharm';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LuckyCharm />
      <div className="min-h-screen bg-[#18180f] flex flex-col items-center justify-center p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-2 text-center">Jayson <span className="italic font-semibold">Walang Talo</span> Radores</h1>
        <p className="text-gray-300 mb-10 text-base sm:text-lg text-center">Choose your favorite gambling game below! Tabanga ko Jai ihatag imong swerte!</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-8 w-full max-w-7xl">
          <Link href="/bacarrats" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-4 sm:p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-4xl sm:text-5xl mb-4">🎴</span>
            <span className="text-sm sm:text-lg font-semibold text-white tracking-wide text-center">BACARRATS</span>
          </Link>
          <Link href="/color-games" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-4 sm:p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-4xl sm:text-5xl mb-4">🎨</span>
            <span className="text-sm sm:text-lg font-semibold text-white tracking-wide text-center">COLOR GAMES</span>
          </Link>
          <Link href="/nba-game" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-4 sm:p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-4xl sm:text-5xl mb-4">🏀</span>
            <span className="text-sm sm:text-lg font-semibold text-white tracking-wide text-center">NBA GAME</span>
          </Link>
          <Link href="/nba-player-stats" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-4 sm:p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-4xl sm:text-5xl mb-4">📊</span>
            <span className="text-sm sm:text-lg font-semibold text-white tracking-wide text-center">NBA PLAYER STATS</span>
          </Link>
          <Link href="/my-account" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-4 sm:p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-4xl sm:text-5xl mb-4">👤</span>
            <span className="text-sm sm:text-lg font-semibold text-white tracking-wide text-center">MY ACCOUNT</span>
          </Link>
          <Link href="/withdrawal" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-4 sm:p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-4xl sm:text-5xl mb-4">💸</span>
            <span className="text-sm sm:text-lg font-semibold text-white tracking-wide text-center">WITHDRAWAL</span>
          </Link>
        </div>
      </div>
    </>
  );
}
