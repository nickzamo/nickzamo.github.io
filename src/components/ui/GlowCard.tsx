import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function GlowCard({
  interactive = false,
  className,
  ...props
}: { interactive?: boolean } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "bg-surface/70 rounded-xl border border-white/10 p-6 backdrop-blur",
        "shadow-[0_0_40px_-24px_var(--color-cyan)]",
        interactive &&
          "hover:border-cyan/50 transition duration-200 hover:-translate-y-1 hover:shadow-[0_0_40px_-12px_var(--color-cyan)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
    />
  );
}
