export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  featured?: "primary" | "secondary";
};

export type BlogArticle = BlogPostMeta & {
  intro: string;
  articleSection?: string;
  keywords?: string[];
  quickAnswer?: {
    question: string;
    answer: string;
  };
  contextualLinks?: Array<{
    label: string;
    href: string;
  }>;
  bodyCta?: {
    intro: string;
    linkLabel: string;
    href: string;
    outro?: string;
  };
  relatedSlugs?: string[];
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

const monthMap: Record<string, number> = {
  janvier: 0,
  février: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  août: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  décembre: 11,
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
    title: "SEO / GEO : comment rendre votre entreprise visible dans Google, ChatGPT et Gemini",
    description:
      "Un guide clair pour comprendre comment le SEO et le GEO se complètent, pourquoi les moteurs IA changent la recherche, et quelles actions prioriser pour être cité dans les réponses.",
    date: "14 mai 2026",
    readingTime: "8 min",
    category: "Guide SEO / GEO",
    featured: "primary",
  },
  {
    slug: "geo-2026-pourquoi-votre-entreprise-ne-peut-plus-ignorer-les-moteurs-ia",
    title: "GEO en 2026 : pourquoi votre entreprise ne peut plus ignorer les moteurs IA",
    description:
      "ChatGPT, Gemini, Claude et Google AI Overviews changent la manière dont vos clients découvrent les marques. Voici pourquoi le GEO devient un sujet business.",
    date: "12 mai 2026",
    readingTime: "7 min",
    category: "SEO / GEO",
  },
  {
    slug: "apparaitre-chatgpt-client-cherche-entreprise",
    title: "Comment savoir si votre marque apparaît dans ChatGPT ?",
    description:
      "Une méthode simple pour auditer vos prompts, vos concurrents cités et les sources reprises par les moteurs IA.",
    date: "10 mai 2026",
    readingTime: "6 min",
    category: "Audit visibilité IA",
    featured: "secondary",
  },
  {
    slug: "audit-seo-geo-visibilite-ia",
    title: "Audit SEO / GEO : la méthode pour mesurer votre visibilité IA",
    description:
      "Comment analyser vos positions sur Google, vos citations dans ChatGPT, les concurrents recommandés et les sources utilisées par les moteurs IA.",
    date: "6 mai 2026",
    readingTime: "7 min",
    category: "Audit SEO / GEO",
  },
  {
    slug: "google-ai-overviews-entreprises-comprendre",
    title: "Google AI Overviews : ce que les entreprises doivent comprendre",
    description:
      "Pourquoi les réponses générées de Google changent la visibilité organique, et comment adapter votre stratégie SEO.",
    date: "2 mai 2026",
    readingTime: "6 min",
    category: "Google AI",
    featured: "secondary",
  },
  {
    slug: "seo-ia-ecommerce-recommandation-marketplace",
    title: "SEO IA pour e-commerce : être recommandé avant la marketplace",
    description:
      "Pourquoi les marques e-commerce doivent travailler leur visibilité IA pour apparaître dans les recommandations produits, guides d’achat et comparatifs générés.",
    date: "30 avril 2026",
    readingTime: "7 min",
    category: "E-commerce",
  },
  {
    slug: "schema-org-guide-complet-geo",
    title: "Schema.org pour le GEO : le guide du balisage structuré",
    description:
      "Hotel, Restaurant, LocalBusiness, FAQPage : les données structurées aident Google et les moteurs IA à mieux comprendre votre entreprise.",
    date: "28 avril 2026",
    readingTime: "12 min",
    category: "Technique",
  },
  {
    slug: "sources-citees-ia-site-ne-suffit-pas",
    title: "Sources citées par les IA : pourquoi votre site ne suffit pas",
    description:
      "Les moteurs IA croisent votre site avec vos fiches, avis, annuaires, médias, comparatifs et contenus externes. Voici comment construire une présence crédible.",
    date: "24 avril 2026",
    readingTime: "8 min",
    category: "Citations IA",
  },
  {
    slug: "geo-commerces-pme-visibilite-locale",
    title: "GEO pour les commerces et PME : gagner en visibilité locale dans les IA",
    description:
      "Artisans, cabinets, salons, boutiques et services locaux peuvent aussi apparaître dans les réponses de ChatGPT, Gemini et Google AI Overviews.",
    date: "18 avril 2026",
    readingTime: "7 min",
    category: "Commerce local",
  },
  {
    slug: "seo-classique-vs-geo-acquisition-client",
    title: "SEO classique vs GEO : quelles différences pour votre acquisition client ?",
    description:
      "Le SEO vous positionne dans Google. Le GEO vous positionne dans les réponses générées par ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    date: "14 avril 2026",
    readingTime: "6 min",
    category: "SEO / GEO",
  },
  {
    slug: "geo-restaurants-guide-visibilite-ia",
    title: "GEO pour les restaurants : apparaître dans les recommandations ChatGPT",
    description:
      "Comment rendre un restaurant visible quand un client demande à une IA où manger, réserver ou organiser un dîner d’affaires.",
    date: "9 avril 2026",
    readingTime: "7 min",
    category: "Restaurants",
  },
  {
    slug: "llms-txt-guide-pratique",
    title: "llms.txt : rendre votre site plus lisible pour les moteurs IA",
    description:
      "Le fichier llms.txt devient un signal utile pour guider les modèles IA vers vos contenus importants et vos pages stratégiques.",
    date: "31 mars 2026",
    readingTime: "7 min",
    category: "Technique",
  },
  {
    slug: "geo-hotels-guide-complet",
    title: "GEO pour les hôtels : apparaître sur ChatGPT en 2026",
    description:
      "Tout ce qu’un hôtel doit comprendre pour être cité par ChatGPT, Gemini, Claude et Google AI Overviews sur les requêtes à forte intention.",
    date: "18 mars 2026",
    readingTime: "10 min",
    category: "Hôtellerie",
  },
  {
    slug: "hotel-invisible-chatgpt",
    title: "Pourquoi votre hôtel est invisible sur ChatGPT et comment y remédier",
    description:
      "Les causes les plus fréquentes d’absence dans les réponses IA : contenus flous, sources faibles, fiches incomplètes et manque de signaux externes.",
    date: "5 mars 2026",
    readingTime: "6 min",
    category: "Hôtellerie",
  },
  {
    slug: "booking-vs-reservations-directes-geo",
    title: "Booking vs réservations directes : comment le GEO change la donne",
    description:
      "Le GEO peut aider les hôtels à capter une demande plus directe, en apparaissant dans les réponses IA avant les OTA et les concurrents.",
    date: "20 février 2026",
    readingTime: "6 min",
    category: "Hôtellerie",
  },
];

const newArticles: Record<string, BlogArticle> = {
  "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini": {
    slug: "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
    title: "SEO / GEO : comment rendre votre entreprise visible dans Google, ChatGPT et Gemini",
    description:
      "Un guide clair pour comprendre comment le SEO et le GEO se complètent, pourquoi les moteurs IA changent la recherche, et quelles actions prioriser pour être cité dans les réponses.",
    date: "14 mai 2026",
    readingTime: "8 min",
    category: "Guide SEO / GEO",
    articleSection: "SEO / GEO",
    keywords: [
      "SEO / GEO",
      "référencement IA",
      "visibilité Google",
      "visibilité ChatGPT",
      "Google AI Overviews",
      "Gemini",
      "Claude",
      "Perplexity",
      "audit SEO / GEO",
    ],
    quickAnswer: {
      question: "Quelle est la différence entre SEO et GEO ?",
      answer:
        "Le SEO aide votre entreprise à être trouvée sur Google. Le GEO aide votre marque à être citée dans les réponses générées par ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews. Les deux se complètent pour améliorer votre visibilité organique.",
    },
    contextualLinks: [
      { label: "Notre offre SEO / GEO", href: "/offre" },
      { label: "Audit SEO / GEO", href: "/contact" },
      { label: "Google AI Overviews", href: "/blog/google-ai-overviews-entreprises-comprendre" },
    ],
    bodyCta: {
      intro: "Pour savoir si votre marque apparaît déjà dans Google et dans les moteurs IA, vous pouvez demander un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "audit-seo-geo-visibilite-ia",
      "seo-classique-vs-geo-acquisition-client",
      "apparaitre-chatgpt-client-cherche-entreprise",
    ],
    intro:
      "Les prospects ne découvrent plus une entreprise de la même façon. Certains passent encore par Google. D’autres demandent directement à ChatGPT, Gemini, Claude, Perplexity ou Google AI Overviews quelle marque choisir. Une stratégie SEO / GEO permet de couvrir ces deux usages sans opposer visibilité Google et visibilité IA.",
    sections: [
      {
        title: "Pourquoi SEO et GEO doivent être pensés ensemble",
        paragraphs: [
          "Le SEO aide votre entreprise à être trouvée sur Google. Il travaille la structure du site, les pages importantes, le maillage interne, la clarté de l’offre et la capacité à capter une recherche organique qualifiée.",
          "Le GEO aide votre marque à être comprise, citée et recommandée dans les réponses générées par les moteurs IA. Il travaille vos contenus, vos sources citées, vos avis, vos signaux de confiance et la cohérence de votre présence sur le web.",
        ],
        bullets: [
          "SEO : visibilité Google, pages clés, maillage interne, trafic organique",
          "GEO : prompts clients, citations IA, sources citées, concurrents recommandés",
          "Objectif commun : capter des demandes qualifiées plus tôt dans le parcours",
        ],
      },
      {
        title: "Ce que les moteurs IA regardent vraiment",
        paragraphs: [
          "Une réponse IA ne se construit pas uniquement depuis votre site. Les modèles croisent plusieurs signaux : pages services, FAQ, guides, Google Business Profile, avis, annuaires, mentions externes et sources jugées fiables.",
          "Si votre entreprise est floue, peu citée ou mal structurée, un concurrent plus lisible prendra la place dans la réponse même s’il n’est pas toujours meilleur sur le fond.",
        ],
        bullets: [
          "Clarté de l’offre et des pages services",
          "Sources externes cohérentes et crédibles",
          "Avis, profils locaux et citations de marque",
          "Contenus optimisés pour les questions réelles des prospects",
        ],
      },
      {
        title: "Les premières actions à prioriser",
        paragraphs: [
          "Commencez par auditer les prompts clients réellement posés, identifier les concurrents recommandés et repérer les sources citées par les IA. C’est la base d’un audit SEO / GEO utile.",
          "Ensuite, améliorez vos pages prioritaires, clarifiez votre positionnement, enrichissez vos contenus optimisés pour les IA et renforcez les sources externes qui aident Google, ChatGPT et Gemini à vous comprendre.",
        ],
        bullets: [
          "Lister les requêtes commerciales et informationnelles prioritaires",
          "Mesurer votre présence dans Google, ChatGPT et Gemini",
          "Renforcer les pages utiles, FAQ et comparatifs",
          "Suivre les sources et les concurrents cités chaque mois",
        ],
      },
      {
        title: "Le bon indicateur n’est pas seulement le trafic",
        paragraphs: [
          "Une stratégie SEO / GEO ne se juge pas uniquement au nombre de visites. Il faut suivre les requêtes couvertes, les citations IA, les concurrents cités, les sources utilisées et la progression de votre visibilité Google et IA.",
          "C’est ce qui permet de relier la visibilité organique à un vrai enjeu business : des demandes qualifiées, une meilleure acquisition organique et moins de dépendance à l’acquisition payante.",
        ],
        bullets: [
          "Requêtes couvertes",
          "Citations IA et ton des réponses",
          "Sources citées par les IA",
          "Concurrents recommandés à votre place",
        ],
      },
    ],
  },
  "audit-seo-geo-visibilite-ia": {
    slug: "audit-seo-geo-visibilite-ia",
    title: "Audit SEO / GEO : la méthode pour mesurer votre visibilité IA",
    description:
      "Comment analyser vos positions sur Google, vos citations dans ChatGPT, les concurrents recommandés et les sources utilisées par les moteurs IA.",
    date: "6 mai 2026",
    readingTime: "7 min",
    category: "Audit SEO / GEO",
    articleSection: "Audit SEO / GEO",
    keywords: [
      "audit SEO / GEO",
      "audit visibilité IA",
      "prompts clients",
      "concurrents cités",
      "sources citées par les IA",
      "monitoring IA",
    ],
    quickAnswer: {
      question: "À quoi sert un audit SEO / GEO ?",
      answer:
        "Un audit SEO / GEO mesure votre visibilité sur Google et dans les moteurs IA. Il identifie les requêtes où votre marque apparaît, les concurrents cités à votre place, les sources utilisées par les IA et les actions à prioriser.",
    },
    contextualLinks: [
      { label: "Demander un audit SEO / GEO", href: "/contact" },
      { label: "Comprendre le SEO / GEO", href: "/blog/seo-classique-vs-geo-acquisition-client" },
      { label: "Apparaître dans ChatGPT", href: "/blog/apparaitre-chatgpt-client-cherche-entreprise" },
    ],
    bodyCta: {
      intro: "Chez PulseoAI, nous transformons cette lecture en plan d’action avec une méthode de",
      linkLabel: "stratégie SEO / GEO",
      href: "/offre",
      outro: ".",
    },
    relatedSlugs: [
      "apparaitre-chatgpt-client-cherche-entreprise",
      "seo-classique-vs-geo-acquisition-client",
      "sources-citees-ia-site-ne-suffit-pas",
    ],
    intro:
      "Un audit SEO / GEO sert à transformer un sujet flou en lecture exploitable. L’objectif n’est pas seulement de savoir si votre marque est visible. Il s’agit de comprendre sur quelles requêtes elle apparaît, qui prend la place, quelles sources sont citées et quelles actions donneront le plus d’impact.",
    sections: [
      {
        title: "Mesurer Google et les moteurs IA",
        paragraphs: [
          "L’audit commence par un constat double : visibilité Google et visibilité IA. Il faut savoir comment votre site ressort dans les recherches classiques, mais aussi comment ChatGPT, Gemini, Claude, Perplexity ou Google AI Overviews parlent de votre entreprise.",
          "Cette double lecture permet de voir si votre problème vient d’un manque de référencement naturel, d’un manque de clarté pour les IA, ou des deux.",
        ],
        bullets: [
          "Positions Google sur les requêtes clés",
          "Présence dans ChatGPT, Gemini, Claude et Perplexity",
          "Google AI Overviews et réponses enrichies",
        ],
      },
      {
        title: "Les signaux que nous analysons",
        paragraphs: [
          "Un audit de visibilité IA regarde les prompts clients, les concurrents cités, le ton des réponses, les sources mentionnées, vos contenus importants, vos fiches locales, vos avis et les éléments qui construisent votre crédibilité.",
          "Il permet aussi d’identifier les pages qui peuvent être renforcées en priorité pour améliorer votre capacité à être cité par les IA.",
        ],
        bullets: [
          "Prompts clients réellement posés",
          "Concurrents cités à votre place",
          "Sources utilisées par les IA",
          "Pages, avis et profils qui renforcent votre crédibilité",
        ],
      },
      {
        title: "Pourquoi cette méthode aide à décider",
        paragraphs: [
          "Un bon audit SEO / GEO ne livre pas seulement un constat. Il hiérarchise les priorités. Quelles pages revoir, quels contenus créer, quelles sources renforcer et quels concurrents surveiller.",
          "Pour un dirigeant ou un responsable marketing, c’est ce qui rend la visibilité IA mesurable, pilotable et plus utile au business.",
        ],
        bullets: [
          "Actions à lancer en premier",
          "Contenus à produire ou à reprendre",
          "Sources à renforcer pour gagner des citations IA",
        ],
      },
    ],
  },
  "apparaitre-chatgpt-client-cherche-entreprise": {
    slug: "apparaitre-chatgpt-client-cherche-entreprise",
    title: "Comment apparaître dans ChatGPT quand un client cherche une entreprise comme la vôtre",
    description:
      "Les signaux qui aident ChatGPT à comprendre, citer et recommander une marque : clarté du site, sources fiables, contenus utiles et cohérence externe.",
    date: "10 mai 2026",
    readingTime: "6 min",
    category: "ChatGPT",
    articleSection: "Visibilité ChatGPT",
    keywords: [
      "apparaître dans ChatGPT",
      "visibilité ChatGPT",
      "être cité par ChatGPT",
      "référencement ChatGPT",
      "sources citées par les IA",
      "stratégie SEO / GEO",
    ],
    quickAnswer: {
      question: "Comment apparaître dans ChatGPT ?",
      answer:
        "Il faut rendre votre entreprise claire, crédible et facile à citer. Cela passe par des pages structurées, des contenus utiles, des sources fiables et une stratégie SEO / GEO qui aide ChatGPT à comprendre votre marque et à la recommander.",
    },
    contextualLinks: [
      { label: "Audit visibilité IA", href: "/blog/audit-seo-geo-visibilite-ia" },
      { label: "Notre offre SEO / GEO", href: "/offre" },
      { label: "Sources citées par les IA", href: "/blog/sources-citees-ia-site-ne-suffit-pas" },
    ],
    bodyCta: {
      intro: "Pour vérifier si votre entreprise apparaît déjà dans les réponses IA, vous pouvez demander un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "audit-seo-geo-visibilite-ia",
      "sources-citees-ia-site-ne-suffit-pas",
      "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
    ],
    intro:
      "Quand un prospect demande à ChatGPT quelle agence choisir, quel hôtel réserver ou quelle entreprise contacter, la réponse ne sort pas de nulle part. Elle repose sur des signaux que la marque peut renforcer. Apparaître dans ChatGPT demande donc un vrai travail de fond.",
    sections: [
      {
        title: "Ce que ChatGPT doit comprendre sur vous",
        paragraphs: [
          "Votre site doit expliquer clairement qui vous êtes, ce que vous faites, pour qui vous le faites et dans quelle zone vous intervenez. Une marque floue, trop large ou mal structurée sera rarement recommandée.",
          "Les pages services, les FAQ, les comparatifs et les contenus orientés intention jouent un rôle clé pour rendre votre positionnement compréhensible.",
        ],
        bullets: [
          "Qui vous êtes",
          "Ce que vous proposez",
          "Pour quel type de client",
          "Dans quelle zone vous intervenez",
        ],
      },
      {
        title: "Pourquoi les sources externes comptent",
        paragraphs: [
          "ChatGPT ne s’appuie pas uniquement sur votre discours. Les avis, annuaires, profils locaux, médias, comparatifs et mentions externes renforcent la crédibilité de votre entreprise.",
          "Quand ces sources convergent vers une image cohérente, votre capacité à être cité dans les réponses IA augmente.",
        ],
        bullets: [
          "Avis clients et profils locaux",
          "Annuaires et comparatifs sectoriels",
          "Médias, blogs et citations de marque",
        ],
      },
      {
        title: "Comment vérifier si la stratégie progresse",
        paragraphs: [
          "Il faut tester régulièrement les prompts clients, suivre les concurrents cités et observer les sources mobilisées. C’est la base d’un monitoring IA sérieux.",
          "Chez PulseoAI, nous relions cette lecture à une stratégie SEO / GEO pour ne pas dissocier visibilité ChatGPT et visibilité Google.",
        ],
        bullets: [
          "Prompts à forte intention commerciale",
          "Concurrents recommandés",
          "Sources citées et tonalité des réponses",
          "Évolution mensuelle de la présence IA",
        ],
      },
    ],
  },
  "seo-ia-ecommerce-recommandation-marketplace": {
    slug: "seo-ia-ecommerce-recommandation-marketplace",
    title: "SEO IA pour e-commerce : être recommandé avant la marketplace",
    description:
      "Pourquoi les marques e-commerce doivent travailler leur visibilité IA pour apparaître dans les recommandations produits, guides d’achat et comparatifs générés.",
    date: "30 avril 2026",
    readingTime: "7 min",
    category: "E-commerce",
    articleSection: "E-commerce",
    keywords: [
      "SEO IA e-commerce",
      "référencement IA e-commerce",
      "visibilité IA e-commerce",
      "ChatGPT e-commerce",
      "Google AI Overviews",
      "sources citées par les IA",
      "acquisition organique",
    ],
    quickAnswer: {
      question: "Pourquoi le SEO IA devient-il important pour l’e-commerce ?",
      answer:
        "Les clients utilisent les moteurs IA pour comparer des produits, découvrir des marques et préparer leurs achats. Le SEO IA aide une marque e-commerce à être présente dans ces recommandations avant que le client passe par Google, une marketplace ou un comparateur.",
    },
    contextualLinks: [
      { label: "Sources citées par les IA", href: "/blog/sources-citees-ia-site-ne-suffit-pas" },
      { label: "Google AI Overviews", href: "/blog/google-ai-overviews-entreprises-comprendre" },
      { label: "Notre offre SEO / GEO", href: "/offre" },
    ],
    bodyCta: {
      intro: "Pour savoir si vos fiches, catégories et contenus apparaissent dans les recommandations IA, vous pouvez demander un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "sources-citees-ia-site-ne-suffit-pas",
      "google-ai-overviews-entreprises-comprendre",
      "seo-classique-vs-geo-acquisition-client",
    ],
    intro:
      "Les moteurs IA influencent déjà les comparatifs et les décisions d’achat. Quand un client demande quel produit choisir, quelle marque privilégier ou quel site inspire le plus confiance, les réponses IA peuvent orienter le trafic avant même qu’une marketplace n’entre dans la boucle.",
    sections: [
      {
        title: "Pourquoi l’e-commerce est directement concerné",
        paragraphs: [
          "Les comparatifs générés par les IA simplifient le choix pour l’utilisateur. Cela favorise les marques dont les produits, avis, fiches et contenus sont les plus faciles à comprendre et à citer.",
          "Une boutique peut donc perdre en visibilité sans forcément perdre ses positions Google si elle n’est jamais reprise dans les réponses IA.",
        ],
        bullets: [
          "Comparatifs générés dans ChatGPT ou Gemini",
          "Recommandations produits et guides d’achat",
          "Parcours de découverte avant la marketplace",
        ],
      },
      {
        title: "Les bons actifs à renforcer",
        paragraphs: [
          "Les fiches produits, guides d’achat, pages catégories, avis, preuves de réassurance et contenus comparatifs sont des briques majeures d’un SEO IA e-commerce.",
          "L’objectif est de faire apparaître une offre claire, crédible et utile pour les moteurs IA comme pour les clients.",
        ],
        bullets: [
          "Fiches produits claires",
          "Pages catégories orientées intention",
          "Avis et preuves de confiance",
          "Contenus comparatifs et conseils d’achat",
        ],
      },
      {
        title: "Un enjeu d’acquisition plus large que le référencement produit",
        paragraphs: [
          "Le SEO IA ne vise pas seulement à mieux classer une fiche. Il sert aussi à être recommandé dans les recherches conversationnelles, les comparatifs générés et les parcours de découverte orientés conseil.",
          "Pour une marque e-commerce, cela permet de capter une demande plus qualifiée avant que la marketplace prenne toute l’attention.",
        ],
        bullets: [
          "Moins de dépendance à la marketplace",
          "Plus de visibilité organique en amont du clic",
          "Meilleure présence dans les moteurs IA et sur Google",
        ],
      },
    ],
  },
  "sources-citees-ia-site-ne-suffit-pas": {
    slug: "sources-citees-ia-site-ne-suffit-pas",
    title: "Sources citées par les IA : pourquoi votre site ne suffit pas",
    description:
      "Les moteurs IA croisent votre site avec vos fiches, avis, annuaires, médias, comparatifs et contenus externes. Voici comment construire une présence crédible.",
    date: "24 avril 2026",
    readingTime: "8 min",
    category: "Citations IA",
    articleSection: "Citations IA",
    keywords: [
      "sources citées par les IA",
      "citations IA",
      "référencement IA",
      "ChatGPT",
      "Gemini",
      "Perplexity",
      "sources externes",
    ],
    quickAnswer: {
      question: "Pourquoi les sources citées sont-elles importantes en GEO ?",
      answer:
        "Les moteurs IA ne s’appuient pas seulement sur votre site. Ils croisent vos contenus avec des avis, annuaires, médias, fiches locales, comparatifs et mentions externes pour décider quelles marques citer.",
    },
    contextualLinks: [
      { label: "Schema.org pour le GEO", href: "/blog/schema-org-guide-complet-geo" },
      { label: "Le guide llms.txt", href: "/blog/llms-txt-guide-pratique" },
      { label: "Audit SEO / GEO", href: "/contact" },
    ],
    bodyCta: {
      intro: "Si vous voulez identifier les sources qui renforcent déjà votre marque et celles qui manquent encore, vous pouvez lancer un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "schema-org-guide-complet-geo",
      "llms-txt-guide-pratique",
      "audit-seo-geo-visibilite-ia",
    ],
    intro:
      "Beaucoup d’entreprises pensent qu’un bon site suffit pour apparaître dans les réponses IA. En pratique, les moteurs croisent plusieurs sources avant de recommander une marque. Si l’écosystème externe est faible, incohérent ou absent, la visibilité IA reste limitée.",
    sections: [
      {
        title: "Les IA cherchent de la convergence",
        paragraphs: [
          "Une réponse générée s’appuie sur ce que les moteurs peuvent recouper. Si votre site dit une chose, mais que les fiches locales, les avis et les mentions externes ne la confirment pas, votre crédibilité diminue.",
          "Les sources citées par les IA servent à valider votre existence, votre positionnement et votre pertinence sur une requête.",
        ],
        bullets: [
          "Votre site et vos pages services",
          "Profils locaux et avis",
          "Mentions externes cohérentes",
          "Comparatifs et médias sectoriels",
        ],
      },
      {
        title: "Les sources qui comptent le plus souvent",
        paragraphs: [
          "Selon les secteurs, les IA utilisent des annuaires, des avis, des plateformes locales, des médias, des comparatifs, des profils d’entreprise et des contenus spécialisés.",
          "Pour un hôtel, cela peut inclure Google Business Profile, Booking, TripAdvisor ou Foursquare. Pour une PME, cela peut être un annuaire professionnel, un média de niche ou un comparatif sectoriel.",
        ],
        bullets: [
          "Google Business Profile",
          "TripAdvisor, Booking, Foursquare",
          "Annuaires professionnels",
          "Médias, blogs et comparatifs",
        ],
      },
      {
        title: "Comment renforcer cette couche externe",
        paragraphs: [
          "Il faut identifier les sources déjà visibles, repérer les trous, harmoniser les informations clés et renforcer les mentions qui peuvent servir de preuve.",
          "Cette logique complète le travail sur le site. C’est précisément ce lien entre contenus internes et sources externes qui rend une stratégie GEO plus solide.",
        ],
        bullets: [
          "Lister les sources déjà citées",
          "Corriger les incohérences de marque",
          "Renforcer les plateformes utiles à votre secteur",
        ],
      },
    ],
  },
  "seo-classique-vs-geo-acquisition-client": {
    slug: "seo-classique-vs-geo-acquisition-client",
    title: "SEO classique vs GEO : quelles différences pour votre acquisition client ?",
    description:
      "Le SEO vous positionne dans Google. Le GEO vous positionne dans les réponses générées par ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    date: "14 avril 2026",
    readingTime: "6 min",
    category: "SEO / GEO",
    articleSection: "SEO / GEO",
    keywords: [
      "SEO classique vs GEO",
      "SEO / GEO",
      "référencement IA",
      "Google AI Overviews",
      "ChatGPT",
      "visibilité IA",
      "acquisition organique",
    ],
    quickAnswer: {
      question: "Quelle est la différence entre SEO classique et GEO ?",
      answer:
        "Le SEO classique vise à positionner votre site dans les résultats Google. Le GEO vise à faire citer votre marque dans les réponses générées par ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews. Les deux approches se complètent.",
    },
    contextualLinks: [
      { label: "Audit SEO / GEO", href: "/contact" },
      { label: "Apparaître dans ChatGPT", href: "/blog/apparaitre-chatgpt-client-cherche-entreprise" },
      { label: "Notre offre SEO / GEO", href: "/offre" },
    ],
    bodyCta: {
      intro: "Pour relier vos positions Google, vos citations IA et vos concurrents recommandés, vous pouvez demander un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
      "audit-seo-geo-visibilite-ia",
      "google-ai-overviews-entreprises-comprendre",
    ],
    intro:
      "Le SEO classique et le GEO répondent à la même ambition : capter une demande qualifiée. Mais ils ne travaillent pas exactement la même étape du parcours. Comprendre cette différence aide à mieux répartir ses efforts d’acquisition organique.",
    sections: [
      {
        title: "Le SEO capte la recherche classique",
        paragraphs: [
          "Le SEO vise à faire apparaître votre site dans Google quand un prospect formule une requête. Il travaille les mots clés, les pages, la structure, la qualité du contenu et la capacité à générer un clic vers votre site.",
          "C’est encore une base essentielle pour la visibilité organique de la plupart des entreprises.",
        ],
        bullets: [
          "Positions Google",
          "Pages services et contenus",
          "Maillage interne",
          "Trafic organique",
        ],
      },
      {
        title: "Le GEO intervient au niveau de la recommandation",
        paragraphs: [
          "Le GEO cherche à faire citer votre marque dans une réponse déjà formulée par une IA. Ici, le sujet n’est plus seulement d’être trouvé. Il s’agit d’être recommandé, comparé favorablement ou choisi comme option crédible.",
          "Cela implique un travail sur les prompts clients, les citations IA, les sources utilisées et la compréhension globale de votre entité.",
        ],
        bullets: [
          "Prompts clients",
          "Citations de marque",
          "Sources citées par les IA",
          "Concurrents recommandés",
        ],
      },
      {
        title: "Pourquoi l’acquisition devient plus complète",
        paragraphs: [
          "En combinant SEO et GEO, une entreprise couvre davantage de moments de recherche. Elle peut être visible sur Google, mais aussi présente dans les réponses de ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
          "Cette complémentarité aide à générer une acquisition organique plus robuste et moins dépendante d’un seul canal.",
        ],
        bullets: [
          "Plus de visibilité sur Google",
          "Plus de présence dans les moteurs IA",
          "Moins de dépendance à un canal unique",
        ],
      },
    ],
  },
  "google-ai-overviews-entreprises-comprendre": {
    slug: "google-ai-overviews-entreprises-comprendre",
    title: "Google AI Overviews : ce que les entreprises doivent comprendre",
    description:
      "Pourquoi les réponses générées de Google changent la visibilité organique, et comment adapter votre stratégie SEO.",
    date: "2 mai 2026",
    readingTime: "6 min",
    category: "Google AI",
    articleSection: "Google AI",
    keywords: [
      "Google AI Overviews",
      "SEO",
      "SEO / GEO",
      "visibilité Google",
      "visibilité IA",
      "référencement IA",
      "Google AI",
    ],
    quickAnswer: {
      question: "Pourquoi Google AI Overviews change-t-il le SEO ?",
      answer:
        "Google AI Overviews affiche des réponses générées directement dans les résultats de recherche. Pour les entreprises, cela signifie que la visibilité ne dépend plus seulement d’un classement classique, mais aussi de la capacité à être compris, cité et utilisé comme source.",
    },
    contextualLinks: [
      { label: "SEO / GEO", href: "/blog/seo-geo-rendre-entreprise-visible-google-chatgpt-gemini" },
      { label: "Audit SEO / GEO", href: "/blog/audit-seo-geo-visibilite-ia" },
      { label: "Apparaître dans ChatGPT", href: "/blog/apparaitre-chatgpt-client-cherche-entreprise" },
    ],
    bodyCta: {
      intro: "Chez PulseoAI, nous accompagnons les entreprises sur leur visibilité Google et IA avec une méthode de",
      linkLabel: "SEO / GEO",
      href: "/offre",
      outro: ".",
    },
    relatedSlugs: [
      "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
      "audit-seo-geo-visibilite-ia",
      "apparaitre-chatgpt-client-cherche-entreprise",
    ],
    intro:
      "Google AI Overviews modifie la façon dont un prospect découvre une marque. Avant même le clic, Google peut synthétiser une réponse, citer quelques sources et orienter une décision. Pour une entreprise, cela change la logique du référencement naturel classique.",
    sections: [
      {
        title: "Une nouvelle étape avant la visite du site",
        paragraphs: [
          "Avec AI Overviews, l’utilisateur lit une réponse générée avant d’explorer les résultats classiques. Cela veut dire qu’une marque peut être visible sur Google mais absente de la synthèse qui influence la première impression.",
          "Le sujet n’est donc plus seulement de se positionner. Il devient aussi essentiel d’être compris comme une source pertinente dans le résumé affiché par Google.",
        ],
        bullets: [
          "Réponse synthétique avant le clic",
          "Moins de dépendance au seul classement organique",
          "Plus d’importance pour les sources citées",
        ],
      },
      {
        title: "Quels contenus remontent plus facilement",
        paragraphs: [
          "Google valorise les pages claires, utiles, bien structurées et alignées avec l’intention de recherche. Les FAQ, comparatifs, guides et pages services solides deviennent des supports importants pour apparaître dans AI Overviews.",
          "Les données structurées, la cohérence éditoriale et les sources externes crédibles renforcent aussi la probabilité d’être cité dans une réponse générée.",
        ],
        bullets: [
          "Pages services explicites",
          "FAQ et comparatifs utiles",
          "Données structurées propres",
          "Sources externes cohérentes",
        ],
      },
      {
        title: "Ce que cela implique pour votre stratégie SEO",
        paragraphs: [
          "Il faut travailler un SEO plus lisible, plus explicite et plus orienté réponse. Cela veut dire des contenus qui répondent directement aux questions, une hiérarchie éditoriale nette et une entité bien comprise.",
          "Chez PulseoAI, nous intégrons AI Overviews dans une stratégie SEO / GEO globale pour améliorer à la fois la visibilité Google et la capacité à être cité par les moteurs IA.",
        ],
        bullets: [
          "Répondre directement aux requêtes",
          "Structurer les pages pour Google et les IA",
          "Suivre les sources et les concurrents cités",
        ],
      },
    ],
  },
};

export const featuredPrimary = blogPosts.find((post) => post.featured === "primary")!;
export const featuredSecondary = blogPosts.filter((post) => post.featured === "secondary");
export const gridPosts = blogPosts.filter((post) => !post.featured);

export const blogTopics = [
  {
    title: "Guides SEO / GEO",
    description: "Comprendre comment le référencement naturel et le référencement IA se complètent.",
    href: "/blog/seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
  },
  {
    title: "Visibilité ChatGPT",
    description: "Mieux apparaître dans les réponses générées quand un prospect cherche une entreprise.",
    href: "/blog/apparaitre-chatgpt-client-cherche-entreprise",
  },
  {
    title: "Google AI Overviews",
    description: "Lire les nouveaux impacts des réponses générées de Google sur votre visibilité organique.",
    href: "/blog/google-ai-overviews-entreprises-comprendre",
  },
  {
    title: "GEO hôtellerie",
    description: "Explorer les enjeux de réservation directe, d’OTA et de visibilité IA pour les hôtels.",
    href: "/geo-hotellerie",
  },
  {
    title: "SEO IA pour PME",
    description: "Voir comment les PME, commerces et services locaux peuvent être cités par les IA.",
    href: "/blog/geo-commerces-pme-visibilite-locale",
  },
  {
    title: "Technique : schema.org et llms.txt",
    description: "Comprendre le rôle des données structurées et des signaux utiles aux moteurs IA.",
    href: "/blog/schema-org-guide-complet-geo",
  },
];

export function getNewBlogArticleBySlug(slug: string) {
  return newArticles[slug];
}

export function parseFrenchDate(date: string) {
  const [day, month, year] = date.trim().split(" ");
  return new Date(Number(year), monthMap[month], Number(day));
}

export function buildBlogArticleMetadata(article: BlogArticle) {
  return {
    title: `${article.title} | PulseoAI`,
    description: article.description,
    openGraph: {
      title: `${article.title} | PulseoAI`,
      description: article.description,
      url: `https://www.pulseoai.fr/blog/${article.slug}`,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | PulseoAI`,
      description: article.description,
      images: ["/og-image.png"],
    },
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

export function getRelatedBlogPosts(currentSlug: string, explicitSlugs: string[] = [], limit = 3) {
  const currentPost = blogPosts.find((post) => post.slug === currentSlug);
  const explicit = explicitSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPostMeta => Boolean(post));

  const sameCategory = blogPosts.filter(
    (post) =>
      post.slug !== currentSlug &&
      post.category === currentPost?.category &&
      !explicit.some((explicitPost) => explicitPost.slug === post.slug),
  );

  const recent = [...blogPosts]
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        !explicit.some((explicitPost) => explicitPost.slug === post.slug) &&
        !sameCategory.some((sameCategoryPost) => sameCategoryPost.slug === post.slug),
    )
    .sort((a, b) => parseFrenchDate(b.date).getTime() - parseFrenchDate(a.date).getTime());

  return [...explicit, ...sameCategory, ...recent].slice(0, limit);
}
