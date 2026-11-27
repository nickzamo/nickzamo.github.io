import { GlowCard } from "@/components/ui/GlowCard";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/data/translations";

export function Highlights({
  t,
  projectCount,
}: {
  t: Dictionary["highlights"];
  projectCount: number;
}) {
  const items = [
    t.experience,
    { ...t.projects, value: String(projectCount) },
    t.fullstack,
    t.infra,
  ];
  return (
    <Section id="highlights" className="py-10 sm:py-14">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.label}>
            <GlowCard className="h-full p-5">
              <p className="from-cyan to-violet bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                {item.value}
              </p>
              <p className="text-fg-muted mt-1 text-sm">{item.label}</p>
            </GlowCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
