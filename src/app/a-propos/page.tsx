import type { CSSProperties, ElementType, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  ChevronRight,
  Compass,
  Eye,
  FileSearch,
  LineChart,
  MessageSquareQuote,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "À propos | PulseoAI, agence SEO / GEO à Nantes",
  description:
    "Découvrez PulseoAI, agence SEO / GEO basée à Nantes. Nous aidons les entreprises à être visibles sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
  openGraph: {
    title: "À propos | PulseoAI, agence SEO / GEO à Nantes",
    description:
      "Découvrez PulseoAI, agence SEO / GEO basée à Nantes. Nous aidons les entreprises à être visibles sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    url: "https://www.pulseoai.fr/a-propos",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – À propos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | PulseoAI, agence SEO / GEO à Nantes",
    description:
      "Découvrez PulseoAI, agence SEO / GEO basée à Nantes. Nous aidons les entreprises à être visibles sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/a-propos" },
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
      name: "À propos",
      item: "https://www.pulseoai.fr/a-propos",
    },
  ],
};

const personJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Romain Duclos",
    jobTitle: "Fondateur, stratégie SEO / GEO",
    image: "https://www.pulseoai.fr/team/romain.jpg",
    worksFor: {
      "@id": "https://www.pulseoai.fr/#organization",
    },
    sameAs: ["https://fr.linkedin.com/in/romaindcl"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sofiane Aiche",
    jobTitle: "Co-fondateur, relation client et accompagnement",
    image: "https://www.pulseoai.fr/team/sofiane.png",
    worksFor: {
      "@id": "https://www.pulseoai.fr/#organization",
    },
  },
];

const methodCards = [
  {
    icon: FileSearch,
    title: "Audit SEO / GEO",
    text: "Nous analysons votre visibilité sur Google et dans les moteurs IA pour comprendre où votre entreprise apparaît, où elle est absente et quels concurrents prennent la place.",
  },
  {
    icon: Compass,
    title: "Clarté de l’entité",
    text: "Nous aidons les moteurs de recherche et les IA à comprendre qui vous êtes, ce que vous proposez, pour qui, dans quelle zone et avec quelles preuves.",
  },
  {
    icon: MessageSquareQuote,
    title: "Contenus optimisés IA",
    text: "Nous créons ou optimisons les pages, FAQ, guides et contenus que les moteurs IA peuvent comprendre, citer et réutiliser dans leurs réponses.",
  },
  {
    icon: ShieldCheck,
    title: "Citations et sources",
    text: "Nous renforçons les sources externes, fiches, avis, annuaires et mentions qui crédibilisent votre marque aux yeux des moteurs IA.",
  },
];

const founderCards = [
  {
    name: "Romain Duclos",
    role: "Fondateur — stratégie SEO / GEO",
    photo: "/team/romain.jpg",
    objectPosition: "50% 30%",
    text: "Romain pilote la vision SEO / GEO de PulseoAI. Il travaille sur la compréhension des moteurs IA, les stratégies de visibilité, les contenus optimisés et le positionnement des marques dans Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    focus: "Focus : stratégie, contenu, visibilité IA, acquisition.",
  },
  {
    name: "Sofiane Aiche",
    role: "Co-fondateur — relation client & accompagnement",
    photo: "/team/sofiane.png",
    objectPosition: "50% 35%",
    text: "Sofiane accompagne les entreprises dans la compréhension des enjeux, le cadrage des besoins et le suivi des actions. Son rôle est de transformer un sujet technique en plan d’action clair, lisible et exploitable.",
    focus: "Focus : client, pédagogie, suivi, déploiement.",
  },
];

const valueCards = [
  {
    icon: Eye,
    title: "Clarté",
    text: "Le SEO / GEO est complexe. Notre rôle est de le rendre compréhensible et actionnable.",
  },
  {
    icon: ShieldCheck,
    title: "Transparence",
    text: "Nous montrons les requêtes, les réponses IA, les concurrents, les sources et l’évolution des scores.",
  },
  {
    icon: LineChart,
    title: "Mesure",
    text: "Chaque action doit servir un objectif : visibilité, citations, trafic qualifié, demandes entrantes ou réservations directes.",
  },
  {
    icon: Target,
    title: "Pragmatisme",
    text: "Pas de blabla technique inutile. Nous priorisons ce qui peut réellement améliorer votre présence sur Google et dans les IA.",
  },
];

const sectors = [
  "Hôtels",
  "Restaurants",
  "Commerces locaux",
  "PME",
  "Services B2B",
  "Marques e-commerce",
];

const territoryChips = ["Nantes", "France", "Suisse", "Maroc", "Accompagnement à distance"];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
      {children}
    </span>
  );
}

function HeroChecklist({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-navy/58">
      <span className="size-1.5 rounded-full bg-cyan" />
      {label}
    </span>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <div className="flex size-10 items-center justify-center rounded-[16px] bg-[#EEF3FF]">
        <Icon className="size-4.5 text-cyan" />
      </div>
      <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.03em] text-navy">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-navy/62">{text}</p>
    </div>
  );
}

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
              <li className="font-medium text-navy">À propos</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:gap-12">
            <div className="max-w-[660px]">
              <Eyebrow>AGENCE SEO / GEO</Eyebrow>
              <h1 className="mt-5 text-[30px] font-semibold leading-[1.04] tracking-[-0.05em] text-navy sm:text-[48px]">
                <span className="text-cyan">PulseoAI</span> aide les entreprises à devenir visibles sur <span className="text-cyan">Google et dans les IA</span>.
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-navy/62">
                Nous sommes une agence SEO / GEO basée à Nantes. Nous aidons les hôtels, restaurants, commerces, PME et marques à être compris, cités et recommandés par Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-cyan px-6 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.22)] hover:bg-cyan-dark sm:w-auto">
                    Obtenir un audit
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link
                  href="/offre"
                  className="inline-flex items-center justify-center text-[15px] font-semibold text-navy/68 transition-colors hover:text-navy"
                >
                  Découvrir notre offre
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <HeroChecklist label="Nantes + France" />
                <HeroChecklist label="Google + IA" />
                <HeroChecklist label="Audit SEO / GEO" />
                <HeroChecklist label="Monitoring IA" />
              </div>
            </div>

            <div className="rounded-[30px] border border-[#DEE6F3] bg-white p-5 shadow-[0_20px_46px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-navy">PulseoAI en clair</h2>
                <span className="rounded-full border border-[#DDE6F6] bg-[#F8FAFF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
                  Nantes
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Agence SEO / GEO",
                  "Basée à Nantes",
                  "Visibilité Google + IA",
                  "Audit, contenus, citations, monitoring",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-3 text-[14px] font-medium text-navy/74"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[22px] border border-[#DDE6F8] bg-[linear-gradient(180deg,#F6F9FF_0%,#FCFDFF_100%)] p-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">
                  Secteurs
                </p>
                <p className="mt-2 text-[14px] leading-6 text-navy/68">
                  Hôtellerie, restauration, commerces, PME, e-commerce.
                </p>
              </div>

              <div className="mt-4 rounded-[22px] border border-[#E6ECF6] bg-[#FBFCFE] p-4">
                <p className="text-[14px] font-medium text-navy">
                  Objectif : rendre votre entreprise visible là où vos clients posent déjà leurs questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:gap-12">
            <div className="max-w-[700px]">
              <Eyebrow>POURQUOI PULSEOAI</Eyebrow>
              <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
                Le déclic : vos clients ne cherchent <span className="text-cyan">plus seulement sur Google</span>.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                PulseoAI est né d’un constat simple : les clients utilisent déjà ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews pour comparer, choisir et décider. Pourtant, beaucoup d’entreprises restent invisibles dans ces réponses.
              </p>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Une entreprise peut être bien positionnée sur Google, avoir un bon site, de bons avis, et pourtant ne jamais être citée par les moteurs IA. C’est ce décalage que nous avons voulu résoudre.
              </p>
            </div>

            <div className="grid gap-4">
              <InfoCard
                icon={Search}
                title="Le SEO reste essentiel"
                text="Google reste un canal majeur. Nous continuons à travailler les fondamentaux SEO : structure, contenus, clarté, maillage et intention de recherche."
              />
              <InfoCard
                icon={Bot}
                title="Le GEO devient stratégique"
                text="Les moteurs IA synthétisent les réponses et recommandent quelques marques. Si vous n’êtes pas cité, vous êtes absent de la décision."
              />
              <InfoCard
                icon={Sparkles}
                title="Les deux se complètent"
                text="Notre rôle : connecter votre visibilité Google et votre visibilité IA dans une stratégie SEO / GEO lisible et mesurable."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EDF1F7] bg-[#FBFCFF] py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid gap-8 lg:grid-cols-[0.56fr_0.44fr] lg:gap-12">
            <div className="max-w-[700px]">
              <Eyebrow>MISSION</Eyebrow>
              <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
                Reprendre le contrôle de votre visibilité.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Notre mission est d’aider les entreprises à reprendre le contrôle de leur visibilité dans l’ère de la recherche IA. Nous auditons votre présence, identifions les lacunes, optimisons vos contenus, renforçons vos sources et suivons vos progrès mois après mois.
              </p>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Que vous soyez hôtelier, restaurateur, commerçant, dirigeant de PME ou marque e-commerce, l’objectif reste le même : être visible sur les requêtes qui comptent vraiment, générer une demande plus qualifiée et réduire votre dépendance à l’acquisition payante ou aux plateformes intermédiaires.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#DEE6F3] bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-[16px] bg-[#EEF3FF]">
                  <Target className="size-4.5 text-cyan" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-navy">Ce que nous pilotons</h3>
                  <p className="text-[14px] text-navy/56">Une lecture claire de votre visibilité Google + IA.</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Visibilité sur Google",
                  "Présence dans ChatGPT",
                  "Citations dans Gemini, Claude, Perplexity",
                  "Sources utilisées par les IA",
                  "Contenus optimisés SEO / GEO",
                  "Monitoring mensuel",
                  "Concurrents cités",
                  "Priorités d’action",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-3 text-[14px] font-medium text-navy/74"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[760px]">
            <Eyebrow>MÉTHODE SEO / GEO</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Une méthode claire pour être compris, cité et recommandé.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {methodCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mt-4 rounded-[22px] border border-[#DDE6F8] bg-[linear-gradient(180deg,#F6F9FF_0%,#FCFDFF_100%)] px-5 py-4">
            <p className="text-[14px] font-medium text-navy">
              Suivi mensuel inclus : prompts clients, citations IA, concurrents recommandés, sources citées et prochaines priorités.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EDF1F7] bg-[#FBFCFF] py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[780px]">
            <Eyebrow>ÉQUIPE</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Deux profils, une même conviction : la visibilité IA devient un canal d’acquisition.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              PulseoAI est porté par Romain Duclos et Sofiane Aiche, avec une approche simple : rendre le SEO / GEO compréhensible, mesurable et utile au business.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {founderCards.map((member) => (
              <div
                key={member.name}
                className="rounded-[28px] border border-[#DEE6F3] bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <div className="relative size-18 shrink-0 overflow-hidden rounded-full border border-[#E5EAF4] bg-[#F5F7FB] grayscale">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.objectPosition as CSSProperties["objectPosition"] }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-navy">{member.name}</h3>
                    <p className="mt-1 text-[14px] font-medium text-cyan">{member.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-[14px] leading-6.5 text-navy/64">{member.text}</p>
                <div className="mt-5 rounded-[18px] border border-[#DDE6F8] bg-[linear-gradient(180deg,#F6F9FF_0%,#FCFDFF_100%)] px-4 py-3 text-[13px] font-medium text-navy/76">
                  {member.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[760px]">
            <Eyebrow>VALEURS</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Pas de jargon. Des signaux clairs. Des résultats suivis.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {valueCards.map((card) => (
              <InfoCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#EDF1F7] bg-[#FBFCFF] py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[820px]">
            <Eyebrow>SECTEURS</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Une expertise née dans l’hôtellerie, pensée pour tous les secteurs.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              PulseoAI a construit une partie forte de son expertise sur l’hôtellerie, un secteur où la visibilité, les avis, les plateformes et les réservations directes sont critiques. Aujourd’hui, notre méthode SEO / GEO s’applique aussi aux restaurants, commerces, services, PME, entreprises B2B et marques e-commerce.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-[#DDE6F8] bg-white px-4 py-2 text-[14px] font-medium text-navy/72 shadow-sm"
              >
                {sector}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-navy/62">
            Chaque secteur a ses propres requêtes, sources, concurrents et signaux. Notre travail consiste à adapter la stratégie SEO / GEO à votre réalité business.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
            <div className="max-w-[760px]">
              <Eyebrow>NANTES + DISTANCE</Eyebrow>
              <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
                Basés à Nantes, actifs partout en France.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                PulseoAI est basée à Nantes. Nous accompagnons des entreprises partout en France, à distance, avec des échanges simples : visio, téléphone, email et reporting clair.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#DEE6F3] bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
              <div className="flex flex-wrap gap-3">
                {territoryChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#DDE6F8] bg-[#FBFCFF] px-3 py-2 text-[13px] font-medium text-navy/68"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EDF1F7] bg-[#FBFCFF] py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[820px]">
            <Eyebrow>POURQUOI NOUS</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Pourquoi choisir PulseoAI plutôt qu’une agence SEO classique ?
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[#DEE6F3] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-[16px] bg-[#F3F5F9]">
                  <Building2 className="size-4.5 text-navy/54" />
                </div>
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-navy">Agence SEO classique</h3>
              </div>
              <ul className="mt-5 space-y-3 text-[14px] leading-6 text-navy/64">
                <li>Travaille surtout les positions Google</li>
                <li>Suit le trafic organique</li>
                <li>Optimise les pages pour les moteurs traditionnels</li>
                <li>Mesure rarement les citations IA</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#F6F9FF_0%,#FFFFFF_100%)] p-6 shadow-[0_14px_30px_rgba(37,71,208,0.08)]">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-[16px] bg-white shadow-sm">
                  <Bot className="size-4.5 text-cyan" />
                </div>
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-navy">PulseoAI — SEO / GEO</h3>
              </div>
              <ul className="mt-5 space-y-3 text-[14px] leading-6 text-navy/72">
                <li>Travaille Google et les moteurs IA</li>
                <li>Suit les prompts clients</li>
                <li>Mesure les citations de marque</li>
                <li>Analyse les concurrents recommandés</li>
                <li>Optimise les contenus pour être compris et cités</li>
                <li>Suit les sources utilisées par ChatGPT, Gemini, Claude, Perplexity et AI Overviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="overflow-hidden rounded-[34px] bg-navy p-6 text-white shadow-[0_30px_70px_rgba(11,15,30,0.16)] sm:p-8 lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
              <div className="max-w-[620px]">
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76">
                  AGENCE SEO / GEO
                </span>
                <h2 className="mt-5 text-[30px] font-semibold tracking-[-0.05em] text-white sm:text-[38px]">
                  Envie de savoir si votre entreprise est visible dans les réponses IA ?
                </h2>
                <p className="mt-4 max-w-[580px] text-[15px] leading-7 text-white/68">
                  Nous analysons votre présence sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis nous vous montrons les requêtes, les concurrents et les sources qui comptent.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="h-12 w-full rounded-full bg-white px-6 text-[15px] font-semibold text-navy hover:bg-white/92 sm:w-auto">
                      Obtenir un audit
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                  <Link
                    href="/offre"
                    className="inline-flex items-center justify-center text-[15px] font-semibold text-white/72 transition-colors hover:text-white"
                  >
                    Découvrir notre offre
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Audit SEO / GEO",
                  "Visibilité Google + IA",
                  "Concurrents identifiés",
                  "Plan d’action priorisé",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-[13px] font-medium text-white/84">
                      <span className="size-1.5 rounded-full bg-cyan" />
                      {item}
                    </div>
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
