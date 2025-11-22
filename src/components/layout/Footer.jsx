import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-left">
        <span>© 2025 GameTracker</span>
        <span className="footer-tagline">Tu biblioteca de juegos, tu mundo</span>
      </div>

      <div className="footer-center">
        <a href="#">Inicio</a>
        <a href="#">Biblioteca</a>
        <a href="#">Explorar</a>
        <a href="#">Estadísticas</a>
      </div>

      <div className="footer-right">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
    </div>
  </footer>
);

export default Footer;

