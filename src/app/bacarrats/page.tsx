"use client";
import { useState } from "react";

const choices = [
  {
    name: "Player",
    image: "/player.png", 
     // You can replace with a real image or icon if available
  },
  {
  // You can replace with a real image or icon if available
  name: "Banker",
  image: "/banker.png",
  },
];

export default function BacarratsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18180f] to-black flex flex-col items-center justify-center p-8 relative">
      <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">Bacarrats</h2>
      <h3 className="text-xl text-yellow-300 mb-10">Choose your bet</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
        {choices.map((choice) => (
          <div
            key={choice.name}
            className={`bg-[#1e1e24] border border-gray-700 rounded-xl flex flex-col items-center p-6 cursor-pointer hover:bg-[#2c2c38] transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/10 ${selected === choice.name ? 'border-yellow-400' : ''}`}
            onClick={() => setSelected(choice.name)}
          >
            <div className="w-28 h-28 flex items-center justify-center mb-4 rounded-full border-4 border-yellow-400 bg-black">
              {/* Placeholder for image/icon */}
              <span className="text-5xl text-yellow-300 font-bold">{choice.name === 'Banker' ? '🏦' : '🧑‍💼'}</span>
            </div>
            <span className="text-lg font-semibold text-white tracking-wide text-center">
              {choice.name}
            </span>
          </div>
        ))}
      </div>
      {selected && (
        <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="relative rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center justify-center bg-[#18180f]/90 border border-yellow-400 backdrop-blur-lg overflow-hidden transition-transform duration-300 min-w-[300px]">
            <h3 className="text-3xl font-extrabold text-yellow-300 mb-1 drop-shadow-md">
              {selected}
            </h3>
            <p className="text-yellow-100 text-sm mb-4">You selected <span className="font-bold">{selected}</span>!</p>
            <button
              className="mt-2 px-6 py-2 bg-transparent text-white rounded-md shadow font-semibold cursor-pointer border border-yellow-300 hover:bg-yellow-400 hover:text-black transition z-10"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 