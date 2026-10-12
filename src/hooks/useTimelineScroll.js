// src/hooks/useTimelineScroll.js
import { useEffect, useRef, useState } from "react";

export function useTimelineScroll() {
  const wrapperRef = useRef(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  // ---------- Detectar si llegó al final ----------
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = wrapper;
      const nearBottom = scrollTop + clientHeight >= scrollHeight - 50;
      setScrolledToBottom(nearBottom);
    };

    // Ejecutar al inicio por si el contenido no llena el wrapper
    handleScroll();

    wrapper.addEventListener("scroll", handleScroll, { passive: true });
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------- Auto-scroll al hacer hover en un item no visible ----------
  const handleItemHover = (itemEl) => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !itemEl) return;

    const itemRect = itemEl.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();

    const outOfView =
      itemRect.bottom > wrapperRect.bottom || itemRect.top < wrapperRect.top;

    if (outOfView) {
      itemEl.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return { wrapperRef, scrolledToBottom, handleItemHover };
}