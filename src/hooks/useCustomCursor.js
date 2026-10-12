import { useEffect, useRef } from "react";

export function useCustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Solo en dispositivos con mouse real
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Delegación de eventos: un solo listener para todos los elementos interactivos
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, .project-card, .skill-card, .scroll-dot"
      );
      if (!target) return;
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursor.style.opacity = "0.8";
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(
        "a, button, .project-card, .skill-card, .scroll-dot"
      );
      if (!target) return;
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.opacity = "0.4";
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

  return cursorRef;
}