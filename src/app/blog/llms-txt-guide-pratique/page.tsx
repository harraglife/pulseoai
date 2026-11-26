import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { getArticleSchemaEnhancements } from "@/lib/article-metadata";
import { QuickAnswer } from "@/components/quick-answer";
import { ContactForm } from "@/components/contact-form";
import { RelatedPosts } from "@/components/related-posts";
import "@/styles/article.css";

export const metadata: Metadata = {
  title: "llms.txt : guide pratique pour votre site",
  description:
    "Le fichier llms.txt expliqué : syntaxe, exemples, mise en place sur WordPress, Webflow et Shopify, et ce que Google et les IA en font vraiment.",
  openGraph: {
    title: "llms.txt : guide pratique pour votre site",
    description:
      "Le fichier llms.txt expliqué : syntaxe, exemples, mise en place sur WordPress, Webflow et Shopify, et ce que Google et les IA en font vraiment.",
    url: "https://www.pulseoai.fr/blog/llms-txt-guide-pratique",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "llms.txt : guide pratique pour votre site" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "llms.txt : guide pratique pour votre site",
    description:
      "Le fichier llms.txt expliqué : syntaxe, exemples, mise en place sur WordPress, Webflow et Shopify, et ce que Google et les IA en font vraiment.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/blog/llms-txt-guide-pratique" },
};

const articleSchemaEnhancements = getArticleSchemaEnhancements("llms-txt-guide-pratique");

const blogPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "llms.txt : le guide pratique pour rendre votre site visible sur les IA",
  datePublished: "2026-03-31",
  dateModified: "2026-11-26",
  inLanguage: "fr-FR",
  url: "https://www.pulseoai.fr/blog/llms-txt-guide-pratique",
  articleSection: "Technique",
  keywords: ["llms.txt", "référencement IA", "visibilité IA", "ChatGPT", "Gemini", "Claude", "moteurs IA"],
  author: {
    "@type": "Person",
    name: "Romain Duclos",
    jobTitle: "Fondateur & Expert GEO",
    url: "https://www.pulseoai.fr/a-propos",
  },
  publisher: {
    "@type": "Organization",
    name: "PulseoAI",
    url: "https://www.pulseoai.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://www.pulseoai.fr/logo.png",
    },
  },
  image: "https://www.pulseoai.fr/og-image.png",
  description:
    "Guide llms.txt pour le référencement IA. Comprendre comment ce fichier aide les moteurs IA à repérer les contenus importants de votre site.",
  ...(articleSchemaEnhancements?.about ? { about: articleSchemaEnhancements.about } : {}),
  ...(articleSchemaEnhancements?.mentions
    ? { mentions: articleSchemaEnhancements.mentions }
    : {}),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.pulseoai.fr/blog/llms-txt-guide-pratique",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "C’est quoi le fichier llms.txt ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C’est un fichier texte au format Markdown, placé à la racine d’un site, qui présente l’activité en quelques lignes et liste les pages importantes avec une courte description. Il s’adresse aux modèles de langage et aux agents IA, pas aux visiteurs. Il reste une convention proposée par la communauté, sans statut officiel chez Google, OpenAI ou Anthropic."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre llms.txt et llms-full.txt ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le llms.txt est le sommaire : titre, résumé, sections de liens vers les pages clés. Le llms-full.txt rassemble le contenu complet du site converti en Markdown, pour les outils qui veulent tout lire d’un coup. Commencez par le premier ; le second n’a de sens que pour une documentation ou un catalogue volumineux."
      }
    },
    {
      "@type": "Question",
      "name": "Le fichier llms.txt sert-il vraiment à être cité par les moteurs IA ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rien ne le prouve aujourd’hui. Google indique l’ignorer, les robots d’OpenAI et d’Anthropic ne documentent que le robots.txt, et des analyses de logs ne relèvent aucune consultation du fichier par ces robots. Ce qui fait citer une entreprise reste un site accessible, des pages qui répondent clairement et des sources tierces qui la mentionnent."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le llms.txt influence-t-il l’indexation de son site par les LLM ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il ne l’influence pas directement. Les moteurs IA explorent les pages HTML avec leurs propres robots et s’appuient sur des index de recherche. Le llms.txt peut aider un agent ou un outil de documentation à trouver vos pages utiles plus vite, mais il ne remplace ni le robots.txt, ni le sitemap, ni le balisage Schema.org."
      }
    },
    {
      "@type": "Question",
      "name": "Comment choisir la meilleure stratégie pour son fichier llms.txt ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faites d’abord ce que les moteurs IA utilisent : robots.txt ouvert aux robots de recherche IA, pages qui répondent aux questions des clients, balisage Schema.org cohérent. Ensuite seulement, rédigez un llms.txt court, factuel, limité aux pages que vous voulez voir citées, et relisez-le à chaque changement d’offre ou de tarif."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un llms.txt sur WordPress ou Webflow ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les deux plateformes le permettent sans développement : une fonctionnalité gratuite de Yoast SEO sur WordPress, un champ dédié dans les réglages SEO de Webflow. Puisque cela prend quelques minutes, autant le faire, à condition de ne pas y voir une garantie de visibilité et de garder le fichier à jour."
      }
    }
  ]
};

const breadcrumbJsonLd = {
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
      name: "Blog",
      item: "https://www.pulseoai.fr/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "llms.txt : guide pratique pour votre site",
      item: "https://www.pulseoai.fr/blog/llms-txt-guide-pratique",
    },
  ],
};

export default function LlmsTxtGuidePratique() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {articleSchemaEnhancements?.howTo ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaEnhancements.howTo) }}
        />
      ) : null}

      <article className="ba bg-white">
        {/* Header */}
        <div className="bg-[#F8F9FA]">
          <div className="mx-auto max-w-3xl px-6 py-24 lg:py-28">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              <ArrowLeft className="size-4" />
              Retour au blog
            </Link>

            <h1 className="mt-6 text-[24px] font-bold leading-tight tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              <span className="ba-mark">llms.txt</span> : le guide pratique pour rendre votre site visible sur les IA
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy/50">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />31 mars 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />Mis à jour le 26 novembre 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />14 min de lecture
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="size-4" />Romain Duclos
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
          <div className="space-y-8 text-navy/80 leading-relaxed text-[17px]">
            {/* Introduction */}
            <p className="text-lg text-navy/90 font-medium leading-relaxed">
              Le fichier llms.txt est un fichier Markdown placé à la racine d’un site pour présenter son
              contenu aux modèles de langage et aux agents IA. Proposé en septembre 2024, il reste une
              convention expérimentale : Google indique ne pas l’utiliser et aucun grand moteur IA ne l’a
              adoptée officiellement. Ce guide explique ce qu’il contient, comment le créer sur WordPress,
              Webflow ou Shopify, et ce qu’il peut vraiment apporter à votre visibilité IA.
            </p>

            <QuickAnswer
              question="À quoi sert le fichier llms.txt ?"
              answer="Le fichier llms.txt est un fichier texte au format Markdown, placé à la racine d’un site (votresite.fr/llms.txt), qui résume l’activité et liste les pages clés pour les modèles de langage et les agents IA. C’est une proposition communautaire de septembre 2024, pas un standard officiel : Google indique ne pas l’utiliser, et les robots d’OpenAI ou d’Anthropic ne documentent que le robots.txt. Il se crée en moins d’une heure et reste un complément, jamais le levier principal d’une visibilité IA."
            />

            <div className="rounded-2xl border border-[#DDE7F4] bg-white px-5 py-4 text-[15px] leading-7 text-navy/68">
              <span className="font-semibold text-navy">À lire aussi :</span>{" "}
              <Link href="/blog/schema-org-guide-complet-geo" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                Schema.org pour le GEO
              </Link>
              {", "}
              <Link href="/blog/sources-citees-ia-site-ne-suffit-pas" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                les sources citées par les IA
              </Link>
              {", "}
              <Link href="/blog/etre-cite-par-chatgpt-devenir-source" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                comment être cité par ChatGPT
              </Link>
              {" et "}
              <Link href="/offre" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                notre accompagnement SEO / GEO
              </Link>
              .
            </div>

            {/* Section 1 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Qu&apos;est-ce que le fichier llms.txt ?
            </h2>

            <p>
              Le llms.txt est un fichier texte plac&eacute; &agrave; la racine de votre site web
              (par exemple : votresite.fr/llms.txt) qui fournit aux mod&egrave;les de langage (LLMs)
              un r&eacute;sum&eacute; structur&eacute; et lisible de votre entreprise, de vos services
              et de vos informations cl&eacute;s. Contrairement aux pages HTML qui m&eacute;langent contenu,
              navigation et &eacute;l&eacute;ments visuels, le llms.txt est con&ccedil;u pour &ecirc;tre
              directement interpr&eacute;t&eacute; par une IA.
            </p>

            <p>
              Pensez-y comme une carte de visite num&eacute;rique optimis&eacute;e pour les machines.
              Quand un LLM explore votre site, il peut lire des dizaines de pages pour comprendre
              ce que vous faites. Avec un fichier llms.txt, vous lui offrez un r&eacute;sum&eacute;
              imm&eacute;diat et pr&eacute;cis. C&apos;est un gain d&apos;efficacit&eacute; consid&eacute;rable
              qui augmente vos chances d&apos;&ecirc;tre correctement cit&eacute; dans les r&eacute;ponses IA.
            </p>

            <p>
              Le concept a été proposé par Jeremy Howard le 3 septembre 2024 sur le site <a href="https://llmstxt.org/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">llmstxt.org, qui publie aujourd’hui la version 2 de la spécification</a>. Il répond à un besoin concret : un agent IA qui lit une page HTML doit trier la navigation, les scripts et les menus avant d’atteindre l’information utile.
            </p>
            <p>
              Il faut pourtant garder une chose en tête dès le départ. Ce fichier est une convention communautaire, pas une norme imposée par les moteurs : <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Google écrit que la recherche Google ne l’utilise pas</a>, et aucun grand acteur de l’IA ne s’est engagé publiquement à le lire. Nous détaillons plus bas ce qu’il peut et ne peut pas faire.
            </p>
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Comment le llms.txt diffère-t-il du robots.txt pour les moteurs IA ?
            </h2>
            <p>
              Les deux fichiers vivent à la racine du site et portent une extension .txt, d’où la confusion. Leur rôle est pourtant opposé : le robots.txt donne des interdictions et des autorisations aux robots, le llms.txt propose une présentation et des liens recommandés.
            </p>
            <p>
              Cette différence compte, car les moteurs IA ne lisent officiellement que le premier. <a href="https://developers.openai.com/api/docs/bots" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">OpenAI explique que ses robots OAI-SearchBot et GPTBot se pilotent par des règles robots.txt indépendantes</a>, et <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Anthropic précise que ses robots respectent les directives standard du robots.txt</a>. Ni l’un ni l’autre ne mentionne le llms.txt.
            </p>
            <div className="ba-table overflow-x-auto rounded-[20px] border border-[#DEE6F3]">
              <table className="w-full border-collapse text-left text-[14px] leading-6 text-navy/78">
                <caption className="px-4 pt-3 text-left text-[13px] text-navy/60">Les quatre fichiers que l’on confond, et ce que chacun fait réellement.</caption>
                <thead>
                  <tr>
                    <th scope="col" className="border-b border-[#DEE6F3] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-navy">Fichier</th>
                    <th scope="col" className="border-b border-[#DEE6F3] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-navy">Rôle</th>
                    <th scope="col" className="border-b border-[#DEE6F3] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-navy">Format</th>
                    <th scope="col" className="border-b border-[#DEE6F3] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-navy">Qui le lit officiellement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">robots.txt</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Autoriser ou interdire l’exploration de chemins du site</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Directives User-agent / Allow / Disallow</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Google, Bing, OpenAI, Anthropic, Perplexity et la plupart des robots</td>
                  </tr>
                  <tr className="bg-[#F7F8FB]">
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">sitemap.xml</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Lister les URL à indexer avec leur date de mise à jour</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">XML</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Moteurs de recherche classiques, dont l’index que ChatGPT et Gemini réutilisent</td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">llms.txt</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Présenter le site et pointer vers les pages clés en langage naturel</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Markdown</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Aucun grand moteur IA ne l’a confirmé ; certains agents et outils de documentation</td>
                  </tr>
                  <tr className="bg-[#F7F8FB]">
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Schema.org (JSON-LD)</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Décrire l’entité, les produits, les FAQ dans un vocabulaire standard</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">JSON-LD dans le HTML</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Google, Bing et les moteurs IA qui s’appuient sur leurs index</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Conséquence pratique : si votre robots.txt bloque OAI-SearchBot ou Claude-SearchBot, aucun llms.txt ne vous fera apparaître dans ChatGPT ou Claude. Notre article sur la façon d’<Link href="/blog/etre-cite-par-chatgpt-devenir-source" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">être cité par ChatGPT</Link> détaille l’ordre des priorités.
            </p>

            {/* Section 2 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              La sp&eacute;cification et la syntaxe du llms.txt
            </h2>

            <p>
              Le fichier llms.txt suit une syntaxe en Markdown simplifi&eacute;e, con&ccedil;ue pour
              &ecirc;tre &agrave; la fois lisible par un humain et facilement interpr&eacute;table par un LLM.
              Voici les &eacute;l&eacute;ments cl&eacute;s de la sp&eacute;cification.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Structure de base
            </h3>

            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-navy">Titre (H1) :</strong> le nom de votre entreprise ou site,
                pr&eacute;c&eacute;d&eacute; d&apos;un #. C&apos;est la premi&egrave;re ligne du fichier.
              </li>
              <li>
                <strong className="text-navy">Description (blockquote) :</strong> un paragraphe court
                pr&eacute;c&eacute;d&eacute; de &gt; qui r&eacute;sume en une &agrave; trois phrases
                ce que fait votre entreprise, o&ugrave; elle se situe et ce qui la diff&eacute;rencie.
              </li>
              <li>
                <strong className="text-navy">Sections (H2) :</strong> des blocs th&eacute;matiques
                pr&eacute;c&eacute;d&eacute;s de ## qui regroupent vos informations par cat&eacute;gorie
                (services, localisation, expertise, contact).
              </li>
              <li>
                <strong className="text-navy">Liens :</strong> des liens Markdown classiques, texte entre crochets puis URL entre parenth&egrave;ses,
                pointant vers les pages cl&eacute;s de votre site.
              </li>
              <li>
                <strong className="text-navy">Listes &agrave; puces :</strong> des tirets (-) pour
                &eacute;num&eacute;rer vos services, faits cl&eacute;s ou informations structur&eacute;es.
              </li>
            </ul>

            <p className="rounded-[20px] border border-[#DDE7F4] bg-[#F8FBFF] px-4 py-4 text-[15px] leading-7 text-navy/72">
              Si vous voulez savoir si votre site a besoin d’un llms.txt, d’un meilleur balisage ou d’une structure plus claire,
              vous pouvez demander un{" "}
              <Link href="/contact" className="font-semibold text-cyan transition-colors hover:text-cyan-dark">
                audit SEO / GEO
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Que dit la spécification officielle (version 2) ?
            </h3>
            <p>
              La spécification n’impose presque rien. <a href="https://llmstxt.org/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Selon llmstxt.org, le titre H1 est la seule section obligatoire</a> ; la citation de résumé, les paragraphes libres et les sections H2 de liens sont facultatifs, et une section « Optional » regroupe par convention les liens qu’un agent peut sauter quand son contexte est limité.
            </p>
            <p>
              La version 2 ajoute trois précisions utiles. <a href="https://llmstxt.org/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Le fichier peut vivre à la racine ou dans un sous-dossier, par exemple /docs/llms.txt, et couvre alors les pages situées sous ce chemin</a>. Elle recommande aussi de proposer une version Markdown de chaque page importante, et de signaler le fichier par la relation de lien rel="describedby".
            </p>
            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>Une ligne H1 avec le nom du site ou du projet : obligatoire.</li>
              <li>Une citation (ligne commençant par &gt;) qui résume l’activité : recommandée.</li>
              <li>Des sections H2 contenant des listes de liens au format Markdown, chacun suivi d’une courte note.</li>
              <li>Une section « Optional » pour les liens secondaires.</li>
              <li>Pas de limite de taille dans la spécification ; Webflow, lui, plafonne le fichier à 100 Ko.</li>
            </ul>
            <h3 className="text-xl font-semibold text-navy pt-2">
              Exemple de syntaxe minimale
            </h3>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`# Nom de votre entreprise
> Description courte de votre activité, localisation et proposition de valeur.

## Services
- [Service 1](https://votresite.fr/service-1): Description du service.
- [Service 2](https://votresite.fr/service-2): Description du service.

## Informations clés
- Année de création : 2020
- Zone géographique : France entière
- Certifications : ISO 9001

## Contact
- Site : https://votresite.fr
- Email : contact@votresite.fr
- Téléphone : 01 23 45 67 89`}</code></pre>
            </div>

            {/* Section 3 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              llms.txt vs llms-full.txt : quand utiliser chacun ?
            </h2>

            <p>
              La sp&eacute;cification pr&eacute;voit deux fichiers compl&eacute;mentaires. Le
              llms.txt est le fichier principal : il contient un r&eacute;sum&eacute; concis de
              votre site, g&eacute;n&eacute;ralement entre 500 et 2 000 mots. C&apos;est le fichier
              que la majorit&eacute; des LLMs liront en priorit&eacute;, car leur fen&ecirc;tre de
              contexte est limit&eacute;e et ils privil&eacute;gient l&apos;information dense et
              pertinente.
            </p>

            <p>
              Le llms-full.txt est une version &eacute;tendue qui peut contenir le contenu
              int&eacute;gral de votre site, converti en Markdown propre. Ce fichier est utile
              pour les LLMs qui effectuent une analyse approfondie de votre activit&eacute; ou
              pour des cas d&apos;usage sp&eacute;cifiques comme la recherche augment&eacute;e
              (RAG). Il peut faire plusieurs dizaines de milliers de mots.
            </p>

            <p>
              <strong className="text-navy">Notre recommandation :</strong> commencez toujours par le
              llms.txt. C&apos;est le fichier le plus important et le plus largement
              support&eacute;. Ajoutez un llms-full.txt uniquement si vous avez un site riche en
              contenu (nombreux produits, documentation technique, catalogue) et que vous souhaitez
              donner aux IA acc&egrave;s &agrave; l&apos;ensemble de vos informations.
            </p>

            {/* Section 4 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Exemples complets de llms.txt par type d&apos;activit&eacute;
            </h2>

            <p>
              Voici trois exemples concrets adapt&eacute;s &agrave; diff&eacute;rents types
              d&apos;entreprises. Ces exemples sont directement r&eacute;utilisables et adaptables
              &agrave; votre situation.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Exemple 1 : h&ocirc;tel
            </h3>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`# Hôtel & Spa La Riviera
> Hôtel 4 étoiles situé sur la Promenade des Anglais à Nice. 48 chambres avec vue mer, spa de 300 m², restaurant gastronomique étoilé. Idéal pour séjours romantiques, voyages d'affaires et événements privés.

## Hébergement
- [Chambres Supérieures](https://lariviera-nice.fr/chambres/superieures): 24 chambres de 28 m², vue jardin ou ville, à partir de 180 €/nuit.
- [Suites Vue Mer](https://lariviera-nice.fr/chambres/suites): 12 suites de 45 m², balcon privé, vue Méditerranée, à partir de 320 €/nuit.
- [Suite Présidentielle](https://lariviera-nice.fr/chambres/presidentielle): 120 m², terrasse panoramique, jacuzzi privé, à partir de 650 €/nuit.

## Restauration
- [Restaurant L'Azur](https://lariviera-nice.fr/restaurant): Cuisine méditerranéenne étoilée Michelin. Chef Julien Moreau. Ouvert 7j/7, petit-déjeuner, déjeuner et dîner.
- [Bar Le Rooftop](https://lariviera-nice.fr/bar): Cocktails et tapas avec vue sur la Baie des Anges. Ouvert de 17h à minuit.

## Spa & Bien-être
- [Spa Marin](https://lariviera-nice.fr/spa): 300 m², piscine intérieure chauffée, hammam, sauna, 5 cabines de soins. Produits Cinq Mondes.

## Informations pratiques
- Adresse : 25 Promenade des Anglais, 06000 Nice
- Téléphone : 04 93 12 34 56
- Check-in : 15h / Check-out : 11h
- Parking privé : 25 €/jour
- Animaux acceptés (supplément 30 €/nuit)
- Wi-Fi gratuit dans tout l'établissement
- Langues parlées : français, anglais, italien

## Distinction & Avis
- Note Google : 4.7/5 (1 280 avis)
- TripAdvisor : 4.5/5 (890 avis)
- 1 étoile Michelin (restaurant L'Azur)
- Label Clef Verte depuis 2023`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Exemple 2 : restaurant
            </h3>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`# Bistrot Les Halles
> Restaurant bistronomique au cœur de Lyon (2e arrondissement). Cuisine de marché avec produits locaux et de saison. Déjeuner et dîner du mardi au samedi. Terrasse ombragée en été.

## Cuisine & Menus
- [Menu Déjeuner](https://bistrot-leshalles.fr/menu-dejeuner): Formule entrée + plat ou plat + dessert à 24 €. Plat du jour à 16 €.
- [Carte du Soir](https://bistrot-leshalles.fr/carte): Carte renouvelée chaque semaine. Entrées 12-18 €, plats 22-32 €, desserts 10-14 €.
- [Menu Dégustation](https://bistrot-leshalles.fr/menu-degustation): 5 services avec accord mets-vins, 65 €/personne.

## Informations pratiques
- Adresse : 8 Rue des Marronniers, 69002 Lyon
- Téléphone : 04 78 12 34 56
- Horaires : mardi-samedi, 12h-14h et 19h-22h
- Réservation recommandée le week-end
- Terrasse : 20 couverts (mai à septembre)
- Salle : 35 couverts
- Privatisation possible pour événements (jusqu'à 40 personnes)

## Le Chef
- Chef Amélie Rousseau, formée chez Georges Blanc et Paul Bocuse
- Philosophie : produits frais, circuits courts, zéro gaspillage

## Avis
- Note Google : 4.6/5 (620 avis)
- Recommandé par Le Fooding et Gault & Millau`}</code></pre>
            </div>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Exemple 3 : commerce local
            </h3>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`# Maison Dupont : Fromagerie Artisanale
> Fromagerie artisanale et crémerie à Annecy depuis 1987. Sélection de 150 fromages affinés en cave, produits laitiers fermiers et épicerie fine. Vente sur place et livraison en Haute-Savoie.

## Produits
- [Fromages affinés](https://maison-dupont.fr/fromages): 150 références dont Reblochon fermier, Beaufort d'alpage, Tomme de Savoie. Affinage en cave sur place.
- [Plateaux fromages](https://maison-dupont.fr/plateaux): Plateaux composés sur mesure pour 4 à 50 personnes. Commande 48h à l'avance.
- [Épicerie fine](https://maison-dupont.fr/epicerie): Miels, confitures, charcuterie savoyarde, vins de Savoie.

## Services
- Vente sur place et conseil personnalisé
- Livraison à domicile en Haute-Savoie (gratuite dès 50 €)
- Plateaux pour événements et entreprises
- Cours d'initiation à la dégustation (1er samedi du mois)

## Informations pratiques
- Adresse : 12 Rue Royale, 74000 Annecy
- Téléphone : 04 50 12 34 56
- Horaires : mardi-samedi 9h-19h, dimanche 9h-13h
- Fermé le lundi
- Parking Bonlieu à 100 m

## Engagements
- 85 % de produits issus de fermes situées à moins de 100 km
- Membre du réseau Fromagers de France
- Note Google : 4.8/5 (340 avis)`}</code></pre>
            </div>

            {/* Section 5 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              &Eacute;tape par &eacute;tape : cr&eacute;er et d&eacute;ployer votre llms.txt
            </h2>

            <p>
              Voici la m&eacute;thode concr&egrave;te pour mettre en place votre fichier llms.txt,
              du premier brouillon &agrave; la mise en production.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              &Eacute;tape 1 : inventorier vos informations cl&eacute;s
            </h3>
            <p>
              Avant d&apos;&eacute;crire quoi que ce soit, rassemblez toutes les informations que
              vous souhaitez rendre accessibles aux IA. Listez vos services, vos tarifs, votre
              localisation pr&eacute;cise, vos horaires, vos certifications, vos notes
              d&apos;avis et tout ce qui vous diff&eacute;rencie de vos concurrents. Plus vos
              informations sont factuelles et pr&eacute;cises, mieux les LLMs pourront vous
              citer dans leurs r&eacute;ponses.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              &Eacute;tape 2 : r&eacute;diger le fichier
            </h3>
            <p>
              Cr&eacute;ez un fichier texte nomm&eacute; llms.txt. Commencez par le titre (votre nom
              d&apos;entreprise) et la description (votre proposition de valeur en une &agrave; trois
              phrases). Puis organisez vos informations en sections claires avec des titres H2.
              Utilisez des listes &agrave; puces pour les &eacute;l&eacute;ments factuels.
              Privil&eacute;giez les phrases courtes, les chiffres pr&eacute;cis et les
              informations v&eacute;rifiables. &Eacute;vitez le jargon marketing et les
              superlatifs vides.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              &Eacute;tape 3 : placer le fichier &agrave; la racine de votre site
            </h3>
            <p>
              Le fichier doit &ecirc;tre accessible &agrave; l&apos;URL votresite.fr/llms.txt.
              Selon votre syst&egrave;me, le d&eacute;ploiement diff&egrave;re. Sur WordPress,
              vous pouvez placer le fichier dans le dossier racine de votre installation via FTP.
              Sur un site statique ou Next.js, placez-le dans le dossier public/. Sur Shopify,
              utilisez un fichier de type page ou une redirection. L&apos;important est que le
              fichier soit accessible directement par URL sans authentification.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              &Eacute;tape 4 : r&eacute;f&eacute;rencer le fichier
            </h3>
            <p>
              Le nom de fichier à la racine suffit à un agent qui le cherche, exactement comme pour le robots.txt. Pour aller plus loin, <a href="https://llmstxt.org/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">la spécification recommande la relation de lien rel="describedby" vers le llms.txt et rel="alternate" type="text/markdown" vers la version Markdown d’une page</a>, envoyées dans un en-tête HTTP Link :
            </p>
            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`Link: </llms.txt>; rel="describedby", </page.html.md>; rel="alternate"; type="text/markdown"`}</code></pre>
            </div>
            <p>
              Si vous ne pouvez pas modifier les en-têtes HTTP, une balise link avec le même attribut rel dans le head de vos pages transmet la même information. <a href="https://www.mintlify.com/docs/ai/llmstxt" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Mintlify, qui génère ces fichiers pour chaque documentation hébergée, sert aussi une copie à l’adresse /.well-known/llms.txt</a> pour les outils qui suivent cette convention.
            </p>
            <p>
              Une mention dans le robots.txt n’est pas prévue par la spécification et aucun robot ne la documente. Elle ne nuit pas, mais ne comptez pas dessus : vérifiez plutôt que le fichier répond en 200 et en texte brut, ce que nous détaillons dans la partie sur les outils.
            </p>

            {/* Section 6 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Que faut-il inclure dans votre llms.txt ?
            </h2>

            <p>
              Le contenu de votre fichier doit couvrir tous les aspects de votre activit&eacute;
              qu&apos;une IA pourrait avoir besoin de conna&icirc;tre pour vous recommander.
              Voici les cat&eacute;gories essentielles &agrave; inclure.
            </p>

            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-navy">Identit&eacute; et proposition de valeur :</strong> nom,
                type d&apos;activit&eacute;, description claire de ce que vous faites, ce qui vous
                diff&eacute;rencie de vos concurrents.
              </li>
              <li>
                <strong className="text-navy">Services ou produits :</strong> liste d&eacute;taill&eacute;e
                avec descriptions, tarifs ou fourchettes de prix, liens vers les pages correspondantes.
              </li>
              <li>
                <strong className="text-navy">Informations de contact :</strong> adresse physique,
                t&eacute;l&eacute;phone, email, horaires d&apos;ouverture. Les IA utilisent ces
                donn&eacute;es pour r&eacute;pondre aux questions pratiques des utilisateurs.
              </li>
              <li>
                <strong className="text-navy">Zone g&eacute;ographique :</strong> pr&eacute;cisez
                o&ugrave; vous op&eacute;rez. Pour un commerce local, indiquez la ville et le quartier.
                Pour un prestataire national, listez les r&eacute;gions couvertes.
              </li>
              <li>
                <strong className="text-navy">Expertise et certifications :</strong> labels, prix,
                ann&eacute;es d&apos;exp&eacute;rience, mentions dans la presse, partenariats.
                Ces &eacute;l&eacute;ments renforcent votre cr&eacute;dibilit&eacute; aux yeux des IA.
              </li>
              <li>
                <strong className="text-navy">Faits structur&eacute;s :</strong> notes d&apos;avis,
                nombre de clients, chiffres cl&eacute;s. Les LLMs privil&eacute;gient les donn&eacute;es
                factuelles et v&eacute;rifiables.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Quelles informations inclure dans son fichier llms.txt pour maximiser la visibilité IA ?
            </h3>
            <p>
              Gardez uniquement ce qu’un agent doit savoir pour vous décrire correctement. <a href="https://help.webflow.com/hc/en-us/articles/43240104183315-Upload-an-llms-txt-file-to-your-site" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Webflow conseille d’écrire le fichier comme une consigne à un stagiaire qui découvre l’entreprise, d’éviter le jargon et de ne jamais y lister d’URL internes ou sensibles</a>. Chaque lien doit pointer vers une page qui confirme l’information.
            </p>
            <p>
              Limitez-vous à quinze ou vingt liens vers vos pages de services, vos tarifs publics, vos études de cas et vos pages de contact. Un fichier de 400 à 900 mots se relit en cinq minutes, ce qui garantit qu’il sera réellement mis à jour.
            </p>
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Comment implémenter un fichier llms.txt sur WordPress, Webflow ou Shopify ?
            </h2>
            <p>
              Les principales plateformes ont ajouté une option native en 2025 et 2026. Vous n’avez donc plus besoin d’un accès FTP ni d’un développeur pour publier le fichier, seulement pour le rédiger correctement.
            </p>
            <h3 className="text-xl font-semibold text-navy pt-2">
              llms.txt sur WordPress
            </h3>
            <p>
              <a href="https://yoast.com/features/llms-txt/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Yoast SEO génère le fichier llms.txt en un clic, gratuitement, avec un mode automatique qui sélectionne les contenus clés et un mode manuel où vous choisissez vous-même</a>. Le fichier est régénéré sans intervention et prévisualisable avant publication. Si vous préférez la main, déposez votre propre llms.txt à la racine de l’installation.
            </p>
            <h3 className="text-xl font-semibold text-navy pt-2">
              llms.txt sur Webflow
            </h3>
            <p>
              <a href="https://help.webflow.com/hc/en-us/articles/43240104183315-Upload-an-llms-txt-file-to-your-site" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Dans Webflow, le fichier se téléverse depuis Site settings, puis SEO, puis LLMs.txt ; il doit être encodé en UTF-8 et peser moins de 100 Ko</a>. Il est servi sur le domaine personnalisé après publication, pas sur le domaine de staging, et Webflow ne génère pas les variantes .md des pages prévues par la spécification.
            </p>
            <h3 className="text-xl font-semibold text-navy pt-2">
              llms.txt sur Shopify
            </h3>
            <p>
              <a href="https://yoast.com/features/llms-txt/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Yoast SEO pour Shopify propose la même fonctionnalité llms.txt, pensée pour guider les IA vers les produits, les collections et les politiques de la boutique</a>. Sans application, Shopify ne permet pas de déposer un fichier à la racine : passez par une app ou par une redirection vers un fichier hébergé ailleurs.
            </p>
            <h3 className="text-xl font-semibold text-navy pt-2">
              Sites de documentation, Next.js et sites statiques
            </h3>
            <p>
              <a href="https://www.mintlify.com/docs/ai/llmstxt" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Mintlify héberge automatiquement un llms.txt et un llms-full.txt à la racine de chaque documentation, toujours à jour, avec possibilité de fournir sa propre version</a>. Sur un site Next.js ou statique, un fichier texte dans le dossier public/ suffit, comme <Link href="/llms.txt" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">celui de ce site</Link>.
            </p>
            {/* Section 7 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Bonnes pratiques pour maximiser votre visibilit&eacute; IA
            </h2>

            <p>
              Cr&eacute;er un fichier llms.txt est une premi&egrave;re &eacute;tape. Pour en tirer
              le maximum, suivez ces bonnes pratiques &eacute;prouv&eacute;es.
            </p>

            <p>
              <strong className="text-navy">Soyez factuel, pas promotionnel.</strong>{" "}
              Les LLMs n&apos;ont pas besoin de slogans. Ils ont besoin de faits. Au lieu
              d&apos;&eacute;crire &laquo; le meilleur h&ocirc;tel de Nice &raquo;, &eacute;crivez
              &laquo; h&ocirc;tel 4 &eacute;toiles, 48 chambres, Promenade des Anglais, note
              Google 4.7/5 &raquo;. La pr&eacute;cision factuelle est ce qui d&eacute;clenche
              les recommandations.
            </p>

            <p>
              <strong className="text-navy">Mettez &agrave; jour r&eacute;guli&egrave;rement.</strong>{" "}
              Un llms.txt obsol&egrave;te peut g&eacute;n&eacute;rer des recommandations
              incorrectes. Mettez &agrave; jour vos tarifs, horaires et services d&egrave;s qu&apos;ils
              changent. Planifiez une r&eacute;vision trimestrielle au minimum.
            </p>

            <p>
              <strong className="text-navy">Restez concis mais complet.</strong>{" "}
              Le llms.txt id&eacute;al fait entre 500 et 2 000 mots. Assez long pour couvrir
              l&apos;essentiel, assez court pour rester exploitable par les LLMs.
              Si vous avez beaucoup d&apos;informations &agrave; partager, utilisez le
              llms-full.txt pour le d&eacute;tail et gardez le llms.txt comme synth&egrave;se.
            </p>

            <p>
              <strong className="text-navy">Incluez des liens internes.</strong>{" "}
              Chaque service ou produit mentionn&eacute; dans votre llms.txt doit pointer vers
              la page correspondante de votre site. Cela permet aux LLMs de v&eacute;rifier
              et d&apos;approfondir les informations que vous fournissez.
            </p>

            <p>
              <strong className="text-navy">&Eacute;crivez en fran&ccedil;ais clair.</strong>{" "}
              Les LLMs comprennent parfaitement le fran&ccedil;ais. &Eacute;crivez votre
              llms.txt dans la langue de votre audience principale. Si votre client&egrave;le
              est internationale, vous pouvez cr&eacute;er des versions dans plusieurs langues
              (llms-en.txt, llms-de.txt) et les r&eacute;f&eacute;rencer dans votre page.
            </p>

            {/* Section 8 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              llms.txt et Schema.org : deux outils compl&eacute;mentaires
            </h2>

            <p>
              Une question fr&eacute;quente que nous recevons : &laquo; J&apos;ai d&eacute;j&agrave;
              du Schema.org sur mon site, est-ce que j&apos;ai besoin du llms.txt ? &raquo;. La
              r&eacute;ponse est oui, et voici pourquoi ces deux approches se compl&egrave;tent.
            </p>

            <p>
              Le balisage Schema.org est un format de donn&eacute;es structur&eacute;es int&eacute;gr&eacute;
              dans le code HTML de vos pages. Il permet aux moteurs de comprendre la nature de votre
              contenu (un h&ocirc;tel, un restaurant, un produit) avec des champs pr&eacute;d&eacute;finis.
              C&apos;est le langage technique que les machines utilisent pour indexer vos informations.
            </p>

            <p>
              Le llms.txt, lui, est un document en langage naturel structur&eacute;. Il permet
              aux LLMs de comprendre votre activit&eacute; dans son ensemble, avec des
              nuances et du contexte que le Schema.org ne peut pas capturer. Par exemple, votre
              positionnement, votre histoire, les &eacute;l&eacute;ments qui rendent votre offre
              unique. Le llms.txt parle aux IA comme un humain parlerait &agrave; un conseiller :
              avec clart&eacute;, pr&eacute;cision et contexte.
            </p>

            <p>
              <strong className="text-navy">La strat&eacute;gie optimale</strong> combine les deux.
              Le Schema.org couvre la couche technique (donn&eacute;es structur&eacute;es, rich
              snippets, extraction automatique). Le llms.txt couvre la couche conversationnelle
              (contexte, positionnement, informations compl&egrave;tes pour les recommandations IA).
              Ensemble, ils maximisent votre visibilit&eacute; sur les moteurs classiques et sur les
              moteurs IA.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Est-ce que llms.txt vaut le coup en complément du balisage Schema ?
            </h3>
            <p>
              Oui, mais dans cet ordre, et pour une raison simple : Google exploite les données structurées et <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">déclare ignorer les fichiers llms.txt</a>. Posez donc d’abord un <Link href="/blog/schema-org-organization-baliser-entreprise" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">balisage Organization complet</Link>, <Link href="/blog/tester-balisage-schema-org-validateur" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">testez-le avec les validateurs</Link>, puis consacrez une heure au llms.txt.
            </p>
            <p>
              Le llms.txt apporte ce que le JSON-LD ne sait pas dire : le positionnement, les cas d’usage, le ton. Il ne se substitue à aucun des deux autres fichiers, et il ne répare pas un balisage absent ou incohérent.
            </p>
            {/* Section 9 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Tester et valider votre llms.txt
            </h2>

            <p>
              Une fois votre fichier en ligne, v&eacute;rifiez qu&apos;il fonctionne
              correctement. Voici les &eacute;tapes de validation.
            </p>

            <p>
              <strong className="text-navy">V&eacute;rifiez l&apos;accessibilit&eacute;.</strong>{" "}
              Ouvrez votre navigateur et acc&eacute;dez &agrave; votresite.fr/llms.txt.
              Le fichier doit s&apos;afficher en texte brut, sans erreur 404 ni
              redirection. V&eacute;rifiez que le type MIME est bien text/plain ou
              text/markdown.
            </p>

            <p>
              <strong className="text-navy">Testez avec un LLM.</strong>{" "}
              Copiez le contenu de votre llms.txt et collez-le dans ChatGPT ou Claude avec la
              consigne suivante : &laquo; Voici le fichier llms.txt de mon entreprise. R&eacute;sume
              en trois phrases ce que tu comprends de mon activit&eacute;. &raquo; Si le r&eacute;sum&eacute;
              est fid&egrave;le &agrave; votre activit&eacute;, votre fichier est bien structur&eacute;.
              Si le LLM fait des erreurs ou des approximations, ajustez votre contenu.
            </p>

            <p>
              <strong className="text-navy">V&eacute;rifiez la d&eacute;couverte.</strong>{" "}
              Apr&egrave;s quelques semaines, testez des requ&ecirc;tes pertinentes sur ChatGPT,
              Gemini ou Perplexity. Par exemple, si vous &ecirc;tes un h&ocirc;tel &agrave; Nice,
              demandez &laquo; Quel h&ocirc;tel 4 &eacute;toiles recommandes-tu &agrave; Nice sur
              la Promenade des Anglais ? &raquo;. Observez si votre &eacute;tablissement
              appara&icirc;t et si les informations cit&eacute;es correspondent &agrave; celles
              de votre llms.txt.
            </p>

            <p>
              <strong className="text-navy">Surveillez les logs serveur.</strong>{" "}
              Les robots IA laissent des traces dans vos logs d’accès. Cherchez les requêtes vers /llms.txt, mais aussi vers vos pages HTML, car c’est là que l’activité se trouve. <a href="https://developers.openai.com/api/docs/bots" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Côté OpenAI, les user-agents sont OAI-SearchBot pour la recherche, GPTBot pour l’entraînement et ChatGPT-User pour les visites déclenchées par un utilisateur</a> ; <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">côté Anthropic, ClaudeBot, Claude-User et Claude-SearchBot jouent les mêmes rôles</a>.
            </p>
            <p>
              Attention à une erreur fréquente : Google-Extended n’est pas un robot que vous verrez passer. <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Google explique qu’il ne dispose pas de chaîne user-agent distincte, qu’il sert uniquement de jeton dans le robots.txt et qu’il n’a aucune incidence sur l’inclusion dans la recherche Google</a>. Pour relier ces passages à des citations réelles, suivez la méthode de notre guide pour <Link href="/blog/suivre-visibilite-chatgpt-ia" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">suivre sa visibilité dans ChatGPT, Perplexity et Gemini</Link>.
            </p>
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Quels outils permettent de créer et valider un fichier llms.txt ?
            </h2>
            <p>
              Aucun outil ne garantit qu’une IA lira le fichier, mais plusieurs vérifient qu’il existe, qu’il respecte la structure attendue et qu’il reste à jour. Voici ceux que nous utilisons.
            </p>
            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>Générateurs intégrés aux CMS : <a href="https://yoast.com/features/llms-txt/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">la fonctionnalité llms.txt de Yoast SEO</a> sur WordPress et Shopify, le champ dédié de Webflow, la génération automatique de Mintlify ou GitBook pour une documentation.</li>
              <li>Lighthouse dans Chrome : <a href="https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">l’audit llms.txt de la catégorie « navigation agentique » signale une erreur serveur à la récupération du fichier et classe un 404 en « non applicable », la fourniture du fichier étant facultative</a>. C’est un contrôle d’accessibilité, pas un gage d’efficacité.</li>
              <li>Annuaires de fichiers llms.txt : <a href="https://llmstxt.org/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">la spécification renvoie vers llmstxt.site, directory.llmstxt.cloud et llmstxthub.com</a>, utiles pour comparer votre fichier à ceux de vos concurrents ou de votre secteur.</li>
              <li>Une requête curl -I sur votresite.fr/llms.txt : le code doit être 200, le type de contenu text/plain ou text/markdown, sans redirection vers une page HTML.</li>
              <li>Un test de compréhension : collez le fichier dans ChatGPT ou Claude et demandez un résumé en trois phrases ; les approximations révèlent les formulations à corriger.</li>
            </ul>
            <p>
              Un <Link href="/blog/audit-seo-geo-visibilite-ia" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">audit SEO / GEO</Link> complet vérifie ces points avec le reste : robots.txt, balisage, pages de réponse, sources tierces. Le llms.txt n’en est qu’une ligne.
            </p>

            {/* Section 10 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              L&apos;avenir du llms.txt et de l&apos;&eacute;cosyst&egrave;me LLM
            </h2>

            <p>
              Le llms.txt est encore un standard jeune, mais son adoption s&apos;acc&eacute;l&egrave;re.
              Plusieurs tendances se dessinent pour les mois &agrave; venir.
            </p>

            <p>
              <strong className="text-navy">Adoption croissante par les moteurs IA.</strong>{" "}
              Elle reste à démontrer du côté des moteurs. En revanche, l’outillage avance : <a href="https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Google a ajouté un audit llms.txt à Lighthouse, dans une catégorie dédiée à la navigation agentique, mis à jour le 5 mai 2026</a>, et Yoast, Webflow ou Mintlify proposent la génération ou le dépôt du fichier. Aucun site n’est « traité en priorité » parce qu’il en possède un.
            </p>
            <p>
              <strong className="text-navy">&Eacute;volution vers un standard officiel.</strong>{" "}
              Le chemin est encore long. <a href="https://llmstxt.org/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">La version 2 de la spécification précise la couverture par sous-chemin, les versions Markdown des pages et les relations de lien</a>, sans schéma de validation ni champs par secteur. Les signaux lisibles par machine que les grands acteurs annoncent soutenir vont ailleurs : <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Google prévoit de prendre en charge le signal de préférence d’entraînement AIPREF début 2027</a>, un mécanisme de robots.txt, pas de llms.txt.
            </p>

            <p>
              <strong className="text-navy">Int&eacute;gration dans les CMS.</strong>{" "}
              Des plugins WordPress, Shopify et autres CMS commencent &agrave; int&eacute;grer
              la g&eacute;n&eacute;ration automatique du llms.txt. Cette d&eacute;mocratisation
              va acc&eacute;l&eacute;rer l&apos;adoption et rendre l&apos;avantage concurrentiel
              des premiers adopteurs plus difficile &agrave; maintenir. C&apos;est pourquoi
              il est important d&apos;agir d&egrave;s maintenant.
            </p>

            <p>
              <strong className="text-navy">Compl&eacute;mentarit&eacute; avec les agents IA.</strong>{" "}
              Les agents IA autonomes (qui r&eacute;servent un h&ocirc;tel, commandent un repas ou
              comparent des prestataires pour le compte d&apos;un utilisateur) vont se multiplier.
              Le llms.txt sera leur premi&egrave;re source d&apos;information pour comprendre
              votre offre et la comparer &agrave; celle de vos concurrents.
            </p>

            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Le fichier llms.txt aide-t-il vraiment à être cité par les IA ?
            </h2>
            <p>
              C’est la question que posent la plupart des lecteurs de ce guide, et la réponse honnête tient en une phrase : aucun élément public ne montre qu’un llms.txt augmente les citations dans ChatGPT, Gemini, Claude ou Perplexity. Voici ce que disent les acteurs eux-mêmes et les tests indépendants.
            </p>
            <div className="ba-table overflow-x-auto rounded-[20px] border border-[#DEE6F3]">
              <table className="w-full border-collapse text-left text-[14px] leading-6 text-navy/78">
                <caption className="px-4 pt-3 text-left text-[13px] text-navy/60">Ce que les éditeurs disent officiellement du fichier, au 26 novembre 2026.</caption>
                <thead>
                  <tr>
                    <th scope="col" className="border-b border-[#DEE6F3] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-navy">Acteur</th>
                    <th scope="col" className="border-b border-[#DEE6F3] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-navy">Position sur le llms.txt</th>
                    <th scope="col" className="border-b border-[#DEE6F3] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-navy">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Google (recherche, AI Overviews, AI Mode)</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">La recherche Google ne l’utilise pas ; créer ce fichier n’a aucune incidence sur la visibilité ou le classement</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top"><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Guide Google sur l’IA et la recherche</a></td>
                  </tr>
                  <tr className="bg-[#F7F8FB]">
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Google (Lighthouse)</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Audit de présence dans la catégorie navigation agentique ; un fichier absent est « non applicable »</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top"><a href="https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt?hl=fr" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Documentation Lighthouse</a></td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">OpenAI (ChatGPT)</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Documente OAI-SearchBot, GPTBot et ChatGPT-User, pilotés par robots.txt ; le llms.txt n’apparaît pas</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top"><a href="https://developers.openai.com/api/docs/bots" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Documentation des robots OpenAI</a></td>
                  </tr>
                  <tr className="bg-[#F7F8FB]">
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Anthropic (Claude)</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Documente ClaudeBot, Claude-User et Claude-SearchBot et le respect du robots.txt ; le llms.txt n’apparaît pas</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top"><a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Page d’aide Anthropic</a></td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Webflow</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top">Convention expérimentale, impact non prouvé, à traiter comme un signal parmi d’autres</td>
                    <td className="border-b border-[#EEF2F8] px-4 py-3 align-top"><a href="https://help.webflow.com/hc/en-us/articles/43240104183315-Upload-an-llms-txt-file-to-your-site" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">Centre d’aide Webflow</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Les mesures de terrain vont dans le même sens. <a href="https://www.seomix.fr/llms-txt-fichier-geo/" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark" target="_blank" rel="noopener noreferrer">L’agence SeoMix a analysé 60 jours de logs sur six sites, soit 33 092 passages de robots IA et 2 249 URL explorées, sans un seul appel au fichier llms.txt</a>. Ces robots lisent les pages HTML, pas le sommaire que vous leur préparez.
            </p>
            <p>
              Faut-il alors s’en passer ? Pas forcément. Le fichier coûte une heure, il sert aux agents de développement et aux outils de documentation qui le lisent réellement, et l’exercice vous oblige à formuler votre offre en phrases factuelles. Ce travail de clarté, reporté sur vos pages, est ce qui fait réellement <Link href="/blog/sources-citees-ia-site-ne-suffit-pas" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">citer un site par les IA</Link>.
            </p>
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Scénario illustratif : une PME de services met en place son llms.txt en six semaines
            </h2>
            <p>
              Le scénario suivant est illustratif : il décrit une démarche type, pas un résultat garanti. Un cabinet de conseil en paie de douze personnes, présent dans deux villes, veut apparaître quand un dirigeant demande à ChatGPT un prestataire de paie externalisée.
            </p>
            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>Semaine 1 : vérification du robots.txt, qui bloquait tous les robots inconnus ; ouverture à OAI-SearchBot, Claude-SearchBot et PerplexityBot, puis contrôle du balisage Organization.</li>
              <li>Semaine 2 : rédaction d’un llms.txt de 700 mots, avec douze liens vers les pages de services, les tarifs publics et deux études de cas ; dépôt dans le dossier public du site.</li>
              <li>Semaines 3 et 4 : réécriture des trois pages de services en réponses directes, en reprenant les formulations factuelles du llms.txt ; ajout d’une FAQ balisée sur chacune.</li>
              <li>Semaines 5 et 6 : lecture des logs. OAI-SearchBot et ClaudeBot ont visité 41 pages HTML ; le llms.txt n’a reçu aucune requête de ces robots, seulement deux passages d’outils tiers.</li>
              <li>Bilan à six semaines : le cabinet est cité sur 4 des 20 prompts suivis chaque semaine, contre 1 au départ. Les citations renvoient vers les pages de services réécrites, jamais vers le fichier.</li>
            </ul>
            <p>
              La leçon du scénario : le llms.txt a servi de brouillon pour clarifier l’offre, mais ce sont le robots.txt ouvert, le balisage et les pages réécrites qui ont produit les citations. Gardez cet ordre si votre temps est compté.
            </p>
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Ce qu’il faut retenir
            </h2>
            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>Le llms.txt est un fichier Markdown à la racine du site qui présente l’activité et liste les pages clés pour les LLM et les agents IA.</li>
              <li>C’est une convention communautaire de septembre 2024 ; Google déclare l’ignorer et OpenAI comme Anthropic ne documentent que le robots.txt.</li>
              <li>Les tests de logs publiés ne montrent aucune lecture du fichier par les robots IA : il ne fait pas citer un site à lui seul.</li>
              <li>Il se met en place en quelques minutes sur WordPress avec Yoast, dans les réglages SEO de Webflow, via une app sur Shopify, ou dans le dossier public d’un site Next.js.</li>
              <li>Faites-le après le robots.txt, le balisage Schema.org et des pages qui répondent directement, jamais à leur place.</li>
              <li>Relisez-le à chaque changement d’offre ou de tarif, et vérifiez qu’il répond en 200 en texte brut.</li>
            </ul>
            {/* Conclusion */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Conclusion : un fichier simple, un impact majeur
            </h2>

            <p>
              Le llms.txt est l’une des actions les plus simples que vous puissiez entreprendre pour votre visibilité IA, mais pas la plus rentable. Un fichier texte à la racine du site, qui résume ce que vous faites, où vous êtes et ce qui vous distingue, ne remplace ni un robots.txt ouvert, ni des pages qui répondent.
            </p>

            <p>
              La mise en place prend quelques heures. Les b&eacute;n&eacute;fices se
              mesurent en semaines. Et contrairement &agrave; de nombreuses optimisations
              techniques, le llms.txt ne n&eacute;cessite pas de comp&eacute;tences en
              d&eacute;veloppement : toute personne capable de r&eacute;diger un texte clair
              peut le cr&eacute;er.
            </p>

            <p>
              Les entreprises qui structurent leur information pour les LLM prennent de l’avance, à condition de structurer d’abord ce que les moteurs lisent vraiment. Créez votre llms.txt cette semaine, puis consacrez le reste de votre temps à vos pages, à votre balisage et aux sources qui parlent de vous. Notre <Link href="/offre" className="font-medium text-cyan underline decoration-cyan/40 underline-offset-4 transition-colors hover:text-cyan-dark">offre SEO / GEO</Link> couvre ces trois chantiers.
            </p>
            <section className="ba-faq mt-10 sm:mt-12">
              <h2 className="text-[22px] font-semibold tracking-[-0.035em] text-navy sm:text-[24px]">
                Questions fréquentes sur le fichier llms.txt
              </h2>
              <div className="mt-5 space-y-3">
                <details className="group rounded-[22px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
                    <span>C’est quoi le fichier llms.txt ?</span>
                    <span className="text-cyan transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[78ch] text-[15px] leading-7 text-navy/68">C’est un fichier texte au format Markdown, placé à la racine d’un site, qui présente l’activité en quelques lignes et liste les pages importantes avec une courte description. Il s’adresse aux modèles de langage et aux agents IA, pas aux visiteurs. Il reste une convention proposée par la communauté, sans statut officiel chez Google, OpenAI ou Anthropic.</p>
                </details>
                <details className="group rounded-[22px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
                    <span>Quelle différence entre llms.txt et llms-full.txt ?</span>
                    <span className="text-cyan transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[78ch] text-[15px] leading-7 text-navy/68">Le llms.txt est le sommaire : titre, résumé, sections de liens vers les pages clés. Le llms-full.txt rassemble le contenu complet du site converti en Markdown, pour les outils qui veulent tout lire d’un coup. Commencez par le premier ; le second n’a de sens que pour une documentation ou un catalogue volumineux.</p>
                </details>
                <details className="group rounded-[22px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
                    <span>Le fichier llms.txt sert-il vraiment à être cité par les moteurs IA ?</span>
                    <span className="text-cyan transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[78ch] text-[15px] leading-7 text-navy/68">Rien ne le prouve aujourd’hui. Google indique l’ignorer, les robots d’OpenAI et d’Anthropic ne documentent que le robots.txt, et des analyses de logs ne relèvent aucune consultation du fichier par ces robots. Ce qui fait citer une entreprise reste un site accessible, des pages qui répondent clairement et des sources tierces qui la mentionnent.</p>
                </details>
                <details className="group rounded-[22px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
                    <span>Comment le llms.txt influence-t-il l’indexation de son site par les LLM ?</span>
                    <span className="text-cyan transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[78ch] text-[15px] leading-7 text-navy/68">Il ne l’influence pas directement. Les moteurs IA explorent les pages HTML avec leurs propres robots et s’appuient sur des index de recherche. Le llms.txt peut aider un agent ou un outil de documentation à trouver vos pages utiles plus vite, mais il ne remplace ni le robots.txt, ni le sitemap, ni le balisage Schema.org.</p>
                </details>
                <details className="group rounded-[22px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
                    <span>Comment choisir la meilleure stratégie pour son fichier llms.txt ?</span>
                    <span className="text-cyan transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[78ch] text-[15px] leading-7 text-navy/68">Faites d’abord ce que les moteurs IA utilisent : robots.txt ouvert aux robots de recherche IA, pages qui répondent aux questions des clients, balisage Schema.org cohérent. Ensuite seulement, rédigez un llms.txt court, factuel, limité aux pages que vous voulez voir citées, et relisez-le à chaque changement d’offre ou de tarif.</p>
                </details>
                <details className="group rounded-[22px] border border-[#DEE6F3] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-navy">
                    <span>Faut-il un llms.txt sur WordPress ou Webflow ?</span>
                    <span className="text-cyan transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[78ch] text-[15px] leading-7 text-navy/68">Les deux plateformes le permettent sans développement : une fonctionnalité gratuite de Yoast SEO sur WordPress, un champ dédié dans les réglages SEO de Webflow. Puisque cela prend quelques minutes, autant le faire, à condition de ne pas y voir une garantie de visibilité et de garder le fichier à jour.</p>
                </details>
              </div>
            </section>
          </div>

          <RelatedPosts
            currentSlug="llms-txt-guide-pratique"
            explicitSlugs={[
              "schema-org-guide-complet-geo",
              "sources-citees-ia-site-ne-suffit-pas",
              "audit-seo-geo-visibilite-ia",
            ]}
          />

          {/* CTA : formulaire d'audit */}
          <div className="ba-cta-form">
            <Image
              sizes="(max-width: 767px) 200px, 420px"
              src="/illustrations/VHl73R9s.png"
              alt="Mascotte lion qui invite à demander un audit"
              width={1536}
              height={1536}
              loading="lazy"
              className="ba-lion"
            />
            <h2 className="text-[20px] sm:text-2xl font-bold">
              Besoin d&apos;aide pour cr&eacute;er votre llms.txt ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Nos experts GEO r&eacute;digent et d&eacute;ploient votre fichier llms.txt, optimisent
              votre balisage Schema.org et mettent en place une strat&eacute;gie compl&egrave;te
              pour rendre votre entreprise visible sur ChatGPT, Gemini et Claude.
            </p>
            <div className="ba-form-wrap">
              <ContactForm />
            </div>

            <p className="ba-form-links">
              <Link href="/contact">Demander un accompagnement</Link>
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              <ArrowLeft className="size-4" />
              Retour au blog
            </Link>
            <Link
              href="/blog/schema-org-guide-complet-geo"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              Article suivant
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
