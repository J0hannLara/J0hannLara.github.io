// src/components/layout/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar({ variant = "home" }) {
  return (
    <header className="nav">
      <div className="nav__inner glass">
        <Link to="/" className="logo" aria-label="Ir al inicio">
          <svg
            className="logo__mark"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="logo__pink"
              d="M230 40 L290 100 L160 210 L230 270 L170 330 L40 200 Z"
            />
            <path
              className="logo__blue"
              d="M275 150 L390 260 L280 400 L200 400 L200 330 L250 330 L310 260 L215 210 Z"
            />
          </svg>
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