import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  ORG_EMAIL,
  ORG_CITY,
  ORG_REGION,
  ORG_COUNTRY,
  SAME_AS,
} from "@/config/site";

export function OrganizationJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        description: SITE_DESCRIPTION,
        email: ORG_EMAIL,
        areaServed: "FR",
        address: {
          "@type": "PostalAddress",
          addressLocality: ORG_CITY,
          addressRegion: ORG_REGION,
          addressCountry: ORG_COUNTRY,
        },
        sameAs: SAME_AS,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-geo`,
        name: "Référencement IA (GEO) & SEO",
        serviceType: "Generative Engine Optimization",
        provider: { "@id": `${SITE_URL}/#org` },
        areaServed: "FR",
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
