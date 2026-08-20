import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgentContactForm } from "@/components/agent-contact-form";
import "@/styles/pages/agents-ia.css";

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


export default function AgentsIaPage() {
  return (
    <>
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
