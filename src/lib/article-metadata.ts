export type ArticleMention = {
  "@type": "Thing";
  name: string;
  url: string;
};

export type ArticleAbout = {
  "@type": "Thing";
  name: string;
  description: string;
};

export type ArticleHowTo = {
  "@context": "https://schema.org";
  "@type": "HowTo";
  name: string;
  description: string;
  totalTime: string;
  inLanguage: "fr-FR";
  step: Array<{
    "@type": "HowToStep";
    position: number;
    name: string;
    text: string;
  }>;
};

export type ArticleSchemaEnhancement = {
  about?: ArticleAbout;
  mentions?: ArticleMention[];
  howTo?: ArticleHowTo;
};

const mentionUrls = {
  ChatGPT: "https://chat.openai.com",
  OpenAI: "https://openai.com",
  Google: "https://www.google.com",
  "Google AI Overviews": "https://www.google.com/search/howsearchworks/",
  Gemini: "https://gemini.google.com",
  Claude: "https://claude.ai",
  Perplexity: "https://www.perplexity.ai",
  "Schema.org": "https://schema.org",
  "JSON-LD": "https://json-ld.org",
  Wikipedia: "https://www.wikipedia.org",
  Reddit: "https://www.reddit.com",
  "Google Maps": "https://www.google.com/maps",
  TripAdvisor: "https://www.tripadvisor.com",
  Booking: "https://www.booking.com",
  "Google Hotels": "https://www.google.com/travel/hotels",
  "robots.txt":
    "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
  "llms.txt": "https://llmstxt.org",
  marketplaces: "https://en.wikipedia.org/wiki/Online_marketplace",
  OTA: "https://en.wikipedia.org/wiki/Online_travel_agency",
} as const;

function buildMentions(names: Array<keyof typeof mentionUrls>): ArticleMention[] {
  return names.map((name) => ({
    "@type": "Thing",
    name,
    url: mentionUrls[name],
  }));
}

export const articleMetadataBySlug: Record<string, ArticleSchemaEnhancement> = {
  "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini": {
    about: {
      "@type": "Thing",
      name: "SEO et GEO",
      description:
        "Comprendre comment le SEO et le GEO se complètent pour rendre une entreprise visible sur Google et dans les moteurs IA.",
    },
    mentions: buildMentions(["ChatGPT", "Gemini", "Google", "Google AI Overviews"]),
  },
  "geo-2026-pourquoi-votre-entreprise-ne-peut-plus-ignorer-les-moteurs-ia": {
    about: {
      "@type": "Thing",
      name: "GEO 2026",
      description:
        "Comprendre pourquoi la visibilité dans les moteurs IA devient un levier d’acquisition stratégique en 2026.",
    },
    mentions: buildMentions(["ChatGPT", "Perplexity", "Gemini", "Claude"]),
  },
  "apparaitre-chatgpt-client-cherche-entreprise": {
    about: {
      "@type": "Thing",
      name: "Visibilité ChatGPT",
      description:
        "Comprendre comment une entreprise peut apparaître dans les réponses ChatGPT quand un client cherche une solution.",
    },
    mentions: buildMentions(["ChatGPT", "OpenAI"]),
  },
  "audit-seo-geo-visibilite-ia": {
    about: {
      "@type": "Thing",
      name: "Audit SEO GEO",
      description:
        "Méthode pour auditer la visibilité d’une entreprise sur Google et dans les moteurs IA.",
    },
    mentions: buildMentions(["Google", "ChatGPT", "Gemini", "Perplexity"]),
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Comment auditer sa visibilité SEO et IA",
      description:
        "Méthode en 5 étapes pour évaluer votre visibilité sur Google et dans les moteurs IA comme ChatGPT, Gemini et Perplexity.",
      totalTime: "PT45M",
      inLanguage: "fr-FR",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Analyser les positions Google actuelles",
          text: "Utilisez Google Search Console pour identifier vos requêtes, positions moyennes et pages indexées.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Tester les prompts IA pertinents",
          text: "Posez à ChatGPT, Gemini et Perplexity les questions que vos clients posent. Notez si votre marque est citée.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Vérifier le balisage technique",
          text: "Contrôlez vos schemas JSON-LD, votre fichier llms.txt, votre robots.txt et vos meta descriptions.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Analyser vos sources de citations",
          text: "Identifiez les plateformes comme LinkedIn, Reddit, annuaires, médias et comparatifs où votre marque est mentionnée.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Prioriser les actions correctives",
          text: "Classez les opportunités par impact et effort. Commencez par les quick wins : meta descriptions, FAQ, maillage interne et contenu answer-first.",
        },
      ],
    },
  },
  "google-ai-overviews-entreprises-comprendre": {
    about: {
      "@type": "Thing",
      name: "Google AI Overviews",
      description:
        "Comprendre l’impact de Google AI Overviews sur la visibilité des entreprises dans Google.",
    },
    mentions: buildMentions(["Google", "Google AI Overviews"]),
  },
  "seo-ia-ecommerce-recommandation-marketplace": {
    about: {
      "@type": "Thing",
      name: "SEO IA E-commerce",
      description:
        "Comprendre comment les moteurs IA influencent la recommandation de produits et la visibilité des marques e-commerce.",
    },
    mentions: buildMentions(["ChatGPT", "Gemini", "marketplaces"]),
  },
  "schema-org-guide-complet-geo": {
    about: {
      "@type": "Thing",
      name: "Schema.org pour GEO",
      description:
        "Utiliser Schema.org et JSON-LD pour aider Google et les moteurs IA à comprendre un site.",
    },
    mentions: buildMentions(["Schema.org", "JSON-LD", "Google"]),
  },
  "sources-citees-ia-site-ne-suffit-pas": {
    about: {
      "@type": "Thing",
      name: "Sources citées par les IA",
      description:
        "Comprendre pourquoi les moteurs IA s’appuient sur plusieurs sources externes et pas seulement sur le site officiel.",
    },
    mentions: buildMentions(["ChatGPT", "Perplexity", "Wikipedia", "Reddit"]),
  },
  "geo-commerces-pme-visibilite-locale": {
    about: {
      "@type": "Thing",
      name: "GEO pour commerces locaux",
      description:
        "Adapter le GEO aux commerces locaux et PME qui veulent être recommandés dans les réponses IA.",
    },
    mentions: buildMentions(["ChatGPT", "Google Maps", "Gemini"]),
  },
  "seo-classique-vs-geo-acquisition-client": {
    about: {
      "@type": "Thing",
      name: "SEO vs GEO",
      description:
        "Comparer le SEO classique et le GEO pour comprendre leur rôle dans l’acquisition client.",
    },
    mentions: buildMentions(["Google", "ChatGPT", "Gemini"]),
  },
  "geo-restaurants-guide-visibilite-ia": {
    about: {
      "@type": "Thing",
      name: "GEO pour restaurants",
      description:
        "Comprendre comment les restaurants peuvent gagner en visibilité dans les moteurs IA et les réponses de recommandation.",
    },
    mentions: buildMentions(["ChatGPT", "TripAdvisor", "Google Maps"]),
  },
  "llms-txt-guide-pratique": {
    about: {
      "@type": "Thing",
      name: "Fichier llms.txt",
      description:
        "Comprendre le rôle du fichier llms.txt dans la lisibilité d’un site par les moteurs IA.",
    },
    mentions: buildMentions(["llms.txt", "ChatGPT", "robots.txt"]),
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Comment créer un fichier llms.txt",
      description:
        "Méthode simple pour créer, structurer, déployer et vérifier un fichier llms.txt pour aider les moteurs IA à comprendre un site.",
      totalTime: "PT30M",
      inLanguage: "fr-FR",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Créer le fichier llms.txt",
          text: "Ajoutez un fichier llms.txt à la racine du dossier public afin qu’il soit accessible depuis votre domaine.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Présenter clairement l’entreprise",
          text: "Décrivez le nom de l’entreprise, son activité, ses services, ses secteurs et ses pages importantes.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Ajouter les URLs clés",
          text: "Listez les pages stratégiques, articles importants, fichiers complémentaires et ressources utiles pour les moteurs IA.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Déployer le fichier en production",
          text: "Déployez le site puis vérifiez que le fichier est accessible à l’adresse /llms.txt.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Maintenir le fichier à jour",
          text: "Mettez le fichier à jour quand vous ajoutez de nouvelles offres, pages importantes ou ressources éditoriales.",
        },
      ],
    },
  },
  "geo-hotels-guide-complet": {
    about: {
      "@type": "Thing",
      name: "GEO pour hôtels",
      description:
        "Comprendre comment les hôtels peuvent devenir plus visibles dans ChatGPT, Gemini et les moteurs IA.",
    },
    mentions: buildMentions(["ChatGPT", "Booking", "Gemini"]),
  },
  "hotel-invisible-chatgpt": {
    about: {
      "@type": "Thing",
      name: "Hôtels et ChatGPT",
      description:
        "Comprendre pourquoi certains hôtels sont invisibles dans ChatGPT et comment corriger cette invisibilité.",
    },
    mentions: buildMentions(["ChatGPT", "Booking", "OTA"]),
  },
  "booking-vs-reservations-directes-geo": {
    about: {
      "@type": "Thing",
      name: "Réservations directes vs OTA",
      description:
        "Comprendre comment le GEO peut aider les hôtels à réduire leur dépendance aux OTA et à développer les réservations directes.",
    },
    mentions: buildMentions(["Booking", "Google Hotels", "ChatGPT"]),
  },
};

export function getArticleSchemaEnhancements(slug: string): ArticleSchemaEnhancement | undefined {
  return articleMetadataBySlug[slug];
}
