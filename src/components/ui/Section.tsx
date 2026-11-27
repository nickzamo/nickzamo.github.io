import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-cyan font-mono text-xs tracking-[0.2em] uppercase">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lead && <p className="text-fg-muted mt-4 text-base sm:text-lg">{lead}</p>}
    </header>
  );
}
