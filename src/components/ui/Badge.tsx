import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "cyan" | "violet" | "neutral";

const tones: Record<Tone, string> = {
  cyan: "border-cyan/40 text-cyan bg-cyan/10",
  violet: "border-violet/40 text-[#d3b8ff] bg-violet/10",
  neutral: "border-white/15 text-fg-muted bg-white/5",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: { tone?: Tone } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs",
        tones[tone],
        className,
      )}
    />
  );
}
