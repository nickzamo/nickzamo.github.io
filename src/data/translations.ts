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
  footer: { rights: "All rights reserved." },
};

export const translations: Record<Locale, typeof es> = { es, en };
export type Dictionary = typeof es;

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale];
}
