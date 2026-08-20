import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { BTN_PLEIN, BTN_CONTOUR, feutre, contourCrayon, contourLeger, PASTELS } from "@/lib/paper-da";

export const metadata: Metadata = {
  title: "Référencement IA & agence GEO · Offre",
  description:
    "PulseoAI accompagne les entreprises qui veulent être visibles sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA. Audit SEO / GEO, contenus, Schema.org, citations et monitoring.",
  openGraph: {
    title: "Référencement IA & agence GEO · Offre PulseoAI",
    description:
      "PulseoAI accompagne les entreprises qui veulent être visibles sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA. Audit SEO / GEO, contenus, Schema.org, citations et monitoring.",
    url: "https://www.pulseoai.fr/offre",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – Offre SEO / GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Référencement IA & agence GEO · Offre PulseoAI",
    description:
      "PulseoAI accompagne les entreprises qui veulent être visibles sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA. Audit SEO / GEO, contenus, Schema.org, citations et monitoring.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.pulseoai.fr/offre" },
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

const offreFaqItems = [
  {
    question: "Qu’est-ce que le référencement IA ?",
    answer:
      "Le référencement IA consiste à rendre votre marque plus compréhensible, crédible et citable dans les réponses générées par ChatGPT, Gemini, Perplexity ou Google AI Overviews.",
  },
  {
    question: "Quelle est la différence entre SEO et GEO ?",
    answer:
      "Le SEO aide votre site à apparaître dans Google. Le GEO ajoute une couche orientée moteurs IA pour aider votre marque à être comprise, citée et recommandée dans les réponses générées.",
  },
  {
    question: "Comment apparaître dans ChatGPT, Gemini ou Perplexity ?",
    answer:
      "Il faut clarifier votre offre, structurer vos contenus, renforcer vos entités, travailler vos sources de confiance et suivre les requêtes qui comptent vraiment pour votre activité.",
  },
  {
    question: "Combien de temps faut-il pour obtenir des résultats en référencement IA ?",
    answer:
      "Les premiers signaux peuvent apparaître en quelques semaines, mais une vraie progression demande un travail continu sur les contenus, les sources, le balisage et le suivi mensuel.",
  },
  {
    question: "Est-ce que le GEO remplace le SEO ?",
    answer:
      "Non. Le GEO s’appuie sur les bases SEO. Un site clair, bien structuré et déjà solide sur Google donne aussi de meilleurs signaux aux moteurs IA.",
  },
  {
    question: "Pourquoi choisir une agence GEO plutôt qu’une agence SEO classique ?",
    answer:
      "Parce qu’une agence GEO ne suit pas seulement vos positions Google. Elle analyse aussi votre présence dans ChatGPT, Gemini, Perplexity, les sources utilisées par les IA et les concurrents cités à votre place.",
  },
] as const;

const offreFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: offreFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const offreServicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.pulseoai.fr/offre/#audit",
      name: "Audit SEO / GEO",
      description:
        "Analyse complète de votre visibilité sur Google, ChatGPT, Gemini, Perplexity et Google AI Overviews. Identification des opportunités de référencement IA, des lacunes techniques et des priorités d’action.",
      provider: { "@id": "https://www.pulseoai.fr/#organization" },
      areaServed: ["France", "Suisse", "Maroc"],
      serviceType: "Audit de visibilité digitale",
      serviceOutput: "Rapport d’audit avec recommandations priorisées",
    },
    {
      "@type": "Service",
      "@id": "https://www.pulseoai.fr/offre/#contenu",
      name: "Contenus optimisés pour Google et les IA",
      description:
        "Création et optimisation de contenus structurés pour être compris par Google et cités par ChatGPT, Gemini, Perplexity et les autres moteurs IA.",
      provider: { "@id": "https://www.pulseoai.fr/#organization" },
      areaServed: ["France", "Suisse", "Maroc"],
      serviceType: "Rédaction et optimisation de contenu",
      serviceOutput:
        "Articles, pages et contenus optimisés pour Google et les moteurs IA",
    },
    {
      "@type": "Service",
      "@id": "https://www.pulseoai.fr/offre/#balisage",
      name: "Structure et balisage technique",
      description:
        "Implémentation du balisage Schema.org, des données structurées, du llms.txt et d’une architecture technique compréhensible par Google, Google AI Overviews et les moteurs IA.",
      provider: { "@id": "https://www.pulseoai.fr/#organization" },
      areaServed: ["France", "Suisse", "Maroc"],
      serviceType: "SEO technique et balisage structuré",
      serviceOutput:
        "Balisage Schema.org complet, llms.txt, architecture optimisée",
    },
    {
      "@type": "Service",
      "@id": "https://www.pulseoai.fr/offre/#citations",
      name: "Citations et sources de confiance",
      description:
        "Stratégie de citations IA : positionnement sur les plateformes, annuaires, contenus et sources utilisées par ChatGPT, Gemini, Perplexity et les LLM pour générer leurs réponses.",
      provider: { "@id": "https://www.pulseoai.fr/#organization" },
      areaServed: ["France", "Suisse", "Maroc"],
      serviceType: "Stratégie de citations et visibilité IA",
      serviceOutput: "Présence renforcée sur les sources citées par les IA",
    },
    {
      "@type": "Service",
      "@id": "https://www.pulseoai.fr/offre/#monitoring",
      name: "Monitoring mensuel SEO / GEO",
      description:
        "Suivi mensuel de votre visibilité Google, ChatGPT, Gemini, Perplexity et Google AI Overviews avec reporting clair : positions, citations, prompts testés, évolution des concurrents et priorités.",
      provider: { "@id": "https://www.pulseoai.fr/#organization" },
      areaServed: ["France", "Suisse", "Maroc"],
      serviceType: "Monitoring et reporting de visibilité",
      serviceOutput: "Dashboard mensuel avec KPIs SEO et GEO",
    },
  ],
};

const CSS = `
/* ===================== PAGE OFFRE, DIRECTION PAPIER ===================== */
.of {
  position: relative;
  z-index: 1;
  /* fond transparent : le grain papier fixe (.th-grain) reste visible dessous */
  background: transparent;
  color: #111110;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 66px 24px 74px;
}
.of-inner { max-width: 820px; margin: 0 auto; text-align: center; }
.of-wide { max-width: 1000px; margin: 0 auto; }

.of h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2.9vw, 2.15rem);
  line-height: 1.14;
  letter-spacing: -0.028em;
  font-weight: 600;
  color: #111110;
}
.of-lead {
  margin: 20px auto 0;
  max-width: 58ch;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(17, 17, 16, 0.66);
}
.of-lead a,
.of-note a {
  color: #111110;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
}
.of-note {
  margin: 28px auto 0;
  max-width: 56ch;
  font-size: 0.94rem;
  line-height: 1.72;
  color: rgba(17, 17, 16, 0.6);
}

/* --- surlignage feutre, meme methode que la home --- */
.of-m {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.24em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-m1 { background-image: ${feutre(PASTELS.peche)}; }
.of-m2 { background-image: ${feutre(PASTELS.vertEau)}; }
.of-m3 { background-image: ${feutre(PASTELS.bleu)}; }
.of-m4 { background-image: ${feutre(PASTELS.jaune)}; }
.of-m5 { background-image: ${feutre(PASTELS.rose)}; }
.of-m6 { background-image: ${feutre(PASTELS.lavande)}; }
.of-m7 { background-image: ${feutre(PASTELS.pistache)}; }

/* ---------------------------- HERO ------------------------------------- */
.of-hero { padding-top: 30px; }
.of-crumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.84rem;
  color: rgba(17, 17, 16, 0.5);
  margin-bottom: 34px;
}
.of-crumb a { color: rgba(17, 17, 16, 0.5); text-decoration: none; }
.of-crumb a:hover { color: #111110; }
.of-crumb-now { color: #111110; font-weight: 500; }
.of h1 {
  margin: 0;
  font-size: clamp(1.95rem, 4.4vw, 3.05rem);
  line-height: 1.08;
  letter-spacing: -0.038em;
  font-weight: 600;
  color: #111110;
  max-width: 21ch;
  margin-inline: auto;
  text-wrap: balance;
}

/* les 2 paragraphes du hero, cote a cote dans 2 cadres */
.of-duo {
  margin: 38px auto 0;
  display: grid;
  gap: 16px;
  max-width: 900px;
  text-align: left;
}
@media (min-width: 800px) { .of-duo { grid-template-columns: 1fr 1fr; gap: 22px; } }
.of-duo p {
  position: relative;
  isolation: isolate;
  margin: 0;
  padding: 22px 24px;
  font-size: 0.96rem;
  line-height: 1.72;
}
.of-duo p::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-duo-1 { color: rgba(17, 17, 16, 0.68); }
.of-duo-1::before { background-image: ${contourCrayon(PASTELS.peche, 12)}; }
.of-duo-2 { color: #111110; font-weight: 500; }
.of-duo-2::before { background-image: ${contourCrayon(PASTELS.vertEau, 13)}; }

/* boutons crayon de la DA */
.of-cta {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
}
.of-btn {
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
.of-btn::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-btn:hover { transform: translateY(-1.5px); }
.of-btn-1 { color: #F4F3EF; }
.of-btn-1::before { background-image: ${BTN_PLEIN}; }
.of-btn-2 { color: #111110; }
.of-btn-2::before { background-image: ${BTN_CONTOUR}; }

/* petites mentions sous le hero */
.of-chips {
  margin-top: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 22px;
}
.of-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.58);
}
.of-chip::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.4);
}

/* --------------------- pastilles secteurs (pour qui) -------------------- */
.of-tags {
  margin: 30px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 780px;
}
.of-tag {
  position: relative;
  isolation: isolate;
  padding: 9px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.78);
}
.of-tag::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 23, 0.4)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* ---------------------- listes de points centrees ----------------------- */
.of-points {
  margin: 32px auto 0;
  display: grid;
  gap: 12px;
  max-width: 700px;
  text-align: left;
}
@media (min-width: 860px) { .of-points { grid-template-columns: repeat(3, 1fr); } }
.of-point {
  position: relative;
  isolation: isolate;
  margin: 0;
  padding: 20px 22px;
  font-size: 0.92rem;
  font-weight: 500;
  line-height: 1.55;
  color: rgba(17, 17, 16, 0.8);
}
.of-point::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-p1::before { background-image: ${contourCrayon(PASTELS.bleu, 21)}; }
.of-p2::before { background-image: ${contourCrayon(PASTELS.jaune, 22)}; }
.of-p3::before { background-image: ${contourCrayon(PASTELS.rose, 23)}; }

/* encadre citation */
.of-quote {
  margin: 32px auto 0;
  max-width: 60ch;
  padding: 22px 26px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.72;
  color: #111110;
  position: relative;
  isolation: isolate;
}
.of-quote::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 44, 0.45)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* ------------------------- CARTES METHODE ------------------------------- */
.of-cards {
  margin: 40px auto 0;
  display: grid;
  gap: 30px 26px;
  max-width: 1000px;
  text-align: left;
}
@media (min-width: 700px) { .of-cards { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1000px) { .of-cards { grid-template-columns: repeat(3, 1fr); } }
.of-card {
  position: relative;
  isolation: isolate;
  padding: 24px 24px 26px;
}
.of-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/* cadre de la meme couleur que le surlignage du titre */
.of-c1::before { background-image: ${contourCrayon(PASTELS.peche, 31)}; }
.of-c2::before { background-image: ${contourCrayon(PASTELS.vertEau, 32)}; }
.of-c3::before { background-image: ${contourCrayon(PASTELS.bleu, 33)}; }
.of-c4::before { background-image: ${contourCrayon(PASTELS.jaune, 34)}; }
.of-c5::before { background-image: ${contourCrayon(PASTELS.rose, 35)}; }
.of-c6::before { background-image: ${contourCrayon(PASTELS.lavande, 36)}; }
.of-card h3 {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #111110;
}
.of-card h3 span {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.1em 0.26em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-c1 h3 span { background-image: ${feutre(PASTELS.peche)}; }
.of-c2 h3 span { background-image: ${feutre(PASTELS.vertEau)}; }
.of-c3 h3 span { background-image: ${feutre(PASTELS.bleu)}; }
.of-c4 h3 span { background-image: ${feutre(PASTELS.jaune)}; }
.of-c5 h3 span { background-image: ${feutre(PASTELS.rose)}; }
.of-c6 h3 span { background-image: ${feutre(PASTELS.lavande)}; }
.of-card p {
  margin: 14px 0 0;
  font-size: 0.89rem;
  line-height: 1.68;
  color: rgba(17, 17, 16, 0.62);
}
.of-card ul { margin: 14px 0 0; padding: 0; list-style: none; }
.of-card li {
  font-size: 0.84rem;
  line-height: 1.5;
  color: rgba(17, 17, 16, 0.72);
  padding-left: 15px;
  position: relative;
}
.of-card li + li { margin-top: 6px; }
.of-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.35);
}

/* --------------------------- LIVRABLES ---------------------------------- */
.of-deliv {
  margin: 34px auto 0;
  display: grid;
  gap: 10px;
  max-width: 760px;
  text-align: left;
}
@media (min-width: 640px) { .of-deliv { grid-template-columns: 1fr 1fr; } }
.of-deliv div {
  position: relative;
  isolation: isolate;
  padding: 13px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.76);
}
.of-deliv div::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 31, 0.38)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* -------------------------- SEO + GEO ----------------------------------- */
.of-compare {
  margin: 38px auto 0;
  display: grid;
  gap: 28px;
  max-width: 820px;
  text-align: left;
}
@media (min-width: 760px) { .of-compare { grid-template-columns: 1fr 1fr; } }
.of-cmp-box {
  position: relative;
  isolation: isolate;
  padding: 24px 24px 26px;
}
.of-cmp-box::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-cmp-a .of-cmp-box::before { background-image: ${contourCrayon(PASTELS.bleu, 41)}; }
.of-cmp-b .of-cmp-box::before { background-image: ${contourCrayon(PASTELS.peche, 42)}; }
/* la formule se place sous le cadre auquel elle correspond */
.of-cmp-eq {
  margin: 18px 0 0;
  text-align: center;
  font-size: 1.02rem;
  font-weight: 600;
  color: #111110;
}
.of-compare-h {
  margin: 0;
  font-size: 0.94rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #111110;
}
.of-compare-h span {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.1em 0.26em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-cmp-a .of-compare-h span { background-image: ${feutre(PASTELS.bleu)}; }
.of-cmp-b .of-compare-h span { background-image: ${feutre(PASTELS.peche)}; }
.of-compare ul { margin: 16px 0 0; padding: 0; list-style: none; }
.of-compare li {
  font-size: 0.88rem;
  line-height: 1.5;
  color: rgba(17, 17, 16, 0.72);
  padding-left: 15px;
  position: relative;
}
.of-compare li + li { margin-top: 8px; }
.of-compare li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.52em;
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.35);
}

/* ------------------------- TRANSPARENCE --------------------------------- */
.of-nots {
  margin: 36px auto 0;
  display: grid;
  gap: 12px;
  max-width: 900px;
  text-align: left;
}
@media (min-width: 800px) { .of-nots { grid-template-columns: repeat(3, 1fr); } }
.of-nots p {
  position: relative;
  isolation: isolate;
  margin: 0;
  padding: 22px 22px 24px;
  font-size: 0.94rem;
  font-weight: 500;
  line-height: 1.55;
  color: #111110;
}
.of-nots p::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-n1::before { background-image: ${contourCrayon(PASTELS.pistache, 51)}; }
.of-n2::before { background-image: ${contourCrayon(PASTELS.lavande, 52)}; }
.of-n3::before { background-image: ${contourCrayon(PASTELS.peche, 53)}; }

/* ----------------------------- FAQ -------------------------------------- */
.of-faq { margin: 36px auto 0; max-width: 760px; text-align: left; }
.of-faq details { border-bottom: 1.5px solid rgba(17, 17, 16, 0.16); }
.of-faq summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  cursor: pointer;
  list-style: none;
  padding: 18px 0;
  font-size: 0.98rem;
  font-weight: 600;
  color: #111110;
}
.of-faq summary::-webkit-details-marker { display: none; }
.of-faq summary span:last-child {
  flex-shrink: 0;
  font-size: 1.15rem;
  font-weight: 400;
  transition: transform 0.18s ease;
}
.of-faq details[open] summary span:last-child { transform: rotate(45deg); }
.of-faq p {
  margin: 0;
  padding: 0 0 20px;
  max-width: 72ch;
  font-size: 0.93rem;
  line-height: 1.72;
  color: rgba(17, 17, 16, 0.66);
}

/* -------------------- SECTION AUDIT, formulaire home -------------------- */
.of-form-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 700px;
  margin: 0 auto 26px;
  text-align: center;
}
.of-lion {
  width: auto;
  height: clamp(96px, 12vh, 124px);
  max-width: 100%;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
}
.of-form-wrap { max-width: 720px; margin: 0 auto; }

/* habillage papier du formulaire existant, logique inchangee */
.of-form-wrap form,
.of-form-wrap .rounded-2xl {
  background: none !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
}
.of-form-wrap form {
  display: grid !important;
  grid-template-columns: 1fr;
  gap: 12px 18px;
}
@media (min-width: 640px) {
  .of-form-wrap form { grid-template-columns: 1fr 1fr; }
  .of-form-wrap form > div:has(#message),
  .of-form-wrap form > div:has(.text-red-700),
  .of-form-wrap form > button { grid-column: 1 / -1; }
}
.of-form-wrap form > * + * { margin-top: 0 !important; }
.of-form-wrap form > div > * + * { margin-top: 4px !important; }
.of-form-wrap label { color: #111110 !important; font-weight: 500; font-size: 0.86rem !important; }
.of-form-wrap input,
.of-form-wrap select { height: 42px !important; }
.of-form-wrap textarea { min-height: 76px !important; }
.of-form-wrap input,
.of-form-wrap select,
.of-form-wrap textarea { font-size: 0.95rem !important; }
.of-form-wrap button[type="submit"] { height: 46px !important; margin-top: 6px !important; }
.of-form-wrap input,
.of-form-wrap textarea,
.of-form-wrap select {
  background-color: transparent !important;
  background-image: ${contourLeger("111110", 61, 0.45)} !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  color: #111110 !important;
}
.of-form-wrap input::placeholder,
.of-form-wrap textarea::placeholder { color: rgba(17, 17, 16, 0.42) !important; }
.of-form-wrap input:focus,
.of-form-wrap textarea:focus,
.of-form-wrap select:focus,
.of-form-wrap input:focus-visible,
.of-form-wrap textarea:focus-visible,
.of-form-wrap select:focus-visible {
  outline: 2px solid rgba(17, 17, 16, 0.55) !important;
  outline-offset: 2px !important;
  background-image: ${contourLeger("111110", 61, 0.75)} !important;
}
.of-form-wrap button[type="submit"] {
  position: relative;
  isolation: isolate;
  background: none !important;
  color: #F4F3EF !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  transition: transform 0.16s ease;
}
.of-form-wrap button[type="submit"]::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-image: ${BTN_PLEIN};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.of-form-wrap button[type="submit"]:hover { transform: translateY(-1.5px); }
`;

const PILLARS = [
  {
    cls: "of-c1",
    title: "Audit SEO / GEO",
    text: "Nous analysons votre visibilité actuelle sur Google, ChatGPT, Gemini, Perplexity et les requêtes qui comptent vraiment pour votre business.",
    points: ["prompts clients testés", "présence IA", "positions Google", "concurrents visibles"],
  },
  {
    cls: "of-c2",
    title: "Contenus answer-first",
    text: "Nous structurons vos pages pour répondre clairement aux questions que vos clients posent déjà aux moteurs de recherche et aux IA.",
    points: ["pages services", "FAQ", "guides", "comparatifs", "réponses directes"],
  },
  {
    cls: "of-c3",
    title: "Entités et positionnement",
    text: "Nous clarifions qui vous êtes, ce que vous faites, pour qui, où, avec quelles preuves et sur quels sujets vous méritez d’être cité.",
    points: ["clarté de l’offre", "preuves de confiance", "territoires sémantiques", "positionnement lisible"],
  },
  {
    cls: "of-c4",
    title: "Schema.org et données structurées",
    text: "Nous renforçons la compréhension technique de votre site avec un balisage propre, utile et cohérent avec vos pages visibles.",
    points: ["schema.org", "métadonnées utiles", "cohérence des entités", "structure technique lisible"],
  },
  {
    cls: "of-c5",
    title: "Citations et sources de confiance",
    text: "Nous travaillons les sources que les IA peuvent utiliser pour comprendre votre marque : site, contenus, profils, annuaires, plateformes, mentions et écosystème externe.",
    points: ["fiches locales", "annuaires", "contenus externes", "avis", "mentions de marque"],
  },
  {
    cls: "of-c6",
    title: "Monitoring mensuel",
    text: "Nous suivons vos positions Google, vos citations IA, les concurrents visibles à votre place et les actions à prioriser mois après mois.",
    points: ["évolution mensuelle", "requêtes suivies", "actions réalisées", "prochaines priorités"],
  },
] as const;

export default function OffrePage() {
  return (
    <>
      <style>{CSS}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offreFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offreServicesJsonLd) }}
      />

      {/* ---------------------------- HERO ---------------------------- */}
      <section className="of of-hero">
        <div className="of-inner">
          <nav aria-label="Fil d'Ariane">
            <ol className="of-crumb">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="of-crumb-now">Notre offre</li>
            </ol>
          </nav>

          <h1>
            <span className="of-m of-m1">Référencement IA</span>{" "}&amp;{" "}GEO{" "}: devenez visible sur Google et les moteurs IA
          </h1>

          <div className="of-duo">
            <p className="of-duo-1">
              PulseoAI accompagne les entreprises qui veulent être citées, comprises et recommandées dans ChatGPT, Gemini, Perplexity, Google AI Overviews et les nouveaux parcours de recherche.
            </p>
            <p className="of-duo-2">
              Si votre marque n’est pas citée dans les réponses, vos concurrents prennent la demande avant même le clic. Le SEO aide à être trouvé. Le GEO aide à être cité et recommandé au bon moment.
            </p>
          </div>

          <div className="of-cta">
            <Link href="/contact" className="of-btn of-btn-1">
              Obtenir un audit
            </Link>
            <Link href="#methode" className="of-btn of-btn-2">
              Voir la méthode
            </Link>
          </div>

          <div className="of-chips">
            <span className="of-chip">Référencement IA</span>
            <span className="of-chip">Google + IA</span>
            <span className="of-chip">Suivi mensuel</span>
            <span className="of-chip">Sources citées</span>
            <span className="of-chip">Plan d’action clair</span>
          </div>
        </div>
      </section>

      {/* --------------------------- POUR QUI -------------------------- */}
      <section className="of">
        <div className="of-inner">
          <h2>
            Pour qui est faite cette offre{" "}
            <span className="of-m of-m2">SEO / GEO</span> ?
          </h2>
          <p className="of-lead">
            Cette offre s’adresse aux entreprises qui ne veulent plus dépendre uniquement de Google Ads, des plateformes ou du bouche-à-oreille. PME, hôtels, restaurants, commerces, e-commerce ou acteurs B2B : l’objectif est le même, rendre votre marque claire, crédible et visible dans les résultats Google comme dans les réponses IA. Si vous ciblez un marché local, vous pouvez aussi consulter notre page{" "}
            <Link href="/agence-seo-geo-nantes">agence SEO / GEO à Nantes</Link>
            . Pour l’hôtellerie, nous détaillons également notre accompagnement{" "}
            <Link href="/geo-hotellerie">GEO hôtellerie</Link>
            .
          </p>

          <div className="of-tags">
            {[
              "PME",
              "Hôtels",
              "Restaurants",
              "Commerces locaux",
              "E-commerce",
              "Entreprises B2B",
              "Marques visibles sur Google et dans les IA",
            ].map((item) => (
              <span key={item} className="of-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- LE CONTEXTE ------------------------ */}
      <section className="of">
        <div className="of-inner">
          <h2>
            Vos clients ne cherchent plus seulement sur{" "}
            <span className="of-m of-m3">Google</span>.
          </h2>
          <p className="of-lead">
            Aujourd’hui, une partie de la demande se joue directement dans les réponses générées par les IA. Un prospect peut demander à ChatGPT quelle agence choisir, quel prestataire contacter ou quelle marque comparer, sans jamais visiter Google. Pour comprendre comment{" "}
            <Link href="/blog/apparaitre-chatgpt-client-cherche-entreprise">apparaître dans ChatGPT</Link>
            , ou ce que changent réellement les{" "}
            <Link href="/blog/google-ai-overviews-entreprises-comprendre">Google AI Overviews</Link>
            , il faut penser référencement IA et non plus seulement positions Google.
          </p>

          <div className="of-points">
            {[
              "Google reste un canal clé",
              "Les moteurs IA deviennent des intermédiaires de confiance",
              "Les marques citées gagnent l’attention avant les autres",
            ].map((item, i) => (
              <p key={item} className={`of-point of-p${i + 1}`}>
                {item}
              </p>
            ))}
          </div>

          <div className="of-quote">
            Le problème n’est pas seulement d’être bien positionné. Le problème, c’est d’être cité au moment où la décision se forme et d’être recommandé par les IA quand la demande devient qualifiée.
          </div>
        </div>
      </section>

      {/* ---------------------------- MÉTHODE -------------------------- */}
      <section id="methode" className="of">
        <div className="of-inner">
          <h2>
            Ce que nous optimisons pour votre{" "}
            <span className="of-m of-m4">référencement IA</span>
          </h2>
          <p className="of-lead">
            Nous combinons audit SEO / GEO, contenus answer-first, données structurées et travail des sources pour rendre votre marque plus visible sur Google et dans les moteurs IA. Si vous voulez voir comment nous cadrons un diagnostic initial, consultez notre guide sur{" "}
            <Link href="/blog/audit-seo-geo-visibilite-ia">l’audit SEO / GEO</Link>
            .
          </p>
        </div>

        <div className="of-cards">
          {PILLARS.map((card) => (
            <div key={card.title} className={`of-card ${card.cls}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <p>{card.text}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="of-inner">
          <p className="of-note">
            Quand le sujet devient plus technique, nous pouvons aussi travailler les fichiers et signaux utilisés par les modèles. Vous pouvez lire notre guide pratique sur{" "}
            <Link href="/blog/llms-txt-guide-pratique">llms.txt</Link>
            {" "}pour comprendre cette couche complémentaire.
          </p>
        </div>
      </section>

      {/* -------------------------- LIVRABLES -------------------------- */}
      <section className="of">
        <div className="of-inner">
          <h2>
            Chaque mois, vous savez{" "}
            <span className="of-m of-m5">ce qui a bougé</span>.
          </h2>
          <p className="of-lead">
            Pas de reporting illisible. Vous recevez une lecture claire de votre visibilité SEO / GEO : où vous apparaissez, où vous êtes absent, quels moteurs IA vous citent, qui prend la place et quelles actions sont prioritaires.
          </p>

          <div className="of-deliv">
            {[
              "Rapport de visibilité SEO / GEO",
              "Liste des prompts clients suivis",
              "Analyse des concurrents cités",
              "Sources citées par les IA",
              "Actions réalisées",
              "Roadmap du mois suivant",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- SEO + GEO ------------------------- */}
      <section className="of">
        <div className="of-inner">
          <h2>
            Référencement IA, GEO et SEO classique :{" "}
            <span className="of-m of-m6">quelle différence</span> ?
          </h2>
          <p className="of-lead">
            Le SEO classique aide votre site à apparaître dans Google. Le référencement IA et le GEO ajoutent une couche : rendre votre marque compréhensible, crédible et citable par les moteurs IA comme ChatGPT, Gemini, Perplexity ou Google AI Overviews.
          </p>

          <div className="of-compare">
            <div className="of-cmp-a">
              <div className="of-cmp-box">
                <p className="of-compare-h">
                  <span>SEO classique</span>
                </p>
                <ul>
                  {["indexation", "pages optimisées", "mots-clés", "maillage interne", "autorité"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="of-cmp-eq">SEO = être trouvé.</p>
            </div>
            <div className="of-cmp-b">
              <div className="of-cmp-box">
                <p className="of-compare-h">
                  <span>Référencement IA / GEO</span>
                </p>
                <ul>
                  {["réponses IA", "entités", "citations", "sources utilisées par les LLM", "prompts clients", "présence dans ChatGPT, Gemini, Perplexity"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="of-cmp-eq">GEO = être cité.</p>
            </div>
          </div>

          <p className="of-note">
            Les deux ne s’opposent pas. Le GEO s’appuie sur les bases SEO, puis les prolonge vers les nouveaux moteurs de réponse. Si vous voulez mesurer votre présence actuelle avant d’agir, vous pouvez{" "}
            <Link href="/contact">demander un audit SEO / GEO</Link>
            .
          </p>
        </div>
      </section>

      {/* ------------------------- TRANSPARENCE ------------------------ */}
      <section className="of">
        <div className="of-inner">
          <h2>
            Ce n’est pas une{" "}
            <span className="of-m of-m7">promesse magique</span>.
          </h2>
          <p className="of-lead">
            Les moteurs IA ne se manipulent pas avec une astuce. Ils croisent les contenus, les sources, les signaux de confiance, les mentions et la cohérence de votre présence en ligne. Le rôle de PulseoAI est de rendre cette visibilité plus claire, plus mesurable et plus crédible.
          </p>

          <div className="of-nots">
            {[
              "Pas d’achat de visibilité artificielle",
              "Pas de promesse de première place garantie",
              "Pas de reporting incompréhensible",
            ].map((item, i) => (
              <p key={item} className={`of-n${i + 1}`}>
                {item}
              </p>
            ))}
          </div>

          <p className="of-note">
            Notre travail consiste à rendre votre entreprise plus claire, plus crédible et plus facile à citer, pour renforcer votre acquisition organique sur Google et dans les réponses IA.
          </p>
        </div>
      </section>

      {/* ------------------------------ FAQ ---------------------------- */}
      <section className="of">
        <div className="of-inner">
          <h2>
            <span className="of-m of-m1">Questions fréquentes</span> sur notre offre SEO / GEO
          </h2>
        </div>

        <div className="of-faq">
          {offreFaqItems.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span aria-hidden>+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ----------------- AUDIT, formulaire identique home ------------- */}
      <section className="of">
        <div className="of-form-head">
          <Image
            sizes="(max-width: 767px) 200px, 420px"
            src="/illustrations/VHl73R9s.png"
            alt="Mascotte lion qui invite à demander un audit"
            width={1536}
            height={1536}
            loading="lazy"
            className="of-lion"
          />
          <h2>
            Vous voulez savoir si votre entreprise est{" "}
            <span className="of-m of-m2">citée par les IA</span> ?
          </h2>
          <p className="of-lead">
            PulseoAI teste vos requêtes stratégiques, vos concurrents, vos sources et votre visibilité actuelle sur Google et dans les moteurs IA pour vous aider à apparaître dans ChatGPT et à capter plus de demandes qualifiées.
          </p>
        </div>

        <div className="of-form-wrap">
          <ContactForm />
        </div>

        <div className="of-inner">
          <p className="of-note">
            Vous préférez échanger de vive voix ? Vous pouvez aussi{" "}
            <Link href="/contact">nous contacter</Link>
            {" "}directement.
          </p>
        </div>
      </section>
    </>
  );
}
