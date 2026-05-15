import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, blogTopics, featuredPrimary, featuredSecondary, gridPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog SEO / GEO | Guides référencement IA et visibilité Google",
  description:
    "Blog SEO / GEO de PulseoAI. Guides, analyses et ressources sur le référencement IA, la visibilité Google, ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, llms.txt et schema.org.",
  openGraph: {
    title: "Blog SEO / GEO | Guides référencement IA et visibilité Google",
    description:
      "Blog SEO / GEO de PulseoAI. Guides, analyses et ressources sur le référencement IA, la visibilité Google, ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, llms.txt et schema.org.",
    url: "https://www.pulseoai.fr/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – Blog SEO / GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog SEO / GEO | Guides référencement IA et visibilité Google",
    description:
      "Blog SEO / GEO de PulseoAI. Guides, analyses et ressources sur le référencement IA, la visibilité Google, ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, llms.txt et schema.org.",
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

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog SEO / GEO PulseoAI",
  description:
    "Guides SEO / GEO, référencement IA, visibilité Google, ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, llms.txt et schema.org.",
  url: "https://www.pulseoai.fr/blog",
  publisher: {
    "@type": "Organization",
    name: "PulseoAI",
    url: "https://www.pulseoai.fr",
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://www.pulseoai.fr/blog/${post.slug}`,
  })),
};

const filterChips = [
  "Tous",
  "SEO / GEO",
  "ChatGPT",
  "Google AI",
  "Hôtellerie",
  "Commerce local",
  "E-commerce",
  "Technique",
];

const heroTags = [
  "SEO / GEO",
  "Visibilité IA",
  "ChatGPT",
  "Google AI Overviews",
  "Hôtellerie",
  "PME",
  "E-commerce",
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
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
              <li className="font-medium text-navy">Blog</li>
            </ol>
          </nav>

          <div className="mx-auto mt-8 max-w-[860px] text-center">
            <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
              BLOG SEO / GEO
            </span>
            <h1 className="mt-5 text-[32px] font-semibold leading-[1.04] tracking-[-0.05em] text-navy sm:text-[50px]">
              Guides <span className="text-cyan">SEO / GEO</span> pour devenir visible sur <span className="text-cyan">Google et dans les IA</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-7 text-navy/62">
              Articles, guides pratiques et analyses pour comprendre le référencement IA, améliorer votre visibilité sur ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, et renforcer votre présence organique.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
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

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#DDE5F3] bg-white px-3 py-1.5 text-[12px] font-medium text-navy/64 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
                À la une
              </span>
              <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
                Les guides à lire pour comprendre le SEO, le GEO et la visibilité IA.
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Link
              href={`/blog/${featuredPrimary.slug}`}
              className="group rounded-[30px] border border-[#DCE5F3] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFCFF_100%)] p-5 shadow-[0_16px_36px_rgba(15,23,42,0.05)] transition-all hover:border-cyan/30 hover:shadow-[0_20px_42px_rgba(15,23,42,0.07)] sm:p-6"
            >
              <span className="inline-flex items-center rounded-full border border-[#D6E2FB] bg-[#F4F8FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
                {featuredPrimary.category}
              </span>
                <h3 className="mt-5 max-w-[680px] text-[26px] font-semibold leading-[1.1] tracking-[-0.04em] text-navy transition-colors group-hover:text-cyan sm:text-[30px]">
                {featuredPrimary.title}
              </h3>
              <p className="mt-4 max-w-[680px] text-[15px] leading-7 text-navy/62">
                {featuredPrimary.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-navy/48">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {featuredPrimary.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {featuredPrimary.readingTime}
                </span>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-cyan">
                Lire le guide
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <div className="grid gap-5">
              {featuredSecondary.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group rounded-[26px] border border-[#DCE5F3] bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] transition-all hover:border-cyan/30 hover:shadow-[0_18px_34px_rgba(15,23,42,0.06)]"
                >
                  <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-[#F8FAFF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
                    {article.category}
                  </span>
                  <h3 className="mt-4 text-[22px] font-semibold leading-[1.14] tracking-[-0.04em] text-navy transition-colors group-hover:text-cyan">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-navy/62">{article.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 text-[13px] text-navy/48">
                    <span>{article.readingTime}</span>
                    <span className="inline-flex items-center gap-2 font-semibold text-cyan">
                      Lire le guide
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EDF1F7] bg-[#FBFCFF] py-8">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-2 px-6">
          {filterChips.map((chip, index) => (
            <span
              key={chip}
              className={`rounded-full border px-3 py-1.5 text-[13px] font-medium ${
                index === 0
                  ? "border-[#D4E0FB] bg-[#F4F8FF] text-cyan"
                  : "border-[#E1E7F2] bg-white text-navy/62"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {gridPosts.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-[24px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all hover:border-cyan/30 hover:shadow-[0_16px_32px_rgba(15,23,42,0.06)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-[12px] text-navy/46">
                  <span>{article.date}</span>
                  <span className="rounded-full border border-[#DDE5F4] bg-[#F8FAFF] px-2.5 py-1 font-medium text-cyan">
                    {article.category}
                  </span>
                </div>
                <h3 className="mt-4 text-[20px] font-semibold leading-[1.15] tracking-[-0.035em] text-navy transition-colors group-hover:text-cyan">
                  {article.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-navy/62">{article.description}</p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-[13px] text-navy/48">{article.readingTime}</span>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-cyan">
                    Lire l’article
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#EDF1F7] bg-[#FBFCFF] py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="max-w-[760px]">
            <h2 className="text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Explorer par sujet
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blogTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-[24px] border border-[#DEE6F3] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all hover:border-cyan/30 hover:shadow-[0_16px_32px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-navy transition-colors group-hover:text-cyan">
                  {topic.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-navy/62">{topic.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-cyan">
                  Explorer
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="rounded-[30px] border border-[#DCE5F4] bg-[linear-gradient(180deg,#F6F9FF_0%,#FFFFFF_100%)] p-5 shadow-[0_16px_34px_rgba(15,23,42,0.04)] sm:p-7">
            <span className="inline-flex items-center rounded-full border border-[#D6E2FB] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
              RESSOURCES
            </span>
            <h2 className="mt-5 text-[28px] font-semibold tracking-[-0.045em] text-navy sm:text-[34px]">
              Un blog pour rendre le SEO / GEO plus clair.
            </h2>
            <p className="mt-4 max-w-[860px] text-[16px] leading-7 text-navy/62">
              Le référencement IA est encore nouveau, souvent flou et parfois mal expliqué. Ce blog sert à rendre le sujet concret : comment les moteurs IA choisissent leurs sources, pourquoi certaines marques sont citées, comment mesurer sa visibilité IA et quelles actions prioriser.
            </p>
            <p className="mt-4 max-w-[860px] text-[16px] leading-7 text-navy/62">
              Notre objectif est simple : aider les entreprises à comprendre ce qui change dans la recherche, sans jargon inutile, avec des guides actionnables.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="overflow-hidden rounded-[34px] bg-navy p-5 text-white shadow-[0_30px_70px_rgba(11,15,30,0.16)] sm:p-8 lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
              <div className="max-w-[620px]">
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76">
                  AGENCE SEO / GEO
                </span>
                <h2 className="mt-5 text-[30px] font-semibold tracking-[-0.05em] text-white sm:text-[38px]">
                  Vous voulez savoir si votre entreprise apparaît dans les réponses IA ?
                </h2>
                <p className="mt-4 max-w-[580px] text-[15px] leading-7 text-white/68">
                  Nous analysons votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis nous vous montrons les requêtes, les concurrents et les sources qui comptent.
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
