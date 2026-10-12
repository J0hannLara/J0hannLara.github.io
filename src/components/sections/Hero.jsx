import StatCard from "../ui/StatCard";

function Hero() {

  const stats = [
    { number: "Full Stack", label: "Web & Mobile" },
    { number: "IA + RAG", label: "Soluciones inteligentes" },
    { number: "BO", label: "Tecnología con impacto local" },
  ];

  return (
    <section id="inicio" className="hero">
      <div className="hero__head">
        <h1 className="hero__title reveal">
        <p className="eyebrow reveal">// desarrollador full stack</p>
          <span className="fill">
            Arquitectura, código e IA para construir mejores productos.
          </span>
        </h1>
      </div>

      <p className="hero__subtitle reveal">
        Desarrollador Full Stack enfocado en crear aplicaciones web y móviles
        escalables, diseñando desde la arquitectura y los datos hasta la
        experiencia final del usuario.
      </p>

      <div className="hero__actions reveal">
        <a href="#proyectos" className="btn btn--solid">Ver proyectos</a>
        <a href="#contacto" className="btn btn--outline">Contáctame</a>
      </div>

      <div className="hero__stats reveal">
        {stats.map((s) => (
          <StatCard key={s.number} number={s.number} label={s.label} />
        ))}
      </div>
    </section>
  );
}

export default Hero;