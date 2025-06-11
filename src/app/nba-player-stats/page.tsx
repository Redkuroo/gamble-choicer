import { useState } from "react";

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

export default function NbaPlayerStatsPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (player: Player) => {
    setSelectedPlayer(player);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-[#18181b] flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold text-white mb-8">NBA Player Stats</h2>
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
            <img
              src={selectedPlayer.image}
              alt={selectedPlayer.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-gray-800"
            />
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              {selectedPlayer.name}
            </h3>
            <p className="text-gray-300 mb-2">Choose a stat to bet on:</p>
            <div className="flex flex-col gap-2 w-full">
              {stats.map((stat) => (
                <button
                  key={stat}
                  className="w-full py-2 px-4 bg-[#383838] text-white rounded hover:bg-[#444] transition"
                  onClick={() => alert(`You chose to bet on ${stat} for ${selectedPlayer.name}`)}
                >
                  {stat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 