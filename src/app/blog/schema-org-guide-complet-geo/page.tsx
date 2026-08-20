import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { getArticleSchemaEnhancements } from "@/lib/article-metadata";
import { QuickAnswer } from "@/components/quick-answer";
import { ContactForm } from "@/components/contact-form";
import { ARTICLE_PAPER_CSS } from "@/components/article-paper";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Schema.org : guide complet pour le GEO",
  description:
    "Guide complet Schema.org pour le GEO. Balisage structuré Hotel, Restaurant, LocalBusiness pour apparaître sur ChatGPT et les IA.",
  openGraph: {
    title: "Schema.org : guide complet pour le GEO",
    description:
      "Guide complet Schema.org pour le GEO. Balisage structuré Hotel, Restaurant, LocalBusiness pour apparaître sur ChatGPT et les IA.",
    url: "https://www.pulseoai.fr/blog/schema-org-guide-complet-geo",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Schema.org : guide complet pour le GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schema.org : guide complet pour le GEO",
    description:
      "Guide complet Schema.org pour le GEO. Balisage structuré Hotel, Restaurant, LocalBusiness pour apparaître sur ChatGPT et les IA.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/blog/schema-org-guide-complet-geo" },
};

const articleSchemaEnhancements = getArticleSchemaEnhancements("schema-org-guide-complet-geo");

const blogPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Schema.org pour le GEO : le guide complet du balisage structur\u00e9 en 2026",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  inLanguage: "fr-FR",
  url: "https://www.pulseoai.fr/blog/schema-org-guide-complet-geo",
  articleSection: "Technique",
  keywords: [
    "Schema.org",
    "données structurées",
    "référencement IA",
    "SEO / GEO",
    "Google AI Overviews",
    "ChatGPT",
    "llms.txt",
    "sources citées par les IA",
  ],
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
    "Guide Schema.org pour le GEO. Comprendre les données structurées qui aident Google, ChatGPT, Gemini et les moteurs IA à mieux interpréter votre entreprise.",
  ...(articleSchemaEnhancements?.about ? { about: articleSchemaEnhancements.about } : {}),
  ...(articleSchemaEnhancements?.mentions
    ? { mentions: articleSchemaEnhancements.mentions }
    : {}),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.pulseoai.fr/blog/schema-org-guide-complet-geo",
  },
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
      name: "Schema.org : guide complet pour le GEO",
      item: "https://www.pulseoai.fr/blog/schema-org-guide-complet-geo",
    },
  ],
};

export default function SchemaOrgGuideCompletGeo() {
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

      <style>{ARTICLE_PAPER_CSS}</style>
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
              <span className="ba-mark">Schema.org</span> pour le GEO : le guide complet du balisage
              structuré en 2026
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy/50">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />28 avril 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />12 min de lecture
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
              Les moteurs de recherche IA comme ChatGPT, Gemini et Claude ne
              lisent pas vos pages web comme un humain. Ils cherchent des
              données structurées pour comprendre qui vous
              êtes, ce que vous proposez et pourquoi ils devraient vous
              recommander. Le balisage Schema.org est le langage qui permet
              cette compréhension. Sans lui, votre établissement
              reste invisible pour les IA, même si votre site est
              magnifique.
            </p>

            <QuickAnswer
              question="À quoi sert Schema.org pour le GEO ?"
              answer="Schema.org aide Google et les moteurs IA à comprendre votre entreprise sans ambiguïté. Ce balisage clarifie votre activité, vos services, votre localisation et vos preuves de confiance pour améliorer votre visibilité SEO / GEO."
            />

            <p>
              Ce guide couvre tout ce que vous devez savoir sur Schema.org
              dans le contexte du GEO (Generative Engine Optimization) : les
              types de balisage essentiels, les exemples de code concrets
              pour chaque secteur, les outils de test, les erreurs courantes
              et les bonnes pratiques pour maximiser votre visibilité
              sur les moteurs IA.
            </p>

            <div className="rounded-2xl border border-[#DDE7F4] bg-white px-5 py-4 text-[15px] leading-7 text-navy/68">
              <span className="font-semibold text-navy">À lire aussi :</span>{" "}
              <Link href="/blog/llms-txt-guide-pratique" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                le guide llms.txt
              </Link>
              {", "}
              <Link href="/blog/sources-citees-ia-site-ne-suffit-pas" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                les sources citées par les IA
              </Link>
              {" et "}
              <Link href="/offre" className="font-medium text-cyan transition-colors hover:text-cyan-dark">
                notre offre SEO / GEO
              </Link>
              .
            </div>

            {/* Section 1 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Qu'est-ce que Schema.org et pourquoi c'est
              indispensable pour le GEO
            </h2>

            <p>
              Schema.org est un vocabulaire de données
              structurées créé conjointement par Google,
              Microsoft, Yahoo et Yandex. Il permet de décrire le
              contenu d'une page web dans un format que les machines
              comprennent nativement. Au lieu de deviner que votre page parle
              d'un hôtel 4 étoiles à Lyon, le
              balisage Schema.org le dit explicitement.
            </p>

            <p>
              En SEO classique, Schema.org améliore les rich snippets
              dans Google. En GEO, son rôle est beaucoup plus
              fondamental. Les LLMs comme GPT-4, Gemini et Claude utilisent
              les données structurées comme source
              d'information fiable lorsqu'ils construisent leurs
              réponses. Un établissement avec un balisage
              complet a beaucoup plus de chances d'être
              recommandé qu'un concurrent sans balisage.
            </p>

            <ul className="space-y-2 pl-5 text-[15px] leading-7 text-navy/68">
              <li className="list-disc marker:text-cyan">Schema.org aide Google à enrichir votre compréhension sémantique.</li>
              <li className="list-disc marker:text-cyan">Les moteurs IA utilisent ces signaux pour citer votre marque plus précisément.</li>
              <li className="list-disc marker:text-cyan">Le balisage complète les contenus optimisés IA et les sources externes.</li>
            </ul>

            <p>
              Le format privilégié est le JSON-LD (JavaScript
              Object Notation for Linked Data). Il s'insère dans
              une balise <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">&lt;script type=&quot;application/ld+json&quot;&gt;</code>{" "}
              directement dans le HTML de la page. Ce format est
              recommandé par Google et facilement lisible par les
              moteurs IA.
            </p>

            {/* Section 2 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les types Schema.org essentiels pour le GEO
            </h2>

            <p>
              Selon votre secteur d'activité, vous utiliserez
              différents types de balisage. Voici les principaux,
              avec des exemples complets prêts à être
              intégrés.
            </p>

            <p className="rounded-[20px] border border-[#DDE7F4] bg-[#F8FBFF] px-4 py-4 text-[15px] leading-7 text-navy/72">
              Si vous voulez savoir quels balisages manquent déjà sur votre site,
              vous pouvez demander un{" "}
              <Link href="/contact" className="font-semibold text-cyan transition-colors hover:text-cyan-dark">
                audit SEO / GEO
              </Link>
              .
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Hotel : le balisage pour les hôtels
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Hotel</code>{" "}
              est le plus spécifique pour les établissements
              hôteliers. Il hérite de{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">LodgingBusiness</code>{" "}
              et permet de décrire les étoiles, les
              équipements, la fourchette de prix et les avis.
              Lorsqu'un utilisateur demande à ChatGPT
              « Quel hôtel 4 étoiles avec spa à
              Bordeaux ? », ce balisage permet à l'IA
              d'identifier votre établissement avec certitude.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "H\u00f4tel Le Jardin de Bordeaux",
  "description": "H\u00f4tel 4 \u00e9toiles avec spa et restaurant gastronomique au c\u0153ur de Bordeaux. 45 chambres avec vue sur le jardin int\u00e9rieur.",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Rue Sainte-Catherine",
    "addressLocality": "Bordeaux",
    "postalCode": "33000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.8378,
    "longitude": -0.5792
  },
  "telephone": "+33 5 56 00 00 00",
  "url": "https://www.hotel-jardin-bordeaux.fr",
  "image": "https://www.hotel-jardin-bordeaux.fr/facade.jpg",
  "priceRange": "150\u20ac - 350\u20ac",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Spa", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Piscine int\u00e9rieure", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Restaurant gastronomique", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Parking priv\u00e9", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuit", "value": true }
  ],
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "numberOfRooms": 45,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "324",
    "bestRating": "5"
  }
}`}</code></pre>
            </div>

            <ul className="space-y-2 pl-5 text-[15px] leading-7 text-navy/68">
              <li className="list-disc marker:text-cyan">Hotel, Restaurant et LocalBusiness sont les types les plus fréquents pour une visibilité locale et sectorielle.</li>
              <li className="list-disc marker:text-cyan">FAQPage, BreadcrumbList et BlogPosting structurent vos contenus éditoriaux.</li>
              <li className="list-disc marker:text-cyan">Un balisage utile doit rester exact, maintenu et cohérent avec le contenu visible.</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Restaurant : le balisage pour la restauration
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Restaurant</code>{" "}
              permet de décrire votre cuisine, vos horaires, votre
              carte et vos avis. Les IA utilisent ces données pour
              répondre aux requêtes du type « Meilleur
              restaurant italien à Marseille » ou « Où
              manger sans gluten à Paris ». Un balisage complet
              inclut le type de cuisine, les options alimentaires et les
              moyens de réservation.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "La Table Proven\u00e7ale",
  "description": "Restaurant de cuisine proven\u00e7ale \u00e0 Aix-en-Provence. Produits locaux et de saison, terrasse ombrag\u00e9e avec vue sur le cours Mirabeau.",
  "servesCuisine": ["Proven\u00e7ale", "M\u00e9diterran\u00e9enne", "Fran\u00e7aise"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8 Cours Mirabeau",
    "addressLocality": "Aix-en-Provence",
    "postalCode": "13100",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.5263,
    "longitude": 5.4474
  },
  "telephone": "+33 4 42 00 00 00",
  "url": "https://www.table-provencale.fr",
  "image": "https://www.table-provencale.fr/terrasse.jpg",
  "priceRange": "25\u20ac - 65\u20ac",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "12:00",
      "closes": "14:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "19:00",
      "closes": "22:30"
    }
  ],
  "acceptsReservations": "True",
  "menu": "https://www.table-provencale.fr/carte",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "187",
    "bestRating": "5"
  }
}`}</code></pre>
            </div>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              LocalBusiness : le balisage universel pour les commerces
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">LocalBusiness</code>{" "}
              convient à tout commerce local : boulangerie, salon de
              coiffure, garage, boutique. Il sert également de base
              pour les types plus spécifiques. Si aucun sous-type
              spécifique ne correspond à votre activité,
              utilisez <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">LocalBusiness</code>{" "}
              avec une description détaillée.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Boulangerie Durand",
  "description": "Boulangerie artisanale \u00e0 Toulouse. Pain au levain, viennoiseries maison et p\u00e2tisseries depuis 1987.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "24 Rue Alsace-Lorraine",
    "addressLocality": "Toulouse",
    "postalCode": "31000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6047,
    "longitude": 1.4442
  },
  "telephone": "+33 5 61 00 00 00",
  "url": "https://www.boulangerie-durand.fr",
  "image": "https://www.boulangerie-durand.fr/facade.jpg",
  "priceRange": "\u20ac",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "06:30",
      "closes": "19:30"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "512",
    "bestRating": "5"
  }
}`}</code></pre>
            </div>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              ProfessionalService : pour les professions libérales et
              les agences
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">ProfessionalService</code>{" "}
              est adapté aux cabinets d'avocats, cabinets
              comptables, agences marketing, consultants et toute
              activité de service professionnel. Il permet de
              décrire vos domaines d'expertise et votre zone
              d'intervention, deux informations que les IA utilisent
              pour les recommandations géolocalisées.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Cabinet Martin & Associ\u00e9s",
  "description": "Cabinet d'expertise comptable \u00e0 Lyon sp\u00e9cialis\u00e9 dans l'accompagnement des PME, start-ups et professions lib\u00e9rales.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "15 Place Bellecour",
    "addressLocality": "Lyon",
    "postalCode": "69002",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.7578,
    "longitude": 4.8320
  },
  "telephone": "+33 4 72 00 00 00",
  "url": "https://www.cabinet-martin.fr",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 45.7578,
      "longitude": 4.8320
    },
    "geoRadius": "50000"
  },
  "knowsAbout": [
    "Expertise comptable",
    "Audit financier",
    "Conseil fiscal",
    "Cr\u00e9ation d'entreprise"
  ]
}`}</code></pre>
            </div>

            {/* Section 3 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Schema.org pour le contenu : FAQPage, HowTo et Article
            </h2>

            <p>
              Au-delà des fiches établissements, Schema.org
              permet également de baliser votre contenu éditorial.
              Ces balisages sont particulièrement puissants pour le
              GEO car ils fournissent des réponses structurées
              que les IA peuvent directement intégrer dans leurs
              réponses.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              FAQPage : vos questions/réponses structurées
            </h3>

            <p>
              Le balisage <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">FAQPage</code>{" "}
              est l'un des plus efficaces pour le GEO. Lorsqu'un
              utilisateur pose une question à une IA, celle-ci
              recherche des réponses structurées. Une FAQ
              balisée en Schema.org fournit exactement ce format.
              Chaque question/réponse doit être concise,
              factuelle et directement utile.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels sont les horaires du spa ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le spa est ouvert tous les jours de 9h \u00e0 21h. L'acc\u00e8s est inclus pour tous les clients de l'h\u00f4tel."
      }
    },
    {
      "@type": "Question",
      "name": "L'h\u00f4tel dispose-t-il d'un parking ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, un parking priv\u00e9 souterrain de 30 places est disponible au tarif de 18\u20ac par nuit. La r\u00e9servation est recommand\u00e9e."
      }
    },
    {
      "@type": "Question",
      "name": "Le petit-d\u00e9jeuner est-il inclus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le petit-d\u00e9jeuner buffet est propos\u00e9 en suppl\u00e9ment \u00e0 22\u20ac par personne. Il est servi de 7h \u00e0 10h30 en semaine et jusqu'\u00e0 11h le week-end."
      }
    }
  ]
}`}</code></pre>
            </div>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              HowTo : structurer vos guides et tutoriels
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">HowTo</code>{" "}
              est idéal pour les guides étape par étape.
              Les IA apprécient ce format car il leur permet de
              fournir des réponses organisées et actionables.
              Si votre site propose des tutoriels ou des processus (par
              exemple « Comment réserver une table » ou
              « Comment accéder à l'hôtel depuis
              la gare »), le balisage HowTo renforce
              considérablement votre visibilité.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Comment impl\u00e9menter le balisage Schema.org sur votre site",
  "description": "Guide en 4 \u00e9tapes pour ajouter le balisage JSON-LD Schema.org \u00e0 votre site web.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identifier le type Schema.org adapt\u00e9",
      "text": "Consultez schema.org/docs/full.html et identifiez le type qui correspond le mieux \u00e0 votre activit\u00e9 : Hotel, Restaurant, LocalBusiness, ProfessionalService, etc."
    },
    {
      "@type": "HowToStep",
      "name": "R\u00e9diger le code JSON-LD",
      "text": "Cr\u00e9ez un objet JSON contenant toutes les propri\u00e9t\u00e9s pertinentes : nom, adresse, description, horaires, avis, services."
    },
    {
      "@type": "HowToStep",
      "name": "Int\u00e9grer le balisage dans votre page",
      "text": "Ajoutez le code JSON-LD dans une balise script type application/ld+json dans le head ou le body de votre page HTML."
    },
    {
      "@type": "HowToStep",
      "name": "Valider avec les outils de test",
      "text": "Utilisez le Google Rich Results Test et le Schema Markup Validator pour v\u00e9rifier que votre balisage est correct et complet."
    }
  ]
}`}</code></pre>
            </div>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Article et BlogPosting : baliser votre contenu
              éditorial
            </h3>

            <p>
              Chaque article de blog ou page de contenu devrait inclure un
              balisage <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Article</code>{" "}
              ou <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">BlogPosting</code>.
              Ce balisage identifie l'auteur, la date de publication,
              l'éditeur et le sujet. Les IA utilisent ces
              informations pour évaluer la fiabilité et la
              fraîcheur du contenu. Un article avec un auteur
              identifié et une date récente sera
              privilégié par rapport à du contenu
              anonyme ou daté.
            </p>

            {/* Section 4 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              BreadcrumbList : améliorer la navigation pour les IA
            </h2>

            <p>
              Le balisage <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">BreadcrumbList</code>{" "}
              décrit la hiérarchie de navigation de votre site.
              Il aide les moteurs IA à comprendre la structure de
              votre site et le contexte de chaque page. Un fil d'Ariane
              balisé indique, par exemple, que la page
              « Chambre Supérieure » se trouve sous
              « Nos Chambres », qui se trouve sous la page
              d'accueil de l'hôtel.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.votre-hotel.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Nos Chambres",
      "item": "https://www.votre-hotel.fr/chambres"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Chambre Sup\u00e9rieure",
      "item": "https://www.votre-hotel.fr/chambres/superieure"
    }
  ]
}`}</code></pre>
            </div>

            {/* Section 5 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Comment tester votre balisage Schema.org
            </h2>

            <p>
              Un balisage mal formaté ou incomplet est pire que pas de
              balisage du tout. Il peut envoyer des signaux contradictoires
              aux IA et réduire votre visibilité. Voici les
              outils essentiels pour valider votre implémentation.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Google Rich Results Test
            </h3>

            <p>
              Accessible sur{" "}
              <strong className="text-navy">search.google.com/test/rich-results</strong>,
              cet outil vérifie que votre balisage est valide et
              éligible aux résultats enrichis Google. Il
              signale les erreurs et les avertissements, et affiche un
              aperçu du rendu. Même si votre objectif est le
              GEO, un balisage valide pour Google sera également bien
              interprété par les LLMs.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Schema Markup Validator
            </h3>

            <p>
              Disponible sur{" "}
              <strong className="text-navy">validator.schema.org</strong>, cet
              outil valide votre balisage directement contre la
              spécification Schema.org. Il est plus strict que le test
              Google et identifie les propriétés manquantes ou
              mal utilisées. Utilisez-le en complément du
              Google Rich Results Test pour une validation complète.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Test manuel avec les IA
            </h3>

            <p>
              Une fois votre balisage en place, testez directement en posant
              des questions aux IA. Demandez à ChatGPT ou Gemini de
              recommander un établissement correspondant à
              votre profil dans votre zone géographique. Si vous
              n'apparaissez pas après quelques semaines, revoyez
              votre balisage et complétez les propriétés
              manquantes.
            </p>

            {/* Section 6 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les erreurs courantes à éviter
            </h2>

            <p>
              Après avoir audité des centaines de sites, nous
              avons identifié les erreurs les plus fréquentes
              dans l'implémentation du balisage Schema.org.
            </p>

            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-navy">Balisage incomplet.</strong>{" "}
                Indiquer uniquement le nom et l'adresse ne suffit pas.
                Les IA ont besoin d'informations riches : description
                détaillée, services, horaires, fourchette de
                prix, avis agrégés. Plus votre balisage est
                complet, plus vous avez de chances d'être
                recommandé.
              </li>
              <li>
                <strong className="text-navy">Informations incohérentes.</strong>{" "}
                Si votre balisage indique une adresse différente de
                celle affichée sur la page, ou un nom
                différent de votre fiche Google Business, les IA
                perdent confiance. Assurez-vous que toutes vos
                données sont parfaitement alignées.
              </li>
              <li>
                <strong className="text-navy">Utiliser le mauvais type.</strong>{" "}
                Un restaurant balisé comme{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">LocalBusiness</code>{" "}
                au lieu de{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Restaurant</code>{" "}
                perd les propriétés spécifiques comme{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">servesCuisine</code>{" "}
                ou{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">menu</code>.
                Utilisez toujours le type le plus spécifique
                disponible.
              </li>
              <li>
                <strong className="text-navy">Oublier les coordonnées géographiques.</strong>{" "}
                Les propriétés{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">latitude</code> et{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">longitude</code>{" "}
                sont essentielles pour les requêtes
                géolocalisées. Sans elles, les IA ne peuvent
                pas associer votre établissement à une zone
                géographique précise.
              </li>
              <li>
                <strong className="text-navy">Ne pas mettre à jour le balisage.</strong>{" "}
                Des horaires obsolètes, un ancien numéro de
                téléphone ou une description datée
                envoient un signal négatif. Mettez à jour
                votre balisage à chaque modification de vos services.
              </li>
              <li>
                <strong className="text-navy">Dupliquer le balisage sur plusieurs pages.</strong>{" "}
                Chaque page doit avoir son propre balisage contextuel. Ne
                copiez pas le même bloc JSON-LD sur toutes les pages
                de votre site. La page d'accueil peut porter le balisage
                principal de l'établissement, tandis que les pages
                internes portent des balisages spécifiques (chambres,
                restaurant, spa).
              </li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Bonnes pratiques Schema.org pour maximiser l'impact GEO
            </h2>

            <p>
              Au-delà de la simple conformité technique, voici
              les stratégies qui font la différence en
              termes de visibilité IA.
            </p>

            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-navy">Combinez plusieurs types de balisage.</strong>{" "}
                Un hôtel peut intégrer un balisage Hotel sur
                la page d'accueil, un balisage Restaurant pour sa page
                restauration, un balisage FAQPage pour sa FAQ et un
                balisage BreadcrumbList sur chaque page. Cette approche
                multi-balisage crée un maillage de données
                riche que les IA exploitent efficacement.
              </li>
              <li>
                <strong className="text-navy">Renseignez l'aggregateRating.</strong>{" "}
                Les avis agrégés sont un signal fort pour les
                IA. Si vous avez des avis sur Google ou TripAdvisor,
                intégrez votre note moyenne et le nombre d'avis
                dans votre balisage. Attention : les données doivent
                être exactes et vérifiables.
              </li>
              <li>
                <strong className="text-navy">Soignez la propriété description.</strong>{" "}
                La description dans votre balisage est directement
                utilisée par les IA. Rédigez-la comme une
                réponse factuelle à la question « Que
                propose cet établissement ? ». Évitez
                le jargon marketing et privilégiez les faits
                concrets.
              </li>
              <li>
                <strong className="text-navy">Ajoutez le balisage sameAs.</strong>{" "}
                La propriété{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">sameAs</code>{" "}
                liste vos profils sur les plateformes tierces (Google
                Business, TripAdvisor, Instagram, Facebook). Elle
                permet aux IA de recouper vos informations et de renforcer
                votre autorité.
              </li>
              <li>
                <strong className="text-navy">Utilisez des images avec URL absolues.</strong>{" "}
                Toutes les URLs d'images dans votre balisage doivent
                être absolues (commençant par https://). Les
                URLs relatives ne sont pas toujours correctement
                interprétées par les crawlers.
              </li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Implémenter Schema.org selon votre technologie
            </h2>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Dans Next.js (React)
            </h3>

            <p>
              Dans un projet Next.js, la méthode la plus propre
              consiste à définir votre objet JSON-LD comme une
              constante puis à l'injecter via une balise{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">script</code>{" "}
              avec <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">dangerouslySetInnerHTML</code>.
              Cette approche fonctionne avec le Server Side Rendering et
              garantit que le balisage est présent dès le
              premier rendu HTML.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`// app/page.tsx (Next.js App Router)
const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Mon H\u00f4tel",
  "description": "Description compl\u00e8te...",
  // ... toutes les propri\u00e9t\u00e9s
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelJsonLd),
        }}
      />
      {/* Le contenu de votre page */}
    </>
  );
}`}</code></pre>
            </div>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Dans WordPress
            </h3>

            <p>
              Pour WordPress, trois options s'offrent à vous.
              La plus simple est d'utiliser une extension comme Yoast
              SEO ou Rank Math, qui génèrent automatiquement
              certains balisages. Cependant, pour un balisage complet et
              optimisé GEO, nous recommandons d'ajouter
              manuellement le JSON-LD via le fichier{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">functions.php</code>{" "}
              de votre thème ou via un plugin custom.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`// functions.php (WordPress)
function add_schema_markup() {
  if ( is_front_page() ) {
    ?>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "<?php echo get_bloginfo('name'); ?>",
      "description": "<?php echo get_bloginfo('description'); ?>",
      "url": "<?php echo home_url(); ?>"
    }
    </script>
    <?php
  }
}
add_action('wp_head', 'add_schema_markup');`}</code></pre>
            </div>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              En HTML statique
            </h3>

            <p>
              Pour un site HTML statique, insérez simplement le bloc
              JSON-LD dans la balise{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">&lt;head&gt;</code>{" "}
              de chaque page concernée. C'est la méthode
              la plus directe et elle fonctionne avec n'importe quel
              hébergeur.
            </p>

            <div className="bg-navy/5 rounded-lg p-4 sm:p-6 my-6 overflow-x-auto">
              <pre className="text-sm text-navy/80 whitespace-pre-wrap"><code>{`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Mon H\u00f4tel</title>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Mon H\u00f4tel",
    "description": "H\u00f4tel 4 \u00e9toiles au c\u0153ur de Paris...",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    }
  }
  </script>
</head>
<body>
  {/* Contenu de la page */}
</body>
</html>`}</code></pre>
            </div>

            {/* Conclusion */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Conclusion : le balisage structuré est la fondation du
              GEO
            </h2>

            <p>
              Le balisage Schema.org n'est pas un détail
              technique. C'est la fondation sur laquelle repose toute
              votre stratégie GEO. Sans données
              structurées, les moteurs IA doivent deviner qui vous
              êtes et ce que vous proposez. Avec un balisage complet
              et bien implémenté, vous leur fournissez une
              fiche d'identité claire et fiable qui maximise
              vos chances d'être recommandé.
            </p>

            <p>
              L'effort est ponctuel : une fois le balisage en place,
              il suffit de le maintenir à jour lors des
              changements de services ou d'horaires. Le retour sur
              investissement, en revanche, est durable. Les
              établissements qui investissent aujourd'hui dans
              un balisage structuré complet construisent un avantage
              concurrentiel qui se renforcera au fil des mois, à
              mesure que les moteurs IA gagnent en importance.
            </p>

            <p>
              Commencez par le balisage principal de votre
              établissement (Hotel, Restaurant ou LocalBusiness),
              puis étendez progressivement avec FAQPage,
              BreadcrumbList et le balisage de votre contenu
              éditorial. Testez systématiquement avec les
              outils de validation. Et surtout, pensez chaque
              propriété comme une réponse à
              une question que pourrait poser un utilisateur à une
              IA.
            </p>
          </div>

          <RelatedPosts
            currentSlug="schema-org-guide-complet-geo"
            explicitSlugs={[
              "llms-txt-guide-pratique",
              "sources-citees-ia-site-ne-suffit-pas",
              "audit-seo-geo-visibilite-ia",
            ]}
          />

          {/* CTA : formulaire d'audit */}
          <div className="ba-cta-form">
            <Image
              src="/illustrations/VHl73R9s.png"
              alt="Mascotte lion qui invite à demander un audit"
              width={1536}
              height={1536}
              loading="lazy"
              className="ba-lion"
            />
            <h2 className="text-[20px] sm:text-2xl font-bold">
              Besoin d'aide pour votre balisage Schema.org ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Nous auditons votre site, identifions les balisages manquants
              et implémentons un Schema.org complet optimisé
              pour le GEO. Résultats mesurables en quelques semaines.
            </p>
            <div className="ba-form-wrap">
              <ContactForm />
            </div>

            <p className="ba-form-links">
              <Link href="/contact">Demander un audit Schema.org</Link>
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
              href="/blog/geo-2026-pourquoi-votre-entreprise-ne-peut-plus-ignorer-les-moteurs-ia"
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
