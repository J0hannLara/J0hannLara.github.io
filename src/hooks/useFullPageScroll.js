import { useEffect, useRef, useState, useCallback } from "react";

// Debe coincidir con el @media (max-width: 900px) del CSS
const MOBILE_QUERY = "(max-width: 900px)";

const REVEAL_TARGETS =
  "h1, h2, h3, p, .stat, .skill-card, .project-card, " +
  ".timeline__item, .about__photo, .about__text, .btn, .contact__form";

const REVEAL_CLASSES = ["reveal", "reveal-left", "reveal-right", "reveal-scale"];

const isMobile = () => window.matchMedia(MOBILE_QUERY).matches;

export function useFullPageScroll(sectionIds) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Todo lo que leen los handlers vive en refs: nunca hay valores viejos
  const currentRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const sectionsRef = useRef([]);
  const observersRef = useRef([]);
  const timersRef = useRef([]);

  const later = useCallback((fn, ms) => {
    const t = setTimeout(fn, ms);
    timersRef.current.push(t);
    return t;
  }, []);

  const setCurrent = useCallback((index) => {
    if (currentRef.current === index) return;
    currentRef.current = index;
    setCurrentSection(index);
  }, []);

  // ---------- Secciones y clases reveal ----------
  const refreshSections = useCallback(() => {
    sectionsRef.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  }, [sectionIds]);

  const addRevealClasses = useCallback(() => {
    sectionsRef.current.forEach((section) => {
      section.querySelectorAll(REVEAL_TARGETS).forEach((el, i) => {
        if (REVEAL_CLASSES.some((c) => el.classList.contains(c))) return;

        el.classList.add(
          i % 3 === 0 ? "reveal" : i % 3 === 1 ? "reveal-left" : "reveal-scale"
        );
        el.classList.add(`reveal-delay-${Math.min(i + 1, 8)}`);
      });
    });
  }, []);

  // ---------- ESCRITORIO: solo la sección actual está activa ----------
  const activateOnly = useCallback((index) => {
    sectionsRef.current.forEach((s, i) => {
      s.classList.toggle("is-active", i === index);
    });
  }, []);

  // 🔧 FIX PRINCIPAL: scrollIntoView en vez de window.scrollTo.
  // En escritorio el scroller es <body>, no window, así que window.scrollTo
  // no movía nada y la sección activa quedaba fuera de pantalla.
  const jump = useCallback(
    (index) => {
      const section = sectionsRef.current[index];
      if (!section) return;

      section.scrollIntoView({ behavior: "instant", block: "start" });
      setCurrent(index);
      activateOnly(index);
    },
    [setCurrent, activateOnly]
  );

  // ---------- ESCRITORIO: salto con overlay ----------
  const moveTo = useCallback(
    (index) => {
      const sections = sectionsRef.current;
      if (index < 0 || index >= sections.length) return;
      if (index === currentRef.current) return;
      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;
      setIsTransitioning(true); // 1) entra el overlay

      later(() => {
        jump(index); // 2) salto instantáneo bajo el overlay

        later(() => {
          setIsTransitioning(false); // 3) sale el overlay

          later(() => {
            isAnimatingRef.current = false; // 4) se libera el bloqueo
          }, 250);
        }, 150);
      }, 300);
    },
    [jump, later]
  );

  // ---------- Punto único de entrada: móvil = nativo, PC = por bloques ----------
  const goTo = useCallback(
    (index) => {
      const sections = sectionsRef.current;
      if (index < 0 || index >= sections.length) return;

      if (isMobile()) {
        sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        moveTo(index);
      }
    },
    [moveTo]
  );

  // ---------- MÓVIL: scroll nativo + observers ----------
  const disconnectObservers = useCallback(() => {
    observersRef.current.forEach((o) => o.disconnect());
    observersRef.current = [];
  }, []);

  const setupMobile = useCallback(() => {
    const sections = sectionsRef.current;

    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("is-active"));
      return;
    }

    // 1) Revelar cada sección una sola vez al entrar en pantalla
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0 }
    );

    // 2) Saber qué sección cruza el centro de la pantalla (dots / nav)
    const currentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(sectionsRef.current.indexOf(entry.target));
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      revealObserver.observe(s);
      currentObserver.observe(s);
    });

    observersRef.current = [revealObserver, currentObserver];
  }, [setCurrent]);

  // ---------- Cambia entre móvil y escritorio ----------
  const applyMode = useCallback(() => {
    disconnectObservers();

    if (isMobile()) {
      isAnimatingRef.current = false;
      setIsTransitioning(false);
      setupMobile();
    } else {
      jump(currentRef.current); // alinea a la sección actual y la activa
    }
  }, [disconnectObservers, setupMobile, jump]);

  // ---------- Init + cuando cambian las secciones ----------
  const idsKey = sectionIds.join(",");

  useEffect(() => {
    refreshSections();
    addRevealClasses();
    applyMode();

    const mq = window.matchMedia(MOBILE_QUERY);
    mq.addEventListener?.("change", applyMode);

    return () => {
      mq.removeEventListener?.("change", applyMode);
      disconnectObservers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  // ---------- Listeners de escritorio (se registran una sola vez) ----------
  useEffect(() => {
    const handleWheel = (e) => {
      if (isMobile()) return;

      // Dejar que el timeline scrollee por dentro antes de cambiar de bloque
      const inner = e.target.closest?.(".timeline-wrapper");
      if (inner) {
        const atTop = inner.scrollTop <= 0;
        const atBottom =
          inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 1;
        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
      }

      // El scroller es <body>: siempre se bloquea el scroll libre
      e.preventDefault();
      if (isAnimatingRef.current) return;

      moveTo(currentRef.current + (e.deltaY > 0 ? 1 : -1));
    };

    const handleKey = (e) => {
      if (isMobile() || isAnimatingRef.current) return;

      const tag = e.target?.tagName;
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        e.target?.isContentEditable
      )
        return;

      const map = { ArrowDown: 1, ArrowUp: -1, PageDown: 1, PageUp: -1 };
      const dir = map[e.key];

      if (dir) {
        e.preventDefault();
        moveTo(currentRef.current + dir);
      } else if (e.key === "Home") {
        e.preventDefault();
        moveTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        moveTo(sectionsRef.current.length - 1);
      }
    };

    const handleTouchStart = (e) => {
      if (isMobile()) return;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isMobile() || isAnimatingRef.current) return;

      const diff = touchStartYRef.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        moveTo(currentRef.current + (diff > 0 ? 1 : -1));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [moveTo]);

  return {
    currentSection,
    isTransitioning,
    goTo,
    scrollToSection: goTo,
  };
}