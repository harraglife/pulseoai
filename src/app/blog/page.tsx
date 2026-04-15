import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog GEO hôtellerie",
  description:
    "Articles, guides et analyses sur le référencement IA pour les hôtels. Restez à jour sur les stratégies GEO qui fonctionnent.",
  openGraph: {
    title: "Blog GEO hôtellerie",
    description:
      "Articles, guides et analyses sur le référencement IA pour les hôtels. Restez à jour sur les stratégies GEO qui fonctionnent.",
    url: "https://www.pulseoai.fr/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog GEO hôtellerie",
    description:
      "Articles, guides et analyses sur le référencement IA pour les hôtels. Restez à jour sur les stratégies GEO qui fonctionnent.",
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
      "GEO pour les hôtels : le guide complet pour apparaître sur ChatGPT en 2026",
    date: "2 avril 2026",
    slug: "geo-hotels-guide-complet",
    excerpt:
      "Tout ce que vous devez savoir pour positionner votre hôtel dans les réponses de ChatGPT, Gemini et Claude. De la théorie aux actions concrètes, ce guide couvre chaque étape du référencement IA pour l\u2019hôtellerie.",
  },
  {
    title:
      "Pourquoi votre hôtel est invisible sur ChatGPT (et comment y remédier)",
    date: "28 mars 2026",
    slug: "hotel-invisible-chatgpt",
    excerpt:
      "Vous avez cherché votre hôtel sur ChatGPT et il n\u2019apparaît nulle part ? Vous n\u2019êtes pas seul. Découvrez les 5 causes principales de cette invisibilité et les solutions pour y remédier rapidement.",
  },
  {
    title:
      "Booking vs réservations directes : comment le GEO change la donne pour les hôteliers",
    date: "20 mars 2026",
    slug: "booking-vs-reservations-directes-geo",
    excerpt:
      "Les commissions OTA pèsent lourd sur la rentabilité des hôtels. Le GEO offre une alternative concrète pour générer des réservations directes via les moteurs de recherche IA, sans passer par les plateformes.",
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
              Tout savoir sur le GEO pour l&apos;h&ocirc;tellerie
            </h1>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Articles, guides et analyses pour comprendre le
              r&eacute;f&eacute;rencement IA et faire appara&icirc;tre votre
              h&ocirc;tel sur ChatGPT, Gemini et Claude.
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
