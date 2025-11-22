// src/components/DetalleJuego/ReviewsList.jsx
import React from "react";
import "./Reviews.css";

const Stars = ({ value }) => {
  const full = Math.round(value);
  return (
    <span className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "star on" : "star"}>
          ★
        </span>
      ))}
    </span>
  );
};

const ReviewsList = ({ reviews = [] }) => {
  if (!reviews.length)
    return (
      <p className="no-reviews">
        Aún no hay reseñas. Sé el primero 🙂
      </p>
    );

  return (
    <div className="reviews-list">
      {reviews.map((r) => (
        <div className="review-card" key={r._id || r.id}>
          {/* Encabezado */}
          <div className="review-head">
            <strong>{r.usuario || "Anónimo"}</strong>
            <Stars value={r.puntuacion || 0} />
          </div>

          {/* Meta */}
          <div className="review-meta">
            <span>{r.horasJugadas ? `${r.horasJugadas} h` : "-"}</span>
            <span>{r.dificultad || "-"}</span>
            <span>{r.recomendaria ? "Recomienda" : "No recomienda"}</span>
            <span className="fecha">
              {r.fechaCreacion
                ? new Date(r.fechaCreacion).toLocaleDateString()
                : ""}
            </span>
          </div>

          {/* Texto de la reseña */}
          <p className="review-text">
            {r.textoResena || "Sin comentario"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
