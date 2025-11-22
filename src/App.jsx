import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackgroundOmnitrix from "./components/layout/BackgroundOmnitrix";
import BibliotecaJuegos from "./components/home/BibliotecaJuegos";
import HeroCarousel from "./components/home/HeroCarousel";
import FondoOmnitrix from "./components/FondoOmnitrix";
import FormAgregarJuego from "./components/FormAgregarJuego";
import DetalleJuego from "./components/DetalleJuego";


const App = () => {
  return (
    <>
      <BackgroundOmnitrix />
      <FondoOmnitrix />
      <Header />

      <main className="pt-20 pb-16">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <div className="max-w-6xl mx-auto px-4 mt-8">
                  <BibliotecaJuegos />
                </div>
              </>
            }
          />

          <Route path="/agregar" element={<FormAgregarJuego />} />
          <Route path="/juego/:id" element={<DetalleJuego />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
