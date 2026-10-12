// src/hooks/useRevealAll.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useRevealAll() {
  const location = useLocation(); // ← se re-ejecuta al cambiar de ruta

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("section").forEach((s) =>
        s.classList.add("is-active")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    // Re-observar TODAS las secciones cada vez que cambia la ruta
    const sections = document.querySelectorAll("section");
    sections.forEach((s) => {
      if (!s.classList.contains("is-active")) {
        observer.observe(s);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]); // ← clave: depende de la ruta
}