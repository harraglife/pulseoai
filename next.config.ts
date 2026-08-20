import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF en priorite, WebP en repli pour les navigateurs qui ne le lisent pas.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/blog/geo-hotels-guide-complet",
        destination: "/blog/geo-local-guide-entreprises",
        statusCode: 301,
      },
      {
        source: "/blog/geo-restaurants-guide-visibilite-ia",
        destination: "/blog/geo-local-guide-entreprises",
        statusCode: 301,
      },
      {
        source: "/blog/geo-commerces-pme-visibilite-locale",
        destination: "/blog/geo-local-guide-entreprises",
        statusCode: 301,
      },
      {
        // l'ancienne page de test de la home est devenue la page d'accueil
        source: "/test-hero",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
