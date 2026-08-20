import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ChevronRight, Clock, User } from "lucide-react";
import type { BlogArticle } from "@/lib/blog-posts";
import { getArticleSchemaEnhancements } from "@/lib/article-metadata";
import { QuickAnswer } from "@/components/quick-answer";
import { RelatedPosts } from "@/components/related-posts";
import { ContactForm } from "@/components/contact-form";
import { ARTICLE_PAPER_CSS } from "@/components/article-paper";



/** Mots-cles surlignes dans le titre, du plus long au plus court. */
const TITLE_KEYWORDS = [
  "Google AI Overviews",
  "réservations directes",
  "moteurs de réponse",
  "recherche vocale",
  "Schema.org",
  "schema.org",
  "llms.txt",
  "Perplexity",
  "TripAdvisor",
  "e-commerce",
  "marketplace",
  "ChatGPT",
  "Booking",
  "Gemini",
  "Claude",
  "hôtel",
  "GEO",
  "SEO",
  "PME",
  "IA",
];

/** Surligne le premier mot-cle trouve dans le titre, sans en changer le texte. */
function MarkedArticleTitle({ title }: { title: string }) {
  for (const word of TITLE_KEYWORDS) {
    const match = new RegExp(`(^|[^\\p{L}])(${word})(?![\\p{L}])`, "u").exec(title);
    if (match && match.index !== undefined) {
      const start = match.index + match[1].length;
      return (
        <>
          {title.slice(0, start)}
          <span className="ba-mark">{word}</span>
          {title.slice(start + word.length)}
        </>
      );
    }
  }
  return <>{title}</>;
}

export function BlogArticleTemplate({ article }: { article: BlogArticle }) {
  const articleSchemaEnhancements = getArticleSchemaEnhancements(article.slug);
  const estimatedWordCount = countWords([
    article.title,
    article.description,
    article.intro,
    article.quickAnswer?.question,
    article.quickAnswer?.answer,
    article.bodyCta?.intro,
    article.bodyCta?.linkLabel,
    article.bodyCta?.outro,
    article.faqTitle,
    ...(article.contextualLinks ?? []).map((item) => item.label),
    ...(article.faqItems?.flatMap((item) => [item.question, item.answer]) ?? []),
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
    dateModified: isoDate(article.dateModified ?? article.date),
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
    ...(articleSchemaEnhancements?.about ? { about: articleSchemaEnhancements.about } : {}),
    ...(articleSchemaEnhancements?.mentions ? { mentions: articleSchemaEnhancements.mentions } : {}),
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

  const faqJsonLd = article.faqItems?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

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
      {articleSchemaEnhancements?.howTo ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaEnhancements.howTo) }}
        />
      ) : null}
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <style>{ARTICLE_PAPER_CSS}</style>
      <article className="ba bg-white">
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
                <MarkedArticleTitle title={article.title} />
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
          <div className="ba-box rounded-[28px] border border-[#DEE6F3] p-5 sm:p-6">
            <p className="text-[16px] font-medium leading-7 text-navy/86 sm:text-[18px] sm:leading-8">{article.intro}</p>
          </div>

          {article.quickAnswer ? (
            <div className="quick-answer">
              <QuickAnswer question={article.quickAnswer.question} answer={article.quickAnswer.answer} />
            </div>
          ) : null}

          {article.contextualLinks?.length ? (
            <div className="ba-box ba-box-light mt-6 rounded-[22px] border border-[#E3EAF5] px-5 py-4 text-[14px] leading-6 text-navy/66">
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
                    <p className="ba-box ba-box-light rounded-[20px] border border-[#DDE7F4] px-4 py-4 text-[15px] leading-7 text-navy/72">
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

          {article.faqItems?.length ? (
            <section className="ba-faq mt-10 sm:mt-12">
              <h2 className="text-[22px] font-semibold tracking-[-0.035em] text-navy sm:text-[24px]">
                {article.faqTitle ?? "Questions fréquentes"}
              </h2>
              <div className="mt-5 space-y-3">
                {article.faqItems.map((item) => (
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
            </section>
          ) : null}

          <RelatedPosts currentSlug={article.slug} explicitSlugs={article.relatedSlugs} />
        </div>

        <section className="ba-form-section">
          <div className="ba-form-head">
            <Image
              sizes="(max-width: 767px) 200px, 420px"
              src="/illustrations/VHl73R9s.png"
              alt="Mascotte lion qui invite à demander un audit"
              width={1536}
              height={1536}
              loading="lazy"
              className="ba-lion"
            />
            <h2>Vous voulez savoir si votre entreprise est citée par les IA ?</h2>
            <p>
              Nous analysons votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis nous vous montrons les requêtes, les concurrents et les sources qui comptent.
            </p>
          </div>

          <div className="ba-form-wrap">
            <ContactForm />
          </div>

          <p className="ba-form-links">
            <Link href="/offre">Découvrir notre offre</Link>
            <span aria-hidden> · </span>
            <Link href="/contact">Nous contacter</Link>
          </p>
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
