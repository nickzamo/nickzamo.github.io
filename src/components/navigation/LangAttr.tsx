"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

/** El layout raíz es estático; esto alinea `<html lang>` con la ruta actual. */
export function LangAttr({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
