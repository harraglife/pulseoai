import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogPosts, blogTopics, featuredPrimary, featuredSecondary, gridPosts } from "@/lib/blog-posts";
import { BTN_PLEIN, BTN_CONTOUR, feutre, contourCrayon, contourLeger, PASTELS } from "@/lib/paper-da";

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

const CSS = `
/* ======================= PAGE BLOG, DIRECTION PAPIER ===================== */
.bl {
  position: relative;
  z-index: 1;
  /* fond transparent : le grain papier fixe (.th-grain) reste visible dessous */
  background: transparent;
  color: #111110;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 60px 24px 64px;
}
.bl-inner { max-width: 860px; margin: 0 auto; text-align: center; }

.bl h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2.9vw, 2.15rem);
  line-height: 1.14;
  letter-spacing: -0.028em;
  font-weight: 600;
  color: #111110;
  text-wrap: balance;
}
.bl-lead {
  margin: 20px auto 0;
  max-width: 60ch;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(17, 17, 16, 0.66);
}

/* libelle de section, conserve tel quel, juste rehabille */
.bl-eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(17, 17, 16, 0.5);
}

/* --- surlignage feutre --- */
.bl-m {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.24em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bl-m1 { background-image: ${feutre(PASTELS.peche)}; }
.bl-m2 { background-image: ${feutre(PASTELS.vertEau)}; }
.bl-m3 { background-image: ${feutre(PASTELS.bleu)}; }
.bl-m4 { background-image: ${feutre(PASTELS.jaune)}; }

/* ---------------------------- HERO ------------------------------------- */
.bl-hero { padding-top: 30px; }
.bl-crumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.84rem;
  color: rgba(17, 17, 16, 0.5);
  margin-bottom: 32px;
}
.bl-crumb a { color: rgba(17, 17, 16, 0.5); text-decoration: none; }
.bl-crumb a:hover { color: #111110; }
.bl-crumb-now { color: #111110; font-weight: 500; }
.bl h1 {
  margin: 0 auto;
  font-size: clamp(1.95rem, 4.4vw, 3.05rem);
  line-height: 1.08;
  letter-spacing: -0.038em;
  font-weight: 600;
  color: #111110;
  max-width: 22ch;
  text-wrap: balance;
}

/* pastilles de sujets */
.bl-tags {
  margin: 32px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 22px;
  max-width: 780px;
}
.bl-tags span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.58);
}
.bl-tags span::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.4);
}
.bl-filters span {
  position: relative;
  isolation: isolate;
  padding: 8px 15px;
  font-size: 0.83rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.76);
}
.bl-filters span::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 23, 0.38)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bl-filters {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 820px;
}

/* boutons crayon */
.bl-cta {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
}
.bl-btn {
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 26px;
  font-size: 0.96rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.16s ease;
}
.bl-btn::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bl-btn:hover { transform: translateY(-1.5px); }
.bl-btn-1 { color: #F4F3EF; }
.bl-btn-1::before { background-image: ${BTN_PLEIN}; }
.bl-btn-2 { color: #111110; }
.bl-btn-2::before { background-image: ${BTN_CONTOUR}; }

/* ------------------------- CARTES D'ARTICLES ---------------------------- */
.bl-grid {
  margin: 40px auto 0;
  display: grid;
  gap: 26px;
  max-width: 1060px;
  text-align: left;
}
@media (min-width: 700px) { .bl-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1020px) { .bl-grid-3 { grid-template-columns: repeat(3, 1fr); } }
.bl-featured { max-width: 1060px; }

.bl-card {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 26px;
  text-decoration: none;
  color: #111110;
  transition: transform 0.16s ease;
}
.bl-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bl-card:hover { transform: translateY(-2px); }
.bl-c1::before { background-image: ${contourCrayon("111110", 31)}; }
.bl-c2::before { background-image: ${contourCrayon("111110", 32)}; }
.bl-c3::before { background-image: ${contourCrayon("111110", 33)}; }
.bl-c4::before { background-image: ${contourCrayon("111110", 34)}; }
.bl-c5::before { background-image: ${contourCrayon("111110", 35)}; }
.bl-c6::before { background-image: ${contourCrayon("111110", 36)}; }
.bl-c7::before { background-image: ${contourCrayon("111110", 37)}; }

/* titre d'article surligne au feutre, pour se reperer d'un coup d'oeil */
.bl-card h3 {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.34;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #111110;
}
.bl-card h3 span {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.24em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bl-c1 h3 span { background-image: ${feutre(PASTELS.peche)}; }
.bl-c2 h3 span { background-image: ${feutre(PASTELS.vertEau)}; }
.bl-c3 h3 span { background-image: ${feutre(PASTELS.bleu)}; }
.bl-c4 h3 span { background-image: ${feutre(PASTELS.jaune)}; }
.bl-c5 h3 span { background-image: ${feutre(PASTELS.rose)}; }
.bl-c6 h3 span { background-image: ${feutre(PASTELS.lavande)}; }
.bl-c7 h3 span { background-image: ${feutre(PASTELS.pistache)}; }

.bl-cat {
  display: block;
  margin-bottom: 14px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(17, 17, 16, 0.5);
}
.bl-card p {
  margin: 16px 0 0;
  font-size: 0.89rem;
  line-height: 1.68;
  color: rgba(17, 17, 16, 0.82);
}
.bl-meta {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 18px;
  font-size: 0.8rem;
  color: rgba(17, 17, 16, 0.62);
}
.bl-read {
  font-size: 0.86rem;
  font-weight: 600;
  color: #111110;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
}
/* la carte a la une respire un peu plus */
.bl-hero-card h3 { font-size: clamp(1.15rem, 1.9vw, 1.5rem); }

/* ------------------------------ RESSOURCES ------------------------------ */
.bl-box {
  position: relative;
  isolation: isolate;
  margin: 36px auto 0;
  max-width: 880px;
  padding: 30px 30px 32px;
  text-align: left;
}
.bl-box::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourCrayon("111110", 44)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bl-box p {
  margin: 16px 0 0;
  font-size: 0.95rem;
  line-height: 1.72;
  color: rgba(17, 17, 16, 0.82);
}

/* --------------------------- BLOC FINAL --------------------------------- */
.bl-points {
  margin: 34px auto 0;
  display: grid;
  gap: 12px;
  max-width: 820px;
  text-align: left;
}
@media (min-width: 700px) { .bl-points { grid-template-columns: 1fr 1fr; } }
.bl-points div {
  position: relative;
  isolation: isolate;
  padding: 15px 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.78);
}
.bl-points div::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bl-p1::before { background-image: ${contourCrayon("111110", 51)}; }
.bl-p2::before { background-image: ${contourCrayon("111110", 52)}; }
.bl-p3::before { background-image: ${contourCrayon("111110", 53)}; }
.bl-p4::before { background-image: ${contourCrayon("111110", 54)}; }
`;

/** Couleur de cadre et de surlignage, en rotation sur les 7 pastels. */
const tone = (i: number) => `bl-c${(i % 7) + 1}`;

export default function BlogPage() {
  return (
    <>
      <style>{CSS}</style>
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
