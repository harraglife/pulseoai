import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getArticleSchemaEnhancements } from "@/lib/article-metadata";
import { QuickAnswer } from "@/components/quick-answer";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "GEO hôtels : le guide complet 2026",
  description:
    "Guide complet du GEO pour les hôtels. Les 5 actions concrètes pour rendre votre hôtel visible sur ChatGPT, Gemini et Claude.",
  openGraph: {
    title: "GEO hôtels : le guide complet 2026",
    description:
      "Guide complet du GEO pour les hôtels. Les 5 actions concrètes pour rendre votre hôtel visible sur ChatGPT, Gemini et Claude.",
    url: "https://www.pulseoai.fr/blog/geo-hotels-guide-complet",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GEO hôtels : le guide complet 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO hôtels : le guide complet 2026",
    description:
      "Guide complet du GEO pour les hôtels. Les 5 actions concrètes pour rendre votre hôtel visible sur ChatGPT, Gemini et Claude.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/blog/geo-hotels-guide-complet" },
};

const articleSchemaEnhancements = getArticleSchemaEnhancements("geo-hotels-guide-complet");

const blogPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "GEO pour les hôtels : le guide complet pour apparaître sur ChatGPT en 2026",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  inLanguage: "fr-FR",
  url: "https://www.pulseoai.fr/blog/geo-hotels-guide-complet",
  articleSection: "GEO hôtellerie",
  keywords: [
    "GEO hôtellerie",
    "référencement IA hôtel",
    "visibilité IA hôtel",
    "ChatGPT hôtel",
    "réservations directes",
    "Booking",
    "audit SEO / GEO hôtel",
  ],
  author: {
    "@type": "Person",
    name: "Romain Duclos",
    jobTitle: "Fondateur & Expert GEO",
    url: "https://www.pulseoai.fr/a-propos",
  },
  publisher: {
    "@type": "Organization",
    name: "PulseoAI",
    url: "https://www.pulseoai.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://www.pulseoai.fr/logo.png",
    },
  },
  image: "https://www.pulseoai.fr/og-image.png",
  description:
    "Guide GEO pour les hôtels. Comment être compris, cité et recommandé dans ChatGPT, Gemini, Claude et Google AI Overviews pour capter plus de réservations directes.",
  ...(articleSchemaEnhancements?.about ? { about: articleSchemaEnhancements.about } : {}),
  ...(articleSchemaEnhancements?.mentions
    ? { mentions: articleSchemaEnhancements.mentions }
    : {}),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.pulseoai.fr/blog/geo-hotels-guide-complet",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.pulseoai.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.pulseoai.fr/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "GEO pour les hôtels : le guide complet",
      item: "https://www.pulseoai.fr/blog/geo-hotels-guide-complet",
    },
  ],
};

export default function GeoHotelsGuideComplet() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="bg-white">
        {/* Header */}
        <div className="bg-[#F8F9FA]">
          <div className="mx-auto max-w-3xl px-6 py-24 lg:py-28">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              <ArrowLeft className="size-4" />
              Retour au blog
            </Link>

            <h1 className="mt-6 text-[24px] font-bold leading-tight tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              GEO pour les h&ocirc;tels : le guide complet pour
              appara&icirc;tre sur ChatGPT en 2026
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy/50">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />18 mars 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />8 min de lecture
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="size-4" />PulseoAI
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
          <div className="space-y-8 text-navy/80 leading-relaxed text-[17px]">
            {/* Introduction */}
            <p className="text-lg text-navy/90 font-medium leading-relaxed">
              Les moteurs de recherche IA comme ChatGPT, Gemini et Claude sont en train de
              red&eacute;finir la mani&egrave;re dont les voyageurs choisissent leur h&ocirc;tel.
              Si votre &eacute;tablissement n&apos;appara&icirc;t pas dans ces r&eacute;ponses,
              vous perdez chaque jour des r&eacute;servations potentielles. Ce guide vous explique
              comment le GEO (Generative Engine Optimization) fonctionne et comment l&apos;appliquer
              concr&egrave;tement &agrave; votre h&ocirc;tel.
            </p>

            <QuickAnswer
              question="Pourquoi un hôtel doit-il travailler son GEO ?"
              answer="Les voyageurs utilisent déjà ChatGPT, Gemini et Google AI Overviews pour comparer les hôtels. Le GEO aide un établissement à être compris, cité et recommandé sur les requêtes qui peuvent générer des réservations directes."
            />

            <div className="rounded-2xl border border-[#DDE7F4] bg-white px-5 py-4 text-[15px] leading-7 text-navy/68">
              <span className="font-semibold text-navy">À lire aussi :</span>{" "}
              <Link href="/geo-hotellerie" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                notre page GEO hôtellerie
              </Link>
              {", "}
              <Link href="/blog/booking-vs-reservations-directes-geo" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                l’impact du GEO sur les réservations directes
              </Link>
              {" et "}
              <Link href="/blog/hotel-invisible-chatgpt" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                les causes d’invisibilité sur ChatGPT
              </Link>
              .
            </div>

            {/* Section 1 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Qu&apos;est ce que le GEO et pourquoi les h&ocirc;tels doivent s&apos;y int&eacute;resser
            </h2>

            <p>
              Le GEO, ou Generative Engine Optimization, d&eacute;signe l&apos;ensemble des techniques
              permettant &agrave; un site web, une marque ou un &eacute;tablissement d&apos;appara&icirc;tre
              dans les r&eacute;ponses g&eacute;n&eacute;r&eacute;es par les moteurs de recherche IA.
              Contrairement au SEO traditionnel, qui vise &agrave; positionner une page dans une liste
              de r&eacute;sultats, le GEO vise &agrave; &ecirc;tre cit&eacute; directement dans une
              r&eacute;ponse conversationnelle.
            </p>

            <p>
              Les chiffres sont &eacute;loquents : ChatGPT compte d&eacute;sormais 2,8 milliards
              d&apos;utilisateurs mensuels. Les AI Overviews de Google apparaissent sur 25 % des
              requ&ecirc;tes. Le trafic g&eacute;n&eacute;r&eacute; par les moteurs IA a explos&eacute;
              de +527 % en un an. Et 65 % des recherches aboutissent d&eacute;sormais sans clic
              (zero click), ce qui signifie que l&apos;information est consomm&eacute;e directement
              dans la r&eacute;ponse de l&apos;IA.
            </p>

            <p>
              Pour un h&ocirc;telier, cela change tout. Quand un voyageur demande &agrave; ChatGPT
              &laquo; Quel h&ocirc;tel choisir &agrave; Lyon pour un week end romantique ? &raquo;,
              l&apos;IA ne renvoie pas dix liens bleus. Elle recommande directement deux ou trois
              &eacute;tablissements. Si vous n&apos;&ecirc;tes pas dans cette courte liste,
              vous &ecirc;tes invisible.
            </p>

            <ul className="space-y-2 pl-5 text-[15px] leading-7 text-navy/68">
              <li className="list-disc marker:text-cyan">Le SEO hôtelier aide votre site à être trouvé sur Google.</li>
              <li className="list-disc marker:text-cyan">Le GEO hôtelier aide votre établissement à être cité dans ChatGPT, Gemini, Claude et Google AI Overviews.</li>
              <li className="list-disc marker:text-cyan">Les deux leviers servent un même objectif : plus de visibilité qualifiée et plus de réservations directes.</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Comment les moteurs IA choisissent quel h&ocirc;tel recommander
            </h2>

            <p>
              Pour comprendre le GEO, il faut d&apos;abord comprendre comment un LLM (Large Language Model)
              comme GPT 4 ou Gemini construit ses r&eacute;ponses. Ces mod&egrave;les s&apos;appuient
              sur plusieurs sources d&apos;information, qu&apos;ils croisent pour produire une
              recommandation.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Les donn&eacute;es structur&eacute;es (Schema.org)
            </h3>
            <p>
              Les balises Schema.org permettent aux moteurs IA de comprendre pr&eacute;cis&eacute;ment
              ce qu&apos;est votre &eacute;tablissement : type d&apos;h&ocirc;tel, nombre d&apos;&eacute;toiles,
              localisation, services propos&eacute;s, fourchette de prix. Sans ces donn&eacute;es,
              l&apos;IA doit deviner ces informations, ce qui r&eacute;duit consid&eacute;rablement
              vos chances d&apos;&ecirc;tre cit&eacute;.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Les avis clients
            </h3>
            <p>
              Les avis Google, TripAdvisor et Booking constituent une source majeure pour les LLMs.
              Ces mod&egrave;les analysent non seulement la note moyenne, mais aussi le contenu
              des avis : les th&eacute;matiques r&eacute;currentes (spa, gastronomie, calme),
              le ton g&eacute;n&eacute;ral et la fra&icirc;cheur des commentaires. Un h&ocirc;tel
              avec de nombreux avis r&eacute;cents et positifs a un avantage consid&eacute;rable.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Les mentions sur des sources de confiance
            </h3>
            <p>
              &Ecirc;tre mentionn&eacute; dans des guides de voyage en ligne, des blogs sp&eacute;cialis&eacute;s,
              des articles de presse ou des annuaires touristiques renforce votre autorit&eacute; aux yeux
              des IA. Plus vous &ecirc;tes cit&eacute; sur des sources reconnues, plus le mod&egrave;le
              consid&egrave;re votre &eacute;tablissement comme une recommandation fiable.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              L&apos;autorit&eacute; de votre site web
            </h3>
            <p>
              Un site bien structur&eacute;, avec du contenu riche et pertinent, envoie un signal
              fort aux IA. La pr&eacute;sence d&apos;un fichier llms.txt (un standard &eacute;mergent
              qui permet aux LLMs de comprendre rapidement votre site), d&apos;une page
              &laquo; &Agrave; propos &raquo; d&eacute;taill&eacute;e et de descriptions compl&egrave;tes
              de vos services am&eacute;liore significativement votre visibilit&eacute;.
            </p>

            <p className="rounded-[20px] border border-[#DDE7F4] bg-[#F8FBFF] px-4 py-4 text-[15px] leading-7 text-navy/72">
              Pour mesurer les requêtes voyageurs, les concurrents visibles et les sources citées avant d’agir,
              vous pouvez demander un{" "}
              <Link href="/contact" className="font-semibold text-cyan transition-colors hover:text-cyan-dark">
                audit SEO / GEO hôtel
              </Link>
              .
            </p>

            {/* Section 3 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les 5 actions concr&egrave;tes pour rendre votre h&ocirc;tel visible sur les IA
            </h2>

            <h3 className="text-xl font-semibold text-navy pt-2">
              1. Implanter un balisage Schema.org complet
            </h3>
            <p>
              La premi&egrave;re action est technique mais fondamentale. Il s&apos;agit d&apos;ajouter
              &agrave; votre site un balisage de type Hotel (ou LodgingBusiness) qui inclut toutes
              les informations cl&eacute;s : nom, adresse, coordonn&eacute;es, description,
              &eacute;quipements, fourchette de prix, note agr&eacute;g&eacute;e et disponibilit&eacute;.
              Ce balisage doit &ecirc;tre au format JSON LD, le format privil&eacute;gi&eacute; par
              Google et les moteurs IA.
            </p>
            <p>
              Un balisage incomplet ou absent est la cause num&eacute;ro un de l&apos;invisibilit&eacute;
              des h&ocirc;tels sur les IA. Pensez &agrave; inclure &eacute;galement les balisages
              pour vos &eacute;v&eacute;nements, votre restaurant et vos offres sp&eacute;ciales
              si vous en proposez.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              2. Cr&eacute;er un fichier llms.txt
            </h3>
            <p>
              Le fichier llms.txt est un document plac&eacute; &agrave; la racine de votre site
              (comme le robots.txt) qui fournit aux LLMs un r&eacute;sum&eacute; structur&eacute;
              de votre &eacute;tablissement. Il contient votre proposition de valeur, vos services,
              votre localisation et tout ce qui permet &agrave; une IA de vous recommander
              en contexte.
            </p>
            <p>
              Ce fichier est encore peu connu dans l&apos;h&ocirc;tellerie, ce qui repr&eacute;sente
              une opportunit&eacute; : les premiers h&ocirc;tels &agrave; l&apos;adopter b&eacute;n&eacute;ficient
              d&apos;un avantage concurrentiel net. Sa mise en place est rapide (quelques heures)
              et son impact est mesurable en quelques semaines.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              3. Optimiser votre contenu pour les LLMs
            </h3>
            <p>
              Les LLMs ne lisent pas les pages web comme un humain. Ils extraient des blocs
              d&apos;information. Pour &ecirc;tre bien compris, votre contenu doit &ecirc;tre
              structur&eacute; en sections claires avec des titres explicites, des paragraphes
              courts et des informations factuelles. Les phrases longues et le jargon marketing
              r&eacute;duisent votre lisibilit&eacute; pour les IA.
            </p>
            <p>
              Concr&egrave;tement, chaque page de votre site devrait r&eacute;pondre &agrave;
              des questions pr&eacute;cises que les voyageurs posent aux IA : &laquo; Quels
              services propose cet h&ocirc;tel ? &raquo;, &laquo; Est il adapt&eacute; aux
              familles ? &raquo;, &laquo; Quels restaurants se trouvent &agrave; proximit&eacute; ? &raquo;.
              Pensez en termes de questions/r&eacute;ponses plut&ocirc;t qu&apos;en termes
              de brochure publicitaire.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              4. D&eacute;velopper votre pr&eacute;sence sur les sources de confiance
            </h3>
            <p>
              Les IA privil&eacute;gient les h&ocirc;tels qui sont mentionn&eacute;s sur
              des sources tierces fiables. Cela inclut les guides de voyage en ligne (Lonely Planet,
              Le Routard, Michelin), les blogs sp&eacute;cialis&eacute;s, les annuaires locaux
              (offices de tourisme, CCI) et les sites de presse. Chaque mention constitue un
              &laquo; vote de confiance &raquo; qui renforce votre autorit&eacute; aux yeux
              des mod&egrave;les IA.
            </p>
            <p>
              L&apos;objectif n&apos;est pas d&apos;obtenir des centaines de liens, mais des mentions
              contextuelles sur des sites que les IA consid&egrave;rent comme fiables. Un article
              dans un magazine de voyage reconnu vaut plus que cinquante inscriptions dans des
              annuaires g&eacute;n&eacute;riques.
            </p>

            <ul className="space-y-2 pl-5 text-[15px] leading-7 text-navy/68">
              <li className="list-disc marker:text-cyan">Google Business Profile, TripAdvisor et Booking restent des sources structurantes.</li>
              <li className="list-disc marker:text-cyan">Les offices de tourisme, guides locaux et médias voyage renforcent les citations IA.</li>
              <li className="list-disc marker:text-cyan">Les pages services et FAQ de votre site doivent répondre aux requêtes spa, séminaire, famille ou business.</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy pt-2">
              5. G&eacute;rer activement vos avis clients
            </h3>
            <p>
              Les avis sont le carburant des recommandations IA. Un h&ocirc;tel avec des avis
              r&eacute;cents, vari&eacute;s et d&eacute;taill&eacute;s a un avantage majeur.
              Encouragez vos clients &agrave; laisser des avis apr&egrave;s leur s&eacute;jour,
              et r&eacute;pondez syst&eacute;matiquement aux commentaires (positifs comme n&eacute;gatifs).
            </p>
            <p>
              Les LLMs analysent le contenu des avis pour identifier les points forts de votre
              &eacute;tablissement. Si vos clients mentionnent r&eacute;guli&egrave;rement
              &laquo; petit d&eacute;jeuner exceptionnel &raquo; ou &laquo; vue magnifique
              sur la mer &raquo;, ces &eacute;l&eacute;ments seront repris dans les recommandations
              de l&apos;IA. Encouragez vos clients &agrave; d&eacute;tailler leur exp&eacute;rience
              plut&ocirc;t qu&apos;&agrave; laisser un simple &laquo; Tr&egrave;s bien &raquo;.
            </p>

            {/* Section 4 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les erreurs &agrave; &eacute;viter
            </h2>

            <p>
              Certaines pratiques courantes en SEO traditionnel sont contre productives en GEO.
              Voici les erreurs les plus fr&eacute;quentes que nous observons chez les h&ocirc;teliers.
            </p>

            <p>
              <strong className="text-navy">Ignorer les donn&eacute;es structur&eacute;es.</strong>{" "}
              Beaucoup d&apos;h&ocirc;tels investissent dans un beau site web mais n&eacute;gligent
              les balises Schema.org. Sans ces donn&eacute;es, m&ecirc;me le plus beau site reste
              invisible pour les IA.
            </p>

            <p>
              <strong className="text-navy">Produire du contenu purement marketing.</strong>{" "}
              Les phrases comme &laquo; Vivez une exp&eacute;rience inoubliable &raquo;
              n&apos;apportent aucune information utile aux LLMs. Privil&eacute;giez les descriptions
              factuelles et d&eacute;taill&eacute;es de vos services.
            </p>

            <p>
              <strong className="text-navy">N&eacute;gliger la version mobile.</strong>{" "}
              De nombreuses requ&ecirc;tes IA sont effectu&eacute;es sur mobile. Un site lent
              ou mal adapt&eacute; aux petits &eacute;crans envoie un signal n&eacute;gatif
              aux moteurs.
            </p>

            <p>
              <strong className="text-navy">Copier le contenu de Booking.</strong>{" "}
              R&eacute;utiliser la description de votre fiche Booking sur votre propre site
              cr&eacute;e du contenu dupliqu&eacute; qui est p&eacute;nalis&eacute; par
              les moteurs IA. R&eacute;digez un contenu original et plus riche.
            </p>

            <p>
              <strong className="text-navy">Attendre que &laquo; &ccedil;a se fasse tout seul &raquo;.</strong>{" "}
              Le GEO est un domaine en pleine structuration. Les h&ocirc;tels qui agissent
              maintenant prennent de l&apos;avance sur leurs concurrents. Dans six mois,
              la comp&eacute;tition sera beaucoup plus forte.
            </p>

            {/* Section 5 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              R&eacute;sultats que vous pouvez esp&eacute;rer
            </h2>

            <p>
              Le GEO n&apos;est pas une baguette magique, mais les r&eacute;sultats sont mesurables
              et progressifs. Voici une chronologie r&eacute;aliste bas&eacute;e sur notre
              exp&eacute;rience.
            </p>

            <p>
              <strong className="text-navy">Semaines 1 &agrave; 4 :</strong> mise en place technique
              (balisage Schema.org, fichier llms.txt, restructuration du contenu). &Agrave; ce stade,
              les fondations sont pos&eacute;es mais les r&eacute;sultats ne sont pas encore visibles.
            </p>

            <p>
              <strong className="text-navy">Mois 2 &agrave; 3 :</strong> les premi&egrave;res
              mentions sur les sources de confiance commencent &agrave; &ecirc;tre index&eacute;es.
              Vous pouvez commencer &agrave; appara&icirc;tre dans certaines r&eacute;ponses IA
              pour des requ&ecirc;tes sp&eacute;cifiques li&eacute;es &agrave; votre localisation.
            </p>

            <p>
              <strong className="text-navy">Mois 4 &agrave; 6 :</strong> votre visibilit&eacute; IA
              s&apos;installe. Vous apparaissez r&eacute;guli&egrave;rement dans les recommandations
              pour votre zone g&eacute;ographique et vos sp&eacute;cialit&eacute;s. Les premiers
              impacts sur les r&eacute;servations directes deviennent mesurables.
            </p>

            <p>
              <strong className="text-navy">&Agrave; partir du mois 6 :</strong> le cercle vertueux
              s&apos;enclenche. Votre autorit&eacute; IA se renforce, les recommandations deviennent
              plus fr&eacute;quentes et le trafic direct augmente progressivement. Les h&ocirc;tels
              qui maintiennent leurs efforts observent une croissance continue sur 12 &agrave; 18 mois.
            </p>

            {/* Conclusion */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Conclusion : le moment d&apos;agir, c&apos;est maintenant
            </h2>

            <p>
              Le GEO n&apos;est plus une tendance &agrave; surveiller. C&apos;est une r&eacute;alit&eacute;
              qui transforme la visibilit&eacute; des h&ocirc;tels en ligne. Avec 2,8 milliards
              d&apos;utilisateurs sur ChatGPT et une explosion du trafic IA (+527 % en un an),
              les h&ocirc;tels qui n&apos;apparaissent pas dans ces r&eacute;ponses laissent
              des r&eacute;servations sur la table chaque jour.
            </p>

            <p>
              La bonne nouvelle, c&apos;est que le march&eacute; est encore jeune. La plupart
              des h&ocirc;teliers n&apos;ont pas encore pris conscience de cette opportunit&eacute;.
              En agissant d&egrave;s aujourd&apos;hui, vous pouvez prendre une longueur d&apos;avance
              consid&eacute;rable sur vos concurrents.
            </p>
          </div>

          <RelatedPosts
            currentSlug="geo-hotels-guide-complet"
            explicitSlugs={[
              "hotel-invisible-chatgpt",
              "booking-vs-reservations-directes-geo",
              "schema-org-guide-complet-geo",
            ]}
          />

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-[#F8F9FA] p-8 text-center sm:p-12">
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy">
              Pr&ecirc;t &agrave; rendre votre h&ocirc;tel visible sur les IA ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-navy/70">
              Demandez votre audit SEO / GEO. Nous analysons la visibilit&eacute; actuelle
              de votre &eacute;tablissement sur ChatGPT, Gemini et Claude, et vous livrons
              un plan d&apos;action personnalis&eacute;.
            </p>
            <Link href="/contact" className="mt-6 inline-block">
              <Button className="h-12 cursor-pointer rounded-full bg-cyan px-8 text-base font-semibold text-white hover:bg-cyan-dark">
                Obtenir un audit
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-navy/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              <ArrowLeft className="size-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
