// src/hooks/useProjectCarousel.js
import { useState, useRef, useEffect, useCallback } from "react";

const MOBILE_QUERY = "(max-width: 900px)";

export function useProjectCarousel(totalSlides) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);

  const [index, setIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  // ---------- Refs de los slides ----------
  const registerSlide = useCallback(
    (i) => (el) => {
      slideRefs.current[i] = el;
    },
    []
  );

  // ---------- Calcular offset para centrar el slide actual ----------
  const getOffset = useCallback(
    (i) => {
      const viewport = viewportRef.current;
      const slide = slideRefs.current[i];
      if (!viewport || !slide) return 0;

      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const viewportCenter = viewport.clientWidth / 2;
      return slideCenter - viewportCenter;
    },
    []
  );

  // ---------- Mover el track ----------
  const applyTransform = useCallback(
    (i, smooth = true) => {
      const track = trackRef.current;
      if (!track) return;

      const offset = getOffset(i);

      track.style.transition = smooth
        ? "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "none";
      track.style.transform = `translateX(${-offset}px)`;

      if (smooth) {
        isAnimatingRef.current = true;
        clearTimeout(track._t);
        track._t = setTimeout(() => {
          isAnimatingRef.current = false;
        }, 500);
      }
    },
    [getOffset]
  );

  // ---------- API pública ----------
  const goTo = useCallback(
    (i) => {
      if (isAnimatingRef.current) return;

      const newIndex = ((i % totalSlides) + totalSlides) % totalSlides;
      if (newIndex === index) return;

      setIndex(newIndex);
      applyTransform(newIndex, true);
    },
    [index, totalSlides, applyTransform]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // ---------- Efectos ----------
  // Re-centrar cuando cambia el índice
  useEffect(() => {
    applyTransform(index, true);
  }, [index, applyTransform]);

  // Re-centrar en resize
  useEffect(() => {
    const handleResize = () => {
      // Sin animación al redimensionar
      applyTransform(index, false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [index, applyTransform]);

  // Swipe en móvil
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let startX = 0;
    let startY = 0;

    const onStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const onEnd = (e) => {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;
      // Solo swipe horizontal
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        diffX < 0 ? next() : prev();
      }
    };

    track.addEventListener("touchstart", onStart, { passive: true });
    track.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      track.removeEventListener("touchstart", onStart);
      track.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  // Teclado (solo en PC y cuando el carrusel está visible)
  useEffect(() => {
    const handleKey = (e) => {
      if (window.matchMedia(MOBILE_QUERY).matches) return;

      const carousel = trackRef.current?.closest(".pc-carousel");
      if (!carousel) return;

      const rect = carousel.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!visible) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // ---------- Init: esperar a que las imágenes/fuentes estén listas ----------
  useEffect(() => {
    const waitReady = () => {
      const promises = [];
      if (document.fonts?.ready) promises.push(document.fonts.ready);

      const imgs = trackRef.current?.querySelectorAll("img") || [];
      imgs.forEach((img) => {
        if (!img.complete) {
          promises.push(
            new Promise((r) => {
              img.addEventListener("load", r, { once: true });
              img.addEventListener("error", r, { once: true });
            })
          );
        }
      });
      return Promise.all(promises);
    };

    waitReady().then(() => {
      // Doble rAF para asegurar que el layout está medido
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          applyTransform(0, false);
        });
      });
    });
  }, [applyTransform]);

  return {
    viewportRef,
    trackRef,
    registerSlide,
    index,
    goTo,
    next,
    prev,
  };
}