import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header-container ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">

        {/* LOGO */}
        <div className="header-logo">
          <div className="logo-icon">🎮</div>
          <span className="logo-text">Xenon Games</span>
        </div>

        {/* NAV DESKTOP */}
        <nav className="header-nav">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/biblioteca">Biblioteca</Link>
          <Link className="nav-link" to="/estadisticas">Estadísticas</Link>
          <Link className="nav-link" to="/explorar">Explorar</Link>
        </nav>

        {/* ACCIONES */}
        <div className="header-actions">
          <input type="text" className="header-search" placeholder="Buscar juegos..." />

          <button className="add-btn">
            <Link to="/agregar" id="linkAgregar">+ Agregar juego</Link>
          </button>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* MENU MOVIL */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/biblioteca" onClick={() => setIsOpen(false)}>Biblioteca</Link>
          <Link to="/estadisticas" onClick={() => setIsOpen(false)}>Estadísticas</Link>
          <Link to="/explorar" onClick={() => setIsOpen(false)}>Explorar</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

