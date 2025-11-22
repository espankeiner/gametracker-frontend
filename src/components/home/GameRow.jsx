import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="w-44 flex-shrink-0 mr-4 rounded-lg overflow-hidden bg-[#111] border border-gray-800">
      <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${game.imagenPortada})` }} />
      <div className="p-2">
        <h4 className="text-sm font-semibold">{game.titulo}</h4>
        <p className="text-xs text-gray-300">{game.desarrollador} · {game.anioLanzamiento}</p>
      </div>
    </div>
  );
};

const GameRow = ({ title, games = [] }) => {
  return (
    <section className="mt-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex overflow-x-auto py-2 scrollbar-hidden">
        {games.map(g => <GameCard key={g._id} game={g} />)}
      </div>
    </section>
  );
};

export default GameRow;
