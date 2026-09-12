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

export const septemberArticles: Record<string, BlogArticle> = {
  [suivreVisibilite.slug]: suivreVisibilite,
  [agentIaSurMesure.slug]: agentIaSurMesure,
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
];
