import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogPosts, blogTopics, featuredPrimary, featuredSecondary, gridPosts } from "@/lib/blog-posts";
import "@/styles/pages/blog.css";

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
  "Agents IA",
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


/** Couleur de cadre et de surlignage, en rotation sur les 7 pastels. */
const tone = (i: number) => `bl-c${(i % 7) + 1}`;

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

      {/* ---------------------------- HERO ---------------------------- */}
      <section className="bl bl-hero">
        <div className="bl-inner">
          <nav aria-label="Fil d'Ariane">
            <ol className="bl-crumb">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="bl-crumb-now">Blog</li>
            </ol>
          </nav>

          <span className="bl-eyebrow">BLOG SEO / GEO</span>
          <h1>
            Guides <span className="bl-m bl-m1">SEO / GEO</span> pour devenir visible sur{" "}
            <span className="bl-m bl-m2">Google et dans les IA</span>.
          </h1>
          <p className="bl-lead">
            Articles, guides pratiques et analyses pour comprendre le référencement IA, améliorer votre visibilité sur ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, et renforcer votre présence organique.
          </p>

          <div className="bl-tags">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="bl-cta">
            <Link href="/contact" className="bl-btn bl-btn-1">
              Obtenir un audit
            </Link>
            <Link href="/offre" className="bl-btn bl-btn-2">
              Découvrir notre offre
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------- À LA UNE ------------------------- */}
      <section className="bl">
        <div className="bl-inner">
          <span className="bl-eyebrow">À la une</span>
          <h2>
            Les guides à lire pour comprendre le SEO, le GEO et la{" "}
            <span className="bl-m bl-m3">visibilité IA</span>.
          </h2>
        </div>

        <div className="bl-grid bl-featured">
          <Link href={`/blog/${featuredPrimary.slug}`} className="bl-card bl-hero-card bl-c1">
            <span className="bl-cat">{featuredPrimary.category}</span>
            <h3>
              <span>{featuredPrimary.title}</span>
            </h3>
            <p>{featuredPrimary.description}</p>
            <div className="bl-meta">
              <span>
                {featuredPrimary.date} · {featuredPrimary.readingTime}
              </span>
              <span className="bl-read">Lire le guide</span>
            </div>
          </Link>

          {featuredSecondary.map((article, i) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className={`bl-card ${tone(i + 1)}`}>
              <span className="bl-cat">{article.category}</span>
              <h3>
                <span>{article.title}</span>
              </h3>
              <p>{article.description}</p>
              <div className="bl-meta">
                <span>{article.readingTime}</span>
                <span className="bl-read">Lire le guide</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------------------- FILTRES -------------------------- */}
      <section className="bl" style={{ paddingTop: 0, paddingBottom: 24 }}>
        <div className="bl-filters">
          {filterChips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </section>

      {/* ------------------------- TOUS LES ARTICLES ------------------- */}
      <section className="bl" style={{ paddingTop: 24 }}>
        <div className="bl-grid bl-grid-3" style={{ marginTop: 0 }}>
          {gridPosts.map((article, i) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className={`bl-card ${tone(i)}`}>
              <span className="bl-cat">
                {article.date} · {article.category}
              </span>
              <h3>
                <span>{article.title}</span>
              </h3>
              <p>{article.description}</p>
              <div className="bl-meta">
                <span>{article.readingTime}</span>
                <span className="bl-read">Lire l’article</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------ EXPLORER PAR SUJET ------------------- */}
      <section className="bl">
        <div className="bl-inner">
          <h2>
            <span className="bl-m bl-m4">Explorer</span> par sujet
          </h2>
        </div>

        <div className="bl-grid bl-grid-3">
          {blogTopics.map((topic, i) => (
            <Link key={topic.title} href={topic.href} className={`bl-card ${tone(i)}`}>
              <h3>
                <span>{topic.title}</span>
              </h3>
              <p>{topic.description}</p>
              <div className="bl-meta">
                <span />
                <span className="bl-read">Explorer</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------------------- RESSOURCES ----------------------- */}
      <section className="bl">
        <div className="bl-inner">
          <span className="bl-eyebrow">RESSOURCES</span>
          <h2>
            Un blog pour rendre le <span className="bl-m bl-m2">SEO / GEO</span> plus clair.
          </h2>
        </div>

        <div className="bl-box">
          <p>
            Le référencement IA est encore nouveau, souvent flou et parfois mal expliqué. Ce blog sert à rendre le sujet concret : comment les moteurs IA choisissent leurs sources, pourquoi certaines marques sont citées, comment mesurer sa visibilité IA et quelles actions prioriser.
          </p>
          <p>
            Notre objectif est simple : aider les entreprises à comprendre ce qui change dans la recherche, sans jargon inutile, avec des guides actionnables.
          </p>
        </div>
      </section>

      {/* ---------------------------- BLOC FINAL ----------------------- */}
      <section className="bl">
        <div className="bl-inner">
          <span className="bl-eyebrow">AGENCE SEO / GEO</span>
          <h2>
            Vous voulez savoir si votre entreprise apparaît dans les{" "}
            <span className="bl-m bl-m1">réponses IA</span> ?
          </h2>
          <p className="bl-lead">
            Nous analysons votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis nous vous montrons les requêtes, les concurrents et les sources qui comptent.
          </p>

          <div className="bl-cta">
            <Link href="/contact" className="bl-btn bl-btn-1">
              Obtenir un audit
            </Link>
            <Link href="/offre" className="bl-btn bl-btn-2">
              Découvrir notre offre
            </Link>
          </div>
        </div>

        <div className="bl-points">
          {[
            "Audit SEO / GEO",
            "Visibilité Google + IA",
            "Concurrents identifiés",
            "Plan d’action priorisé",
          ].map((item, i) => (
            <div key={item} className={`bl-p${i + 1}`}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
