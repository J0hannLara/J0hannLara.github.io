// src/pages/ProjectDetail.jsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { projects, getProjectBySlug } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // Scroll al top al cambiar de proyecto
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  // ─── Proyecto no encontrado ───
  if (!project) {
    return (
      <>
        <Navbar variant="page" />
        <main className="project-detail">
          <div className="pd-section glass">
            <h1 className="pd-hero__title">Proyecto no encontrado</h1>
            <p className="pd-hero__subtitle">
              El proyecto que buscas no existe o fue movido.
            </p>
            <Link to="/" className="btn btn--solid">
              ← Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ─── Encontrar proyectos anterior y siguiente ───
  const prevProject = projects.find((p) => p.slug === project.prev);
  const nextProject = projects.find((p) => p.slug === project.next);

  return (
    <>
      <Navbar variant="page" />

      <main className="project-detail">
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="pd-hero">
          <div className="pd-hero__bg" style={{ "--pd-tint": project.tint }}>
            <img src={project.heroImage} alt={project.title} />
          </div>

          <div className="pd-hero__content glass">
            <div className="project-card__tags">
              {project.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <h1 className="pd-hero__title">{project.title}</h1>
            <p className="pd-hero__subtitle">{project.shortDescription}</p>

            <ul className="pd-tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="pd-hero__actions">
              {project.demoUrl && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  className="btn btn--solid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo
                </a>
              )}
              {project.repoUrl && project.repoUrl !== "#" && (
                <a
                  href={project.repoUrl}
                  className="btn btn--outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repositorio
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════ SECCIONES DE TEXTO ═══════════════ */}
        {project.sections.map((section, i) => (
          <section key={i} className="pd-section glass">
            <h2 className="pd-section__title">{section.title}</h2>
            {section.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </section>
        ))}

        {/* ═══════════════ GALERÍA ═══════════════ */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="pd-section glass">
            <h2 className="pd-section__title">// Capturas</h2>

            <div
              className={`pd-gallery ${
                project.galleryType === "mobile"
                  ? "pd-gallery--mobile"
                  : "pd-gallery--web"
              }`}
            >
              {project.gallery.map((capture, i) => (
                <figure
                  key={i}
                  className={
                    project.galleryType === "mobile" ? "pd-phone" : "pd-desktop"
                  }
                >
                  <div
                    className={
                      project.galleryType === "mobile"
                        ? "pd-phone__frame"
                        : "pd-desktop__frame"
                    }
                  >
                    {project.galleryType === "mobile" ? (
                      <div className="pd-phone__notch" />
                    ) : (
                      <div className="pd-desktop__bar">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    )}
                    <img src={capture.src} alt={capture.caption || project.title} />
                  </div>
                  {capture.caption && (
                    <figcaption>{capture.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* ═══════════════ FEATURES ═══════════════ */}
        {project.features && project.features.length > 0 && (
          <section className="pd-section glass">
            <h2 className="pd-section__title">// Características destacadas</h2>
            <ul className="pd-features">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* ═══════════════ NAVEGACIÓN ═══════════════ */}
        <nav className="pd-nav">
          {prevProject ? (
            <Link
              to={`/proyecto/${prevProject.slug}`}
              className="pd-nav__link"
            >
              ← {prevProject.title}
            </Link>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Link
              to={`/proyecto/${nextProject.slug}`}
              className="pd-nav__link"
            >
              {nextProject.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </>
  );
}

export default ProjectDetail;