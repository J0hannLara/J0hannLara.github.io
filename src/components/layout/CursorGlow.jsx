import { useEffect, useRef } from "react";

function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Delegación: un solo listener en document
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, .project-card, .skill-card, .scroll-dot");
      if (target) {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursor.style.opacity = "0.8";
      }
    };
    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, .project-card, .skill-card, .scroll-dot");
      if (target) {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.opacity = "0.4";
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;