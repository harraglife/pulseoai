import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import "@/styles/pages/offre.css";

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
