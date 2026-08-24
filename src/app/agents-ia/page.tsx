import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgentContactForm } from "@/components/agent-contact-form";
import "@/styles/pages/agents-ia.css";

export const metadata: Metadata = {
  title: "Agent IA sur mesure : agence et intégrateur IA pour PME",
  description:
    "Agence d’agents IA : création d’agent IA sur mesure connecté à votre CRM et vos outils. Automatisez relance client, devis et emails. PME, artisans, hôtels.",
  alternates: { canonical: "/agents-ia" },
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
    q: "Un agent IA, est-ce simplement ChatGPT branché sur mes outils ?",
    a: "Non. Un assistant attend votre message, un agent se déclenche sur un événement : une demande qui arrive, une échéance, un dossier qui change d'état. Ce qui change, ce n'est pas le modèle, c'est de connecter l'IA à son CRM, à sa messagerie et à ses outils métier, puis de lui donner le droit d'agir.",
  },
  {
    q: "Est-ce que l'agent peut se tromper ?",
    a: "Oui, comme tout système automatisé. C'est pour cette raison que l'on définit dès le cadrage ce que l'agent fait seul et ce qu'il vous soumet avant envoi. Les actions sensibles passent par une validation humaine.",
  },
  {
    q: "Qui garde le contrôle ?",
    a: "Vous. L'agent travaille dans les outils de votre entreprise, avec les accès que vous lui donnez, et vous pouvez les retirer à tout moment. Chaque automatisation est réversible et le périmètre reste défini par vous.",
  },
  {
    q: "Que se passe-t-il pendant le mois de mise en place ?",
    a: "La première semaine sert au cadrage : on choisit la tâche à automatiser et on définit ce que l'agent fait seul. Viennent ensuite les accès aux outils, la construction, puis les tests sur vos vrais dossiers. Vous relisez ses premières sorties avant qu'il prenne la main.",
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
            <p className="pa-text">
              PulseoAI est une agence d’agents IA. Nous prenons en charge la
              création d’agent IA sur mesure, puis sa mise en place dans les
              outils métier de votre entreprise : messagerie, CRM, devis,
              facturation, planning.
              Notre rôle d’intégrateur IA s’arrête là où commence votre métier.
            </p>
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
            <p className="pa-text">
              Concrètement, intégrer l’IA dans ses outils métier veut dire lui
              ouvrir les bons accès : connecter l’IA à son CRM pour qu’elle
              retrouve un historique, à la messagerie pour qu’elle lise une
              demande, à l’outil de facturation pour qu’elle sache ce qui reste
              impayé. C’est ce qui transforme un assistant en automatisation sur
              mesure, ancrée dans le quotidien de votre entreprise.
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
                    "Qualifier les demandes entrantes avant votre première lecture",
                    "Automatiser la relance client quand un devis reste sans réponse",
                    "Préparer vos rendez-vous avec l’historique déjà réuni depuis votre CRM",
                  ],
                },
                {
                  nom: "Devis et facturation",
                  items: [
                    "Automatiser les devis à partir de notes prises sur le terrain",
                    "Automatiser la relance des factures impayées, avec le ton adapté au retard",
                    "Automatiser la facturation récurrente et le suivi des acomptes",
                  ],
                },
                {
                  nom: "Support et relation client",
                  items: [
                    "Automatiser le traitement des emails entrants, tri et priorisation",
                    "Répondre au premier niveau sur les questions qui reviennent chaque semaine",
                    "Rassembler et résumer les avis clients",
                  ],
                },
                {
                  nom: "Email et administratif",
                  items: [
                    "Automatiser les tâches administratives qui reviennent chaque semaine",
                    "Résumer votre boîte mail et sortir les points qui demandent une décision",
                    "Mettre à jour vos données entre deux logiciels, sans ressaisie",
                  ],
                },
                {
                  nom: "RH et recrutement",
                  items: [
                    "Trier les candidatures et préparer les entretiens",
                    "Suivre l’arrivée d’un nouveau salarié, étape par étape",
                    "Réduire les tâches répétitives de réponse aux questions internes",
                  ],
                },
                {
                  nom: "Pilotage et direction",
                  items: [
                    "Construire un rapport de situation à partir de plusieurs outils",
                    "Suivre votre marché et vos concurrents sans y passer vos soirées",
                    "Automatisation de workflow entre vos outils de pilotage",
                  ],
                },
                {
                  nom: "Métier et sectoriel",
                  items: [
                    "IA pour artisan : devis, planning, suivi de chantier",
                    "IA pour hôtel : demandes de réservation directe et réponses aux voyageurs",
                    "Agent IA pour PME et automatisation pour TPE, taillés pour votre métier",
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
              Un agent IA se connecte aux outils que votre entreprise utilise
              déjà, via leurs interfaces de connexion publiques. Les noms cités sont ceux
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
                  qui tourne dans vos outils. Ce mois sert à connecter les accès,
                  construire l’agent, puis le tester sur vos vrais dossiers. Vous
                  relisez ses premières sorties et on ajuste avant de lui laisser
                  la main.
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

        {/* ---------- 5 bis. LIMITES ---------- */}
        <section className="pa-section">
          <div className="pa-inner">
            <h2 className="pa-h2">
              Ce qu’un agent IA{" "}
              <span className="pa-mark pa-mark-vert">ne fait pas</span>
            </h2>
            <p className="pa-text">
              Une automatisation sur mesure n’a d’intérêt que si vous savez aussi
              où elle s’arrête. Voici ce que nous ne promettons pas.
            </p>

            <div className="pa-duo">
              <article className="pa-card pa-card-1">
                <h3 className="pa-card-title">Il ne décide pas à votre place</h3>
                <p className="pa-card-text">
                  Un agent prépare, trie, rédige et relance. Il ne fixe pas vos
                  prix, ne choisit pas vos clients et n’engage pas votre
                  entreprise. Sur un envoi client, un devis ou un paiement, il
                  soumet et vous validez. L’autonomie se gagne cas par cas, une
                  fois que vous avez vu comment il travaille.
                </p>
              </article>

              <article className="pa-card pa-card-2">
                <h3 className="pa-card-title">Il ne répare pas une organisation floue</h3>
                <p className="pa-card-text">
                  Pour automatiser les tâches administratives, encore faut-il que
                  l’information existe quelque part. Si les devis vivent sur des
                  bouts de papier et que rien n’est tracé, l’agent n’a rien à
                  lire. Dans ce cas, on commence par remettre les données au bon
                  endroit, pas par installer un agent.
                </p>
              </article>
            </div>

            <p className="pa-text">
              Ce n’est pas non plus le bon moment si votre entreprise change de
              modèle dans les semaines qui viennent, ou si la tâche visée revient
              deux fois par an. Un agent se rentabilise sur ce qui se répète et
              vous fait perdre du temps chaque semaine.
            </p>
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
