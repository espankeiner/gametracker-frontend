import { useEffect, useState } from "react"
import "./BibliotecaJuegos.css"
import GameCard from "../GameCard";
import CategoriaCarrusel from "../CategoriaCarrusel";
import GameRow from "./GameRow";

const BibliotecaJuegos = () => {
    const [juegos, setJuegos] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/games")
        .then(res => res.json())
        .then(data => setJuegos(data))
        .catch(err => console.log("Error:", err))
    }, [])

    const grouped = juegos.reduce((acc, g) => {
        const key = g.genero || "Otros";
        acc[key] = acc[key] || [];
        acc[key].push(g);
        return acc;
    }, {});

    return (
        <>
            <div className="library-container">
            <h2 className="library-title">📚 Mi Biblioteca de Juegos</h2>

            <CategoriaCarrusel titulo="Acción" juegos={juegos.filter(g => g.genero === "Accion")} />
            <CategoriaCarrusel titulo="Aventura" juegos={juegos.filter(g => g.genero === "Aventura")} />
            <CategoriaCarrusel titulo="Más Jugados" juegos={juegos} />


            <div className="library-grid">
                {juegos.length > 0 ? (
                juegos.map((g) => <GameCard key={g._id} game={g} />)
                ) : (
                <p className="library-empty">No hay juegos aún.</p>
                )}
            </div>
            </div>
        </>
    )
}

export default BibliotecaJuegos
