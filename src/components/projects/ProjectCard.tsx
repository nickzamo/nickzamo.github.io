import { CalendarClock, Dumbbell, FolderSync, Hand, MessageCircle, Wallet } from "lucide-react";
import type { ComponentType } from "react";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import type { Dictionary } from "@/data/translations";
import type { Locale } from "@/lib/i18n";
import type { Project, ProjectIcon } from "@/types/project";

const icons: Record<ProjectIcon, ComponentType<{ size?: number; "aria-hidden"?: boolean }>> = {
  wallet: Wallet,
  dumbbell: Dumbbell,
  "folder-sync": FolderSync,
  hand: Hand,
  message: MessageCircle,
  calendar: CalendarClock,
};

export function ProjectCard({
  project,
  lang,
  t,
}: {
  project: Project;
  lang: Locale;
  t: Dictionary["projects"];
}) {
  const Icon = icons[project.icon];
  return (
    <GlowCard interactive className="flex h-full flex-col p-0">
      <div
        role="img"
        aria-label={t.preview}
        title={t.preview}
        className="from-violet/30 via-surface to-cyan/20 relative flex h-36 items-center justify-center overflow-hidden rounded-t-xl bg-gradient-to-br"
      >
        <div className="bg-grid absolute inset-0 opacity-70" />
        <Icon size={44} aria-hidden />
        <span className="text-fg-muted/80 absolute right-3 bottom-2 font-mono text-[10px]">
          {t.preview}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-fg-muted flex-1 text-sm">{project.summary[lang]}</p>
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.length ? (
            project.stack.map((tech) => (
              <li key={tech}>
                <Badge className="px-2 py-0.5 text-[11px]">{tech}</Badge>
              </li>
            ))
          ) : (
            <li>
              <Badge tone="violet" className="px-2 py-0.5 text-[11px]">
                {t.stackTbd}
              </Badge>
            </li>
          )}
        </ul>
        {project.links && (
          <div className="flex gap-4 text-sm">
            {project.links.github && (
              <a href={project.links.github} className="text-cyan hover:underline">
                {t.github}
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} className="text-cyan hover:underline">
                {t.demo}
              </a>
            )}
          </div>
        )}
      </div>
    </GlowCard>
  );
}
