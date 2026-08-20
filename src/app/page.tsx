import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import "@/styles/pages/home.css";

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
                sizes="(max-width: 767px) 200px, 420px"
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
              sizes="(max-width: 767px) 200px, 420px"
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
              sizes="(max-width: 767px) 200px, 420px"
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
              sizes="(max-width: 767px) 200px, 420px"
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
            sizes="(max-width: 767px) 200px, 420px"
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
            sizes="(max-width: 767px) 200px, 420px"
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
            sizes="(max-width: 767px) 200px, 420px"
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
