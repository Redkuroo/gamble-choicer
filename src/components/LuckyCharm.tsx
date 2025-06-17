"use client";
import { useState } from "react";
const luckyTips = [
    "Pusta og green kung nakakita kag baki karon!",
    "Kung online si Jai, dobleha imong pusta!",
    "Pili og yellow kung itlog imong pamahaw.",
    "Blue ang swerte kung nag-uwan ron ug isda.",
    "Kung pildi ka sa last round, sulayi ang Banker!",
    "Pangutan-a si Jai para tip, pero basin 'Nope!' ra iyang tubag.",
    "Kung madungog nimo ang 'OK John', panalipdan imong sunod nga pusta.",
    "Pusta og pula kung nagslippers ra ka karon.",
    "Para sa mga legend ra ang purple!",
    "Kung naka-smile ka karon, daog ang Player!",
    "Edgar antao love Salas",
  
    // Stats-related
    "Kung daghan rebounds ang player gahapon, basin OVER na karon!",
    "Kung low ang assists niya lately, UNDER lang usa ta.",
    "Kung kabalo kang selfish ang player — ayaw nag expect og assists!",
    "Daghan kaayong steal last game? Basin gikapoy na karon.",
    "Kung nakalimot ang player mu-pass, OVER sa turnovers!",
    "Kung naa sa homecourt, mas confident — OVER ta!",
    "Kung duha ra ilang scorer, chance kaayo mu-OVER sa points!",
    "Kung bago lang na-trade ang player, UNDER sa stat sa una!",
    "Kung superstar iyang kontra, maglisod na — UNDER mode!",
    "Kung murag wala sa mood ang player, automatic UNDER!",
  
    // Hatsune Miku & Hulu Live flavor
    "Kung nagpa-play si Hatsune Miku sa imong background — sure win na!",
    "Kung nagtan-aw ka'g Hulu Live karon, bet with confidence!",
    "Miku said 'BETSU!' — ayaw i-bet nang player!",
    "Nag-live si Miku? Ayaw i-UNDER, respeto sa queen!",
    "Kung Hulu naglag, ayaw lang sa pusta — bad sign na!",
    "Kung Miku gi-ON repeat nimo — swerte sa OVER sa points!",
    "Nag-dance cover ka sa World is Mine? Pusta og OVER!",
    "Kung Hulu nag-replay sa clutch shots — time to bet on steals!",
    "Kung si Miku nagsing 'Odds & Ends' — sulayi ang UNDER.",
    "Hulu Live nag-feature og buzzer beater? OVER ta sa FG attempts!",

  ];
  

export default function LuckyCharm() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState('');

  const handleClick = () => {
    const randomTip = luckyTips[Math.floor(Math.random() * luckyTips.length)];
    setTip(randomTip);
    setShow(true);
    setTimeout(() => setShow(false), 6000);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-[100] text-3xl bg-yellow-300 hover:bg-yellow-400 rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-4 border-yellow-400 animate-bounce cursor-pointer"
        title="Lucky Charm"
        style={{ boxShadow: '0 4px 24px 0 #ffe06655' }}
      >
        🍀
      </button>
      {show && (
        <div className="fixed bottom-24 right-6 z-[101] bg-[#18180f] text-yellow-200 border border-yellow-400 rounded-xl px-6 py-4 shadow-lg text-lg font-semibold animate-fade-in">
          {tip}
        </div>
      )}
    </>
  );
} 
