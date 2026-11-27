import type { Locale } from "@/lib/i18n";

const es = {
  meta: {
    title: "Nick Zamora — Building Digital Solutions",
    description:
      "Portfolio de Nick Zamora: desarrollo web, móvil y de escritorio, infraestructura y proyectos propios.",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    stack: "Stack",
    contact: "Contacto",
    menu: "Menú",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "FULL STACK DEVELOPER · PRODUCT BUILDER",
    title: "Building Digital Solutions",
    subtitle:
      "Desarrollo productos web, móviles y de escritorio que resuelven problemas reales, combinando ingeniería, diseño y nuevas tecnologías.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contáctame",
    photoAlt: "Fotografía de Nick Zamora",
    badgeName: "Nick Zamora",
    badgeRole: "Web Development Lead",
  },
  highlights: {
    experience: { value: "15+", label: "Años de experiencia" },
    projects: { value: "6", label: "Proyectos en este portfolio" },
    fullstack: { value: "Full Stack", label: "Web · Mobile · Desktop" },
    infra: { value: "Infrastructure", label: "Cloud · Hosting · DevOps" },
  },
  about: {
    eyebrow: "ABOUT ME",
    title: "Sobre mí",
    p1: "Ingeniero en Sistemas con maestría en Tecnologías de la Información. Más de 15 años de experiencia en desarrollo web, arquitectura, infraestructura y liderazgo técnico.",
    p2: "También disfruto crear productos propios, explorar nuevas tecnologías y compartir lo que aprendo a través de la enseñanza de la programación.",
    areas: ["Liderazgo", "Arquitectura", "Desarrollo", "Enseñanza"],
    editorLabel: "Perfil en formato de código",
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "Proyectos destacados",
    lead: "Productos propios en web, móvil y escritorio.",
    preview: "Vista ilustrativa, no es una captura real",
    stackTbd: "Stack por definir",
    github: "Ver en GitHub",
    demo: "Ver demo",
  },
  experience: {
    eyebrow: "CAREER",
    title: "Experiencia profesional",
    lead: "",
  },
  stack: {
    eyebrow: "TECH STACK",
    title: "Tecnologías",
    lead: "Las herramientas con las que construyo.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      cms: "CMS",
      mobile: "Mobile",
      desktop: "Desktop",
      databases: "Bases de datos",
      infra: "Infraestructura",
      tools: "Herramientas",
    },
  },
  contact: {
    eyebrow: "LET'S CONNECT",
    title: "Construyamos algo interesante.",
    lead: "¿Tienes una idea, un proyecto o simplemente quieres conversar sobre tecnología?",
    cta: "Contáctame",
    email: "Correo",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: { rights: "Todos los derechos reservados." },
};

const en: typeof es = {
  meta: {
    title: "Nick Zamora — Building Digital Solutions",
    description:
      "Nick Zamora's portfolio: web, mobile and desktop development, infrastructure and personal projects.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "FULL STACK DEVELOPER · PRODUCT BUILDER",
    title: "Building Digital Solutions",
    subtitle:
      "I build web, mobile and desktop products that solve real problems, combining engineering, design and new technologies.",
    ctaProjects: "View projects",
    ctaContact: "Contact me",
    photoAlt: "Photo of Nick Zamora",
    badgeName: "Nick Zamora",
    badgeRole: "Web Development Lead",
  },
  highlights: {
    experience: { value: "15+", label: "Years of experience" },
    projects: { value: "6", label: "Projects in this portfolio" },
    fullstack: { value: "Full Stack", label: "Web · Mobile · Desktop" },
    infra: { value: "Infrastructure", label: "Cloud · Hosting · DevOps" },
  },
  about: {
    eyebrow: "ABOUT ME",
    title: "About me",
    p1: "Systems Engineer with a master's degree in Information Technology. 15+ years of experience in web development, architecture, infrastructure and technical leadership.",
    p2: "I also enjoy building my own products, exploring new technologies and sharing what I learn by teaching programming.",
    areas: ["Leadership", "Architecture", "Development", "Teaching"],
    editorLabel: "Profile as code",
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "Featured projects",
    lead: "Personal products across web, mobile and desktop.",
    preview: "Illustrative preview, not a real screenshot",
    stackTbd: "Stack to be defined",
    github: "View on GitHub",
    demo: "View demo",
  },
  experience: {
    eyebrow: "CAREER",
    title: "Professional experience",
    lead: "",
  },
  stack: {
    eyebrow: "TECH STACK",
    title: "Technologies",
    lead: "The tools I build with.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      cms: "CMS",
      mobile: "Mobile",
      desktop: "Desktop",
      databases: "Databases",
      infra: "Infrastructure",
      tools: "Tools",
    },
  },
  contact: {
    eyebrow: "LET'S CONNECT",
    title: "Let's build something interesting.",
    lead: "Have an idea, a project, or just want to talk tech?",
    cta: "Contact me",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: { rights: "All rights reserved." },
};

export const translations: Record<Locale, typeof es> = { es, en };
export type Dictionary = typeof es;

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale];
}
