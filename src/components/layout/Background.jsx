import { useParallaxBackground } from "../../hooks/useParallaxBackground";

function Background() {
  const { pinkRef, blueRef } = useParallaxBackground();

  return (
    <div className="bg-scene" aria-hidden="true">
      <div ref={pinkRef} className="chevron chevron--pink"></div>
      <div ref={blueRef} className="chevron chevron--blue"></div>
      <div className="grid-overlay"></div>
    </div>
  );
}

export default Background;