import React, { useState, useEffect } from "react";
import "./FormAgregarJuego.css";
import { useNavigate } from "react-router-dom";

const FormAgregarJuego = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    genero: "",
    plataforma: "",
    anioLanzamiento: "",
    desarrollador: "",
    imagenPortada: "",
    descripcion: ""
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors = {};

    Object.keys(form).forEach((key) => {
      if (!form[key] || form[key].trim() === "") {
        newErrors[key] = true; // solo marca error visual
      }
    });

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);

  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    try {
      const resp = await fetch("http://localhost:5000/api/games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!resp.ok) {
        alert("❌ Error al guardar el juego.");
        return;
      }

      alert("✅ Juego agregado correctamente.");
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar nuevo juego</h2>

      <form onSubmit={handleSubmit} className="form-box">

        {/* Inputs */}
        <input
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
          className={errors.titulo ? "input-error" : ""}
        />

        <input
          name="genero"
          placeholder="Género"
          value={form.genero}
          onChange={handleChange}
          className={errors.genero ? "input-error" : ""}
        />

        <input
          name="plataforma"
          placeholder="Plataforma"
          value={form.plataforma}
          onChange={handleChange}
          className={errors.plataforma ? "input-error" : ""}
        />

        <input
          type="number"
          name="anioLanzamiento"
          placeholder="Año de lanzamiento"
          value={form.anioLanzamiento}
          onChange={handleChange}
          className={errors.anioLanzamiento ? "input-error" : ""}
        />

        <input
          name="desarrollador"
          placeholder="Desarrollador"
          value={form.desarrollador}
          onChange={handleChange}
          className={errors.desarrollador ? "input-error" : ""}
        />

        <input
          name="imagenPortada"
          placeholder="URL imagen de portada"
          value={form.imagenPortada}
          onChange={handleChange}
          className={errors.imagenPortada ? "input-error" : ""}
        />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          className={errors.descripcion ? "input-error" : ""}
        />

        <button type="submit" className="btn-save" disabled={!isValid}>
          Guardar juego
        </button>
      </form>
    </div>
  );
};

export default FormAgregarJuego;
