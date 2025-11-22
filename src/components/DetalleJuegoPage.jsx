// src/components/DetalleJuego/DetalleJuego.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewsList from "./ReviewsList";
import ReviewForm from "./ReviewForm";
import "./DetalleJuegoPage.css";

// Solo dos rutas correctas
const API_BASES = ["/api/reviews", "/api/reseñas"];

const DetalleJuegoPage = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar juego
  useEffect(() => {
    const cargarJuego = async () => {
      try {
        setLoading(true);
        const r = await fetch(`/api/games/${id}`);
        const data = await r.json();
        setJuego(data);
      } catch (err) {
        console.error("Error al obtener juego:", err);
      } finally {
        setLoading(false);
      }
    };

    cargarJuego();
  }, [id]);

  // Cargar reseñas
  const loadReviews = async () => {
    for (const base of API_BASES) {
      try {
        const res = await fetch(`${base}/juego/${id}`);
        if (!res.ok) continue;

        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
        return;
      } catch {}
    }
    setReviews([]);
  };

  useEffect(() => {
    loadReviews();
  }, [id]);

  const handleReviewAdded = () => loadReviews();

  const promedio = reviews.length
    ? (reviews.reduce((acc, r) => acc + (r.puntuacion || 0), 0) / reviews.length).toFixed(1)
    : null;

  if (loading) return <div className="detalle-loading">Cargando...</div>;
  if (!juego) return <div className="detalle-empty">Juego no encontrado</div>;

  return (
    <div className="detalle-page">

      {/* BANNER */}
      <div
        className="detalle-banner"
        style={{
          backgroundImage: juego.imagenPortada
            ? `url(${juego.imagenPortada})`
            : "none"
        }}
      />

      <div className="detalle-container">

        {/* Sección superior */}
        <div className="detalle-top">
          <img
            className="detalle-portada"
            src={juego.imagenPortada}
            alt={juego.titulo}
          />

          <div className="detalle-meta">
            <h1 className="detalle-titulo">{juego.titulo}</h1>

            <div className="detalle-tags">
              <span>{juego.genero}</span>
              <span>{juego.plataforma}</span>
              <span>{juego.anioLanzamiento}</span>
              <span>{juego.desarrollador}</span>
            </div>

            {/* BOTÓN DE COMPLETADO */}
            <button
              className="btn-action"
              onClick={async () => {
                try {
                  const resp = await fetch(`/api/games/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ completado: !juego.completado })
                  });

                  if (resp.ok) {
                    const actualizado = await resp.json();
                    setJuego(actualizado);
                  } else {
                    alert("Error al actualizar juego");
                  }
                } catch {
                  alert("Error al conectar con backend");
                }
              }}
            >
              {juego.completado ? "Marcar como no completado" : "Marcar como completado"}
            </button>

            {/* RATING */}
            <div className="rating-badge-fixed">
              {promedio ? (
                <>⭐ {promedio} / 5 ({reviews.length} reseñas)</>
              ) : (
                "Sin reseñas todavía"
              )}
            </div>
          </div>
        </div>

        {/* Descripción */}
        <section className="detalle-desc">
          <h2>Descripción</h2>
          <p>{juego.descripcion}</p>
        </section>

        {/* Reseñas */}
        <section className="detalle-reviews">
          <h2>Reseñas</h2>

          <ReviewsList reviews={reviews} />

          <div className="divider" />

          <h3>Agregar reseña</h3>
          <ReviewForm juegoId={id} onAdded={handleReviewAdded} />
        </section>
      </div>
    </div>
  );
};

export default DetalleJuegoPage;
