// src/components/ui/SkillCard.jsx
function SkillCard({ icon, title, description, level, levelLabel, invertIcon }) {
  return (
    <div className="skill-card glass">
      <div className="skill-card__icon">
        <img
          src={icon}
          alt={title}
          style={invertIcon ? { filter: "invert()" } : undefined}
        />
      </div>

      <h3>{title}</h3>
      <p className="skill-card__desc">{description}</p>

      <div className="skill-bar">
        <span style={{ width: `${level}%` }} data-level={`${level}%`} />
      </div>

      <span className="skill-card__level">{levelLabel}</span>
    </div>
  );
}

export default SkillCard;