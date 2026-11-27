import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Dictionary } from "@/data/translations";
import { CodeEditor } from "./CodeEditor";

export function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section id="about">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="text-fg-muted min-w-0 space-y-4 text-base sm:text-lg">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {t.areas.map((area, i) => (
              <li key={area}>
                <Badge tone={i % 2 ? "violet" : "cyan"}>{area}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <CodeEditor label={t.editorLabel} />
      </div>
    </Section>
  );
}
