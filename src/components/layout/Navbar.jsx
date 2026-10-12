// src/components/layout/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar({ variant = "home" }) {
  return (
    <header className="nav">
      <div className="nav__inner glass">
        <Link to="/" className="logo" aria-label="Ir al inicio">
          <img src={logo} alt="" className="logo__mark"/>
          <span className="logo__text">Laradev</span>
        </Link>

        {variant === "home" ? (
          <>
            <nav className="nav__links">
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#stack">Stack</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#experiencia">Experiencia</a>
              <a href="#contacto">Contacto</a>
            </nav>
            <a href="#contacto" className="btn btn--ghost nav__cta">
              Contáctame
            </a>
          </>
        ) : (
          <Link to="/#proyectos" className="btn btn--ghost">
            ← Volver a proyectos
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;