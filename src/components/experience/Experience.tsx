import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeading } from "@/components/ui/Section";
import { experience } from "@/data/experience";
import type { Dictionary } from "@/data/translations";
import type { Locale } from "@/lib/i18n";

export function Experience({ lang, t }: { lang: Locale; t: Dictionary["experience"] }) {
  return (
    <Section id="experience">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead || undefined} />
      <ol className="border-cyan/30 relative ml-2 space-y-10 border-l">
        {experience.map((item) => (
          <li key={item.id} className="relative pl-8">
            <span
              aria-hidden
              className="bg-cyan absolute top-1.5 -left-[7px] size-3 rounded-full shadow-[0_0_14px_var(--color-cyan)]"
            />
            <h3 className="text-xl font-semibold">{item.role[lang]}</h3>
            {(item.company || item.period) && (
              <p className="text-cyan mt-1 font-mono text-xs">
                {[item.company, item.period].filter(Boolean).join(" · ")}
              </p>
            )}
            <p className="text-fg-muted mt-2 max-w-2xl">{item.summary[lang]}</p>
            {item.responsibilities && (
              <ul className="text-fg-muted mt-3 list-disc space-y-1 pl-5 text-sm">
                {item.responsibilities[lang].map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
            {item.tech && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <li key={tech}>
                    <Badge className="px-2 py-0.5 text-[11px]">{tech}</Badge>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
