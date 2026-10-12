// src/components/ui/ProjectSlide.jsx
import { Link } from "react-router-dom";

function ProjectSlide({ project, innerRef }) {
  return (
    <article
      className="pc-slide"
      ref={innerRef}
      style={{
        "--pc-bg-desktop": `url(${project.heroImage})`,
        "--pc-bg-mobile": `url(${project.heroImageMobile})`,
        "--pc-tint": project.tint,
      }}
    >
      <div className="pc-slide__image">
        <div className="pc-slide__info glass-project">
          <div className="project-card__tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <h3 className="pc-slide__title">{project.title}</h3>
          <p className="pc-slide__desc">{project.description}</p>
          <ul className="pc-slide__tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="pc-slide__links">
            <Link to={`/proyecto/${project.slug}`} className="pc-slide__link">
              Ver proyecto →
            </Link>
            <a
              href={project.repoUrl}
              className="pc-slide__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectSlide;