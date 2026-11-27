"use client";

import Link from "next/link";
import { useEffect } from "react";
import { defaultLocale, isLocale } from "@/lib/i18n";

/** Raíz estática: redirige a /es o /en según el idioma del navegador. */
export default function Root() {
  useEffect(() => {
    const preferred = navigator.language.slice(0, 2).toLowerCase();
    const target = isLocale(preferred) ? preferred : defaultLocale;
    window.location.replace(`/${target}/`);
  }, []);

  return (
    <main className="p-8 text-center">
      <Link href={`/${defaultLocale}/`} className="text-cyan underline">
        /{defaultLocale}
      </Link>{" "}
      ·{" "}
      <Link href="/en/" className="text-cyan underline">
        /en
      </Link>
    </main>
  );
}
