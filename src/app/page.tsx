import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

/**
 * PAGE D'ACCUEIL
 *
 * Prototype du HERO de la home pulseoai en Direction papier.
 * Valeurs strictement issues de la DA fournie (aucune source externe).
 * Passe par src/app/layout.tsx : conserve le Header et le Footer du site.
 * Uniquement le hero, aucune carte. CSS scope par le prefixe .th-.
 */

export const metadata: Metadata = {
  title: "Agence GEO \u00b7 Visibilit\u00e9 IA pour h\u00f4tels et entreprises",
  description:
    "Faites appara\u00eetre votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO \u00e0 Nantes. Experts h\u00f4tellerie et PME.",
  openGraph: {
    title: "PulseoAI \u00b7 Agence GEO, experts en r\u00e9f\u00e9rencement IA",
    description:
      "Faites appara\u00eetre votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO \u00e0 Nantes.",
    url: "https://www.pulseoai.fr",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PulseoAI \u2013 Agence GEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseoAI \u00b7 Agence GEO, experts en r\u00e9f\u00e9rencement IA",
    description:
      "Faites appara\u00eetre votre entreprise sur ChatGPT, Claude et Gemini.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
};

/** FAQ affichee en bas de page, source unique du balisage FAQPage. */
const HOME_FAQ = [
  {
    q: "Qu\u2019est-ce que le r\u00e9f\u00e9rencement IA ?",
    a: "Le r\u00e9f\u00e9rencement IA consiste \u00e0 rendre une entreprise compr\u00e9hensible, cr\u00e9dible et citable dans les r\u00e9ponses g\u00e9n\u00e9r\u00e9es par ChatGPT, Gemini, Perplexity, Google AI Overviews et les nouveaux moteurs de recherche.",
  },
  {
    q: "Quelle diff\u00e9rence entre SEO et GEO ?",
    a: "Le SEO aide votre site \u00e0 appara\u00eetre dans Google. Le GEO ajoute une couche : faire comprendre votre marque aux moteurs IA pour qu\u2019elle puisse \u00eatre cit\u00e9e, recommand\u00e9e ou utilis\u00e9e comme source dans les r\u00e9ponses.",
  },
  {
    q: "Comment appara\u00eetre dans ChatGPT ?",
    a: "Il faut clarifier votre offre, structurer vos contenus, travailler vos entit\u00e9s, renforcer vos sources externes, utiliser un balisage Schema.org coh\u00e9rent et suivre les requ\u00eates o\u00f9 vos clients cherchent une solution.",
  },
  {
    q: "Le GEO remplace-t-il le SEO ?",
    a: "Non. Le GEO compl\u00e8te le SEO. Les bases restent importantes : indexation, pages claires, maillage interne, autorit\u00e9, contenus utiles et performance technique.",
  },
  {
    q: "Combien de temps faut-il pour \u00eatre visible dans les r\u00e9ponses IA ?",
    a: "Cela d\u00e9pend du march\u00e9, de la concurrence et de l\u2019\u00e9tat du site. En g\u00e9n\u00e9ral, le travail se construit sur plusieurs mois : audit, contenus, structuration, citations, suivi et ajustements.",
  },
  {
    q: "PulseoAI travaille avec quels types d\u2019entreprises ?",
    a: "PulseoAI accompagne les PME, h\u00f4tels, restaurants, commerces, e-commerce, services locaux et entreprises B2B qui veulent am\u00e9liorer leur visibilit\u00e9 sur Google et dans les moteurs IA.",
  },
] as const;

const homeBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.pulseoai.fr" },
  ],
};

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// ---------------------------------------------------------------------------
// Motifs SVG derives directement des parametres de la DA papier.
// ---------------------------------------------------------------------------

// Grain : feTurbulence fractalNoise, baseFrequency 0.85, numOctaves 4,
// tuile 240x240, stitchTiles stitch, desature (saturate 0).
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E" +
  "%3Cfilter id='grain'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E" +
  "%3CfeColorMatrix type='saturate' values='0'/%3E" +
  "%3C/filter%3E" +
  "%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E" +
  "%3C/svg%3E\")";

// Bouton principal : forme pleine #111110 a bord rugueux crayon
// (feTurbulence baseFrequency 0.9 numOctaves 3 seed 7 + feDisplacementMap 3.4).
const BTN_PLEIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cfilter id='rough' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='7' result='n'/%3E" +
  "%3CfeDisplacementMap in='SourceGraphic' in2='n' scale='3.4' xChannelSelector='R' yChannelSelector='G'/%3E" +
  "%3C/filter%3E" +
  "%3Cpath filter='url(%23rough)' d='M3,5.5 L197,4 L196,55.5 L4,57 Z' fill='%23111110'/%3E" +
  "%3C/svg%3E\")";

// Bouton secondaire : contour plume, 4 segments droits qui se croisent aux
// coins, trait 1.8px non-scaling.
const BTN_CONTOUR =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cg fill='none' stroke='%23111110' stroke-width='1.8' stroke-linecap='round' vector-effect='non-scaling-stroke'%3E" +
  "%3Cpath d='M3.9,6.1 L196.6,4.3'/%3E" +
  "%3Cpath d='M196.9,3.5 L195.3,56.4'/%3E" +
  "%3Cpath d='M196.4,55.1 L3.6,56.5'/%3E" +
  "%3Cpath d='M4.2,57.1 L5.4,3.8'/%3E" +
  "%3C/g%3E" +
  "%3C/svg%3E\")";

// Surlignage feutre parametrable : deux passes, bouts ronds, irregulier.
// hex sans le "#", ex "F7BC90".
const feutre = (hex: string) =>
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cg fill='none' stroke='%23" + hex + "' stroke-linecap='round'%3E" +
  "%3Cpath d='M8,22 C55,16 145,27 193,18' stroke-width='26' stroke-opacity='0.9'/%3E" +
  "%3Cpath d='M4,41 C70,47 130,35 197,43' stroke-width='24' stroke-opacity='0.75'/%3E" +
  "%3C/g%3E" +
  "%3C/svg%3E\")";

// Surlignage du titre : peche (DA).
const SURLIGNEUR = feutre("F7BC90");

// Remplissage de carte au FEUTRE : passes horizontales superposees, bouts

// Contour de carte trace au crayon/feutre pastel : rectangle stroke, bords
// rendus irreguliers par feTurbulence + feDisplacementMap (meme technique que
// les bords crayon des boutons). hex sans le "#".
const contourCrayon = (hex: string, seed: number) =>
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cfilter id='c" + seed + "' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='" + seed + "' result='n'/%3E" +
  "%3CfeDisplacementMap in='SourceGraphic' in2='n' scale='3.4' xChannelSelector='R' yChannelSelector='G'/%3E" +
  "%3C/filter%3E" +
  "%3Cpath filter='url(%23c" + seed + ")' d='M3.5,5 L196.5,3.8 L195.6,56.2 L4.2,57 Z' " +
  "fill='none' stroke='%23" + hex + "' stroke-width='2.6' stroke-linejoin='round' vector-effect='non-scaling-stroke'/%3E" +
  "%3C/svg%3E\")";

// Contour crayon leger (pour les champs de formulaire) : meme trace, opacite reduite.
const contourLeger = (hex: string, seed: number, opacity: number) =>
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cfilter id='l" + seed + "' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='" + seed + "' result='n'/%3E" +
  "%3CfeDisplacementMap in='SourceGraphic' in2='n' scale='2.4' xChannelSelector='R' yChannelSelector='G'/%3E" +
  "%3C/filter%3E" +
  "%3Cpath filter='url(%23l" + seed + ")' d='M3.5,5 L196.5,3.8 L195.6,56.2 L4.2,57 Z' " +
  "fill='none' stroke='%23" + hex + "' stroke-opacity='" + opacity + "' stroke-width='1.8' " +
  "stroke-linejoin='round' vector-effect='non-scaling-stroke'/%3E" +
  "%3C/svg%3E\")";

const CSS = `
/* sur cette page de test : le <main> ne s'etire pas, la section s'arrete sur son contenu */
main.flex-1 { flex: 0 0 auto !important; }

/* --- grain papier : fixed, plein ecran, sous le contenu (DA) --- */
.th-grain {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: ${GRAIN};
  background-size: 240px 240px;
  mix-blend-mode: multiply;
  opacity: 0.53;
}

.th-hero {
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  padding: 60px 24px 16px;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

@media (min-width: 1024px) {
  .th-hero { padding: 72px 32px 20px; }
}

.th-inner { width: 100%; max-width: 1080px; }

/* --- titre : encre #111110, graisse 600, -0.025em, interligne 1.06 --- */
.th-title {
  margin: 0 auto;
  max-width: 16em;
  font-size: clamp(2rem, 4.6vw, 3.5rem);
  line-height: 1.06;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}

/* surlignage feutre sur un mot */
.th-mark { position: relative; display: inline; isolation: isolate; }
.th-mark > span { position: relative; z-index: 1; }
.th-mark::before {
  content: "";
  position: absolute;
  z-index: 0;
  left: -0.16em;
  right: -0.18em;
  top: 0;
  bottom: -0.05em;
  background-image: ${SURLIGNEUR};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform: rotate(-0.8deg);
}

/* --- sous-titre : encre secondaire --- */
.th-sub {
  margin: 24px auto 0;
  max-width: 34em;
  font-size: clamp(1.05rem, 1.5vw, 1.22rem);
  line-height: 1.65;
  color: rgba(17, 17, 16, 0.62);
}

/* --- lion centre, boutons cales juste au-dessus des doigts --- */
.th-stage {
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin-top: 44px;
}
.th-stage-lion {
  flex: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  /* on rogne le vide transparent sous les pieds (~11% du PNG) pour que la
     section finisse pile sous les chaussures */
  overflow: hidden;
  height: calc(clamp(230px, 34vh, 380px) * 0.9);
}
.th-lion {
  width: auto;
  height: clamp(230px, 34vh, 380px);
  max-width: 100%;
  object-fit: contain;
}
@media (min-width: 820px) {
  .th-hero { padding-bottom: 12px; }
}

/* les boutons se positionnent aux pointes des doigts du lion (haut-gauche / haut-droite) */
.th-stage .th-btn { position: absolute; top: 4%; z-index: 2; white-space: nowrap; }
.th-stage .th-btn-primary { right: 100%; margin-right: -82px; }
.th-stage .th-btn-ghost { left: 100%; margin-left: -82px; }

/* --- boutons (DA) --- */
.th-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  padding: 18px 32px;
  font-size: 0.95rem;
  font-weight: 550;
  letter-spacing: 0.005em;
  cursor: pointer;
  border: 0;
  border-radius: 0;
  background: none;
  transition: transform 0.16s ease;
}
.th-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.th-btn > span { position: relative; z-index: 1; }

.th-btn-primary { color: #F4F3EF; }
.th-btn-primary::before { inset: -8px; background-image: ${BTN_PLEIN}; }

.th-btn-ghost { color: #111110; }
.th-btn-ghost::before { background-image: ${BTN_CONTOUR}; }

.th-btn:hover { transform: translateY(-1.5px); }
.th-btn-ghost:hover::before { background-color: rgba(17, 17, 16, 0.05); }

/* --- mobile : lion en haut, boutons empiles dessous (flux normal) --- */
@media (max-width: 819px) {
  .th-stage { display: flex; flex-direction: column; gap: 18px; margin-top: 32px; }
  .th-stage-lion { order: -1; }
  /* mascotte plafonnee : sur un ecran de 375px elle occupait 87% de la largeur.
     Le conteneur suit la meme valeur (x0,9) pour garder le rognage sous les pieds
     et ne pas laisser de vide qui repousserait les boutons hors de l'ecran. */
  .th-lion { height: 186px; }
  .th-stage-lion { height: 167px; }
  .th-stage .th-btn {
    position: static;
    width: 100%;
    max-width: 340px;
    margin: 0;
  }
}

/* ================= HEADER DE TEST ======================================= */
/* le vrai header du site est masque UNIQUEMENT sur cette page */
body > div > header.sticky,
header.sticky { display: none !important; }

.tn {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #F4F3EF;
  border-bottom: 1px solid rgba(17, 17, 16, 0.12);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.tn-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;
  height: 66px;
  display: flex;
  align-items: center;
  gap: 20px;
}
@media (min-width: 1024px) { .tn-inner { height: 76px; padding: 0 24px; } }

.tn-logo {
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.04em;
  color: #111110;
  text-decoration: none;
}
@media (min-width: 640px) { .tn-logo { font-size: 24px; } }

/* --- nav --- */
.tn-nav { display: none; margin: 0 auto; align-items: center; gap: 8px; }
@media (min-width: 1024px) { .tn-nav { display: flex; } }

.tn-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #111110;
  text-decoration: none;
  background: none;
  border: 0;
  cursor: pointer;
  font-family: inherit;
}
.tn-link::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: -2px;
  right: -2px;
  top: 2px;
  bottom: 2px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform: rotate(-0.8deg);
}
.tn-link { isolation: isolate; }
.tn-l1::before { background-image: ${feutre("F7BC90")}; }
.tn-l2::before { background-image: ${feutre("8FDDBD")}; }
.tn-l5::before { background-image: ${feutre("F5B8CE")}; }
.tn-l3::before { background-image: ${feutre("93D2FF")}; }
.tn-l4::before { background-image: ${feutre("F7E06B")}; }

.tn-caret { font-size: 10px; transition: transform 0.16s ease; }
.tn-caret-open { transform: rotate(180deg); }

/* --- menu deroulant --- */
.tn-drop-wrap { position: relative; }
.tn-drop {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  padding: 10px;
  background: #F4F3EF;
  display: flex;
  flex-direction: column;
  gap: 6px;
  isolation: isolate;
}
.tn-drop::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 83, 0.6)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tn-drop-link {
  position: relative;
  isolation: isolate;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #111110;
  text-decoration: none;
}
.tn-drop-link::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 2px 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: 0;
  transition: opacity 0.14s ease;
  transform: rotate(-0.8deg);
}
.tn-drop-link:hover::before { opacity: 1; }
.tn-d1::before { background-image: ${feutre("F7BC90")}; }
.tn-d2::before { background-image: ${feutre("8FDDBD")}; }
.tn-d3::before { background-image: ${feutre("93D2FF")}; }

/* --- CTA crayon --- */
.tn-cta {
  position: relative;
  isolation: isolate;
  display: none;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 12px 22px;
  font-size: 14px;
  font-weight: 550;
  color: #F4F3EF;
  text-decoration: none;
  transition: transform 0.16s ease;
}
@media (min-width: 1024px) { .tn-cta { display: inline-flex; } }
.tn-cta::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-image: ${BTN_PLEIN};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tn-cta:hover { transform: translateY(-1.5px); }

/* --- mobile --- */
.tn-burger {
  margin-left: auto;
  width: 44px;
  height: 44px;
  font-size: 20px;
  line-height: 1;
  background: none;
  border: 0;
  color: #111110;
  cursor: pointer;
}
@media (min-width: 1024px) { .tn-burger { display: none; } }

.tn-mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 20px 20px;
  border-top: 1px solid rgba(17, 17, 16, 0.12);
}
.tn-mobile a {
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  color: #111110;
  text-decoration: none;
}
.tn-mobile-group {
  padding: 14px 0 4px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(17, 17, 16, 0.55);
}
.tn-mobile-sub { padding-left: 14px !important; }

/* --- ancienne barre du haut (conserve pour reference, desormais masquee) --- */
/* fond papier, plus de flou ni de blanc translucide, fine ligne encre */
header.sticky {
  background: #F4F3EF !important;
  border-bottom: 1px solid rgba(17, 17, 16, 0.12) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
/* retire le petit logo P */
header.sticky a[href="/"] img { display: none !important; }
/* mot-clef de marque et liens de nav en encre (texte inchange) */
header.sticky a[href="/"] span { color: #111110 !important; }
header.sticky nav a { color: #111110 !important; }

/* --- 6 liens de nav surlignes au feutre, une couleur pastel par lien --- */
header.sticky nav a {
  position: relative;
  isolation: isolate;
}
header.sticky nav a::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: -0.22em;
  right: -0.24em;
  top: 0.02em;
  bottom: -0.04em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transform: rotate(-0.8deg);
}
header.sticky nav a[href="/"]::before { background-image: ${feutre("F7BC90")}; }               /* peche */
header.sticky nav a[href="/offre"]::before { background-image: ${feutre("8FDDBD")}; }          /* vert d'eau */
header.sticky nav a[href="/geo-hotellerie"]::before { background-image: ${feutre("F7E06B")}; } /* jaune */
header.sticky nav a[href="/faq"]::before { background-image: ${feutre("93D2FF")}; }            /* bleu */
header.sticky nav a[href="/a-propos"]::before { background-image: ${feutre("C9B6F2")}; }       /* lavande (ajout) */
header.sticky nav a[href="/blog"]::before { background-image: ${feutre("F5B8CE")}; }           /* rose (ajout) */

/* bouton CTA du header = meme visuel que le bouton principal crayon (libelle inchange) */
header.sticky a[href="/contact"] button {
  position: relative;
  isolation: isolate;
  background: none !important;
  color: #F4F3EF !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  transition: transform 0.16s ease;
}
header.sticky a[href="/contact"] button::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-image: ${BTN_PLEIN};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
header.sticky a[href="/contact"] button:hover {
  transform: translateY(-1.5px);
}

/* --- footer en theme papier (scope : uniquement cette page de test) --- */
footer.bg-navy {
  background: #F4F3EF !important;
  color: #111110 !important;
  border-top: 1px solid rgba(17, 17, 16, 0.12) !important;
}
/* retire le logo P du footer (coherence avec le header) */
footer.bg-navy a[href="/"] img { display: none !important; }
footer.bg-navy a[href="/"] span { color: #111110 !important; }
/* textes, titres de colonnes, liens en encre */
footer.bg-navy p { color: rgba(17, 17, 16, 0.72) !important; }
footer.bg-navy h3 { color: rgba(17, 17, 16, 0.5) !important; }
footer.bg-navy a { color: rgba(17, 17, 16, 0.72) !important; }
footer.bg-navy a:hover { color: #111110 !important; }
/* filets separateurs en encre faible */
footer.bg-navy [class*="border-white"] { border-color: rgba(17, 17, 16, 0.12) !important; }

/* --- SECTION DOULEUR (papier / encre, teneur probleme) --- */
.tp {
  position: relative;
  z-index: 1;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  padding: 72px 24px 84px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.tp-head { text-align: center; max-width: 640px; margin: 0 auto 52px; }
.tp-title {
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 3rem);
  line-height: 1.06;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}
.tp-sub {
  margin: 16px 0 0;
  font-size: clamp(1.02rem, 1.4vw, 1.18rem);
  line-height: 1.5;
  color: rgba(17, 17, 16, 0.62);
}

/* --- bloc frise + lion : groupe centre horizontalement --- */
.tp-body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(28px, 5vw, 64px);
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
}

/* --- frise verticale --- */
.tp-frise {
  list-style: none;
  margin: 0;
  padding: 0;
  width: min(520px, 100%);
}
.tp-step {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 18px;
}
.tp-step + .tp-step { margin-top: 26px; }

/* la ligne verticale relie les numeros (colonne de droite) et S'ARRETE au point 3 */
.tp-step:not(:last-child)::before {
  content: "";
  position: absolute;
  right: 21px;
  top: 46px;
  bottom: -26px;
  width: 2px;
  background: rgba(17, 17, 16, 0.3);
}

/* numero : papier + petite touche de feutre pastel derriere (pas d'aplat) */
.tp-num {
  position: relative;
  z-index: 1;
  flex: none;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  font-weight: 600;
  color: #111110;
  /* pas d'aplat papier : la ligne verticale demarre sous la pastille,
     donc rien a masquer et le grain reste visible */
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tp-step-1 .tp-num { background-image: ${feutre("F7BC90")}; }
.tp-step-2 .tp-num { background-image: ${feutre("8FDDBD")}; }
.tp-step-3 .tp-num { background-image: ${feutre("93D2FF")}; }

/* texte a GAUCHE des numeros : le bloc se cale contre la colonne des chiffres */
.tp-step-body { flex: 1; min-width: 0; text-align: right; }

/* titre HORS de la carte, au-dessus, en encre */
.tp-step-title {
  margin: 0 0 18px;
  padding-top: 14px;
  font-size: clamp(1.14rem, 1.7vw, 1.32rem);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.2;
  color: #111110;
}

/* gros coup de surligneur sur le titre : la bande deborde nettement du texte,
   sans toucher a la taille de la police */
.tp-mark {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.58em 0.5em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tp-step-1 .tp-mark { background-image: ${feutre("F7BC90")}; }
.tp-step-2 .tp-mark { background-image: ${feutre("8FDDBD")}; }
.tp-step-3 .tp-mark { background-image: ${feutre("93D2FF")}; }

/* plus de carte : le texte lui-meme est surligne, ligne par ligne */
.tp-card {
  padding: 0;
  text-align: left;
}

/* description : texte simple, aucun surlignage */
.tp-step-text {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: rgba(17, 17, 16, 0.78);
}

/* ================= SECTION GUIDES ======================================= */
.tg, .tq {
  position: relative;
  z-index: 1;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  padding: 72px 24px 84px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.tg-head, .tq-head { max-width: 760px; margin: 0 auto 44px; text-align: center; }
.tg-title, .tq-title {
  margin: 0;
  font-size: clamp(1.8rem, 3.6vw, 2.7rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}
.tg-intro, .tq-intro {
  margin: 16px 0 0;
  font-size: clamp(0.98rem, 1.3vw, 1.08rem);
  line-height: 1.65;
  color: rgba(17, 17, 16, 0.62);
}
/* liens internes en encre, soulignes discretement */
.tg-intro a, .tq-intro a {
  color: #111110;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
  font-weight: 500;
}

.tg-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1080px;
  margin: 0 auto;
}
@media (min-width: 700px) { .tg-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1020px) { .tg-grid { grid-template-columns: repeat(4, 1fr); gap: 22px; } }

.tg-card {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  padding: 22px 22px 24px;
  text-decoration: none;
  color: #111110;
  transition: transform 0.16s ease;
}
.tg-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tg-card:hover { transform: translateY(-2px); }
.tg-g1::before, .tg-g5::before { background-image: ${contourCrayon("F7BC90", 59)}; }
.tg-g2::before, .tg-g6::before { background-image: ${contourCrayon("8FDDBD", 67)}; }
.tg-g3::before, .tg-g7::before { background-image: ${contourCrayon("F7E06B", 71)}; }
.tg-g4::before, .tg-g8::before { background-image: ${contourCrayon("93D2FF", 73)}; }

.tg-card-title {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.3;
  color: #111110;
}
.tg-card-text {
  margin: 10px 0 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(17, 17, 16, 0.7);
}
.tg-card-cta {
  margin-top: 16px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #111110;
}

/* ================= SECTION FAQ ========================================== */
.tq-list { max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }

.tq-item {
  position: relative;
  isolation: isolate;
  padding: 16px 20px;
}
.tq-item::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: ${contourLeger("111110", 79, 0.5)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  list-style: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #111110;
}
.tq-item summary::-webkit-details-marker { display: none; }
.tq-sign {
  flex: none;
  font-size: 1.2rem;
  line-height: 1;
  transition: transform 0.18s ease;
}
.tq-item[open] .tq-sign { transform: rotate(45deg); }
.tq-answer {
  margin: 12px 0 0;
  padding-top: 12px;
  border-top: 1.5px solid rgba(17, 17, 16, 0.14);
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(17, 17, 16, 0.78);
}

/* ================= SECTION FORMULAIRE =================================== */
.tf {
  position: relative;
  z-index: 1;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  padding: 48px 24px 56px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.tf-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 700px;
  margin: 0 auto 26px;
  text-align: center;
}
.tf-title {
  margin: 0;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  line-height: 1.14;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}
/* surlignages pastel des noms d'IA dans le titre */
.tf-mark-2,
.tf-mark-3 {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.1em 0.24em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tf-mark-2 { background-image: ${feutre("8FDDBD")}; }
.tf-mark-3 { background-image: ${feutre("93D2FF")}; }

.tf-lion-img {
  width: auto;
  height: clamp(96px, 12vh, 124px);
  max-width: 100%;
  object-fit: contain;
}
.tf-wrap { max-width: 720px; margin: 0 auto; }

/* --- habillage papier du formulaire existant (logique inchangee) --- */
/* on retire la carte blanche d'origine */
.tf form,
.tf .rounded-2xl {
  background: none !important;
  border: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
}

/* champs sur 2 colonnes : gain de hauteur, section plus compacte */
.tf form {
  display: grid !important;
  grid-template-columns: 1fr;
  gap: 12px 18px;
}
@media (min-width: 640px) {
  .tf form { grid-template-columns: 1fr 1fr; }
  /* message, bouton et banniere d'erreur prennent toute la largeur */
  .tf form > div:has(#message),
  .tf form > div:has(.text-red-700),
  .tf form > button { grid-column: 1 / -1; }
}
/* space-y d'origine neutralise (le gap de la grille le remplace) */
.tf form > * + * { margin-top: 0 !important; }
.tf form > div > * + * { margin-top: 4px !important; }

.tf label { color: #111110 !important; font-weight: 500; font-size: 0.86rem !important; }

/* champs plus bas */
.tf input,
.tf select { height: 42px !important; }
.tf textarea { min-height: 76px !important; }
.tf input,
.tf select,
.tf textarea { font-size: 0.95rem !important; }
.tf button[type="submit"] { height: 46px !important; margin-top: 6px !important; }

/* champs : papier + contour crayon leger, bords carres */
.tf input,
.tf textarea,
.tf select {
  background-color: transparent !important;
  background-image: ${contourLeger("111110", 61, 0.45)} !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  color: #111110 !important;
}
.tf input::placeholder,
.tf textarea::placeholder { color: rgba(17, 17, 16, 0.42) !important; }

.tf input:focus,
.tf textarea:focus,
.tf select:focus,
.tf input:focus-visible,
.tf textarea:focus-visible,
.tf select:focus-visible {
  outline: 2px solid rgba(17, 17, 16, 0.55) !important;
  outline-offset: 2px !important;
  background-image: ${contourLeger("111110", 61, 0.75)} !important;
}

/* bouton d'envoi : bouton principal crayon de la DA */
.tf button[type="submit"] {
  position: relative;
  isolation: isolate;
  background: none !important;
  color: #F4F3EF !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  transition: transform 0.16s ease;
}
.tf button[type="submit"]::before {
  content: "";
  position: absolute;
  inset: -8px;
  z-index: -1;
  background-image: ${BTN_PLEIN};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tf button[type="submit"]:hover { transform: translateY(-1.5px); }

/* ================= SECTION POURQUOI PULSEOAI ============================= */
.tw {
  position: relative;
  z-index: 1;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  padding: 76px 24px 88px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* en-tete : texte a gauche, mascotte discrete a droite */
.tw-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto 48px;
  text-align: center;
}
@media (min-width: 900px) {
  .tw-head {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    gap: 40px;
  }
}
.tw-head-text { max-width: 700px; }

.tw-eyebrow {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(17, 17, 16, 0.62);
}
.tw-title {
  margin: 14px 0 0;
  font-size: clamp(1.8rem, 3.6vw, 2.7rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}
.tw-intro {
  margin: 16px 0 0;
  font-size: clamp(1rem, 1.35vw, 1.1rem);
  line-height: 1.65;
  color: rgba(17, 17, 16, 0.62);
}

/* mascotte discrete */
.tw-lion-img {
  flex: none;
  width: auto;
  height: clamp(140px, 18vh, 180px);
  max-width: 100%;
  object-fit: contain;
}

/* grille 3 colonnes */
.tw-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1080px;
  margin: 0 auto;
}
@media (min-width: 700px) { .tw-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1020px) { .tw-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; } }

/* carte : contour crayon pastel, interieur papier */
.tw-card {
  position: relative;
  isolation: isolate;
  padding: 24px 24px 26px;
}
.tw-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tw-c1::before { background-image: ${contourCrayon("F7BC90", 31)}; }
.tw-c2::before { background-image: ${contourCrayon("8FDDBD", 37)}; }
.tw-c3::before { background-image: ${contourCrayon("F7E06B", 41)}; }
.tw-c4::before { background-image: ${contourCrayon("93D2FF", 43)}; }
.tw-c5::before { background-image: ${contourCrayon("F7BC90", 47)}; }
.tw-c6::before { background-image: ${contourCrayon("8FDDBD", 53)}; }

.tw-card-title {
  margin: 0;
  font-size: clamp(1.08rem, 1.5vw, 1.2rem);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: #111110;
}

/* titre de carte surligne au feutre, dans la couleur de la carte */
.tw-mark {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.34em 0.42em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tw-c1 .tw-mark { background-image: ${feutre("F7BC90")}; }
.tw-c2 .tw-mark { background-image: ${feutre("8FDDBD")}; }
.tw-c3 .tw-mark { background-image: ${feutre("F7E06B")}; }
.tw-c4 .tw-mark { background-image: ${feutre("93D2FF")}; }
.tw-c5 .tw-mark { background-image: ${feutre("F7BC90")}; }
.tw-c6 .tw-mark { background-image: ${feutre("8FDDBD")}; }
.tw-card-text {
  margin: 10px 0 0;
  font-size: 0.96rem;
  line-height: 1.6;
  color: rgba(17, 17, 16, 0.78);
}

/* ================= SECTION PROOF (resultats clients) ===================== */
.tr {
  position: relative;
  z-index: 1;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  padding: 76px 24px 88px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.tr-head { text-align: center; max-width: 700px; margin: 0 auto 52px; }
.tr-title {
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 3rem);
  line-height: 1.06;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}

.tr-rows {
  display: flex;
  flex-direction: column;
  gap: 34px;
  max-width: 1000px;
  margin: 0 auto;
}

/* une ligne : capture a gauche, accroche a droite */
.tr-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;
}
@media (min-width: 820px) {
  .tr-row { grid-template-columns: 0.56fr 0.44fr; gap: 36px; }
}

/* capture GSC posee directement sur le papier, sans cadre ni contour */
.tr-frame {
  width: 100%;
  max-width: 416px;
}
.tr-img { display: block; width: 100%; height: auto; }

/* accroche */
.tr-eyebrow {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(17, 17, 16, 0.62);
}
.tr-claim {
  margin: 12px 0 0;
  font-size: clamp(1.02rem, 1.5vw, 1.18rem);
  line-height: 2;
  font-weight: 500;
  color: #111110;
}

/* chiffres cles surlignes au feutre */
.tr-num {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.24em 0.34em;
  font-weight: 600;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tr-row-1 .tr-num { background-image: ${feutre("F7BC90")}; }
.tr-row-2 .tr-num { background-image: ${feutre("8FDDBD")}; }
.tr-row-3 .tr-num { background-image: ${feutre("93D2FF")}; }

/* pied de section : mascotte celebration AU-DESSUS du bouton crayon */
.tr-foot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 56px;
}
.tr-lion-img {
  width: auto;
  height: clamp(190px, 26vh, 260px);
  max-width: 100%;
  object-fit: contain;
}

/* --- FRISE APRES : meme structure que la frise douleur, couleurs positives --- */
.ta .tp-step-1 .tp-mark { background-image: ${feutre("8FDDBD")}; }
.ta .tp-step-2 .tp-mark { background-image: ${feutre("93D2FF")}; }
.ta .tp-step-3 .tp-mark { background-image: ${feutre("F7E06B")}; }
.ta .tp-step-1 .tp-num { background-image: ${feutre("8FDDBD")}; }
.ta .tp-step-2 .tp-num { background-image: ${feutre("93D2FF")}; }
.ta .tp-step-3 .tp-num { background-image: ${feutre("F7E06B")}; }

/* ================= SECTION METHODE (grille 2x2, forme differente) ========= */
.tm {
  position: relative;
  z-index: 1;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  padding: 76px 24px 88px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
/* en-tete : le lion pensif accompagne la question, texte a sa droite */
.tm-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 3vw, 40px);
  max-width: 980px;
  margin: 0 auto 52px;
  text-align: center;
}
@media (min-width: 860px) {
  .tm-head { flex-direction: row; text-align: left; }
}
.tm-head-lion { flex: none; display: flex; }
.tm-lion-img {
  width: auto;
  height: clamp(190px, 27vh, 280px);
  max-width: 100%;
  object-fit: contain;
}
.tm-head-text { max-width: 620px; }

.tm-title {
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 3rem);
  line-height: 1.06;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}
.tm-sub {
  margin: 16px auto 0;
  max-width: 46em;
  font-size: clamp(1rem, 1.35vw, 1.12rem);
  line-height: 1.65;
  color: rgba(17, 17, 16, 0.62);
}

/* grille 2 x 2 */
.tm-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
  max-width: 900px;
  margin: 0 auto;
}
@media (min-width: 760px) {
  .tm-grid { grid-template-columns: 1fr 1fr; gap: 30px 34px; }
}

/* carte : contour crayon pastel, interieur papier (aucun aplat) */
.tm-card {
  position: relative;
  isolation: isolate;
  padding: 26px 26px 28px;
}
.tm-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tm-card-1::before { background-image: ${contourCrayon("F7BC90", 3)}; }
.tm-card-2::before { background-image: ${contourCrayon("8FDDBD", 11)}; }
.tm-card-3::before { background-image: ${contourCrayon("F7E06B", 17)}; }
.tm-card-4::before { background-image: ${contourCrayon("93D2FF", 23)}; }

/* numero d'etape : petite touche de feutre pastel */
.tm-step {
  display: inline-block;
  padding: 0.34em 0.6em;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #111110;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.tm-card-1 .tm-step { background-image: ${feutre("F7BC90")}; }
.tm-card-2 .tm-step { background-image: ${feutre("8FDDBD")}; }
.tm-card-3 .tm-step { background-image: ${feutre("F7E06B")}; }
.tm-card-4 .tm-step { background-image: ${feutre("93D2FF")}; }

.tm-card-title {
  margin: 16px 0 0;
  font-size: clamp(1.14rem, 1.7vw, 1.3rem);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: #111110;
}
.tm-text {
  margin: 10px 0 0;
  font-size: 0.98rem;
  line-height: 1.6;
  color: rgba(17, 17, 16, 0.78);
}
.tm-detail {
  margin: 14px 0 0;
  padding-top: 12px;
  border-top: 1.5px solid rgba(17, 17, 16, 0.14);
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(17, 17, 16, 0.62);
}

/* --- lion pas content, a cote de la frise --- */
.tp-lion { flex: none; display: flex; justify-content: center; }
.tp-lion-img {
  width: auto;
  height: clamp(280px, 40vh, 420px);
  max-width: 100%;
  object-fit: contain;
}
@media (max-width: 899px) {
  .tp-lion-img { height: clamp(220px, 34vh, 300px); }
}
`;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <style>{CSS}</style>

      <section className="th-hero">
        <div className="th-inner">
          {/* H1 et sous-titre repris tels quels de la home (SEO inchange) */}
          <h1 className="th-title">
            Pendant que vous lisez ça, vos{" "}
            <span className="th-mark">
              <span>clients</span>
            </span>{" "}
            choisissent votre{" "}
            <span className="th-mark">
              <span>concurrent</span>
            </span>{" "}
            sur{" "}
            <span className="th-mark">
              <span>ChatGPT</span>
            </span>
          </h1>

          <p className="th-sub">
            Vos clients cherchent sur ChatGPT, Gemini, Perplexity, Claude et
            Google. PulseoAI fait en sorte qu&apos;ils vous trouvent.
          </p>

          {/* lion au centre, un bouton de chaque cote */}
          <div className="th-stage">
            <a href="/contact" className="th-btn th-btn-primary">
              <span>Devenir visible sur l&apos;IA</span>
            </a>

            <div className="th-stage-lion">
              <Image
                src="/illustrations/lion-salutation.png"
                alt="Mascotte lion pointant vers les deux boutons"
                width={1536}
                height={1536}
                className="th-lion"
                priority
              />
            </div>

            <a href="/agents-ia" className="th-btn th-btn-ghost">
              <span>Recruter mon agent IA</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- SECTION DOULEUR : frise verticale + lion pas content ---------- */}
      <section className="tp">
        <div className="tp-head">
          <h2 className="tp-title">
            Vos clients ne cherchent plus. Ils demandent.
          </h2>
          <p className="tp-sub">Et l&apos;IA répond. Avec ou sans vous.</p>
        </div>

        <div className="tp-body">
          <ol className="tp-frise">
            <li className="tp-step tp-step-1">
              <div className="tp-step-body">
                <h3 className="tp-step-title">
                  <span className="tp-mark">L&apos;IA ne vous voit pas</span>
                </h3>
                <div className="tp-card">
                  <p className="tp-step-text">
                    Votre entreprise n&apos;existe pas là où ChatGPT, Gemini et
                    Perplexity cherchent leurs réponses.
                  </p>
                </div>
              </div>
              <span className="tp-num">1</span>
            </li>

            <li className="tp-step tp-step-2">
              <div className="tp-step-body">
                <h3 className="tp-step-title">
                  <span className="tp-mark">L&apos;IA cite vos concurrents</span>
                </h3>
                <div className="tp-card">
                  <p className="tp-step-text">
                    Quand un client pose sa question, c&apos;est leur nom qui
                    apparaît dans la réponse de Claude ou Google, pas le vôtre.
                  </p>
                </div>
              </div>
              <span className="tp-num">2</span>
            </li>

            <li className="tp-step tp-step-3">
              <div className="tp-step-body">
                <h3 className="tp-step-title">
                  <span className="tp-mark">Le client va chez votre concurrent</span>
                </h3>
                <div className="tp-card">
                  <p className="tp-step-text">
                    Il les trouve, les contacte, signe avec eux. Et ce chiffre
                    d&apos;affaires, vous ne le voyez jamais.
                  </p>
                </div>
              </div>
              <span className="tp-num">3</span>
            </li>
          </ol>

          <div className="tp-lion">
            <Image
              src="/illustrations/ptOopEas.png"
              alt="Mascotte lion mécontente, pouce vers le bas"
              width={1536}
              height={1536}
              className="tp-lion-img"
            />
          </div>
        </div>
      </section>

      {/* ---------- SECTION METHODE : 4 etapes en grille 2x2 ---------- */}
      <section className="tm">
        <div className="tm-head">
          <div className="tm-head-lion">
            <Image
              src="/illustrations/xyEexm52.png"
              alt="Mascotte lion pensive, qui réfléchit à la question"
              width={1536}
              height={1536}
              className="tm-lion-img"
            />
          </div>

          <div className="tm-head-text">
            <h2 className="tm-title">Comment ça marche ?</h2>
            <p className="tm-sub">
              Quatre étapes, zéro prise de tête. Un process court, lisible et
              orienté{" "}
              <span className="th-mark">
                <span>résultat</span>
              </span>{" "}
              pour{" "}
              <span className="th-mark">
                <span>améliorer</span>
              </span>{" "}
              votre visibilité Google, vos citations IA et vos demandes
              qualifiées.
            </p>
          </div>
        </div>

        <div className="tm-grid">
          <article className="tm-card tm-card-1">
            <span className="tm-step">01</span>
            <h3 className="tm-card-title">Vous nous contactez</h3>
            <p className="tm-text">
              Un email ou un formulaire suffit. Vous nous partagez le nom de
              votre entreprise, votre site et votre objectif.
            </p>
            <p className="tm-detail">
              Réponse sous 24h avec un premier cadrage.
            </p>
          </article>

          <article className="tm-card tm-card-2">
            <span className="tm-step">02</span>
            <h3 className="tm-card-title">Nous testons votre visibilité</h3>
            <p className="tm-text">
              Nous lançons les requêtes que vos clients posent sur Google,
              ChatGPT, Gemini, Claude et Perplexity.
            </p>
            <p className="tm-detail">
              Vous voyez où vous apparaissez, où vous êtes absent et qui prend
              la place.
            </p>
          </article>

          <article className="tm-card tm-card-3">
            <span className="tm-step">03</span>
            <h3 className="tm-card-title">Nous mettons en place la stratégie</h3>
            <p className="tm-text">
              Nous priorisons les actions SEO / GEO : contenus, structure du
              site, sources citées, réputation et maillage interne.
            </p>
            <p className="tm-detail">
              Le travail est structuré pour gagner des citations et une
              meilleure compréhension par les IA.
            </p>
          </article>

          <article className="tm-card tm-card-4">
            <span className="tm-step">04</span>
            <h3 className="tm-card-title">Vous suivez les résultats</h3>
            <p className="tm-text">
              Chaque mois, vous recevez une lecture claire de vos scores, de vos
              citations, de vos sources et de vos concurrents cités.
            </p>
            <p className="tm-detail">
              Une feuille de route actionnable, sans jargon.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- FRISE APRES : miroir positif de la frise douleur ---------- */}
      <section className="tp ta">
        <div className="tp-head">
          <h2 className="tp-title">
            Avec{" "}
            <span className="th-mark">
              <span>PulseoAI</span>
            </span>
            , c&apos;est{" "}
            <span className="th-mark">
              <span>vous</span>
            </span>{" "}
            que l&apos;IA{" "}
            <span className="th-mark">
              <span>recommande</span>
            </span>
            .
          </h2>
          <p className="tp-sub">Même question, même moteur. Réponse différente.</p>
        </div>

        <div className="tp-body">
          <ol className="tp-frise">
            <li className="tp-step tp-step-1">
              <div className="tp-step-body">
                <h3 className="tp-step-title">
                  <span className="tp-mark">L&apos;IA vous voit</span>
                </h3>
                <div className="tp-card">
                  <p className="tp-step-text">
                    Votre entreprise apparaît là où ChatGPT, Gemini et
                    Perplexity cherchent leurs réponses.
                  </p>
                </div>
              </div>
              <span className="tp-num">1</span>
            </li>

            <li className="tp-step tp-step-2">
              <div className="tp-step-body">
                <h3 className="tp-step-title">
                  <span className="tp-mark">L&apos;IA vous cite</span>
                </h3>
                <div className="tp-card">
                  <p className="tp-step-text">
                    Quand un client pose sa question, c&apos;est votre nom qui
                    apparaît dans la réponse de Claude ou Google.
                  </p>
                </div>
              </div>
              <span className="tp-num">2</span>
            </li>

            <li className="tp-step tp-step-3">
              <div className="tp-step-body">
                <h3 className="tp-step-title">
                  <span className="tp-mark">Le client vient chez vous</span>
                </h3>
                <div className="tp-card">
                  <p className="tp-step-text">
                    Il vous trouve, vous contacte, signe avec vous. Et ce
                    chiffre d&apos;affaires, c&apos;est vous qui le récupérez.
                  </p>
                </div>
              </div>
              <span className="tp-num">3</span>
            </li>
          </ol>

          <div className="tp-lion">
            <Image
              src="/illustrations/numeros1.png"
              alt="Mascotte lion satisfaite, pouce vers le haut"
              width={1536}
              height={1536}
              className="tp-lion-img"
            />
          </div>
        </div>
      </section>

      {/* ---------- SECTION PROOF : resultats clients ---------- */}
      <section className="tr">
        <div className="tr-head">
          <h2 className="tr-title">
            Des{" "}
            <span className="th-mark">
              <span>résultats</span>
            </span>
            , pas des promesses.
          </h2>
        </div>

        <div className="tr-rows">
          <div className="tr-row tr-row-1">
            <div className="tr-frame">
              <Image
                src="/illustrations/proof-1.jpg"
                alt="Résultats Google Search Console d'un client B2B haut de gamme : +3 250 clics qualifiés en 6 mois"
                width={1080}
                height={407}
                loading="lazy"
                sizes="(max-width: 820px) 100vw, 560px"
                className="tr-img"
              />
            </div>
            <div className="tr-claim-box">
              <span className="tr-eyebrow">B2B haut de gamme</span>
              <p className="tr-claim">
                <span className="tr-num">×2,5</span> en acquisition ·{" "}
                <span className="tr-num">+3 250</span> clics qualifiés en 6 mois
              </p>
            </div>
          </div>

          <div className="tr-row tr-row-2">
            <div className="tr-frame">
              <Image
                src="/illustrations/proof-2.jpg"
                alt="Résultats Google Search Console d'un client e-commerce premium : +180 mots-clés en TOP 3"
                width={1080}
                height={407}
                loading="lazy"
                sizes="(max-width: 820px) 100vw, 560px"
                className="tr-img"
              />
            </div>
            <div className="tr-claim-box">
              <span className="tr-eyebrow">E-commerce premium</span>
              <p className="tr-claim">
                <span className="tr-num">+78 000€</span> de CA généré ·{" "}
                <span className="tr-num">+180</span> mots-clés en TOP 3
              </p>
            </div>
          </div>

          <div className="tr-row tr-row-3">
            <div className="tr-frame">
              <Image
                src="/illustrations/proof-3.jpg"
                alt="Résultats Google Search Console d'un client BTP et Construction : 45 000€ de CA mensuel"
                width={1080}
                height={407}
                loading="lazy"
                sizes="(max-width: 820px) 100vw, 560px"
                className="tr-img"
              />
            </div>
            <div className="tr-claim-box">
              <span className="tr-eyebrow">BTP &amp; Construction</span>
              <p className="tr-claim">
                <span className="tr-num">45 000€</span> de CA mensuel ·{" "}
                <span className="tr-num">5 leads</span> à 9 000€ minimum
              </p>
            </div>
          </div>
        </div>

        <div className="tr-foot">
          <Image
            src="/illustrations/q0BWcbVt.png"
            alt="Mascotte lion qui célèbre les résultats"
            width={1536}
            height={1536}
            loading="lazy"
            className="tr-lion-img"
          />
          <a href="/contact" className="th-btn th-btn-primary">
            <span>Devenir le prochain</span>
          </a>
        </div>
      </section>

      {/* ---------- SECTION POURQUOI PULSEOAI ---------- */}
      <section className="tw">
        <div className="tw-head">
          <div className="tw-head-text">
            <h2 className="tw-title">
              L&apos;agence{" "}
              <span className="th-mark">
                <span>SEO / GEO</span>
              </span>{" "}
              qui rend votre visibilité lisible.
            </h2>
            <p className="tw-intro">
              Une expertise utile pour Google, ChatGPT, Gemini, Claude,
              Perplexity et Google AI Overviews, avec un suivi clair pour les
              dirigeants, responsables marketing et les entreprises qui veulent
              rendre leur visibilité mesurable.
            </p>
          </div>

          <Image
            src="/illustrations/g3p2LNK1.png"
            alt="Mascotte lion qui salue"
            width={1536}
            height={1536}
            loading="lazy"
            className="tw-lion-img"
          />
        </div>

        <div className="tw-grid">
          <article className="tw-card tw-c1">
            <h3 className="tw-card-title">
              <span className="tw-mark">Expertise SEO / GEO</span>
            </h3>
            <p className="tw-card-text">
              Nous travaillons à la fois la visibilité Google et la présence
              dans les réponses IA. Les deux canaux se renforcent pour soutenir
              l&apos;acquisition organique.
            </p>
          </article>

          <article className="tw-card tw-c2">
            <h3 className="tw-card-title">
              <span className="tw-mark">50+ entreprises analysées</span>
            </h3>
            <p className="tw-card-text">
              Nous avons déjà audité des hôtels, commerces, PME et marques
              e-commerce pour comprendre ce qui les rend visibles, citées ou
              absentes.
            </p>
          </article>

          <article className="tw-card tw-c3">
            <h3 className="tw-card-title">
              <span className="tw-mark">Résultats mesurables</span>
            </h3>
            <p className="tw-card-text">
              Pas de promesses floues. Nous suivons les scores, les citations
              IA, les sources utilisées et la place prise par vos concurrents.
            </p>
          </article>

          <article className="tw-card tw-c4">
            <h3 className="tw-card-title">
              <span className="tw-mark">Basés à Nantes, actifs partout</span>
            </h3>
            <p className="tw-card-text">
              Nous travaillons à distance avec des entreprises partout en
              France, avec des échanges simples en visio et par email.
            </p>
          </article>

          <article className="tw-card tw-c5">
            <h3 className="tw-card-title">
              <span className="tw-mark">Approche pédagogique</span>
            </h3>
            <p className="tw-card-text">
              Vous comprenez ce que nous faisons, pourquoi nous le faisons et
              comment cela améliore votre visibilité Google et IA.
            </p>
          </article>

          <article className="tw-card tw-c6">
            <h3 className="tw-card-title">
              <span className="tw-mark">Tous secteurs</span>
            </h3>
            <p className="tw-card-text">
              Hôtels, restaurants, commerces, services, PME et e-commerce. Nous
              adaptons la méthode à votre marché.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- SECTION FORMULAIRE (formulaire existant, habillage papier) ---------- */}
      <section className="tf">
        <div className="tf-head">
          <Image
            src="/illustrations/VHl73R9s.png"
            alt="Mascotte lion qui invite à demander un audit"
            width={1536}
            height={1536}
            loading="lazy"
            className="tf-lion-img"
          />
          <h2 className="tf-title">
            Votre entreprise est-elle visible sur{" "}
            <span className="th-mark">
              <span>ChatGPT</span>
            </span>
            ,{" "}
            <span className="tf-mark-2">Gemini</span> et{" "}
            <span className="tf-mark-3">Perplexity</span> ?
          </h2>
        </div>

        <div className="tf-wrap">
          <ContactForm />
        </div>
      </section>

      {/* ---------- SECTION GUIDES ---------- */}
      <section className="tg">
        <div className="tg-head">
          <h2 className="tg-title">Guides utiles pour aller plus loin</h2>
          <p className="tg-intro">
            Quelques ressources pour comprendre le SEO IA, le GEO, ChatGPT,
            Perplexity et la visibilité dans les moteurs de réponse.
          </p>
          <p className="tg-intro">
            Pour voir notre accompagnement complet, consultez{" "}
            <a href="/offre">notre offre SEO / GEO</a>. Pour comprendre comment
            apparaître dans les réponses IA, lisez notre guide sur le{" "}
            <a href="/blog/referencement-chatgpt-apparaitre-ia">
              référencement ChatGPT
            </a>
            . Pour une recherche locale, découvrez notre{" "}
            <a href="/agence-seo-geo-nantes">agence GEO à Nantes</a>.
          </p>
        </div>

        <div className="tg-grid">
          {[
            {
              href: "/blog/apparaitre-chatgpt-client-cherche-entreprise",
              title: "Comment se référencer sur ChatGPT ?",
              text: "Comprendre les bases du référencement ChatGPT, du SEO IA et des prompts clients.",
            },
            {
              href: "/blog/comment-se-referencer-sur-perplexity",
              title: "Comment se référencer sur Perplexity ?",
              text: "Travailler les sources citées, les entités et les contenus answer-first.",
            },
            {
              href: "/blog/google-ai-overviews-entreprises-comprendre",
              title: "Google AI Overviews : guide entreprises",
              text: "Lire l’impact des réponses générées de Google sur la visibilité organique.",
            },
            {
              href: "/blog/sources-citees-ia-site-ne-suffit-pas",
              title: "Pourquoi votre site seul ne suffit pas",
              text: "Comprendre le rôle des sources externes, profils, annuaires et mentions de marque.",
            },
            {
              href: "/blog/audit-seo-geo-visibilite-ia",
              title: "Audit SEO / GEO : mesurer sa visibilité IA",
              text: "Identifier les requêtes, concurrents et sources qui structurent votre visibilité IA.",
            },
            {
              href: "/blog/veille-concurrentielle-seo-ia-serp-locales",
              title: "Veille concurrentielle SEO & IA",
              text: "Suivre qui prend votre place dans Google, ChatGPT, Perplexity et les SERP locales.",
            },
            {
              href: "/blog/schema-org-guide-complet-geo",
              title: "Schema.org pour le GEO",
              text: "Mieux structurer vos pages pour Google et les moteurs IA.",
            },
            {
              href: "/blog/llms-txt-guide-pratique",
              title: "llms.txt : rendre son site lisible par les IA",
              text: "Comprendre le rôle du fichier llms.txt dans la lecture des contenus par les modèles.",
            },
          ].map((g, i) => (
            <a key={g.href} href={g.href} className={`tg-card tg-g${i + 1}`}>
              <h3 className="tg-card-title">{g.title}</h3>
              <p className="tg-card-text">{g.text}</p>
              <span className="tg-card-cta">Lire le guide →</span>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- SECTION FAQ ---------- */}
      <section className="tq">
        <div className="tq-head">
          <h2 className="tq-title">
            Questions fréquentes sur le référencement IA
          </h2>
          <p className="tq-intro">
            Les bases pour comprendre comment votre entreprise peut devenir
            visible sur Google, ChatGPT, Gemini, Perplexity et les moteurs IA.
          </p>
        </div>

        <div className="tq-list">
          {HOME_FAQ.map((item) => (
            <details key={item.q} className="tq-item">
              <summary>
                <span>{item.q}</span>
                <span className="tq-sign" aria-hidden>
                  +
                </span>
              </summary>
              <p className="tq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
