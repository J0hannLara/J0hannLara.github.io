// src/data/projects.js

// ─── Imports de imágenes ───
// Hero (imagen horizontal principal)
import itoWeb from "../assets/ito/web.png";
import solifabWeb from "../assets/solifab/web.jpg";
import buscarapiWeb from "../assets/buscarapi/web.png";
import uywaWeb from "../assets/uywa/web.png";
import asesoriaWeb from "../assets/asesoria/web.png";
import yatiWeb from "../assets/YATI/web.png";
import luranappWeb from "../assets/luranapp/web.png";

// Hero móvil (por si quieres usarla)
import itoMovil from "../assets/ito/movil.png";
import solifabMovil from "../assets/solifab/movil.png";
import buscarapiMovil from "../assets/buscarapi/movil.png";
import uywaMovil from "../assets/uywa/movil.png";
import asesoriaMovil from "../assets/asesoria/movil.png";
import yatiMovil from "../assets/YATI/movil.png";
import luranappMovil from "../assets/luranapp/movil.png";

// Galería de capturas — DESCOMENTA cuando tengas las imágenes
import asesoria01 from "../assets/asesoria/01.gif";
import buscarapi01 from "../assets/buscarapi/01.jpeg";
import buscarapi02 from "../assets/buscarapi/02.jpeg";
import buscarapi03 from "../assets/buscarapi/03.jpeg";
import buscarapi04 from "../assets/buscarapi/04.jpeg";

// SITSOTFAB
import solifab01 from "../assets/solifab/01.jpg";
import solifab02 from "../assets/solifab/02.jpg";
import solifab03 from "../assets/solifab/03.jpg";
import solifab04 from "../assets/solifab/04.jpg";


// UYWA
import uywa01 from "../assets/uywa/01.jpeg";
import uywa02 from "../assets/uywa/02.jpeg";
import uywa03 from "../assets/uywa/03.jpeg";
import uywa04 from "../assets/uywa/04.jpeg";


// YATI
import yati01 from "../assets/YATI/01.jpeg";
import yati02 from "../assets/YATI/02.jpeg";
import yati03 from "../assets/YATI/03.jpeg";

// LURAÑAPP
import luranapp01 from "../assets/luranapp/01.jpeg";
import luranapp02 from "../assets/luranapp/02.jpeg";
import luranapp03 from "../assets/luranapp/03.jpeg";
import luranapp04 from "../assets/luranapp/04.jpeg";

// ITO
import ito01 from "../assets/ito/01.jpg";
import ito02 from "../assets/ito/02.jpg";
import ito03 from "../assets/ito/03.png";
import ito04 from "../assets/ito/04.jpg";

export const projects = [
  // ════════════════════════════════════════════
  // ITO
  // ════════════════════════════════════════════
  {
    slug: "ito",
    title: "ITO",
    tint: "#1e3a5f",
    tags: ["Sistema interno", "Web", "Landing page"],
    shortDescription:
      "Landing page y sistema web interno para la administración académica dentro del Instituto Tecnológico del Occidente.",
    tech: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
    heroImage: itoWeb,
    heroImageMobile: itoMovil,
    galleryType: "web",
    gallery: [
      { src: ito01, caption: "Inicio" },
      { src: ito02, caption: "Carreras" },
      { src: ito03, caption: "Contacto" },
      { src: ito04, caption: "Acerca de" },
    ],
    sections: [
      {
        title: "// Sobre el proyecto",
        paragraphs: [
          "Landing page institucional y sistema web interno desarrollado para el Instituto Tecnológico del Occidente.",
          "El sistema permite gestionar contenido académico y administrativo de forma centralizada.",
        ],
      },
    ],
    features: [
      "Landing page institucional responsiva.",
      "Panel administrativo para gestión de contenido.",
      "Desplegado en producción bajo dominio .edu.bo.",
      "Arquitectura Laravel + Livewire con Bootstrap.",
    ],
    demoUrl: "https://tecnologicodeloccidente.edu.bo",
    repoUrl: "#",
    prev: "luranapp",
    next: "sitsotfab",
  },

  // ════════════════════════════════════════════
  // SITSOTFAB
  // ════════════════════════════════════════════
  {
    slug: "sitsotfab",
    title: "SITSOTFAB",
    tint: "#1e3a5f",
    tags: ["Sistema interno", "Web"],
    shortDescription:
      "Sistema web interno para la gestión, asignación y seguimiento de trabajos dentro de una institución de la Fuerza Aérea Boliviana.",
    tech: ["Laravel", "Livewire", "Bootstrap", "MySQL"],
    heroImage: solifabWeb,
    heroImageMobile: solifabMovil,
    galleryType: "web",
    gallery: [
      { src: solifab01, caption: "Panel principal del sistema" },
      { src: solifab02, caption: "Gestión de usuarios" },
      { src: solifab03, caption: "Asignación y seguimiento de trabajos" },
      { src: solifab04, caption: "Detalle y control de estado de tareas" },
    ],
    sections: [
      {
        title: "// Sobre el proyecto",
        paragraphs: [
          "SITSOTFAB es un sistema web interno desarrollado para la gestión, asignación y seguimiento de trabajos dentro de una institución de la Fuerza Aérea Boliviana.",
          "Digitaliza procesos administrativos que antes se gestionaban de forma manual, incorporando módulos de gestión de usuarios, asignación de tareas y control de estados.",
          "Implementado en entorno local institucional, el sistema representó un paso importante hacia la digitalización de procesos internos.",
        ],
      },
    ],
    features: [
      "Desarrollo de sistemas administrativos con Laravel y Livewire.",
      "Gestión completa de usuarios y roles del personal.",
      "Asignación y control de trabajos internos con trazabilidad.",
      "Digitalización de procesos que antes se gestionaban manualmente.",
      "Interfaz administrativa responsiva construida con Bootstrap.",
      "Base de datos MySQL con estructura relacional optimizada.",
    ],
    demoUrl: "#",
    repoUrl: "#",
    prev: "ito",
    next: "buscarapi",
  },

  // ════════════════════════════════════════════
  // BUSCARAPI
  // ════════════════════════════════════════════
  {
    slug: "buscarapi",
    title: "BuscaRapi",
    tint: "#0d5c63",
    tags: ["Móvil + Backend", "🏆 1er Lugar"],
    shortDescription:
      "Aplicación móvil para descubrir y promocionar productos y servicios de negocios locales en Bolivia. Integra NFC, códigos QR, mapas y geolocalización.",
    tech: ["Flutter", "Laravel", "MySQL", "API REST", "Cloudinary"],
    heroImage: buscarapiWeb,
    heroImageMobile: buscarapiMovil,
    galleryType: "mobile",
    gallery: [
      { src: buscarapi01, caption: "Pantalla de inicio" },
      { src: buscarapi02, caption: "Búsqueda por categorías" },
      { src: buscarapi03, caption: "Mapa y geolocalización" },
      { src: buscarapi04, caption: "Detalle del negocio" },
    ],
    sections: [
      {
        title: "// Sobre el proyecto",
        paragraphs: [
          "BuscaRapi nace como respuesta a la necesidad de visibilizar y promocionar los negocios locales en Bolivia.",
          "La app permite descubrir productos y servicios cercanos mediante búsqueda por categorías, geolocalización y diferentes mecanismos de recomendación.",
          "El backend está construido en Laravel con una API RESTful que consume la app en Flutter, mientras que las imágenes se gestionan a través de Cloudinary.",
          "El proyecto obtuvo el primer lugar en la Feria Institucional de Innovación del Instituto Tecnológico del Occidente.",
        ],
      },
    ],
    features: [
      "Integración NFC para acceder rápidamente a la información del negocio.",
      "Lectura de códigos QR para promociones y fichas de producto.",
      "Servicios de mapas y geolocalización.",
      "Búsqueda y recomendaciones personalizadas.",
      "Almacenamiento de imágenes en la nube con Cloudinary.",
      "API RESTful en Laravel consumida por la app Flutter.",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/J0hannLara/buscarapi-app-new",
    prev: "sitsotfab",
    next: "uywa",
  },

  // ════════════════════════════════════════════
  // UYWA
  // ════════════════════════════════════════════
  {
    slug: "uywa",
    title: "UYWA",
    tint: "#7a1458",
    tags: ["Móvil + Web", "🥈 2do Lugar"],
    shortDescription:
      "Plataforma para conectar personas, dueños de mascotas, rescatistas y albergues relacionados con el cuidado animal.",
    tech: ["Flutter", "Supabase", "PostgreSQL", "GetX", "Firebase"],
    heroImage: uywaWeb,
    heroImageMobile: uywaMovil,
    galleryType: "mobile",
    gallery: [
      { src: uywa01, caption: "Feed principal" },
      { src: uywa02, caption: "Perfil de mascota" },
      { src: uywa03, caption: "Geolocalización" },
      { src: uywa04, caption: "Registro de perfil" },
    ],
    sections: [
      {
        title: "// Sobre el proyecto",
        paragraphs: [
          "UYWA es una plataforma multiplataforma pensada para conectar a todas las personas involucradas en el cuidado animal: dueños, rescatistas, albergues y adoptantes.",
          "Facilita la adopción responsable, el reporte de mascotas perdidas y la coordinación entre rescatistas y albergues.",
          "Desarrollada con Flutter y un backend en Supabase, incorpora autenticación, almacenamiento multimedia, datos en tiempo real, políticas RLS, triggers y notificaciones.",
          "Obtuvo el segundo lugar en la hackathon organizada por GDG La Paz.",
        ],
      },
    ],
    features: [
      "Autenticación con Google OAuth y gestión de usuarios.",
      "Almacenamiento multimedia en Supabase Storage.",
      "Datos en tiempo real para reportes y publicaciones.",
      "Políticas de seguridad a nivel de fila (RLS).",
      "Triggers y notificaciones automáticas.",
      "Desarrollo multiplataforma con Flutter y Flutter Web.",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/J0hannLara/uywa",
    prev: "buscarapi",
    next: "asesoria",
  },

  // ════════════════════════════════════════════
  // ASESORIA
  // ════════════════════════════════════════════
  {
    slug: "asesoria",
    title: "AsesorIA",
    tint: "#3d1e6d",
    tags: ["Web + IA", "En desarrollo"],
    shortDescription:
      "Plataforma de asistencia jurídica basada en inteligencia artificial para facilitar el acceso y consulta de información legal boliviana.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Ollama", "Qdrant"],
    heroImage: asesoriaWeb,
    heroImageMobile: asesoriaMovil,
    galleryType: "web",
    gallery: [
      { src: asesoria01, caption: "En desarrollo" },
    ],
    sections: [
      {
        title: "// Sobre el proyecto",
        paragraphs: [
          "AsesorIA es una plataforma de asistencia jurídica que utiliza inteligencia artificial para ayudar a las personas a comprender y navegar información legal boliviana.",
          "El sistema orienta frente a notificaciones y situaciones del área legal mediante respuestas contextualizadas.",
          "La arquitectura backend está construida en Python con FastAPI, integrada con un frontend en React y servicios de IA. Utiliza RAG (Retrieval-Augmented Generation), embeddings y búsqueda vectorial para consultar documentación jurídica de manera contextualizada.",
          "Ollama se encarga de los modelos LLM locales, mientras que Qdrant actúa como base de datos vectorial para los embeddings. El proyecto está actualmente en desarrollo.",
        ],
      },
    ],
    features: [
      "Arquitectura RAG con recuperación de información y generación de respuestas.",
      "Embeddings y búsqueda vectorial con Qdrant.",
      "Modelos LLM locales mediante Ollama.",
      "Backend en Python + FastAPI con migraciones Alembic.",
      "Frontend en React con interfaz accesible.",
      "Contenerización con Docker para despliegue.",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/J0hannLara/legal-ai-bolivia",
    prev: "uywa",
    next: "yati",
  },

  // ════════════════════════════════════════════
  // YATI
  // ════════════════════════════════════════════
  {
    slug: "yati",
    title: "YATI",
    tint: "#1a4d8f",
    tags: ["Móvil", "🥈 2do Lugar"],
    shortDescription:
      "Aplicación móvil orientada a la gestión y organización de contenidos y actividades educativas, con servicios en tiempo real.",
    tech: ["Flutter", "Firebase", "NoSQL", "Auth"],
    heroImage: yatiWeb,
    heroImageMobile: yatiMovil,
    galleryType: "mobile",
    gallery: [
      { src: yati01, caption: "Inicio de sesión" },
      { src: yati02, caption: "Panel de contenidos" },
      { src: yati03, caption: "Perfil de usuario" },
    ],
    sections: [
      {
        title: "// Sobre el proyecto",
        paragraphs: [
          "YATI es una aplicación móvil desarrollada para digitalizar y organizar contenidos y actividades educativas.",
          "Nace como propuesta frente a la necesidad de gestionar clases virtuales y material didáctico de forma centralizada y accesible.",
          "Construida con Flutter e integrada con servicios de Firebase para autenticación, almacenamiento y persistencia de información en una base de datos NoSQL en tiempo real.",
          "Presentada en la Feria de Innovación Tecnológica de la Universidad Pública de El Alto, donde obtuvo el segundo lugar.",
        ],
      },
    ],
    features: [
      "Autenticación de usuarios con Firebase Auth.",
      "Almacenamiento de archivos y recursos en Firebase Storage.",
      "Base de datos NoSQL con sincronización en tiempo real.",
      "Gestión de contenidos y actividades educativas.",
      "Desarrollo móvil multiplataforma con Flutter.",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/J0hannLara/yati-app",
    prev: "asesoria",
    next: "luranapp",
  },

  // ════════════════════════════════════════════
  // LURAÑAPP
  // ════════════════════════════════════════════
  {
    slug: "luranapp",
    title: "LURAÑAPP",
    tint: "#8f2d56",
    tags: ["Móvil", "Ofertas"],
    shortDescription:
      "Aplicación móvil enfocada en reunir remates, descuentos y ofertas de productos de comercios locales en Bolivia.",
    tech: ["Flutter", "Supabase", "PostgreSQL", "GetX", "RLS"],
    heroImage: luranappWeb,
    heroImageMobile: luranappMovil,
    galleryType: "mobile",
    gallery: [
      { src: luranapp01, caption: "Pantalla principal" },
      { src: luranapp02, caption: "Perfil personal" },
      { src: luranapp03, caption: "Registro de negocio" },
      { src: luranapp04, caption: "Perfil de comercio" },
    ],
    sections: [
      {
        title: "// Sobre el proyecto",
        paragraphs: [
          "LURAÑAPP es una aplicación móvil que centraliza remates, descuentos y ofertas de productos de comercios locales en Bolivia.",
          "La app conecta a los usuarios con promociones vigentes de manera simple y accesible.",
          "Desarrollada con Flutter y un backend en Supabase, aplica una arquitectura escalable por capas con separación entre repositorios, servicios y controladores.",
          "Utiliza políticas RLS (Row Level Security) para gestionar de forma segura la información de usuarios, comercios y publicaciones.",
        ],
      },
    ],
    features: [
      "Arquitectura escalable por capas: repositorios, servicios y controladores.",
      "Autenticación de usuarios y gestión de perfiles.",
      "Políticas RLS en Supabase para proteger la información.",
      "Gestión de ofertas, productos y comercios.",
      "Consumo de servicios mediante API y almacenamiento en la nube.",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/J0hannLara/luranapp",
    prev: "yati",
    next: "ito",
  },
];

// Helper para obtener un proyecto por slug
export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);