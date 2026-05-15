export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Comprendre le GEO",
    items: [
      {
        question: "Qu'est ce que le GEO (Generative Engine Optimization) ?",
        answer:
          "Le GEO est l'art d'optimiser la présence d'un établissement dans les réponses générées par les moteurs de recherche IA comme ChatGPT, Claude, Gemini ou Copilot. Contrairement au SEO classique qui vise les liens bleus de Google, le GEO vise à faire mentionner et recommander votre hôtel directement dans les réponses conversationnelles. Les moteurs IA synthétisent des informations provenant de multiples sources pour formuler une réponse unique. Le GEO consiste à structurer, enrichir et distribuer vos données pour que ces IA vous identifient comme une réponse pertinente et fiable.",
      },
      {
        question: "Quelle est la différence entre le SEO et le GEO ?",
        answer:
          "Le SEO optimise votre site pour apparaître dans les résultats de recherche traditionnels sous forme de liens cliquables. Le GEO optimise votre présence pour être cité dans les réponses conversationnelles des IA. En SEO, l'objectif est de se positionner en première page. En GEO, l'objectif est d'être la recommandation que l'IA formule. Les critères diffèrent aussi : le GEO repose davantage sur la cohérence des données structurées (Schema.org), la présence sur des sources de confiance (Foursquare, annuaires, avis) et la qualité du contenu éditorial. Les deux approches sont complémentaires et se renforcent mutuellement.",
      },
      {
        question: "Pourquoi le GEO est il important en 2026 ?",
        answer:
          "En 2026, plus de 25 % des recherches Google affichent des AI Overviews et ChatGPT compte 2,8 milliards de visites mensuelles. Le trafic généré par les moteurs IA a bondi de 527 % en un an. Les voyageurs utilisent de plus en plus ces outils pour planifier leurs séjours, demander des recommandations d'hôtels et comparer les options. Si votre établissement n'est pas visible dans ces réponses, vous perdez des clients potentiels au profit de vos concurrents. Le GEO n'est plus une option, c'est un levier stratégique pour capter cette nouvelle audience qui ne passe plus par les moteurs de recherche classiques.",
      },
      {
        question: "Quels sont les moteurs de recherche IA concernés ?",
        answer:
          "Les principaux moteurs de recherche IA sont ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) et Copilot (Microsoft). À cela s'ajoutent les AI Overviews de Google, qui intègrent des réponses génératives directement dans les résultats de recherche classiques. Chaque moteur a ses propres sources de données et critères de sélection, mais tous partagent un fonctionnement commun : ils synthétisent des informations provenant du web, des bases de données structurées et des sources de confiance. Une stratégie GEO efficace cible l'ensemble de ces plateformes simultanément.",
      },
      {
        question: "Comment les moteurs IA choisissent les résultats qu'ils affichent ?",
        answer:
          "Les moteurs IA sélectionnent leurs recommandations en croisant plusieurs signaux. D'abord, la cohérence des données structurées : si votre nom, adresse et informations sont identiques partout, l'IA vous considère comme fiable. Ensuite, la qualité et la fraîcheur du contenu : 50 % du contenu cité par les IA a moins de 13 semaines. Les avis clients jouent aussi un rôle majeur, car ils constituent une preuve sociale que l'IA valorise. Enfin, la présence sur des sources de référence comme Foursquare, les annuaires spécialisés et les sites d'autorité renforce votre crédibilité. L'IA privilégie les établissements dont les informations sont complètes, cohérentes et récentes.",
      },
      {
        question: "Le GEO va t il remplacer le SEO ?",
        answer:
          "Non, le GEO ne remplace pas le SEO. Les deux disciplines sont complémentaires. Le SEO reste essentiel pour votre visibilité sur les moteurs de recherche classiques, votre positionnement local et votre trafic organique. Le GEO vient ajouter une couche supplémentaire en ciblant les moteurs IA. D'ailleurs, un bon SEO technique et un contenu de qualité constituent une base solide pour le GEO. Chez PulseoAI, nous considérons le GEO comme une évolution naturelle du SEO. Les hôtels qui combinent les deux approches bénéficient d'une couverture maximale sur l'ensemble des canaux de recherche, traditionnels comme conversationnels.",
      },
    ],
  },
  {
    title: "Le GEO pour les hôtels",
    items: [
      {
        question: "Pourquoi le GEO est il crucial pour les hôtels ?",
        answer:
          "L'hôtellerie est l'un des secteurs les plus impactés par la recherche IA. Quand un voyageur demande à ChatGPT « quel hôtel boutique réserver à Nice pour un week end en amoureux ? », l'IA ne renvoie pas 10 liens : elle recommande 3 à 5 établissements précis. Si votre hôtel n'y figure pas, vous êtes invisible pour ces voyageurs. De plus, 65 % des recherches se terminent désormais sans clic vers un site web. Les hôtels dépendent fortement de leur visibilité en ligne, et le GEO permet de capter cette nouvelle audience qui prend ses décisions directement dans l'interface conversationnelle de l'IA.",
      },
      {
        question: "Quel est l'impact du GEO sur les réservations directes ?",
        answer:
          "Le GEO génère des réservations directes de haute qualité. Lorsqu'un moteur IA recommande votre hôtel, il cite souvent votre site web comme source, ce qui dirige le voyageur vers votre moteur de réservation sans passer par un intermédiaire. Les visiteurs arrivant via les moteurs IA ont un taux de conversion supérieur car ils arrivent avec une intention déjà qualifiée par la recommandation de l'IA. Pour un hôtel, chaque réservation directe représente une économie de 15 à 25 % de commission par rapport à une réservation via OTA. Le GEO constitue donc un levier concret pour améliorer votre marge opérationnelle.",
      },
      {
        question: "Le GEO peut il réduire ma dépendance à Booking et aux OTA ?",
        answer:
          "Oui, c'est l'un des bénéfices stratégiques majeurs du GEO. En étant recommandé directement par les moteurs IA, vous captez des réservations sans passer par les OTA et leurs commissions de 15 à 25 %. Les voyageurs qui reçoivent une recommandation IA ont tendance à visiter directement le site de l'hôtel plutôt que de rechercher sur Booking. Le GEO ne supprime pas la nécessité d'être présent sur les OTA, mais il crée un canal d'acquisition complémentaire entièrement sous votre contrôle. À mesure que l'usage des moteurs IA progresse, ce canal prendra une part croissante dans votre mix de distribution.",
      },
      {
        question: "Mon hôtel est petit, le GEO est il pertinent pour moi ?",
        answer:
          "Absolument. Le GEO est même particulièrement avantageux pour les petits hôtels indépendants. Sur les OTA, les grands groupes dominent grâce à leurs budgets publicitaires. En GEO, les moteurs IA privilégient la pertinence et la spécificité. Un petit hôtel de charme avec une identité forte, des avis authentiques et un contenu bien structuré peut être recommandé avant une grande chaîne. Les IA valorisent les établissements qui répondent précisément à la requête du voyageur. Un hôtel de 15 chambres avec une histoire unique et un positionnement clair a toutes ses chances face aux géants du secteur.",
      },
      {
        question: "Le GEO fonctionne t il pour les hôtels en zone rurale ?",
        answer:
          "Oui, et c'est même un atout. Les voyageurs qui interrogent les IA sur des destinations rurales ou de niche reçoivent des réponses très ciblées. L'IA ne se contente pas de lister les hôtels les plus populaires : elle cherche les établissements les plus pertinents pour la demande spécifique. Un hôtel en zone rurale avec un positionnement clair (écotourisme, gastronomie locale, randonnée) sera naturellement recommandé pour les requêtes correspondantes. La concurrence GEO est aussi souvent moins intense en zone rurale, ce qui facilite le positionnement. Le contenu local authentique et les avis détaillés constituent des atouts majeurs pour ces établissements.",
      },
      {
        question: "Les chaînes hôtelières ont elles besoin du GEO ?",
        answer:
          "Oui, les chaînes hôtelières bénéficient du GEO à deux niveaux. Au niveau de la marque, le GEO renforce la visibilité globale de la chaîne dans les réponses IA pour les requêtes génériques. Au niveau de chaque établissement, il permet à chaque hôtel de la chaîne d'apparaître pour les requêtes locales et spécifiques. Les chaînes disposent d'un avantage : la cohérence de marque et le volume de données structurées facilitent l'indexation par les IA. En revanche, elles doivent veiller à différencier chaque propriété avec du contenu unique pour éviter les contenus génériques que les IA tendent à ignorer.",
      },
    ],
  },
  {
    title: "Fonctionnement",
    items: [
      {
        question: "Comment se déroule un audit GEO ?",
        answer:
          "Notre audit GEO commence par une analyse complète de votre visibilité actuelle sur les moteurs IA. Nous interrogeons ChatGPT, Claude, Gemini et Copilot avec les requêtes que vos clients potentiels utilisent. Nous auditons ensuite votre site web (balisage Schema.org, contenu, structure), votre présence sur les sources de confiance (Foursquare, annuaires, avis) et la cohérence de vos données en ligne. Le rapport détaille votre score de visibilité IA, identifie les lacunes et propose un plan d'action priorisé. L'audit est sans engagement et vous donne une vision claire de votre situation actuelle et du potentiel à exploiter.",
      },
      {
        question: "Combien de temps faut il pour voir des résultats ?",
        answer:
          "Les premiers résultats apparaissent généralement entre 4 et 8 semaines après la mise en place des optimisations. Les corrections techniques (balisage Schema.org, fichier llms.txt, cohérence des données) produisent des effets rapides car les moteurs IA recrawlent fréquemment leurs sources. Les optimisations de contenu et la stratégie de citations prennent un peu plus de temps. Rappelons que 50 % du contenu cité par les IA a moins de 13 semaines, ce qui signifie que du contenu frais et optimisé peut être repris rapidement. Un suivi régulier permet d'ajuster la stratégie et d'accélérer les résultats au fil des mois.",
      },
      {
        question: "Quels résultats concrets puis je attendre ?",
        answer:
          "Les résultats varient selon votre situation de départ, mais nos clients constatent en moyenne une augmentation significative de leur taux de citation dans les réponses IA. Concrètement, cela se traduit par une hausse du trafic qualifié vers votre site web et votre moteur de réservation, une augmentation des réservations directes et une réduction de la part des OTA dans votre mix de distribution. Nous mesurons la progression via des indicateurs précis : nombre de citations IA, positionnement par requête, trafic issu des moteurs IA et impact sur les réservations. Chaque mois, vous recevez un rapport détaillé de vos performances.",
      },
      {
        question: "Comment mesurez vous la visibilité IA ?",
        answer:
          "Nous utilisons une méthodologie propriétaire qui consiste à interroger régulièrement les moteurs IA avec un panel de requêtes stratégiques pour votre hôtel. Nous mesurons votre taux de citation (combien de fois vous êtes mentionné), votre positionnement (en quelle position dans la réponse), la qualité des recommandations (précision des informations citées) et l'évolution dans le temps. Ces données sont compilées dans un tableau de bord accessible en ligne. Nous suivons également le trafic provenant des moteurs IA via les analytics de votre site et son impact sur vos réservations directes pour mesurer le retour sur investissement concret.",
      },
      {
        question: "À quelle fréquence mettez vous à jour le contenu ?",
        answer:
          "La fréquence dépend de votre formule, mais nous recommandons des mises à jour régulières car les moteurs IA privilégient le contenu frais. En pratique, nous mettons à jour votre contenu stratégique chaque mois : nouvelles pages, actualisation des informations saisonnières, ajout d'événements locaux et enrichissement des données structurées. Les données techniques (Schema.org, llms.txt) sont ajustées dès que nécessaire. Cette régularité est essentielle car les IA réévaluent constamment leurs sources. Un contenu régulièrement mis à jour signale aux moteurs IA que votre établissement est actif et que vos informations sont fiables.",
      },
    ],
  },
  {
    title: "Technique",
    items: [
      {
        question: "Qu'est ce que le balisage Schema.org pour un hôtel ?",
        answer:
          "Schema.org est un vocabulaire de données structurées que vous intégrez dans le code de votre site web. Pour un hôtel, il permet de décrire de manière standardisée votre nom, adresse, étoiles, équipements, tarifs, disponibilités et avis. Les moteurs IA utilisent ces données structurées comme source de confiance car elles sont précises et sans ambiguïté. Un balisage Hotel, LodgingBusiness ou LocalBusiness bien implémenté augmente considérablement vos chances d'être cité correctement par les IA. Chez PulseoAI, nous implémentons un balisage complet et conforme aux dernières recommandations, couvrant toutes les propriétés pertinentes pour votre établissement.",
      },
      {
        question: "Qu'est ce que le fichier llms.txt ?",
        answer:
          "Le fichier llms.txt est un fichier texte placé à la racine de votre site web, spécialement conçu pour communiquer avec les moteurs IA. Il fonctionne comme un guide structuré qui présente votre établissement, vos services, votre positionnement et vos informations clés dans un format optimisé pour les LLM (Large Language Models). Pensez y comme un « dossier de presse » destiné aux IA. Contrairement au robots.txt qui donne des directives techniques, le llms.txt fournit du contexte riche et organisé. C'est un outil encore peu utilisé par les hôtels, ce qui représente un avantage concurrentiel significatif pour les établissements qui l'adoptent tôt.",
      },
      {
        question: "Faut il modifier mon site web pour le GEO ?",
        answer:
          "Oui, mais les modifications sont généralement légères et non intrusives. Le GEO implique l'ajout de balisage Schema.org dans le code source (invisible pour vos visiteurs), la création d'un fichier llms.txt et l'optimisation de certains contenus éditoriaux. Votre design, votre charte graphique et votre expérience utilisateur ne sont pas impactés. Si votre site est sur un CMS comme WordPress, les modifications se font via des plugins et des champs dédiés. Nous nous chargeons de toute la partie technique en coordination avec votre équipe ou votre prestataire web. Le processus est transparent et ne perturbe pas le fonctionnement de votre site.",
      },
      {
        question: "Qu'est ce que Foursquare et pourquoi est ce important ?",
        answer:
          "Foursquare est une plateforme de données de localisation utilisée par de nombreux moteurs IA comme source de référence pour les informations sur les établissements. Quand ChatGPT ou Claude recommande un hôtel, ils puisent souvent dans les données Foursquare pour vérifier l'adresse, les horaires, la catégorie et les avis. Une fiche Foursquare complète et à jour est donc essentielle pour votre visibilité IA. Beaucoup d'hôteliers ignorent cette plateforme car elle est moins connue que Google Business Profile, mais elle joue un rôle crucial dans l'écosystème GEO. Nous optimisons votre fiche Foursquare dans le cadre de notre accompagnement.",
      },
      {
        question: "Mon site est sur WordPress, est ce compatible ?",
        answer:
          "Oui, WordPress est parfaitement compatible avec le GEO. C'est même l'un des CMS les plus simples à optimiser grâce à son écosystème de plugins. Le balisage Schema.org peut être ajouté via des extensions dédiées, le fichier llms.txt se place simplement à la racine de votre hébergement et les optimisations de contenu se font directement dans l'éditeur. Nous travaillons régulièrement avec des sites WordPress et maîtrisons les bonnes pratiques spécifiques à cette plateforme. Que vous utilisiez un thème standard ou un builder comme Elementor ou Divi, nous adaptons nos optimisations à votre configuration technique existante.",
      },
    ],
  },
  {
    title: "Prix et engagement",
    items: [
      {
        question: "Combien coûte une stratégie GEO ?",
        answer:
          "Nos tarifs sont adaptés à la taille et aux besoins de chaque établissement. Nous proposons plusieurs formules à partir de quelques centaines d'euros par mois, accessibles aussi bien aux petits hôtels indépendants qu'aux groupes hôteliers. Le coût exact dépend du périmètre d'intervention : nombre de requêtes ciblées, volume de contenu, complexité technique et niveau de suivi souhaité. L'audit initial nous permet d'évaluer votre situation et de vous recommander la formule la plus adaptée. Contactez nous pour recevoir un devis personnalisé qui correspond précisément à vos objectifs et à votre budget.",
      },
      {
        question: "Quelle est la durée d'engagement ?",
        answer:
          "Nous proposons des engagements de 3 ou 6 mois, car le GEO produit des résultats progressifs qui nécessitent un minimum de temps pour se déployer pleinement. Un engagement de 3 mois permet de mettre en place les fondations techniques et de constater les premiers résultats. Un engagement de 6 mois offre le temps nécessaire pour une optimisation complète et un retour sur investissement mesurable. Nous ne pratiquons pas d'engagement de 12 mois car nous préférons que nos clients restent par conviction et résultats. À l'issue de la période, vous êtes libre de poursuivre, d'ajuster ou d'arrêter.",
      },
      {
        question: "L'audit GEO engage t il à quelque chose ?",
        answer:
          "Non, l'audit GEO est totalement sans engagement. Il s'agit d'une analyse offerte de votre visibilité actuelle sur les moteurs IA. Vous recevez un rapport détaillé avec votre score de visibilité, vos forces, vos lacunes et des recommandations concrètes. Cet audit vous appartient, que vous choisissiez ou non de travailler avec nous ensuite. Notre objectif est de vous apporter de la valeur dès le premier contact et de vous donner les informations nécessaires pour prendre une décision éclairée. La plupart de nos clients choisissent de collaborer avec nous après avoir découvert le potentiel inexploité révélé par l'audit.",
      },
      {
        question: "Quel est le retour sur investissement du GEO ?",
        answer:
          "Le retour sur investissement du GEO se mesure principalement par l'augmentation des réservations directes et la réduction des commissions OTA. Chaque réservation directe générée via les moteurs IA représente une économie de 15 à 25 % par rapport à une réservation Booking. Pour un hôtel avec un panier moyen de 150 euros par nuit, quelques réservations directes supplémentaires par mois suffisent à rentabiliser l'investissement GEO. Au delà du ROI financier, le GEO renforce votre image de marque, votre indépendance commerciale et votre positionnement sur un canal en pleine croissance. C'est un investissement stratégique à moyen et long terme.",
      },
      {
        question: "Proposez vous des formules adaptées aux petits hôtels ?",
        answer:
          "Oui, nous avons conçu notre offre pour être accessible à tous les types d'établissements. Notre formule d'entrée est spécifiquement pensée pour les petits hôtels indépendants avec un budget limité. Elle couvre les fondamentaux du GEO : audit, balisage technique, fichier llms.txt, optimisation des fiches et monitoring de base. Les établissements plus grands ou avec des ambitions plus importantes peuvent opter pour des formules plus complètes incluant la création de contenu, une stratégie de citations avancée et un suivi renforcé. L'audit initial nous permet de vous orienter vers la formule qui offre le meilleur rapport qualité/prix pour votre situation.",
      },
    ],
  },
  {
    title: "PulseoAI",
    items: [
      {
        question: "Qui est PulseoAI ?",
        answer:
          "PulseoAI est une agence spécialisée en GEO (Generative Engine Optimization) dédiée exclusivement au secteur de l'hôtellerie. Fondée à Nantes par Romain et Sofiane, notre mission est d'aider les hôtels à apparaître dans les réponses des moteurs de recherche IA. Nous sommes convaincus que le GEO représente une opportunité majeure pour les hôteliers qui veulent reprendre le contrôle de leur distribution. Notre expertise combine une connaissance approfondie de l'hôtellerie et une maîtrise technique des mécanismes de référencement IA. Nous accompagnons des hôtels indépendants comme des groupes hôteliers en France, en Suisse et au Maroc.",
      },
      {
        question: "Pourquoi choisir PulseoAI plutôt qu'une agence SEO classique ?",
        answer:
          "Une agence SEO classique optimise votre site pour Google et les moteurs de recherche traditionnels. Le GEO est une discipline différente qui nécessite des compétences spécifiques : compréhension du fonctionnement des LLM, maîtrise du balisage structuré pour les IA, connaissance des sources de données utilisées par les moteurs IA (Foursquare, llms.txt) et expertise en stratégie de citations. PulseoAI se concentre exclusivement sur le GEO pour l'hôtellerie, ce qui nous donne une double spécialisation unique. Nous connaissons les requêtes des voyageurs, les critères de recommandation des IA et les leviers spécifiques au secteur hôtelier.",
      },
      {
        question: "Où êtes vous basés ?",
        answer:
          "PulseoAI est basée à Saint Herblain, dans la métropole nantaise (44800). Notre bureau est situé au 17 rue Océane. Cependant, nous travaillons avec des hôtels partout en France et à l'international. Le GEO étant un métier 100 % digital, nous collaborons efficacement à distance avec nos clients. Nos échanges se font par visioconférence, email et via notre plateforme de suivi en ligne. Si vous êtes dans la région nantaise, nous sommes bien sûr ravis de vous accueillir en personne pour un premier rendez vous ou des points réguliers.",
      },
      {
        question: "Travaillez vous avec des hôtels hors de France ?",
        answer:
          "Oui, nous accompagnons des hôtels en France, en Suisse et au Maroc. Le GEO fonctionne sur les mêmes principes quel que soit le pays, car les moteurs IA comme ChatGPT et Claude sont utilisés mondialement. Nous adaptons cependant notre stratégie aux spécificités locales : sources de données de référence, habitudes de recherche des voyageurs, langue et particularités réglementaires. Notre expertise multilingue nous permet d'optimiser votre visibilité aussi bien pour les requêtes en français qu'en anglais ou en d'autres langues. Si votre hôtel accueille une clientèle internationale, le GEO multilingue est un atout considérable.",
      },
      {
        question: "Comment démarrer avec PulseoAI ?",
        answer:
          "Le point de départ est notre audit GEO sans engagement. Rendez vous sur notre page de contact ou appelez nous directement pour planifier votre audit. En quelques jours, vous recevrez un rapport complet analysant votre visibilité actuelle sur les moteurs IA, avec des recommandations concrètes. Nous organisons ensuite un rendez vous pour présenter les résultats et discuter de la stratégie adaptée à votre établissement. Si vous souhaitez aller plus loin, nous élaborons un plan d'action personnalisé et commençons les optimisations dès validation. L'ensemble du processus est simple, transparent et centré sur vos objectifs.",
      },
    ],
  },
  {
    title: "Autres secteurs",
    items: [
      {
        question: "Le GEO fonctionne aussi pour les restaurants ?",
        answer:
          "Oui. Quand un client demande à ChatGPT « meilleur restaurant italien à Lyon », l'IA recommande les établissements qu'elle trouve sur Google Business, TripAdvisor, TheFork et les blogs gastronomiques. Le GEO optimise votre présence sur toutes ces sources pour que l'IA vous recommande en premier. Nous travaillons sur votre balisage Schema.org (Restaurant, Menu, Review), la cohérence de vos informations en ligne et la qualité de vos avis. Les restaurants qui investissent dans le GEO captent une clientèle qualifiée qui fait confiance aux recommandations de l'IA.",
      },
      {
        question: "Je ne suis pas dans l'hôtellerie, PulseoAI peut m'aider ?",
        answer:
          "Absolument. Notre expertise principale est l'hôtellerie mais notre méthode GEO s'applique à tous les secteurs. Nous accompagnons des restaurants, des prestataires de services, des commerces et des PME. Les principes du référencement IA sont les mêmes : contenu structuré, citations cohérentes, balisage technique et monitoring. Nous adaptons notre approche aux spécificités de votre secteur, aux requêtes de vos clients et aux sources de données que les IA consultent dans votre domaine. Chaque entreprise a un potentiel de visibilité IA à exploiter.",
      },
      {
        question: "Le GEO est utile pour une entreprise B2B ?",
        answer:
          "Oui, et c'est même un levier très puissant en B2B. Quand un DRH cherche « meilleure solution de logement temporaire à Paris » sur ChatGPT, ou qu'un directeur achats demande « meilleur prestataire [votre service] à [ville] », les IA recommandent les entreprises qui ont travaillé leur visibilité IA. En B2B, chaque lead a une valeur très élevée, ce qui rend le retour sur investissement du GEO particulièrement intéressant. Nous optimisons votre présence sur LinkedIn, les annuaires professionnels et les sources B2B que les IA consultent.",
      },
      {
        question: "Le GEO peut aider mon commerce local ?",
        answer:
          "Oui. Les moteurs IA sont de plus en plus utilisés pour les recherches locales. Quand quelqu'un demande « meilleur coiffeur à Nantes » ou « meilleur spa près de chez moi » à ChatGPT, l'IA s'appuie sur Foursquare, Google Business et les avis en ligne. Le GEO optimise votre présence sur toutes ces sources pour que l'IA vous recommande. Pour un commerce local, le GEO est un investissement accessible qui génère des clients qualifiés. Les recherches locales via IA sont en forte croissance et la concurrence GEO est encore faible dans la plupart des villes.",
      },
      {
        question: "Travaillez vous avec des entreprises en dehors de Nantes ?",
        answer:
          "Oui. Nous sommes basés à Nantes mais nous accompagnons des entreprises partout en France, en Suisse et au Maroc. Le GEO se fait entièrement à distance. Nous communiquons par visioconférence, email et nos rapports mensuels sont accessibles en ligne. La localisation de votre entreprise n'est pas un frein : notre méthode s'adapte à toutes les zones géographiques et nous avons l'habitude de travailler avec des clients répartis sur plusieurs pays. Ce qui compte, c'est votre ambition de visibilité IA.",
      },
    ],
  },
];
