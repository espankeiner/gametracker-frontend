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
          <span className="logo-text">GameTracker</span>
        </div>

        {/* NAV DESKTOP */}
        <nav className="header-nav">
          <a className="nav-link" href="#">Inicio</a>
          <a className="nav-link" href="#">Biblioteca</a>
          <a className="nav-link" href="#">Estadísitcas</a>
          <a className="nav-link" href="#">Explorar</a>
        </nav>

        {/* ACCIONES */}
        <div className="header-actions">
          <input type="text" className="header-search" placeholder="Buscar juegos..."></input>
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
          <a href="#">Inicio</a>
          <a href="#">Biblioteca</a>
          <a href="#">Estadísticas</a>
          <a href="#">Explorar</a>
        </div>
      )}
    </header>
  );
};

export default Header;
