import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: compatible con GitHub Pages, Cloudflare Pages y Vercel.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
