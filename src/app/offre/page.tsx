import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileText,
  Globe,
  Mail,
  Rocket,
  Search,
  Store,
  Target,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Notre offre SEO / GEO | PulseoAI",
  description:
    "Découvrez l’offre SEO / GEO de PulseoAI, agence spécialisée pour les entreprises qui veulent gagner en visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
  openGraph: {
    title: "Notre offre SEO / GEO | PulseoAI",
    description:
      "Découvrez l’offre SEO / GEO de PulseoAI, agence spécialisée pour les entreprises qui veulent gagner en visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    url: "https://www.pulseoai.fr/offre",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – Offre SEO / GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notre offre SEO / GEO | PulseoAI",
    description:
      "Découvrez l’offre SEO / GEO de PulseoAI, agence spécialisée pour les entreprises qui veulent gagner en visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/offre" },
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

function Eyebrow({ children }: { children: React.ReactNode }) {
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
    <div className="rounded-[24px] border border-[#DEE6F3] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFCFF_100%)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
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

function DeliverableCard({ title }: { title: string }) {
  return (
    <div className="rounded-[18px] border border-[#E4EAF5] bg-[#FBFCFF] px-4 py-3 text-[14px] font-medium text-navy/76">
      {title}
    </div>
  );
}

function SectorCard({
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

function ProcessCard({
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

export default function OffrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
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
              <li className="font-medium text-navy">Notre offre</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:gap-12">
            <div className="max-w-[640px]">
              <Eyebrow>OFFRE SEO / GEO</Eyebrow>
              <h1 className="mt-5 text-[30px] font-semibold leading-[1.04] tracking-[-0.05em] text-navy sm:text-[48px]">
                Notre offre <span className="text-cyan">SEO / GEO</span> pour rendre votre entreprise <span className="text-cyan">visible</span> partout où vos clients cherchent.
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-navy/62">
                PulseoAI est une agence SEO / GEO qui aide les entreprises à gagner en visibilité sur Google et dans les moteurs IA comme ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.
              </p>
              <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-7 text-navy">
                Si votre marque n’est pas citée dans les réponses, vos concurrents prennent la demande avant même le clic. Le SEO aide à être trouvé. Le GEO aide à être cité et recommandé au bon moment.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-cyan px-6 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.22)] hover:bg-cyan-dark sm:w-auto">
                    Obtenir un audit
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="#methode" className="inline-flex items-center justify-center text-[15px] font-semibold text-navy/68 transition-colors hover:text-navy">
                  Voir la méthode
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <HeroChecklist label="Google + IA" />
                <HeroChecklist label="Suivi mensuel" />
                <HeroChecklist label="Sources citées" />
                <HeroChecklist label="Plan d’action clair" />
              </div>
            </div>

            <div className="rounded-[30px] border border-[#DEE6F3] bg-white p-5 shadow-[0_20px_46px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-navy">Ce que PulseoAI mesure</h2>
                <span className="rounded-full border border-[#DDE6F6] bg-[#F8FAFF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
                  Avant / après
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[22px] border border-[#E4EAF5] bg-[#FBFCFF] p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">Avant</p>
                  <p className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-navy">Votre marque absente</p>
                  <p className="mt-2 text-[14px] leading-6 text-navy/58">Peu citée dans ChatGPT, Gemini ou les autres réponses IA.</p>
                </div>
                <div className="rounded-[22px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#EEF4FF_0%,#F7FAFF_100%)] p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">Après</p>
                  <p className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-navy">Votre marque comprise</p>
                  <p className="mt-2 text-[14px] leading-6 text-navy/58">Citations IA, sources citées et positions suivies chaque mois.</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Prompts clients testés",
                  "Concurrents identifiés",
                  "Sources prioritaires",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[18px] border border-[#E6ECF6] bg-[#FBFCFE] px-4 py-3">
                    <span className="text-[14px] font-medium text-navy/74">{item}</span>
                    <span className="size-2 rounded-full bg-cyan/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.56fr_0.44fr] lg:items-start">
            <div className="max-w-[680px]">
              <Eyebrow>LE CONTEXTE</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
                Vos clients ne cherchent plus seulement sur Google.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Aujourd’hui, une partie de la demande se joue directement dans les réponses générées par les IA. Un prospect peut demander à ChatGPT quelle agence choisir, quel prestataire contacter ou quelle marque comparer, sans jamais visiter Google. C’est là qu’une agence référencement IA et une agence visibilité IA deviennent stratégiques.
              </p>
              <div className="mt-5 rounded-[22px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#F5F8FF_0%,#FBFCFF_100%)] px-5 py-4">
                <p className="text-[16px] font-medium leading-7 text-navy">
                  Le problème n’est pas seulement d’être bien positionné. Le problème, c’est d’être cité au moment où la décision se forme et d’être recommandé par les IA quand la demande devient qualifiée.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Google reste un canal clé",
                "Les moteurs IA deviennent des intermédiaires de confiance",
                "Les marques citées gagnent l’attention avant les autres",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[18px] border border-[#E4EAF5] bg-[#FAFCFF] px-4 py-3.5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#EEF3FF] text-cyan">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <p className="text-[15px] font-medium text-navy/76">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="methode" className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[720px]">
            <Eyebrow>MÉTHODE</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Une offre complète pour travailler votre visibilité SEO et GEO.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <PillarCard
              icon={Search}
              title="Audit SEO / GEO"
              text="Nous analysons votre visibilité actuelle sur Google et dans les moteurs IA, les requêtes stratégiques, les concurrents cités et les sources utilisées pour construire une vraie stratégie SEO / GEO."
              points={[
                "prompts clients testés",
                "présence IA",
                "positions Google",
                "concurrents visibles",
              ]}
            />
            <PillarCard
              icon={FileText}
              title="Contenus optimisés pour Google et les IA"
              text="Nous créons ou améliorons les pages qui répondent clairement aux vraies questions de vos prospects, pour renforcer votre visibilité organique et votre capacité à apparaître dans ChatGPT."
              points={["pages services", "FAQ", "guides", "comparatifs", "réponses directes"]}
            />
            <PillarCard
              icon={Compass}
              title="Structure et compréhension du site"
              text="Nous rendons votre site plus facile à comprendre pour Google, les moteurs IA et les utilisateurs, afin de soutenir votre acquisition organique."
              points={[
                "clarté de l’offre",
                "maillage interne",
                "pages mieux structurées",
                "signaux de confiance",
              ]}
            />
            <PillarCard
              icon={Globe}
              title="Citations et sources de confiance"
              text="Nous renforçons les sources citées que les IA consultent pour comprendre, comparer et recommander votre entreprise."
              points={["fiches locales", "annuaires", "contenus externes", "avis", "mentions de marque"]}
            />
            <PillarCard
              icon={BarChart3}
              title="Monitoring mensuel"
              text="Nous suivons vos scores, vos citations IA, vos concurrents cités et les sources utilisées par les moteurs IA."
              points={["évolution mensuelle", "requêtes suivies", "actions réalisées", "prochaines priorités"]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:gap-10">
            <div className="max-w-[520px]">
              <Eyebrow>LIVRABLES</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
                Chaque mois, vous savez ce qui a bougé.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-navy/62">
                Pas de reporting illisible. Vous recevez une lecture claire de votre visibilité SEO / GEO : où vous apparaissez, où vous êtes absent, quels moteurs IA vous citent, qui prend la place et quelles actions sont prioritaires.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Rapport de visibilité SEO / GEO",
                  "Liste des prompts clients suivis",
                  "Analyse des concurrents cités",
                  "Sources citées par les IA",
                  "Actions réalisées",
                  "Roadmap du mois suivant",
                ].map((item) => (
                  <DeliverableCard key={item} title={item} />
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
                      { value: "71%", label: "Score global SEO / GEO", tone: "bg-[#EDF3FF] text-cyan" },
                      { value: "18", label: "Citations IA", tone: "bg-[#F5F8FF] text-[#2341A5]" },
                      { value: "12", label: "Sources citées", tone: "bg-[#F8FAFF] text-navy" },
                  ].map((item) => (
                    <div key={item.label} className={`rounded-[22px] px-4 py-4 text-center ${item.tone}`}>
                      <p className="text-[34px] font-semibold tracking-[-0.05em]">{item.value}</p>
                      <p className="mt-1 text-[13px] font-medium text-navy/66">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">
                      Concurrents cités
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { name: "Votre marque", rank: "#2", active: true },
                        { name: "Concurrent A", rank: "#1", active: false },
                        { name: "Concurrent B", rank: "#3", active: false },
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
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">
                      Tendance mensuelle
                    </p>
                    <div className="mt-3 rounded-[20px] border border-[#E6ECF6] bg-[#FBFCFE] p-4">
                      <div className="flex h-[96px] items-end gap-2">
                        {[28, 34, 39, 48, 53, 62, 68, 74].map((value) => (
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
                  Vous voyez immédiatement vos requêtes suivies, les concurrents cités, les sources citées par les IA et les prochaines actions à traiter pour générer plus de demandes qualifiées.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>POUR QUI</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Une offre pensée pour les entreprises qui veulent capter une demande plus qualifiée.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <SectorCard
              icon={Briefcase}
              title="PME et services B2B"
              text="Être cité quand un prospect cherche un prestataire, une agence, un cabinet ou un expert sur Google ou dans les réponses IA."
            />
            <SectorCard
              icon={Rocket}
              title="E-commerce et marques"
              text="Apparaître dans les comparatifs, recommandations produits et recherches de marques, avec plus de visibilité organique."
            />
            <SectorCard
              icon={Building2}
              title="Hôtels et hébergements"
              text="Être recommandé sur les requêtes de séjour, réservation, spa, séminaire ou expérience locale."
            />
            <SectorCard
              icon={UtensilsCrossed}
              title="Restaurants et commerces"
              text="Être visible quand les clients demandent où manger, quoi acheter ou quel commerce choisir."
            />
            <SectorCard
              icon={Store}
              title="Services locaux"
              text="Renforcer votre présence sur Google, les fiches locales, les annuaires et les réponses IA pour être recommandé localement."
            />
            <SectorCard
              icon={Target}
              title="Entreprises en croissance"
              text="Construire une présence durable avant que vos concurrents ne prennent tout l’espace."
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>SEO + GEO</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Le GEO ne remplace pas le SEO. Il ajoute une couche de visibilité.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Google reste essentiel. Mais les réponses IA changent la manière dont les prospects découvrent, comparent et choisissent une entreprise. PulseoAI travaille les deux : la visibilité classique dans les moteurs de recherche et la capacité de votre marque à être comprise, citée et recommandée par les IA.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[24px] border border-[#DEE6F3] bg-[#FBFCFF] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/42">SEO</p>
              <ul className="mt-4 space-y-2.5">
                {["pages indexées", "mots-clés", "maillage interne", "contenu utile", "visibilité Google entreprise"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-navy/76">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#F5F8FF_0%,#FBFCFF_100%)] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">GEO</p>
              <ul className="mt-4 space-y-2.5">
                {["prompts clients", "citations IA", "sources utilisées", "concurrents cités", "visibilité dans ChatGPT / Gemini / Claude / Perplexity"].map((item) => (
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
              SEO = être trouvé.
            </div>
            <div className="rounded-[20px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#EEF4FF_0%,#F8FAFF_100%)] px-5 py-4 text-[15px] font-medium text-navy">
              GEO = être cité.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FD]">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>ACCOMPAGNEMENT</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Un accompagnement simple, mensuel et actionnable.
            </h2>
          </div>

          <div className="relative mt-8">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(37,71,208,0.14),rgba(37,71,208,0.03),rgba(37,71,208,0.14))] lg:block" />
            <div className="grid gap-4 lg:grid-cols-4">
              <ProcessCard step="Audit initial" title="Audit initial" text="Nous testons votre présence sur Google et dans les moteurs IA." />
              <ProcessCard step="Plan d’action" title="Plan d’action" text="Nous priorisons les pages, contenus, sources et optimisations à traiter pour améliorer votre visibilité IA entreprise." />
              <ProcessCard step="Mise en place" title="Mise en place" text="Nous produisons, optimisons et renforçons les signaux utiles pour Google et les moteurs IA." />
              <ProcessCard step="Suivi mensuel" title="Suivi mensuel" text="Nous mesurons les progrès, les citations IA et les demandes qualifiées générées." />
            </div>
          </div>

          <div className="mt-7">
            <Link href="/contact" className="inline-flex items-center text-[15px] font-semibold text-cyan transition-opacity hover:opacity-80">
              Obtenir un audit
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="max-w-[760px]">
            <Eyebrow>TRANSPARENCE</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold tracking-[-0.04em] text-navy sm:text-[40px]">
              Ce n’est pas une promesse magique.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-navy/62">
              Les moteurs IA ne se manipulent pas avec une astuce. Ils croisent les contenus, les sources, les signaux de confiance, les mentions et la cohérence de votre présence en ligne. Le rôle de PulseoAI est de rendre cette visibilité plus claire, plus mesurable et plus crédible.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Pas d’achat de visibilité artificielle",
              "Pas de promesse de première place garantie",
              "Pas de reporting incompréhensible",
            ].map((item) => (
              <div key={item} className="rounded-[22px] border border-[#DEE6F3] bg-[#FBFCFF] p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                <p className="text-[16px] font-semibold tracking-[-0.02em] text-navy">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[22px] border border-[#D6E2FB] bg-[linear-gradient(180deg,#F5F8FF_0%,#FBFCFF_100%)] px-5 py-4 text-[15px] leading-7 text-navy/72">
            Notre travail consiste à rendre votre entreprise plus claire, plus crédible et plus facile à citer, pour renforcer votre acquisition organique sur Google et dans les réponses IA.
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
          <div className="overflow-hidden rounded-[34px] border border-[#1D2A52] bg-[linear-gradient(135deg,#0F1730_0%,#152247_60%,#1B2E61_100%)] p-7 text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)] sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-center">
              <div>
                <Eyebrow>AUDIT</Eyebrow>
                <h2 className="mt-5 max-w-[14ch] text-[30px] font-semibold tracking-[-0.04em] text-white sm:text-[40px]">
                  Vous voulez savoir si votre entreprise est citée par les IA ?
                </h2>
                <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-white/74">
                  PulseoAI teste vos requêtes stratégiques, vos concurrents, vos sources et votre visibilité actuelle sur Google et dans les moteurs IA pour vous aider à apparaître dans ChatGPT et à capter plus de demandes qualifiées.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="h-12 w-full rounded-full bg-white px-6 text-[15px] font-semibold text-navy hover:bg-white/90 sm:w-auto">
                      Obtenir un audit
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center text-[14px] font-semibold text-white/82 transition-opacity hover:opacity-80">
                    Nous contacter
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Mail,
                    title: "Prompts testés",
                    text: "Les requêtes qui déclenchent la demande.",
                  },
                  {
                    icon: Target,
                    title: "Concurrents identifiés",
                    text: "Qui apparaît avant vous dans les réponses.",
                  },
                  {
                    icon: FileText,
                    title: "Sources analysées",
                    text: "Les contenus, fiches et mentions qui comptent.",
                  },
                  {
                    icon: Zap,
                    title: "Plan d’action priorisé",
                    text: "Les actions utiles à mener tout de suite.",
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
