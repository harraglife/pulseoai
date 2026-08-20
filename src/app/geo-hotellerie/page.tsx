import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { BTN_PLEIN, BTN_CONTOUR, feutre, contourCrayon, contourLeger, PASTELS } from "@/lib/paper-da";

export const metadata: Metadata = {
  title: "GEO pour hôtels · Visibilité IA hôtelière",
  description:
    "Rendez votre hôtel recommandable par ChatGPT, Gemini et Google AI Overviews. Stratégie GEO spécialisée hôtellerie : audit, contenus, citations et monitoring.",
  openGraph: {
    title: "GEO pour hôtels · Visibilité IA hôtelière | PulseoAI",
    description:
      "Rendez votre hôtel recommandable par ChatGPT, Gemini et Google AI Overviews. Stratégie GEO spécialisée hôtellerie : audit, contenus, citations et monitoring.",
    url: "https://www.pulseoai.fr/geo-hotellerie",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – GEO Hôtellerie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO pour hôtels · Visibilité IA hôtelière | PulseoAI",
    description:
      "Rendez votre hôtel recommandable par ChatGPT, Gemini et Google AI Overviews. Stratégie GEO spécialisée hôtellerie : audit, contenus, citations et monitoring.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.pulseoai.fr/geo-hotellerie" },
};

const jsonLd = {
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
      name: "GEO Hôtellerie",
      item: "https://www.pulseoai.fr/geo-hotellerie",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Le GEO remplace-t-il le SEO h\u00f4telier ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Le GEO compl\u00e8te le SEO. Le SEO travaille votre visibilit\u00e9 sur Google, tandis que le GEO aide votre h\u00f4tel \u00e0 \u00eatre compris, cit\u00e9 et recommand\u00e9 dans les r\u00e9ponses IA. PulseoAI travaille les deux ensemble.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi un h\u00f4tel doit-il appara\u00eetre dans ChatGPT ou Gemini ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parce que de plus en plus de voyageurs posent directement leurs questions aux IA pour comparer des h\u00f4tels, choisir un s\u00e9jour ou pr\u00e9parer une r\u00e9servation. \u00catre recommand\u00e9 par ChatGPT, Gemini ou Claude devient un nouveau levier de visibilit\u00e9 h\u00f4teli\u00e8re.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce utile pour un h\u00f4tel ind\u00e9pendant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les h\u00f4tels ind\u00e9pendants peuvent se diff\u00e9rencier en travaillant leurs contenus, leurs sources, leurs avis, leur Google Business Profile et leur pr\u00e9sence locale.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que cela aide les r\u00e9servations directes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L\u2019objectif est de mieux orienter la demande vers votre site officiel, en rendant votre h\u00f4tel plus visible et plus cr\u00e9dible sur les requ\u00eates \u00e0 forte intention. C\u2019est un levier concret pour r\u00e9duire la d\u00e9pendance Booking et Expedia.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour voir des r\u00e9sultats ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les premiers signaux peuvent appara\u00eetre en quelques semaines, mais le GEO se travaille surtout sur plusieurs mois, avec un suivi r\u00e9gulier des requ\u00eates voyageurs, des sources cit\u00e9es et des citations IA.",
      },
    },
    {
      "@type": "Question",
      name: "Qu\u2019analyse l\u2019audit h\u00f4tel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous analysons vos requ\u00eates voyageurs, votre pr\u00e9sence dans les r\u00e9ponses IA, vos concurrents cit\u00e9s, vos sources utilis\u00e9es, votre visibilit\u00e9 Google et vos priorit\u00e9s d\u2019action.",
      },
    },
  ],
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details>
      <summary>
        <h3>{question}</h3>
        <span aria-hidden>+</span>
      </summary>
      <p>{answer}</p>
    </details>
  );
}

const CSS = `
/* ================= PAGE GEO HOTELLERIE, DIRECTION PAPIER ================= */
.gh {
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
.gh-inner { max-width: 820px; margin: 0 auto; text-align: center; }

.gh h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2.9vw, 2.15rem);
  line-height: 1.14;
  letter-spacing: -0.028em;
  font-weight: 600;
  color: #111110;
  text-wrap: balance;
}
.gh-lead {
  margin: 20px auto 0;
  max-width: 58ch;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(17, 17, 16, 0.66);
}
.gh-note {
  margin: 28px auto 0;
  max-width: 56ch;
  font-size: 0.94rem;
  line-height: 1.72;
  color: rgba(17, 17, 16, 0.6);
}
.gh-note a,
.gh-lead a {
  color: #111110;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
}

/* --- surlignage feutre --- */
.gh-m {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.24em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.gh-m1 { background-image: ${feutre(PASTELS.peche)}; }
.gh-m2 { background-image: ${feutre(PASTELS.vertEau)}; }
.gh-m3 { background-image: ${feutre(PASTELS.bleu)}; }
.gh-m4 { background-image: ${feutre(PASTELS.jaune)}; }
.gh-m5 { background-image: ${feutre(PASTELS.rose)}; }
.gh-m6 { background-image: ${feutre(PASTELS.lavande)}; }
.gh-m7 { background-image: ${feutre(PASTELS.pistache)}; }

/* ---------------------------- HERO ------------------------------------- */
.gh-hero { padding-top: 30px; }
.gh-crumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.84rem;
  color: rgba(17, 17, 16, 0.5);
  margin-bottom: 34px;
}
.gh-crumb a { color: rgba(17, 17, 16, 0.5); text-decoration: none; }
.gh-crumb a:hover { color: #111110; }
.gh-crumb-now { color: #111110; font-weight: 500; }
.gh h1 {
  margin: 0 auto;
  font-size: clamp(1.95rem, 4.4vw, 3.05rem);
  line-height: 1.08;
  letter-spacing: -0.038em;
  font-weight: 600;
  color: #111110;
  max-width: 21ch;
  text-wrap: balance;
}

/* les 2 paragraphes du hero, cote a cote dans 2 cadres */
.gh-duo {
  margin: 38px auto 0;
  display: grid;
  gap: 16px;
  max-width: 900px;
  text-align: left;
}
@media (min-width: 800px) { .gh-duo { grid-template-columns: 1fr 1fr; gap: 22px; } }
.gh-duo p {
  position: relative;
  isolation: isolate;
  margin: 0;
  padding: 22px 24px;
  font-size: 0.96rem;
  line-height: 1.72;
}
.gh-duo p::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.gh-duo-1 { color: rgba(17, 17, 16, 0.68); }
.gh-duo-1::before { background-image: ${contourCrayon(PASTELS.peche, 12)}; }
.gh-duo-2 { color: #111110; font-weight: 500; }
.gh-duo-2::before { background-image: ${contourCrayon(PASTELS.vertEau, 13)}; }

/* boutons crayon */
.gh-cta {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
}
.gh-btn {
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
.gh-btn::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.gh-btn:hover { transform: translateY(-1.5px); }
.gh-btn-1 { color: #F4F3EF; }
.gh-btn-1::before { background-image: ${BTN_PLEIN}; }
.gh-btn-2 { color: #111110; }
.gh-btn-2::before { background-image: ${BTN_CONTOUR}; }

.gh-chips {
  margin-top: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 22px;
}
.gh-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.58);
}
.gh-chip::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.4);
}

/* ------------------- GRILLE DE CARTES A CADRE COLORE -------------------- */
.gh-grid {
  margin: 40px auto 0;
  display: grid;
  gap: 26px;
  max-width: 1000px;
  text-align: left;
}
@media (min-width: 700px) { .gh-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1000px) { .gh-grid-3 { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1000px) { .gh-grid-4 { grid-template-columns: repeat(4, 1fr); } }
.gh-grid-2 { max-width: 860px; }

.gh-card {
  position: relative;
  isolation: isolate;
  padding: 24px 24px 26px;
}
.gh-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/* le cadre reprend la couleur du surlignage du titre de la carte */
.gh-k1::before { background-image: ${contourCrayon(PASTELS.peche, 31)}; }
.gh-k2::before { background-image: ${contourCrayon(PASTELS.vertEau, 32)}; }
.gh-k3::before { background-image: ${contourCrayon(PASTELS.bleu, 33)}; }
.gh-k4::before { background-image: ${contourCrayon(PASTELS.jaune, 34)}; }
.gh-k5::before { background-image: ${contourCrayon(PASTELS.rose, 35)}; }
.gh-k6::before { background-image: ${contourCrayon(PASTELS.lavande, 36)}; }
.gh-k7::before { background-image: ${contourCrayon(PASTELS.pistache, 37)}; }

.gh-card h3,
.gh-card-h {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #111110;
}
.gh-card h3 span,
.gh-card-h span {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.1em 0.26em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.gh-k1 h3 span, .gh-k1 .gh-card-h span { background-image: ${feutre(PASTELS.peche)}; }
.gh-k2 h3 span, .gh-k2 .gh-card-h span { background-image: ${feutre(PASTELS.vertEau)}; }
.gh-k3 h3 span, .gh-k3 .gh-card-h span { background-image: ${feutre(PASTELS.bleu)}; }
.gh-k4 h3 span, .gh-k4 .gh-card-h span { background-image: ${feutre(PASTELS.jaune)}; }
.gh-k5 h3 span, .gh-k5 .gh-card-h span { background-image: ${feutre(PASTELS.rose)}; }
.gh-k6 h3 span, .gh-k6 .gh-card-h span { background-image: ${feutre(PASTELS.lavande)}; }
.gh-k7 h3 span, .gh-k7 .gh-card-h span { background-image: ${feutre(PASTELS.pistache)}; }

.gh-card p {
  margin: 14px 0 0;
  font-size: 0.89rem;
  line-height: 1.68;
  color: rgba(17, 17, 16, 0.62);
}
.gh-card ul { margin: 14px 0 0; padding: 0; list-style: none; }
.gh-card li {
  font-size: 0.84rem;
  line-height: 1.5;
  color: rgba(17, 17, 16, 0.72);
  padding-left: 15px;
  position: relative;
}
.gh-card li + li { margin-top: 6px; }
.gh-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: rgba(17, 17, 16, 0.35);
}

/* pastilles de requetes dans les cartes prompts voyageurs */
.gh-q { margin: 16px 0 0; display: flex; flex-wrap: wrap; gap: 8px; }
.gh-q span {
  position: relative;
  isolation: isolate;
  padding: 7px 13px;
  font-size: 0.79rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.74);
}
.gh-q span::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 23, 0.35)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* --------------------------- LIVRABLES ---------------------------------- */
.gh-deliv {
  margin: 34px auto 0;
  display: grid;
  gap: 10px;
  max-width: 760px;
  text-align: left;
}
@media (min-width: 640px) { .gh-deliv { grid-template-columns: 1fr 1fr; } }
.gh-deliv div {
  position: relative;
  isolation: isolate;
  padding: 13px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(17, 17, 16, 0.76);
}
.gh-deliv div::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 31, 0.38)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

/* formule sous chaque colonne du comparatif SEO / GEO */
.gh-eq {
  margin: 18px 0 0;
  text-align: center;
  font-size: 1.02rem;
  font-weight: 600;
  color: #111110;
}

/* ----------------------------- FAQ -------------------------------------- */
.gh-faq { margin: 36px auto 0; max-width: 760px; text-align: left; }
.gh-faq details { border-bottom: 1.5px solid rgba(17, 17, 16, 0.16); }
.gh-faq summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  cursor: pointer;
  list-style: none;
  padding: 18px 0;
}
.gh-faq summary::-webkit-details-marker { display: none; }
.gh-faq summary h3 {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #111110;
}
.gh-faq summary span {
  flex-shrink: 0;
  font-size: 1.15rem;
  font-weight: 400;
  color: #111110;
  transition: transform 0.18s ease;
}
.gh-faq details[open] summary span { transform: rotate(45deg); }
.gh-faq p {
  margin: 0;
  padding: 0 0 20px;
  max-width: 72ch;
  font-size: 0.93rem;
  line-height: 1.72;
  color: rgba(17, 17, 16, 0.66);
}

/* -------------------- SECTION AUDIT, formulaire home -------------------- */
.gh-form-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 720px;
  margin: 0 auto 26px;
  text-align: center;
}
.gh-lion {
  width: auto;
  height: clamp(96px, 12vh, 124px);
  max-width: 100%;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
}
.gh-form-wrap { max-width: 720px; margin: 0 auto; }

/* habillage papier du formulaire existant, logique inchangee */
.gh-form-wrap form,
.gh-form-wrap .rounded-2xl {
  background: none !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
}
.gh-form-wrap form {
  display: grid !important;
  grid-template-columns: 1fr;
  gap: 12px 18px;
}
@media (min-width: 640px) {
  .gh-form-wrap form { grid-template-columns: 1fr 1fr; }
  .gh-form-wrap form > div:has(#message),
  .gh-form-wrap form > div:has(.text-red-700),
  .gh-form-wrap form > button { grid-column: 1 / -1; }
}
.gh-form-wrap form > * + * { margin-top: 0 !important; }
.gh-form-wrap form > div > * + * { margin-top: 4px !important; }
.gh-form-wrap label { color: #111110 !important; font-weight: 500; font-size: 0.86rem !important; }
.gh-form-wrap input,
.gh-form-wrap select { height: 42px !important; }
.gh-form-wrap textarea { min-height: 76px !important; }
.gh-form-wrap input,
.gh-form-wrap select,
.gh-form-wrap textarea { font-size: 0.95rem !important; }
.gh-form-wrap button[type="submit"] { height: 46px !important; margin-top: 6px !important; }
.gh-form-wrap input,
.gh-form-wrap textarea,
.gh-form-wrap select {
  background-color: transparent !important;
  background-image: ${contourLeger("111110", 61, 0.45)} !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  color: #111110 !important;
}
.gh-form-wrap input::placeholder,
.gh-form-wrap textarea::placeholder { color: rgba(17, 17, 16, 0.42) !important; }
.gh-form-wrap input:focus,
.gh-form-wrap textarea:focus,
.gh-form-wrap select:focus,
.gh-form-wrap input:focus-visible,
.gh-form-wrap textarea:focus-visible,
.gh-form-wrap select:focus-visible {
  outline: 2px solid rgba(17, 17, 16, 0.55) !important;
  outline-offset: 2px !important;
  background-image: ${contourLeger("111110", 61, 0.75)} !important;
}
.gh-form-wrap button[type="submit"] {
  position: relative;
  isolation: isolate;
  background: none !important;
  color: #F4F3EF !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  transition: transform 0.16s ease;
}
.gh-form-wrap button[type="submit"]::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-image: ${BTN_PLEIN};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.gh-form-wrap button[type="submit"]:hover { transform: translateY(-1.5px); }
`;

const PROBLEMES = [
  {
    k: "gh-k1",
    title: "Les OTA compressent vos marges",
    text: "Booking, Expedia et les plateformes de réservation captent une part importante de la demande. Chaque réservation directe gagnée améliore votre rentabilité et réduit votre dépendance OTA.",
  },
  {
    k: "gh-k2",
    title: "Les IA filtrent les options",
    text: "Une réponse IA ne liste pas dix hôtels. Elle recommande quelques établissements. Si vous n’êtes pas cité dans ChatGPT, Gemini ou Google AI Overviews, vous êtes invisible.",
  },
  {
    k: "gh-k3",
    title: "Les voyageurs posent des requêtes précises",
    text: "Meilleur hôtel avec spa à Nantes, hôtel pour séminaire à Lyon, hôtel familial proche plage en Bretagne : les recherches deviennent conversationnelles.",
  },
  {
    k: "gh-k4",
    title: "Le constat est simple",
    text: "Les OTA prennent vos marges. Les IA redistribuent l’attention. Les hôtels qui investissent maintenant dans le SEO / GEO prennent une avance durable.",
  },
] as const;

const LEVIERS = [
  {
    k: "gh-k1",
    title: "Audit de visibilité hôtel",
    text: "Nous testons les requêtes que vos voyageurs posent sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews pour construire un audit SEO / GEO hôtel exploitable.",
    points: [
      "requêtes spa, séminaire, famille, business, localisation",
      "concurrents cités",
      "présence ou absence de votre hôtel",
      "score de visibilité initial",
    ],
  },
  {
    k: "gh-k2",
    title: "Pages et contenus orientés voyageurs",
    text: "Nous créons ou optimisons les pages qui répondent aux vraies intentions : séjour bien-être, week-end romantique, séminaire, parking, restaurant, animaux acceptés, proximité gare ou plage, pour renforcer à la fois le SEO hôtelier et le référencement ChatGPT hôtel.",
    points: ["pages services", "FAQ hôtel", "guides de destination", "contenus locaux", "réponses directes"],
  },
  {
    k: "gh-k3",
    title: "Clarté de l’offre et maillage interne",
    text: "Nous rendons votre site plus lisible pour Google, les IA et les voyageurs, en clarifiant vos services, vos avantages, votre localisation et vos preuves.",
    points: [
      "proposition de valeur claire",
      "pages mieux structurées",
      "maillage entre services",
      "parcours vers la réservation directe",
    ],
  },
  {
    k: "gh-k4",
    title: "Sources et citations hôtelières",
    text: "Nous renforçons les sources citées par les IA pour recommander un hôtel : Google Business Profile, avis clients, annuaires, plateformes touristiques, contenus externes et mentions de marque.",
    points: ["Google Business Profile", "TripAdvisor", "Foursquare", "annuaires tourisme", "avis clients", "presse locale"],
  },
  {
    k: "gh-k5",
    title: "Monitoring mensuel",
    text: "Chaque mois, nous suivons vos requêtes, vos citations IA, vos concurrents, vos sources et l’évolution de votre visibilité SEO / GEO pour l’hôtellerie.",
    points: ["score mensuel", "requêtes gagnées", "concurrents cités", "prochaines actions"],
  },
] as const;

const PROMPTS = [
  {
    k: "gh-k1",
    title: "Spa & bien-être",
    items: [
      "meilleur hôtel avec spa à Nantes",
      "hôtel avec hammam et piscine intérieure",
      "week-end bien-être proche de la mer",
    ],
  },
  {
    k: "gh-k2",
    title: "Séminaire & business",
    items: [
      "hôtel pour séminaire à Lyon",
      "hôtel business avec parking à Paris",
      "hôtel avec salle de réunion et restaurant",
    ],
  },
  {
    k: "gh-k3",
    title: "Famille & loisirs",
    items: [
      "hôtel familial proche plage en Bretagne",
      "hôtel avec chambres communicantes",
      "hôtel pour week-end en famille",
    ],
  },
  {
    k: "gh-k4",
    title: "Localisation",
    items: [
      "hôtel proche gare à Nantes",
      "hôtel centre-ville avec parking",
      "où dormir près de [lieu touristique]",
    ],
  },
  {
    k: "gh-k5",
    title: "Haut de gamme",
    items: [
      "meilleur hôtel 4 étoiles avec spa",
      "boutique hôtel romantique",
      "hôtel premium pour week-end",
    ],
  },
  {
    k: "gh-k6",
    title: "Réservation directe",
    items: [
      "hôtel avec meilleur prix en direct",
      "hôtel à réserver sans Booking",
      "hôtel avec offres sur site officiel",
    ],
  },
] as const;

const RESULTATS = [
  {
    k: "gh-k1",
    title: "Plus de visibilité qualifiée",
    text: "Votre hôtel apparaît sur davantage de requêtes à forte intention sur Google et dans les moteurs IA.",
  },
  {
    k: "gh-k2",
    title: "Moins de dépendance aux OTA",
    text: "Plus les voyageurs trouvent votre site officiel, plus vous pouvez développer la réservation directe.",
  },
  {
    k: "gh-k3",
    title: "Plus de confiance",
    text: "Les IA s’appuient sur vos sources, vos avis clients hôtel et vos contenus pour vous recommander.",
  },
  {
    k: "gh-k4",
    title: "Meilleure lecture concurrentielle",
    text: "Vous savez quels hôtels sont cités, sur quelles requêtes et pourquoi.",
  },
] as const;

const ETAPES = [
  {
    k: "gh-k1",
    step: "Étape 1",
    title: "Audit initial",
    text: "Nous testons votre hôtel sur les requêtes voyageurs prioritaires.",
  },
  {
    k: "gh-k2",
    step: "Étape 2",
    title: "Plan d’action",
    text: "Nous identifions les pages, sources et contenus à corriger ou créer.",
  },
  {
    k: "gh-k3",
    step: "Étape 3",
    title: "Mise en place",
    text: "Nous optimisons votre présence pour Google et les moteurs IA.",
  },
  {
    k: "gh-k4",
    step: "Étape 4",
    title: "Suivi mensuel",
    text: "Vous recevez un rapport clair avec vos progrès, vos concurrents et les prochaines actions.",
  },
] as const;

export default function GeoHotelleriePage() {
  return (
    <>
      <style>{CSS}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ---------------------------- HERO ---------------------------- */}
      <section className="gh gh-hero">
        <div className="gh-inner">
          <nav aria-label="Fil d'Ariane">
            <ol className="gh-crumb">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="gh-crumb-now">GEO Hôtellerie</li>
            </ol>
          </nav>

          <h1>
            Faites recommander <span className="gh-m gh-m1">votre hôtel</span> par Google et les moteurs IA.
          </h1>

          <div className="gh-duo">
            <p className="gh-duo-1">
              PulseoAI aide les hôtels à gagner en visibilité sur Google et dans les moteurs IA comme ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, qui influencent déjà la façon dont les voyageurs découvrent, comparent et choisissent un hôtel.
            </p>
            <p className="gh-duo-2">
              Si votre établissement n’apparaît pas dans la réponse, un concurrent peut capter la demande avant même que le voyageur visite votre site officiel ou votre moteur de réservation directe.
            </p>
          </div>

          <div className="gh-cta">
            <Link href="/contact" className="gh-btn gh-btn-1">
              Obtenir un audit hôtel
            </Link>
            <Link href="#definition" className="gh-btn gh-btn-2">
              Comprendre le GEO hôtelier
            </Link>
          </div>

          <div className="gh-chips">
            <span className="gh-chip">Google + IA</span>
            <span className="gh-chip">Réservations directes</span>
            <span className="gh-chip">Sources citées</span>
            <span className="gh-chip">Suivi mensuel</span>
          </div>
        </div>
      </section>

      {/* -------------------------- LE PROBLÈME ------------------------ */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            <span className="gh-m gh-m2">Les voyageurs changent.</span> Vos canaux d’acquisition aussi.
          </h2>
          <p className="gh-lead">
            Booking, Expedia et Google restent importants. Mais une nouvelle étape apparaît avant la réservation : la recommandation par les IA. C’est précisément là qu’une agence SEO hôtel et une agence GEO hôtellerie deviennent utiles.
          </p>
        </div>

        <div className="gh-grid gh-grid-4">
          {PROBLEMES.map((card) => (
            <div key={card.title} className={`gh-card ${card.k}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- DÉFINITION ------------------------ */}
      <section id="definition" className="gh">
        <div className="gh-inner">
          <h2>
            Le <span className="gh-m gh-m3">GEO hôtelier</span> consiste à rendre votre établissement compréhensible et recommandable par les IA.
          </h2>
          <p className="gh-lead">
            Le Generative Engine Optimization appliqué à l’hôtellerie consiste à structurer votre présence en ligne pour que les moteurs IA comprennent votre hôtel, ses services, sa localisation, ses preuves de confiance et les raisons de le recommander. Pour PulseoAI, cela signifie travailler ensemble le référencement IA hôtelier, la visibilité Google hôtel et les signaux qui rendent un établissement recommandable.
          </p>
        </div>

        <div className="gh-grid gh-grid-2">
          <div className="gh-card gh-k5">
            <p className="gh-card-h">
              <span>Avant GEO</span>
            </p>
            <ul>
              {[
                "votre hôtel n’est pas cité",
                "les concurrents apparaissent",
                "les IA s’appuient sur des sources incomplètes",
                "la réservation part ailleurs",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="gh-card gh-k7">
            <p className="gh-card-h">
              <span>Après GEO</span>
            </p>
            <ul>
              {[
                "votre hôtel est mieux compris",
                "vos sources sont renforcées",
                "vos contenus répondent aux vraies questions voyageurs",
                "votre visibilité est suivie chaque mois",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------- MÉTHODE -------------------------- */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            <span className="gh-m gh-m4">Cinq leviers</span> pour faire progresser votre visibilité hôtel sur Google et les IA.
          </h2>
        </div>

        <div className="gh-grid gh-grid-3">
          {LEVIERS.map((card) => (
            <div key={card.title} className={`gh-card ${card.k}`}>
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
      </section>

      {/* ----------------------- PROMPTS VOYAGEURS --------------------- */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            Nous testons les questions que <span className="gh-m gh-m5">vos futurs clients</span> posent vraiment.
          </h2>
        </div>

        <div className="gh-grid gh-grid-3">
          {PROMPTS.map((card) => (
            <div key={card.title} className={`gh-card ${card.k}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <div className="gh-q">
                {card.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------- LIVRABLES -------------------------- */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            Un reporting hôtelier clair, <span className="gh-m gh-m6">orienté réservations</span>.
          </h2>
          <p className="gh-lead">
            Vous ne recevez pas un rapport illisible. Vous voyez les requêtes où votre hôtel apparaît, les concurrents qui prennent la place, les sources utilisées par les IA, les citations IA gagnées et les actions prioritaires pour progresser.
          </p>

          <div className="gh-deliv">
            {[
              "Rapport de visibilité hôtel",
              "Liste des prompts voyageurs",
              "Comparaison avec concurrents locaux",
              "Sources citées par les IA",
              "Actions réalisées",
              "Roadmap du mois suivant",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- RÉSULTATS ------------------------- */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            Ce que le <span className="gh-m gh-m7">SEO / GEO</span> peut changer pour un hôtel.
          </h2>
        </div>

        <div className="gh-grid gh-grid-4">
          {RESULTATS.map((card) => (
            <div key={card.title} className={`gh-card ${card.k}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="gh-inner">
          <p className="gh-note">
            Les résultats dépendent de votre situation de départ, de votre marché, de vos concurrents et de la régularité du travail effectué.
          </p>
        </div>
      </section>

      {/* --------------------------- SEO + GEO ------------------------- */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            Le GEO ne remplace pas le SEO hôtelier. <span className="gh-m gh-m1">Il le prolonge.</span>
          </h2>
          <p className="gh-lead">
            Le SEO aide votre hôtel à être trouvé sur Google. Le GEO aide votre hôtel à être cité dans les réponses générées par les IA. Les deux canaux se renforcent : un site clair, utile, bien structuré et cité par des sources fiables a plus de chances d’être compris par Google, Google AI Overviews et les moteurs IA comme ChatGPT, Gemini, Claude ou Perplexity.
          </p>
        </div>

        <div className="gh-grid gh-grid-2">
          <div>
            <div className="gh-card gh-k3">
              <p className="gh-card-h">
                <span>SEO hôtelier</span>
              </p>
              <ul>
                {["visibilité Google", "pages services", "destination", "maillage interne", "réservation directe"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="gh-eq">SEO = votre hôtel est trouvé.</p>
          </div>
          <div>
            <div className="gh-card gh-k1">
              <p className="gh-card-h">
                <span>GEO hôtelier</span>
              </p>
              <ul>
                {["prompts voyageurs", "citations IA", "sources utilisées", "concurrents recommandés", "visibilité ChatGPT / Gemini / Claude / Perplexity"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="gh-eq">GEO = votre hôtel est recommandé.</p>
          </div>
        </div>
      </section>

      {/* ------------------------ ACCOMPAGNEMENT ----------------------- */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            Un accompagnement pensé pour <span className="gh-m gh-m2">les hôteliers</span>.
          </h2>
        </div>

        <div className="gh-grid gh-grid-4">
          {ETAPES.map((card) => (
            <div key={card.title} className={`gh-card ${card.k}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="gh-inner">
          <p className="gh-note">
            <Link href="/contact">Obtenir un audit hôtel</Link>
          </p>
        </div>
      </section>

      {/* ------------------------------ FAQ ---------------------------- */}
      <section className="gh">
        <div className="gh-inner">
          <h2>
            <span className="gh-m gh-m1">Questions fréquentes</span> sur le GEO pour hôtels
          </h2>
        </div>

        <div className="gh-faq">
            <FaqItem
              question="Le GEO remplace-t-il le SEO hôtelier ?"
              answer="Non. Le GEO complète le SEO. Le SEO travaille votre visibilité sur Google, tandis que le GEO aide votre hôtel à être compris, cité et recommandé dans les réponses IA. PulseoAI travaille les deux ensemble."
            />
            <FaqItem
              question="Pourquoi un hôtel doit-il apparaître dans ChatGPT ou Gemini ?"
              answer="Parce que de plus en plus de voyageurs posent directement leurs questions aux IA pour comparer des hôtels, choisir un séjour ou préparer une réservation. Être recommandé par ChatGPT, Gemini ou Claude devient un nouveau levier de visibilité hôtelière."
            />
            <FaqItem
              question="Est-ce utile pour un hôtel indépendant ?"
              answer="Oui. Les hôtels indépendants peuvent se différencier en travaillant leurs contenus, leurs sources, leurs avis, leur Google Business Profile et leur présence locale."
            />
            <FaqItem
              question="Est-ce que cela aide les réservations directes ?"
              answer="L’objectif est de mieux orienter la demande vers votre site officiel, en rendant votre hôtel plus visible et plus crédible sur les requêtes à forte intention. C’est un levier concret pour réduire la dépendance Booking et Expedia."
            />
            <FaqItem
              question="Combien de temps faut-il pour voir des résultats ?"
              answer="Les premiers signaux peuvent apparaître en quelques semaines, mais le GEO se travaille surtout sur plusieurs mois, avec un suivi régulier des requêtes voyageurs, des sources citées et des citations IA."
            />
            <FaqItem
              question="Qu’analyse l’audit hôtel ?"
              answer="Nous analysons vos requêtes voyageurs, votre présence dans les réponses IA, vos concurrents cités, vos sources utilisées, votre visibilité Google et vos priorités d’action."
            />
        </div>
      </section>

      {/* ----------------- AUDIT, formulaire identique home ------------- */}
      <section className="gh">
        <div className="gh-form-head">
          <Image
            src="/illustrations/VHl73R9s.png"
            alt="Mascotte lion qui invite à demander un audit hôtel"
            width={1536}
            height={1536}
            loading="lazy"
            className="gh-lion"
          />
          <h2>
            Votre hôtel est-il cité quand les voyageurs demandent <span className="gh-m gh-m4">où réserver</span> ?
          </h2>
          <p className="gh-lead">
            PulseoAI teste votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis vous montre les requêtes, les concurrents, les sources citées et les leviers qui comptent pour votre hôtel.
          </p>
        </div>

        <div className="gh-form-wrap">
          <ContactForm />
        </div>

        <div className="gh-inner">
          <p className="gh-note">
            <Link href="/offre">Voir notre offre complète</Link>
          </p>
        </div>
      </section>
    </>
  );
}
