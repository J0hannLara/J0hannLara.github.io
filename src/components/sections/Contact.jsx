// src/components/sections/Contact.jsx
import { contactEmail } from "../../data/social";
import SocialLinks from "../ui/SocialLinks";
import { useContactForm } from "../../hooks/useContactForm";

function Contact() {
  const { status, handleSubmit } = useContactForm();

  const buttonText = {
    idle: "Enviar mensaje",
    sending: "Abriendo tu correo...",
    sent: "✓ Listo, revisa tu correo",
    error: "Completa todos los campos",
  }[status];

  return (
    <section id="contacto" className="section section--contact">
      <div className="contact glass">
        <div className="contact__info">
          <p className="eyebrow reveal">// hablemos</p>
          <h2 className="section__title reveal">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="section__subtitle reveal">
            Es momento de dar el siguiente paso en tu negocio
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="contact__email reveal"
            aria-label={`Enviar correo a ${contactEmail}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            <span>{contactEmail}</span>
          </a>

          <div className="reveal">
            <SocialLinks />
          </div>
        </div>

        <form className="contact__form reveal" onSubmit={handleSubmit}>
          <label>
            <span>Tu correo</span>
            <input
              type="email"
              name="email"
              placeholder="tu@correo.com"
              required
            />
          </label>

          <label>
            <span>Asunto</span>
            <input
              type="text"
              name="asunto"
              placeholder="¿De qué quieres hablar?"
              required
            />
          </label>

          <label>
            <span>Mensaje</span>
            <textarea
              name="mensaje"
              rows="4"
              placeholder="Cuéntame sobre tu proyecto..."
              required
            />
          </label>

          <button
            type="submit"
            className={`btn btn--solid contact__submit ${
              status === "sent" ? "is-sent" : ""
            } ${status === "error" ? "is-error" : ""}`}
            disabled={status === "sending"}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;