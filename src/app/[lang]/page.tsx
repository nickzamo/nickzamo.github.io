import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Experience } from "@/components/experience/Experience";
import { Hero } from "@/components/hero/Hero";
import { Highlights } from "@/components/highlights/Highlights";
import { Header } from "@/components/navigation/Header";
import { LangAttr } from "@/components/navigation/LangAttr";
import { Projects } from "@/components/projects/Projects";
import { TechStack } from "@/components/tech-stack/TechStack";
import { Background } from "@/components/ui/Background";
import { Footer } from "@/components/ui/Footer";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/profile";
import { getDictionary } from "@/data/translations";
import { isLocale, locales } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}/`,
      languages: { es: "/es/", en: "/en/", "x-default": "/es/" },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${lang}/`,
      title: meta.title,
      description: meta.description,
      locale: lang === "es" ? "es_MX" : "en_US",
      alternateLocale: lang === "es" ? ["en_US"] : ["es_MX"],
      images: [{ url: "/images/profile.webp", width: 1152, height: 1536 }],
    },
    twitter: { card: "summary", title: meta.title, description: meta.description },
  };
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
      <main id="main">
        <Hero t={t.hero} />
        <Highlights t={t.highlights} projectCount={projects.length} />
        <About t={t.about} />
        <Projects lang={lang} t={t.projects} />
        <Experience lang={lang} t={t.experience} />
        <TechStack t={t.stack} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
