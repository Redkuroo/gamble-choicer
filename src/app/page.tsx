import LuckyCharm from '@/components/LuckyCharm';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LuckyCharm />
      <div className="min-h-screen bg-[#18180f] flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-light text-white mb-2">Jayson <span className="italic font-semibold">Walang Talo</span> Radores</h1>
        <p className="text-gray-300 mb-10 text-lg">Choose your favorite gambling game below! Tabanga ko Jai ihatag imong swerte!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-6xl">
          <Link href="/bacarrats" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-5xl mb-4">🎴</span>
            <span className="text-lg font-semibold text-white tracking-wide">BACARRATS</span>
          </Link>
          <Link href="/color-games" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-5xl mb-4">🎨</span>
            <span className="text-lg font-semibold text-white tracking-wide">COLOR GAMES</span>
          </Link>
          <Link href="/nba-game" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-5xl mb-4">🏀</span>
            <span className="text-lg font-semibold text-white tracking-wide">NBA GAME</span>
          </Link>
          <Link href="/nba-player-stats" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-5xl mb-4">📊</span>
            <span className="text-lg font-semibold text-white tracking-wide">NBA PLAYER STATS</span>
          </Link>
          <Link href="/my-account" className="group bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-8 transition hover:bg-[#27272f] hover:scale-105 cursor-pointer">
            <span className="text-5xl mb-4">👤</span>
            <span className="text-lg font-semibold text-white tracking-wide">MY ACCOUNT</span>
          </Link>
        </div>
      </div>
    </>
  );
}
