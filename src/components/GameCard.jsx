import React from "react";
import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.imagenPortada} alt={game.titulo} className="game-img" />

      <div className="game-info">
        <h3 className="game-title">{game.titulo}</h3>
        <p className="game-genre">{game.genero}</p>
        <p className="game-meta">
          {game.plataforma} • {game.anioLanzamiento}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
