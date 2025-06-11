"use client";
import { useState, useRef } from "react";

interface Player {
  name: string;
  image: string;
}

const players: Player[] = [
  {
    name: "LeBron James",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
  },
  {
    name: "Stephen Curry",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
  },
  {
    name: "Giannis Antetokounmpo",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
  },
  {
    name: "Kevin Durant",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
  },
];

const stats = ["Points", "Rebounds", "Assists", "Steals", "Blocks"];

type BetChoice = "OVER" | "UNDER";

export default function NbaPlayerStatsPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [betChoice, setBetChoice] = useState<BetChoice | null>(null);
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
    }, 100); // slight delay to ensure UI updates before sound
  };

  return (
    <div className="min-h-screen bg-[#18181b] flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold text-white mb-8">NBA Player Stats</h2>
      <h3 className="text-2xl font-bold text-white mb-8">OKC vs Pacers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {players.map((player) => (
          <div
            key={player.name}
            className="bg-[#23232a] border border-gray-700 rounded-lg flex flex-col items-center p-6 cursor-pointer hover:bg-[#27272f] transition hover:scale-105"
            onClick={() => handleCardClick(player)}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-gray-800"
            />
            <span className="text-lg font-semibold text-white tracking-wide text-center">
              {player.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#23232a] rounded-lg p-8 w-full max-w-xs flex flex-col items-center relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>
            {!betChoice ? (
              <>
                <img
                  src={selectedPlayer.image}
                  alt={selectedPlayer.name}
                  className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-800"
                />
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {selectedPlayer.name}
                </h3>
                {!selectedStat ? (
                  <>
                    <p className="text-gray-300 mb-2">Choose a stat to bet on:</p>
                    <div className="flex flex-col gap-2 w-full">
                      {stats.map((stat) => (
                        <button
                          key={stat}
                          className="w-full py-2 px-4 bg-[#383838] text-white rounded hover:bg-[#444] transition"
                          onClick={() => setSelectedStat(stat)}
                        >
                          {stat}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="w-full flex flex-col items-center gap-4 mt-4">
                    <p className="text-gray-300 mb-4 text-center">
                      {`Bet on ${selectedStat} for ${selectedPlayer.name}`}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                      {/* OVER button */}
                      <button
                        className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-sm shadow border border-transparent hover:bg-gray-100 transition uppercase tracking-widest w-full sm:w-auto"
                        onClick={() => handleBet("OVER")}
                      >
                        OVER <span className="ml-2">+</span>
                      </button>
                      {/* UNDER button */}
                      <button
                        className="flex-1 flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-sm shadow border border-gray-400 hover:bg-[#23232a] transition uppercase tracking-widest w-full sm:w-auto"
                        onClick={() => handleBet("UNDER")}
                      >
                        <span className="flex items-center justify-center mr-2 text-lg font-bold">-</span>
                        UNDER
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center w-full">
                <img
                  src={selectedPlayer.image}
                  alt={selectedPlayer.name}
                  className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-800"
                />
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {selectedPlayer.name}
                </h3>
                <p className="text-gray-300 mb-1 text-center">{selectedStat}</p>
                <p className="text-gray-300 mb-6 text-center">{betChoice}</p>
                <button
                  className="mt-2 px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-100 font-semibold"
                  onClick={handleClose}
                >
                  Close
                </button>
                <audio ref={audioRef} src="/ok john.mp3" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 