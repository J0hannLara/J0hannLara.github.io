import { useEffect, useRef } from "react";

const MOBILE_QUERY = "(max-width: 900px)";

export function useParallaxBackground() {
  const pinkRef = useRef(null);
  const blueRef = useRef(null);

  useEffect(() => {
    const pink = pinkRef.current;
    const blue = blueRef.current;
    if (!pink && !blue) return;

    const mq = window.matchMedia(MOBILE_QUERY);
    let ticking = false;

    const handleScroll = () => {
      if (mq.matches || ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY || 0;
        const currentSection = Math.floor(scrollY / window.innerHeight);
        const sectionOffset = scrollY - currentSection * window.innerHeight;
        const factor = sectionOffset / window.innerHeight;

        if (pink) {
          pink.style.transform = `translateY(${factor * 50}px) rotate(${factor * 10}deg)`;
        }
        if (blue) {
          blue.style.transform = `translateY(${factor * -30}px) rotate(${factor * -5}deg)`;
        }
        ticking = false;
      });
    };

    document.addEventListener("scroll", handleScroll, true);
    return () => document.removeEventListener("scroll", handleScroll, true);
  }, []);

  return { pinkRef, blueRef };
}