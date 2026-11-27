import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export interface Experience {
  id: string;
  role: Localized;
  /** Solo si el dato está verificado. */
  company?: string;
  period?: string;
  summary: Localized;
  responsibilities?: Record<Locale, string[]>;
  tech?: string[];
}
