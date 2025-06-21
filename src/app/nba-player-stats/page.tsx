"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

interface Player {
  name: string;
  image: string;
  team: 'OKC' | 'Pacers';
}

const players: Player[] = [
  {
    name: "Shai Gilgeous-Alexander",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png",
    team: "OKC",
  },
  {
    name: "Luguentz Dort",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629652.png",
    team: "OKC",
  },
  {
    name: "Chet Holmgren",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631096.png",
    team: "OKC",
  },
  {
    name: "Jalen Williams",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631114.png",
    team: "OKC",
  },
  {
    name: "Isaiah Joe",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630198.png",
    team: "OKC",
  },
  {
    name: "Cason Wallace",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641703.png",
    team: "OKC",
  },
  {
    name: "Aaron Wiggins",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630598.png",
    team: "OKC",
  },
  {
    name: "Kenrich Williams",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629026.png",
    team: "OKC",
  },
  {
    name: "Jaylin Williams",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631119.png",
    team: "OKC",
  },
  {
    name: "Alex Caruso",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627936.png",
    team: "OKC",
  },
  {
    name: "Isaiah Hartenstein",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628392.png",
    team: "OKC",
  },
  // Pacers players
  {
    name: "Tyrese Haliburton",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630169.png",
    team: "Pacers",
  },
  {
    name: "Myles Turner",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626167.png",
    team: "Pacers",
  },
  {
    name: "Thomas Bryant",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628418.png",
    team: "Pacers",
  },
  {
    name: "Bennedict Mathurin",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/16394.png",
    team: "Pacers",
  },
  {
    name: "Andrew Nembhard",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/16311.png",
    team: "Pacers",
  },
  {
    name: "Aaron Nesmith",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630174.png",
    team: "Pacers",
  },
 
  {
    name: "T.J. McConnell",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/204456.png",
    team: "Pacers",
  },
  {
    name: "Obi Toppin",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630167.png",
    team: "Pacers",
  },
  {
    name: "Isaiah Jackson",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/16532.png",
    team: "Pacers",
  },
  {
    name: "Ben Sheppard",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1641762.png",
    team: "Pacers",
  },
  {
    name: "Paskal Siakam    ",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627783.png",
    team: "Pacers",
  },
];

const stats = [
  "Points", "Rebounds", "Assists", "Steals", "Blocks", "Turnovers",
  "Field Goal Made", "Field Goal Attempted", "2 Pointers Made", "3 Pointers Made"
];

type BetChoice = "OVER" | "UNDER";

export default function NbaPlayerStatsPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [betChoice, setBetChoice] = useState<BetChoice | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<'OKC' | 'Pacers'>('OKC');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleCardClick = (player: Player) => {
    setSelectedPlayer(player);
    setShowModal(true);
    setSelectedStat(null);
    setBetChoice(null);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPlayer(null);
    setSelectedStat(null);
    setBetChoice(null);
  };

  const handleBet = (choice: BetChoice) => {
    setBetChoice(choice);
    setTimeout(() => {
      audioRef.current?.play();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18180f] to-black flex flex-col items-center p-4 sm:p-8 relative">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide text-center">NBA Player Stats</h2>
      <h3 className="text-lg sm:text-xl text-yellow-300 mb-10 text-center">OKC vs Pacers — Hi Jai! Pick a Bet for me to win</h3>

      {/* Team Toggle */}
      <div className="flex gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-bold border-2 transition-all duration-200 ${selectedTeam === 'OKC' ? 'bg-yellow-400 text-black border-yellow-400 shadow' : 'bg-transparent text-yellow-300 border-yellow-300 hover:bg-yellow-400 hover:text-black'}`}
          onClick={() => setSelectedTeam('OKC')}
        >
          OKC
        </button>
        <button
          className={`px-6 py-2 rounded-full font-bold border-2 transition-all duration-200 ${selectedTeam === 'Pacers' ? 'bg-yellow-400 text-black border-yellow-400 shadow' : 'bg-transparent text-yellow-300 border-yellow-300 hover:bg-yellow-400 hover:text-black'}`}
          onClick={() => setSelectedTeam('Pacers')}
        >
          Pacers
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-8 w-full max-w-7xl">
        {players.filter(p => p.team === selectedTeam).map((player) => (
          <div
            key={player.name}
            className="bg-[#1e1e24] border border-gray-700 rounded-xl flex flex-col items-center p-4 sm:p-6 cursor-pointer hover:bg-[#2c2c38] transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/10"
            onClick={() => handleCardClick(player)}
          >
            <Image
              src={player.image}
              alt={player.name}
              width={112}
              height={112}
              className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full mb-4 border-4 border-yellow-400 shadow-lg"
            />
            <span className="text-base sm:text-lg font-semibold text-white tracking-wide text-center">
              {player.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedPlayer && !betChoice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#1e1e24] border border-yellow-400 rounded-2xl shadow-2xl w-full max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center">
                  <Image
                    src={selectedPlayer.image}
                    alt={selectedPlayer.name}
                    width={128}
                    height={128}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-yellow-400 shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-300 drop-shadow-md text-center sm:text-left">{selectedPlayer.name}</h3>
                    <p className="text-yellow-100 text-center sm:text-left">{selectedPlayer.team}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <h4 className="text-xl font-bold text-white mb-4">Select a Stat</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {stats.map(stat => (
                    <button
                      key={stat}
                      className="w-full py-2 px-4 bg-[#2a2a2a] text-white rounded-md hover:bg-yellow-400 hover:text-black transition duration-200"
                      onClick={() => setSelectedStat(stat)}
                    >
                      {stat}
                    </button>
                  ))}
                </div>
              </div>

              {selectedStat && (
                <div className="bg-black/30 px-6 py-4">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">Place your bet for <span className="text-yellow-300">{selectedStat}</span></h4>
                  <div className="flex gap-4 justify-center">
                    <button
                      className={`px-8 py-3 rounded-lg font-bold border-2 text-lg transition-all duration-200 ${betChoice === 'OVER' ? 'bg-green-500 text-white border-green-500 shadow-lg' : 'bg-transparent text-green-400 border-green-400 hover:bg-green-500 hover:text-white'}`}
                      onClick={() => handleBet('OVER')}
                    >
                      OVER
                    </button>
                    <button
                      className={`px-8 py-3 rounded-lg font-bold border-2 text-lg transition-all duration-200 ${betChoice === 'UNDER' ? 'bg-red-500 text-white border-red-500 shadow-lg' : 'bg-transparent text-red-400 border-red-400 hover:bg-red-500 hover:text-white'}`}
                      onClick={() => handleBet('UNDER')}
                    >
                      UNDER
                    </button>
                  </div>
                </div>
              )}

              <button
                className="mt-4 px-6 py-2 bg-transparent text-white rounded-md shadow font-semibold cursor-pointer border border-yellow-300 hover:bg-yellow-400 hover:text-black transition"
                onClick={handleClose}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Card */}
      {betChoice && selectedPlayer && selectedStat && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center justify-center bg-[#18180f]/90 border border-yellow-400 backdrop-blur-lg overflow-hidden transition-transform duration-300"
            style={{ width: 360, height: 420 }}
          >
            <Image
              src={selectedPlayer.image}
              alt={selectedPlayer.name}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-full border-4 border-yellow-400 shadow-lg mb-3"
            />
            <h3 className="text-3xl font-extrabold text-yellow-300 mb-1 drop-shadow-md">
              {selectedPlayer.name}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-semibold text-white">{selectedStat}</span>
              <span className="text-lg font-bold text-yellow-400">{betChoice}</span>
            </div>
            <p className="text-yellow-100 text-sm mb-4">Nice ka Jai! Thank u sa swerte!</p>
            <button
              className="mt-2 px-6 py-2 bg-transparent text-white rounded-md shadow font-semibold cursor-pointer border border-yellow-300 hover:bg-yellow-400 hover:text-black transition z-10"
              onClick={handleClose}
            >
              Close
            </button>
            <TipButton />
            <audio autoPlay src="/ok john.mp3" />
          </motion.div>
        </div>
      )}
    </div>
  );
}

function TipButton() {
  const [pos, setPos] = useState({ top: 320, left: 80 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const moveButton = () => {
    const cardWidth = 360;
    const cardHeight = 420;
    const btnWidth = 140;
    const btnHeight = 44;
    const padding = 16;
    const maxLeft = cardWidth - btnWidth - padding;
    const maxTop = cardHeight - btnHeight - padding;
    const left = Math.floor(Math.random() * maxLeft) + padding;
    const top = Math.floor(Math.random() * (maxTop - 220)) + 220;
    setPos({ top, left });
    audioRef.current?.play();
  };

  return (
    <>
      <button
        ref={btnRef}
        className="absolute z-20 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black rounded-md font-semibold shadow-md cursor-pointer border border-yellow-300 hover:scale-105 transition-all duration-200"
        style={{ top: pos.top, left: pos.left, minWidth: 140 }}
        onMouseEnter={moveButton}
        onClick={moveButton}
      >
        🎯 Ask for a Tip
      </button>
      <audio ref={audioRef} src="/nope.mp3" />
    </>
  );
}
