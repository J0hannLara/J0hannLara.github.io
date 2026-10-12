// src/components/sections/Stack.jsx
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

function Stack() {

  return (
    <section id="stack" className="section">
      <div className="section__head">
        <p className="eyebrow">// con qué trabajo</p>
        <h2 className="section__title">Stack &amp; habilidades</h2>
        <p className="section__subtitle">
          Tecnologías y herramientas que domino para construir soluciones completas
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            level={skill.level}
            levelLabel={skill.levelLabel}
            invertIcon={skill.invertIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default Stack;