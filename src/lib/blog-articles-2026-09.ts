import type { BlogArticle, BlogPostMeta } from "@/lib/blog-posts";

/** Tableau simple rendu dans le corps d’un article. */
export type BlogTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

type SectionWithTable = BlogArticle["sections"][number] & {
  table?: BlogTable;
  subsections?: Array<NonNullable<BlogArticle["sections"][number]["subsections"]>[number] & { table?: BlogTable }>;
};

type ArticleWithTables = Omit<BlogArticle, "sections"> & { sections: SectionWithTable[] };

/**
 * Articles publies en septembre 2026.
 * Liens dans le texte : syntaxe [libelle](url). Un lien interne commence par /.
 * Regle de la maison : aucun chiffre sans source liee dans la meme phrase ou le meme paragraphe.
 */

const suivreVisibilite: ArticleWithTables = {
  slug: "suivre-visibilite-chatgpt-ia",
  title: "Suivre sa visibilité dans ChatGPT, Perplexity et Gemini : méthode et outils",
  seoTitle: "Suivre sa visibilité dans ChatGPT : méthode et outils",
  description:
    "Méthode manuelle avec un jeu de prompts, indicateurs à suivre, comparatif des outils et ce que la Search Console mesure vraiment sur AI Overviews et AI Mode.",
  date: "12 septembre 2026",
  dateModified: "12 septembre 2026",
  readingTime: "12 min",
  category: "SEO IA",
  articleSection: "SEO IA",
  keywords: [
    "suivre visibilité ChatGPT",
    "visibilité IA",
    "positionnement ChatGPT",
    "mesurer visibilité IA",
    "outil suivi ChatGPT",
    "Share of Model",
    "AI Overviews",
  ],
  intro:
    "Vous avez tapé le nom de votre entreprise dans ChatGPT, vous avez vu une réponse, et vous ne savez toujours pas si vous êtes visible. C’est normal : une réponse d’IA n’est ni une position ni un classement. Elle change d’un jour à l’autre, d’un compte à l’autre, d’un moteur à l’autre. Voici comment la mesurer proprement, à la main puis avec un outil.",
  quickAnswer: {
    question: "Comment suivre sa visibilité dans ChatGPT ?",
    answer:
      "Suivre sa visibilité dans ChatGPT consiste à poser régulièrement le même jeu de questions, celles que vos clients posent réellement, puis à noter si votre entreprise est mentionnée, si votre site est cité comme source, et qui apparaît à votre place. La mesure se répète chaque semaine sur plusieurs moteurs (ChatGPT, Perplexity, Gemini) pour dégager une tendance. Un outil de suivi automatise cette répétition, mais la méthode manuelle suffit pour démarrer.",
  },
  contextualLinks: [
    { label: "auditer sa visibilité IA", href: "/blog/audit-seo-geo-visibilite-ia" },
    { label: "apparaître sur ChatGPT", href: "/blog/referencement-chatgpt-apparaitre-ia" },
    { label: "notre offre GEO", href: "/offre" },
  ],
  bodyCta: {
    intro: "Vous voulez savoir où vous en êtes avant de construire votre suivi ?",
    linkLabel: "Demandez un audit de visibilité IA",
    href: "/contact",
    outro: ", on fait le premier relevé avec vous.",
  },
  relatedSlugs: [
    "audit-seo-geo-visibilite-ia",
    "sources-citees-ia-site-ne-suffit-pas",
    "google-ai-overviews-entreprises-comprendre",
  ],
  faqTitle: "FAQ : suivre sa visibilité dans les IA",
  faqItems: [
    {
      question: "Peut-on suivre sa visibilité ChatGPT gratuitement ?",
      answer:
        "Oui, avec un tableur et un jeu fixe de 20 à 30 prompts testés chaque semaine à la main. C’est suffisant pour une PME sur un marché local. La limite est le temps : dès qu’on multiplie les moteurs, les villes et les concurrents, un outil devient rentable.",
    },
    {
      question: "À quelle fréquence faut-il mesurer ?",
      answer:
        "Une fois par semaine, le même jour, avec les mêmes prompts. Une mesure isolée est un diagnostic, pas un suivi. C’est la répétition qui fait apparaître une tendance et qui permet de relier une action à un résultat.",
    },
    {
      question: "Faut-il suivre Claude, Mistral et Copilot en plus de ChatGPT ?",
      answer:
        "Commencez par ChatGPT, Perplexity et Gemini, qui couvrent l’essentiel des usages grand public en France. Ajoutez Copilot si vos clients sont en entreprise, et Mistral si votre secteur y est sensible. Chaque moteur en plus multiplie le temps de relevé.",
    },
    {
      question: "Existe-t-il une position dans ChatGPT comme sur Google ?",
      answer:
        "Non. ChatGPT ne classe pas dix résultats, il rédige une réponse dans laquelle il nomme ou non des entreprises. On mesure donc une fréquence de mention sur un jeu de prompts, pas un rang. Un outil qui vous annonce « position 3 dans ChatGPT » simplifie à l’excès.",
    },
    {
      question: "La Search Console suffit-elle pour mesurer sa visibilité IA ?",
      answer:
        "Non. Elle mesure uniquement les impressions de vos pages dans les fonctionnalités IA de Google (AI Overviews et AI Mode), sans les clics ni les requêtes. Elle ne dit rien de ChatGPT, Perplexity ou Gemini. C’est une brique du suivi, pas le suivi.",
    },
  ],
  sections: [
    {
      title: "Qu’est-ce que la visibilité IA et pourquoi elle ne se mesure pas comme une position Google ?",
      paragraphs: [
        "La visibilité IA désigne la fréquence à laquelle une entreprise est nommée, recommandée ou citée comme source dans les réponses générées par un assistant comme ChatGPT, Perplexity ou Gemini. Elle se mesure sur un ensemble de questions, pas sur une requête isolée.",
        "Sur Google, une page occupe une position stable et mesurable dans une liste de dix liens. Dans une IA, il n’y a pas de liste. L’assistant rédige un texte et décide, à chaque réponse, de nommer ou non votre entreprise. La même question posée deux fois peut donner deux réponses différentes, avec des marques différentes.",
        "Trois différences rendent la mesure classique inutilisable : la réponse varie d’un compte à l’autre selon l’historique de conversation, elle varie dans le temps parce que les moteurs se mettent à jour en continu, et elle varie selon le moteur parce que chacun puise dans des sources différentes. C’est pour cela que la visibilité IA se lit comme une fréquence sur un échantillon, jamais comme un rang.",
        "Si vous n’avez jamais fait le point, commencez par un [audit de visibilité IA](/blog/audit-seo-geo-visibilite-ia). Le suivi décrit ici est la suite logique de cet audit.",
      ],
    },
    {
      title: "Comment savoir si mon entreprise apparaît dans ChatGPT ?",
      paragraphs: [
        "La méthode manuelle tient en trois étapes et fonctionne sans aucun outil payant. Elle demande une heure la première semaine, puis vingt minutes par semaine.",
      ],
      subsections: [
        {
          title: "Étape 1 : construire un jeu de 20 prompts qui ressemblent aux questions de vos clients",
          paragraphs: [
            "Le piège est de tester votre nom. Vos clients ne tapent pas votre nom, ils décrivent un besoin. Un hôtelier ne teste pas « hôtel Dupont Nantes », il teste « où dormir à Nantes près de la gare pour un week-end en famille ». Le jeu de prompts doit couvrir trois familles.",
          ],
          bullets: [
            "Les prompts de découverte : le client ne connaît personne et cherche une solution. « Quel cabinet de recrutement pour un cadre industriel à Quimper ? »",
            "Les prompts de comparaison : le client hésite entre plusieurs options. « Quelle différence entre un hôtel hybride et une auberge de jeunesse à Bordeaux ? »",
            "Les prompts de marque : le client vous connaît et vérifie. « Que vaut l’hôtel X ? Quels sont ses points faibles ? »",
          ],
        },
        {
          title: "Étape 2 : poser les mêmes prompts chaque semaine, sur trois moteurs",
          paragraphs: [
            "Ouvrez une session sans historique (fenêtre privée ou nouvelle conversation), posez chaque prompt tel quel, et notez la réponse. Faites-le sur ChatGPT, Perplexity et Gemini. Le même jour de la semaine, à la même heure, pour limiter le bruit.",
            "Un seul relevé ne vaut rien. C’est la répétition qui transforme un test en mesure. Comptez quatre relevés avant de tirer une première conclusion.",
          ],
        },
        {
          title: "Étape 3 : noter trois choses par prompt, pas une",
          paragraphs: [
            "Pour chaque prompt et chaque moteur, votre tableur contient trois colonnes : votre entreprise est-elle mentionnée (oui/non), votre site est-il cité comme source (oui/non), et quels concurrents sont nommés. La troisième colonne est souvent la plus utile : elle vous dit qui prend votre place.",
          ],
        },
      ],
    },
    {
      title: "Mention, citation, source : les trois choses à mesurer séparément",
      paragraphs: [
        "Ces trois mots sont souvent confondus, et la confusion fausse toute la lecture. Une mention, c’est votre nom dans le texte de la réponse. Une citation, c’est votre site affiché comme source cliquable à côté de la réponse. Être source, c’est fournir l’information que l’IA a utilisée pour rédiger, même sans vous nommer.",
        "Une entreprise peut être mentionnée sans être citée : l’IA la connaît de réputation mais n’a pas consulté son site. Elle peut être citée sans être mentionnée : son article sert de source à une réponse générale. Les deux situations demandent des actions différentes. La première se travaille par la notoriété et les avis, la seconde par le contenu et sa structure. Nous détaillons ce second point dans [pourquoi votre site ne suffit pas à être cité](/blog/sources-citees-ia-site-ne-suffit-pas).",
      ],
      bullets: [
        "Mention : votre nom apparaît dans la réponse. Indicateur de notoriété.",
        "Citation : votre URL apparaît dans les sources. Indicateur de confiance dans votre contenu.",
        "Source silencieuse : votre contenu est utilisé sans lien. Se repère quand la réponse reprend vos formulations ou vos chiffres.",
      ],
    },
    {
      title: "Comment connaître son positionnement sur ChatGPT ?",
      paragraphs: [
        "Le positionnement sur ChatGPT n’existe pas au sens de Google. Ce qui existe, c’est une part de présence : sur vos 20 prompts, combien de fois votre entreprise est-elle nommée ? Certains outils appellent cela le Share of Model ou la part de voix IA. Si vous êtes mentionné sur 6 prompts sur 20, votre part de présence est de 30 %.",
        "Cet indicateur se compare dans le temps et face aux concurrents, jamais dans l’absolu. Passer de 3 à 7 mentions sur 20 en deux mois est un résultat. Être à 7 sur 20 quand votre concurrent principal est à 15 est un problème. Le chiffre seul ne dit rien.",
        "Deuxième nuance : l’ordre dans lequel les entreprises sont citées dans une réponse a un sens, mais il est instable. Être cité en premier trois semaines de suite est un signal. Être cité en premier une fois ne veut rien dire.",
      ],
    },
    {
      title: "Comment analyser la visibilité IA de ses concurrents ?",
      paragraphs: [
        "C’est la partie la plus rentable du suivi, et la plus négligée. Votre tableur contient déjà l’information : la colonne « concurrents nommés ». Au bout de quatre semaines, comptez les occurrences. Vous obtenez la liste des trois ou quatre entreprises que les IA recommandent à votre place, et sur quels types de prompts.",
        "Ensuite, regardez pourquoi. Ouvrez les sources citées par l’IA sur ces prompts. Dans la grande majorité des cas, ce ne sont pas les sites des concurrents mais des pages tierces : annuaires, comparatifs, articles de presse locale, fiches Google, avis. Le concurrent est visible parce que des tiers parlent de lui. C’est là que se joue l’écart, et c’est exactement ce que nous décrivons dans notre méthode pour [apparaître sur ChatGPT](/blog/referencement-chatgpt-apparaitre-ia).",
      ],
    },
    {
      title: "Quel outil pour suivre sa visibilité dans ChatGPT, Gemini et Perplexity au même endroit ?",
      paragraphs: [
        "Dès que le jeu de prompts dépasse une trentaine de questions, ou que vous suivez plusieurs villes, la méthode manuelle prend trop de temps. Les outils ci-dessous automatisent le relevé : ils posent vos prompts chaque jour, détectent les mentions, listent les sources citées et tracent l’évolution. Les caractéristiques indiquées viennent des pages officielles des éditeurs au moment de la publication ; les tarifs changent souvent, vérifiez-les sur leur site.",
      ],
      table: {
        caption: "Comparatif des principaux outils de suivi de visibilité IA (septembre 2026)",
        headers: ["Outil", "Ce que dit la page officielle", "Pour qui"],
        rows: [
          [
            "[Qwairy](https://www.qwairy.co/pricing)",
            "Outil français. Plan Starter facturé 790 € HT par an, 1 300 crédits par mois, 1 espace de travail, connexion Search Console et Bing Webmaster Tools.",
            "PME française qui veut un outil en français et un budget annuel connu d’avance.",
          ],
          [
            "[Peec AI](https://peec.ai/pricing)",
            "Éditeur allemand. Plan Starter : 50 prompts, 3 modèles au choix, utilisateurs illimités, relevé quotidien, 1 projet.",
            "Équipe marketing qui suit une marque sur plusieurs moteurs avec un relevé quotidien.",
          ],
          [
            "[Profound](https://www.tryprofound.com/pricing)",
            "Plan Starter : suivi de ChatGPT uniquement, 50 prompts. Plan Growth : 3 moteurs, 100 prompts. Enterprise : jusqu’à 9 moteurs.",
            "Grands comptes et agences qui gèrent plusieurs marques et pays.",
          ],
          [
            "[Semrush](https://www.semrush.com/pricing/)",
            "Module de visibilité IA intégré aux abonnements de la suite SEO, à partir du plan orienté « recherche organique et IA ».",
            "Entreprise déjà équipée Semrush qui ne veut pas ajouter un outil.",
          ],
          [
            "Tableur maison",
            "Gratuit. 20 à 30 prompts, 3 moteurs, un relevé hebdomadaire, trois colonnes par ligne.",
            "TPE et PME sur un marché local, ou toute entreprise qui démarre.",
          ],
        ],
      },
    },
    {
      title: "Que mesure la Search Console sur AI Overviews et AI Mode ?",
      paragraphs: [
        "Depuis le 3 juin 2026, Google propose dans la Search Console un rapport dédié aux performances dans l’IA générative, d’abord réservé à un sous-ensemble de sites puis [déployé à tous les sites le 31 août 2026](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). Il isole les apparitions de vos pages dans les AI Overviews, l’AI Mode et les fonctionnalités génératives de Discover.",
        "Ce rapport donne cinq dimensions : les impressions, les pages concernées, les pays, les appareils et les dates, avec une granularité qui descend à l’heure, comme l’indique la [documentation officielle du rapport](https://support.google.com/webmasters/answer/16984139). Il ne donne ni les clics, ni les requêtes qui ont déclenché l’apparition. Vous savez qu’une page a nourri une réponse IA, vous ne savez pas laquelle ni si quelqu’un a cliqué.",
        "Pour un site français, ce rapport a pris du sens le 22 juillet 2026, date à laquelle [Google a déployé les AI Overviews et l’AI Mode en France](https://www.abondance.com/20260722-2640402-lancement-officielle-ai-overviews-france.html), deux ans après les États-Unis. Nous expliquons ce que cela change dans notre article sur [Google AI Overviews pour les entreprises](/blog/google-ai-overviews-entreprises-comprendre).",
        "Retenez la limite : la Search Console mesure Google, et seulement Google. Pour ChatGPT, Perplexity et Gemini, il n’existe aucun rapport officiel. C’est précisément pour cela que le jeu de prompts reste indispensable.",
      ],
    },
    {
      title: "Scénario illustratif : un hôtel suit sa visibilité pendant huit semaines",
      paragraphs: [
        "Le cas ci-dessous est un scénario type, construit pour montrer ce qu’un suivi produit concrètement. Les chiffres ne proviennent pas d’un client réel.",
        "Un hôtel indépendant de 40 chambres, en centre-ville, construit un jeu de 20 prompts : 10 de découverte (« hôtel calme près de la gare pour un déplacement pro », « où dormir avec des enfants à proximité du centre »), 6 de comparaison (« hôtel X ou hôtel Y pour un séjour de deux nuits ») et 4 de marque. Il relève chaque lundi sur ChatGPT, Perplexity et Gemini.",
        "Semaine 1 : l’hôtel est mentionné sur 3 prompts sur 20 dans ChatGPT, 4 dans Perplexity, 2 dans Gemini. Son site n’est cité comme source nulle part. Deux concurrents reviennent sur plus de la moitié des prompts de découverte. Les sources citées sont des pages d’avis et un article de presse locale qui parle des deux concurrents.",
        "Semaines 2 à 4 : l’hôtel complète sa fiche Google, répond aux avis en retard, ajoute sur son site une page qui répond aux questions des prompts de découverte (accès depuis la gare, chambres familiales, parking). Aucun changement mesurable sur les trois premiers relevés, ce qui est attendu.",
        "Semaines 5 à 8 : la page dédiée commence à apparaître comme source dans Perplexity sur 3 prompts. Les mentions passent à 6 sur 20 dans ChatGPT, 8 dans Perplexity, 4 dans Gemini. Un des deux concurrents reste devant sur les prompts de comparaison. Le suivi montre la prochaine action : obtenir une mention dans un média local ou un comparatif, puisque c’est ce qui porte le concurrent.",
        "Ce qui compte dans ce scénario n’est pas le niveau atteint, c’est la lecture : sans relevé hebdomadaire, l’hôtel n’aurait vu ni le délai de quatre semaines avant le premier effet, ni la source exacte de l’avance du concurrent.",
      ],
    },
    {
      title: "Les erreurs qui faussent la mesure",
      paragraphs: [
        "La plupart des suivis échouent sur des détails de méthode, pas sur l’outil.",
      ],
      bullets: [
        "Tester avec son compte habituel : l’historique de conversation oriente les réponses. Utilisez une session vierge.",
        "Tester son nom au lieu du besoin du client : vous mesurez votre notoriété, pas votre capacité à être recommandé.",
        "Conclure sur un seul relevé : la variabilité entre deux réponses identiques est trop forte. Quatre relevés minimum.",
        "Ne suivre que ChatGPT : Perplexity cite beaucoup plus de sources, Gemini s’appuie sur l’index Google. Les trois se comportent différemment.",
        "Changer les prompts en cours de route : un prompt modifié casse la série. Ajoutez, ne remplacez pas.",
        "Lire les impressions IA de la Search Console comme du trafic : ce sont des apparitions, pas des visites.",
      ],
    },
    {
      title: "Ce qu’il faut retenir",
      paragraphs: [],
      bullets: [
        "La visibilité IA se mesure en fréquence de mention sur un jeu de prompts, jamais en position.",
        "Trois indicateurs distincts : mention, citation, source. Trois actions différentes.",
        "Un tableur, 20 prompts, 3 moteurs, un relevé par semaine suffisent pour démarrer.",
        "La colonne « concurrents nommés » est la plus utile : elle désigne la prochaine action.",
        "La Search Console mesure Google uniquement, en impressions, sans clics ni requêtes.",
        "Comptez quatre à huit semaines entre une action et son effet mesurable dans les réponses.",
      ],
    },
  ],
};

const agentIaSurMesure: ArticleWithTables = {
  slug: "agent-ia-sur-mesure-pme",
  title: "Agent IA sur mesure pour PME : ce qu’il fait vraiment, exemples et mise en place",
  seoTitle: "Agent IA sur mesure pour PME : exemples et mise en place",
  description:
    "Ce qu’un agent IA sur mesure fait concrètement dans une PME : relances, rendez-vous, prospection, reporting. Mise en place, outils connectés et facteurs de coût.",
  date: "12 septembre 2026",
  dateModified: "12 septembre 2026",
  readingTime: "10 min",
  category: "Agents IA",
  articleSection: "Agents IA",
  keywords: [
    "agent IA sur mesure",
    "agent IA pour PME",
    "agence agent IA",
    "création d’agent IA",
    "automatisation PME",
    "relances automatiques",
  ],
  intro:
    "Un agent IA sur mesure, ce n’est pas un chatbot de plus sur votre site. C’est un système qui lit vos mails, consulte votre agenda, relance vos contacts et prépare vos rendez-vous, dans vos outils actuels, sans que vous ayez à l’ouvrir. Voici ce qu’il fait réellement dans une PME, avec des cas concrets, et comment il se met en place.",
  quickAnswer: {
    question: "Qu’est-ce qu’un agent IA sur mesure ?",
    answer:
      "Un agent IA sur mesure est un programme construit pour une entreprise précise, connecté à ses outils (messagerie, agenda, CRM, site web), qui exécute de bout en bout une tâche répétitive : relancer une base de contacts, qualifier une demande entrante, prendre un rendez-vous, produire un reporting. Contrairement à un chatbot, il n’attend pas qu’on lui parle : il se déclenche sur un événement, comprend le contexte et agit, avec ou sans validation humaine selon le niveau de risque.",
  },
  contextualLinks: [
    { label: "notre service d’agents IA", href: "/agents-ia" },
    { label: "utiliser l’IA dans son entreprise", href: "/blog/comment-utiliser-ia-entreprise" },
    { label: "choisir ses outils IA", href: "/blog/outils-ia-pme" },
  ],
  bodyCta: {
    intro: "Vous avez une tâche répétitive en tête ?",
    linkLabel: "Décrivez-la nous en dix lignes",
    href: "/contact",
    outro: " et on vous dit en 48 heures si un agent peut la prendre.",
  },
  relatedSlugs: ["comment-utiliser-ia-entreprise", "outils-ia-pme", "hotel-invisible-chatgpt"],
  faqTitle: "FAQ : agent IA sur mesure",
  faqItems: [
    {
      question: "Combien de temps faut-il pour mettre en place un agent IA ?",
      answer:
        "Comptez environ un mois entre le premier échange et un agent qui tourne dans vos outils : une semaine de cadrage, deux semaines de construction et de tests sur vos données réelles, une semaine de mise en production avec validation humaine.",
    },
    {
      question: "Faut-il des compétences techniques en interne ?",
      answer:
        "Non. Ce qu’on attend de vous, c’est de décrire la tâche telle que vous la faites aujourd’hui et de valider les premières actions de l’agent. La connexion aux outils et la maintenance sont prises en charge.",
    },
    {
      question: "Un agent IA peut-il remplacer un salarié ?",
      answer:
        "Il retire des tâches, pas des personnes. Un agent prend les relances, le tri et la préparation ; le salarié garde la relation, la décision et les cas particuliers. Dans une PME, le temps récupéré va d’abord au dirigeant.",
    },
    {
      question: "Mes données sont-elles en sécurité ?",
      answer:
        "L’agent accède uniquement aux outils et aux données nécessaires à sa tâche, avec des droits limités. L’hébergement, les accès et la conservation des données sont fixés au cadrage, avant toute construction.",
    },
    {
      question: "Quelle est la différence avec un outil IA prêt à l’emploi ?",
      answer:
        "Un outil prêt à l’emploi fait une tâche générique de la même façon pour tous ses clients. Un agent sur mesure suit votre processus, vos règles et vos outils. Le premier convient quand votre besoin est standard, le second quand votre façon de travailler fait la différence.",
    },
  ],
  sections: [
    {
      title: "Qu’est-ce qu’un agent IA sur mesure ?",
      paragraphs: [
        "Un agent IA sur mesure est un programme qui combine un modèle de langage, comme ceux de ChatGPT, Claude ou Mistral, avec des connexions à vos outils et des règles propres à votre entreprise, pour exécuter une tâche complète sans intervention à chaque étape. Le mot important est « complète » : l’agent ne rédige pas seulement un brouillon de mail, il lit la demande, retrouve l’historique du contact, décide de la réponse, l’envoie ou la soumet, et note ce qu’il a fait.",
        "Anthropic, l’éditeur de Claude, décrit un agent comme un système où le modèle [dirige lui-même son processus et l’usage de ses outils](https://www.anthropic.com/research/building-effective-agents), par opposition aux workflows où chaque étape est codée à l’avance. C’est cette capacité à décider de la prochaine action qui distingue un agent d’une automatisation classique.",
        "« Sur mesure » signifie que l’agent est construit pour votre processus : vos outils, vos règles de relance, votre ton, vos exceptions. C’est ce que nous proposons avec notre [service d’agents IA](/agents-ia), et c’est ce qui fait la différence avec un outil générique qui applique le même comportement à tous ses clients.",
      ],
    },
    {
      title: "Agent IA, chatbot, automatisation : quelle différence ?",
      paragraphs: [
        "Ces trois mots sont utilisés pour vendre des choses très différentes. La confusion coûte cher, parce qu’on achète un chatbot en croyant acheter un agent.",
      ],
      bullets: [
        "Un chatbot répond quand on lui parle. Il attend une question, produit une réponse, et s’arrête. Il ne se déclenche jamais seul et n’agit pas dans vos outils.",
        "Une automatisation exécute une règle fixe : si un formulaire est rempli, alors envoyer un mail. Elle est fiable sur les cas prévus et casse dès qu’un cas particulier se présente, parce qu’elle ne comprend pas le contenu.",
        "Un agent se déclenche sur un événement, lit le contenu, comprend le contexte et choisit l’action. Il gère les exceptions parce qu’il interprète au lieu de suivre une règle. C’est le seul des trois qui retire réellement une tâche de votre quotidien.",
      ],
    },
    {
      title: "À quoi sert un agent IA dans une PME ?",
      paragraphs: [
        "Les cas rentables sont toujours les mêmes, parce qu’ils réunissent trois conditions : la tâche revient souvent, l’information existe déjà quelque part, et l’erreur coûte peu. Voici les cinq que nous rencontrons le plus.",
      ],
      subsections: [
        {
          title: "Relancer une base de contacts existante",
          paragraphs: [
            "Vous avez une base de clients ou de prospects, souvent des centaines d’adresses, que personne ne relance parce que ça prend des heures. L’agent segmente la base, rédige une relance adaptée à chaque situation (ancien client, devis sans suite, contact inactif), l’envoie ou vous la soumet, et traite les réponses : il classe les intéressés, propose un créneau, écarte les refus.",
          ],
        },
        {
          title: "Prendre et confirmer des rendez-vous",
          paragraphs: [
            "Une demande arrive par mail, formulaire ou message. L’agent lit la demande, consulte l’agenda, propose des créneaux, confirme, envoie le rappel la veille et déplace le rendez-vous si le client répond qu’il a un empêchement. La tâche entière disparaît de votre journée.",
          ],
        },
        {
          title: "Qualifier les demandes entrantes",
          paragraphs: [
            "Avant que vous ouvriez un mail, l’agent a déjà retrouvé l’historique du contact, résumé la demande, estimé son urgence et préparé une réponse. Vous arrivez avec le dossier monté au lieu de le monter vous-même.",
          ],
        },
        {
          title: "Prospecter sur une cible définie",
          paragraphs: [
            "Vous décrivez la cible (secteur, zone, taille). L’agent constitue la liste, personnalise chaque message à partir du site ou de l’actualité de l’entreprise visée, envoie, et relance selon un calendrier. Vous n’intervenez que sur les réponses positives.",
          ],
        },
        {
          title: "Produire le reporting hebdomadaire",
          paragraphs: [
            "Chaque lundi, l’agent va chercher les chiffres dans vos outils (réservations, ventes, demandes, avis), les met en forme, signale ce qui sort de l’ordinaire et vous envoie une synthèse. Fini le tableur du dimanche soir.",
          ],
        },
      ],
    },
    {
      title: "Scénario illustratif : deux hôtels, une base email, un agent",
      paragraphs: [
        "Le cas ci-dessous est un scénario type, construit pour montrer ce qu’un agent change dans une semaine réelle. Les chiffres sont illustratifs et ne proviennent pas d’un client.",
        "Un dirigeant possède deux hôtels dans deux villes différentes. Il dispose d’une base d’environ 3 000 adresses email de clients passés et de contacts professionnels, jamais exploitée faute de temps. Chaque jour, il traite lui-même les demandes de réservation de groupe et de séminaire, entre une heure et deux heures selon la saison.",
        "L’agent est branché sur la messagerie, l’agenda et le logiciel de réservation. Il relance la base par vagues de 150 adresses par semaine, avec un message différent pour les anciens clients et pour les entreprises de la zone. Il lit les réponses, écarte les refus, et propose un créneau d’appel ou de visite aux intéressés. En parallèle, il qualifie chaque demande de groupe entrante et prépare un devis type que le dirigeant valide en deux minutes.",
        "Après quatre semaines, dans ce scénario, la base a été relancée à hauteur de 600 adresses, une trentaine de réponses ont été traitées, une dizaine de rendez-vous ont été pris sans intervention du dirigeant, et le traitement quotidien des demandes est passé d’une heure et demie à un quart d’heure de validation. L’agent n’a pas vendu une seule chambre : il a créé les conditions pour que le dirigeant vende, avec le temps qu’il n’avait plus.",
        "Ce qui compte dans ce scénario, c’est la nature du gain : ce n’est pas une prouesse technique, c’est du temps de dirigeant récupéré sur des tâches que personne ne faisait.",
      ],
    },
    {
      title: "De quoi dépend le coût d’un agent IA sur mesure ?",
      paragraphs: [
        "Le coût n’est pas lié à l’intelligence de l’agent, il est lié à la complexité de ce qu’il touche. Quatre facteurs le font varier.",
      ],
      bullets: [
        "Le nombre d’outils à connecter : une messagerie seule, ou une messagerie plus un agenda, un CRM et un logiciel métier.",
        "Le niveau d’autonomie : un agent qui prépare et soumet coûte moins qu’un agent qui exécute seul, parce que le second demande plus de garde-fous et de tests.",
        "La qualité des données de départ : une base propre s’exploite tout de suite, une base à nettoyer ajoute une étape.",
        "Le volume : relancer 300 contacts et en relancer 30 000 ne demandent pas la même infrastructure.",
      ],
    },
    {
      title: "Comment se passe la mise en place d’un agent IA ?",
      paragraphs: [
        "La mise en place suit toujours la même séquence. La durée totale se compte en semaines, pas en mois, à condition de ne traiter qu’un cas à la fois.",
      ],
      bullets: [
        "Cadrage (une semaine) : vous décrivez la tâche telle que vous la faites aujourd’hui, avec ses exceptions. On décide de ce que l’agent fait seul et de ce qu’il soumet à validation.",
        "Connexion aux outils : accès à la messagerie, à l’agenda, au CRM ou au logiciel métier, avec des droits limités à ce qui est nécessaire.",
        "Construction et tests sur vos données réelles (deux semaines) : l’agent tourne sur des cas passés, on compare ce qu’il aurait fait avec ce qui a été fait.",
        "Mise en production avec validation humaine : pendant les premières semaines, chaque action qui engage l’entreprise passe par vous avant envoi.",
        "Extension de l’autonomie : quand le taux de correction devient faible, l’agent gagne le droit d’agir seul sur les cas simples. On passe ensuite au cas suivant.",
      ],
    },
    {
      title: "À quels outils un agent IA se connecte-t-il ?",
      paragraphs: [
        "Un agent n’a de valeur que dans vos outils. La règle est simple : l’agent vient à vous, pas l’inverse. Si un projet vous demande de changer de messagerie ou de CRM pour fonctionner, ce n’est pas un agent sur mesure.",
        "Dans une PME, les connexions les plus fréquentes sont la messagerie (Gmail, Outlook), l’agenda (Google Calendar, Outlook), le CRM ou le fichier client (HubSpot, un tableur partagé), la messagerie instantanée (WhatsApp Business), le formulaire du site web et le logiciel métier : réservation pour un hôtel, devis pour un artisan, planning pour un cabinet. Nous avons détaillé comment [choisir ses outils IA sans les empiler](/blog/outils-ia-pme) : le même principe vaut pour un agent.",
      ],
    },
    {
      title: "Quels sont les principaux agents IA prêts à l’emploi, et quand préférer le sur mesure ?",
      paragraphs: [
        "Les grands éditeurs proposent des agents génériques : ChatGPT peut naviguer et exécuter des tâches, Gemini s’intègre aux outils Google, Copilot aux outils Microsoft, Claude se connecte à des services via des connecteurs. Ils sont utiles pour un usage individuel : résumer, rédiger, chercher, remplir un formulaire.",
        "Ils atteignent leur limite dès que la tâche touche votre processus : vos règles de relance, votre ton, vos exceptions, votre logiciel métier. Un agent générique ne sait pas qu’un client qui a annulé deux fois ne doit plus être relancé, ni qu’une demande de séminaire de plus de 30 personnes passe par le directeur. C’est là que le sur mesure devient nécessaire, et c’est aussi la question centrale de notre guide pour [utiliser l’IA dans son entreprise](/blog/comment-utiliser-ia-entreprise).",
      ],
    },
    {
      title: "Ce qu’un agent IA ne fait pas",
      paragraphs: [
        "La limite est aussi importante que la promesse, parce que c’est elle qui fait tenir le projet.",
      ],
      bullets: [
        "Il ne décide pas à votre place sur ce qui engage l’entreprise : un devis, un remboursement, un litige. Il prépare, vous tranchez.",
        "Il ne remplace pas une relation : un client mécontent veut une personne, pas une réponse bien tournée.",
        "Il ne corrige pas un processus mal défini : automatiser le désordre produit du désordre plus vite.",
        "Il ne fonctionne pas sans supervision les premières semaines : le taux de correction se mesure avant de lâcher la main.",
      ],
    },
    {
      title: "Où en sont les PME françaises avec les agents IA ?",
      paragraphs: [
        "Fin 2025, 55 % des TPE et PME françaises déclaraient utiliser l’IA générative, contre 31 % un an plus tôt, mais seulement 17 % en faisaient un usage régulier, selon l’étude de conjoncture de Bpifrance Le Lab publiée en janvier 2026, [relayée par IT Social](https://itsocial.fr/contenus/actualites/intelligence-artificielle-actualites-contenus/bpifrance-constate-un-basculement-des-usages-avec-55-des-tpe-pme-utilisatrices-dia-generative-fin-2025/). Dans une étude précédente auprès de 1 209 dirigeants de PME et ETI, [Bpifrance Le Lab notait que 58 % d’entre eux considèrent l’IA comme un enjeu de survie à moyen terme](https://lelab.bpifrance.fr/les-entreprises-francaises-et-l-ia-l-aube-d-une-revolution/), alors qu’une majorité n’avait pas de stratégie établie.",
        "À l’échelle mondiale, l’écart entre grandes et petites structures est net. Dans son enquête [The State of AI 2026](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai), McKinsey rapporte que 40 % des grandes entreprises (plus d’un milliard de dollars de chiffre d’affaires) déploient des agents IA à l’échelle, contre 27 % l’année précédente, et qu’un tiers seulement des organisations plus petites déploient l’IA à l’échelle de l’entreprise.",
        "Lecture pour un dirigeant de PME : l’usage individuel de ChatGPT est acquis, le passage à un système qui travaille seul reste rare. C’est exactement l’espace où un agent sur mesure crée un avantage, parce que peu de concurrents de votre taille l’ont fait.",
      ],
    },
    {
      title: "Ce qu’il faut retenir",
      paragraphs: [],
      bullets: [
        "Un agent IA sur mesure exécute une tâche complète dans vos outils, il ne se contente pas de répondre.",
        "Chatbot, automatisation et agent sont trois choses différentes ; seul l’agent gère les exceptions.",
        "Les cas rentables dans une PME : relances, rendez-vous, qualification, prospection, reporting.",
        "Le coût dépend des outils connectés, de l’autonomie, des données et du volume, pas de l’intelligence du modèle.",
        "Un cas à la fois, un mois de mise en place, validation humaine au départ, autonomie gagnée ensuite.",
        "L’agent vient dans vos outils. Si on vous demande d’en changer, ce n’est pas du sur mesure.",
      ],
    },
  ],
};

const veilleSeo: ArticleWithTables = {
  slug: "veille-seo-methode-outils",
  title: "Veille SEO : méthode, sources et outils pour rester à jour",
  seoTitle: "Comment faire sa veille SEO en 2026 : méthode et outils",
  description:
    "Méthode de veille SEO en quatre temps, sources officielles, outils gratuits, et pourquoi la veille doit couvrir ChatGPT et les AI Overviews.",
  date: "16 septembre 2026",
  dateModified: "16 septembre 2026",
  readingTime: "9 min",
  category: "SEO / GEO",
  articleSection: "Veille SEO",
  keywords: [
    "veille SEO",
    "veille référencement",
    "comment faire sa veille SEO",
    "outil de veille SEO",
    "sources veille SEO",
    "veille SEO IA",
    "mises à jour Google",
  ],
  intro:
    "Une veille SEO consiste à suivre, chaque semaine, ce qui change chez Google et dans les moteurs IA, puis à vérifier l’effet sur votre propre site. La plupart des dirigeants la font mal : ils lisent trop d’articles et ne regardent jamais leur Search Console. Voici une méthode en quatre temps, des sources fiables et des outils gratuits pour tenir une veille référencement utile en moins d’une heure par semaine.",
  quickAnswer: {
    question: "Comment faire sa veille SEO ?",
    answer:
      "Faire sa veille SEO consiste à suivre quatre choses chaque semaine : les annonces officielles de Google, les mises à jour de son algorithme, les données de votre Search Console, et la visibilité de votre site dans les moteurs IA comme ChatGPT ou les AI Overviews. La méthode tient en une heure par semaine avec des outils gratuits : tableau de bord d’état de Google, Search Console, Google Alerts et lecteur RSS. L’essentiel est de relier chaque changement observé à un effet mesuré sur vos pages.",
  },
  contextualLinks: [
    { label: "suivre ses concurrents dans Google et les IA", href: "/blog/veille-concurrentielle-seo-ia-serp-locales" },
    { label: "suivre sa visibilité dans ChatGPT", href: "/blog/suivre-visibilite-chatgpt-ia" },
    { label: "notre offre SEO / GEO", href: "/offre" },
  ],
  bodyCta: {
    intro: "Vous préférez qu’on tienne la veille et le suivi mensuel pour vous ?",
    linkLabel: "Découvrez notre accompagnement SEO / GEO",
    href: "/offre",
    outro: ", avec un point mensuel sur vos positions et vos mentions IA.",
  },
  relatedSlugs: [
    "veille-concurrentielle-seo-ia-serp-locales",
    "suivre-visibilite-chatgpt-ia",
    "google-ai-overviews-entreprises-comprendre",
  ],
  faqTitle: "FAQ : la veille SEO",
  faqItems: [
    {
      question: "Combien de temps faut-il consacrer à sa veille SEO ?",
      answer:
        "Une heure par semaine suffit pour une PME : quinze minutes sur les annonces officielles de Google, vingt minutes dans la Search Console, et le reste pour noter ce qui a changé et décider d’une action. Au-delà, vous lisez plus que vous n’agissez.",
    },
    {
      question: "Quels sont les meilleurs outils de veille SEO gratuits ?",
      answer:
        "Le tableau de bord d’état de la recherche Google pour les mises à jour, la Search Console pour vos propres données, Google Alerts pour les mentions de votre marque, et un lecteur RSS pour les blogs officiels. Ces quatre outils couvrent l’essentiel sans abonnement.",
    },
    {
      question: "Faut-il réagir à chaque mise à jour de Google ?",
      answer:
        "Non. Google recommande d’attendre au moins une semaine complète après la fin d’une mise à jour majeure avant d’analyser son site. Une baisse pendant le déploiement peut se corriger seule. On note la date, on compare quinze jours plus tard, on agit seulement si l’écart persiste.",
    },
    {
      question: "La veille SEO doit-elle inclure ChatGPT et Perplexity ?",
      answer:
        "Oui, depuis que les réponses générées apparaissent dans Google en France et que vos clients posent leurs questions à ChatGPT. Il faut ajouter à la veille un relevé régulier de vos mentions dans ces moteurs, avec un jeu fixe de questions, en plus des positions Google.",
    },
    {
      question: "Quelle différence entre veille SEO et veille concurrentielle SEO ?",
      answer:
        "La veille SEO suit les changements de l’environnement : moteurs, algorithmes, vos propres données. La veille concurrentielle SEO suit les autres acteurs : qui monte sur vos requêtes, qui est cité par les IA à votre place. Les deux se complètent et partagent les mêmes outils.",
    },
  ],
  sections: [
    {
      title: "Qu’est-ce qu’une veille SEO ?",
      paragraphs: [
        "Une veille SEO est une routine régulière qui consiste à observer les changements des moteurs, à mesurer leur effet sur votre site, et à en tirer une action, ce qui la distingue de la lecture d’actualités.",
        "Le besoin est réel parce que Google change en permanence : en 2023, la firme indique avoir mené [plus de 700 000 expériences ayant abouti à plus de 4 000 améliorations de la recherche](https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/), soit plus de dix changements par jour.",
        "Aucune entreprise ne peut suivre ce rythme article par article, donc la veille référencement utile ne cherche pas à tout lire, elle cherche à repérer les quelques changements qui touchent réellement vos pages et vos clients.",
        "Elle est aussi la suite naturelle d’un [audit SEO / GEO](/blog/audit-seo-geo-visibilite-ia) : l’audit donne l’état à un instant donné, la veille dit ensuite si cet état s’améliore ou se dégrade, et pourquoi.",
      ],
    },
    {
      title: "Qu’est-ce que ça veut dire SEO ?",
      paragraphs: [
        "SEO signifie Search Engine Optimization, en français optimisation pour les moteurs de recherche, c’est-à-dire l’ensemble des actions qui permettent à un site d’apparaître dans les résultats non payants de Google, Bing et des moteurs IA.",
        "Avant de suivre l’actualité du SEO, il faut savoir ce que l’on surveille, et les deux questions ci-dessous reviennent le plus souvent chez les dirigeants qui démarrent, parce qu’elles structurent la veille qui suit.",
      ],
      subsections: [
        {
          title: "Quels sont les 3 types de SEO ?",
          paragraphs: [
            "On distingue le SEO on-page, qui concerne le contenu et les balises de vos pages, le SEO off-page, qui regroupe les liens obtenus ailleurs, et le SEO technique, qui traite la vitesse et l’indexation.",
            "Une bonne veille SEO couvre les trois, parce qu’une mise à jour de Google peut toucher l’un sans toucher les autres, et qu’une baisse après une mise à jour de spam n’appelle pas la même réponse.",
          ],
        },
        {
          title: "Quels sont les 4 piliers du SEO ?",
          paragraphs: [
            "Les quatre piliers retenus par la plupart des praticiens sont la technique, le contenu, la popularité et, depuis peu, la visibilité dans les réponses IA, le pilier qui bouge le plus vite en 2026.",
            "C’est pour cela que nous traitons ensemble le SEO et le GEO dans notre [offre SEO / GEO](/offre) : les signaux qui font remonter une page dans Google sont ceux qui la font citer par ChatGPT.",
          ],
        },
      ],
    },
    {
      title: "C’est quoi la veille en marketing ?",
      paragraphs: [
        "En marketing, la veille désigne la collecte organisée d’informations sur un marché, ses acteurs et ses évolutions, pour prendre de meilleures décisions sur les concurrents, les clients, les technologies et la réglementation.",
        "La veille SEO en est un sous-ensemble centré sur les moteurs, avec deux branches : la veille sur l’environnement, que décrit cet article, et la veille sur les concurrents, détaillée dans notre guide de [veille concurrentielle SEO et IA](/blog/veille-concurrentielle-seo-ia-serp-locales).",
      ],
    },
    {
      title: "Comment faire sa veille SEO en pratique ?",
      paragraphs: [
        "La méthode ci-dessous tient en une heure par semaine, le même jour, dans le même ordre. Elle repose sur quatre temps qui s’enchaînent, du plus général au plus proche de votre site.",
      ],
      subsections: [
        {
          title: "Temps 1 : lire les annonces officielles, pas les commentaires",
          paragraphs: [
            "Commencez par le tableau de bord d’état de Google, qui liste chaque mise à jour de classement avec sa date : la [mise à jour majeure de mai 2026 a débuté le 21 mai et s’est déployée sur 11 jours et 21 heures](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history).",
            "Ajoutez le blog Google Search Central et sa documentation : ces deux sources suffisent pour la partie officielle, et elles évitent les interprétations hâtives publiées pendant qu’une mise à jour est encore en cours.",
          ],
        },
        {
          title: "Temps 2 : ouvrir la Search Console sur 28 jours",
          paragraphs: [
            "Comparez vos clics, impressions et position moyenne sur les 28 derniers jours face aux 28 précédents, jamais sur 7 jours : les données [sont normalement disponibles sous 2 à 3 jours](https://support.google.com/webmasters/answer/96568), et une semaine isolée ne montre que du bruit.",
            "Notez les requêtes qui perdent ou gagnent le plus d’impressions, et les pages concernées, puis élargissez : le [rapport Performances affiche par défaut les trois derniers mois](https://support.google.com/webmasters/answer/7576553), ce qui permet de repérer une tendance de fond.",
          ],
        },
        {
          title: "Temps 3 : relier chaque variation à un événement daté",
          paragraphs: [
            "Reportez sur un même calendrier les mises à jour Google, vos propres publications et les variations vues dans la Search Console : une baisse qui commence le jour d’une mise à jour majeure n’a pas la même cause qu’une baisse après une refonte.",
            "Google [recommande d’attendre au moins une semaine complète après la fin d’une mise à jour majeure](https://developers.google.com/search/updates/core-updates) avant d’analyser son site, donc la veille consiste à noter, puis à vérifier quinze jours plus tard.",
          ],
        },
        {
          title: "Temps 4 : décider d’une seule action",
          paragraphs: [
            "Terminez chaque séance par une action, une seule : réécrire une page qui décroche, corriger une erreur d’indexation, publier un contenu sur une requête qui monte, parce qu’une veille sans décision n’est que de la lecture.",
          ],
        },
      ],
    },
    {
      title: "Quelles sources suivre pour une veille SEO fiable ?",
      paragraphs: [
        "Le tableau ci-dessous classe les sources par rôle : les sources officielles disent ce qui change, les médias spécialisés disent comment le secteur le comprend, et vos propres données disent ce que cela change pour vous.",
      ],
      table: {
        caption: "Sources de veille SEO par rôle et fréquence de consultation",
        headers: ["Source", "Ce qu’on y suit", "Fréquence"],
        rows: [
          [
            "[Tableau de bord d’état Google](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history)",
            "Mises à jour de classement, dates de début et de fin, durée de déploiement.",
            "Chaque semaine",
          ],
          [
            "[Documentation Google Search Central](https://developers.google.com/search/updates/core-updates)",
            "Règles officielles, recommandations après une mise à jour majeure.",
            "À chaque mise à jour",
          ],
          [
            "[Search Console](https://support.google.com/webmasters/answer/7576553)",
            "Clics, impressions, position moyenne, pages et requêtes de votre site.",
            "Chaque semaine, sur 28 jours",
          ],
          [
            "[Google Alerts](https://support.google.com/websearch/answer/4815696)",
            "Nouvelles pages qui citent votre marque, vos concurrents ou vos requêtes clés.",
            "Alerte par e-mail",
          ],
          [
            "Médias SEO francophones (Abondance, blogs d’agences)",
            "Analyse des mises à jour, cas pratiques, actualité des moteurs IA en France.",
            "Un lecteur RSS, quinze minutes par semaine",
          ],
          [
            "ChatGPT, Perplexity, Gemini",
            "Vos mentions et citations sur un jeu fixe de questions clients.",
            "Chaque semaine",
          ],
        ],
      },
    },
    {
      title: "Quels outils de veille SEO utiliser ?",
      paragraphs: [
        "Les meilleurs outils de veille SEO pour une PME sont gratuits et déjà à portée de main. Les outils payants deviennent utiles quand vous suivez plusieurs sites, plusieurs villes ou plusieurs concurrents en même temps.",
      ],
      bullets: [
        "La Search Console : la seule source qui décrit votre site tel que Google le voit. C’est l’outil de veille SEO numéro un, avant tout abonnement.",
        "Google Alerts : vous recevez un e-mail quand de nouveaux résultats apparaissent pour un sujet, avec un réglage de [la fréquence, des sources, de la langue et de la région](https://support.google.com/websearch/answer/4815696).",
        "Un lecteur de flux RSS : il regroupe les blogs officiels et les médias SEO en un seul endroit, à lire d’un bloc plutôt que dispersé dans la journée.",
        "Un outil de suivi de positions : utile dès que vous suivez plus de cinquante requêtes ou plusieurs zones géographiques.",
        "Un outil de suivi de visibilité IA, ou un simple tableur : nous comparons les deux approches dans notre méthode pour [suivre sa visibilité dans ChatGPT](/blog/suivre-visibilite-chatgpt-ia).",
      ],
    },
    {
      title: "Pourquoi la veille SEO doit maintenant inclure les moteurs IA ?",
      paragraphs: [
        "Depuis le [22 juillet 2026, Google affiche les AI Overviews et le Mode IA en France](https://www.abondance.com/20260722-2640402-lancement-officielle-ai-overviews-france.html), et une partie des requêtes reçoit désormais une réponse rédigée avant les dix liens classiques.",
        "La Search Console a suivi : [depuis le 31 août 2026, le rapport dédié aux performances dans l’IA générative est déployé pour tous les sites](https://support.google.com/webmasters/answer/16984139), avec les impressions par page, pays, date et appareil, sans les clics ni les requêtes.",
        "Votre veille SEO IA doit donc ajouter deux relevés : ce rapport, et un jeu fixe de questions posées chaque semaine à ChatGPT, Perplexity et Gemini, comme nous l’expliquons dans notre guide sur [Google AI Overviews](/blog/google-ai-overviews-entreprises-comprendre).",
        "Pour une entreprise locale, cette veille IA se double d’un suivi de la fiche Google et des avis, comme nous le faisons pour nos clients de la [métropole nantaise](/agence-seo-geo-nantes).",
      ],
    },
    {
      title: "Scénario illustratif : une PME structure sa veille SEO en six semaines",
      paragraphs: [
        "Le cas ci-dessous est un scénario type, construit pour montrer ce que produit une veille tenue avec méthode, et ses chiffres sont illustratifs : ils ne proviennent pas d’un client réel.",
        "Une entreprise de services de vingt salariés reçoit l’essentiel de ses demandes par son site, et son dirigeant lit des newsletters SEO depuis deux ans sans avoir jamais ouvert la Search Console. Il bloque désormais une heure le lundi.",
        "Semaines 1 et 2 : il installe un lecteur RSS avec quatre sources, crée trois alertes Google, et relève ses 28 derniers jours. Il découvre qu’une page de service perd des impressions depuis six semaines, sans qu’il l’ait vu.",
        "Semaines 3 et 4 : le calendrier montre que la baisse a commencé la veille de la mise à jour majeure de mai. Il attend la fin du déploiement, constate que l’écart persiste, et réécrit la page en répondant directement aux questions de ses clients.",
        "Semaines 5 et 6 : les impressions de la page remontent sans revenir au niveau initial, et son relevé hebdomadaire montre que son entreprise n’est citée par aucune IA sur ses questions clients, contre deux fois sur dix pour un concurrent.",
        "Ce qui compte dans ce scénario n’est pas le rebond, qui reste modeste : six semaines de veille ont remplacé deux ans de lecture par deux décisions datées et mesurables, dont une qu’aucune newsletter n’aurait révélée.",
      ],
    },
    {
      title: "Quelles sont les limites de la veille SEO ?",
      paragraphs: [
        "La veille ne remplace ni le travail de contenu ni la technique, elle dit où regarder, pas quoi écrire, et une entreprise qui suit chaque mise à jour sans rien publier de nouveau n’avance pas.",
      ],
      bullets: [
        "Le bruit : la plupart des articles publiés pendant une mise à jour spéculent. Attendez la fin du déploiement avant de conclure.",
        "Les mises à jour silencieuses : Google indique procéder à des [mises à jour plus petites, non annoncées parce que peu perceptibles](https://developers.google.com/search/updates/core-updates). Toutes les variations n’ont pas de cause identifiable.",
        "Le délai : les données de la Search Console arrivent avec deux à trois jours de retard, et un effet de contenu se mesure sur des semaines, pas des jours.",
        "L’angle mort IA : aucun rapport officiel n’existe pour ChatGPT ou Perplexity. Le relevé manuel reste indispensable.",
      ],
    },
    {
      title: "Ce qu’il faut retenir",
      paragraphs: [],
      bullets: [
        "La veille SEO suit quatre choses : annonces officielles, mises à jour, données de votre Search Console, visibilité dans les moteurs IA.",
        "Une heure par semaine, le même jour, avec quatre outils gratuits, suffit pour une PME.",
        "Lisez la Search Console sur 28 jours, jamais sur 24 heures ni sur 7 jours.",
        "Attendez au moins une semaine après la fin d’une mise à jour majeure avant d’analyser une variation.",
        "Depuis l’été 2026, la veille inclut les AI Overviews en France et un relevé hebdomadaire dans ChatGPT, Perplexity et Gemini.",
        "Chaque séance de veille se termine par une décision, sinon ce n’est que de la lecture.",
      ],
    },
  ],
};

const agenceReferencementChatgpt: ArticleWithTables = {
  slug: "agence-referencement-chatgpt-comment-choisir",
  title: "Agence de référencement ChatGPT : comment choisir en 2026",
  seoTitle: "Agence référencement ChatGPT : critères et questions à poser",
  description:
    "Ce qu’une agence de référencement ChatGPT fait vraiment, les critères pour la choisir, les questions à poser, les signaux d’alerte et les délais.",
  date: "16 septembre 2026",
  dateModified: "16 septembre 2026",
  readingTime: "13 min",
  category: "SEO IA",
  articleSection: "SEO IA",
  keywords: [
    "agence de référencement ChatGPT",
    "référenceur ChatGPT",
    "agence SEO ChatGPT",
    "agence GEO",
    "référencement ChatGPT",
    "consultant visibilité ChatGPT",
    "apparaître sur ChatGPT",
  ],
  intro:
    "Une agence de référencement ChatGPT promet de faire citer votre entreprise dans les réponses des assistants IA, là où vos clients posent désormais leurs questions. Le marché est jeune, les offres se ressemblent et les garanties sont parfois fantaisistes. Voici ce qu’une telle agence fait réellement, comment la choisir, quelles questions lui poser et quels délais attendre.",
  quickAnswer: {
    question: "Comment choisir une agence de référencement ChatGPT ?",
    answer:
      "Une agence de référencement ChatGPT se choisit sur quatre critères : une méthode de mesure explicite fondée sur un jeu de questions clients, un travail visible sur les sources tierces que les IA citent, un socle SEO classique solide, et l’absence de toute garantie de position. Elle doit expliquer comment ChatGPT, Perplexity et Gemini choisissent leurs sources, montrer un premier relevé avant de signer, et annoncer des résultats mesurables entre quatre et douze semaines, jamais en quelques jours.",
  },
  contextualLinks: [
    { label: "notre offre de référencement IA", href: "/offre" },
    { label: "apparaître sur ChatGPT", href: "/blog/referencement-chatgpt-apparaitre-ia" },
    { label: "auditer sa visibilité IA", href: "/blog/audit-seo-geo-visibilite-ia" },
  ],
  bodyCta: {
    intro: "Vous voulez comparer avec un relevé réel avant de choisir ?",
    linkLabel: "Demandez un audit de visibilité IA",
    href: "/contact",
    outro: ", vous repartez avec vos mentions actuelles et celles de vos concurrents.",
  },
  relatedSlugs: [
    "referencement-chatgpt-apparaitre-ia",
    "audit-seo-geo-visibilite-ia",
    "seo-classique-vs-geo-acquisition-client",
  ],
  faqTitle: "FAQ : agence de référencement ChatGPT",
  faqItems: [
    {
      question: "Une agence peut-elle garantir une position dans ChatGPT ?",
      answer:
        "Non. ChatGPT ne classe pas dix résultats, il rédige une réponse qui change d’une session à l’autre. Une agence sérieuse mesure une fréquence de mention sur un jeu de questions et s’engage sur une méthode et des livrables, jamais sur une position garantie.",
    },
    {
      question: "Faut-il une agence spécialisée ou une agence SEO classique ?",
      answer:
        "Les deux compétences sont nécessaires. Le socle SEO reste la base, parce que les IA s’appuient sur des index de recherche. La spécialisation apporte le travail sur les sources tierces, la structure answer-first et la mesure dans les réponses IA. Une agence qui ne maîtrise qu’un des deux vous laissera à mi-chemin.",
    },
    {
      question: "Combien de temps avant de voir des résultats ?",
      answer:
        "Comptez quatre à huit semaines pour les premières mentions sur des questions précises, et trois à six mois pour une présence stable face à des concurrents établis. Une agence qui promet des résultats en quelques jours vend autre chose que du référencement.",
    },
    {
      question: "Que doit contenir le premier livrable d’une agence ?",
      answer:
        "Un relevé de vos mentions actuelles sur un jeu de questions clients dans ChatGPT, Perplexity et Gemini, la liste des concurrents cités à votre place, les sources tierces utilisées par les IA, et un plan d’actions priorisé. Sans ce relevé initial, aucun résultat ne pourra être prouvé ensuite.",
    },
    {
      question: "Le référencement ChatGPT remplace-t-il le SEO Google ?",
      answer:
        "Non, il s’y ajoute. Google reste la première source de trafic et ses propres réponses IA sont actives en France depuis l’été 2026. Une agence de référencement ChatGPT doit traiter les deux ensemble, sinon vous gagnez d’un côté ce que vous perdez de l’autre.",
    },
  ],
  sections: [
    {
      title: "Qu’est-ce qu’une agence de référencement ChatGPT ?",
      paragraphs: [
        "Une agence de référencement ChatGPT travaille la visibilité d’une entreprise dans les réponses des assistants IA : ChatGPT, mais aussi Perplexity, Gemini, Copilot et les réponses générées de Google. On parle aussi d’agence GEO, pour Generative Engine Optimization.",
        "L’enjeu est simple à mesurer. Le [27 février 2026, OpenAI annonçait 900 millions d’utilisateurs hebdomadaires pour ChatGPT](https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users), soit 100 millions de plus qu’en octobre 2025, selon TechCrunch.",
        "Une partie de ces utilisateurs demande à ChatGPT quel prestataire choisir, quel hôtel réserver ou quel logiciel comparer. Si votre entreprise n’est jamais nommée dans ces réponses, elle est absente d’un canal que vos concurrents commencent à occuper.",
        "Le référenceur ChatGPT ne manipule pas le modèle : il agit sur ce que le modèle lit, votre site, les sources tierces qui parlent de vous, vos données structurées et la cohérence de vos informations, périmètre de notre [offre de référencement IA](/offre).",
      ],
    },
    {
      title: "Comment se faire référencer sur ChatGPT ?",
      paragraphs: [
        "Avant de choisir une agence, il faut comprendre ce qu’elle va faire, sinon vous ne pourrez ni juger sa méthode ni contrôler ses livrables. Le référencement ChatGPT repose sur trois mécanismes documentés par les éditeurs eux-mêmes.",
      ],
      subsections: [
        {
          title: "Être accessible aux robots d’OpenAI",
          paragraphs: [
            "OpenAI documente trois robots distincts : [OAI-SearchBot, utilisé pour faire apparaître des sites dans les fonctions de recherche de ChatGPT, ChatGPT-User, qui visite une page quand un utilisateur pose une question, et GPTBot, dédié à l’entraînement des modèles](https://developers.openai.com/api/docs/bots).",
            "Un site qui bloque OAI-SearchBot dans son robots.txt ne peut pas être cité dans ChatGPT. C’est la première vérification qu’une agence doit faire, et elle prend cinq minutes.",
          ],
        },
        {
          title: "Être présent dans les sources que les IA consultent",
          paragraphs: [
            "Perplexity explique [rechercher sur Internet des sources faisant autorité, articles, sites et revues, puis afficher des citations numérotées vers les sources d’origine](https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work). ChatGPT fonctionne de façon comparable quand il navigue.",
            "Ces sources sont rarement votre site seul : annuaires, comparatifs, presse locale, avis, fiches Google. Nous détaillons ce mécanisme dans [pourquoi votre site ne suffit pas](/blog/sources-citees-ia-site-ne-suffit-pas), et c’est ce qui distingue une vraie agence GEO d’une agence de contenu.",
          ],
        },
        {
          title: "Structurer son contenu pour être repris",
          paragraphs: [
            "Google indique qu’il [n’existe aucune exigence supplémentaire ni optimisation spéciale pour apparaître dans les AI Overviews ou l’AI Mode](https://developers.google.com/search/docs/appearance/ai-features) : les bonnes pratiques SEO restent la base.",
            "Le travail consiste donc à répondre directement aux questions, à baliser les pages en Schema.org et à rendre les informations cohérentes partout. Notre guide pour [apparaître sur ChatGPT](/blog/referencement-chatgpt-apparaitre-ia) détaille ces cinq leviers.",
          ],
        },
      ],
    },
    {
      title: "Que fait concrètement une agence de référencement ChatGPT ?",
      paragraphs: [
        "Le tableau ci-dessous liste les prestations qu’une agence de référencement ChatGPT doit être capable de décrire, avec le livrable attendu pour chacune. Une offre qui ne couvre que la première ligne est une offre SEO classique renommée.",
      ],
      table: {
        caption: "Prestations d’une agence de référencement ChatGPT et livrables attendus",
        headers: ["Prestation", "Ce qu’elle contient", "Livrable à exiger"],
        rows: [
          [
            "Audit de visibilité IA",
            "Relevé des mentions et citations sur un jeu de questions clients, dans ChatGPT, Perplexity et Gemini, face aux concurrents.",
            "Tableau de relevé daté, liste des concurrents cités, sources utilisées par les IA.",
          ],
          [
            "Socle SEO et technique",
            "Indexation, vitesse, robots.txt ouvert aux robots IA, canonical, maillage interne.",
            "Rapport de corrections avec avant et après.",
          ],
          [
            "Contenus answer-first",
            "Pages qui répondent directement aux questions que posent les clients, avec définitions, FAQ et chiffres sourcés.",
            "Pages publiées, requêtes visées, sources citées.",
          ],
          [
            "Entités et données structurées",
            "Balisage Schema.org (Organization, Service, FAQPage, LocalBusiness), cohérence nom, adresse, téléphone partout.",
            "JSON-LD validé, fiche d’identité unique de l’entreprise.",
          ],
          [
            "Sources tierces et citations",
            "Présence dans les annuaires, comparatifs, médias et fiches que les IA consultent réellement sur votre marché.",
            "Liste des sources visées, mentions obtenues, dates.",
          ],
          [
            "Suivi mensuel",
            "Relevé répété du même jeu de questions, évolution des mentions, part de présence face aux concurrents.",
            "Rapport mensuel comparable d’un mois sur l’autre.",
          ],
        ],
      },
    },
    {
      title: "Agence SEO ChatGPT, agence GEO, référenceur ChatGPT : quelle différence ?",
      paragraphs: [
        "Ces trois appellations désignent le même métier avec des accents différents, et une quatrième s’y ajoute : le consultant visibilité ChatGPT, souvent indépendant. La différence utile n’est pas dans le nom, elle est dans le périmètre couvert.",
      ],
      bullets: [
        "Agence SEO ChatGPT : une agence SEO classique qui a ajouté les moteurs IA à son offre. Solide sur la technique et les positions Google, parfois légère sur les sources tierces et la mesure IA.",
        "Agence GEO : une agence centrée sur les réponses génératives. Forte sur la mesure et les sources, à vérifier sur le socle SEO, sans lequel les IA ne trouvent rien.",
        "Référenceur ChatGPT ou consultant visibilité ChatGPT : un indépendant, souvent plus réactif et moins cher, limité par le temps disponible. Bon choix pour une PME sur un marché local.",
        "Agence SEO et GEO : la combinaison des deux, que nous pratiquons à Nantes et partout en France. Nous expliquons pourquoi les deux vont ensemble dans [SEO classique vs GEO](/blog/seo-classique-vs-geo-acquisition-client).",
      ],
    },
    {
      title: "Quelles sont les 10 meilleures agences SEO en France ?",
      paragraphs: [
        "Il n’existe aucun classement officiel des agences SEO ou GEO en France. Les listes « top 10 » publiées en ligne sont le plus souvent rédigées par une agence qui s’y place, ou par un annuaire rémunéré à l’inscription.",
        "Lisez-les comme une liste de candidats, pas comme un verdict. Un classement utile précise ses critères, la date de son relevé et sa méthode ; quand ces trois éléments manquent, la position dans la liste ne vous apprend rien.",
        "La bonne question n’est pas « quelle est la meilleure agence », mais « quelle agence prouve ses résultats sur mon marché ». Les critères ci-dessous permettent d’y répondre en un rendez-vous.",
      ],
    },
    {
      title: "Quels critères pour choisir son agence de référencement ChatGPT ?",
      paragraphs: [
        "Six critères suffisent pour écarter les offres creuses. Ils tiennent en un seul rendez-vous de découverte, à condition de poser les questions dans cet ordre.",
      ],
      bullets: [
        "Une méthode de mesure explicite : un jeu de questions clients, des relevés répétés, trois indicateurs distincts (mention, citation, source). Sans cela, aucun résultat ne pourra être prouvé.",
        "Un premier relevé avant signature : l’agence doit pouvoir montrer où vous en êtes aujourd’hui, et qui est cité à votre place. C’est ce que nous faisons dans notre [audit de visibilité IA](/blog/audit-seo-geo-visibilite-ia).",
        "Un travail sur les sources tierces : l’agence explique quelles sources les IA consultent sur votre marché et comment elle compte y faire figurer votre entreprise.",
        "Un socle SEO assumé : elle vérifie l’indexation, la technique et les positions Google avant de parler d’IA, parce que les moteurs IA lisent les mêmes index.",
        "Aucune garantie de position : une promesse de « top 3 dans ChatGPT » est un signal d’alerte, pas un argument.",
        "Des délais réalistes annoncés par écrit : premières mentions entre quatre et huit semaines, présence stable en plusieurs mois.",
      ],
      subsections: [
        {
          title: "Les questions à poser avant de signer",
          paragraphs: [
            "Posez-les telles quelles, et notez les réponses. Une agence compétente y répond sans détour ; une agence qui vend un mot à la mode change de sujet.",
          ],
          bullets: [
            "Comment mesurez-vous ma visibilité dans ChatGPT aujourd’hui, et pouvez-vous me montrer le relevé ?",
            "Quelles sources les IA citent-elles sur mon marché, et lesquelles visez-vous pour moi ?",
            "Que se passe-t-il sur mon SEO Google pendant que vous travaillez l’IA ?",
            "Quel est le premier livrable, à quelle date, et à quoi ressemble le rapport mensuel ?",
            "Qui rédige les contenus, et comment vérifiez-vous les chiffres qu’ils contiennent ?",
            "Que se passe-t-il si, au bout de trois mois, les mentions n’ont pas bougé ?",
          ],
        },
        {
          title: "Les signaux d’alerte",
          paragraphs: [
            "Certains arguments de vente reviennent souvent chez les agences SEO ChatGPT improvisées et trahissent une méconnaissance du sujet. En voici quatre qui doivent faire arrêter la discussion.",
          ],
          bullets: [
            "Une garantie de position ou de citation dans ChatGPT : personne ne contrôle une réponse générée.",
            "Un « partenariat » ou un « accès privilégié » à OpenAI ou à Google : il n’existe aucun programme de référencement payant dans ChatGPT.",
            "Un devis sans audit préalable : l’agence ne sait pas où vous en êtes et vend le même lot à tout le monde.",
            "Des contenus produits en masse par IA sans relecture ni source : c’est précisément ce que les moteurs apprennent à écarter.",
          ],
        },
      ],
    },
    {
      title: "Quel est le tarif d’une agence SEO ?",
      paragraphs: [
        "Les prix du référencement ChatGPT s’alignent sur ceux du SEO, parce que le travail est de même nature : audit, contenus, technique, sources, suivi. Le marché français dispose d’un repère chiffré à lire comme un ordre de grandeur.",
        "Sur [683 budgets de projets SEO réels analysés par La Fabrique du Net, le prix médian d’un projet est de 5 000 €, et un abonnement mensuel se situe le plus souvent entre 800 et 2 000 € HT par mois](https://www.lafabriquedunet.fr/agences/pages/agences-seo/tarifs).",
        "Trois modèles coexistent : l’audit au forfait, l’accompagnement mensuel et la journée de consultant. Une agence GEO facture en général l’audit à part, parce qu’il dimensionne la suite, puis un mensuel qui inclut le suivi.",
        "Ce qui fait varier le prix, ce n’est pas la taille du site, c’est le nombre de questions clients à couvrir, le nombre de villes ou de marchés, et l’écart avec les concurrents déjà cités. Un premier relevé permet de le chiffrer sérieusement.",
      ],
    },
    {
      title: "Quelle entreprise detient ChatGPT ?",
      paragraphs: [
        "ChatGPT appartient à OpenAI, qui l’a [lancé le 30 novembre 2022 sous forme de version de recherche](https://openai.com/index/chatgpt/). Gemini appartient à Google, Copilot à Microsoft, Claude à Anthropic, Perplexity à la société du même nom.",
        "Cette question compte pour choisir une agence : chaque moteur puise dans des sources différentes. Une agence de référencement ChatGPT qui ne parle que de ChatGPT ignore Gemini, qui s’appuie sur l’index Google, et Perplexity, qui cite beaucoup plus de sources.",
        "Elle compte aussi pour Google lui-même. Depuis le [22 juillet 2026, les AI Overviews et le Mode IA sont déployés en France](https://www.abondance.com/20260722-2640402-lancement-officielle-ai-overviews-france.html), et une agence doit désormais suivre ces réponses au même titre que ChatGPT.",
      ],
    },
    {
      title: "Combien de temps avant de voir des résultats avec une agence ChatGPT ?",
      paragraphs: [
        "Les délais dépendent du point de départ. Une entreprise déjà bien positionnée sur Google, avec une fiche complète et des avis, obtient ses premières mentions plus vite qu’une entreprise invisible partout.",
        "Comptez quatre à huit semaines pour apparaître sur ChatGPT sur des questions précises et locales, trois à six mois pour une présence régulière face à des concurrents établis. Ces ordres de grandeur viennent de nos suivis hebdomadaires, ils ne sont pas garantis.",
        "La mesure côté Google est aujourd’hui possible : [depuis le 31 août 2026, la Search Console propose à tous les sites un rapport dédié aux performances dans l’IA générative](https://support.google.com/webmasters/answer/16984139), avec les impressions par page, pays, date et appareil.",
        "Pour ChatGPT, Perplexity et Gemini, aucun rapport officiel n’existe. L’agence doit donc tenir un relevé manuel ou outillé, selon la méthode décrite dans [suivre sa visibilité dans ChatGPT](/blog/suivre-visibilite-chatgpt-ia), et vous en remettre le tableau.",
      ],
    },
    {
      title: "Scénario illustratif : une PME de services choisit une agence et suit huit semaines",
      paragraphs: [
        "Le cas ci-dessous est un scénario type, construit pour montrer ce qu’un accompagnement produit dans un délai réaliste. Les chiffres sont illustratifs et ne proviennent pas d’un client réel.",
        "Un cabinet d’expertise comptable de quinze personnes reçoit deux propositions. La première garantit une présence dans ChatGPT sous quinze jours, sans audit. La seconde commence par un relevé de vingt questions clients sur trois moteurs, rendu avant tout devis.",
        "Le relevé initial montre que le cabinet est mentionné sur 1 question sur 20 dans ChatGPT, 2 dans Perplexity, 0 dans Gemini. Deux concurrents reviennent sur la moitié des questions, portés par un annuaire professionnel et la presse régionale.",
        "Semaines 1 à 4 : l’agence ouvre le robots.txt aux robots IA, corrige la fiche Google, balise le site en Schema.org et publie trois pages qui répondent aux questions fréquentes. Les relevés hebdomadaires ne bougent pas, ce qui est attendu.",
        "Semaines 5 à 8 : le cabinet obtient une fiche dans l’annuaire cité par les IA et une mention dans la presse régionale. Les mentions passent à 5 sur 20 dans ChatGPT, 7 dans Perplexity, 3 dans Gemini ; un concurrent reste devant sur la comparaison.",
        "Ce qui compte dans ce scénario, c’est que chaque progression est datée, reliée à une action et comparée aux concurrents. L’autre proposition aurait produit un rapport de positions Google et une promesse invérifiable d’apparaître sur ChatGPT.",
      ],
    },
    {
      title: "Ce qu’il faut retenir",
      paragraphs: [],
      bullets: [
        "Une agence de référencement ChatGPT agit sur ce que les IA lisent : votre site, les sources tierces, vos données structurées, votre cohérence.",
        "Exigez un relevé de vos mentions avant de signer, puis un rapport mensuel comparable.",
        "Le socle SEO reste indispensable : les moteurs IA lisent les mêmes index que Google.",
        "Aucune garantie de position n’est possible ; une promesse de ce type disqualifie l’offre.",
        "Les prix s’alignent sur ceux du SEO, avec un audit à part qui dimensionne la suite.",
        "Premières mentions entre quatre et huit semaines, présence stable en plusieurs mois, jamais en quelques jours.",
      ],
    },
  ],
};

export const septemberArticles: Record<string, BlogArticle> = {
  [suivreVisibilite.slug]: suivreVisibilite,
  [agentIaSurMesure.slug]: agentIaSurMesure,
  [veilleSeo.slug]: veilleSeo,
  [agenceReferencementChatgpt.slug]: agenceReferencementChatgpt,
};

export const septemberPosts: BlogPostMeta[] = [
  {
    slug: suivreVisibilite.slug,
    title: suivreVisibilite.title,
    seoTitle: suivreVisibilite.seoTitle,
    description: suivreVisibilite.description,
    date: suivreVisibilite.date,
    readingTime: suivreVisibilite.readingTime,
    category: suivreVisibilite.category,
  },
  {
    slug: agentIaSurMesure.slug,
    title: agentIaSurMesure.title,
    seoTitle: agentIaSurMesure.seoTitle,
    description: agentIaSurMesure.description,
    date: agentIaSurMesure.date,
    readingTime: agentIaSurMesure.readingTime,
    category: agentIaSurMesure.category,
  },
  {
    slug: veilleSeo.slug,
    title: veilleSeo.title,
    seoTitle: veilleSeo.seoTitle,
    description: veilleSeo.description,
    date: veilleSeo.date,
    readingTime: veilleSeo.readingTime,
    category: veilleSeo.category,
  },
  {
    slug: agenceReferencementChatgpt.slug,
    title: agenceReferencementChatgpt.title,
    seoTitle: agenceReferencementChatgpt.seoTitle,
    description: agenceReferencementChatgpt.description,
    date: agenceReferencementChatgpt.date,
    readingTime: agenceReferencementChatgpt.readingTime,
    category: agenceReferencementChatgpt.category,
  },
];
