// src/hooks/useContactForm.js
import { useState } from "react";
import { contactEmail } from "../data/social";

export function useContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.target;
    const data = new FormData(form);

    const email = data.get("email")?.toString().trim();
    const subject = data.get("asunto")?.toString().trim();
    const message = data.get("mensaje")?.toString().trim();

    if (!email || !subject || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    // Construir mailto
    const body = `De: ${email}\n\n${message}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo
    window.location.href = mailto;

    // Simular éxito
    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  return { status, handleSubmit };
}