import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ChevronRight, Compass, FileText, MapPin, Search, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Agence SEO / GEO à Nantes — Référencement IA | PulseoAI",
  description:
    "PulseoAI est une agence SEO / GEO à Nantes et Saint-Herblain. Nous aidons les entreprises à renforcer leur référencement IA sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA.",
  alternates: {
    canonical: "https://www.pulseoai.fr/agence-seo-geo-nantes",
  },
  openGraph: {
    title: "Agence SEO / GEO à Nantes — Référencement IA | PulseoAI",
    description:
      "PulseoAI est une agence SEO / GEO à Nantes et Saint-Herblain. Nous aidons les entreprises à renforcer leur référencement IA sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA.",
    url: "https://www.pulseoai.fr/agence-seo-geo-nantes",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI agence SEO / GEO Nantes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence SEO / GEO à Nantes — Référencement IA | PulseoAI",
    description:
      "PulseoAI est une agence SEO / GEO à Nantes et Saint-Herblain. Nous aidons les entreprises à renforcer leur référencement IA sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA.",
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
    "Agence SEO, GEO et référencement IA à Nantes et Saint-Herblain. PulseoAI aide les PME, hôtels, restaurants, commerces et entreprises locales à renforcer leur visibilité sur Google, ChatGPT, Perplexity et les moteurs IA.",
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
    { "@type": "Country", name: "France" },
  ],
  knowsAbout: [
    "SEO",
    "GEO",
    "référencement IA",
    "visibilité ChatGPT",
    "Google AI Overviews",
    "Perplexity",
    "référencement local",
    "Schema.org",
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
    question: "Quelle est la meilleure agence SEO / GEO à Nantes ?",
    answer:
      "La meilleure agence dépend de votre marché, de votre site, de votre niveau de concurrence et de sa capacité à travailler à la fois Google, les moteurs IA et les sources externes. Le bon critère n’est pas la promesse la plus forte, mais la méthode la plus claire et la plus utile à votre activité.",
  },
  {
    question: "Comment améliorer son référencement IA à Nantes ?",
    answer:
      "Il faut clarifier votre offre, travailler vos pages locales, vos contenus, votre balisage Schema.org, vos sources externes et les requêtes concrètes que vos prospects nantais posent déjà à Google, ChatGPT ou Perplexity.",
  },
  {
    question: "Comment apparaître dans ChatGPT quand un client cherche une entreprise à Nantes ?",
    answer:
      "Il faut rendre votre marque lisible localement : pages claires, zone d’intervention explicite, signaux de confiance, cohérence entre votre site, vos profils, vos avis et les sources qui parlent déjà de vous.",
  },
  {
    question: "Est-ce que Google Maps suffit pour être visible localement ?",
    answer:
      "Non. Google Maps et Google Business Profile restent essentiels, mais ils ne suffisent pas. La visibilité locale dépend aussi de votre site officiel, de vos contenus locaux, de vos avis, de vos annuaires et de votre présence dans les réponses IA.",
  },
  {
    question: "PulseoAI travaille-t-il uniquement avec des entreprises nantaises ?",
    answer:
      "Non. PulseoAI est basée à Saint-Herblain, près de Nantes, mais accompagne aussi des entreprises partout en France, en Suisse et au Maroc. La proximité locale reste utile pour comprendre les enjeux des PME et marchés régionaux.",
  },
  {
    question: "Combien de temps faut-il pour améliorer sa visibilité SEO / GEO locale ?",
    answer:
      "Les premiers signaux peuvent évoluer en quelques semaines, mais une vraie progression locale demande un travail continu sur les pages, les contenus, les sources, les profils locaux et le suivi mensuel des requêtes importantes.",
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

function StepCard({
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
                Agence SEO / GEO à Nantes : <span className="text-cyan">référencement IA</span>, Google et moteurs IA
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-navy/62">
                Basée à Saint-Herblain, près de Nantes, PulseoAI aide les PME, hôtels, restaurants, commerces et entreprises locales à devenir plus visibles sur Google, ChatGPT, Gemini, Perplexity et les nouveaux moteurs de réponse.
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
          <div className="max-w-[820px]">
            <Eyebrow>CHOISIR SON AGENCE</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Comment choisir la meilleure agence SEO / GEO à Nantes ?
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              La meilleure agence SEO / GEO à Nantes n’est pas forcément celle qui promet la première position. C’est celle qui sait construire une visibilité durable : indexation propre, contenus utiles, balisage Schema.org, compréhension des entités, citations externes, visibilité dans les réponses IA et suivi clair des résultats.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <ServiceCard
              icon={Search}
              title="Une vraie base SEO technique"
              text="Votre site doit être indexable, rapide, lisible, structuré et correctement relié à Google Search Console."
            />
            <ServiceCard
              icon={Zap}
              title="Une stratégie de référencement IA"
              text="L’agence doit aussi travailler votre présence dans ChatGPT, Gemini, Perplexity et Google AI Overviews."
            />
            <ServiceCard
              icon={FileText}
              title="Des contenus qui répondent aux questions clients"
              text="Les pages doivent répondre aux vraies questions que vos prospects posent avant de choisir un prestataire."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Un travail sur les sources et citations"
              text="Les IA s’appuient sur plusieurs sources. Votre marque doit être cohérente sur votre site, vos profils, annuaires, contenus et mentions externes."
            />
            <ServiceCard
              icon={Compass}
              title="Une lecture concurrentielle locale"
              text="Il faut savoir quels concurrents apparaissent déjà sur Google, Google Maps, ChatGPT ou Perplexity à votre place."
            />
            <ServiceCard
              icon={Building2}
              title="Un suivi mensuel clair"
              text="Vous devez savoir ce qui progresse : pages indexées, requêtes suivies, citations IA, concurrents cités, sources utilisées et actions prioritaires."
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
              <Eyebrow>PARCOURS LOCAL</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
                Google Maps, ChatGPT et Perplexity : le nouveau parcours local
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Un client local ne cherche plus seulement sur Google. Il peut comparer des prestataires sur Google Maps, demander une recommandation à ChatGPT, vérifier des avis, lire un article, puis revenir sur votre site. Le référencement local ne se limite donc plus à une fiche Google Business Profile : il faut aussi être clair, cité et crédible dans les moteurs IA.
              </p>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Cela suppose une vraie cohérence entre votre site officiel, vos contenus locaux, vos avis, vos annuaires et vos profils. Pour comprendre comment surveiller ce nouveau terrain de jeu, vous pouvez consulter notre guide sur la{" "}
                <Link href="/blog/veille-concurrentielle-seo-ia-serp-locales" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                  veille concurrentielle SEO, IA et SERP locales
                </Link>
                , voir{" "}
                <Link href="/blog/apparaitre-chatgpt-client-cherche-entreprise" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                  comment se référencer sur ChatGPT
                </Link>
                {" "}ou découvrir{" "}
                <Link href="/blog/comment-se-referencer-sur-perplexity" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                  comment se référencer sur Perplexity
                </Link>
                .
              </p>
            </div>

            <div className="rounded-[28px] border border-[#DEE6F3] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">Signaux locaux à surveiller</p>
              <div className="mt-4 space-y-3">
                {[
                  "Google Business Profile et Google Maps",
                  "Avis, annuaires et plateformes locales",
                  "Site officiel et contenus locaux",
                  "Réponses de ChatGPT et Perplexity sur les requêtes nantaises",
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
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.56fr_0.44fr] lg:items-start">
            <div className="max-w-[760px]">
              <Eyebrow>PROBLÈME LOCAL</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
                Qui prend votre place aujourd’hui ?
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Sur une requête comme “meilleure agence SEO à Nantes”, “agence référencement IA Nantes” ou “quelle agence digitale choisir à Nantes”, les moteurs ne montrent pas toujours les meilleurs acteurs. Ils montrent surtout les marques qu’ils comprennent, qu’ils trouvent, qu’ils peuvent vérifier et qu’ils voient citées ailleurs.
              </p>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                C’est pour cela qu’un{" "}
                <Link href="/blog/audit-seo-geo-visibilite-ia" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                  audit SEO / GEO
                </Link>
                {" "}local permet de savoir si vos concurrents sont plus visibles parce qu’ils sont meilleurs, ou simplement parce qu’ils sont plus lisibles pour Google, Google Maps, ChatGPT et Perplexity.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#DEE6F3] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="space-y-3">
                {[
                  "Concurrents visibles dans Google",
                  "Concurrents présents sur Google Maps",
                  "Concurrents cités dans ChatGPT",
                  "Concurrents repris par Perplexity",
                  "Concurrents mieux structurés dans les contenus",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    <span className="text-[14px] text-navy/72">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center text-[15px] font-semibold text-cyan transition-opacity hover:opacity-80">
                  Demander un audit de visibilité locale
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[820px]">
            <Eyebrow>MÉTHODE LOCALE</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Notre méthode pour renforcer votre visibilité à Nantes
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Nous relions visibilité Google, réponses IA, signaux locaux et lecture concurrentielle pour améliorer votre présence là où vos prospects comparent réellement les options disponibles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <StepCard
              step="01"
              title="Audit SEO / GEO local"
              text="Nous analysons votre site, vos pages locales, votre fiche Google Business Profile, vos concurrents et votre visibilité dans les moteurs IA."
            />
            <StepCard
              step="02"
              title="Requêtes business locales"
              text="Nous listons les recherches qui comptent vraiment : agence SEO Nantes, référencement IA Nantes, meilleure agence GEO, prestataire digital local, etc."
            />
            <StepCard
              step="03"
              title="Contenus et pages stratégiques"
              text="Nous clarifions vos pages pour que Google et les IA comprennent votre offre, votre zone, vos services et vos preuves."
            />
            <StepCard
              step="04"
              title="Sources et citations locales"
              text="Nous travaillons les signaux externes : annuaires, profils, contenus, mentions, avis, plateformes et cohérence des informations."
            />
            <StepCard
              step="05"
              title="Suivi mensuel"
              text="Nous suivons les positions, les citations IA, les concurrents visibles, les sources utilisées et les actions à prioriser."
            />
          </div>

          <p className="mt-6 max-w-[840px] text-[15px] leading-7 text-navy/62">
            Pour l’hôtellerie, cette méthode s’adapte aussi aux recherches de séjour, de réservation directe et de visibilité locale. Vous pouvez voir notre approche dédiée sur{" "}
            <Link href="/geo-hotellerie" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
              GEO hôtellerie
            </Link>
            . Pour comprendre les réponses générées par Google, vous pouvez aussi lire notre guide sur{" "}
            <Link href="/blog/google-ai-overviews-entreprises-comprendre" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
              Google AI Overviews
            </Link>
            .
          </p>
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
