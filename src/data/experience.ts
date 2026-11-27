import type { Experience } from "@/types/experience";

// Empresas, periodos y logros se agregan solo cuando estén verificados.
export const experience: Experience[] = [
  {
    id: "web-lead",
    role: { es: "Web Development Lead", en: "Web Development Lead" },
    summary: {
      es: "Desarrollo web, mantenimiento de plataformas, liderazgo técnico, infraestructura cloud y colaboración entre equipos.",
      en: "Web development, platform maintenance, technical leadership, cloud infrastructure and cross-team collaboration.",
    },
  },
  {
    id: "teaching",
    role: { es: "Educación y tecnología", en: "Education & technology" },
    summary: {
      es: "Enseñanza de programación, bases de datos y tecnologías web.",
      en: "Teaching programming, databases and web technologies.",
    },
  },
];
