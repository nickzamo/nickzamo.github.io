import { profile } from "@/data/profile";
import type { Dictionary } from "@/data/translations";

export function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="text-fg-muted border-t border-white/10 py-8 text-center font-mono text-xs">
      © {new Date().getFullYear()} {profile.name}. {t.rights}
    </footer>
  );
}
