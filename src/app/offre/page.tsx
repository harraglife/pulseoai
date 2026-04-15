import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  FileText,
  Code2,
  Globe,
  BarChart3,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Building2,
  UtensilsCrossed,
  Briefcase,
  Store,
  Compass,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Offre GEO : référencement IA pour entreprises",
  description:
    "Audit IA, contenu, balisage technique, citations, monitoring. Notre méthode GEO pour hôtels, restaurants, commerces et PME.",
  openGraph: {
    title: "Offre GEO : référencement IA pour entreprises · PulseoAI",
    description:
      "Audit IA, contenu, balisage technique, citations, monitoring. Notre méthode GEO pour hôtels, restaurants, commerces et PME.",
    url: "https://www.pulseoai.fr/offre",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offre GEO : référencement IA pour entreprises · PulseoAI",
    description:
      "Audit IA, contenu, balisage technique, citations, monitoring. Notre méthode GEO pour hôtels, restaurants, commerces et PME.",
  },
};

const jsonLdBreadcrumb = {
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
      name: "Notre offre",
      item: "https://www.pulseoai.fr/offre",
    },
  ],
};

export default function OffrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-gray-light">
        <div className="mx-auto max-w-[1100px] px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li>
              <Link href="/" className="hover:text-cyan transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <ChevronRight className="size-3.5" />
            </li>
            <li className="font-medium text-navy">Notre offre</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <h1 className="text-[26px] sm:text-[36px] lg:text-[44px] font-bold text-navy leading-tight">
            Notre offre <span className="text-cyan">GEO</span> pour votre entreprise
          </h1>
          <p className="mt-6 mx-auto max-w-[680px] text-[15px] text-[#6B7280] leading-relaxed">
            Le référencement IA (GEO) repose sur 5 piliers complémentaires.
            Chacun joue un rôle précis pour que votre entreprise apparaisse dans les
            réponses de ChatGPT, Claude et Gemini. Nous les déployons tous,
            dans un accompagnement structuré et mesurable, adapté à votre
            établissement.
          </p>
        </div>
      </section>

      {/* Pillar 1 */}
      <section className="bg-gray-light py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan/10">
                <Search className="size-7 text-cyan" />
              </div>
            </div>
            <div className="lg:col-span-11">
              <p className="text-sm font-semibold text-cyan uppercase tracking-wider">
                Pilier 1
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-navy">
                Audit de visibilité IA
              </h2>
              <div className="mt-6 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Avant toute action, nous mesurons précisément où en est votre
                  entreprise. Nous testons votre établissement sur plus de 25 requêtes
                  stratégiques directement dans les moteurs IA : ChatGPT,
                  Claude et Gemini. Ces requêtes couvrent les recherches que
                  vos futurs clients formulent réellement, comme « meilleur hôtel
                  spa à Nantes », « hôtel familial proche de la plage en Bretagne »
                  ou « où dormir pour un séminaire à Lyon ».
                </p>
                <p>
                  Pour chaque requête, nous analysons si votre entreprise est
                  mentionnée, à quelle position, et quels concurrents apparaissent
                  à votre place. Nous calculons un score de visibilité IA global
                  qui sert de point de départ pour toute la stratégie.
                </p>
                <p>
                  Le livrable est un rapport complet comprenant la liste des
                  requêtes testées, les résultats par moteur IA, les concurrents
                  identifiés et les requêtes prioritaires sur lesquelles agir en
                  premier. Ce diagnostic est la fondation de tout
                  l&apos;accompagnement : il permet de prioriser les actions et de
                  mesurer les progrès mois après mois.
                </p>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "25+ requêtes stratégiques testées",
                  "3 moteurs IA analysés (ChatGPT, Claude, Gemini)",
                  "Score de visibilité IA calculé",
                  "Concurrents identifiés sur chaque requête",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2 */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan/10">
                <FileText className="size-7 text-cyan" />
              </div>
            </div>
            <div className="lg:col-span-11">
              <p className="text-sm font-semibold text-cyan uppercase tracking-wider">
                Pilier 2
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-navy">
                Contenu optimisé pour les moteurs IA
              </h2>
              <div className="mt-6 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Les moteurs IA ne fonctionnent pas comme Google. Ils ne
                  classent pas des pages web dans une liste de résultats : ils
                  lisent, comprennent et synthétisent le contenu de votre site
                  pour formuler leurs réponses. Cela change complètement la façon
                  dont il faut rédiger. Un texte pensé pour le SEO classique
                  (mots clés répétés, paragraphes génériques) n&apos;est souvent pas
                  exploitable par un moteur IA.
                </p>
                <p>
                  Notre approche : créer du contenu structuré, avec des réponses
                  directes dès les premières lignes, des FAQ détaillées qui
                  couvrent les questions réelles des voyageurs, et des guides
                  complets sur votre destination, vos services et votre
                  positionnement. Chaque page est pensée pour qu&apos;un moteur IA
                  puisse en extraire une recommandation claire et précise.
                </p>
                <p>
                  Nous rédigeons l&apos;intégralité des contenus nécessaires : pages
                  de services, FAQ, guides de destination, descriptions
                  d&apos;expériences. Le ton est professionnel mais accessible, avec
                  un objectif simple : que ChatGPT, Claude ou Gemini puisse
                  citer votre entreprise en toute confiance lorsqu&apos;un utilisateur pose
                  une question pertinente.
                </p>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Réponses directes dès les premières lignes",
                  "FAQ détaillées couvrant les vraies questions",
                  "Guides de destination complets",
                  "Contenu rédigé par nos soins, prêt à publier",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3 */}
      <section className="bg-gray-light py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan/10">
                <Code2 className="size-7 text-cyan" />
              </div>
            </div>
            <div className="lg:col-span-11">
              <p className="text-sm font-semibold text-cyan uppercase tracking-wider">
                Pilier 3
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-navy">
                Balisage technique et structured data
              </h2>
              <div className="mt-6 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Les moteurs IA ne se contentent pas de lire le texte visible
                  sur votre site. Ils analysent aussi le code source, et
                  notamment les données structurées (structured data) qui
                  décrivent votre établissement de manière standardisée. C&apos;est ce
                  balisage invisible qui permet à ChatGPT ou Claude de
                  comprendre instantanément que vous êtes un hôtel 4 étoiles,
                  que vous proposez un restaurant gastronomique, ou que vous
                  acceptez les animaux.
                </p>
                <p>
                  Nous implémentons les schémas Schema.org les plus pertinents
                  pour votre secteur : Hotel (avec tous les attributs clés),
                  Restaurant (si applicable), FAQPage pour vos questions
                  fréquentes, et d&apos;autres schémas selon vos spécificités (Event,
                  Offer, Review). Chaque schéma est vérifié et validé pour
                  garantir une lecture parfaite par les crawlers IA.
                </p>
                <p>
                  Nous déployons également le fichier llms.txt, un standard
                  émergent qui indique aux modèles de langage comment explorer
                  votre site. Enfin, nous vérifions que tous les crawlers IA
                  (GPTBot, Google Extended, ClaudeBot, ClaudeBot) ont bien
                  accès à votre site et ne sont pas bloqués par erreur dans le
                  fichier robots.txt. Ce travail technique, souvent négligé, fait
                  une différence considérable en visibilité IA.
                </p>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Schema.org Hotel, Restaurant, FAQPage",
                  "Fichier llms.txt configuré",
                  "Accès vérifié pour tous les crawlers IA",
                  "Validation et tests des données structurées",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4 */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan/10">
                <Globe className="size-7 text-cyan" />
              </div>
            </div>
            <div className="lg:col-span-11">
              <p className="text-sm font-semibold text-cyan uppercase tracking-wider">
                Pilier 4
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-navy">
                Stratégie de citations et mentions
              </h2>
              <div className="mt-6 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Les moteurs IA s&apos;appuient fortement sur les sources externes
                  pour décider quels établissements recommander. Plus votre entreprise
                  est mentionnée sur des sources fiables et reconnues, plus elle a
                  de chances d&apos;être citée dans une réponse. C&apos;est le principe des
                  citations : chaque mention de votre établissement sur un site tiers
                  agit comme un signal de confiance pour les modèles IA.
                </p>
                <p>
                  Nous travaillons sur plusieurs axes. D&apos;abord, la gestion de vos
                  fiches (listings) sur les plateformes incontournables : Google
                  Business Profile, Foursquare, TripAdvisor, Yelp et les
                  annuaires spécialisés. Chaque fiche est optimisée avec des
                  informations complètes, cohérentes et à jour. Ensuite, nous
                  développons votre présence sur les sources éditoriales : blogs
                  de voyage, guides de destination, articles de presse locale et
                  spécialisée.
                </p>
                <p>
                  L&apos;objectif est de construire un écosystème de mentions qui
                  renforce la crédibilité de votre établissement aux yeux des IA.
                  Nous identifions les sources les plus influentes pour votre
                  marché, optimisons vos profils existants, et mettons en place
                  des actions pour obtenir de nouvelles mentions qualitatives.
                  Chaque citation supplémentaire augmente vos chances
                  d&apos;apparaître dans les recommandations.
                </p>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Fiches Google Business, Foursquare, TripAdvisor",
                  "Profils optimisés et harmonisés",
                  "Mentions presse et blogs de voyage",
                  "Écosystème de citations renforcé",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 5 */}
      <section className="bg-gray-light py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan/10">
                <BarChart3 className="size-7 text-cyan" />
              </div>
            </div>
            <div className="lg:col-span-11">
              <p className="text-sm font-semibold text-cyan uppercase tracking-wider">
                Pilier 5
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-navy">
                Monitoring et reporting mensuel
              </h2>
              <div className="mt-6 space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Le GEO n&apos;est pas une action ponctuelle. Les moteurs IA
                  évoluent en permanence, les concurrents progressent, et les
                  requêtes des utilisateurs changent au fil des saisons. C&apos;est
                  pourquoi nous intégrons un suivi mensuel rigoureux dans notre
                  accompagnement, pour mesurer les progrès et ajuster la
                  stratégie en continu.
                </p>
                <p>
                  Chaque mois, nous relançons les mêmes tests de visibilité sur
                  les 3 moteurs IA (ChatGPT, Claude, Gemini). Nous mesurons
                  l&apos;évolution de votre score, nous comparons vos résultats à
                  ceux de vos concurrents, et nous identifions les nouvelles
                  opportunités. Les requêtes saisonnières (vacances d&apos;été,
                  week-end en amoureux, Noël en famille) sont également intégrées
                  au suivi pour capter les tendances au bon moment.
                </p>
                <p>
                  Vous recevez un rapport clair et lisible, sans jargon
                  technique, qui présente les résultats obtenus, les actions
                  réalisées pendant le mois, et les prochaines étapes. Notre
                  objectif : que vous puissiez constater concrètement la
                  progression de votre visibilité IA et comprendre exactement ce
                  qui a été fait et ce qui reste à faire.
                </p>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Tests mensuels sur ChatGPT, Claude, Gemini",
                  "Évolution du score de visibilité IA",
                  "Comparaison concurrentielle actualisée",
                  "Rapport clair avec résultats et prochaines actions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs d'expertise */}
      <section className="bg-[#F8F9FA] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="text-center">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-navy">
              Nos secteurs d&apos;expertise
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-[15px] text-[#6B7280]">
              Notre méthode GEO s&apos;adapte à chaque secteur. Voici les
              domaines dans lesquels nous accompagnons nos clients.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Building2,
                title: "Hôtellerie",
                description:
                  "Notre c\u0153ur de métier. Hôtels indépendants, boutique hôtels, resorts, résidences hôtelières. Nous connaissons les enjeux OTA, les commissions Booking et le parcours du voyageur.",
              },
              {
                icon: UtensilsCrossed,
                title: "Restauration",
                description:
                  "Restaurants gastronomiques, bistrots, brasseries, traiteurs. Apparaître quand un client demande à ChatGPT « meilleur restaurant à [ville] ».",
              },
              {
                icon: Briefcase,
                title: "Logement corporate",
                description:
                  "Résidences de services, appartements meublés, corporate housing. Capter les DRH et services mobilité qui cherchent des solutions sur les IA.",
              },
              {
                icon: Store,
                title: "Commerces et services",
                description:
                  "Boutiques, salons, centres de bien\u2011être, prestataires B2B. Chaque commerce local peut bénéficier du GEO.",
              },
              {
                icon: Compass,
                title: "Tourisme et loisirs",
                description:
                  "Offices de tourisme, activités, parcs, musées. Devenir la recommandation n°1 des IA pour les voyageurs.",
              },
              {
                icon: Rocket,
                title: "PME et startups",
                description:
                  "Toute entreprise qui veut être citée par les moteurs IA dans son secteur. Nous adaptons notre méthode à chaque métier.",
              },
            ].map((sector) => (
              <div
                key={sector.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-cyan/10">
                  <sector.icon className="size-6 text-cyan" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold text-white">
            Prêt à rendre votre entreprise visible sur les moteurs IA ?
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-white/70">
            Découvrez comment notre méthode en 5 piliers s&apos;applique
            concrètement à votre secteur, avec des résultats mesurables dès le
            premier mois.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="bg-cyan hover:bg-cyan-dark text-white font-semibold px-7 py-3 h-11 rounded-full text-[15px]">
                Demander un audit gratuit
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
