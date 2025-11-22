import React from "react";
import { Link } from "react-router-dom"; 
import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <Link to={`/juego/${game._id}`} className="gamecard-link">
      <div className="game-card">
        <img
          src={game.imagenPortada}
          alt={game.titulo}
          className="game-img"
          onError={(e) => {
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
          }}
        />

        <div className="game-info">
          <h3 className="game-title">{game.titulo}</h3>
          <p className="game-genre">{game.genero}</p>
          <p className="game-meta">
            {game.plataforma} • {game.anioLanzamiento}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
