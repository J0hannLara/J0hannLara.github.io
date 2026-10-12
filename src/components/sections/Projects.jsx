// src/components/sections/Projects.jsx
import { useProjectCarousel } from "../../hooks/useProjectCarousel";
import { projects } from "../../data/projects";
import ProjectSlide from "../ui/ProjectSlide";

function Projects() {
  const {
    viewportRef,
    trackRef,
    registerSlide,
    index,
    goTo,
    next,
    prev,
  } = useProjectCarousel(projects.length);

  return (
    <section id="proyectos" className="section-proyectos">
      <div className="section">
        <div className="section__head">
          <p className="eyebrow reveal">// trabajos seleccionados</p>
          <h2 className="section__title reveal">Proyectos destacados</h2>
        </div>

        <div className="pc-carousel">
          <div className="pc-viewport" ref={viewportRef}>
            <div className="pc-track" ref={trackRef}>
              {projects.map((project, i) => (
                <ProjectSlide
                  key={project.slug}
                  project={project}
                  innerRef={registerSlide(i)}
                />
              ))}
            </div>
          </div>

          <button
            className="pc-arrow pc-arrow--prev"
            onClick={prev}
            aria-label="Proyecto anterior"
          >
            ‹
          </button>
          <button
            className="pc-arrow pc-arrow--next"
            onClick={next}
            aria-label="Proyecto siguiente"
          >
            ›
          </button>

          <div className="pc-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al proyecto ${i + 1}`}
                className={i === index ? "is-active" : ""}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;