import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/hero-video";
import { JourneySteps } from "@/components/journey-steps";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Search,
  Shield,
  Target,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Agence GEO · Visibilit\u00e9 IA pour h\u00f4tels et entreprises",
  description:
    "Faites appara\u00eetre votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO \u00e0 Nantes. Experts h\u00f4tellerie et PME.",
  openGraph: {
    title: "PulseoAI \u00b7 Agence GEO, experts en r\u00e9f\u00e9rencement IA",
    description:
      "Faites appara\u00eetre votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO \u00e0 Nantes.",
    url: "https://www.pulseoai.fr",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PulseoAI \u2013 Agence GEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseoAI \u00b7 Agence GEO, experts en r\u00e9f\u00e9rencement IA",
    description:
      "Faites appara\u00eetre votre entreprise sur ChatGPT, Claude et Gemini.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
};

const homeFaqItems = [
  {
    question: "Qu’est-ce que le référencement IA ?",
    answer:
      "Le référencement IA consiste à rendre une entreprise compréhensible, crédible et citable dans les réponses générées par ChatGPT, Gemini, Perplexity, Google AI Overviews et les nouveaux moteurs de recherche.",
  },
  {
    question: "Quelle différence entre SEO et GEO ?",
    answer:
      "Le SEO aide votre site à apparaître dans Google. Le GEO ajoute une couche : faire comprendre votre marque aux moteurs IA pour qu’elle puisse être citée, recommandée ou utilisée comme source dans les réponses.",
  },
  {
    question: "Comment apparaître dans ChatGPT ?",
    answer:
      "Il faut clarifier votre offre, structurer vos contenus, travailler vos entités, renforcer vos sources externes, utiliser un balisage Schema.org cohérent et suivre les requêtes où vos clients cherchent une solution.",
  },
  {
    question: "Le GEO remplace-t-il le SEO ?",
    answer:
      "Non. Le GEO complète le SEO. Les bases restent importantes : indexation, pages claires, maillage interne, autorité, contenus utiles et performance technique.",
  },
  {
    question: "Combien de temps faut-il pour être visible dans les réponses IA ?",
    answer:
      "Cela dépend du marché, de la concurrence et de l’état du site. En général, le travail se construit sur plusieurs mois : audit, contenus, structuration, citations, suivi et ajustements.",
  },
  {
    question: "PulseoAI travaille avec quels types d’entreprises ?",
    answer:
      "PulseoAI accompagne les PME, hôtels, restaurants, commerces, e-commerce, services locaux et entreprises B2B qui veulent améliorer leur visibilité sur Google et dans les moteurs IA.",
  },
] as const;

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const homeGuideLinks = [
  {
    href: "/blog/apparaitre-chatgpt-client-cherche-entreprise",
    title: "Comment se référencer sur ChatGPT ?",
    description: "Comprendre les bases du référencement ChatGPT, du SEO IA et des prompts clients.",
  },
  {
    href: "/blog/comment-se-referencer-sur-perplexity",
    title: "Comment se référencer sur Perplexity ?",
    description: "Travailler les sources citées, les entités et les contenus answer-first.",
  },
  {
    href: "/blog/google-ai-overviews-entreprises-comprendre",
    title: "Google AI Overviews : guide entreprises",
    description: "Lire l’impact des réponses générées de Google sur la visibilité organique.",
  },
  {
    href: "/blog/sources-citees-ia-site-ne-suffit-pas",
    title: "Pourquoi votre site seul ne suffit pas",
    description: "Comprendre le rôle des sources externes, profils, annuaires et mentions de marque.",
  },
  {
    href: "/blog/audit-seo-geo-visibilite-ia",
    title: "Audit SEO / GEO : mesurer sa visibilité IA",
    description: "Identifier les requêtes, concurrents et sources qui structurent votre visibilité IA.",
  },
  {
    href: "/blog/veille-concurrentielle-seo-ia-serp-locales",
    title: "Veille concurrentielle SEO & IA",
    description: "Suivre qui prend votre place dans Google, ChatGPT, Perplexity et les SERP locales.",
  },
  {
    href: "/blog/schema-org-guide-complet-geo",
    title: "Schema.org pour le GEO",
    description: "Mieux structurer vos pages pour Google et les moteurs IA.",
  },
  {
    href: "/blog/llms-txt-guide-pratique",
    title: "llms.txt : rendre son site lisible par les IA",
    description: "Comprendre le rôle du fichier llms.txt dans la lecture des contenus par les modèles.",
  },
] as const;

function HeroDashboard() {
  return (
    <div className="relative mx-auto flex w-full max-w-[300px] justify-center sm:max-w-[340px]">
      {/* Châssis smartphone */}
      <div className="relative w-full rounded-[44px] border-[10px] border-[#0B0F1E] bg-[#0B0F1E] shadow-[0_30px_70px_rgba(11,15,30,0.28)]">
        {/* Encoche */}
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-28 -translate-x-1/2 rounded-full bg-[#0B0F1E]" />
        {/* Écran 9:16 */}
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[34px] bg-white">
          <HeroVideo />
        </div>
      </div>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
      {children}
    </span>
  );
}

function SolutionCard({
  title,
  description,
  visual,
}: {
  title: string;
  description: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#DCE4F4] bg-white p-5 shadow-[0_14px_34px_rgba(15,23,42,0.05)]">
      <div className="mb-4">{visual}</div>
      <h3 className="text-[17px] font-semibold tracking-tight text-navy">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-6 text-navy/62">{description}</p>
    </div>
  );
}

function StepCard({
  step,
  icon: Icon,
  title,
  text,
  detail,
}: {
  step: string;
  icon: React.ElementType;
  title: string;
  text: string;
  detail: string;
}) {
  return (
    <div className="relative rounded-[24px] border border-[#DCE4F4] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFCFF_100%)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.045)]">
      <div className="absolute right-5 top-5 h-10 w-px bg-[linear-gradient(180deg,rgba(37,71,208,0.26),rgba(37,71,208,0))]" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E3FA] bg-[#F5F8FF] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">
            <span className="size-1.5 rounded-full bg-cyan" />
            Étape {step}
          </span>
        </div>
        <div className="flex size-9 items-center justify-center rounded-[16px] bg-[#F4F7FF]">
          <Icon className="size-4 text-cyan" />
        </div>
      </div>
      <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-navy/62">{text}</p>
      <div className="mt-4 rounded-[18px] border border-[#E6EBF7] bg-[#FBFCFF] px-3.5 py-3 text-[12px] font-medium leading-5 text-navy/55">
        {detail}
      </div>
    </div>
  );
}

function MockupAuditTable() {
  const rows = [
    { q: "h\u00f4tel spa Nantes", gpt: true, gemini: true, score: 8.1 },
    { q: "restaurant Lyon centre", gpt: true, gemini: false, score: 6.4 },
    { q: "cabinet comptable Paris", gpt: false, gemini: false, score: 2.3 },
  ];

  return (
    <div className="overflow-hidden rounded-[18px] border border-[#E0E7F5] bg-[#FBFCFF]">
      <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_1fr] gap-2 border-b border-[#E8EDF7] px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/42">
        <span>Prompt</span>
        <span className="text-center">GPT</span>
        <span className="text-center">Gemini</span>
        <span className="text-right">Score</span>
      </div>
      {rows.map((row) => (
        <div key={row.q} className="grid grid-cols-[1.6fr_0.7fr_0.7fr_1fr] gap-2 border-b border-[#EEF2F9] px-3.5 py-2.5 text-[12px] text-navy last:border-b-0">
          <span className="truncate font-medium">{row.q}</span>
          <span className="text-center">{row.gpt ? <CheckCircle className="mx-auto size-4 text-emerald-600" /> : <span className="text-navy/30">-</span>}</span>
          <span className="text-center">{row.gemini ? <CheckCircle className="mx-auto size-4 text-emerald-600" /> : <span className="text-navy/30">-</span>}</span>
          <span className="text-right font-semibold text-cyan">{row.score}/10</span>
        </div>
      ))}
    </div>
  );
}

function MockupContentCard() {
  return (
    <div className="rounded-[18px] border border-[#E0E7F5] bg-[#FBFCFF] p-3.5">
      <div className="h-2.5 w-28 rounded-full bg-navy/12" />
      <div className="mt-2.5 h-5 w-[78%] rounded-lg bg-navy/85" />
      <div className="mt-2 h-2 w-[54%] rounded-full bg-navy/18" />
      <div className="mt-4 space-y-1.5">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-cyan" />
          <div className="h-2 w-36 rounded-full bg-navy/20" />
        </div>
        <div className="h-2 w-full rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]" />
        <div className="h-2 w-[92%] rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]" />
        <div className="h-2 w-[72%] rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]" />
      </div>
    </div>
  );
}

function MockupSchemaCard() {
  return (
    <div className="rounded-[18px] bg-[#10182F] p-3.5 font-mono text-[10px] leading-5 text-white shadow-[0_12px_30px_rgba(16,24,47,0.16)]">
      <p className="text-white/55">{"{"}</p>
      <p className="pl-4">
        <span className="text-[#8FB0FF]">&quot;@type&quot;</span>: <span className="text-[#B7F0D5]">&quot;Hotel&quot;</span>,
      </p>
      <p className="pl-4">
        <span className="text-[#8FB0FF]">&quot;name&quot;</span>: <span className="text-[#B7F0D5]">&quot;Votre &eacute;tablissement&quot;</span>,
      </p>
      <p className="pl-4">
        <span className="text-[#8FB0FF]">&quot;amenityFeature&quot;</span>: <span className="text-[#B7F0D5]">&quot;Spa&quot;</span>,
      </p>
      <p className="pl-4">
        <span className="text-[#8FB0FF]">&quot;areaServed&quot;</span>: <span className="text-[#B7F0D5]">&quot;Nantes&quot;</span>
      </p>
      <p className="text-white/55">{"}"}</p>
    </div>
  );
}

function MockupSourcesCard() {
  return (
    <div className="rounded-[18px] border border-[#E0E7F5] bg-[#FBFCFF] p-3.5">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-navy">Sources lues par les IA</p>
        <span className="text-xs font-semibold text-cyan">6 actives</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Google Business Profile", "Tripadvisor", "Site web", "Booking", "Presse locale", "FAQ"].map((item) => (
          <span key={item} className="rounded-full border border-[#DCE4F4] bg-white px-2.5 py-1 text-[10px] font-medium text-navy/65 shadow-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function MockupTrendCard() {
  const points = [
    { x: 8, y: 66 },
    { x: 28, y: 61 },
    { x: 48, y: 63 },
    { x: 68, y: 51 },
    { x: 88, y: 45 },
    { x: 108, y: 38 },
    { x: 128, y: 24 },
    { x: 148, y: 16 },
  ];
  const path = "M 8 66 C 18 62, 22 60, 28 61 C 36 62, 42 65, 48 63 C 56 58, 60 54, 68 51 C 76 48, 80 47, 88 45 C 96 42, 100 40, 108 38 C 116 33, 120 29, 128 24 C 136 20, 142 18, 148 16";

  return (
    <div className="rounded-[18px] border border-[#E0E7F5] bg-[#FBFCFF] p-3.5">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-navy">Visibilit&eacute; mensuelle</p>
        <span className="text-xs font-semibold text-emerald-600">+367 %</span>
      </div>
      <div className="mt-3 rounded-[16px] border border-[#E8EDF7] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAFF_100%)] px-3 py-3">
        <svg viewBox="0 0 160 84" className="h-[74px] w-full" aria-hidden="true">
          <defs>
            <linearGradient id="trendStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E8BFF" />
              <stop offset="100%" stopColor="#6B63FF" />
            </linearGradient>
            <linearGradient id="trendArea" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(94,139,255,0.24)" />
              <stop offset="100%" stopColor="rgba(94,139,255,0)" />
            </linearGradient>
          </defs>
          <path d="M 8 76 H 152" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          <path d={`${path} L 152 76 L 8 76 Z`} fill="url(#trendArea)" />
          <path d={path} fill="none" stroke="url(#trendStroke)" strokeWidth="3" strokeLinecap="round" />
          {points.map((point, index) => {
            return (
              <g key={index}>
                <circle cx={point.x} cy={point.y} r="3.5" fill="#FFFFFF" stroke="#4D79FF" strokeWidth="2" />
              </g>
            );
          })}
        </svg>
        <div className="mt-2 grid grid-cols-4 gap-2 text-[10px] font-medium text-navy/42">
          <span>Sem. 1</span>
          <span className="text-center">Sem. 2</span>
          <span className="text-center">Sem. 3</span>
          <span className="text-right">Sem. 4</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.pulseoai.fr" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />

      <section className="hero-aurora flex min-h-[calc(100svh-66px)] items-center bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFD_100%)] lg:min-h-[calc(100svh-76px)]">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-8 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.48fr_0.52fr] lg:gap-16">
            <div className="flex flex-col justify-center lg:pl-6 lg:pr-8">
              <div className="inline-flex w-fit items-center rounded-full border border-[#DBE4F4] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                AGENCE SEO / GEO
              </div>
              <div className="max-w-[590px]">
              <h1 className="mt-6 max-w-[18ch] text-[34px] font-semibold leading-[0.98] tracking-[-0.06em] text-navy sm:text-[50px] lg:text-[56px]">
                Pendant que vous lisez ça, <span className="text-[#2547D0]">vos clients</span> choisissent votre concurrent sur <span className="text-[#2547D0]">ChatGPT</span>
              </h1>
              <p className="mt-5 max-w-[540px] text-[14px] leading-6 text-navy/64 sm:text-[15px]">
                Vos clients cherchent sur ChatGPT, Gemini, Perplexity, Claude et Google. PulseoAI fait en sorte qu&apos;ils vous trouvent.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-cyan px-6 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.22)] hover:bg-cyan-dark sm:w-auto">
                    Reprendre le contrôle
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/offre" className="inline-flex items-center justify-center text-[15px] font-semibold text-navy/68 transition-colors hover:text-navy">
                  Découvrir notre offre
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-navy/58">
                <span>Audit SEO / GEO</span>
                <span>Suivi mensuel</span>
                <span>Google + IA</span>
              </div>
              </div>
            </div>

            <HeroDashboard />
          </div>
        </div>
      </section>

      <section className="deferred-section flex min-h-screen items-center bg-[linear-gradient(180deg,#F8FAFD_0%,#FFFFFF_22%)]">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="flex justify-center">
              <SectionEyebrow>LE NOUVEAU PARCOURS CLIENT</SectionEyebrow>
            </div>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-navy sm:text-[44px]">
              Vos clients ne cherchent plus.
              <br />
              Ils demandent.
            </h2>
            <p className="mt-4 text-[17px] leading-7 text-navy/58">
              Et l&apos;IA répond. Avec ou sans vous.
            </p>
          </div>

          <JourneySteps />

          <div className="mt-14 flex justify-center">
            <Link href="/contact">
              <Button className="h-12 rounded-full bg-[#2547D0] px-7 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.22)] hover:bg-cyan-dark">
                Devenir visible
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="deferred-section bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:gap-10">
            <div className="max-w-[520px]">
              <SectionEyebrow>LE PROBLÈME</SectionEyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
                <span className="text-cyan">Le déclic</span> arrive quand votre <span className="text-cyan">marque</span> n’apparaît pas.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Vous pouvez expliquer le SEO / GEO et l’IA pendant 20 minutes. Le vrai choc arrive quand on tape une requête client dans ChatGPT et que trois entreprises sont citées. Pas la vôtre.
              </p>
              <p className="mt-5 text-[17px] font-medium leading-7 text-navy">
                En 90 secondes, une menace abstraite devient une urgence business.
              </p>

              <div className="mt-7 space-y-3.5">
                {[
                  "Les IA répondent avant le clic",
                  "Les marques citées prennent la confiance",
                  "Les absents perdent des prospects invisibles",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[18px] border border-[#E4EAF5] bg-[#FAFCFF] px-4 py-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#EEF3FF] text-cyan">
                      <CheckCircle className="size-4" />
                    </span>
                    <p className="text-[15px] font-medium text-navy/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#DCE4F4] bg-white shadow-[0_22px_52px_rgba(15,23,42,0.06)]">
              <div className="flex h-12 items-center justify-between border-b border-[#E5EBF5] bg-[#11182C] px-5">
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
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">
                    Prompt client
                  </p>
                  <p className="mt-2 text-[16px] font-medium text-navy">
                    Quelle agence SEO / GEO choisir pour une PME ?
                  </p>
                </div>

                <div className="mt-4 rounded-[24px] border border-[#E4EAF5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFE_100%)] p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">
                    Réponse générée
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-navy/76">
                    Je recommande d’abord <span className="font-semibold text-navy">Entreprise A</span>, puis <span className="font-semibold text-navy">Entreprise B</span>, souvent citées pour leurs contenus, leurs avis et leur présence sur plusieurs sources fiables.
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">
                    Présence dans la réponse
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {[
                      { rank: "#1", name: "Entreprise A", status: "citée", active: false },
                      { rank: "#2", name: "Entreprise B", status: "citée", active: false },
                      { rank: "", name: "Votre entreprise", status: "non citée", active: true },
                    ].map((item) => (
                      <div
                        key={`${item.name}-${item.status}`}
                        className={`flex items-center justify-between rounded-[18px] border px-4 py-3 ${
                          item.active
                            ? "border-[#C9D7FA] bg-[linear-gradient(180deg,#EEF3FF_0%,#E9F1FF_100%)]"
                            : "border-[#E6ECF6] bg-[#FBFCFE]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-[13px] font-semibold ${item.active ? "text-cyan" : "text-navy/52"}`}>
                            {item.rank || "—"}
                          </span>
                          <span className={`text-[15px] font-semibold ${item.active ? "text-navy" : "text-navy/78"}`}>
                            {item.name}
                          </span>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-[12px] font-semibold ${
                            item.active ? "bg-white text-cyan" : "bg-white text-navy/56"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-4">
                  <p className="text-[13px] leading-6 text-navy/58">
                    Le prospect ne clique pas. Il choisit parmi les marques que l’IA vient de lui présenter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deferred-section bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-3xl">
            <SectionEyebrow>Notre solution</SectionEyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-navy sm:text-[36px]">
              Nous nous occupons de tout pour vous <span className="text-cyan">rendre visible</span>.
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-8 text-navy/64">
              Vous continuez à gérer votre business. Nous nous chargeons d’analyser votre visibilité Google et IA, de produire les bons contenus, d’optimiser le site et de suivre les signaux que lisent les moteurs IA.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <SolutionCard
              title="Nous analysons votre visibilité"
              description={
                <>
                  Nous testons votre entreprise sur Google, ChatGPT, Gemini et Claude. Vous recevez un rapport clair avec <span className="text-cyan">votre score SEO / GEO</span> et celui de vos concurrents cités.
                </>
              }
              visual={<MockupAuditTable />}
            />
            <SolutionCard
              title="Nous créons le bon contenu"
              description={
                <>
                  Nous rédigeons et optimisons les contenus de votre site pour que Google et les IA les comprennent et <span className="text-cyan">les recommandent à vos clients</span>.
                </>
              }
              visual={<MockupContentCard />}
            />
            <SolutionCard
              title="Nous optimisons votre site"
              description={
                <>
                  Nous mettons en place les éléments qui permettent à Google et aux moteurs IA de <span className="text-cyan">lire, comprendre et citer</span> votre site correctement.
                </>
              }
              visual={<MockupSchemaCard />}
            />
            <SolutionCard
              title="Nous boostons votre réputation en ligne"
              description={
                <>
                  Nous optimisons vos fiches Google, TripAdvisor et les annuaires que les IA consultent pour faire <span className="text-cyan">leurs recommandations</span>.
                </>
              }
              visual={<MockupSourcesCard />}
            />
            <SolutionCard
              title="Nous suivons vos résultats chaque mois"
              description={
                <>
                  Chaque mois, vous recevez un rapport avec <span className="text-cyan">l’évolution de votre visibilité Google + IA</span>, les progrès réalisés et les prochaines actions.
                </>
              }
              visual={<MockupTrendCard />}
            />
            <div className="rounded-[24px] border border-[#DCE4F4] bg-[linear-gradient(180deg,#0F1730_0%,#152247_100%)] p-5 text-white shadow-[0_16px_38px_rgba(15,23,42,0.14)]">
              <div className="flex size-10 items-center justify-center rounded-[18px] bg-white/10">
                <Globe className="size-5 text-white" />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold tracking-tight">Une approche simple à lire, simple à piloter.</h3>
              <p className="mt-2.5 text-[13px] leading-6 text-white/74">
                On suit vos prompts clients, vos citations IA, vos concurrents et les sources utilisées par les moteurs IA. Pas de jargon, pas de blabla technique, juste une feuille de route claire.
              </p>
              <div className="mt-5 flex flex-col gap-2 text-[13px] text-white/84">
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-emerald-300" />
                  <span>Suivi des citations de marque</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-emerald-300" />
                  <span>Lecture des sources réutilisées par les IA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-4 text-emerald-300" />
                  <span>Roadmap mensuelle actionnable</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/offre" className="inline-flex items-center text-[13px] font-semibold text-white transition-opacity hover:opacity-80">
                  Voir notre offre
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deferred-section bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="grid gap-5 lg:grid-cols-[0.94fr_0.86fr] lg:items-end lg:gap-10">
            <div className="max-w-[680px]">
              <SectionEyebrow>POURQUOI PULSEOAI</SectionEyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[38px]">
                L’agence <span className="text-cyan">SEO / GEO</span> qui rend votre visibilité lisible.
              </h2>
            </div>
            <p className="max-w-[520px] text-[15px] leading-7 text-navy/58 lg:justify-self-end">
              Une expertise utile pour Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, avec un suivi clair pour les dirigeants, responsables marketing et les entreprises qui veulent rendre leur visibilité mesurable.
            </p>
          </div>

          <div className="mt-8 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
            {([
              {
                icon: Shield,
                title: "Expertise SEO / GEO",
                desc: "Nous travaillons à la fois la visibilité Google et la présence dans les réponses IA. Les deux canaux se renforcent pour soutenir l’acquisition organique.",
              },
              {
                icon: Target,
                title: "50+ entreprises analysées",
                desc: "Nous avons déjà audité des hôtels, commerces, PME et marques e-commerce pour comprendre ce qui les rend visibles, citées ou absentes.",
              },
              {
                icon: BarChart3,
                title: "Résultats mesurables",
                desc: "Pas de promesses floues. Nous suivons les scores, les citations IA, les sources utilisées et la place prise par vos concurrents.",
              },
              {
                icon: MapPin,
                title: "Basés à Nantes, actifs partout",
                desc: "Nous travaillons à distance avec des entreprises partout en France, avec des échanges simples en visio et par email.",
              },
              {
                icon: MessageSquare,
                title: "Approche pédagogique",
                desc: "Vous comprenez ce que nous faisons, pourquoi nous le faisons et comment cela améliore votre visibilité Google et IA.",
              },
              {
                icon: Globe,
                title: "Tous secteurs",
                desc: "Hôtels, restaurants, commerces, services, PME et e-commerce. Nous adaptons la méthode à votre marché.",
              },
            ] as { icon: React.ElementType; title: string; desc: string }[]).map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-[24px] border border-[#DEE6F3] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFCFF_100%)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-4 h-[2px] w-10 rounded-full bg-[linear-gradient(90deg,#2547D0,#8AA2FF)] opacity-80" />
                <div className="flex size-10 items-center justify-center rounded-[16px] bg-[#EEF3FF]">
                  <Icon className="size-4.5 text-cyan" />
                </div>
                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-navy/62">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="deferred-section bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-3xl">
            <SectionEyebrow>Processus</SectionEyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-navy sm:text-[36px]">
              Comment <span className="text-cyan">ça marche</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-navy/64">
              Quatre étapes, zéro prise de tête. Un process court, lisible et orienté résultat pour améliorer votre visibilité Google, vos citations IA et vos demandes qualifiées.
            </p>
          </div>

          <div className="relative mt-8">
            <div className="pointer-events-none absolute left-1/2 top-[20%] hidden h-[56%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(37,71,208,0.18),rgba(37,71,208,0.04),rgba(37,71,208,0.18))] lg:block" />
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(37,71,208,0.14),rgba(37,71,208,0.03),rgba(37,71,208,0.14))] lg:block" />
            <div className="grid gap-4 lg:grid-cols-2">
            <StepCard
              step="01"
              icon={Mail}
              title="Vous nous contactez"
              text="Un email ou un formulaire suffit. Vous nous partagez le nom de votre entreprise, votre site et votre objectif."
              detail="Réponse sous 24h avec un premier cadrage."
            />
            <StepCard
              step="02"
              icon={Search}
              title="Nous testons votre visibilité"
              text="Nous lançons les requêtes que vos clients posent sur Google, ChatGPT, Gemini, Claude et Perplexity."
              detail="Vous voyez où vous apparaissez, où vous êtes absent et qui prend la place."
            />
            <StepCard
              step="03"
              icon={Zap}
              title="Nous mettons en place la stratégie"
              text="Nous priorisons les actions SEO / GEO : contenus, structure du site, sources citées, réputation et maillage interne."
              detail="Le travail est structuré pour gagner des citations et une meilleure compréhension par les IA."
            />
            <StepCard
              step="04"
              icon={Clock}
              title="Vous suivez les résultats"
              text="Chaque mois, vous recevez une lecture claire de vos scores, de vos citations, de vos sources et de vos concurrents cités."
              detail="Une feuille de route actionnable, sans jargon."
            />
            </div>
          </div>
        </div>
      </section>

      <section className="deferred-section bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="overflow-hidden rounded-[34px] border border-[#1D2A52] bg-[linear-gradient(135deg,#0F1730_0%,#152247_60%,#1B2E61_100%)] p-7 text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-center">
              <div>
                <SectionEyebrow>Audit</SectionEyebrow>
                <h2 className="mt-5 max-w-[14ch] text-[30px] font-semibold tracking-[-0.04em] text-white sm:text-[40px]">
                  Prêt à savoir où votre entreprise apparaît vraiment ?
                </h2>
                <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-white/74">
                  Nous testons votre visibilité sur Google, ChatGPT, Gemini, Claude et Perplexity, puis nous vous montrons les requêtes, les sources citées et les concurrents qui comptent pour capter une demande plus qualifiée.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="h-12 w-full rounded-full bg-white px-6 text-[15px] font-semibold text-navy hover:bg-white/90 sm:w-auto">
                      Obtenir un audit
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                  <Link href="/faq" className="inline-flex items-center justify-center text-[14px] font-semibold text-white/82 transition-opacity hover:opacity-80">
                    Voir la FAQ
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/7 p-4 backdrop-blur-sm">
                  <div className="flex size-9 items-center justify-center rounded-[16px] bg-white/10">
                    <MessageSquare className="size-4 text-white" />
                  </div>
                  <p className="mt-3 text-[14px] font-semibold">Prompts clients suivis</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-white/72">Les questions qui déclenchent vraiment la demande.</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/7 p-4 backdrop-blur-sm">
                  <div className="flex size-9 items-center justify-center rounded-[16px] bg-white/10">
                    <FileText className="size-4 text-white" />
                  </div>
                  <p className="mt-3 text-[14px] font-semibold">Sources citées</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-white/72">Sites, fiches, contenus et avis repris par les moteurs IA.</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/7 p-4 backdrop-blur-sm">
                  <div className="flex size-9 items-center justify-center rounded-[16px] bg-white/10">
                    <Target className="size-4 text-white" />
                  </div>
                  <p className="mt-3 text-[14px] font-semibold">Concurrents cités</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-white/72">Qui prend la place dans les réponses avant vous.</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/7 p-4 backdrop-blur-sm">
                  <div className="flex size-9 items-center justify-center rounded-[16px] bg-white/10">
                    <Bot className="size-4 text-white" />
                  </div>
                  <p className="mt-3 text-[14px] font-semibold">Lecture multi-plateforme</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-white/72">Google, ChatGPT, Gemini, Claude et Perplexity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="deferred-section bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[820px]">
            <SectionEyebrow>Guides</SectionEyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-navy sm:text-[36px]">
              Guides utiles pour aller plus loin
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-navy/64">
              Quelques ressources pour comprendre le SEO IA, le GEO, ChatGPT, Perplexity et la visibilité dans les moteurs de réponse.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-navy/64">
              Pour voir notre accompagnement complet, consultez{" "}
              <Link href="/offre" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                notre offre SEO / GEO
              </Link>
              . Pour comprendre comment apparaître dans les réponses IA, lisez notre guide sur le{" "}
              <Link href="/blog/referencement-chatgpt-apparaitre-ia" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                référencement ChatGPT
              </Link>
              . Pour une recherche locale, découvrez notre{" "}
              <Link
                href="/agence-seo-geo-nantes"
                className="font-medium text-cyan transition-colors hover:text-cyan-dark"
              >
                agence GEO à Nantes
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {homeGuideLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[22px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all hover:border-cyan/30 hover:shadow-[0_16px_32px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-navy transition-colors group-hover:text-cyan">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-navy/62">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-cyan">
                  Lire le guide
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="deferred-section bg-white">
        <div className="mx-auto max-w-[980px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-navy sm:text-[36px]">
              Questions fréquentes sur le référencement IA
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-navy/64">
              Les bases pour comprendre comment votre entreprise peut devenir visible sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {homeFaqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[22px] border border-[#DEE6F3] bg-[#FBFCFF] px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
                  <span>{item.question}</span>
                  <span className="text-cyan transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-[78ch] text-[15px] leading-7 text-navy/68">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="deferred-section bg-white">
        <div className="mx-auto max-w-[980px] px-6 pb-14 lg:pb-16">
          <div className="rounded-[28px] border border-[#DEE6F3] bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_100%)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-6">
            <div className="max-w-[760px]">
              <h2 className="text-[24px] font-semibold tracking-[-0.03em] text-navy sm:text-[28px]">
                Votre entreprise est-elle visible dans les réponses IA ?
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-navy/64">
                On analyse votre présence sur Google, ChatGPT, Gemini, Perplexity et les concurrents déjà cités à votre place.
              </p>
              <p className="mt-3 text-[14px] leading-6 text-navy/58">
                Pour aller plus loin, vous pouvez consulter{" "}
                <Link href="/offre" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                  notre offre SEO / GEO
                </Link>
                {" "}ou, pour une recherche locale,{" "}
                <Link
                  href="/agence-seo-geo-nantes"
                  className="font-medium text-cyan transition-colors hover:text-cyan-dark"
                >
                  notre agence SEO / GEO à Nantes
                </Link>
                .
              </p>
              <div className="mt-5">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-cyan px-6 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.18)] hover:bg-cyan-dark sm:w-auto">
                    Obtenir un audit
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
