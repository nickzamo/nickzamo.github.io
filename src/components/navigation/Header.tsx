"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { locales, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/data/translations";

const links = ["about", "projects", "experience", "stack", "contact"] as const;

export function Header({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const other = locales.find((l) => l !== lang) ?? lang;

  return (
    <header className="bg-bg/80 fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur">
      <a
        href="#main"
        className="bg-cyan text-bg sr-only rounded px-3 py-2 focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        {t.skip}
      </a>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-cyan">&lt;</span>nick.zamora<span className="text-cyan">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="text-fg-muted hover:text-cyan text-sm transition">
                {t[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`/${other}/`}
            hrefLang={other}
            lang={other}
            aria-label={`${t.language}: ${other.toUpperCase()}`}
            className="hover:border-cyan hover:text-cyan rounded-md border border-white/15 px-2.5 py-1.5 font-mono text-xs transition"
          >
            <span className="text-cyan">{lang.toUpperCase()}</span> / {other.toUpperCase()}
          </a>
          <button
            type="button"
            className="rounded-md border border-white/15 p-2 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn("bg-bg/95 border-t border-white/10 md:hidden", open ? "block" : "hidden")}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-fg-muted hover:text-cyan block py-3 text-base"
              >
                {t[id]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
