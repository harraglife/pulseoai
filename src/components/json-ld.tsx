import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  ORG_EMAIL,
  ORG_STREET,
  ORG_CITY,
  ORG_POSTAL,
  ORG_REGION,
  ORG_COUNTRY,
  ORG_LAT,
  ORG_LNG,
  ORG_PHONE,
  SAME_AS,
} from "@/config/site";

// Source unique des données structurées d'entité : un seul nœud organisation
// (#organization) et un seul WebSite (#website), consommés sur tout le site.
export function OrganizationJsonLd() {
  const organization: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Pulseo AI", "PulseoAI Agence GEO"],
    description:
      "Agence GEO (Generative Engine Optimization) basée à Saint-Herblain, dans la métropole nantaise. Experts en référencement IA pour l'hôtellerie, la restauration et les PME. Nous aidons les entreprises à apparaître dans les réponses de ChatGPT, Claude, Gemini et Perplexity.",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    image: `${SITE_URL}/og-image.png`,
    email: ORG_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG_STREET,
      postalCode: ORG_POSTAL,
      addressLocality: ORG_CITY,
      addressRegion: ORG_REGION,
      addressCountry: ORG_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ORG_LAT,
      longitude: ORG_LNG,
    },
    areaServed: [
      { "@type": "City", name: "Nantes" },
      { "@type": "AdministrativeArea", name: "Nantes Métropole" },
      { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Suisse" },
      { "@type": "Country", name: "Maroc" },
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
    sameAs: SAME_AS,
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

  // Téléphone émis uniquement s'il est renseigné (évite de publier un placeholder).
  if (ORG_PHONE) {
    organization.telephone = ORG_PHONE;
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Agence SEO / GEO pour améliorer la visibilité des entreprises dans Google et les moteurs IA.",
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-geo`,
        name: "Référencement IA (GEO) & SEO",
        serviceType: "Generative Engine Optimization",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Nantes" },
          { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
          { "@type": "Country", name: "France" },
        ],
        description:
          "Audit et optimisation de la visibilité d'une entreprise dans ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, ainsi que sur Google.",
        url: `${SITE_URL}/offre`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  // Note: Google supprime les rich results FAQ le 07/05/2026, mais ce balisage reste utile pour ChatGPT/Perplexity.
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
