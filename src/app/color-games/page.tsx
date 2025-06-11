"use client";
import { useState } from "react";

const colors = [
  { name: "Red", color: "#ef4444" },
  { name: "Blue", color: "#3b82f6" },
  { name: "Yellow", color: "#fde047" },
  { name: "Green", color: "#22c55e" },
  { name: "Silver", color: "#e5e7eb" },
  { name: "Purple", color: "#a78bfa" },
];

export default function ColorGamesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#18180f] to-black flex flex-col items-center justify-center p-8 relative">
      <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">Color Games</h2>
      <h3 className="text-xl text-yellow-300 mb-10">Pick a color to bet on</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl">
        {colors.map((c) => (
          <div
            key={c.name}
            className={`border border-gray-700 rounded-xl flex flex-col items-center p-6 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/10 ${selected === c.name ? 'border-yellow-400' : ''}`}
            style={{ background: c.color, color: c.name === 'Silver' ? '#222' : '#fff' }}
            onClick={() => setSelected(c.name)}
          >
            <span className="text-3xl font-bold tracking-wide mb-2" style={{ color: c.name === 'Silver' ? '#222' : '#fff' }}>{c.name}</span>
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