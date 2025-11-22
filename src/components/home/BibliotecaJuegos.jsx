import { useEffect, useState } from "react"
import "./BibliotecaJuegos.css"
import GameCard from "../GameCard";
import CategoriaCarrusel from "../CategoriaCarrusel";

const BibliotecaJuegos = () => {
    const [juegos, setJuegos] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/games")
        .then(res => res.json())
        .then(data => setJuegos(data))
        .catch(err => console.log("Error:", err))
    }, [])

    // Normalización para evitar problemas de tildes y mayúsculas
    const normalizar = (str = "") =>
        str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return (
        <div className="library-container">
            <h2 className="library-title">📚 Mi Biblioteca de Juegos</h2>

            {/* CATEGORÍAS */}
            <CategoriaCarrusel 
                titulo="Acción" 
                games={juegos.filter(g => normalizar(g.genero) === "accion")}
            />

            <CategoriaCarrusel 
                titulo="Aventura" 
                games={juegos.filter(g => normalizar(g.genero) === "aventura")}
            />

            <CategoriaCarrusel 
                titulo="Más Jugados" 
                games={juegos}
            />

            {/* GRID GENERAL */}
            <div className="library-grid">
                {juegos.length > 0 ? (
                    juegos.map((g) => <GameCard key={g._id} game={g} />)
                ) : (
                    <p className="library-empty">No hay juegos aún.</p>
                )}
            </div>
        </div>
    )
}

export default BibliotecaJuegos;
