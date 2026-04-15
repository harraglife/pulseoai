import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PulseoAI · Agence GEO, experts en référencement IA",
    template: "%s · PulseoAI",
  },
  description:
    "Faites apparaître votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO à Nantes. Experts hôtellerie, restauration, PME.",
  metadataBase: new URL("https://www.pulseoai.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.pulseoai.fr",
    siteName: "PulseoAI",
    title: "PulseoAI · Agence GEO, experts en référencement IA",
    description:
      "Faites apparaître votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO à Nantes. Experts hôtellerie, restauration, PME.",
    images: [
      {
        url: "https://www.pulseoai.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "PulseoAI, Agence GEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseoAI · Agence GEO, experts en référencement IA",
    description:
      "Faites apparaître votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO à Nantes. Experts hôtellerie, restauration, PME.",
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
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PulseoAI",
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
  serviceType: [
    "Generative Engine Optimization",
    "GEO",
    "Référencement IA",
    "Visibilité IA hôtellerie",
    "Référencement IA restauration",
    "Référencement IA PME",
    "Référencement IA commerce",
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
  foundingDate: "2026",
  foundingLocation: { "@type": "Place", name: "Nantes, France" },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy font-sans pb-[68px] lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
