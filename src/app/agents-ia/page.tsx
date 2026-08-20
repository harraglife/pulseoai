import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgentContactForm } from "@/components/agent-contact-form";
import {
  PAPER_CSS,
  PASTELS,
  feutre,
  contourCrayon,
  contourLeger,
} from "@/lib/paper-da";

export const metadata: Metadata = {
  title: "Agent IA sur mesure : automatisez vos tâches",
  description:
    "Recrutez un agent IA sur mesure qui travaille dans vos outils : emails, devis, réservations. Automatisation et intégration IA en entreprise, pensées pour les PME.",
  alternates: { canonical: "/agents-ia" },
  // page encore en test : a retirer au moment de la mise en ligne
};

// --- outils compatibles (bandeau defilant) ---
const OUTILS_A = [
  "Gmail",
  "Google Calendar",
  "Google Sheets",
  "Google Drive",
  "Slack",
  "Notion",
  "Airtable",
  "HubSpot",
  "Salesforce",
  "Microsoft Teams",
];
const OUTILS_B = [
  "Outlook",
  "Excel",
  "WhatsApp",
  "Telegram",
  "Jira",
  "GitHub",
  "Stripe",
  "Zapier",
  "Make",
  "PostgreSQL",
];

const FAQ = [
  {
    q: "Quelle différence entre un agent IA et ChatGPT ?",
    a: "ChatGPT répond quand vous lui parlez. Un agent IA se déclenche tout seul, va chercher l'information dans vos outils et prépare ou exécute l'action. La différence n'est pas l'intelligence du modèle, c'est l'accès à vos données et le droit d'agir.",
  },
  {
    q: "Est-ce que l'agent peut se tromper ?",
    a: "Oui, comme tout système automatisé. C'est pour cette raison que l'on définit dès le cadrage ce que l'agent fait seul et ce qu'il vous soumet avant envoi. Les actions sensibles passent par une validation humaine.",
  },
  {
    q: "Qui garde le contrôle ?",
    a: "Vous. L'agent travaille dans vos outils, avec les accès que vous lui donnez, et vous pouvez les retirer à tout moment. Chaque automatisation est réversible et le périmètre reste défini par vous.",
  },
  {
    q: "Combien de temps pour mettre en place un agent IA ?",
    a: "Comptez environ un mois entre le premier échange et un agent qui tourne dans vos outils. Le délai dépend du nombre d'outils à connecter et du niveau de validation souhaité.",
  },
  {
    q: "Avec quels outils un agent IA peut-il fonctionner ?",
    a: "Un agent peut se connecter aux outils que vous utilisez déjà : messagerie, agenda, tableurs, stockage de fichiers, CRM, messagerie d'équipe, base de données ou outils d'automatisation. Si l'outil expose une interface de connexion, l'intégration est envisageable.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const CSS = `
${PAPER_CSS}

/* ================= PAGE AGENTS IA ================= */
.pa {
  position: relative;
  z-index: 1;
  background: transparent; /* le grain papier fixe reste visible dessous */
  color: #111110;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.pa-section { padding: 88px 24px; }
@media (min-width: 1024px) { .pa-section { padding: 104px 32px; } }

/* defilement doux vers l'ancre, sans passer sous le header sticky */
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
#cadrer { scroll-margin-top: 66px; }
@media (min-width: 1024px) { #cadrer { scroll-margin-top: 76px; } }
.pa-inner { max-width: 900px; margin: 0 auto; text-align: center; }

.pa-h1 {
  margin: 0;
  font-size: clamp(2.1rem, 5vw, 3.6rem);
  line-height: 1.06;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}
.pa-h2 {
  margin: 0 auto;
  max-width: 20ch;
  font-size: clamp(1.7rem, 3.4vw, 2.6rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  font-weight: 600;
  color: #111110;
}
.pa-lead {
  margin: 20px auto 0;
  max-width: 40em;
  font-size: clamp(1.05rem, 1.5vw, 1.22rem);
  line-height: 1.7;
  color: rgba(17, 17, 16, 0.62);
}
.pa-text {
  margin: 26px auto 0;
  max-width: 44em;
  font-size: clamp(1rem, 1.35vw, 1.1rem);
  line-height: 1.8;
  color: rgba(17, 17, 16, 0.78);
}

/* surlignage feutre */
.pa-mark {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.1em 0.26em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.pa-mark-peche { background-image: ${feutre(PASTELS.peche)}; }
.pa-mark-vert { background-image: ${feutre(PASTELS.vertEau)}; }
.pa-mark-jaune { background-image: ${feutre(PASTELS.jaune)}; }
.pa-mark-bleu { background-image: ${feutre(PASTELS.bleu)}; }

/* accroche narrative du hero : preambule discret, il ne concurrence pas le H1 */
.pa-hook {
  margin: 22px auto 0;
  max-width: 32em;
  font-size: clamp(0.94rem, 1.05vw, 1.02rem);
  line-height: 1.75;
  color: rgba(17, 17, 16, 0.62);
}
/* phrase de chute : detachee par la graisse et l'espacement, sans surlignage */
.pa-hook-punch {
  margin: 18px auto 0;
  max-width: 32em;
  font-size: clamp(0.98rem, 1.15vw, 1.08rem);
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.005em;
  color: #111110;
}
/* beaucoup d'air entre l'accroche et le H1 */
.pa-hook-gap { height: clamp(48px, 7vh, 84px); }

.pa-lion { width: auto; max-width: 100%; object-fit: contain; margin-left: auto; margin-right: auto; }
.pa-lion-hero { height: clamp(220px, 30vh, 320px); margin-top: 30px; }
.pa-lion-mid { height: clamp(150px, 20vh, 210px); }

/* mascotte posee a gauche du titre */
.pa-with-lion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
@media (min-width: 860px) {
  .pa-with-lion { flex-direction: row; gap: clamp(20px, 4vw, 48px); text-align: left; }
  .pa-with-lion-right { flex-direction: row-reverse; }
  .pa-with-lion .pa-h2 { margin: 0; }
  .pa-with-lion .pa-lion { flex: none; margin-left: 0; margin-right: 0; }
}

.pa-actions { margin-top: 30px; display: flex; justify-content: center; }

/* ---- deux exemples ---- */
.pa-duo {
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
  max-width: 940px;
  margin: 48px auto 0;
  text-align: left;
}
@media (min-width: 820px) { .pa-duo { grid-template-columns: 1fr 1fr; gap: 32px; } }
.pa-card { position: relative; isolation: isolate; padding: 28px 26px 30px; }
.pa-card::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background-repeat: no-repeat; background-size: 100% 100%;
}
.pa-card-1::before { background-image: ${contourCrayon(PASTELS.peche, 101)}; }
.pa-card-2::before { background-image: ${contourCrayon(PASTELS.vertEau, 103)}; }
.pa-card-title { margin: 0; font-size: 1.22rem; font-weight: 600; letter-spacing: -0.015em; color: #111110; }
.pa-card-text { margin: 14px 0 0; font-size: 0.98rem; line-height: 1.68; color: rgba(17, 17, 16, 0.78); }

/* ---- familles d'agents ---- */
/* flex + wrap : la derniere rangee se centre, aucune carte n'est mise en avant */
.pa-fams {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1040px;
  margin: 48px auto 0;
  text-align: left;
}
.pa-fam {
  position: relative;
  isolation: isolate;
  flex: 1 1 290px;
  max-width: 330px;
  padding: 26px 24px 28px;
}
.pa-fam::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background-repeat: no-repeat; background-size: 100% 100%;
}
/* une couleur pastel differente par cadre */
.pa-f1::before { background-image: ${contourCrayon(PASTELS.peche, 149)}; }
.pa-f2::before { background-image: ${contourCrayon(PASTELS.vertEau, 151)}; }
.pa-f3::before { background-image: ${contourCrayon(PASTELS.jaune, 157)}; }
.pa-f4::before { background-image: ${contourCrayon(PASTELS.bleu, 163)}; }
.pa-f5::before { background-image: ${contourCrayon(PASTELS.rose, 167)}; }
.pa-f6::before { background-image: ${contourCrayon(PASTELS.lavande, 173)}; }
.pa-f7::before { background-image: ${contourCrayon(PASTELS.pistache, 179)}; }

.pa-fam-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.5;
  color: #111110;
}

/* titre surligne au feutre, dans la couleur du cadre */
.pa-fam-mark {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.26em 0.36em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.pa-f1 .pa-fam-mark { background-image: ${feutre(PASTELS.peche)}; }
.pa-f2 .pa-fam-mark { background-image: ${feutre(PASTELS.vertEau)}; }
.pa-f3 .pa-fam-mark { background-image: ${feutre(PASTELS.jaune)}; }
.pa-f4 .pa-fam-mark { background-image: ${feutre(PASTELS.bleu)}; }
.pa-f5 .pa-fam-mark { background-image: ${feutre(PASTELS.rose)}; }
.pa-f6 .pa-fam-mark { background-image: ${feutre(PASTELS.lavande)}; }
.pa-f7 .pa-fam-mark { background-image: ${feutre(PASTELS.pistache)}; }
.pa-fam-list { margin: 14px 0 0; padding: 0; list-style: none; }
.pa-fam-list li {
  position: relative;
  padding-left: 16px;
  margin-top: 8px;
  font-size: 0.94rem;
  line-height: 1.55;
  color: rgba(17, 17, 16, 0.78);
}
.pa-fam-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 7px;
  height: 1.5px;
  background: rgba(17, 17, 16, 0.45);
}

/* ---- bandeau outils defilant (CSS pur) ---- */
.pa-marquee { margin-top: 48px; display: flex; flex-direction: column; gap: 16px; overflow: hidden; }
.pa-track { display: flex; width: max-content; gap: 14px; will-change: transform; }
.pa-track-a { animation: pa-scroll-a 46s linear infinite; }
.pa-track-b { animation: pa-scroll-b 52s linear infinite; }
@keyframes pa-scroll-a { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes pa-scroll-b { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.pa-marquee:hover .pa-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .pa-track { animation: none; }
  .pa-marquee { overflow-x: auto; }
}
.pa-chip {
  position: relative; isolation: isolate; flex: none;
  padding: 12px 20px; font-size: 0.92rem; font-weight: 500; white-space: nowrap; color: #111110;
}
.pa-chip::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background-image: ${contourLeger("111110", 107, 0.42)};
  background-repeat: no-repeat; background-size: 100% 100%;
}
.pa-note { margin: 26px auto 0; max-width: 40em; font-size: 0.9rem; line-height: 1.6; color: rgba(17, 17, 16, 0.55); }
.pa-note a { color: #111110; font-weight: 500; text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1.5px; }

/* ---- methode : 4 etapes ---- */
.pa-steps {
  display: grid; grid-template-columns: 1fr; gap: 24px;
  max-width: 940px; margin: 48px auto 0; text-align: left;
}
@media (min-width: 760px) { .pa-steps { grid-template-columns: 1fr 1fr; gap: 28px; } }
.pa-step { position: relative; isolation: isolate; padding: 26px 24px 28px; }
.pa-step::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background-repeat: no-repeat; background-size: 100% 100%;
}
.pa-s1::before { background-image: ${contourCrayon(PASTELS.peche, 109)}; }
.pa-s2::before { background-image: ${contourCrayon(PASTELS.vertEau, 113)}; }
.pa-s3::before { background-image: ${contourCrayon(PASTELS.jaune, 127)}; }
.pa-s4::before { background-image: ${contourCrayon(PASTELS.bleu, 131)}; }
.pa-step-num {
  display: inline-block; padding: 0.3em 0.62em; font-size: 0.84rem; font-weight: 600;
  color: #111110; background-repeat: no-repeat; background-size: 100% 100%;
}
.pa-s1 .pa-step-num { background-image: ${feutre(PASTELS.peche)}; }
.pa-s2 .pa-step-num { background-image: ${feutre(PASTELS.vertEau)}; }
.pa-s3 .pa-step-num { background-image: ${feutre(PASTELS.jaune)}; }
.pa-s4 .pa-step-num { background-image: ${feutre(PASTELS.bleu)}; }
.pa-step-title { margin: 14px 0 0; font-size: 1.14rem; font-weight: 600; letter-spacing: -0.015em; color: #111110; }
.pa-step-text { margin: 10px 0 0; font-size: 0.97rem; line-height: 1.65; color: rgba(17, 17, 16, 0.78); }

/* ---- formulaire court ---- */
.pa-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px 20px;
  max-width: 660px;
  margin: 40px auto 0;
  text-align: left;
}
@media (min-width: 640px) {
  .pa-form { grid-template-columns: 1fr 1fr; }
  .pa-field-full, .pa-form-submit, .pa-form-error { grid-column: 1 / -1; }
}
.pa-field { display: flex; flex-direction: column; gap: 6px; }
.pa-field label { font-size: 0.86rem; font-weight: 500; color: #111110; }
.pa-field label span { color: rgba(17, 17, 16, 0.5); }
.pa-field input,
.pa-field textarea {
  width: 100%;
  padding: 11px 14px;
  font-family: inherit;
  font-size: 0.95rem;
  color: #111110;
  background-color: transparent;
  background-image: ${contourLeger("111110", 191, 0.45)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 0;
  border-radius: 0;
  outline: none;
}
.pa-field textarea { resize: vertical; min-height: 96px; line-height: 1.55; }
.pa-field input::placeholder,
.pa-field textarea::placeholder { color: rgba(17, 17, 16, 0.4); }
.pa-field input:focus,
.pa-field textarea:focus {
  outline: 2px solid rgba(17, 17, 16, 0.55);
  outline-offset: 2px;
  background-image: ${contourLeger("111110", 191, 0.75)};
}
.pa-form-submit { justify-self: center; margin-top: 10px; }
.pa-form-submit:disabled { opacity: 0.6; cursor: default; }
.pa-form-error { margin: 0; font-size: 0.92rem; color: #111110; font-weight: 500; }

.pa-form-done { max-width: 560px; margin: 40px auto 0; }
.pa-form-done-title { margin: 0; font-size: 1.2rem; font-weight: 600; color: #111110; }
.pa-form-done-text { margin: 10px 0 0; font-size: 1rem; line-height: 1.65; color: rgba(17, 17, 16, 0.72); }

/* ---- FAQ ---- */
.pa-faq { max-width: 820px; margin: 44px auto 0; display: flex; flex-direction: column; gap: 14px; text-align: left; }
.pa-faq-item { position: relative; isolation: isolate; padding: 16px 20px; }
.pa-faq-item::before {
  content: ""; position: absolute; inset: 0; z-index: -1;
  background-image: ${contourLeger("111110", 137, 0.5)};
  background-repeat: no-repeat; background-size: 100% 100%;
}
.pa-faq-item summary {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  cursor: pointer; list-style: none; font-size: 1rem; font-weight: 600; color: #111110;
}
.pa-faq-item summary::-webkit-details-marker { display: none; }
.pa-faq-sign { flex: none; font-size: 1.2rem; line-height: 1; transition: transform 0.18s ease; }
.pa-faq-item[open] .pa-faq-sign { transform: rotate(45deg); }
.pa-faq-answer {
  margin: 12px 0 0; padding-top: 12px;
  border-top: 1.5px solid rgba(17, 17, 16, 0.14);
  font-size: 0.95rem; line-height: 1.7; color: rgba(17, 17, 16, 0.78);
}
`;

export default function AgentsIaPage() {
  return (
    <>
      <style>{CSS}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />


      <div className="pa">
        {/* ---------- 1. HERO ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <h1 className="pa-h1">
              Recrutez votre{" "}
              <span className="pa-mark pa-mark-peche">agent IA</span>.
            </h1>
            <p className="pa-hook">
              Imaginez quelqu&apos;un qui ouvre vos mails avant vous. Qui
              prépare vos devis pendant que vous êtes sur le terrain. Qui
              relance vos impayés sans jamais oublier, sans jamais
              s&apos;énerver.
            </p>
            <p className="pa-hook-punch">
              <span className="pa-mark pa-mark-jaune">
                Il ne prend pas de congés et il ne démissionne pas.
              </span>
            </p>
            <Image
              sizes="(max-width: 767px) 200px, 420px"
              src="/illustrations/VHl73R9s.png"
              alt="Mascotte lion qui présente les agents IA"
              width={1536}
              height={1536}
              priority
              className="pa-lion pa-lion-hero"
            />
            <div className="pa-actions">
              <a href="#cadrer" className="pa-btn pa-btn-primary">
                <span>Cadrer mon premier agent</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 2. CHATGPT VS AGENT ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <div className="pa-with-lion">
              <Image
                sizes="(max-width: 767px) 200px, 420px"
                src="/illustrations/xyEexm52.png"
                alt="Mascotte lion pensive"
                width={1536}
                height={1536}
                loading="lazy"
                className="pa-lion pa-lion-mid"
              />
              <h2 className="pa-h2">
                Vous avez déjà ChatGPT. Et pourtant rien n&apos;est{" "}
                <span className="pa-mark pa-mark-vert">automatisé</span>.
              </h2>
            </div>
            <p className="pa-text">
              ChatGPT répond quand on lui parle. Un agent, lui, se déclenche
              tout seul, va chercher l&apos;information dans vos outils, et
              prépare ou exécute l&apos;action. La différence n&apos;est pas
              l&apos;intelligence, c&apos;est l&apos;accès à vos données et le
              droit d&apos;agir.
            </p>
          </div>
        </section>

        {/* ---------- 3. DEUX EXEMPLES ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <h2 className="pa-h2">Deux exemples concrets</h2>

            <div className="pa-duo">
              <article className="pa-card pa-card-1">
                <h3 className="pa-card-title">L&apos;hôtelier</h3>
                <p className="pa-card-text">
                  Chaque semaine, des demandes de réservation directe arrivent
                  par email. L&apos;agent les lit, vérifie les disponibilités,
                  prépare une réponse personnalisée avec les tarifs et le lien
                  de réservation. L&apos;hôtelier relit et valide en un clic.
                  Les demandes ne dorment plus 48 heures dans une boîte mail.
                </p>
              </article>

              <article className="pa-card pa-card-2">
                <h3 className="pa-card-title">L&apos;artisan</h3>
                <p className="pa-card-text">
                  Les demandes de devis arrivent par téléphone, formulaire et
                  messages. L&apos;agent les centralise, pose les questions
                  manquantes, structure le besoin et prépare un brouillon de
                  devis. L&apos;artisan arrive le soir sur un dossier déjà monté
                  au lieu d&apos;une pile de notes.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- 3 bis. FAMILLES D'AGENTS ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <div className="pa-with-lion pa-with-lion-right">
              <Image
                sizes="(max-width: 767px) 200px, 420px"
                src="/illustrations/q0BWcbVt.png"
                alt="Mascotte lion présentant les familles d'agents"
                width={1536}
                height={1536}
                loading="lazy"
                className="pa-lion pa-lion-mid"
              />
              <h2 className="pa-h2">
                Un agent pour chaque partie de votre activité
              </h2>
            </div>
          </div>

          <div className="pa-fams">
              {[
                {
                  nom: "Commercial et prospection",
                  items: [
                    "Prospection sortante",
                    "Qualification des demandes entrantes",
                    "Préparation et suivi des rendez-vous",
                  ],
                },
                {
                  nom: "Devis et facturation",
                  items: [
                    "Préparation de devis à partir de notes terrain",
                    "Relance des factures impayées",
                    "Suivi des acomptes",
                  ],
                },
                {
                  nom: "Support et relation client",
                  items: [
                    "Tri et priorisation des demandes",
                    "Réponse de premier niveau",
                    "Collecte et synthèse des avis clients",
                  ],
                },
                {
                  nom: "Email et administratif",
                  items: [
                    "Tri et résumé de boîte mail",
                    "Préparation de dossiers",
                    "Mise à jour de données entre outils",
                  ],
                },
                {
                  nom: "RH et recrutement",
                  items: [
                    "Tri de candidatures",
                    "Suivi de l'arrivée d'un nouveau salarié",
                    "Réponse aux questions internes récurrentes",
                  ],
                },
                {
                  nom: "Pilotage et direction",
                  items: [
                    "Rapport de situation à partir de plusieurs outils",
                    "Veille sur le marché et les concurrents",
                  ],
                },
                {
                  nom: "Métier et sectoriel",
                  items: [
                    "Agents taillés pour un métier précis",
                    "Hôtellerie, restauration, commerce, artisanat",
                  ],
                },
              ].map((f, i) => (
                <article key={f.nom} className={`pa-fam pa-f${i + 1}`}>
                  <h3 className="pa-fam-title">
                    <span className="pa-fam-mark">{f.nom}</span>
                  </h3>
                  <ul className="pa-fam-list">
                    {f.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </section>

        {/* ---------- 4. OUTILS COMPATIBLES ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <h2 className="pa-h2">
              Vos <span className="pa-mark pa-mark-jaune">outils</span>, déjà
              compatibles
            </h2>
          </div>

          <div className="pa-marquee" aria-label="Outils sur lesquels un agent IA peut être connecté">
            <div className="pa-track pa-track-a">
              {[...OUTILS_A, ...OUTILS_A].map((o, i) => (
                <span className="pa-chip" key={`a${i}`}>
                  {o}
                </span>
              ))}
            </div>
            <div className="pa-track pa-track-b">
              {[...OUTILS_B, ...OUTILS_B].map((o, i) => (
                <span className="pa-chip" key={`b${i}`}>
                  {o}
                </span>
              ))}
            </div>
          </div>

          <div className="pa-inner">
            <p className="pa-note">
              Un agent IA se connecte aux outils que vous utilisez déjà, via
              leurs interfaces de connexion publiques. Les noms cités sont ceux
              de leurs éditeurs respectifs.
            </p>
          </div>
        </section>

        {/* ---------- 5. METHODE ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <h2 className="pa-h2">
              De l&apos;installation{" "}
              <span className="pa-mark pa-mark-bleu">à vie</span>
            </h2>

            <div className="pa-steps">
              <article className="pa-step pa-s1">
                <span className="pa-step-num">01</span>
                <h3 className="pa-step-title">Vous me contactez</h3>
                <p className="pa-step-text">
                  On échange sur votre quotidien et ce qui vous fait perdre du
                  temps.
                </p>
              </article>

              <article className="pa-step pa-s2">
                <span className="pa-step-num">02</span>
                <h3 className="pa-step-title">On cadre le projet</h3>
                <p className="pa-step-text">
                  On identifie le bon premier cas, celui qui a le plus
                  d&apos;impact et le moins de risque. On définit ce que
                  l&apos;agent fait seul et ce qu&apos;il vous soumet.
                </p>
              </article>

              <article className="pa-step pa-s3">
                <span className="pa-step-num">03</span>
                <h3 className="pa-step-title">Je construis et je livre</h3>
                <p className="pa-step-text">
                  Comptez environ un mois entre le premier échange et un agent
                  qui tourne dans vos outils.
                </p>
              </article>

              <article className="pa-step pa-s4">
                <span className="pa-step-num">04</span>
                <h3 className="pa-step-title">Je reste là</h3>
                <p className="pa-step-text">
                  Maintenance, mises à jour, ajustements. Un agent vit avec
                  votre entreprise, il évolue avec elle.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- 6 bis. FORMULAIRE COURT ---------- */}
        <section className="pa-section" id="cadrer">
          <div className="pa-inner">
            <div className="pa-with-lion">
              <Image
                sizes="(max-width: 767px) 200px, 420px"
                src="/illustrations/g3p2LNK1.png"
                alt="Mascotte lion qui invite à échanger"
                width={1536}
                height={1536}
                loading="lazy"
                className="pa-lion pa-lion-mid"
              />
              <h2 className="pa-h2">Parlons de votre premier agent.</h2>
            </div>
            <p className="pa-lead">
              Dites-moi ce qui vous prend du temps. Je vous réponds sous 24h.
            </p>

            <AgentContactForm />
          </div>
        </section>

        {/* ---------- 6. FAQ ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <h2 className="pa-h2">Questions fréquentes sur les agents IA</h2>

            <div className="pa-faq">
              {FAQ.map((item) => (
                <details key={item.q} className="pa-faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <span className="pa-faq-sign" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="pa-faq-answer">{item.a}</p>
                </details>
              ))}
            </div>

            <p className="pa-note">
              Pour aller plus loin, lisez notre guide{" "}
              <Link href="/blog/comment-utiliser-ia-entreprise">
                comment utiliser l’IA dans son entreprise
              </Link>{" "}
              et notre comparatif{" "}
              <Link href="/blog/outils-ia-pme">quels outils IA pour une PME</Link>.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
