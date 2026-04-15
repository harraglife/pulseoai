import type { Metadata } from "next";
import Link from "next/link";
import {
  Hotel,
  Search,
  BarChart3,
  Globe,
  FileText,
  MapPin,
  MessageSquare,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  Target,
  Sparkles,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "GEO pour l'hôtellerie : apparaître sur ChatGPT",
  description:
    "Pourquoi les hôtels doivent investir dans le GEO. Réduisez votre dépendance à Booking, gagnez des réservations directes via les IA.",
  openGraph: {
    title: "GEO pour l'hôtellerie : apparaître sur ChatGPT",
    description:
      "Pourquoi les hôtels doivent investir dans le GEO. Réduisez votre dépendance à Booking, gagnez des réservations directes via les IA.",
    url: "https://www.pulseoai.fr/geo-hotellerie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO pour l'hôtellerie : apparaître sur ChatGPT",
    description: "Pourquoi les hôtels doivent investir dans le GEO. Réduisez votre dépendance à Booking via les IA.",
  },
};

const jsonLd = {
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
      name: "GEO Hôtellerie",
      item: "https://www.pulseoai.fr/geo-hotellerie",
    },
  ],
};

const stats = [
  {
    value: "2,8 Mds",
    label: "d'utilisateurs ChatGPT par mois",
    icon: Globe,
  },
  {
    value: "25%",
    label: "des recherches Google affichent des AI Overviews",
    icon: Search,
  },
  {
    value: "+527%",
    label: "de trafic IA en un an",
    icon: TrendingUp,
  },
  {
    value: "65%",
    label: "des recherches se terminent sans clic",
    icon: BarChart3,
  },
  {
    value: "13 sem.",
    label: "50% du contenu cité par les IA a moins de 13 semaines",
    icon: Clock,
  },
];

const pillars = [
  {
    icon: MapPin,
    title: "Optimisation Google Business Profile",
    description:
      "Nous optimisons votre fiche Google Business pour que Gemini vous recommande. Chaque attribut compte : catégories, description, photos géolocalisées, avis clients récents. Les moteurs IA comme Gemini puisent directement dans Google Maps pour formuler leurs recommandations locales. Une fiche incomplète ou mal renseignée, c'est une occasion manquée de figurer dans la réponse.",
  },
  {
    icon: FileText,
    title: "Rédaction de FAQ structurées",
    description:
      "Nous rédigeons des FAQ que ChatGPT peut reprendre mot pour mot. Questions fréquentes des voyageurs (parking, spa, restaurant, animaux acceptés, annulation), réponses claires au format que les IA adorent citer. Chaque question est balisée en schema.org FAQPage pour maximiser les chances d'extraction automatique par les modèles de langage.",
  },
  {
    icon: Globe,
    title: "Inscription sur Foursquare et sources IA",
    description:
      "Nous vous inscrivons sur Foursquare, la source n°1 de ChatGPT pour les recommandations locales. Foursquare alimente directement les réponses de ChatGPT lorsqu'un utilisateur demande un hôtel dans une ville précise. Nous complétons aussi vos profils sur Apple Maps, Bing Places et les annuaires sectoriels qui servent de base de données aux IA.",
  },
  {
    icon: MessageSquare,
    title: "Création de contenu ciblé IA",
    description:
      "Nous produisons des articles, guides et pages thématiques formulés pour être repris par les moteurs génératifs. « Meilleur hôtel avec piscine à Nantes », « Où dormir près de la gare à Lyon » : chaque contenu cible une requête conversationnelle précise. Le style est factuel, structuré, et conçu pour que les IA le citent comme source fiable.",
  },
  {
    icon: Award,
    title: "Stratégie de mentions et autorité",
    description:
      "Nous travaillons votre présence sur les sites que les IA considèrent comme des sources de confiance : médias touristiques, blogs voyage à forte autorité, comparateurs indépendants. Plus votre hôtel est mentionné de façon cohérente sur ces plateformes, plus les modèles de langage le considèrent comme pertinent et digne d'être recommandé.",
  },
];

const timeline = [
  {
    month: "Mois 1",
    title: "Socle technique posé",
    description:
      "Audit complet de votre présence IA, score de visibilité initial (souvent 0), correction des fiches Google Business, Foursquare, Bing Places. Mise en place du balisage schema.org sur votre site.",
    status: "Score 0 vers les fondations",
  },
  {
    month: "Mois 2",
    title: "Premiers contenus publiés",
    description:
      "Rédaction et publication des FAQ structurées, pages thématiques ciblant les requêtes conversationnelles, optimisation des descriptions sur les annuaires et sources IA.",
    status: "Contenu optimisé IA en ligne",
  },
  {
    month: "Mois 3",
    title: "Premières mentions IA",
    description:
      "Votre hôtel commence à apparaître dans les réponses de ChatGPT, Claude ou Gemini sur des requêtes ciblées. Les premières citations vérifiables arrivent.",
    status: "Visibilité IA confirmée",
  },
  {
    month: "Mois 6",
    title: "Top 3 du secteur",
    description:
      "50%+ des requêtes cibles couvertes, position consolidée dans le top 3 des recommandations IA de votre zone géographique. Réservations directes en hausse mesurable.",
    status: "Objectif atteint",
  },
];

export default function GeoHotelleriePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-navy/60">
              <li>
                <Link href="/" className="hover:text-cyan transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="font-medium text-navy">GEO Hôtellerie</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-block mb-4 rounded-full bg-cyan/10 px-4 py-1.5 text-sm font-semibold text-cyan">
              GEO pour l&apos;hôtellerie
            </span>
            <h1 className="text-[26px] font-bold tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              Faites recommander votre hôtel{" "}
              <span className="text-cyan">par les IA</span>
            </h1>
            <p className="mt-6 text-[15px] text-[#6B7280] sm:text-xl max-w-[680px] leading-relaxed">
              ChatGPT, Claude, Gemini : vos futurs clients posent leurs
              questions aux intelligences artificielles. Si votre hôtel
              n&apos;apparaît pas dans la réponse, c&apos;est un concurrent qui
              empoche la réservation. Le GEO (Generative Engine Optimization)
              change la donne.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-cyan hover:bg-cyan-dark text-white font-semibold px-7 py-3 rounded-full text-[15px] h-12 sm:h-11">
                  Tester mon hôtel gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#probleme" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto font-semibold px-7 py-3 rounded-full text-[15px] h-12 sm:h-11 border-navy/20 text-navy hover:bg-navy/5"
                >
                  Comprendre le GEO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Le problème des hôteliers */}
      <section id="probleme" className="bg-[#F8F9FA] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              Le problème des hôteliers
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Une dépendance coûteuse aux OTAs, et un nouveau canal qui vous
              échappe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-red-50 p-3">
                    <Hotel className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">
                      Les commissions OTA étouffent vos marges
                    </h3>
                    <p className="mt-2 text-navy/70 leading-relaxed">
                      Booking.com, Expedia, Hotels.com : ces plateformes
                      prélèvent entre 15% et 25% de commission sur chaque
                      réservation. Pour un hôtel indépendant, cela représente
                      des dizaines de milliers d&apos;euros par an qui partent
                      en intermédiaires. Chaque hôtelier le sait : la priorité
                      absolue, c&apos;est augmenter la part de réservations
                      directes. Pourtant, la plupart des stratégies classiques
                      (SEO, Google Ads, réseaux sociaux) deviennent de plus en
                      plus coûteuses et concurrentielles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-amber-50 p-3">
                    <Search className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">
                      Les voyageurs changent de comportement
                    </h3>
                    <p className="mt-2 text-navy/70 leading-relaxed">
                      Aujourd&apos;hui, un nombre croissant de voyageurs ne
                      tapent plus « hôtel spa Bordeaux » dans Google. Ils
                      ouvrent ChatGPT, Claude ou l&apos;assistant Gemini et
                      posent directement leur question : « Quel est le meilleur
                      hôtel avec spa à Bordeaux ? » L&apos;IA répond
                      instantanément avec trois ou quatre recommandations
                      précises. Le voyageur clique, réserve. Terminé.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-cyan/10 p-3">
                    <MessageSquare className="h-6 w-6 text-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">
                      Si vous n&apos;êtes pas dans la réponse, vous
                      n&apos;existez pas
                    </h3>
                    <p className="mt-2 text-navy/70 leading-relaxed">
                      Contrairement à Google où dix résultats s&apos;affichent,
                      une IA générative ne propose que trois ou quatre options.
                      Il n&apos;y a pas de « page 2 ». Si votre hôtel
                      n&apos;apparaît pas, le voyageur ne saura même pas que
                      vous existez. Il réservera chez un concurrent, directement,
                      sans jamais avoir visité votre site. Le plus inquiétant :
                      cette tendance s&apos;accélère chaque mois. Ignorer ce
                      canal revient à laisser vos concurrents capter une part
                      croissante de la demande sans que vous puissiez réagir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-navy p-8 text-white">
                <p className="text-lg font-semibold">
                  Le constat est simple
                </p>
                <p className="mt-2 text-white/80 leading-relaxed">
                  Les OTAs prennent vos marges. Les IA redistribuent les cartes.
                  Les hôtels qui investissent maintenant dans le GEO captent un
                  flux de réservations directes que leurs concurrents ne voient
                  même pas arriver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Le GEO, c'est quoi concrètement ? */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              Le GEO, c&apos;est quoi concrètement ?
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Le Generative Engine Optimization consiste à structurer votre
              présence en ligne pour que les IA vous recommandent en priorité.
              Voici un exemple concret.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="rounded-2xl border-2 border-red-200 bg-red-50/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-red-100 p-2">
                  <XCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-navy">Avant le GEO</h3>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-200">
                <p className="text-sm text-navy/50 mb-2 font-medium">
                  Question posée à ChatGPT :
                </p>
                <p className="text-navy font-medium italic mb-4">
                  « Quel est le meilleur hôtel avec spa à Nantes ? »
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-navy">
                        Hôtel Concurrent A
                      </p>
                      <p className="text-sm text-navy/60">
                        Mentionné sur Foursquare, avis récents, fiche complète
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-navy">
                        Hôtel Concurrent B
                      </p>
                      <p className="text-sm text-navy/60">
                        Article blog repris, FAQ structurée
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-navy">
                        Hôtel Concurrent C
                      </p>
                      <p className="text-sm text-navy/60">
                        Cité par des médias touristiques
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600 font-medium">
                      Votre hôtel n&apos;apparaît nulle part dans la réponse.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="rounded-2xl border-2 border-cyan/30 bg-cyan/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-cyan/10 p-2">
                  <CheckCircle2 className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-bold text-navy">Après le GEO</h3>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-200">
                <p className="text-sm text-navy/50 mb-2 font-medium">
                  Même question posée à ChatGPT :
                </p>
                <p className="text-navy font-medium italic mb-4">
                  « Quel est le meilleur hôtel avec spa à Nantes ? »
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan/20 text-cyan text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-cyan">
                        Votre Hôtel
                      </p>
                      <p className="text-sm text-navy/60">
                        Recommandé en première position avec lien direct
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-navy">
                        Hôtel Concurrent A
                      </p>
                      <p className="text-sm text-navy/60">
                        Toujours présent, mais en seconde position
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-navy">
                        Hôtel Concurrent B
                      </p>
                      <p className="text-sm text-navy/60">
                        Relégué en troisième place
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-cyan/5 border border-cyan/20">
                    <p className="text-sm text-cyan font-medium">
                      Le voyageur clique, réserve en direct sur votre site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-[680px] mx-auto text-center">
            <p className="text-[#6B7280] leading-relaxed text-[15px]">
              Le GEO ne remplace pas le SEO : il le complète. Le SEO vous
              positionne sur Google. Le GEO vous positionne dans les réponses
              générées par ChatGPT, Claude, Gemini et Copilot. Aujourd&apos;hui,
              ces deux canaux coexistent. Demain, la recherche conversationnelle
              sera dominante. Les hôtels qui agissent maintenant prennent une
              avance considérable.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Les chiffres qui comptent */}
      <section className="bg-[#F8F9FA] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              Les chiffres qui comptent
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              La recherche IA n&apos;est pas une tendance lointaine. Elle
              transforme déjà la façon dont les voyageurs trouvent et réservent
              leur hôtel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center ${
                    index >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                  } ${index === 3 ? "lg:col-start-1" : ""} ${
                    index === 4 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-cyan" />
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">{stat.value}</p>
                  <p className="mt-2 text-navy/70 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-navy/50">
              Sources : Similarweb, SparkToro, Ahrefs, BrightEdge, données
              publiques 2024/2025
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Ce que nous faisons pour votre hôtel */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              Ce que nous faisons pour votre h&ocirc;tel
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Cinq piliers concrets pour transformer votre visibilité sur les
              moteurs IA. Chaque action est pensée spécifiquement pour
              l&apos;hôtellerie.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#F8F9FA] p-8 border border-gray-100"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-cyan" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-cyan">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-bold text-navy">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-navy/70 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Résultats typiques */}
      <section className="bg-[#F8F9FA] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              Résultats typiques
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Un accompagnement progressif sur 6 mois, avec des résultats
              mesurables à chaque étape.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-cyan/20" />

              <div className="space-y-8">
                {timeline.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                          index === timeline.length - 1
                            ? "bg-cyan text-white"
                            : "bg-white border-2 border-cyan text-cyan"
                        }`}
                      >
                        {step.month.replace("Mois ", "M")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-lg font-bold text-navy">
                          {step.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                            index === timeline.length - 1
                              ? "bg-cyan/10 text-cyan"
                              : "bg-navy/5 text-navy/70"
                          }`}
                        >
                          {index === timeline.length - 1 && (
                            <Sparkles className="h-3 w-3" />
                          )}
                          {index < timeline.length - 1 && (
                            <Target className="h-3 w-3" />
                          )}
                          {step.status}
                        </span>
                      </div>
                      <p className="text-navy/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-[680px] rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Le GEO ne concerne pas que l&apos;h&ocirc;tellerie
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#6B7280]">
              Nous accompagnons aussi les restaurants, commerces, services et PME. D&eacute;couvrez notre offre compl&egrave;te.
            </p>
            <div className="mt-6">
              <Link href="/offre">
                <Button className="rounded-full bg-cyan px-8 text-white hover:bg-cyan-dark font-semibold">
                  D&eacute;couvrir notre offre compl&egrave;te
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Final */}
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="text-[22px] font-bold text-white sm:text-[28px] lg:text-[34px]">
              Faites tester votre hôtel{" "}
              <span className="text-cyan">gratuitement</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              En 48h, nous analysons votre visibilité sur ChatGPT, Claude et
              Gemini. Vous recevez un rapport clair avec votre score actuel, les
              requêtes sur lesquelles vous êtes absent, et un plan d&apos;action
              concret pour apparaître dans les recommandations IA.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-cyan hover:bg-cyan-dark text-white font-semibold px-7 py-4 rounded-full text-[15px] h-11">
                  Demander mon audit GEO gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Sans engagement. Résultats sous 48h.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
