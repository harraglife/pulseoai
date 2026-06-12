import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { OrganizationJsonLd } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/config/site";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Agence GEO, experts en référencement IA`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · Agence GEO, experts en référencement IA`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PulseoAI, Agence GEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · Agence GEO, experts en référencement IA`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.pulseoai.fr/#organization",
  name: "PulseoAI",
  alternateName: ["Pulseo AI", "PulseoAI Agence GEO"],
  description:
    "Agence GEO (Generative Engine Optimization) basée à Nantes. Experts en référencement IA pour l'hôtellerie, la restauration et les PME. Nous aidons les entreprises à apparaître dans les réponses de ChatGPT, Claude et Gemini.",
  url: "https://www.pulseoai.fr",
  logo: "https://www.pulseoai.fr/logo.png",
  email: "contact@pulseoai.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 rue Océane",
    addressLocality: "Saint-Herblain",
    postalCode: "44800",
    addressRegion: "Pays de la Loire",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Suisse" },
    { "@type": "Country", name: "Maroc" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/pulseoai",
    "https://fr.linkedin.com/in/romaindcl",
    "https://share.google/TzGlBcQm6UkgBdpDF",
  ],
  knowsAbout: [
    "GEO",
    "Generative Engine Optimization",
    "AI Search Optimization",
    "Hotel SEO",
    "LLM Optimization",
    "Schema.org",
    "llms.txt",
  ],
  founder: [
    { "@type": "Person", name: "Romain Duclos", jobTitle: "Fondateur" },
    { "@type": "Person", name: "Sofiane Aiche", jobTitle: "Co-fondateur" },
  ],
  foundingDate: "2026-01-15",
  foundingLocation: { "@type": "Place", name: "Nantes, France" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services GEO PulseoAI",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Audit GEO & SEO",
          description:
            "Analyse complète de votre visibilité dans les moteurs IA et traditionnels.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contenu optimisé LLM",
          description:
            "Création de contenu structuré pour être cité par ChatGPT, Claude, Gemini et Perplexity.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Balisage technique Schema.org et llms.txt",
          description:
            "Implémentation des données structurées et fichiers utiles au référencement IA.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stratégie de citations IA",
          description:
            "Développement de la présence de la marque sur les sources citées par les moteurs IA.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Monitoring IA",
          description:
            "Suivi mensuel de la visibilité dans les réponses générées par les moteurs IA.",
        },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PulseoAI",
  url: "https://www.pulseoai.fr",
  description:
    "Agence SEO / GEO pour améliorer la visibilité des entreprises dans Google et les moteurs IA.",
  publisher: {
    "@id": "https://www.pulseoai.fr/#organization",
  },
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy font-sans pb-[68px] lg:pb-0">
        <GoogleTagManager gtmId="GTM-W7BR5JDJ" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
