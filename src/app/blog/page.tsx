import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog GEO : référencement IA pour entreprises",
  description:
    "Articles et guides GEO pour hôtels, restaurants, commerces et PME. Stratégies concrètes de visibilité IA.",
  openGraph: {
    title: "Blog GEO : référencement IA pour entreprises",
    description:
      "Articles et guides GEO pour hôtels, restaurants, commerces et PME. Stratégies concrètes de visibilité IA.",
    url: "https://www.pulseoai.fr/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – Blog GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog GEO : référencement IA pour entreprises",
    description:
      "Articles et guides GEO pour hôtels, restaurants, commerces et PME. Stratégies concrètes de visibilité IA.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/blog" },
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
  ],
};

const articles = [
  {
    title:
      "GEO en 2026 : pourquoi votre entreprise ne peut plus ignorer les moteurs IA",
    date: "15 avril 2026",
    slug: "geo-2026-pourquoi-votre-entreprise-ne-peut-plus-ignorer-les-moteurs-ia",
    excerpt:
      "ChatGPT compte 2,8 milliards d\u2019utilisateurs mensuels. Google affiche des r\u00e9ponses IA sur 25\u00a0% des recherches. Les entreprises qui n\u2019investissent pas dans le GEO maintenant seront invisibles dans 12 mois.",
  },
  {
    title:
      "Schema.org pour le GEO : le guide complet du balisage structur\u00e9",
    date: "12 avril 2026",
    slug: "schema-org-guide-complet-geo",
    excerpt:
      "Hotel, Restaurant, LocalBusiness\u2026 Quels types Schema.org utiliser et comment les impl\u00e9menter pour que les moteurs IA comprennent et recommandent votre entreprise.",
  },
  {
    title:
      "GEO pour les commerces et PME : visibilit\u00e9 locale sur les moteurs IA",
    date: "10 avril 2026",
    slug: "geo-commerces-pme-visibilite-locale",
    excerpt:
      "Boulangeries, coiffeurs, artisans, cabinets\u2026 Comment les commerces de proximit\u00e9 et PME peuvent appara\u00eetre dans les r\u00e9ponses de ChatGPT et gagner des clients.",
  },
  {
    title:
      "GEO pour les restaurants : le guide complet pour appara\u00eetre sur ChatGPT",
    date: "8 avril 2026",
    slug: "geo-restaurants-guide-visibilite-ia",
    excerpt:
      "Comment rendre votre restaurant visible sur ChatGPT, Claude et Gemini. Les 5 actions GEO concr\u00e8tes pour capter des clients via les moteurs de recherche IA.",
  },
  {
    title:
      "llms.txt : le guide pratique pour rendre votre site visible sur les IA",
    date: "5 avril 2026",
    slug: "llms-txt-guide-pratique",
    excerpt:
      "Le fichier llms.txt est aux LLM ce que robots.txt est aux moteurs de recherche. D\u00e9couvrez comment le cr\u00e9er, le structurer et l\u2019utiliser pour maximiser votre visibilit\u00e9 IA.",
  },
  {
    title:
      "GEO pour les h\u00f4tels : le guide complet pour appara\u00eetre sur ChatGPT en 2026",
    date: "2 avril 2026",
    slug: "geo-hotels-guide-complet",
    excerpt:
      "Tout ce que vous devez savoir pour positionner votre h\u00f4tel dans les r\u00e9ponses de ChatGPT, Gemini et Claude. De la th\u00e9orie aux actions concr\u00e8tes, ce guide couvre chaque \u00e9tape du r\u00e9f\u00e9rencement IA pour l\u2019h\u00f4tellerie.",
  },
  {
    title:
      "Pourquoi votre h\u00f4tel est invisible sur ChatGPT (et comment y rem\u00e9dier)",
    date: "28 mars 2026",
    slug: "hotel-invisible-chatgpt",
    excerpt:
      "Vous avez cherch\u00e9 votre h\u00f4tel sur ChatGPT et il n\u2019appara\u00eet nulle part ? Vous n\u2019\u00eates pas seul. D\u00e9couvrez les 5 causes principales de cette invisibilit\u00e9 et les solutions pour y rem\u00e9dier rapidement.",
  },
  {
    title:
      "Booking vs r\u00e9servations directes : comment le GEO change la donne pour les h\u00f4teliers",
    date: "20 mars 2026",
    slug: "booking-vs-reservations-directes-geo",
    excerpt:
      "Les commissions OTA p\u00e8sent lourd sur la rentabilit\u00e9 des h\u00f4tels. Le GEO offre une alternative concr\u00e8te pour g\u00e9n\u00e9rer des r\u00e9servations directes via les moteurs de recherche IA, sans passer par les plateformes.",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1100px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">
              Blog
            </span>
            <h1 className="text-[26px] font-bold tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              Blog GEO : guides et strat&eacute;gies de visibilit&eacute; IA
            </h1>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Articles, guides pratiques et analyses pour faire
              appara&icirc;tre votre entreprise sur ChatGPT, Gemini et Claude.
              H&ocirc;tels, restaurants, commerces et PME.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-24 lg:py-28">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition hover:shadow-lg hover:border-cyan/30"
              >
                <div className="flex items-center gap-2 text-sm text-navy/50">
                  <Calendar className="size-4" />
                  <time>{article.date}</time>
                </div>

                <h2 className="mt-3 text-lg sm:text-xl font-semibold text-navy leading-snug group-hover:text-cyan transition-colors">
                  {article.title}
                </h2>

                <p className="mt-3 flex-1 text-navy/60 leading-relaxed">
                  {article.excerpt}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
                  Lire l&apos;article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
