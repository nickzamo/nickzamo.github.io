export interface TechGroup {
  id: "frontend" | "backend" | "cms" | "mobile" | "desktop" | "databases" | "infra" | "tools";
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    id: "frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  { id: "backend", items: ["Node.js", "PHP", "Symfony", "APIs"] },
  { id: "cms", items: ["WordPress", "ACF"] },
  { id: "mobile", items: ["React Native", "Expo"] },
  { id: "desktop", items: ["Electron", "Swift", "macOS"] },
  { id: "databases", items: ["PostgreSQL", "MySQL"] },
  { id: "infra", items: ["Docker", "Linux", "Cloudflare", "WP Engine", "Upsun"] },
  { id: "tools", items: ["Git", "GitHub", "CI/CD"] },
];
