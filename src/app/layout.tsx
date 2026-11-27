import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/data/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nick Zamora — Building Digital Solutions",
  description:
    "Portfolio de Nick Zamora: desarrollo web, móvil y de escritorio, infraestructura y proyectos propios.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen">
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
