import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { BTN_PLEIN, BTN_CONTOUR, feutre, contourCrayon, contourLeger, PASTELS } from "@/lib/paper-da";

export const metadata: Metadata = {
  title: "À propos · Agence SEO / GEO Nantes et Saint-Herblain",
  description:
    "Découvrez PulseoAI, agence SEO / GEO basée à Saint-Herblain, près de Nantes. Nous aidons les entreprises à être visibles sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
  openGraph: {
    title: "À propos | PulseoAI, agence SEO / GEO Nantes et Saint-Herblain",
    description:
      "Découvrez PulseoAI, agence SEO / GEO basée à Saint-Herblain, près de Nantes. Nous aidons les entreprises à être visibles sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    url: "https://www.pulseoai.fr/a-propos",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – À propos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | PulseoAI, agence SEO / GEO Nantes et Saint-Herblain",
    description:
      "Découvrez PulseoAI, agence SEO / GEO basée à Saint-Herblain, près de Nantes. Nous aidons les entreprises à être visibles sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/a-propos" },
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
      name: "À propos",
      item: "https://www.pulseoai.fr/a-propos",
    },
  ],
};

const personJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Romain Duclos",
    jobTitle: "Fondateur, stratégie SEO / GEO",
    image: "https://www.pulseoai.fr/team/romain.jpg",
    worksFor: {
      "@id": "https://www.pulseoai.fr/#organization",
    },
    sameAs: ["https://fr.linkedin.com/in/romaindcl"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sofiane Aiche",
    jobTitle: "Co-fondateur, relation client et accompagnement",
    image: "https://www.pulseoai.fr/team/sofiane.png",
    worksFor: {
      "@id": "https://www.pulseoai.fr/#organization",
    },
  },
];

const whyCards = [
  {
    k: "ap-k1",
    title: "Le SEO reste essentiel",
    text: "Google reste un canal majeur. Nous continuons à travailler les fondamentaux SEO : structure, contenus, clarté, maillage et intention de recherche.",
  },
  {
    k: "ap-k2",
    title: "Le GEO devient stratégique",
    text: "Les moteurs IA synthétisent les réponses et recommandent quelques marques. Si vous n’êtes pas cité, vous êtes absent de la décision.",
  },
  {
    k: "ap-k3",
    title: "Les deux se complètent",
    text: "Notre rôle : connecter votre visibilité Google et votre visibilité IA dans une stratégie SEO / GEO lisible et mesurable.",
  },
];

const methodCards = [
  {
    k: "ap-k1",
    title: "Audit SEO / GEO",
    text: "Nous analysons votre visibilité sur Google et dans les moteurs IA pour comprendre où votre entreprise apparaît, où elle est absente et quels concurrents prennent la place.",
  },
  {
    k: "ap-k2",
    title: "Clarté de l’entité",
    text: "Nous aidons les moteurs de recherche et les IA à comprendre qui vous êtes, ce que vous proposez, pour qui, dans quelle zone et avec quelles preuves.",
  },
  {
    k: "ap-k3",
    title: "Contenus optimisés IA",
    text: "Nous créons ou optimisons les pages, FAQ, guides et contenus que les moteurs IA peuvent comprendre, citer et réutiliser dans leurs réponses.",
  },
  {
    k: "ap-k4",
    title: "Citations et sources",
    text: "Nous renforçons les sources externes, fiches, avis, annuaires et mentions qui crédibilisent votre marque aux yeux des moteurs IA.",
  },
];

const founderCards = [
  {
    k: "ap-k5",
    name: "Romain Duclos",
    role: "Fondateur · stratégie SEO / GEO",
    photo: "/team/romain.jpg",
    objectPosition: "50% 30%",
    text: "Romain pilote la vision SEO / GEO de PulseoAI. Il travaille sur la compréhension des moteurs IA, les stratégies de visibilité, les contenus optimisés et le positionnement des marques dans Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
    focus: "Focus : stratégie, contenu, visibilité IA, acquisition.",
  },
  {
    k: "ap-k6",
    name: "Sofiane Aiche",
    role: "Co-fondateur · relation client & accompagnement",
    photo: "/team/sofiane.png",
    objectPosition: "50% 35%",
    text: "Sofiane accompagne les entreprises dans la compréhension des enjeux, le cadrage des besoins et le suivi des actions. Son rôle est de transformer un sujet technique en plan d’action clair, lisible et exploitable.",
    focus: "Focus : client, pédagogie, suivi, déploiement.",
  },
];

const sectors = [
  "Hôtels",
  "Restaurants",
  "Commerces locaux",
  "PME",
  "Services B2B",
  "Marques e-commerce",
];

const piloted = [
  "Visibilité sur Google",
  "Présence dans ChatGPT",
  "Citations dans Gemini, Claude, Perplexity",
  "Sources utilisées par les IA",
  "Contenus optimisés SEO / GEO",
  "Monitoring mensuel",
  "Concurrents cités",
  "Priorités d’action",
];

const CSS = `
/* ===================== PAGE A PROPOS, DIRECTION PAPIER =================== */
.ap {
  position: relative;
  z-index: 1;
  /* fond transparent : le grain papier fixe (.th-grain) reste visible dessous */
  background: transparent;
  color: #111110;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 62px 24px 68px;
}
.ap-inner { max-width: 820px; margin: 0 auto; text-align: center; }

.ap h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2.9vw, 2.15rem);
  line-height: 1.14;
  letter-spacing: -0.028em;
  font-weight: 600;
  color: #111110;
  text-wrap: balance;
}
.ap-lead {
  margin: 20px auto 0;
  max-width: 58ch;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(17, 17, 16, 0.66);
}
.ap-note {
  position: relative;
  isolation: isolate;
  margin: 34px auto 0;
  max-width: 62ch;
  padding: 18px 22px;
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.7;
  color: #111110;
}
.ap-note::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 44, 0.42)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* --- surlignage feutre --- */
.ap-m {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.24em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ap-m1 { background-image: ${feutre(PASTELS.peche)}; }
.ap-m2 { background-image: ${feutre(PASTELS.vertEau)}; }
.ap-m3 { background-image: ${feutre(PASTELS.bleu)}; }
.ap-m4 { background-image: ${feutre(PASTELS.jaune)}; }
.ap-m5 { background-image: ${feutre(PASTELS.rose)}; }
.ap-m6 { background-image: ${feutre(PASTELS.lavande)}; }
.ap-m7 { background-image: ${feutre(PASTELS.pistache)}; }

/* ---------------------------- HERO ------------------------------------- */
.ap-hero { padding-top: 30px; }
.ap-crumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.84rem;
  color: rgba(17, 17, 16, 0.5);
  margin-bottom: 34px;
}
.ap-crumb a { color: rgba(17, 17, 16, 0.5); text-decoration: none; }
.ap-crumb a:hover { color: #111110; }
.ap-crumb-now { color: #111110; font-weight: 500; }
.ap h1 {
  margin: 0 auto;
  font-size: clamp(1.95rem, 4.4vw, 3.05rem);
  line-height: 1.08;
  letter-spacing: -0.038em;
  font-weight: 600;
  color: #111110;
  max-width: 21ch;
  text-wrap: balance;
}

/* mots-reperes, places AU-DESSUS des boutons */
.ap-chips {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 22px;
}
.ap-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.58);
}
.ap-chip::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.4);
}

/* boutons crayon */
.ap-cta {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
}
.ap-btn {
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
.ap-btn::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ap-btn:hover { transform: translateY(-1.5px); }
.ap-btn-1 { color: #F4F3EF; }
.ap-btn-1::before { background-image: ${BTN_PLEIN}; }
.ap-btn-2 { color: #111110; }
.ap-btn-2::before { background-image: ${BTN_CONTOUR}; }

/* ------------------- GRILLE DE CADRES DESSINES -------------------------- */
.ap-grid {
  margin: 40px auto 0;
  display: grid;
  gap: 26px;
  max-width: 1000px;
  text-align: left;
}
@media (min-width: 700px) { .ap-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1000px) { .ap-grid-3 { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1000px) { .ap-grid-4 { grid-template-columns: repeat(4, 1fr); } }
.ap-solo { margin: 40px auto 0; max-width: 820px; text-align: left; }

.ap-card {
  position: relative;
  isolation: isolate;
  padding: 24px 24px 26px;
}
.ap-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ap-k1::before { background-image: ${contourCrayon(PASTELS.peche, 31)}; }
.ap-k2::before { background-image: ${contourCrayon(PASTELS.vertEau, 32)}; }
.ap-k3::before { background-image: ${contourCrayon(PASTELS.bleu, 33)}; }
.ap-k4::before { background-image: ${contourCrayon(PASTELS.jaune, 34)}; }
.ap-k5::before { background-image: ${contourCrayon(PASTELS.rose, 35)}; }
.ap-k6::before { background-image: ${contourCrayon(PASTELS.lavande, 36)}; }
.ap-k7::before { background-image: ${contourCrayon(PASTELS.pistache, 37)}; }

.ap-card h3 {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #111110;
}
.ap-card h3 span {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.1em 0.26em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ap-k1 h3 span { background-image: ${feutre(PASTELS.peche)}; }
.ap-k2 h3 span { background-image: ${feutre(PASTELS.vertEau)}; }
.ap-k3 h3 span { background-image: ${feutre(PASTELS.bleu)}; }
.ap-k4 h3 span { background-image: ${feutre(PASTELS.jaune)}; }
.ap-card p {
  margin: 14px 0 0;
  font-size: 0.89rem;
  line-height: 1.68;
  color: rgba(17, 17, 16, 0.62);
}

/* liste interne d'un cadre (ce que nous pilotons) */
.ap-list { margin: 16px 0 0; padding: 0; list-style: none; display: grid; gap: 8px; }
@media (min-width: 640px) { .ap-list { grid-template-columns: 1fr 1fr; gap: 8px 24px; } }
.ap-list li {
  font-size: 0.88rem;
  line-height: 1.5;
  color: rgba(17, 17, 16, 0.74);
  padding-left: 15px;
  position: relative;
}
.ap-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.52em;
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.35);
}

/* les 6 secteurs, tous dans un seul cadre */
.ap-sectors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px 30px;
}
.ap-sectors span {
  font-size: 0.98rem;
  font-weight: 500;
  color: #111110;
}

/* ------------------------------ EQUIPE ---------------------------------- */
.ap-who { display: flex; align-items: center; gap: 16px; }
.ap-photo {
  position: relative;
  flex: none;
  width: 68px;
  height: 68px;
  overflow: hidden;
  border-radius: 999px;
  filter: grayscale(1);
}
.ap-name {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #111110;
}
.ap-role { margin: 4px 0 0; font-size: 0.85rem; font-weight: 500; color: rgba(17, 17, 16, 0.6); }
.ap-focus {
  margin: 16px 0 0;
  padding-top: 14px;
  border-top: 1.5px solid rgba(17, 17, 16, 0.14);
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.72);
}

/* --------------------- FORMULAIRE + MASCOTTE ---------------------------- */
.ap-form-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 720px;
  margin: 0 auto 26px;
  text-align: center;
}
.ap-lion {
  width: auto;
  height: clamp(96px, 12vh, 124px);
  max-width: 100%;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
}
.ap-form-wrap { max-width: 720px; margin: 0 auto; }
.ap-form-wrap form,
.ap-form-wrap .rounded-2xl {
  background: none !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
}
.ap-form-wrap form {
  display: grid !important;
  grid-template-columns: 1fr;
  gap: 12px 18px;
}
@media (min-width: 640px) {
  .ap-form-wrap form { grid-template-columns: 1fr 1fr; }
  .ap-form-wrap form > div:has(#message),
  .ap-form-wrap form > div:has(.text-red-700),
  .ap-form-wrap form > button { grid-column: 1 / -1; }
}
.ap-form-wrap form > * + * { margin-top: 0 !important; }
.ap-form-wrap form > div > * + * { margin-top: 4px !important; }
.ap-form-wrap label { color: #111110 !important; font-weight: 500; font-size: 0.86rem !important; }
.ap-form-wrap input,
.ap-form-wrap select { height: 42px !important; }
.ap-form-wrap textarea { min-height: 76px !important; }
.ap-form-wrap input,
.ap-form-wrap select,
.ap-form-wrap textarea { font-size: 0.95rem !important; }
.ap-form-wrap button[type="submit"] { height: 46px !important; margin-top: 6px !important; }
.ap-form-wrap input,
.ap-form-wrap textarea,
.ap-form-wrap select {
  background-color: transparent !important;
  background-image: ${contourLeger("111110", 61, 0.45)} !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  color: #111110 !important;
}
.ap-form-wrap input::placeholder,
.ap-form-wrap textarea::placeholder { color: rgba(17, 17, 16, 0.42) !important; }
.ap-form-wrap input:focus,
.ap-form-wrap textarea:focus,
.ap-form-wrap select:focus,
.ap-form-wrap input:focus-visible,
.ap-form-wrap textarea:focus-visible,
.ap-form-wrap select:focus-visible {
  outline: 2px solid rgba(17, 17, 16, 0.55) !important;
  outline-offset: 2px !important;
  background-image: ${contourLeger("111110", 61, 0.75)} !important;
}
.ap-form-wrap button[type="submit"] {
  position: relative;
  isolation: isolate;
  background: none !important;
  color: #F4F3EF !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  transition: transform 0.16s ease;
}
.ap-form-wrap button[type="submit"]::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-image: ${BTN_PLEIN};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.ap-form-wrap button[type="submit"]:hover { transform: translateY(-1.5px); }

.ap-after-form { margin-top: 44px; text-align: center; }
`;

export default function AProposPage() {
  return (
    <>
      <style>{CSS}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* ---------------------------- HERO ---------------------------- */}
      <section className="ap ap-hero">
        <div className="ap-inner">
          <nav aria-label="Fil d'Ariane">
            <ol className="ap-crumb">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="ap-crumb-now">À propos</li>
            </ol>
          </nav>

          <h1>
            PulseoAI aide les entreprises à devenir visibles sur{" "}
            <span className="ap-m ap-m2">Google et dans les IA</span>.
          </h1>

          <p className="ap-lead">
            Nous sommes une agence SEO / GEO basée à Saint-Herblain, près de Nantes. Nous aidons les hôtels, restaurants, commerces, PME et marques à être compris, cités et recommandés par Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.
          </p>

          <div className="ap-chips">
            <span className="ap-chip">Nantes + France</span>
            <span className="ap-chip">Google + IA</span>
            <span className="ap-chip">Audit SEO / GEO</span>
            <span className="ap-chip">Monitoring IA</span>
          </div>

          <div className="ap-cta">
            <Link href="/contact" className="ap-btn ap-btn-1">
              Obtenir un audit
            </Link>
            <Link href="/offre" className="ap-btn ap-btn-2">
              Découvrir notre offre
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------ POURQUOI PULSEOAI -------------------- */}
      <section className="ap">
        <div className="ap-inner">
          <h2>
            Le déclic : vos clients ne cherchent{" "}
            <span className="ap-m ap-m3">plus seulement sur Google</span>.
          </h2>
          <p className="ap-lead">
            PulseoAI est né d’un constat simple : les clients utilisent déjà ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews pour comparer, choisir et décider. Pourtant, beaucoup d’entreprises restent invisibles dans ces réponses.
          </p>
          <p className="ap-lead">
            Une entreprise peut être bien positionnée sur Google, avoir un bon site, de bons avis, et pourtant ne jamais être citée par les moteurs IA. C’est ce décalage que nous avons voulu résoudre.
          </p>
        </div>

        <div className="ap-grid ap-grid-3">
          {whyCards.map((card) => (
            <div key={card.title} className={`ap-card ${card.k}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------- MISSION ------------------------- */}
      <section className="ap">
        <div className="ap-inner">
          <h2>
            <span className="ap-m ap-m4">Reprendre le contrôle</span> de votre visibilité.
          </h2>
          <p className="ap-lead">
            Notre mission est d’aider les entreprises à reprendre le contrôle de leur visibilité dans l’ère de la recherche IA. Nous auditons votre présence, identifions les lacunes, optimisons vos contenus, renforçons vos sources et suivons vos progrès mois après mois.
          </p>
          <p className="ap-lead">
            Que vous soyez hôtelier, restaurateur, commerçant, dirigeant de PME ou marque e-commerce, l’objectif reste le même : être visible sur les requêtes qui comptent vraiment, générer une demande plus qualifiée et réduire votre dépendance à l’acquisition payante ou aux plateformes intermédiaires.
          </p>
        </div>

        <div className="ap-solo">
          <div className="ap-card ap-k4">
            <h3>
              <span>Ce que nous pilotons</span>
            </h3>
            <p>Une lecture claire de votre visibilité Google + IA.</p>
            <ul className="ap-list">
              {piloted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------- MÉTHODE --------------------------- */}
      <section className="ap">
        <div className="ap-inner">
          <h2>
            Une méthode claire pour être{" "}
            <span className="ap-m ap-m5">compris, cité et recommandé</span>.
          </h2>
        </div>

        <div className="ap-grid ap-grid-4">
          {methodCards.map((card) => (
            <div key={card.title} className={`ap-card ${card.k}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="ap-inner">
          <p className="ap-note">
            Suivi mensuel inclus : prompts clients, citations IA, concurrents recommandés, sources citées et prochaines priorités.
          </p>
        </div>
      </section>

      {/* ----------------------------- ÉQUIPE -------------------------- */}
      <section className="ap">
        <div className="ap-inner">
          <h2>
            Deux profils, une même conviction :{" "}
            <span className="ap-m ap-m6">la visibilité IA</span> devient un canal d’acquisition.
          </h2>
          <p className="ap-lead">
            PulseoAI est porté par Romain Duclos et Sofiane Aiche, avec une approche simple : rendre le SEO / GEO compréhensible, mesurable et utile au business.
          </p>
        </div>

        <div className="ap-grid">
          {founderCards.map((member) => (
            <div key={member.name} className={`ap-card ${member.k}`}>
              <div className="ap-who">
                <div className="ap-photo">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition as CSSProperties["objectPosition"] }}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="ap-name">{member.name}</h3>
                  <p className="ap-role">{member.role}</p>
                </div>
              </div>
              <p>{member.text}</p>
              <p className="ap-focus">{member.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------- SECTEURS ------------------------- */}
      <section className="ap">
        <div className="ap-inner">
          <h2>
            Une expertise née dans{" "}
            <span className="ap-m ap-m7">l’hôtellerie</span>, pensée pour tous les secteurs.
          </h2>
          <p className="ap-lead">
            PulseoAI a construit une partie forte de son expertise sur l’hôtellerie, un secteur où la visibilité, les avis, les plateformes et les réservations directes sont critiques. Aujourd’hui, notre méthode SEO / GEO s’applique aussi aux restaurants, commerces, services, PME, entreprises B2B et marques e-commerce.
          </p>
        </div>

        <div className="ap-solo">
          <div className="ap-card ap-k7">
            <div className="ap-sectors">
              {sectors.map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="ap-inner">
          <p className="ap-lead">
            Chaque secteur a ses propres requêtes, sources, concurrents et signaux. Notre travail consiste à adapter la stratégie SEO / GEO à votre réalité business.
          </p>
        </div>
      </section>

      {/* ------------------- FORMULAIRE + AGENTS IA -------------------- */}
      <section className="ap">
        <div className="ap-form-head">
          <Image
            sizes="(max-width: 767px) 200px, 420px"
            src="/illustrations/VHl73R9s.png"
            alt="Mascotte lion qui invite à demander un audit"
            width={1536}
            height={1536}
            loading="lazy"
            className="ap-lion"
          />
          <h2>
            Envie de savoir si votre entreprise est visible dans les{" "}
            <span className="ap-m ap-m1">réponses IA</span> ?
          </h2>
          <p className="ap-lead">
            Nous analysons votre présence sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis nous vous montrons les requêtes, les concurrents et les sources qui comptent.
          </p>
        </div>

        <div className="ap-form-wrap">
          <ContactForm />
        </div>

        <div className="ap-after-form">
          <Link href="/agents-ia" className="ap-btn ap-btn-2">
            Recruter mon agent IA
          </Link>
        </div>
      </section>
    </>
  );
}
