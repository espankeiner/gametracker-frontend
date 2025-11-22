import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = ({ juegoId, onAdded }) => {
  const [puntuacion, setPuntuacion] = useState(5);
  const [textoResena, setTextoResena] = useState("");
  const [horasJugadas, setHorasJugadas] = useState("");
  const [dificultad, setDificultad] = useState("Media");
  const [recomendaria, setRecomendaria] = useState(false);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const formValido =
    puntuacion > 0 &&
    textoResena.trim().length > 3 &&
    horasJugadas !== "" &&
    Number(horasJugadas) >= 0;

  const enviar = async (e) => {
    e.preventDefault();
    if (!formValido) return;

    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          juegoId,
          puntuacion,
          textoResena,
          horasJugadas: Number(horasJugadas),
          dificultad,
          recomendaria,
        }),
      });

      if (!res.ok) {
        setMsg("❌ Error al enviar la reseña");
        setLoading(false);
        return;
      }

      setMsg("✔ Reseña enviada");

      // Reset
      setTextoResena("");
      setHorasJugadas("");
      setPuntuacion(5);
      setDificultad("Media");
      setRecomendaria(false);

      // Actualizar la lista en el padre
      if (onAdded) onAdded();

    } catch (err) {
      setMsg("❌ Error de conexión");
    }

    setLoading(false);
  };

  return (
    <form className="review-form" onSubmit={enviar}>
      
      <label>
        Puntuación:
        <select
          value={puntuacion}
          onChange={(e) => setPuntuacion(Number(e.target.value))}
        >
          <option value={5}>5 - Excelente</option>
          <option value={4}>4 - Muy bueno</option>
          <option value={3}>3 - Normal</option>
          <option value={2}>2 - Malo</option>
          <option value={1}>1 - Terrible</option>
        </select>
      </label>

      <label>
        Horas jugadas:
        <input
          type="number"
          min="0"
          value={horasJugadas}
          onChange={(e) => setHorasJugadas(e.target.value)}
          required
        />
      </label>

      <label>
        Dificultad:
        <select
          value={dificultad}
          onChange={(e) => setDificultad(e.target.value)}
        >
          <option value="Fácil">Fácil</option>
          <option value="Media">Media</option>
          <option value="Difícil">Difícil</option>
          <option value="Extrema">Extrema</option>
        </select>
      </label>

      <label className="check-label">
        <input
          type="checkbox"
          checked={recomendaria}
          onChange={() => setRecomendaria(!recomendaria)}
        />
        ¿Lo recomendarías?
      </label>

      <label>
        Reseña:
        <textarea
          value={textoResena}
          onChange={(e) => setTextoResena(e.target.value)}
          placeholder="Escribe aquí tu opinión..."
          required
        />
      </label>

      <button
        type="submit"
        disabled={!formValido || loading}
        className={!formValido ? "btn-disabled" : ""}
      >
        {loading ? "Enviando..." : "Publicar reseña"}
      </button>

      {msg && <p className="review-msg">{msg}</p>}
    </form>
  );
};

export default ReviewForm;
