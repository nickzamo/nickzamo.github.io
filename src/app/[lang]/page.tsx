import { notFound } from "next/navigation";
import { Background } from "@/components/ui/Background";
import { Header } from "@/components/navigation/Header";
import { LangAttr } from "@/components/navigation/LangAttr";
import { getDictionary } from "@/data/translations";
import { isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <LangAttr lang={lang} />
      <Background />
      <Header lang={lang} t={t.nav} />
      <main id="main" className="pt-16">
        <section id="home" className="min-h-screen" />
      </main>
    </>
  );
}
