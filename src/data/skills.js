// src/data/skills.js
import laravelIcon from "../assets/icons/Laravel.png";
import flutterIcon from "../assets/icons/flutter.png";
import reactIcon from "../assets/icons/react.png";
import postgresqlIcon from "../assets/icons/postgresql.png";
import apiRestIcon from "../assets/icons/api-rest.png";
import aiIcon from "../assets/icons/ai.png";

export const skills = [
  {
    id: "laravel",
    icon: laravelIcon,
    title: "Laravel / PHP",
    description: "Backend robusto y escalable",
    level: 90,
    levelLabel: "Avanzado",
    invertIcon: false,
  },
  {
    id: "flutter",
    icon: flutterIcon,
    title: "Flutter / Dart",
    description: "Aplicaciones móviles multiplataforma",
    level: 85,
    levelLabel: "Avanzado",
    invertIcon: false,
  },
  {
    id: "react",
    icon: reactIcon,
    title: "JavaScript / React",
    description: "Frontend web interactivo y moderno",
    level: 88,
    levelLabel: "Avanzado",
    invertIcon: false,
  },
  {
    id: "postgresql",
    icon: postgresqlIcon,
    title: "PostgreSQL / MySQL",
    description: "Bases de datos relacionales",
    level: 82,
    levelLabel: "Avanzado",
    invertIcon: false,
  },
  {
    id: "api-rest",
    icon: apiRestIcon,
    title: "APIs REST / Arquitectura",
    description: "Diseño e integración de servicios",
    level: 87,
    levelLabel: "Avanzado",
    invertIcon: true, // ← el que tenía filter: invert()
  },
  {
    id: "ai",
    icon: aiIcon,
    title: "IA / RAG / Ollama",
    description: "Inteligencia artificial aplicada",
    level: 80,
    levelLabel: "Especialización",
    invertIcon: true, // ← el que tenía filter: invert()
  },
];