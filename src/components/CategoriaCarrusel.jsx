import React from "react";
import "./CategoriaCarrusel.css";
import GameCard from "./GameCard";

const CategoriaCarrusel = ({ titulo, games = [] }) => {
  return (
    <div className="categoria-container">
      <h3 className="categoria-titulo">{titulo}</h3>

      <div className="categoria-scroller">
        {Array.isArray(games) && games.length > 0 ? (
          games.map((g) => <GameCard key={g._id} game={g} />)
        ) : (
          <p className="categoria-vacio">No hay juegos</p>
        )}
      </div>
    </div>
  );
};

export default CategoriaCarrusel;
