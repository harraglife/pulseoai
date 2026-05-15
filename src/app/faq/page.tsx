import type { ElementType, ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  ChevronRight,
  Clock3,
  Compass,
  FileSearch,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ SEO / GEO | PulseoAI",
  description:
    "Questions fréquentes sur le SEO, le GEO, la visibilité Google, ChatGPT et les moteurs IA. Comprenez comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.",
  openGraph: {
    title: "FAQ SEO / GEO | PulseoAI",
    description:
      "Questions fréquentes sur le SEO, le GEO, la visibilité Google, ChatGPT et les moteurs IA. Comprenez comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.",
    url: "https://www.pulseoai.fr/faq",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – FAQ SEO / GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ SEO / GEO | PulseoAI",
    description:
      "Questions fréquentes sur le SEO, le GEO, la visibilité Google, ChatGPT et les moteurs IA. Comprenez comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/faq" },
};

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionData = {
  pill: string;
  title: string;
  intro?: string;
  items: FaqItem[];
};

const baseItems: FaqItem[] = [
  {
    question: "Qu’est-ce que le GEO ?",
    answer:
      "Le GEO, ou Generative Engine Optimization, consiste à optimiser la présence d’une entreprise pour qu’elle soit comprise, citée et recommandée dans les réponses générées par les moteurs IA comme ChatGPT, Gemini, Claude, Perplexity ou Google AI Overviews.",
  },
  {
    question: "Quelle est la différence entre SEO et GEO ?",
    answer:
      "Le SEO travaille votre visibilité sur Google. Le GEO travaille votre présence dans les réponses IA. Le SEO vous aide à apparaître dans les résultats de recherche. Le GEO vous aide à être mentionné quand un prospect demande quelle entreprise, quelle agence, quel hôtel, quel restaurant ou quelle solution choisir.",
  },
  {
    question: "Le GEO remplace-t-il le SEO ?",
    answer:
      "Non. Le GEO complète le SEO. Un site clair, bien structuré, utile et visible sur Google donne aussi de meilleurs signaux aux moteurs IA. Chez PulseoAI, nous travaillons les deux ensemble : SEO pour Google, GEO pour les réponses IA.",
  },
  {
    question: "Pourquoi le GEO devient-il important ?",
    answer:
      "Parce que les clients ne cherchent plus seulement sur Google. Ils posent aussi leurs questions à ChatGPT, Gemini, Claude, Perplexity ou Google AI Overviews. Si votre marque n’apparaît pas dans ces réponses, vos concurrents peuvent capter la demande avant même que le prospect visite votre site.",
  },
  {
    question: "Quels moteurs IA sont concernés ?",
    answer:
      "Nous analysons principalement ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews. Selon votre marché, nous pouvons aussi suivre d’autres sources ou assistants utilisés par vos prospects.",
  },
  {
    question: "Comment les IA choisissent-elles les marques qu’elles citent ?",
    answer:
      "Les moteurs IA s’appuient sur plusieurs signaux : votre site, vos contenus, vos pages services, vos avis, vos sources externes, vos fiches locales, les mentions de votre marque et la clarté de votre positionnement. Plus ces signaux sont cohérents, plus votre entreprise est facile à comprendre et à recommander.",
  },
];

const visibilityItems: FaqItem[] = [
  {
    question: "Comment apparaître dans ChatGPT ?",
    answer:
      "Il faut rendre votre entreprise compréhensible pour les moteurs IA : pages claires, réponses directes, contenus utiles, sources fiables, avis cohérents, mentions externes et structure éditoriale solide. L’objectif est que ChatGPT comprenne qui vous êtes, ce que vous faites, pour qui vous le faites et pourquoi vous êtes pertinent.",
  },
  {
    question: "Comment savoir si mon entreprise apparaît dans les IA ?",
    answer:
      "Nous testons les prompts que vos prospects peuvent réellement poser : « quelle agence SEO / GEO choisir ? », « meilleur hôtel avec spa à Nantes », « quelle solution pour améliorer ma visibilité IA ? ». Pour chaque requête, nous vérifions si votre marque apparaît, à quelle position, avec quel ton et face à quels concurrents.",
  },
  {
    question: "Pourquoi mes concurrents apparaissent et pas moi ?",
    answer:
      "Souvent, ce n’est pas parce qu’ils sont meilleurs. C’est parce que les moteurs IA trouvent plus facilement des informations claires, cohérentes et réutilisables à leur sujet. Le travail SEO / GEO consiste justement à renforcer ces signaux pour votre entreprise.",
  },
  {
    question: "Est-ce qu’on peut garantir une première position dans ChatGPT ?",
    answer:
      "Non. Personne ne peut garantir une première position durable dans une réponse IA. En revanche, on peut améliorer vos signaux, votre clarté, vos sources et votre présence sur les requêtes importantes, puis mesurer votre progression chaque mois.",
  },
  {
    question: "Qu’est-ce qu’une citation IA ?",
    answer:
      "Une citation IA correspond au moment où une IA mentionne votre marque, votre site ou vos contenus dans une réponse. Cela peut être une recommandation directe, une source utilisée ou une mention dans une comparaison.",
  },
];

const auditItems: FaqItem[] = [
  {
    question: "Qu’analyse un audit SEO / GEO ?",
    answer:
      "Un audit SEO / GEO analyse votre visibilité sur Google et dans les moteurs IA. Nous regardons les requêtes importantes, les réponses générées, les concurrents cités, les sources utilisées, vos pages clés, vos contenus, vos avis, vos fiches locales et les priorités d’action.",
  },
  {
    question: "Comment mesurez-vous la visibilité IA ?",
    answer:
      "Nous suivons plusieurs indicateurs : présence ou absence de votre marque, position dans la réponse, concurrents cités, sources utilisées, ton de la citation et évolution dans le temps. L’objectif est de rendre la visibilité IA mesurable, pas abstraite.",
  },
  {
    question: "À quelle fréquence faut-il suivre les résultats ?",
    answer:
      "Nous recommandons un suivi mensuel. Les moteurs IA évoluent, les concurrents publient, les sources changent et les requêtes clients bougent. Un monitoring régulier permet d’ajuster la stratégie sans piloter à l’aveugle.",
  },
  {
    question: "Quels résultats peut-on attendre ?",
    answer:
      "Les résultats dépendent de votre marché, de votre situation de départ, de vos concurrents et de la régularité du travail. L’objectif est d’augmenter progressivement votre visibilité sur les requêtes qualifiées, vos citations IA et votre capacité à être recommandé.",
  },
  {
    question: "Combien de temps faut-il pour voir les premiers signaux ?",
    answer:
      "Les premiers signaux peuvent apparaître en quelques semaines, mais une vraie stratégie SEO / GEO se construit sur plusieurs mois. Il faut travailler les contenus, les sources, la structure du site et le suivi des requêtes.",
  },
];

const hospitalityItems: FaqItem[] = [
  {
    question: "Pourquoi le GEO est-il important pour les hôtels ?",
    answer:
      "Parce que les voyageurs utilisent déjà ChatGPT, Gemini ou Google AI Overviews pour choisir un hôtel, comparer des établissements ou préparer un séjour. Si votre hôtel n’est pas cité, un concurrent peut récupérer la réservation.",
  },
  {
    question: "Le GEO peut-il aider les réservations directes ?",
    answer:
      "Oui, c’est un des objectifs. Plus votre hôtel est visible sur Google et dans les réponses IA, plus vous pouvez orienter la demande vers votre site officiel et réduire votre dépendance aux OTA comme Booking ou Expedia.",
  },
  {
    question: "Le GEO peut-il réduire ma dépendance à Booking et aux OTA ?",
    answer:
      "Le GEO ne supprime pas les OTA, mais il aide à développer un canal de visibilité plus direct. En travaillant votre site, vos contenus, vos avis, vos sources locales et votre présence IA, vous augmentez vos chances d’être trouvé avant que le voyageur passe par une plateforme.",
  },
  {
    question: "Un petit hôtel indépendant peut-il faire du GEO ?",
    answer:
      "Oui. Un hôtel indépendant peut se différencier avec des contenus précis, des avis solides, une fiche Google Business Profile optimisée, des sources fiables et des réponses claires aux requêtes voyageurs.",
  },
  {
    question: "Quelles requêtes testez-vous pour un hôtel ?",
    answer:
      "Nous testons des requêtes comme « meilleur hôtel avec spa à Nantes », « hôtel pour séminaire à Lyon », « hôtel familial proche plage », « hôtel centre-ville avec parking » ou « hôtel à réserver en direct ».",
  },
];

const pulseoItems: FaqItem[] = [
  {
    question: "Qui est PulseoAI ?",
    answer:
      "PulseoAI est une agence SEO / GEO basée à Nantes. Nous aidons les entreprises, hôtels, restaurants, commerces, PME et marques e-commerce à gagner en visibilité sur Google et dans les moteurs IA.",
  },
  {
    question: "Pourquoi choisir PulseoAI plutôt qu’une agence SEO classique ?",
    answer:
      "Parce que nous travaillons à la fois le SEO classique et la visibilité dans les réponses IA. Notre approche ne se limite pas aux positions Google : nous analysons aussi les prompts, les citations, les sources utilisées et les concurrents recommandés par les moteurs IA.",
  },
  {
    question: "Travaillez-vous seulement avec les hôtels ?",
    answer:
      "Non. L’hôtellerie est un secteur fort pour PulseoAI, mais nous accompagnons aussi les restaurants, commerces, services, PME, entreprises B2B et marques e-commerce.",
  },
  {
    question: "Comment démarrer avec PulseoAI ?",
    answer:
      "Le plus simple est de demander un audit. Nous analysons votre visibilité actuelle, vos requêtes prioritaires, vos concurrents cités et les premières actions à mettre en place.",
  },
];

const pricingItems: FaqItem[] = [
  {
    question: "Combien coûte une stratégie SEO / GEO ?",
    answer:
      "Le budget dépend de votre marché, de votre site, de vos objectifs et du niveau d’accompagnement souhaité. L’audit permet d’identifier les priorités avant de proposer une stratégie adaptée.",
  },
  {
    question: "Quelle est la durée d’un accompagnement GEO ?",
    answer:
      "Le SEO / GEO se travaille sur plusieurs mois. Les moteurs IA ont besoin de signaux cohérents, de contenus structurés et de sources fiables. Un accompagnement mensuel permet de construire cette progression.",
  },
  {
    question: "Est-ce adapté aux petites entreprises ?",
    answer:
      "Oui. Les petites entreprises peuvent obtenir des résultats intéressants en ciblant des requêtes précises, locales ou sectorielles, plutôt que d’essayer de rivaliser sur des mots-clés trop larges.",
  },
  {
    question: "Est-ce réservé aux grandes marques ?",
    answer:
      "Non. Les moteurs IA peuvent recommander des PME, hôtels indépendants, commerces ou services locaux si les informations disponibles sont claires, fiables et pertinentes.",
  },
];

const faqSections: FaqSectionData[] = [
  {
    pill: "COMPRENDRE",
    title: "Comprendre le SEO / GEO en quelques questions.",
    items: baseItems,
  },
  {
    pill: "VISIBILITÉ IA",
    title: "Être cité dans les réponses IA, ça se travaille.",
    items: visibilityItems,
  },
  {
    pill: "AUDIT SEO / GEO",
    title: "Mesurer avant d’optimiser.",
    items: auditItems,
  },
  {
    pill: "GEO HÔTELLERIE",
    title: "Questions fréquentes sur le GEO pour hôtels.",
    items: hospitalityItems,
  },
  {
    pill: "PRIX",
    title: "Budget, durée et engagement.",
    items: pricingItems,
  },
];

const pulseoCards = [
  {
    icon: FileSearch,
    title: "Audit initial",
    text: "Nous testons votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
  },
  {
    icon: Compass,
    title: "Plan d’action",
    text: "Nous identifions les pages, contenus, sources et requêtes prioritaires pour améliorer votre présence.",
  },
  {
    icon: Bot,
    title: "Mise en place",
    text: "Nous optimisons votre site, vos contenus et vos signaux pour aider les moteurs IA à mieux vous comprendre.",
  },
  {
    icon: Clock3,
    title: "Suivi mensuel",
    text: "Nous suivons vos citations, vos concurrents, vos sources et l’évolution de votre visibilité.",
  },
];

const allFaqItems = [
  ...baseItems,
  ...visibilityItems,
  ...auditItems,
  ...hospitalityItems,
  ...pulseoItems,
  ...pricingItems,
];

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
      name: "FAQ",
      item: "https://www.pulseoai.fr/faq",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

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

function FaqItemCard({ question, answer }: FaqItem) {
  return (
    <details className="group rounded-[22px] border border-[#DFE7F3] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:px-5">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <span className="pr-2 text-[15px] font-semibold tracking-[-0.02em] text-navy sm:text-[16px]">
          {question}
        </span>
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#DCE5F6] bg-[#F8FAFF] text-cyan transition-transform group-open:rotate-180">
          <ChevronDown className="size-4" />
        </span>
      </summary>
      <p className="mt-4 max-w-[900px] text-[15px] leading-7 text-navy/64">{answer}</p>
    </details>
  );
}

function FaqSection({ pill, title, intro, items }: FaqSectionData) {
  return (
    <section className="border-t border-[#EDF1F7] py-14 lg:py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="max-w-[760px]">
          <Eyebrow>{pill}</Eyebrow>
          <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-[700px] text-[16px] leading-7 text-navy/62">{intro}</p>
          ) : null}
        </div>
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <FaqItemCard key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PulseoCard({
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
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-navy">{title}</h3>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-[14px] bg-[#EEF3FF]">
          <Icon className="size-4 text-cyan" />
        </div>
      </div>
      <p className="mt-3 text-[14px] leading-6 text-navy/62">{text}</p>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
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
              <li className="font-medium text-navy">FAQ</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:gap-12">
            <div className="max-w-[680px]">
              <Eyebrow>FAQ SEO / GEO</Eyebrow>
              <h1 className="mt-5 text-[30px] font-semibold leading-[1.04] tracking-[-0.05em] text-navy sm:text-[48px]">
                Questions fréquentes sur le <span className="text-cyan">SEO, le GEO</span> et la{" "}
                <span className="text-cyan">visibilité IA</span>.
              </h1>
              <p className="mt-5 max-w-[620px] text-[16px] leading-7 text-navy/62">
                Tout ce qu’il faut comprendre pour rendre votre entreprise visible sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.
              </p>
              <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-7 text-navy">
                Des réponses simples, sans jargon, pour comprendre comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.
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
                <HeroChecklist label="Google + IA" />
                <HeroChecklist label="Prompts clients" />
                <HeroChecklist label="Citations IA" />
                <HeroChecklist label="Sources citées" />
              </div>
            </div>

            <div className="rounded-[30px] border border-[#DEE6F3] bg-white p-5 shadow-[0_20px_46px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">
                    Réponse courte
                  </p>
                  <h2 className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-navy">
                    Le GEO remplace-t-il le SEO ?
                  </h2>
                </div>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[14px] bg-[#EEF3FF]">
                  <Bot className="size-4.5 text-cyan" />
                </div>
              </div>

              <div className="mt-5 rounded-[22px] border border-[#E6EBF5] bg-[#F7F9FD] px-4 py-4">
                <p className="text-[14px] leading-7 text-navy/74">
                  Non. Le SEO aide votre entreprise à être trouvée sur Google. Le GEO aide votre marque à être citée dans les réponses IA. Les deux se complètent.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {["Google", "ChatGPT", "Gemini", "Claude", "Perplexity", "AI Overviews"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#DCE4F4] bg-[#FBFCFF] px-3 py-1.5 text-[12px] font-medium text-navy/62"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-6 rounded-[22px] border border-[#DDE6F8] bg-[linear-gradient(180deg,#F6F9FF_0%,#FCFDFF_100%)] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-[14px] bg-white shadow-sm">
                    <LineChart className="size-4 text-cyan" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-navy">Ce que PulseoAI mesure</p>
                    <p className="text-[13px] text-navy/56">
                      Visibilité Google, citations IA, concurrents cités et requêtes prioritaires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {faqSections.slice(0, 3).map((section) => (
        <FaqSection key={section.title} {...section} />
      ))}

      <section className="border-t border-[#EDF1F7] py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[760px]">
            <Eyebrow>PULSEOAI</Eyebrow>
            <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Comment PulseoAI accompagne votre visibilité SEO / GEO.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pulseoCards.map((card) => (
              <PulseoCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {pulseoItems.map((item) => (
              <FaqItemCard key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      {faqSections.slice(3).map((section) => (
        <FaqSection key={section.title} {...section} />
      ))}

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="overflow-hidden rounded-[34px] bg-navy p-6 text-white shadow-[0_30px_70px_rgba(11,15,30,0.16)] sm:p-8 lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
              <div className="max-w-[620px]">
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76">
                  AUDIT SEO / GEO
                </span>
                <h2 className="mt-5 text-[30px] font-semibold tracking-[-0.05em] text-white sm:text-[38px]">
                  Votre entreprise est-elle visible là où vos clients posent leurs questions ?
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
                  "Requêtes clients testées",
                  "Concurrents identifiés",
                  "Sources analysées",
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
