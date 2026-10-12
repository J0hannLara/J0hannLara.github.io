// src/components/ui/TimelineItem.jsx
import { useRef } from "react";

function TimelineItem({ item, isLast, onHover }) {
  const itemRef = useRef(null);

  const handleMouseEnter = () => {
    // Solo disparar auto-scroll en dispositivos con mouse
    if (!window.matchMedia("(hover: none)").matches) {
      onHover?.(itemRef.current);
    }
  };

  return (
    <div
      ref={itemRef}
      className="timeline__item glass"
      onMouseEnter={handleMouseEnter}
    >
      <div className="timeline__marker">
        <span className="timeline__dot" />
        <span
          className={`timeline__line ${isLast ? "timeline__line--last" : ""}`}
        />
      </div>

      <div className="timeline__content">
        <div className="timeline__header">
          <span
            className={`timeline__badge ${
              item.badgeVariant ? `timeline__badge--${item.badgeVariant}` : ""
            }`}
          >
            {item.badge}
          </span>
          <span className="timeline__date">{item.date}</span>
        </div>

        <h3 className="timeline__role">{item.role}</h3>
        <span className="timeline__company">{item.company}</span>
        <p className="timeline__desc">{item.description}</p>

        <div className="timeline__tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;