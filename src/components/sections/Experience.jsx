// src/components/sections/Experience.jsx
import { experience } from "../../data/experience";
import { useTimelineScroll } from "../../hooks/useTimelineScroll";
import TimelineItem from "../ui/TimelineItem";

function Experience() {
  const { wrapperRef, scrolledToBottom, handleItemHover } =
    useTimelineScroll();

  return (
    <section id="experiencia" className="section">
      <div className="section__head">
        <p className="eyebrow reveal">// mi trayectoria</p>
        <h2 className="section__title reveal">Experiencia</h2>
        <p className="section__subtitle reveal">
          Proyectos y roles que han marcado mi camino profesional
        </p>
      </div>

      <div
        ref={wrapperRef}
        className={`timeline-wrapper ${
          scrolledToBottom ? "scrolled-to-bottom" : ""
        }`}
      >
        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={i === experience.length - 1}
              onHover={handleItemHover}
            />
          ))}
        </div>

        {/* Indicador de scroll */}
        <div className="timeline-scroll-indicator">
          <span className="timeline-scroll-arrow">↓</span>
          <span className="timeline-scroll-text">Scroll para ver más</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;