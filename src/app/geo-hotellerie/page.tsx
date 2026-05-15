import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileText,
  Globe,
  Hotel,
  MessageSquare,
  Search,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GEO pour l’hôtellerie | PulseoAI",
  description:
    "GEO pour l’hôtellerie : rendez votre hôtel visible sur ChatGPT, Gemini et Google AI Overviews. Audit de visibilité IA, contenu optimisé et balisage Schema.org hôtelier.",
  openGraph: {
    title: "GEO pour l’hôtellerie | PulseoAI",
    description:
      "GEO pour l’hôtellerie : rendez votre hôtel visible sur ChatGPT, Gemini et Google AI Overviews. Audit de visibilité IA, contenu optimisé et balisage Schema.org hôtelier.",
    url: "https://www.pulseoai.fr/geo-hotellerie",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – GEO Hôtellerie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO pour l’hôtellerie | PulseoAI",
    description:
      "GEO pour l’hôtellerie : rendez votre hôtel visible sur ChatGPT, Gemini et Google AI Overviews. Audit de visibilité IA, contenu optimisé et balisage Schema.org hôtelier.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/geo-hotellerie" },
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le GEO remplace-t-il le SEO hôtelier ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Le GEO complète le SEO. Le SEO travaille votre visibilité sur Google, tandis que le GEO aide votre hôtel à être compris, cité et recommandé dans les réponses IA. PulseoAI travaille les deux ensemble.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi un hôtel doit-il apparaître dans ChatGPT ou Gemini ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parce que de plus en plus de voyageurs posent directement leurs questions aux IA pour comparer des hôtels, choisir un séjour ou préparer une réservation. Être recommandé par ChatGPT, Gemini ou Claude devient un nouveau levier de visibilité hôtelière.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce utile pour un hôtel indépendant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les hôtels indépendants peuvent se différencier en travaillant leurs contenus, leurs sources, leurs avis, leur Google Business Profile et leur présence locale.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que cela aide les réservations directes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L’objectif est de mieux orienter la demande vers votre site officiel, en rendant votre hôtel plus visible et plus crédible sur les requêtes à forte intention. C’est un levier concret pour réduire la dépendance Booking et Expedia.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour voir des résultats ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les premiers signaux peuvent apparaître en quelques semaines, mais le GEO se travaille surtout sur plusieurs mois, avec un suivi régulier des requêtes voyageurs, des sources citées et des citations IA.",
      },
    },
    {
      "@type": "Question",
      name: "Qu’analyse l’audit hôtel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous analysons vos requêtes voyageurs, votre présence dans les réponses IA, vos concurrents cités, vos sources utilisées, votre visibilité Google et vos priorités d’action.",
      },
    },
  ],
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
      {children}
    </span>
  );
}

function Proof({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-navy/58">
      <span className="size-1.5 rounded-full bg-cyan" />
      {label}
    </span>
  );
}

function MiniCard({
  icon: Icon,
  title,
  text,
  dark = false,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[22px] border p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)] ${
        dark
          ? "border-[#18254A] bg-[linear-gradient(180deg,#0F1730_0%,#152247_100%)] text-white"
          : "border-[#DEE6F3] bg-white text-navy"
      }`}
    >
      <div className={`flex size-10 items-center justify-center rounded-[16px] ${dark ? "bg-white/10" : "bg-[#EEF3FF]"}`}>
        <Icon className={`size-4.5 ${dark ? "text-white" : "text-cyan"}`} />
      </div>
      <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em]">{title}</h3>
      <p className={`mt-2 text-[14px] leading-6 ${dark ? "text-white/72" : "text-navy/62"}`}>{text}</p>
    </div>
  );
}

function PillarCard({
  icon: Icon,
  title,
  text,
  points,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
  points: string[];
}) {
  return (
    <div className="rounded-[24px] border border-[#DEE6F3] bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
      <div className="flex size-10 items-center justify-center rounded-[16px] bg-[#EEF3FF]">
        <Icon className="size-4.5 text-cyan" />
      </div>
      <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.03em] text-navy">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-navy/62">{text}</p>
      <ul className="mt-4 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-[13px] text-navy/76">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QueryCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[22px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_26px_rgba(15,23,42,0.04)]">
      <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#E4EAF5] bg-[#FBFCFF] px-3 py-1.5 text-[12px] font-medium text-navy/68"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Deliverable({ title }: { title: string }) {
  return (
    <div className="rounded-[18px] border border-[#E4EAF5] bg-[#FBFCFF] px-4 py-3 text-[14px] font-medium text-navy/76">
      {title}
    </div>
  );
}

function ResultCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[22px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-navy/62">{text}</p>
    </div>
  );
}

function TimelineStep({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <span className="inline-flex items-center rounded-full border border-[#D8E3FA] bg-[#F5F8FF] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">
        {step}
      </span>
      <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-navy/62">{text}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-[20px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-navy">{question}</h3>
      <p className="mt-2 text-[14px] leading-6 text-navy/62">{answer}</p>
    </div>
  );
}

export default function GeoHotelleriePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-[#E8EDF7] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFD_100%)]">
        <div className="mx-auto max-w-[1180px] px-6 pb-10 pt-7 lg:pb-14 lg:pt-10">
          <nav aria-label="Fil d'Ariane">
            <ol className="flex items-center gap-2 text-sm text-navy/58">
              <li>
                <Link href="/" className="transition-colors hover:text-cyan">
                  Accueil
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="font-medium text-navy">GEO Hôtellerie</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:gap-12">
            <div className="max-w-[640px]">
              <Eyebrow>GEO POUR L’HÔTELLERIE</Eyebrow>
              <h1 className="mt-5 text-[30px] font-semibold leading-[1.04] tracking-[-0.05em] text-navy sm:text-[48px]">
                Faites recommander <span className="text-cyan">votre hôtel</span> par Google et les <span className="text-cyan">moteurs IA</span>.
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-navy/62">
                PulseoAI aide les hôtels à gagner en visibilité sur Google et dans les moteurs IA comme ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, qui influencent déjà la façon dont les voyageurs découvrent, comparent et choisissent un hôtel.
              </p>
              <p className="mt-4 text-[16px] font-medium leading-7 text-navy">
                Si votre établissement n’apparaît pas dans la réponse, un concurrent peut capter la demande avant même que le voyageur visite votre site officiel ou votre moteur de réservation directe.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-cyan px-6 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.22)] hover:bg-cyan-dark sm:w-auto">
                    Obtenir un audit hôtel
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="#definition" className="inline-flex items-center justify-center text-[15px] font-semibold text-navy/68 transition-colors hover:text-navy">
                  Comprendre le GEO hôtelier
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Proof label="Google + IA" />
                <Proof label="Réservations directes" />
                <Proof label="Sources citées" />
                <Proof label="Suivi mensuel" />
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#DEE6F3] bg-white shadow-[0_22px_52px_rgba(15,23,42,0.06)]">
              <div className="flex h-11 items-center justify-between border-b border-[#E5EBF5] bg-[#11182C] px-5">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-[#FF5F57]" />
                  <span className="size-3 rounded-full bg-[#FEBC2E]" />
                  <span className="size-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Réponse IA
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="rounded-[22px] border border-[#E4EAF5] bg-[#FAFCFF] p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">Question</p>
                  <p className="mt-2 text-[16px] font-medium text-navy">Quel est le meilleur hôtel avec spa à Nantes ?</p>
                </div>

                <div className="mt-4 rounded-[24px] border border-[#E4EAF5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFE_100%)] p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">Réponse</p>
                  <p className="mt-3 text-[15px] leading-7 text-navy/76">
                    Je recommande d’abord <span className="font-semibold text-cyan">l’Hôtel Rivage Atlantique</span>, souvent cité pour son spa, sa localisation et ses avis clients récents. <span className="font-semibold text-cyan">Maison Orvault</span> est également mentionné pour ses séjours bien-être et son accès rapide au centre-ville.
                  </p>
                </div>

                <div className="mt-5 rounded-[18px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#EEF4FF_0%,#F8FAFF_100%)] px-4 py-3">
                  <p className="text-[14px] font-semibold text-navy">Votre hôtel : <span className="text-cyan">non cité</span></p>
                </div>

                <div className="mt-5 rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-4">
                  <p className="text-[13px] leading-6 text-navy/58">
                    Le voyageur choisit parmi les hôtels que l’IA lui présente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>LE PROBLÈME</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Les voyageurs changent. Vos canaux d’acquisition aussi.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Booking, Expedia et Google restent importants. Mais une nouvelle étape apparaît avant la réservation : la recommandation par les IA. C’est précisément là qu’une agence SEO hôtel et une agence GEO hôtellerie deviennent utiles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MiniCard
              icon={Hotel}
              title="Les OTA compressent vos marges"
              text="Booking, Expedia et les plateformes de réservation captent une part importante de la demande. Chaque réservation directe gagnée améliore votre rentabilité et réduit votre dépendance OTA."
            />
            <MiniCard
              icon={Bot}
              title="Les IA filtrent les options"
              text="Une réponse IA ne liste pas dix hôtels. Elle recommande quelques établissements. Si vous n’êtes pas cité dans ChatGPT, Gemini ou Google AI Overviews, vous êtes invisible."
            />
            <MiniCard
              icon={Search}
              title="Les voyageurs posent des requêtes précises"
              text="Meilleur hôtel avec spa à Nantes, hôtel pour séminaire à Lyon, hôtel familial proche plage en Bretagne : les recherches deviennent conversationnelles."
            />
            <MiniCard
              icon={Sparkles}
              title="Le constat est simple"
              text="Les OTA prennent vos marges. Les IA redistribuent l’attention. Les hôtels qui investissent maintenant dans le SEO / GEO prennent une avance durable."
              dark
            />
          </div>
        </div>
      </section>

      <section id="definition" className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[820px]">
            <Eyebrow>DÉFINITION</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Le GEO hôtelier consiste à rendre votre établissement compréhensible et recommandable par les IA.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Le Generative Engine Optimization appliqué à l’hôtellerie consiste à structurer votre présence en ligne pour que les moteurs IA comprennent votre hôtel, ses services, sa localisation, ses preuves de confiance et les raisons de le recommander. Pour PulseoAI, cela signifie travailler ensemble le référencement IA hôtelier, la visibilité Google hôtel et les signaux qui rendent un établissement recommandable.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[24px] border border-[#E4EAF5] bg-[#FBFCFF] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">Avant GEO</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "votre hôtel n’est pas cité",
                  "les concurrents apparaissent",
                  "les IA s’appuient sur des sources incomplètes",
                  "la réservation part ailleurs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-navy/76">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-navy/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#F5F8FF_0%,#FBFCFF_100%)] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">Après GEO</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "votre hôtel est mieux compris",
                  "vos sources sont renforcées",
                  "vos contenus répondent aux vraies questions voyageurs",
                  "votre visibilité est suivie chaque mois",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-navy/76">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">Mini exemple</p>
            <div className="mt-4 grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <p className="text-[14px] font-semibold text-navy">Question</p>
                <p className="mt-2 text-[15px] leading-7 text-navy/68">Quel hôtel choisir pour un week-end spa à Nantes ?</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-3">
                  <p className="text-[13px] font-semibold text-navy">Avant</p>
                  <p className="mt-2 text-[13px] leading-6 text-navy/58">Les réponses citent trois concurrents.</p>
                </div>
                <div className="rounded-[18px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#EEF4FF_0%,#F8FAFF_100%)] px-4 py-3">
                  <p className="text-[13px] font-semibold text-cyan">Après</p>
                  <p className="mt-2 text-[13px] leading-6 text-navy/58">Votre hôtel apparaît avec ses services, ses avis, sa localisation et un lien vers votre site.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>MÉTHODE</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Cinq leviers pour faire progresser votre visibilité hôtel sur Google et les IA.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <PillarCard
              icon={Search}
              title="Audit de visibilité hôtel"
              text="Nous testons les requêtes que vos voyageurs posent sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews pour construire un audit SEO / GEO hôtel exploitable."
              points={[
                "requêtes spa, séminaire, famille, business, localisation",
                "concurrents cités",
                "présence ou absence de votre hôtel",
                "score de visibilité initial",
              ]}
            />
            <PillarCard
              icon={FileText}
              title="Pages et contenus orientés voyageurs"
              text="Nous créons ou optimisons les pages qui répondent aux vraies intentions : séjour bien-être, week-end romantique, séminaire, parking, restaurant, animaux acceptés, proximité gare ou plage, pour renforcer à la fois le SEO hôtelier et le référencement ChatGPT hôtel."
              points={["pages services", "FAQ hôtel", "guides de destination", "contenus locaux", "réponses directes"]}
            />
            <PillarCard
              icon={Compass}
              title="Clarté de l’offre et maillage interne"
              text="Nous rendons votre site plus lisible pour Google, les IA et les voyageurs, en clarifiant vos services, vos avantages, votre localisation et vos preuves."
              points={[
                "proposition de valeur claire",
                "pages mieux structurées",
                "maillage entre services",
                "parcours vers la réservation directe",
              ]}
            />
            <PillarCard
              icon={Globe}
              title="Sources et citations hôtelières"
              text="Nous renforçons les sources citées par les IA pour recommander un hôtel : Google Business Profile, avis clients, annuaires, plateformes touristiques, contenus externes et mentions de marque."
              points={["Google Business Profile", "TripAdvisor", "Foursquare", "annuaires tourisme", "avis clients", "presse locale"]}
            />
            <PillarCard
              icon={BarChart3}
              title="Monitoring mensuel"
              text="Chaque mois, nous suivons vos requêtes, vos citations IA, vos concurrents, vos sources et l’évolution de votre visibilité SEO / GEO pour l’hôtellerie."
              points={["score mensuel", "requêtes gagnées", "concurrents cités", "prochaines actions"]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>PROMPTS VOYAGEURS</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Nous testons les questions que vos futurs clients posent vraiment.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <QueryCard
              title="Spa & bien-être"
              items={[
                "meilleur hôtel avec spa à Nantes",
                "hôtel avec hammam et piscine intérieure",
                "week-end bien-être proche de la mer",
              ]}
            />
            <QueryCard
              title="Séminaire & business"
              items={[
                "hôtel pour séminaire à Lyon",
                "hôtel business avec parking à Paris",
                "hôtel avec salle de réunion et restaurant",
              ]}
            />
            <QueryCard
              title="Famille & loisirs"
              items={[
                "hôtel familial proche plage en Bretagne",
                "hôtel avec chambres communicantes",
                "hôtel pour week-end en famille",
              ]}
            />
            <QueryCard
              title="Localisation"
              items={[
                "hôtel proche gare à Nantes",
                "hôtel centre-ville avec parking",
                "où dormir près de [lieu touristique]",
              ]}
            />
            <QueryCard
              title="Haut de gamme"
              items={[
                "meilleur hôtel 4 étoiles avec spa",
                "boutique hôtel romantique",
                "hôtel premium pour week-end",
              ]}
            />
            <QueryCard
              title="Réservation directe"
              items={[
                "hôtel avec meilleur prix en direct",
                "hôtel à réserver sans Booking",
                "hôtel avec offres sur site officiel",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:gap-10">
            <div className="max-w-[520px]">
              <Eyebrow>LIVRABLES</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
                Un reporting hôtelier clair, orienté réservations.
              </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Vous ne recevez pas un rapport illisible. Vous voyez les requêtes où votre hôtel apparaît, les concurrents qui prennent la place, les sources utilisées par les IA, les citations IA gagnées et les actions prioritaires pour progresser.
            </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Rapport de visibilité hôtel",
                  "Liste des prompts voyageurs",
                  "Comparaison avec concurrents locaux",
                  "Sources citées par les IA",
                  "Actions réalisées",
                  "Roadmap du mois suivant",
                ].map((item) => (
                  <Deliverable key={item} title={item} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#DEE6F3] bg-white shadow-[0_20px_46px_rgba(15,23,42,0.06)]">
              <div className="flex h-11 items-center bg-[#11182C] px-5">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-[#FF5F57]" />
                  <span className="size-3 rounded-full bg-[#FEBC2E]" />
                  <span className="size-3 rounded-full bg-[#28C840]" />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "64/100", label: "Score de visibilité hôtel", tone: "bg-[#EDF3FF] text-cyan" },
                    { value: "18", label: "Requêtes couvertes", tone: "bg-[#F5F8FF] text-[#2341A5]" },
                    { value: "12", label: "Sources actives", tone: "bg-[#F8FAFF] text-navy" },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-[22px] px-4 py-4 text-center ${item.tone}`}>
                      <p className="text-[32px] font-semibold tracking-[-0.05em]">{item.value}</p>
                      <p className="mt-1 text-[13px] font-medium text-navy/66">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">Concurrents cités</p>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { name: "Hôtel Rivage Atlantique", rank: "#1", active: false },
                        { name: "Maison Orvault", rank: "#2", active: false },
                        { name: "Votre hôtel", rank: "#3", active: true },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className={`flex items-center justify-between rounded-[16px] border px-4 py-3 ${
                            item.active ? "border-[#C9D7FA] bg-[linear-gradient(180deg,#EEF3FF_0%,#E9F1FF_100%)]" : "border-[#E6ECF6] bg-[#FBFCFE]"
                          }`}
                        >
                          <span className={`text-[14px] font-semibold ${item.active ? "text-navy" : "text-navy/72"}`}>{item.name}</span>
                          <span className={`text-[13px] font-semibold ${item.active ? "text-cyan" : "text-navy/56"}`}>{item.rank}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">Tendance mensuelle</p>
                    <div className="mt-3 rounded-[20px] border border-[#E6ECF6] bg-[#FBFCFE] p-4">
                      <div className="flex h-[96px] items-end gap-2">
                        {[24, 31, 37, 44, 49, 58, 66, 72].map((value) => (
                          <div
                            key={value}
                            className="flex-1 rounded-t-[10px] bg-[linear-gradient(180deg,#A884FF_0%,#6F88FF_55%,#4E71FF_100%)]"
                            style={{ height: `${value}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-4 text-[13px] leading-6 text-navy/58">
                  Vous voyez immédiatement vos requêtes voyageurs, les concurrents locaux cités, les sources actives et les actions prioritaires à mettre en place.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>RÉSULTATS</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Ce que le SEO / GEO peut changer pour un hôtel.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ResultCard
              title="Plus de visibilité qualifiée"
              text="Votre hôtel apparaît sur davantage de requêtes à forte intention sur Google et dans les moteurs IA."
            />
            <ResultCard
              title="Moins de dépendance aux OTA"
              text="Plus les voyageurs trouvent votre site officiel, plus vous pouvez développer la réservation directe."
            />
            <ResultCard
              title="Plus de confiance"
              text="Les IA s’appuient sur vos sources, vos avis clients hôtel et vos contenus pour vous recommander."
            />
            <ResultCard
              title="Meilleure lecture concurrentielle"
              text="Vous savez quels hôtels sont cités, sur quelles requêtes et pourquoi."
            />
          </div>

          <div className="mt-6 rounded-[22px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#F5F8FF_0%,#FBFCFF_100%)] px-5 py-4 text-[14px] leading-7 text-navy/62">
            Les résultats dépendent de votre situation de départ, de votre marché, de vos concurrents et de la régularité du travail effectué.
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>SEO + GEO</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Le GEO ne remplace pas le SEO hôtelier. Il le prolonge.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Le SEO aide votre hôtel à être trouvé sur Google. Le GEO aide votre hôtel à être cité dans les réponses générées par les IA. Les deux canaux se renforcent : un site clair, utile, bien structuré et cité par des sources fiables a plus de chances d’être compris par Google, Google AI Overviews et les moteurs IA comme ChatGPT, Gemini, Claude ou Perplexity.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[24px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">SEO hôtelier</p>
              <ul className="mt-4 space-y-2.5">
                {["visibilité Google", "pages services", "destination", "maillage interne", "réservation directe"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-navy/76">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#F5F8FF_0%,#FBFCFF_100%)] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">GEO hôtelier</p>
              <ul className="mt-4 space-y-2.5">
                {["prompts voyageurs", "citations IA", "sources utilisées", "concurrents recommandés", "visibilité ChatGPT / Gemini / Claude / Perplexity"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-navy/76">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] border border-[#E4EAF5] bg-[#FBFCFE] px-5 py-4 text-[15px] font-medium text-navy">
              SEO = votre hôtel est trouvé.
            </div>
            <div className="rounded-[20px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#EEF4FF_0%,#F8FAFF_100%)] px-5 py-4 text-[15px] font-medium text-navy">
              GEO = votre hôtel est recommandé.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>ACCOMPAGNEMENT</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Un accompagnement pensé pour les hôteliers.
            </h2>
          </div>

          <div className="relative mt-8">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(37,71,208,0.14),rgba(37,71,208,0.03),rgba(37,71,208,0.14))] lg:block" />
            <div className="grid gap-4 lg:grid-cols-4">
              <TimelineStep
                step="Étape 1"
                title="Audit initial"
                text="Nous testons votre hôtel sur les requêtes voyageurs prioritaires."
              />
              <TimelineStep
                step="Étape 2"
                title="Plan d’action"
                text="Nous identifions les pages, sources et contenus à corriger ou créer."
              />
              <TimelineStep
                step="Étape 3"
                title="Mise en place"
                text="Nous optimisons votre présence pour Google et les moteurs IA."
              />
              <TimelineStep
                step="Étape 4"
                title="Suivi mensuel"
                text="Vous recevez un rapport clair avec vos progrès, vos concurrents et les prochaines actions."
              />
            </div>
          </div>

          <div className="mt-7">
            <Link href="/contact" className="inline-flex items-center text-[15px] font-semibold text-cyan transition-opacity hover:opacity-80">
              Obtenir un audit hôtel
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Questions fréquentes sur le GEO pour hôtels
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            <FaqItem
              question="Le GEO remplace-t-il le SEO hôtelier ?"
              answer="Non. Le GEO complète le SEO. Le SEO travaille votre visibilité sur Google, tandis que le GEO aide votre hôtel à être compris, cité et recommandé dans les réponses IA. PulseoAI travaille les deux ensemble."
            />
            <FaqItem
              question="Pourquoi un hôtel doit-il apparaître dans ChatGPT ou Gemini ?"
              answer="Parce que de plus en plus de voyageurs posent directement leurs questions aux IA pour comparer des hôtels, choisir un séjour ou préparer une réservation. Être recommandé par ChatGPT, Gemini ou Claude devient un nouveau levier de visibilité hôtelière."
            />
            <FaqItem
              question="Est-ce utile pour un hôtel indépendant ?"
              answer="Oui. Les hôtels indépendants peuvent se différencier en travaillant leurs contenus, leurs sources, leurs avis, leur Google Business Profile et leur présence locale."
            />
            <FaqItem
              question="Est-ce que cela aide les réservations directes ?"
              answer="L’objectif est de mieux orienter la demande vers votre site officiel, en rendant votre hôtel plus visible et plus crédible sur les requêtes à forte intention. C’est un levier concret pour réduire la dépendance Booking et Expedia."
            />
            <FaqItem
              question="Combien de temps faut-il pour voir des résultats ?"
              answer="Les premiers signaux peuvent apparaître en quelques semaines, mais le GEO se travaille surtout sur plusieurs mois, avec un suivi régulier des requêtes voyageurs, des sources citées et des citations IA."
            />
            <FaqItem
              question="Qu’analyse l’audit hôtel ?"
              answer="Nous analysons vos requêtes voyageurs, votre présence dans les réponses IA, vos concurrents cités, vos sources utilisées, votre visibilité Google et vos priorités d’action."
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="overflow-hidden rounded-[34px] border border-[#1D2A52] bg-[linear-gradient(135deg,#0F1730_0%,#152247_60%,#1B2E61_100%)] p-7 text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-center">
              <div>
                <Eyebrow>AUDIT HÔTEL</Eyebrow>
                <h2 className="mt-5 max-w-[15ch] text-[30px] font-semibold tracking-[-0.04em] text-white sm:text-[40px]">
                  Votre hôtel est-il cité quand les voyageurs demandent où réserver ?
                </h2>
                <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/74">
                  PulseoAI teste votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis vous montre les requêtes, les concurrents, les sources citées et les leviers qui comptent pour votre hôtel.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="h-12 w-full rounded-full bg-white px-6 text-[15px] font-semibold text-navy hover:bg-white/90 sm:w-auto">
                      Obtenir un audit hôtel
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                  <Link href="/offre" className="inline-flex items-center justify-center text-[14px] font-semibold text-white/82 transition-opacity hover:opacity-80">
                    Voir notre offre complète
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: MessageSquare,
                    title: "Requêtes voyageurs testées",
                    text: "Les questions qui déclenchent la demande.",
                  },
                  {
                    icon: Target,
                    title: "Concurrents locaux identifiés",
                    text: "Qui apparaît avant votre établissement.",
                  },
                  {
                    icon: FileText,
                    title: "Sources analysées",
                    text: "Avis, fiches, contenus et mentions utiles.",
                  },
                  {
                    icon: Zap,
                    title: "Plan d’action priorisé",
                    text: "Les actions à lancer pour progresser.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-[22px] border border-white/10 bg-white/7 p-4 backdrop-blur-sm">
                    <div className="flex size-9 items-center justify-center rounded-[16px] bg-white/10">
                      <Icon className="size-4 text-white" />
                    </div>
                    <p className="mt-3 text-[14px] font-semibold">{title}</p>
                    <p className="mt-1.5 text-[13px] leading-6 text-white/72">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
