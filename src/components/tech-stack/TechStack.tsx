import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { techStack } from "@/data/tech-stack";
import type { Dictionary } from "@/data/translations";

export function TechStack({ t }: { t: Dictionary["stack"] }) {
  return (
    <Section id="stack">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group) => (
          <li key={group.id}>
            <GlowCard className="h-full p-5">
              <h3 className="text-cyan mb-3 font-mono text-xs tracking-wider uppercase">
                {t.groups[group.id]}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
