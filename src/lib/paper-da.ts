/**
 * Direction papier — motifs SVG partages.
 * Valeurs strictement issues de la DA :
 *  papier #F4F3EF, encre #111110, pastels peche/vert d'eau/jaune/bleu,
 *  grain feTurbulence 0.85 / 4 octaves / 240px / multiply / 0.53,
 *  bords crayon feTurbulence 0.9 / 3 octaves + feDisplacementMap 3.4.
 */

export const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E" +
  "%3Cfilter id='grain'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E" +
  "%3CfeColorMatrix type='saturate' values='0'/%3E" +
  "%3C/filter%3E" +
  "%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E" +
  "%3C/svg%3E\")";

/** Bouton principal : aplat encre a bord rugueux crayon. */
export const BTN_PLEIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cfilter id='rough' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='7' result='n'/%3E" +
  "%3CfeDisplacementMap in='SourceGraphic' in2='n' scale='3.4' xChannelSelector='R' yChannelSelector='G'/%3E" +
  "%3C/filter%3E" +
  "%3Cpath filter='url(%23rough)' d='M3,5.5 L197,4 L196,55.5 L4,57 Z' fill='%23111110'/%3E" +
  "%3C/svg%3E\")";

/** Bouton secondaire : contour plume, 4 segments qui se croisent aux coins. */
export const BTN_CONTOUR =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cg fill='none' stroke='%23111110' stroke-width='1.8' stroke-linecap='round' vector-effect='non-scaling-stroke'%3E" +
  "%3Cpath d='M3.9,6.1 L196.6,4.3'/%3E" +
  "%3Cpath d='M196.9,3.5 L195.3,56.4'/%3E" +
  "%3Cpath d='M196.4,55.1 L3.6,56.5'/%3E" +
  "%3Cpath d='M4.2,57.1 L5.4,3.8'/%3E" +
  "%3C/g%3E" +
  "%3C/svg%3E\")";

/** Surlignage feutre : deux passes, bouts ronds. hex sans le "#". */
export const feutre = (hex: string) =>
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cg fill='none' stroke='%23" + hex + "' stroke-linecap='round'%3E" +
  "%3Cpath d='M8,22 C55,16 145,27 193,18' stroke-width='26' stroke-opacity='0.9'/%3E" +
  "%3Cpath d='M4,41 C70,47 130,35 197,43' stroke-width='24' stroke-opacity='0.75'/%3E" +
  "%3C/g%3E" +
  "%3C/svg%3E\")";

/** Contour de carte trace au crayon pastel, bords irreguliers. */
export const contourCrayon = (hex: string, seed: number) =>
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cfilter id='c" + seed + "' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='" + seed + "' result='n'/%3E" +
  "%3CfeDisplacementMap in='SourceGraphic' in2='n' scale='3.4' xChannelSelector='R' yChannelSelector='G'/%3E" +
  "%3C/filter%3E" +
  "%3Cpath filter='url(%23c" + seed + ")' d='M3.5,5 L196.5,3.8 L195.6,56.2 L4.2,57 Z' " +
  "fill='none' stroke='%23" + hex + "' stroke-width='2.6' stroke-linejoin='round' vector-effect='non-scaling-stroke'/%3E" +
  "%3C/svg%3E\")";

/** Contour crayon leger (champs, encarts discrets). */
export const contourLeger = (hex: string, seed: number, opacity: number) =>
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60' preserveAspectRatio='none'%3E" +
  "%3Cfilter id='l" + seed + "' x='-20%25' y='-20%25' width='140%25' height='140%25'%3E" +
  "%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='" + seed + "' result='n'/%3E" +
  "%3CfeDisplacementMap in='SourceGraphic' in2='n' scale='2.4' xChannelSelector='R' yChannelSelector='G'/%3E" +
  "%3C/filter%3E" +
  "%3Cpath filter='url(%23l" + seed + ")' d='M3.5,5 L196.5,3.8 L195.6,56.2 L4.2,57 Z' " +
  "fill='none' stroke='%23" + hex + "' stroke-opacity='" + opacity + "' stroke-width='1.8' " +
  "stroke-linejoin='round' vector-effect='non-scaling-stroke'/%3E" +
  "%3C/svg%3E\")";

/** Palette pastel de la DA. */
export const PASTELS = {
  peche: "F7BC90",
  rose: "F5B8CE",
  vertEau: "8FDDBD",
  jaune: "F7E06B",
  bleu: "93D2FF",
  lavande: "C9B6F2",
  pistache: "C8E07E",
} as const;

/** CSS commun : grain, header de test, boutons crayon. */
export const PAPER_CSS = `
main.flex-1 { flex: 0 0 auto !important; }

/* ---- echelle globale : tout le contenu 10% plus petit, mise en page inchangee ----
   Le zoom porte sur <main> seulement. Les media queries restent evaluees sur le
   viewport reel, donc aucune grille ne change de nombre de colonnes. */
main { zoom: 0.9; }

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

/* le vrai header du site est masque sur les pages de test */
header.sticky { display: none !important; }

/* ---- header de test ---- */
.tn {
  position: sticky; top: 0; z-index: 50;
  background: #F4F3EF;
  border-bottom: 1px solid rgba(17, 17, 16, 0.12);
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.tn-inner { max-width: 1180px; margin: 0 auto; padding: 0 20px; height: 66px; display: flex; align-items: center; gap: 20px; }
@media (min-width: 1024px) { .tn-inner { height: 76px; padding: 0 24px; } }
.tn-logo { font-size: 21px; font-weight: 600; letter-spacing: -0.04em; color: #111110; text-decoration: none; }
@media (min-width: 640px) { .tn-logo { font-size: 24px; } }
.tn-nav { display: none; margin: 0 auto; align-items: center; gap: 8px; }
@media (min-width: 1024px) { .tn-nav { display: flex; } }
.tn-link {
  position: relative; isolation: isolate; display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 10px; font-size: 14px; font-weight: 500; letter-spacing: -0.01em;
  color: #111110; text-decoration: none; background: none; border: 0; cursor: pointer; font-family: inherit;
}
.tn-link::before {
  content: ""; position: absolute; z-index: -1; left: -2px; right: -2px; top: 2px; bottom: 2px;
  background-repeat: no-repeat; background-size: 100% 100%; transform: rotate(-0.8deg);
}
.tn-l1::before { background-image: ${feutre(PASTELS.peche)}; }
.tn-l2::before { background-image: ${feutre(PASTELS.vertEau)}; }
.tn-l5::before { background-image: ${feutre(PASTELS.rose)}; }
.tn-l3::before { background-image: ${feutre(PASTELS.bleu)}; }
.tn-l4::before { background-image: ${feutre(PASTELS.jaune)}; }
.tn-caret { font-size: 10px; transition: transform 0.16s ease; }
.tn-caret-open { transform: rotate(180deg); }
.tn-drop-wrap { position: relative; }
.tn-drop {
  position: absolute; top: calc(100% + 10px); left: 0; min-width: 220px; padding: 10px;
  background: #F4F3EF; display: flex; flex-direction: column; gap: 6px; isolation: isolate;
}
.tn-drop::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background-image: ${contourLeger("111110", 83, 0.6)};
  background-repeat: no-repeat; background-size: 100% 100%;
}
.tn-drop-link { position: relative; isolation: isolate; padding: 8px 12px; font-size: 14px; font-weight: 500; color: #111110; text-decoration: none; }
.tn-drop-link::before {
  content: ""; position: absolute; z-index: -1; inset: 2px 0; background-repeat: no-repeat;
  background-size: 100% 100%; opacity: 0; transition: opacity 0.14s ease; transform: rotate(-0.8deg);
}
.tn-drop-link:hover::before { opacity: 1; }
.tn-d1::before { background-image: ${feutre(PASTELS.peche)}; }
.tn-d2::before { background-image: ${feutre(PASTELS.vertEau)}; }
.tn-d3::before { background-image: ${feutre(PASTELS.bleu)}; }
.tn-cta {
  position: relative; isolation: isolate; display: none; align-items: center; justify-content: center;
  margin-left: auto; padding: 12px 22px; font-size: 14px; font-weight: 550; color: #F4F3EF;
  text-decoration: none; transition: transform 0.16s ease;
}
@media (min-width: 1024px) { .tn-cta { display: inline-flex; } }
.tn-cta::before {
  content: ""; position: absolute; inset: -8px; z-index: -1;
  background-image: ${BTN_PLEIN}; background-repeat: no-repeat; background-size: 100% 100%;
}
.tn-cta:hover { transform: translateY(-1.5px); }
.tn-burger { margin-left: auto; width: 44px; height: 44px; font-size: 20px; line-height: 1; background: none; border: 0; color: #111110; cursor: pointer; }
@media (min-width: 1024px) { .tn-burger { display: none; } }
.tn-mobile { display: flex; flex-direction: column; gap: 4px; padding: 12px 20px 20px; border-top: 1px solid rgba(17, 17, 16, 0.12); }
.tn-mobile a { padding: 12px 0; font-size: 16px; font-weight: 500; color: #111110; text-decoration: none; }
.tn-mobile-group { padding: 14px 0 4px; font-size: 12px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(17, 17, 16, 0.55); }
.tn-mobile-sub { padding-left: 14px !important; }

/* ---- boutons crayon ---- */
.pa-btn {
  position: relative; isolation: isolate; display: inline-flex; align-items: center; justify-content: center;
  padding: 18px 32px; font-size: 0.95rem; font-weight: 550; letter-spacing: 0.005em;
  cursor: pointer; border: 0; border-radius: 0; background: none; text-decoration: none;
  transition: transform 0.16s ease;
}
.pa-btn::before { content: ""; position: absolute; inset: 0; z-index: -1; background-repeat: no-repeat; background-size: 100% 100%; }
.pa-btn-primary { color: #F4F3EF; }
.pa-btn-primary::before { inset: -8px; background-image: ${BTN_PLEIN}; }
.pa-btn-ghost { color: #111110; }
.pa-btn-ghost::before { background-image: ${BTN_CONTOUR}; }
.pa-btn:hover { transform: translateY(-1.5px); }

/* ---- footer papier ---- */
footer.bg-navy { background: #F4F3EF !important; color: #111110 !important; border-top: 1px solid rgba(17,17,16,0.12) !important; }
footer.bg-navy a[href="/"] img { display: none !important; }
footer.bg-navy a[href="/"] span { color: #111110 !important; }
footer.bg-navy p { color: rgba(17,17,16,0.72) !important; }
footer.bg-navy h3 { color: rgba(17,17,16,0.5) !important; }
footer.bg-navy a { color: rgba(17,17,16,0.72) !important; }
footer.bg-navy a:hover { color: #111110 !important; }
footer.bg-navy [class*="border-white"] { border-color: rgba(17,17,16,0.12) !important; }

/* ---------------------------- MOBILE ------------------------------------
   On annule la reduction de 10% sous 768px : sur un petit ecran elle faisait
   tomber le texte des cartes a 12,8px effectifs. Le desktop n'est pas touche.
   Le calque de grain garde sa position fixe mais perd le mix-blend-mode, qui
   force une recomposition a chaque frame et fait saccader le scroll mobile. */
@media (max-width: 767px) {
  main { zoom: 1; }

  /* rendu inchange : on promeut seulement le calque pour alleger le scroll */
  .th-grain { transform: translateZ(0); }

  /* CTA collant mobile : bouton crayon de la DA */
  .sticky-mobile-cta a {
    position: relative;
    isolation: isolate;
    background: none !important;
    background-color: transparent !important;
    color: #F4F3EF !important;
    border-radius: 0 !important;
    min-height: 46px;
  }
  .sticky-mobile-cta a::before {
    content: "";
    position: absolute;
    inset: -6px;
    z-index: -1;
    background-image: ${BTN_PLEIN};
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .sticky-mobile-cta a svg { color: #F4F3EF !important; }

  /* mascottes : elles occupaient jusqu'a 87% de la largeur d'un ecran de 375px.
     On les plafonne, le ratio est conserve par width:auto + object-fit:contain.
     Les captures GSC (proof) gardent leur dimensionnement. */
  main img[src*="illustrations"]:not([src*="proof"]) { max-height: 190px; }

  /* cibles tactiles confortables */
  main summary,
  main a[class*="btn"],
  main button { min-height: 44px; }

  /* liens du footer et de la 404 : 20 a 27px de haut, trop petits au doigt */
  footer a { min-height: 40px; display: inline-flex; align-items: center; }
  .nf-links a { min-height: 44px; display: inline-flex; align-items: center; }

  /* aucun mot long ni URL ne peut deborder */
  main p,
  main li,
  main h1,
  main h2,
  main h3,
  main summary,
  main td { overflow-wrap: break-word; }

  /* tableaux larges : defilement interne plutot que debordement de page */
  main table { display: block; width: 100%; overflow-x: auto; }
  main pre { overflow-x: auto; }
}

/* moins d'animation si l'utilisateur le demande */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
`;

/**
 * HABILLAGE PAPIER GLOBAL.
 * Neutralise les tokens visuels de l'ancien design (bleus, navy, degrades,
 * cartes blanches, ombres) et repose la DA papier PAR-DESSUS, sans toucher
 * au contenu, aux balises, aux liens ni aux JSON-LD.
 */
export const PAPER_SKIN = `
/* ---------- fond papier ---------- */
html, body { background-color: #F4F3EF !important; color: #111110; }

/* ---------- aucun degrade, aucune ombre ---------- */
[class*="gradient"] { background-image: none !important; }
[class*="shadow"] { box-shadow: none !important; }

/* ---------- fonds clairs bleutes -> papier ---------- */
.bg-white,
[class*="bg-[#F"],
[class*="bg-[#E"],
[class*="bg-[#D"],
[class*="bg-gray-light"],
[class*="bg-slate"],
[class*="bg-blue"],
[class*="bg-emerald"],
[class*="bg-green"],
[class*="bg-red"] { background-color: transparent !important; }

/* ---------- fonds sombres -> papier, texte en encre ---------- */
.bg-navy,
[class*="bg-[#0"],
[class*="bg-[#1"] { background-color: #F4F3EF !important; }
.bg-navy, .bg-navy *,
[class*="bg-[#0"] *,
[class*="bg-[#1"] * { color: #111110 !important; }
[class*="text-white"] { color: #111110 !important; }

/* ---------- accents colores -> encre ---------- */
[class*="text-cyan"],
[class*="text-emerald"],
[class*="text-green"],
[class*="text-red"],
[class*="text-blue"] { color: #111110 !important; }

/* ---------- bordures -> encre faible ---------- */
[class*="border-"] { border-color: rgba(17, 17, 16, 0.18) !important; }

/* ---------- titres ---------- */
h1, h2, h3, h4 { color: #111110 !important; letter-spacing: -0.025em; }

/* ---------- boutons pleins -> crayon ---------- */
a[class*="bg-cyan"], button[class*="bg-cyan"] {
  position: relative;
  isolation: isolate;
  background-color: transparent !important;
  border-radius: 0 !important;
  color: #F4F3EF !important;
}
a[class*="bg-cyan"]::before, button[class*="bg-cyan"]::before {
  content: "";
  position: absolute;
  inset: -6px;
  z-index: -1;
  background-image: ${BTN_PLEIN};
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
a[class*="bg-cyan"] *, button[class*="bg-cyan"] * { color: #F4F3EF !important; }

/* ---------- champs de formulaire ---------- */
input:not([type="checkbox"]):not([type="radio"]),
textarea,
select {
  background-color: transparent !important;
  background-image: ${contourLeger("111110", 227, 0.45)} !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  border: 0 !important;
  border-radius: 0 !important;
  color: #111110 !important;
}
input:focus, textarea:focus, select:focus {
  outline: 2px solid rgba(17, 17, 16, 0.55) !important;
  outline-offset: 2px !important;
}
`;
