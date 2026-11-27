import { Section, SectionHeading } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";

export function Projects({ lang, t }: { lang: Locale; t: Dictionary["projects"] }) {
  return (
    <Section id="projects">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} lang={lang} t={t} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
