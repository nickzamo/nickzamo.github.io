import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition duration-200 motion-reduce:transition-none";
const variants: Record<Variant, string> = {
  primary: "bg-cyan text-bg hover:shadow-[0_0_24px_-4px_var(--color-cyan)] hover:brightness-110",
  ghost:
    "border border-cyan/40 text-fg hover:border-cyan hover:bg-cyan/10 hover:shadow-[0_0_20px_-6px_var(--color-cyan)]",
};

type ButtonProps = { variant?: Variant } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  if (props.href !== undefined) {
    return <a {...props} className={classes} />;
  }
  return <button type="button" {...props} className={classes} />;
}
