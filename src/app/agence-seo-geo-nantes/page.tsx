import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ChevronRight, Compass, FileText, MapPin, Search, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Agence SEO / GEO à Nantes — PulseoAI | Visibilité Google & IA",
  description:
    "PulseoAI, agence SEO et GEO à Nantes et Saint-Herblain. Nous rendons votre entreprise visible sur Google et dans les réponses de ChatGPT, Gemini et Perplexity.",
  alternates: {
    canonical: "https://www.pulseoai.fr/agence-seo-geo-nantes",
  },
  openGraph: {
    title: "Agence SEO / GEO à Nantes — PulseoAI | Visibilité Google & IA",
    description:
      "PulseoAI, agence SEO et GEO à Nantes et Saint-Herblain. Nous rendons votre entreprise visible sur Google et dans les réponses de ChatGPT, Gemini et Perplexity.",
    url: "https://www.pulseoai.fr/agence-seo-geo-nantes",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI agence SEO / GEO Nantes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence SEO / GEO à Nantes — PulseoAI | Visibilité Google & IA",
    description:
      "PulseoAI, agence SEO et GEO à Nantes et Saint-Herblain. Nous rendons votre entreprise visible sur Google et dans les réponses de ChatGPT, Gemini et Perplexity.",
    images: ["/og-image.png"],
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
      name: "Agence SEO / GEO Nantes",
      item: "https://www.pulseoai.fr/agence-seo-geo-nantes",
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.pulseoai.fr/agence-seo-geo-nantes/#localbusiness",
  name: "PulseoAI — Agence SEO / GEO Nantes",
  alternateName: ["Pulseo AI Nantes", "PulseoAI Agence GEO Nantes"],
  description:
    "Agence SEO et GEO à Nantes et Saint-Herblain. Spécialiste de la visibilité sur Google et dans les moteurs IA comme ChatGPT, Gemini et Perplexity pour les PME, hôtels, restaurants et entreprises locales.",
  url: "https://www.pulseoai.fr/agence-seo-geo-nantes",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17 rue Océane",
    addressLocality: "Saint-Herblain",
    addressRegion: "Loire-Atlantique",
    postalCode: "44800",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.2186,
    longitude: -1.6499,
  },
  areaServed: [
    { "@type": "City", name: "Nantes" },
    { "@type": "City", name: "Saint-Herblain" },
    { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
  ],
  sameAs: ["https://www.linkedin.com/company/pulseoai"],
  parentOrganization: {
    "@id": "https://www.pulseoai.fr/#organization",
  },
};

const faqItems = [
  {
    question: "Quelle est la différence entre une agence SEO classique et une agence GEO ?",
    answer:
      "Une agence SEO classique travaille surtout votre visibilité dans les résultats Google. Une agence GEO travaille aussi votre présence dans les réponses générées par ChatGPT, Gemini, Perplexity et les autres moteurs IA. PulseoAI combine les deux approches pour couvrir l’ensemble du parcours de recherche.",
  },
  {
    question: "PulseoAI intervient-il uniquement à Nantes ?",
    answer:
      "Non. PulseoAI est basée à Saint-Herblain, près de Nantes, mais accompagne aussi des entreprises partout en France, en Suisse et au Maroc. La proximité locale reste utile pour comprendre le tissu économique nantais et les enjeux des PME régionales.",
  },
  {
    question: "Combien coûte un accompagnement SEO / GEO ?",
    answer:
      "Le budget dépend du niveau d’accompagnement, de la taille du site, de la concurrence et des objectifs. L’audit initial permet de prioriser les actions et de cadrer un plan réaliste avant toute mise en place.",
  },
  {
    question: "Quels résultats attendre pour une PME nantaise ?",
    answer:
      "Une PME nantaise peut améliorer sa visibilité Google, sa capacité à apparaître dans les réponses IA et la qualité des demandes reçues. Les premiers signaux dépendent du point de départ, des contenus existants et de la cohérence des sources qui parlent de l’entreprise.",
  },
  {
    question: "Comment savoir si mon entreprise est citée par ChatGPT ?",
    answer:
      "Le plus simple est de tester les requêtes que vos prospects posent réellement dans ChatGPT, Gemini et Perplexity. Il faut ensuite comparer les réponses, vérifier si votre marque apparaît, comment elle est décrite et quels concurrents sont cités à votre place.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
      {children}
    </span>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
      <div className="flex size-10 items-center justify-center rounded-[16px] bg-[#EEF3FF]">
        <Icon className="size-4.5 text-cyan" />
      </div>
      <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em] text-navy">{title}</h3>
      <p className="mt-2 text-[14px] leading-6 text-navy/62">{text}</p>
    </div>
  );
}

export default function AgenceSeoGeoNantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
              <li className="font-medium text-navy">Agence SEO / GEO Nantes</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.56fr_0.44fr] lg:gap-12">
            <div className="max-w-[700px]">
              <Eyebrow>AGENCE LOCALE</Eyebrow>
              <h1 className="mt-5 text-[30px] font-semibold leading-[1.04] tracking-[-0.05em] text-navy sm:text-[48px]">
                Agence SEO / GEO à Nantes <span className="text-cyan">— PulseoAI</span>
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-navy/62">
                PulseoAI est une agence SEO / GEO basée à Saint-Herblain, près de Nantes. Nous aidons les PME, hôtels, restaurants, e-commerce et entreprises de services à devenir visibles sur Google et dans les réponses de ChatGPT, Gemini et Perplexity.
              </p>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Notre approche relie visibilité locale, acquisition organique et compréhension par les moteurs IA. L’objectif est simple : être trouvé, cité et recommandé au moment où vos prospects cherchent déjà une solution.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-cyan px-6 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.22)] hover:bg-cyan-dark sm:w-auto">
                    Obtenir mon audit
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/offre" className="inline-flex items-center justify-center text-[15px] font-semibold text-navy/68 transition-colors hover:text-navy">
                  Découvrir notre offre
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#DEE6F3] bg-white p-5 shadow-[0_20px_46px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-[18px] bg-[#EEF3FF]">
                  <MapPin className="size-5 text-cyan" />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-navy">Basés à Saint-Herblain</p>
                  <p className="text-[14px] text-navy/58">Nantes, Loire-Atlantique, France</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Agence SEO / GEO pour PME et entreprises locales",
                  "Visibilité Google, ChatGPT, Gemini et Perplexity",
                  "Audit, contenus, citations et monitoring mensuel",
                  "Interventions à Nantes, Saint-Herblain et à distance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    <span className="text-[14px] text-navy/72">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>POURQUOI NANTES</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Pourquoi choisir une agence SEO / GEO locale à Nantes
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Une agence locale comprend mieux le tissu économique nantais, les cycles de décision des PME, les enjeux des hôtels, des restaurants, des e-commerce et des entreprises de services. Cette proximité aide à prioriser les requêtes, les sources et les signaux qui comptent vraiment dans votre zone.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ServiceCard
              icon={Building2}
              title="Lecture du tissu local"
              text="Comprendre les marchés nantais, les zones d’activité, la concurrence régionale et les logiques de visibilité locale."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Méthode SEO / GEO"
              text="Relier visibilité Google, sources de confiance et présence dans les réponses IA sans opposer SEO et GEO."
            />
            <ServiceCard
              icon={Compass}
              title="Accompagnement utile"
              text="Prioriser les actions concrètes qui servent le business, plutôt que produire une stratégie trop théorique ou trop large."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[780px]">
            <Eyebrow>SERVICES</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Nos services SEO et GEO pour les entreprises nantaises
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <ServiceCard
              icon={Search}
              title="Audit SEO / GEO"
              text="Analyse de votre visibilité actuelle sur Google et dans les moteurs IA pour clarifier les priorités."
            />
            <ServiceCard
              icon={FileText}
              title="Contenus optimisés Google et IA"
              text="Pages, FAQ et contenus éditoriaux structurés pour répondre aux vraies questions de vos prospects."
            />
            <ServiceCard
              icon={Compass}
              title="Structure et balisage Schema.org"
              text="Architecture claire, données structurées et signaux techniques utiles pour Google et les LLM."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Citations et sources de confiance"
              text="Renforcement des profils, mentions et plateformes qui aident les IA à recommander votre marque."
            />
            <ServiceCard
              icon={Zap}
              title="Monitoring mensuel"
              text="Suivi des requêtes, citations, concurrents et progrès SEO / GEO avec une lecture claire."
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:items-start">
            <div className="max-w-[720px]">
              <Eyebrow>VISIBILITÉ IA</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
                Votre entreprise nantaise est-elle visible dans les IA ?
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Le test le plus simple consiste à poser dans ChatGPT, Gemini et Perplexity les questions que vos clients posent déjà. Regardez si votre entreprise apparaît, si elle est décrite clairement et si vos concurrents sont cités à votre place.
              </p>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Cette lecture montre vite si votre marque est comprise, si vos contenus sont exploitables et si vos sources externes sont suffisamment cohérentes pour être reprises dans une réponse IA.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#DEE6F3] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">Test simple</p>
              <div className="mt-4 space-y-3">
                {[
                  "Taper une requête locale ou sectorielle dans ChatGPT",
                  "Comparer la réponse dans Gemini et Perplexity",
                  "Vérifier si votre entreprise est nommée et bien décrite",
                  "Noter les concurrents cités, les angles utilisés et les oublis",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    <span className="text-[14px] text-navy/72">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link href="/contact" className="w-full">
                  <Button className="h-12 w-full rounded-full bg-cyan px-6 text-[15px] font-semibold text-white hover:bg-cyan-dark">
                    Obtenir mon audit
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[980px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Questions fréquentes sur notre agence SEO / GEO à Nantes
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[22px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
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
    </>
  );
}
