import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogArticle } from "@/lib/blog-posts";
import { QuickAnswer } from "@/components/quick-answer";
import { RelatedPosts } from "@/components/related-posts";

export function BlogArticleTemplate({ article }: { article: BlogArticle }) {
  const estimatedWordCount = countWords([
    article.title,
    article.description,
    article.intro,
    article.quickAnswer?.question,
    article.quickAnswer?.answer,
    article.bodyCta?.intro,
    article.bodyCta?.linkLabel,
    article.bodyCta?.outro,
    ...(article.contextualLinks ?? []).map((item) => item.label),
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.subsections?.flatMap((subsection) => [
        subsection.title,
        ...subsection.paragraphs,
        ...(subsection.bullets ?? []),
      ]) ?? []),
    ]),
  ]);

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: isoDate(article.date),
    dateModified: isoDate(article.date),
    inLanguage: "fr-FR",
    url: `https://www.pulseoai.fr/blog/${article.slug}`,
    articleSection: article.articleSection ?? article.category,
    keywords: article.keywords,
    author: {
      "@type": "Person",
      name: "Romain Duclos",
      jobTitle: "Fondateur, stratégie SEO / GEO",
      url: "https://www.pulseoai.fr/a-propos",
    },
    publisher: {
      "@type": "Organization",
      name: "PulseoAI",
      url: "https://www.pulseoai.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://www.pulseoai.fr/logo.png",
      },
    },
    image: "https://www.pulseoai.fr/og-image.png",
    description: article.description,
    wordCount: estimatedWordCount,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".quick-answer"],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.pulseoai.fr/blog/${article.slug}`,
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
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.pulseoai.fr/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="bg-white">
        <div className="border-b border-[#E8EDF7] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFD_100%)]">
          <div className="mx-auto max-w-[980px] px-6 pb-10 pt-7 lg:pb-14 lg:pt-10">
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
                <li>
                  <Link href="/blog" className="transition-colors hover:text-cyan">
                    Blog
                  </Link>
                </li>
                <li>
                  <ChevronRight className="size-3.5" />
                </li>
                <li className="font-medium text-navy">Article</li>
              </ol>
            </nav>

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-cyan transition-colors hover:text-cyan-dark"
            >
              <ArrowLeft className="size-4" />
              Retour au blog
            </Link>

            <div className="mt-5 max-w-[760px]">
              <span className="inline-flex items-center rounded-full border border-[#D8E1F3] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan shadow-sm">
                {article.category}
              </span>
              <h1 className="mt-5 text-[30px] font-semibold leading-[1.05] tracking-[-0.05em] text-navy sm:text-[46px]">
                {article.title}
              </h1>
              <p className="mt-4 text-[16px] leading-7 text-navy/64 sm:mt-5 sm:text-[17px]">{article.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy/52">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {article.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="size-4" />
                PulseoAI
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[820px] px-6 py-10 lg:py-14">
          <div className="rounded-[28px] border border-[#DEE6F3] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFCFF_100%)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] sm:p-6">
            <p className="text-[16px] font-medium leading-7 text-navy/86 sm:text-[18px] sm:leading-8">{article.intro}</p>
          </div>

          {article.quickAnswer ? (
            <div className="quick-answer">
              <QuickAnswer question={article.quickAnswer.question} answer={article.quickAnswer.answer} />
            </div>
          ) : null}

          {article.contextualLinks?.length ? (
            <div className="mt-6 rounded-[22px] border border-[#E3EAF5] bg-white px-5 py-4 text-[14px] leading-6 text-navy/66">
              <span className="font-semibold text-navy">À lire aussi :</span>{" "}
              {article.contextualLinks.map((item, index) => (
                <span key={item.href}>
                  <Link href={item.href} className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                    {item.label}
                  </Link>
                  {index < article.contextualLinks!.length - 1 ? ", " : "."}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
            {article.sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="text-[22px] font-semibold tracking-[-0.035em] text-navy sm:text-[24px]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-navy/68 sm:text-[16px] sm:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="space-y-2 pl-5 text-[15px] leading-7 text-navy/68">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="list-disc marker:text-cyan">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {index === 1 && article.bodyCta ? (
                    <p className="rounded-[20px] border border-[#DDE7F4] bg-[#F8FBFF] px-4 py-4 text-[15px] leading-7 text-navy/72">
                      {article.bodyCta.intro}{" "}
                      <Link href={article.bodyCta.href} className="font-semibold text-cyan transition-colors hover:text-cyan-dark">
                        {article.bodyCta.linkLabel}
                      </Link>
                      {article.bodyCta.outro ?? ""}
                    </p>
                  ) : null}
                  {section.subsections?.map((subsection) => (
                    <div key={subsection.title} className="pt-2">
                      <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-navy sm:text-[19px]">
                        {subsection.title}
                      </h3>
                      <div className="mt-3 space-y-4 text-[15px] leading-7 text-navy/68 sm:text-[16px] sm:leading-8">
                        {subsection.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {subsection.bullets?.length ? (
                          <ul className="space-y-2 pl-5 text-[15px] leading-7 text-navy/68">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet} className="list-disc marker:text-cyan">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <RelatedPosts currentSlug={article.slug} explicitSlugs={article.relatedSlugs} />
        </div>

        <section className="bg-white pb-14">
          <div className="mx-auto max-w-[980px] px-6">
            <div className="overflow-hidden rounded-[32px] bg-navy p-5 text-white shadow-[0_26px_60px_rgba(11,15,30,0.16)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.88fr_0.72fr] lg:items-center">
                <div className="max-w-[560px]">
                  <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/76">
                    AGENCE SEO / GEO
                  </span>
                  <h2 className="mt-5 text-[26px] font-semibold tracking-[-0.05em] text-white sm:text-[34px]">
                    Vous voulez savoir si votre entreprise est citée par les IA ?
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-white/68">
                    Nous analysons votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis nous vous montrons les requêtes, les concurrents et les sources qui comptent.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                    "Google + IA",
                    "Concurrents identifiés",
                    "Plan d’action priorisé",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm"
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
      </article>
    </>
  );
}

function isoDate(date: string) {
  const months: Record<string, string> = {
    janvier: "01",
    février: "02",
    mars: "03",
    avril: "04",
    mai: "05",
    juin: "06",
    juillet: "07",
    août: "08",
    septembre: "09",
    octobre: "10",
    novembre: "11",
    décembre: "12",
  };

  const [day, month, year] = date.split(" ");
  return `${year}-${months[month]}-${day.padStart(2, "0")}`;
}

function countWords(values: Array<string | undefined>) {
  return values
    .filter((value): value is string => Boolean(value))
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
