// src/components/layout/MainLayout.jsx
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";
import CursorGlow from "./CursorGlow";
import { useFullPageScroll } from "../../hooks/useFullPageScroll";
import { useCustomCursor } from "../../hooks/useCustomCursor";

const SECTION_IDS = [
  "inicio",
  "sobre-mi",
  "stack",
  "proyectos",
  "experiencia",
  "contacto",
];

function MainLayout({ children }) {
  const cursorRef = useCustomCursor();
  const { currentSection, isTransitioning, goTo } =
    useFullPageScroll(SECTION_IDS);

  // 🔑 Activar fullpage-mode SOLO mientras MainLayout está montado
  useEffect(() => {
    document.body.classList.add("fullpage-mode");
    return () => {
      document.body.classList.remove("fullpage-mode");
    };
  }, []);

  return (
    <>
      <Background />
      <CursorGlow cursorRef={cursorRef} />

      <div
        className={`section-transition-overlay ${
          isTransitioning ? "is-active" : ""
        }`}
      />

      <div className="scroll-indicator">
        {SECTION_IDS.map((id, i) => (
          <div
            key={id}
            className={`scroll-dot ${i === currentSection ? "is-active" : ""}`}
            data-label={id}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;