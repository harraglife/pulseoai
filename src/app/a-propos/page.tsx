import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import "@/styles/pages/a-propos.css";

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


export default function AProposPage() {
  return (
    <>
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
