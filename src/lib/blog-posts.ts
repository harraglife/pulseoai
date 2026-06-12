export type BlogPostMeta = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  featured?: "primary" | "secondary";
};

export type BlogArticle = BlogPostMeta & {
  intro: string;
  dateModified?: string;
  articleSection?: string;
  keywords?: string[];
  faqTitle?: string;
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
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
    subsections?: Array<{
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }>;
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
    slug: "referencement-chatgpt-apparaitre-ia",
    title: "Référencement ChatGPT : comment apparaître sur ChatGPT et toutes les autres IA",
    seoTitle: "Référencement ChatGPT : apparaître sur ChatGPT et toutes les IA",
    description:
      "Comment faire apparaître votre entreprise sur ChatGPT, Perplexity, Gemini et Claude. Les 5 leviers du référencement IA (GEO) expliqués.",
    date: "4 juin 2026",
    readingTime: "9 min",
    category: "ChatGPT",
    featured: "primary",
  },
  {
    slug: "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
    title: "SEO / GEO : comment rendre votre entreprise visible dans Google, ChatGPT et Gemini",
    seoTitle: "SEO / GEO : être visible sur Google et ChatGPT",
    description:
      "Un guide clair pour comprendre comment le SEO et le GEO se complètent, pourquoi les moteurs IA changent la recherche, et quelles actions prioriser pour être cité dans les réponses.",
    date: "14 mai 2026",
    readingTime: "8 min",
    category: "Guide SEO / GEO",
    featured: "primary",
  },
  {
    slug: "comment-se-referencer-sur-perplexity",
    title: "Comment se référencer sur Perplexity ?",
    seoTitle: "Comment se référencer sur Perplexity ? Guide GEO",
    description:
      "Découvrez comment se référencer sur Perplexity : sources citées, contenus answer-first, autorité, données structurées, mentions de marque et suivi des requêtes IA.",
    date: "13 mai 2026",
    readingTime: "8 min",
    category: "SEO IA",
  },
  {
    slug: "geo-2026-pourquoi-votre-entreprise-ne-peut-plus-ignorer-les-moteurs-ia",
    title: "GEO en 2026 : pourquoi votre entreprise ne peut plus ignorer les moteurs IA",
    seoTitle: "GEO 2026 : visibilité dans les moteurs IA",
    description:
      "ChatGPT, Gemini, Claude et Google AI Overviews changent la manière dont vos clients découvrent les marques. Voici pourquoi le GEO devient un sujet business.",
    date: "12 mai 2026",
    readingTime: "7 min",
    category: "SEO / GEO",
  },
  {
    slug: "veille-concurrentielle-seo-ia-serp-locales",
    title: "Veille concurrentielle SEO & IA : suivre vos concurrents",
    seoTitle: "Veille concurrentielle SEO & IA : suivre vos concurrents",
    description:
      "Découvrez comment suivre vos concurrents sur Google, ChatGPT, Gemini, Perplexity et les SERP locales pour identifier qui capte la demande avant vous.",
    date: "11 mai 2026",
    readingTime: "11 min",
    category: "SEO / GEO",
  },
  {
    slug: "apparaitre-chatgpt-client-cherche-entreprise",
    title: "Comment se référencer sur ChatGPT ?",
    seoTitle: "Comment se référencer sur ChatGPT ? Guide SEO IA",
    description:
      "Découvrez comment se référencer sur ChatGPT : SEO, GEO, contenus answer-first, Schema.org, citations, sources de confiance et suivi des requêtes IA.",
    date: "10 mai 2026",
    readingTime: "6 min",
    category: "ChatGPT",
    featured: "secondary",
  },
  {
    slug: "audit-seo-geo-visibilite-ia",
    title: "Audit SEO / GEO : la méthode pour mesurer votre visibilité IA",
    seoTitle: "Audit SEO / GEO : mesurer sa visibilité IA",
    description:
      "Comment analyser vos positions sur Google, vos citations dans ChatGPT, les concurrents recommandés et les sources utilisées par les moteurs IA.",
    date: "6 mai 2026",
    readingTime: "7 min",
    category: "Audit SEO / GEO",
  },
  {
    slug: "google-ai-overviews-entreprises-comprendre",
    title: "Google AI Overviews : ce que les entreprises doivent comprendre",
    seoTitle: "Google AI Overviews : guide entreprises",
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
    seoTitle: "SEO IA e-commerce — PulseoAI",
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
    seoTitle: "Sources citées par les IA — PulseoAI",
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
    seoTitle: "SEO classique vs GEO — PulseoAI",
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
  "referencement-chatgpt-apparaitre-ia": {
    slug: "referencement-chatgpt-apparaitre-ia",
    title: "Référencement ChatGPT : comment apparaître sur ChatGPT et toutes les autres IA",
    seoTitle: "Référencement ChatGPT : apparaître sur ChatGPT et toutes les IA",
    description:
      "Comment faire apparaître votre entreprise sur ChatGPT, Perplexity, Gemini et Claude. Les 5 leviers du référencement IA (GEO) expliqués.",
    date: "4 juin 2026",
    readingTime: "9 min",
    category: "ChatGPT",
    articleSection: "Référencement ChatGPT",
    keywords: [
      "référencement ChatGPT",
      "apparaître sur ChatGPT",
      "référencement IA",
      "GEO",
      "visibilité ChatGPT",
      "Perplexity",
      "Gemini",
      "Claude",
      "Google AI Overviews",
    ],
    faqTitle: "FAQ — Référencement ChatGPT",
    quickAnswer: {
      question: "Qu&apos;est-ce que le référencement ChatGPT ?",
      answer:
        "Le référencement ChatGPT désigne l&apos;ensemble des techniques permettant à une entreprise d&apos;apparaître dans les réponses générées par ChatGPT lorsqu&apos;un utilisateur pose une question liée à son secteur. Il ne s&apos;agit pas d&apos;obtenir une position dans une liste de liens, mais d&apos;être cité directement dans la réponse — comme une recommandation.",
    },
    contextualLinks: [
      { label: "Notre offre SEO / GEO", href: "/offre" },
      { label: "Agence GEO à Nantes", href: "/agence-seo-geo-nantes" },
      { label: "Demander un audit GEO gratuit", href: "/contact" },
      { label: "Schema.org pour le GEO", href: "/blog/schema-org-guide-complet-geo" },
      { label: "Guide llms.txt", href: "/blog/llms-txt-guide-pratique" },
      { label: "Sources citées par les IA", href: "/blog/sources-citees-ia-site-ne-suffit-pas" },
    ],
    bodyCta: {
      intro: "Vous voulez savoir où votre entreprise en est sur ChatGPT et les autres IA ? Demandez un",
      linkLabel: "audit GEO gratuit",
      href: "/contact",
      outro:
        " — on analyse votre visibilité IA en 48h et on vous dit exactement ce qui vous empêche d&apos;être cité.",
    },
    relatedSlugs: [
      "apparaitre-chatgpt-client-cherche-entreprise",
      "comment-se-referencer-sur-perplexity",
      "sources-citees-ia-site-ne-suffit-pas",
    ],
    intro:
      "En 2026, une part croissante de vos futurs clients ne cherche plus sur Google. Ils posent une question à une IA et obtiennent une réponse directe avec des recommandations de marques et de prestataires. Si votre entreprise n&apos;apparaît pas dans ces réponses, elle n&apos;existe pas pour ces prospects.",
    sections: [
      {
        title: "Qu&apos;est-ce que le référencement ChatGPT ?",
        paragraphs: [
          "Le référencement ChatGPT désigne l&apos;ensemble des techniques permettant à une entreprise d&apos;apparaître dans les réponses générées par ChatGPT lorsqu&apos;un utilisateur pose une question liée à son secteur. Contrairement au SEO Google, il ne s&apos;agit pas d&apos;obtenir une position dans une liste de liens, mais d&apos;être cité directement dans la réponse — comme une recommandation.",
        ],
      },
      {
        title: "Pourquoi apparaître sur ChatGPT est devenu indispensable en 2026 ?",
        paragraphs: [
          "En 2026, ChatGPT dépasse 700 millions d&apos;utilisateurs actifs mensuels. Selon Google I/O 2026, AI Mode — le moteur de recherche IA de Google — a franchi le milliard d&apos;utilisateurs mensuels. Perplexity, Claude et Gemini suivent la même courbe.",
          "Résultat : une part croissante de vos futurs clients ne cherche plus sur Google. Ils posent une question à une IA et obtiennent une réponse directe avec des recommandations de marques, de prestataires, de produits. Si votre entreprise n&apos;apparaît pas dans ces réponses, elle n&apos;existe pas pour ces prospects.",
        ],
      },
      {
        title: "Comment ChatGPT choisit les entreprises qu&apos;il cite ?",
        paragraphs: [
          "ChatGPT ne consulte pas directement votre site web comme Google. Il s&apos;appuie sur plusieurs types de sources pour décider quelles entreprises mentionner.",
        ],
        bullets: [
          "Les sources tierces autoritaires — Wikipedia, Wikidata, forums Reddit, avis Google, annuaires spécialisés, articles de presse. Ces sources représentent environ 80 % du signal utilisé par les IA.",
          "Le contenu de votre site — uniquement s&apos;il est structuré de façon à être compris et extrait par les moteurs IA.",
          "Les données structurées — les balises Schema.org que les IA utilisent comme une carte d&apos;identité de votre entreprise.",
          "Le fichier llms.txt — un fichier texte qui résume en langage naturel qui vous êtes, ce que vous faites et quelles pages consulter en priorité.",
        ],
      },
      {
        title: "Les 5 leviers pour apparaître sur ChatGPT et les autres IA",
        paragraphs: [],
        subsections: [
          {
            title: "1. Créer votre présence sur les sources citées par les IA",
            paragraphs: [
              "ChatGPT cite en priorité les entreprises présentes sur Wikipedia, Wikidata, les annuaires de référence de votre secteur, les forums spécialisés et les sites d&apos;avis. Avant même de toucher à votre site, assurez-vous d&apos;exister sur ces sources externes.",
              "Concrètement : fiche Wikidata complète, profil Google Business Profile enrichi, présence sur les annuaires sectoriels que les IA consultent (Pages Jaunes, annuaires métier, guides spécialisés).",
            ],
          },
          {
            title: "2. Structurer votre contenu en mode « answer-first »",
            paragraphs: [
              "Les IA extraient des passages courts et autonomes — ce qu&apos;on appelle des capsules de réponse. Pour être cité, chaque section de votre site doit répondre directement à une question en 40 à 60 mots, sans avoir besoin du contexte environnant.",
              "Selon une étude Norg.ai sur 2 millions de sessions ChatGPT, 72,4 % des articles cités contiennent une capsule de réponse placée juste sous un titre H2 formulé comme une question. Et 44 % des citations proviennent du premier tiers de l&apos;article.",
            ],
          },
          {
            title: "3. Déployer les données structurées Schema.org",
            paragraphs: [
              "Les données structurées permettent aux IA de comprendre précisément votre activité sans interpréter votre contenu. Pour une entreprise, les types les plus importants sont : Organization, WebSite, Service, FAQPage et LocalBusiness pour les commerces locaux.",
              "Sans ces données, les IA doivent deviner ce que vous faites — et elles se trompent souvent, ou ignorent votre site.",
            ],
          },
          {
            title: "4. Créer et optimiser votre fichier llms.txt",
            paragraphs: [
              "Le fichier llms.txt est l&apos;équivalent du robots.txt pour les moteurs IA. Placé à la racine de votre site (votresite.fr/llms.txt), il explique en langage naturel qui vous êtes, quels sont vos services, et quelles pages consulter. ChatGPT, Claude et Perplexity le lisent en priorité lors de l&apos;indexation.",
              "Un fichier llms.txt bien rédigé augmente significativement la probabilité d&apos;être cité directement plutôt que via une source tierce.",
            ],
          },
          {
            title: "5. Autoriser explicitement les robots IA dans votre robots.txt",
            paragraphs: [
              "Par défaut, certains sites bloquent les robots IA sans le savoir. GPTBot (OpenAI), ClaudeBot (Anthropic), PerplexityBot et OAI-SearchBot doivent être explicitement autorisés dans votre fichier robots.txt. Sans cette autorisation, les IA ne peuvent pas indexer votre site — et ne peuvent pas vous citer.",
            ],
          },
        ],
      },
      {
        title: "ChatGPT, Perplexity, Gemini, Claude : sont-ils tous pareils ?",
        paragraphs: [
          "Non. Chaque moteur IA a ses propres sources de prédilection et ses propres signaux de confiance.",
        ],
        bullets: [
          "ChatGPT s&apos;appuie fortement sur Bing Search (via OAI-SearchBot) et sur Wikipedia. Il cite en priorité les entreprises ayant une forte présence éditoriale et des sources tierces nombreuses.",
          "Perplexity est le moteur le plus transparent — il cite ses sources directement. Il crawle le web en temps réel via PerplexityBot et valorise particulièrement Reddit, les forums et les contenus récents.",
          "Gemini est directement connecté à l&apos;index Google. Être bien positionné sur Google reste un signal fort. Il valorise aussi les données structurées Schema.org et les fiches Google Business Profile.",
          "Claude d&apos;Anthropic s&apos;appuie sur ClaudeBot et Claude-SearchBot. Il valorise les contenus longs, bien structurés et factuellement denses.",
        ],
      },
      {
        title: "Combien de temps pour apparaître sur ChatGPT ?",
        paragraphs: [
          "Les premiers résultats apparaissent généralement entre 6 et 12 semaines après la mise en place des optimisations techniques et des sources externes. La vitesse dépend de trois facteurs : l&apos;autorité actuelle de votre domaine, la concurrence dans votre secteur, et la richesse de votre écosystème de sources.",
          "Contrairement au SEO Google qui peut prendre 6 à 12 mois, le GEO produit des résultats plus rapides sur les requêtes de niche — notamment les secteurs où peu de concurrents ont déjà optimisé leur présence IA.",
        ],
      },
      {
        title: "Le référencement ChatGPT remplace-t-il le SEO Google ?",
        paragraphs: [
          "Non — les deux sont complémentaires. Le SEO Google reste essentiel pour capter le trafic des utilisateurs qui cherchent encore sur Google. Le GEO (Generative Engine Optimization) s&apos;occupe du canal IA, en forte croissance.",
          "Selon BrightEdge, les AI Overviews de Google se déclenchent sur 48 % des requêtes en 2026. Même sur Google, une partie de la visibilité se joue désormais dans les réponses IA — pas dans les liens classiques. La question n&apos;est donc plus « SEO ou GEO » mais « quand commencez-vous votre stratégie GEO ? »",
        ],
      },
    ],
    faqItems: [
      {
        question: "Comment savoir si mon entreprise apparaît sur ChatGPT ?",
        answer:
          "Tapez dans ChatGPT des requêtes que vos clients posent réellement — par exemple « meilleure agence [votre secteur] [votre ville] » ou « comment choisir un [votre métier] ». Si votre entreprise n&apos;est pas citée dans les 3 premières recommandations, vous avez un problème de visibilité IA.",
      },
      {
        question: "Est-ce qu&apos;on peut payer pour apparaître dans ChatGPT ?",
        answer:
          "Non. ChatGPT, Perplexity et Claude ne proposent pas de publicité dans leurs réponses. La visibilité s&apos;obtient uniquement par l&apos;optimisation organique — c&apos;est pourquoi le GEO est une opportunité stratégique majeure avant que la publicité IA n&apos;existe.",
      },
      {
        question: "Le référencement ChatGPT fonctionne pour tout type d&apos;entreprise ?",
        answer:
          "Oui — hôtels, e-commerce, PME, cabinets, agences, commerces locaux, professions libérales. Toute entreprise dont les clients posent des questions à une IA avant d&apos;acheter ou de contacter un prestataire peut bénéficier du GEO.",
      },
      {
        question: "Quelle différence entre SEO et GEO ?",
        answer:
          "Le SEO optimise votre visibilité dans les listes de liens Google. Le GEO optimise votre visibilité dans les réponses directes des moteurs IA. Les deux disciplines partagent certaines bases (contenu de qualité, données structurées) mais divergent sur les signaux clés : le GEO valorise les sources tierces, les capsules de réponse et la lisibilité machine.",
      },
    ],
  },
  "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini": {
    slug: "seo-geo-rendre-entreprise-visible-google-chatgpt-gemini",
    title: "SEO / GEO : comment rendre votre entreprise visible dans Google, ChatGPT et Gemini",
    seoTitle: "SEO / GEO : être visible sur Google et ChatGPT",
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
        subsections: [
          {
            title: "Pourquoi le SEO reste une base solide",
            paragraphs: [
              "Le SEO reste indispensable parce qu’il structure votre présence sur Google autour d’intentions de recherche claires. Une entreprise qui répond bien aux requêtes clés dispose d’une base plus robuste pour toute sa visibilité organique.",
            ],
            bullets: [
              "Pages services alignées avec la demande",
              "Maillage interne utile pour Google et les visiteurs",
            ],
          },
          {
            title: "Pourquoi le GEO ajoute une couche stratégique",
            paragraphs: [
              "Le GEO devient stratégique dès qu’un prospect demande directement à une IA quelle marque choisir. Il complète le SEO en travaillant la capacité de votre entreprise à être reprise comme source, recommandée dans une comparaison ou citée dans une réponse directe.",
            ],
            bullets: [
              "Présence dans ChatGPT, Gemini, Claude et Perplexity",
              "Meilleure lecture des sources et concurrents cités",
            ],
          },
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
        subsections: [
          {
            title: "Quels signaux renforcent la compréhension de votre marque",
            paragraphs: [
              "Les moteurs IA privilégient les informations qu’ils peuvent recouper facilement. Plus votre offre, votre zone d’intervention et vos preuves de confiance sont cohérentes, plus votre marque devient facile à comprendre et à citer.",
            ],
          },
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
        subsections: [
          {
            title: "Quelles requêtes tester en premier",
            paragraphs: [
              "Les premières requêtes à tester sont celles qui traduisent une intention commerciale ou une comparaison active. Elles montrent rapidement si votre marque est visible au moment où un prospect cherche déjà une solution.",
            ],
          },
          {
            title: "Comment prioriser le plan d’action",
            paragraphs: [
              "Le plan d’action doit commencer par les pages et sources qui peuvent améliorer le plus vite votre lisibilité. Cette priorisation évite de disperser les efforts entre SEO, citations IA et contenus sans impact direct.",
            ],
          },
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
    seoTitle: "Audit SEO / GEO : mesurer sa visibilité IA",
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
  "comment-se-referencer-sur-perplexity": {
    slug: "comment-se-referencer-sur-perplexity",
    title: "Comment se référencer sur Perplexity ?",
    seoTitle: "Comment se référencer sur Perplexity ? Guide GEO",
    description:
      "Découvrez comment se référencer sur Perplexity : sources citées, contenus answer-first, autorité, données structurées, mentions de marque et suivi des requêtes IA.",
    date: "13 mai 2026",
    readingTime: "8 min",
    category: "SEO IA",
    articleSection: "Référencement Perplexity",
    keywords: [
      "comment se référencer sur Perplexity",
      "référencement Perplexity",
      "apparaître sur Perplexity",
      "être cité par Perplexity",
      "visibilité Perplexity",
      "SEO IA Perplexity",
      "GEO Perplexity",
    ],
    faqTitle: "FAQ sur le référencement Perplexity",
    quickAnswer: {
      question: "Comment se référencer sur Perplexity ?",
      answer:
        "Pour se référencer sur Perplexity, il faut publier des contenus qui répondent directement aux questions, structurer vos pages clairement, renforcer vos sources externes, travailler votre entité de marque et suivre les requêtes où Perplexity cite vos concurrents.",
    },
    contextualLinks: [
      { label: "Notre offre SEO / GEO", href: "/offre" },
      { label: "Comment se référencer sur ChatGPT", href: "/blog/apparaitre-chatgpt-client-cherche-entreprise" },
      { label: "Sources citées par les IA", href: "/blog/sources-citees-ia-site-ne-suffit-pas" },
      { label: "Schema.org pour le GEO", href: "/blog/schema-org-guide-complet-geo" },
      { label: "Guide llms.txt", href: "/blog/llms-txt-guide-pratique" },
    ],
    bodyCta: {
      intro: "Pour savoir si votre marque apparaît déjà dans Perplexity et dans les autres moteurs IA, vous pouvez demander un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "apparaitre-chatgpt-client-cherche-entreprise",
      "sources-citees-ia-site-ne-suffit-pas",
      "veille-concurrentielle-seo-ia-serp-locales",
    ],
    intro:
      "Perplexity fonctionne comme un moteur de réponse sourcé. L’enjeu n’est pas seulement d’avoir un site. Il faut aussi être présent dans les sources que Perplexity peut lire, comparer et citer quand un utilisateur cherche une solution.",
    sections: [
      {
        title: "Pourquoi Perplexity est important pour le référencement IA",
        paragraphs: [
          "Perplexity compte déjà dans les nouveaux parcours de recherche parce qu’il répond directement aux questions et affiche souvent les sources utilisées. Cette logique rapproche la visibilité de la recommandation, pas seulement du clic.",
          "Pour une entreprise, cela signifie qu’il faut penser référencement IA comme une extension du SEO. Vous ne travaillez plus seulement vos pages pour Google. Vous travaillez aussi votre capacité à être repris comme source utile dans un moteur de réponse.",
        ],
        bullets: [
          "Réponses directes orientées besoin",
          "Sources affichées dans l’interface",
          "Comparaison rapide entre plusieurs marques",
        ],
      },
      {
        title: "Comment Perplexity sélectionne ses sources",
        paragraphs: [
          "Perplexity privilégie les contenus clairs, bien structurés et assez crédibles pour répondre à une question sans ambiguïté. Les pages floues ou trop génériques ont moins de chances d’être reprises.",
          "Le moteur ne s’appuie pas seulement sur votre site officiel. Il peut aussi croiser des médias, annuaires, plateformes, profils, comparatifs et contenus tiers qui confirment votre positionnement.",
        ],
        bullets: [
          "Clarté éditoriale de la page",
          "Qualité des sources externes",
          "Cohérence des signaux de marque",
          "Réponse explicite à une question concrète",
        ],
      },
      {
        title: "Les 6 leviers pour apparaître sur Perplexity",
        paragraphs: [
          "Perplexity favorise les contenus et les sources qui l’aident à répondre vite, clairement et de manière fiable. Il faut donc travailler vos pages et votre écosystème comme un ensemble.",
        ],
        subsections: [
          {
            title: "1. Créer des contenus qui répondent directement aux questions",
            paragraphs: [
              "Les pages qui répondent clairement aux questions des prospects ont plus de chances d’être citées. Un contenu answer-first réduit l’effort d’interprétation du moteur.",
            ],
          },
          {
            title: "2. Structurer les pages avec des titres clairs",
            paragraphs: [
              "Une hiérarchie de titres nette aide Perplexity à comprendre le sujet, la promesse de la page et les réponses qu’elle contient.",
            ],
          },
          {
            title: "3. Renforcer les sources externes fiables",
            paragraphs: [
              "Les profils, annuaires, médias, comparatifs et contenus tiers peuvent renforcer votre crédibilité et fournir des confirmations utiles à la marque.",
            ],
          },
          {
            title: "4. Travailler les entités de marque",
            paragraphs: [
              "Perplexity doit comprendre qui vous êtes, ce que vous faites, pour qui et dans quelle zone. Une marque lisible est plus facile à citer.",
            ],
          },
          {
            title: "5. Ajouter des données structurées utiles",
            paragraphs: [
              "Schema.org n’est pas une garantie, mais il aide Google et les moteurs IA à interpréter plus proprement vos services, vos FAQ et votre organisation.",
            ],
          },
          {
            title: "6. Suivre les requêtes et les sources citées",
            paragraphs: [
              "Tester les questions réelles de vos prospects permet de voir si Perplexity vous cite, qui prend votre place et quelles sources sont utilisées.",
            ],
          },
        ],
      },
      {
        title: "Pourquoi votre site seul ne suffit pas",
        paragraphs: [
          "Un bon site reste indispensable, mais il ne suffit pas toujours pour apparaître dans Perplexity. Le moteur compare souvent plusieurs sources avant de construire une réponse.",
          "C’est pour cela que les mentions de marque, les profils d’entreprise, les annuaires, les plateformes sectorielles et les contenus externes jouent un rôle complémentaire au SEO classique.",
        ],
        bullets: [
          "Votre site officiel",
          "Vos profils et fiches",
          "Les médias et comparatifs",
          "Les plateformes utiles à votre secteur",
        ],
      },
      {
        title: "Comment suivre votre visibilité sur Perplexity",
        paragraphs: [
          "Le plus simple est de partir des requêtes clients concrètes. Testez des formulations commerciales, comparatives et locales pour observer si votre marque est citée et comment elle est décrite.",
          "Ce suivi doit être rapproché de votre stratégie globale. Une marque plus visible dans Perplexity l’est souvent aussi grâce à un meilleur travail de contenu, de sources et de structure sur Google et les autres moteurs IA.",
        ],
        bullets: [
          "Questions business prioritaires",
          "Comparaisons entre concurrents",
          "Requêtes locales ou sectorielles",
          "Sources citées dans les réponses",
        ],
      },
    ],
    faqItems: [
      {
        question: "Comment se référencer sur Perplexity ?",
        answer:
          "Il faut travailler des contenus answer-first, des titres clairs, des sources externes cohérentes, des données structurées utiles et un suivi régulier des requêtes où vos clients cherchent une solution.",
      },
      {
        question: "Quelle différence entre Google et Perplexity ?",
        answer:
          "Google renvoie surtout une liste de résultats. Perplexity répond directement à la question et met en avant les sources qu’il juge pertinentes pour construire cette réponse.",
      },
      {
        question: "Perplexity cite-t-il toujours ses sources ?",
        answer:
          "Perplexity affiche souvent ses sources, mais cela ne signifie pas qu’il reprendra toujours votre site officiel. Il peut s’appuyer sur plusieurs contenus et plateformes.",
      },
      {
        question: "Est-ce que Schema.org aide pour Perplexity ?",
        answer:
          "Schema.org peut aider à mieux structurer vos pages et à clarifier vos entités, mais il doit s’inscrire dans un ensemble plus large avec contenus, sources et cohérence de marque.",
      },
      {
        question: "Combien de temps faut-il pour apparaître sur Perplexity ?",
        answer:
          "Cela dépend de la clarté de votre site, de vos sources externes et de la concurrence sur vos requêtes. Les premiers signaux peuvent évoluer en quelques semaines, mais le travail se construit dans la durée.",
      },
      {
        question: "Le GEO remplace-t-il le SEO ?",
        answer:
          "Non. Le GEO complète le SEO. Le SEO reste la base pour Google, et le GEO prolonge cette base vers les moteurs IA comme Perplexity, ChatGPT ou Gemini.",
      },
    ],
  },
  "apparaitre-chatgpt-client-cherche-entreprise": {
    slug: "apparaitre-chatgpt-client-cherche-entreprise",
    title: "Comment se référencer sur ChatGPT ?",
    seoTitle: "Comment se référencer sur ChatGPT ? Guide SEO IA",
    description:
      "Découvrez comment se référencer sur ChatGPT : SEO, GEO, contenus answer-first, Schema.org, citations, sources de confiance et suivi des requêtes IA.",
    date: "10 mai 2026",
    readingTime: "6 min",
    category: "ChatGPT",
    articleSection: "Référencement ChatGPT",
    keywords: [
      "comment se référencer sur ChatGPT",
      "référencement ChatGPT",
      "apparaître dans ChatGPT",
      "référencement IA ChatGPT",
      "visibilité ChatGPT",
      "être cité par ChatGPT",
      "sources citées par les IA",
      "stratégie SEO / GEO",
    ],
    faqTitle: "FAQ sur le référencement ChatGPT",
    quickAnswer: {
      question: "Comment se référencer sur ChatGPT ?",
      answer:
        "Pour se référencer sur ChatGPT, il faut rendre votre entreprise claire, fiable et citable : site bien structuré, contenus qui répondent aux questions clients, données Schema.org, sources externes cohérentes, mentions de marque et suivi des prompts où vos prospects cherchent une solution.",
    },
    contextualLinks: [
      { label: "Notre offre SEO / GEO", href: "/offre" },
      { label: "Agence SEO / GEO à Nantes", href: "/agence-seo-geo-nantes" },
      { label: "Audit SEO / GEO", href: "/blog/audit-seo-geo-visibilite-ia" },
      { label: "Schema.org pour le GEO", href: "/blog/schema-org-guide-complet-geo" },
      { label: "Sources citées par les IA", href: "/blog/sources-citees-ia-site-ne-suffit-pas" },
      { label: "Guide llms.txt", href: "/blog/llms-txt-guide-pratique" },
    ],
    bodyCta: {
      intro: "Pour savoir si votre entreprise apparaît déjà dans les réponses IA, vous pouvez demander un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "comment-se-referencer-sur-perplexity",
      "veille-concurrentielle-seo-ia-serp-locales",
      "sources-citees-ia-site-ne-suffit-pas",
    ],
    intro:
      "Quand un prospect demande à ChatGPT quelle entreprise choisir, la réponse ne sort pas de nulle part. Elle repose sur des signaux que votre marque peut renforcer. Se référencer sur ChatGPT demande donc un travail de clarté, de structure, de sources et de suivi des requêtes.",
    sections: [
      {
        title: "Pourquoi le référencement ChatGPT devient important",
        paragraphs: [
          "Le référencement ChatGPT devient important parce que certains prospects demandent déjà directement à une IA quelle agence choisir, quel prestataire contacter ou quelle solution comparer. Si votre marque n’apparaît pas dans ces réponses, un concurrent peut capter la demande avant même la visite de votre site.",
          "Cette évolution ne remplace pas Google. Elle ajoute un nouveau moment de décision dans lequel la visibilité dépend autant de la clarté de votre marque que de sa capacité à être citée.",
        ],
        bullets: [
          "Nouveaux parcours de recherche conversationnelle",
          "Réponses directes avant le clic",
          "Comparaison de plusieurs marques dans la même réponse",
        ],
      },
      {
        title: "Comment ChatGPT choisit les entreprises qu’il cite",
        paragraphs: [
          "ChatGPT ne choisit pas une marque au hasard. Il s’appuie sur la qualité du site, la clarté des pages, la cohérence du positionnement, les sources externes disponibles et les preuves que la marque apporte.",
          "Quand une entreprise est lisible, bien décrite et confirmée par plusieurs sources crédibles, elle a plus de chances d’être comprise puis citée dans une réponse.",
        ],
        bullets: [
          "Contenus clairs et answer-first",
          "Structure du site et données utiles",
          "Sources externes cohérentes",
          "Mentions de marque et signaux de confiance",
        ],
      },
      {
        title: "Les 6 bases pour se référencer sur ChatGPT",
        paragraphs: [
          "Se référencer sur ChatGPT repose sur des bases concrètes. Elles relient votre site, vos contenus, votre écosystème de sources et votre manière de suivre les requêtes conversationnelles.",
        ],
        subsections: [
          {
            title: "1. Clarifier votre entité",
            paragraphs: [
              "ChatGPT doit comprendre qui vous êtes, ce que vous faites, pour qui, où et avec quelles preuves. Une entité floue est difficile à recommander.",
            ],
          },
          {
            title: "2. Créer des contenus answer-first",
            paragraphs: [
              "Vos pages doivent répondre clairement aux questions que vos clients posent : quelle agence choisir, quel hôtel réserver, quel prestataire contacter, quelle solution comparer.",
            ],
          },
          {
            title: "3. Structurer votre site avec Schema.org",
            paragraphs: [
              "Les données structurées aident Google et les moteurs IA à comprendre vos pages, vos services, vos FAQ et votre organisation.",
            ],
          },
          {
            title: "4. Renforcer les sources externes",
            paragraphs: [
              "ChatGPT ne lit pas seulement votre site. Il peut s’appuyer sur des sources externes : annuaires, profils, médias, plateformes, avis, mentions et contenus tiers.",
            ],
          },
          {
            title: "5. Travailler les requêtes conversationnelles",
            paragraphs: [
              "Les clients ne tapent pas seulement des mots-clés. Ils posent des questions longues, comparatives et très orientées besoin.",
            ],
          },
          {
            title: "6. Suivre les prompts et les concurrents cités",
            paragraphs: [
              "Il faut tester régulièrement les requêtes où vos clients cherchent une solution et observer qui est cité à votre place.",
            ],
          },
        ],
      },
      {
        title: "Ce que le SEO classique ne suffit plus à couvrir",
        paragraphs: [
          "Le SEO classique reste essentiel pour Google, mais il ne couvre pas à lui seul les réponses générées par les IA. Une page bien positionnée n’est pas automatiquement une page citée.",
          "Le référencement ChatGPT demande donc une couche supplémentaire : travail de l’entité, des sources, des contenus orientés réponse et de la surveillance des prompts clients.",
        ],
        bullets: [
          "Le SEO travaille le classement",
          "Le GEO travaille la citation",
          "Les deux se complètent dans une même stratégie",
        ],
      },
      {
        title: "Comment mesurer votre visibilité dans ChatGPT",
        paragraphs: [
          "La mesure commence par des prompts concrets. Posez à ChatGPT les questions qu’un prospect formulerait pour comparer des entreprises, des hôtels ou des solutions. Notez si votre marque est citée, comment elle est décrite et quelles sources semblent mobilisées.",
          "Ce suivi gagne à être rapproché d’un audit de visibilité plus large. Vous reliez ainsi ChatGPT, Google, les sources citées et les concurrents visibles dans une même lecture stratégique.",
        ],
        bullets: [
          "Prompts à forte intention commerciale",
          "Concurrents recommandés",
          "Sources citées et ton des réponses",
          "Évolution mensuelle de la présence IA",
        ],
      },
    ],
    faqItems: [
      {
        question: "Comment se référencer sur ChatGPT ?",
        answer:
          "Il faut rendre votre entreprise claire, crédible et citable grâce à des pages structurées, des contenus answer-first, des données Schema.org, des sources externes cohérentes et un suivi régulier des prompts clients.",
      },
      {
        question: "Peut-on garantir d’apparaître dans ChatGPT ?",
        answer:
          "Non. On peut améliorer fortement les signaux qui aident ChatGPT à comprendre et citer votre marque, mais aucune apparition ne peut être garantie sur toutes les requêtes.",
      },
      {
        question: "Le SEO aide-t-il à être cité dans ChatGPT ?",
        answer:
          "Oui. Un bon SEO améliore la structure, la clarté et la qualité de vos pages. Le GEO prolonge ensuite ce travail vers la citation dans les moteurs IA.",
      },
      {
        question: "Combien de temps faut-il pour être visible dans ChatGPT ?",
        answer:
          "Cela dépend de l’état de votre site, de la clarté de votre marque, de vos sources externes et de la concurrence. Les premiers signaux peuvent évoluer en quelques semaines, mais le travail se construit dans la durée.",
      },
      {
        question: "ChatGPT utilise-t-il uniquement le site officiel d’une entreprise ?",
        answer:
          "Non. ChatGPT peut s’appuyer sur plusieurs sources : site officiel, annuaires, profils, médias, avis, plateformes et contenus tiers.",
      },
      {
        question: "Quelle différence entre référencement ChatGPT, SEO IA et GEO ?",
        answer:
          "Le référencement ChatGPT cible la visibilité dans ChatGPT. Le SEO IA élargit le sujet aux moteurs de réponse. Le GEO désigne plus largement le travail qui aide une marque à être comprise, citée et recommandée par les IA.",
      },
    ],
  },
  "veille-concurrentielle-seo-ia-serp-locales": {
    slug: "veille-concurrentielle-seo-ia-serp-locales",
    title: "Veille concurrentielle SEO & IA : suivre vos concurrents",
    seoTitle: "Veille concurrentielle SEO & IA : suivre vos concurrents",
    description:
      "Découvrez comment suivre vos concurrents sur Google, ChatGPT, Gemini, Perplexity et les SERP locales pour identifier qui capte la demande avant vous.",
    date: "11 mai 2026",
    dateModified: "12 juin 2026",
    readingTime: "11 min",
    category: "SEO / GEO",
    articleSection: "Veille concurrentielle SEO et IA",
    keywords: [
      "veille concurrentielle SEO",
      "veille concurrentielle IA",
      "analyse concurrents SEO",
      "SERP locales",
      "concurrents visibles ChatGPT",
      "concurrents visibles Google",
      "monitoring SEO GEO",
    ],
    faqTitle: "FAQ sur la veille concurrentielle SEO et IA",
    quickAnswer: {
      question: "Pourquoi suivre aussi vos concurrents dans les IA ?",
      answer:
        "Vos concurrents ne gagnent plus seulement dans Google. Ils peuvent aussi être cités dans ChatGPT, Gemini, Perplexity, Google AI Overviews et les SERP locales. Une veille SEO / GEO permet d’identifier qui capte la demande avant vous et pourquoi.",
    },
    contextualLinks: [
      { label: "Notre offre SEO / GEO", href: "/offre" },
      { label: "Agence SEO / GEO à Nantes", href: "/agence-seo-geo-nantes" },
      { label: "Google AI Overviews", href: "/blog/google-ai-overviews-entreprises-comprendre" },
      { label: "Comment se référencer sur ChatGPT", href: "/blog/apparaitre-chatgpt-client-cherche-entreprise" },
      { label: "Audit SEO / GEO", href: "/blog/audit-seo-geo-visibilite-ia" },
    ],
    bodyCta: {
      intro: "Si vous voulez savoir qui prend votre place dans Google, ChatGPT, Gemini ou les SERP locales, vous pouvez demander un",
      linkLabel: "audit SEO / GEO",
      href: "/contact",
      outro: ".",
    },
    relatedSlugs: [
      "comment-se-referencer-sur-perplexity",
      "google-ai-overviews-entreprises-comprendre",
      "apparaitre-chatgpt-client-cherche-entreprise",
    ],
    intro:
      "Vos concurrents ne se surveillent plus seulement dans Google. Il faut aussi regarder qui apparaît dans ChatGPT, Gemini, Perplexity, Google AI Overviews et les résultats locaux. Sans cette lecture élargie, vous risquez de manquer les marques qui captent déjà la demande avant vous.",
    sections: [
      {
        title: "Pourquoi la veille SEO classique ne suffit plus",
        paragraphs: [
          "La veille SEO classique suit surtout les positions Google. Elle reste utile, mais elle ne montre pas qui est cité dans les moteurs IA ni comment la recommandation évolue avant le clic.",
          "Aujourd’hui, un concurrent peut être peu visible dans Google tout en étant souvent cité dans ChatGPT, Gemini ou Perplexity sur des requêtes comparatives. C’est pour cela qu’une veille SEO / GEO est devenue plus pertinente qu’une veille uniquement centrée sur les SERP classiques.",
        ],
        bullets: [
          "Positions Google",
          "Présence dans les AI Overviews",
          "Citations dans les moteurs IA",
        ],
      },
      {
        title: "Comment savoir si vos concurrents sont mentionnés dans les réponses IA ?",
        paragraphs: [
          "Pour savoir si vos concurrents sont mentionnés dans les réponses IA, posez à ChatGPT, Perplexity et Gemini les questions que vos clients posent réellement, en navigation privée. Relevez les marques citées, leur ordre d’apparition et les sources utilisées. Répétez le test chaque mois pour suivre l’évolution de votre visibilité.",
          "La méthode la plus fiable reste le test manuel. Ouvrez ChatGPT, Perplexity et Gemini sans être connecté à un compte, ou en navigation privée, pour limiter l’influence de votre historique. Posez ensuite les questions qu’un client poserait avant d’acheter.",
          "Quelques exemples de prompts à tester : « quel est le meilleur [votre service] à [votre ville] ? », « quelle entreprise recommandes-tu pour [le problème que vous résolvez] ? », « compare [votre marque] et [votre concurrent] ». Adaptez les formulations à votre secteur : un hôtel testera « où dormir à [ville] », un e-commerçant « quel [produit] choisir ».",
          "Notez chaque résultat dans un tableau de suivi : la requête testée, l’IA interrogée, les marques citées, votre présence ou absence, et les sources mentionnées dans la réponse. Les réponses des IA varient d’une session à l’autre : testez chaque prompt deux ou trois fois avant de tirer une conclusion.",
          "Ce relevé mensuel suffit pour détecter les tendances : un concurrent qui apparaît de plus en plus souvent, une source qui revient systématiquement, ou une question sur laquelle aucune marque locale n’est encore citée — c’est-à-dire une opportunité.",
        ],
      },
      {
        title: "Pourquoi vos concurrents apparaissent plus que vous dans les réponses IA ?",
        paragraphs: [
          "Vos concurrents apparaissent plus dans les réponses IA parce qu’ils sont présents dans les sources que ChatGPT, Perplexity et Gemini consultent : avis, annuaires, comparatifs, médias et fiches locales. Un site seul ne suffit pas. Les IA citent les marques décrites clairement et de façon cohérente sur plusieurs sources externes.",
          "Quatre raisons expliquent la plupart des écarts de visibilité IA. La première : la présence dans les sources externes. Les moteurs IA construisent leurs réponses à partir d’avis clients, d’annuaires, d’articles comparatifs et de fiches locales. Un concurrent bien couvert par ces sources sera cité, même avec un site moins bon que le vôtre.",
          "La deuxième : la structure du contenu. Les pages qui répondent directement aux questions, avec une réponse claire dès les premières lignes, sont plus facilement reprises par les IA que les pages purement commerciales.",
          "La troisième : la cohérence de l’entité. Nom, adresse, description et activité doivent être identiques partout — site, Google Business Profile, annuaires, réseaux. Une entité floue ou contradictoire est moins citée.",
          "La quatrième : le volume d’avis et de mentions. Les IA s’appuient sur ce que les autres disent de vous. Une marque dont personne ne parle en dehors de son propre site reste invisible dans les réponses générées.",
        ],
      },
      {
        title: "Ce qu’il faut surveiller sur Google",
        paragraphs: [
          "Sur Google, il faut suivre les requêtes business prioritaires, les pages qui remontent, les concurrents présents dans les résultats organiques et les signaux locaux qui influencent la demande.",
          "La présence dans le local pack, Google Maps ou une AI Overview peut changer la répartition de la visibilité, même si vos positions traditionnelles restent stables.",
        ],
        bullets: [
          "Positions sur les requêtes cœur de business",
          "Présence dans les AI Overviews",
          "Concurrents visibles dans le local pack",
          "Pages concurrentes qui répondent mieux",
        ],
      },
      {
        title: "Ce qu’il faut surveiller dans ChatGPT, Gemini et Perplexity",
        paragraphs: [
          "Dans les moteurs IA, le sujet n’est plus seulement le classement, mais la citation. Il faut observer quelles marques sont nommées, comment elles sont décrites et quelles sources semblent utilisées pour construire la réponse.",
          "Cette lecture permet d’identifier les concurrents cités à votre place, mais aussi les thèmes sur lesquels votre marque manque encore de clarté ou de crédibilité.",
        ],
        bullets: [
          "Prompts clients réels",
          "Marques citées dans les réponses",
          "Sources et plateformes mentionnées",
          "Comparatifs ou formulations récurrentes",
        ],
      },
      {
        title: "Pourquoi les SERP locales changent la donne",
        paragraphs: [
          "Les SERP locales restent décisives pour les PME, commerces, hôtels et services de proximité. Une requête comme “meilleur cabinet + ville” ou “agence SEO + ville” fait souvent remonter des cartes, avis, fiches et résultats locaux avant même un contenu éditorial.",
          "Cela oblige à surveiller Google Business Profile, Google Maps, les avis, les annuaires et la cohérence de votre présence locale dans une même logique de veille.",
        ],
        bullets: [
          "Google Business Profile",
          "Google Maps",
          "Local pack et avis",
          "Requêtes “meilleur + service + ville”",
        ],
      },
      {
        title: "Une méthode simple de veille concurrentielle SEO / GEO",
        paragraphs: [
          "Une bonne veille commence par les requêtes qui comptent pour votre acquisition. Ensuite, elle élargit le suivi aux variantes locales, aux prompts IA et aux sources qui reviennent le plus souvent.",
        ],
        subsections: [
          {
            title: "1. Lister les requêtes business",
            paragraphs: [
              "Commencez par les requêtes qui traduisent une intention commerciale ou comparative forte.",
            ],
          },
          {
            title: "2. Ajouter les variantes locales",
            paragraphs: [
              "Ajoutez les villes, quartiers ou zones de chalandise qui influencent réellement votre marché.",
            ],
          },
          {
            title: "3. Tester les prompts IA",
            paragraphs: [
              "Posez les mêmes questions à ChatGPT, Gemini et Perplexity pour voir si les réponses convergent ou diffèrent.",
            ],
          },
          {
            title: "4. Noter les marques citées",
            paragraphs: [
              "Identifiez les concurrents qui reviennent le plus souvent et ceux qui sont absents malgré une présence Google correcte.",
            ],
          },
          {
            title: "5. Identifier les sources utilisées",
            paragraphs: [
              "Relevez les annuaires, profils, médias, plateformes et pages qui semblent servir de base aux réponses générées.",
            ],
          },
          {
            title: "6. Comparer les contenus concurrents",
            paragraphs: [
              "Analysez les pages qui répondent mieux, plus directement ou avec plus de preuves aux mêmes questions.",
            ],
          },
          {
            title: "7. Prioriser les actions",
            paragraphs: [
              "Transformez la veille en plan d’action mensuel pour améliorer vos contenus, vos sources et votre lisibilité locale.",
            ],
          },
        ],
      },
    ],
    faqItems: [
      {
        question: "Qu’est-ce qu’une veille concurrentielle SEO ?",
        answer:
          "C’est le suivi des requêtes, positions, pages et concurrents qui captent la visibilité organique sur Google sur vos sujets business.",
      },
      {
        question: "Pourquoi surveiller aussi ChatGPT, Gemini et Perplexity ?",
        answer:
          "Parce que ces moteurs peuvent recommander des concurrents avant même le clic. Une veille SEO classique ne montre pas toujours cette couche de recommandation.",
      },
      {
        question: "Qu’est-ce qu’une SERP locale ?",
        answer:
          "Une SERP locale est une page de résultats Google influencée par la localisation, avec souvent des cartes, des fiches Google Business Profile, des avis et des résultats proches.",
      },
      {
        question: "Comment savoir quels concurrents sont cités par les IA ?",
        answer:
          "Il faut tester les prompts que vos clients posent réellement, relever les marques mentionnées et analyser les sources qui reviennent le plus souvent.",
      },
      {
        question: "À quelle fréquence faire une veille SEO / GEO ?",
        answer:
          "Un suivi mensuel est une bonne base. Certaines requêtes stratégiques ou locales peuvent aussi mériter un contrôle plus fréquent selon votre marché.",
      },
      {
        question: "Quels outils utiliser pour surveiller sa visibilité ?",
        answer:
          "Google Search Console, Google Maps, les résultats Google, les prompts manuels dans ChatGPT, Gemini et Perplexity, ainsi qu’un tableau de suivi interne, suffisent déjà à construire une veille utile.",
      },
      {
        question: "Pourquoi un concurrent invisible sur Google peut-il être cité par ChatGPT ?",
        answer:
          "Parce que les moteurs IA ne s’appuient pas uniquement sur le classement Google. Un concurrent présent dans les avis, annuaires et comparatifs peut être cité par ChatGPT, Perplexity ou Gemini même avec un site mal positionné.",
      },
    ],
  },
  "seo-ia-ecommerce-recommandation-marketplace": {
    slug: "seo-ia-ecommerce-recommandation-marketplace",
    title: "SEO IA pour e-commerce : être recommandé avant la marketplace",
    seoTitle: "SEO IA e-commerce — PulseoAI",
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
    seoTitle: "Sources citées par les IA — PulseoAI",
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
    seoTitle: "SEO classique vs GEO — PulseoAI",
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
    seoTitle: "Google AI Overviews : guide entreprises",
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
  const seoTitle = article.seoTitle ?? `${article.title} | PulseoAI`;

  return {
    title: seoTitle,
    description: article.description,
    openGraph: {
      title: seoTitle,
      description: article.description,
      url: `https://www.pulseoai.fr/blog/${article.slug}`,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
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
