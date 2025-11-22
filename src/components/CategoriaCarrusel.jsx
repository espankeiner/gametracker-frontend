import React from "react";
import "./CategoriaCarrusel.css";
import GameCard from "./GameCard";

// Función para normalizar strings (quita tildes y convierte a minúsculas)
const normalizar = (str = "") =>
  str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const CategoriaCarrusel = ({ titulo, games = [] }) => {
  // Filtrar juegos por categoría usando normalización
  const juegosFiltrados = games.filter(
    (g) => normalizar(g.genero) === normalizar(titulo)
  );

  return (
    <div className="categoria-container">
      <h3 className="categoria-titulo">{titulo}</h3>

      <div className="categoria-scroller">
        {juegosFiltrados.length > 0 ? (
          juegosFiltrados.map((g) => <GameCard key={g._id} game={g} />)
        ) : (
          <p className="categoria-vacio">No hay juegos</p>
        )}
      </div>
    </div>
  );
};

export default CategoriaCarrusel;

