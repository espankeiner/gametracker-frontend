import React, { useRef } from "react";
import "./CategoriaCarrusel.css";
import GameCard from "./GameCard";

const normalizar = (str = "") =>
  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const CategoriaCarrusel = ({ titulo, games = [] }) => {
  const carouselRef = useRef(null);

  const juegosFiltrados = games.filter(
    (g) => normalizar(g.genero) === normalizar(titulo)
  );

  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="categoria-container">
      <h3 className="categoria-titulo">{titulo}</h3>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={() => scroll(-300)}>‹</button>
        <div className="categoria-scroller" ref={carouselRef}>
          {juegosFiltrados.length > 0 ? (
            juegosFiltrados.map((g) => <GameCard key={g._id} game={g} />)
          ) : (
            <p className="categoria-vacio">No hay juegos</p>
          )}
        </div>
        <button className="carousel-btn right" onClick={() => scroll(300)}>›</button>
      </div>
    </div>
  );
};

export default CategoriaCarrusel;
