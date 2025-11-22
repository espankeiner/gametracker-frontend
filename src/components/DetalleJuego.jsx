import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DetalleJuego.css";

const DetalleJuego = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/games/${id}`)
      .then(r => r.json())
      .then(setJuego);
  }, [id]);

  if (!juego) return <p>Cargando...</p>;

  return (
    <div className="detalle-container">
      <div
        className="detalle-banner"
        style={{ backgroundImage: `url(${juego.imagenPortada})` }}
      ></div>

      <div className="detalle-info">
        <img className="detalle-portada" src={juego.imagenPortada} />

        <h2 className="detalle-title">{juego.titulo}</h2>

        <p className="detalle-desc">{juego.descripcion}</p>

        <p><b>Género:</b> {juego.genero}</p>
        <p><b>Plataforma:</b> {juego.plataforma}</p>
        <p><b>Lanzamiento:</b> {juego.anioLanzamiento}</p>

        <button className="detalle-btn">Añadir a biblioteca</button>
      </div>
    </div>
  );
};

export default DetalleJuego;
