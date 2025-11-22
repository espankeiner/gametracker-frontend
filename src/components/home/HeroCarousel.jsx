import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroCarousel.css"; // <<< 👈 Import del CSS externo

const slides = [
  { id: 1, title: "Lanzamiento: Cyber Quest", desc: "Mundo abierto futurista", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3197540/header.jpg?t=1736030080" },
  { id: 2, title: "Indie Gem: Pixel Ghost", desc: "Aventura retro pixel", img: "https://img.itch.zone/aW1nLzExNjAzNTY4LnBuZw==/original/XX6sYG.png" },
  { id: 3, title: "Estrategia: WarGrid", desc: "Peleas tácticas en tiempo real", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3703530/ddb708e490dec3e27fe531567cc0a25c0272286d/header.jpg?t=1747529911" }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-slide-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="hero-slide"
            style={{
              backgroundImage: `url(${slides[index].img})`,
            }}
          >
            <div className="hero-overlay">
              <div>
                <h3 className="hero-title">{slides[index].title}</h3>
                <p className="hero-desc">{slides[index].desc}</p>

                <div className="hero-buttons">
                  <button className="hero-btn-primary">Ver más</button>
                  <button className="hero-btn-secondary">Añadir a biblioteca</button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controles */}
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`hero-dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
