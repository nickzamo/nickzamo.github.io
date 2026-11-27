import type { Locale } from "@/lib/i18n";

export type ProjectIcon = "wallet" | "dumbbell" | "folder-sync" | "hand" | "message" | "calendar";

export interface Project {
  id: string;
  icon: ProjectIcon;
  name: string;
  /** Resumen por idioma. */
  summary: Record<Locale, string>;
  /** Vacío = stack aún por definir. */
  stack: string[];
  /** Solo si el repositorio o demo es público. */
  links?: { github?: string; demo?: string };
}
