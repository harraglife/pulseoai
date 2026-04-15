import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Schema.org : guide complet pour le GEO",
  description:
    "Guide complet Schema.org pour le GEO. Balisage structur\u00e9 Hotel, Restaurant, LocalBusiness pour appara\u00eetre sur ChatGPT et les IA.",
  openGraph: {
    title: "Schema.org : guide complet pour le GEO",
    description:
      "Guide complet Schema.org pour le GEO. Balisage structur\u00e9 Hotel, Restaurant, LocalBusiness pour appara\u00eetre sur ChatGPT et les IA.",
    url: "https://www.pulseoai.fr/blog/schema-org-guide-complet-geo",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Schema.org : guide complet pour le GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schema.org : guide complet pour le GEO",
    description:
      "Guide complet Schema.org pour le GEO. Balisage structur\u00e9 Hotel, Restaurant, LocalBusiness pour appara\u00eetre sur ChatGPT et les IA.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/blog/schema-org-guide-complet-geo" },
};

const blogPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Schema.org pour le GEO : le guide complet du balisage structur\u00e9 en 2026",
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
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

      <article className="bg-white">
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
              Schema.org pour le GEO : le guide complet du balisage
              structur&eacute; en 2026
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy/50">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />12 avril 2026
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
              donn&eacute;es structur&eacute;es pour comprendre qui vous
              &ecirc;tes, ce que vous proposez et pourquoi ils devraient vous
              recommander. Le balisage Schema.org est le langage qui permet
              cette compr&eacute;hension. Sans lui, votre &eacute;tablissement
              reste invisible pour les IA, m&ecirc;me si votre site est
              magnifique.
            </p>

            <p>
              Ce guide couvre tout ce que vous devez savoir sur Schema.org
              dans le contexte du GEO (Generative Engine Optimization) : les
              types de balisage essentiels, les exemples de code concrets
              pour chaque secteur, les outils de test, les erreurs courantes
              et les bonnes pratiques pour maximiser votre visibilit&eacute;
              sur les moteurs IA.
            </p>

            {/* Section 1 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Qu&apos;est-ce que Schema.org et pourquoi c&apos;est
              indispensable pour le GEO
            </h2>

            <p>
              Schema.org est un vocabulaire de donn&eacute;es
              structur&eacute;es cr&eacute;&eacute; conjointement par Google,
              Microsoft, Yahoo et Yandex. Il permet de d&eacute;crire le
              contenu d&apos;une page web dans un format que les machines
              comprennent nativement. Au lieu de deviner que votre page parle
              d&apos;un h&ocirc;tel 4 &eacute;toiles &agrave; Lyon, le
              balisage Schema.org le dit explicitement.
            </p>

            <p>
              En SEO classique, Schema.org am&eacute;liore les rich snippets
              dans Google. En GEO, son r&ocirc;le est beaucoup plus
              fondamental. Les LLMs comme GPT-4, Gemini et Claude utilisent
              les donn&eacute;es structur&eacute;es comme source
              d&apos;information fiable lorsqu&apos;ils construisent leurs
              r&eacute;ponses. Un &eacute;tablissement avec un balisage
              complet a beaucoup plus de chances d&apos;&ecirc;tre
              recommand&eacute; qu&apos;un concurrent sans balisage.
            </p>

            <p>
              Le format privil&eacute;gi&eacute; est le JSON-LD (JavaScript
              Object Notation for Linked Data). Il s&apos;ins&egrave;re dans
              une balise <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">&lt;script type=&quot;application/ld+json&quot;&gt;</code>{" "}
              directement dans le HTML de la page. Ce format est
              recommand&eacute; par Google et facilement lisible par les
              moteurs IA.
            </p>

            {/* Section 2 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les types Schema.org essentiels pour le GEO
            </h2>

            <p>
              Selon votre secteur d&apos;activit&eacute;, vous utiliserez
              diff&eacute;rents types de balisage. Voici les principaux,
              avec des exemples complets pr&ecirc;ts &agrave; &ecirc;tre
              int&eacute;gr&eacute;s.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Hotel : le balisage pour les h&ocirc;tels
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Hotel</code>{" "}
              est le plus sp&eacute;cifique pour les &eacute;tablissements
              h&ocirc;teliers. Il h&eacute;rite de{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">LodgingBusiness</code>{" "}
              et permet de d&eacute;crire les &eacute;toiles, les
              &eacute;quipements, la fourchette de prix et les avis.
              Lorsqu&apos;un utilisateur demande &agrave; ChatGPT
              &laquo; Quel h&ocirc;tel 4 &eacute;toiles avec spa &agrave;
              Bordeaux ? &raquo;, ce balisage permet &agrave; l&apos;IA
              d&apos;identifier votre &eacute;tablissement avec certitude.
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

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Restaurant : le balisage pour la restauration
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Restaurant</code>{" "}
              permet de d&eacute;crire votre cuisine, vos horaires, votre
              carte et vos avis. Les IA utilisent ces donn&eacute;es pour
              r&eacute;pondre aux requ&ecirc;tes du type &laquo; Meilleur
              restaurant italien &agrave; Marseille &raquo; ou &laquo; O&ugrave;
              manger sans gluten &agrave; Paris &raquo;. Un balisage complet
              inclut le type de cuisine, les options alimentaires et les
              moyens de r&eacute;servation.
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
              convient &agrave; tout commerce local : boulangerie, salon de
              coiffure, garage, boutique. Il sert &eacute;galement de base
              pour les types plus sp&eacute;cifiques. Si aucun sous-type
              sp&eacute;cifique ne correspond &agrave; votre activit&eacute;,
              utilisez <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">LocalBusiness</code>{" "}
              avec une description d&eacute;taill&eacute;e.
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
              ProfessionalService : pour les professions lib&eacute;rales et
              les agences
            </h3>

            <p>
              Le type <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">ProfessionalService</code>{" "}
              est adapt&eacute; aux cabinets d&apos;avocats, cabinets
              comptables, agences marketing, consultants et toute
              activit&eacute; de service professionnel. Il permet de
              d&eacute;crire vos domaines d&apos;expertise et votre zone
              d&apos;intervention, deux informations que les IA utilisent
              pour les recommandations g&eacute;olocalis&eacute;es.
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
              Au-del&agrave; des fiches &eacute;tablissements, Schema.org
              permet &eacute;galement de baliser votre contenu &eacute;ditorial.
              Ces balisages sont particuli&egrave;rement puissants pour le
              GEO car ils fournissent des r&eacute;ponses structur&eacute;es
              que les IA peuvent directement int&eacute;grer dans leurs
              r&eacute;ponses.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              FAQPage : vos questions/r&eacute;ponses structur&eacute;es
            </h3>

            <p>
              Le balisage <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">FAQPage</code>{" "}
              est l&apos;un des plus efficaces pour le GEO. Lorsqu&apos;un
              utilisateur pose une question &agrave; une IA, celle-ci
              recherche des r&eacute;ponses structur&eacute;es. Une FAQ
              balis&eacute;e en Schema.org fournit exactement ce format.
              Chaque question/r&eacute;ponse doit &ecirc;tre concise,
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
              est id&eacute;al pour les guides &eacute;tape par &eacute;tape.
              Les IA appr&eacute;cient ce format car il leur permet de
              fournir des r&eacute;ponses organis&eacute;es et actionables.
              Si votre site propose des tutoriels ou des processus (par
              exemple &laquo; Comment r&eacute;server une table &raquo; ou
              &laquo; Comment acc&eacute;der &agrave; l&apos;h&ocirc;tel depuis
              la gare &raquo;), le balisage HowTo renforce
              consid&eacute;rablement votre visibilit&eacute;.
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
              &eacute;ditorial
            </h3>

            <p>
              Chaque article de blog ou page de contenu devrait inclure un
              balisage <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Article</code>{" "}
              ou <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">BlogPosting</code>.
              Ce balisage identifie l&apos;auteur, la date de publication,
              l&apos;&eacute;diteur et le sujet. Les IA utilisent ces
              informations pour &eacute;valuer la fiabilit&eacute; et la
              fra&icirc;cheur du contenu. Un article avec un auteur
              identifi&eacute; et une date r&eacute;cente sera
              privil&eacute;gi&eacute; par rapport &agrave; du contenu
              anonyme ou dat&eacute;.
            </p>

            {/* Section 4 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              BreadcrumbList : am&eacute;liorer la navigation pour les IA
            </h2>

            <p>
              Le balisage <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">BreadcrumbList</code>{" "}
              d&eacute;crit la hi&eacute;rarchie de navigation de votre site.
              Il aide les moteurs IA &agrave; comprendre la structure de
              votre site et le contexte de chaque page. Un fil d&apos;Ariane
              balis&eacute; indique, par exemple, que la page
              &laquo; Chambre Sup&eacute;rieure &raquo; se trouve sous
              &laquo; Nos Chambres &raquo;, qui se trouve sous la page
              d&apos;accueil de l&apos;h&ocirc;tel.
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
              Un balisage mal format&eacute; ou incomplet est pire que pas de
              balisage du tout. Il peut envoyer des signaux contradictoires
              aux IA et r&eacute;duire votre visibilit&eacute;. Voici les
              outils essentiels pour valider votre impl&eacute;mentation.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Google Rich Results Test
            </h3>

            <p>
              Accessible sur{" "}
              <strong className="text-navy">search.google.com/test/rich-results</strong>,
              cet outil v&eacute;rifie que votre balisage est valide et
              &eacute;ligible aux r&eacute;sultats enrichis Google. Il
              signale les erreurs et les avertissements, et affiche un
              aper&ccedil;u du rendu. M&ecirc;me si votre objectif est le
              GEO, un balisage valide pour Google sera &eacute;galement bien
              interpr&eacute;t&eacute; par les LLMs.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Schema Markup Validator
            </h3>

            <p>
              Disponible sur{" "}
              <strong className="text-navy">validator.schema.org</strong>, cet
              outil valide votre balisage directement contre la
              sp&eacute;cification Schema.org. Il est plus strict que le test
              Google et identifie les propri&eacute;t&eacute;s manquantes ou
              mal utilis&eacute;es. Utilisez-le en compl&eacute;ment du
              Google Rich Results Test pour une validation compl&egrave;te.
            </p>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Test manuel avec les IA
            </h3>

            <p>
              Une fois votre balisage en place, testez directement en posant
              des questions aux IA. Demandez &agrave; ChatGPT ou Gemini de
              recommander un &eacute;tablissement correspondant &agrave;
              votre profil dans votre zone g&eacute;ographique. Si vous
              n&apos;apparaissez pas apr&egrave;s quelques semaines, revoyez
              votre balisage et compl&eacute;tez les propri&eacute;t&eacute;s
              manquantes.
            </p>

            {/* Section 6 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les erreurs courantes &agrave; &eacute;viter
            </h2>

            <p>
              Apr&egrave;s avoir audit&eacute; des centaines de sites, nous
              avons identifi&eacute; les erreurs les plus fr&eacute;quentes
              dans l&apos;impl&eacute;mentation du balisage Schema.org.
            </p>

            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-navy">Balisage incomplet.</strong>{" "}
                Indiquer uniquement le nom et l&apos;adresse ne suffit pas.
                Les IA ont besoin d&apos;informations riches : description
                d&eacute;taill&eacute;e, services, horaires, fourchette de
                prix, avis agr&eacute;g&eacute;s. Plus votre balisage est
                complet, plus vous avez de chances d&apos;&ecirc;tre
                recommand&eacute;.
              </li>
              <li>
                <strong className="text-navy">Informations incoh&eacute;rentes.</strong>{" "}
                Si votre balisage indique une adresse diff&eacute;rente de
                celle affich&eacute;e sur la page, ou un nom
                diff&eacute;rent de votre fiche Google Business, les IA
                perdent confiance. Assurez-vous que toutes vos
                donn&eacute;es sont parfaitement align&eacute;es.
              </li>
              <li>
                <strong className="text-navy">Utiliser le mauvais type.</strong>{" "}
                Un restaurant balis&eacute; comme{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">LocalBusiness</code>{" "}
                au lieu de{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">Restaurant</code>{" "}
                perd les propri&eacute;t&eacute;s sp&eacute;cifiques comme{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">servesCuisine</code>{" "}
                ou{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">menu</code>.
                Utilisez toujours le type le plus sp&eacute;cifique
                disponible.
              </li>
              <li>
                <strong className="text-navy">Oublier les coordonn&eacute;es g&eacute;ographiques.</strong>{" "}
                Les propri&eacute;t&eacute;s{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">latitude</code> et{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">longitude</code>{" "}
                sont essentielles pour les requ&ecirc;tes
                g&eacute;olocalis&eacute;es. Sans elles, les IA ne peuvent
                pas associer votre &eacute;tablissement &agrave; une zone
                g&eacute;ographique pr&eacute;cise.
              </li>
              <li>
                <strong className="text-navy">Ne pas mettre &agrave; jour le balisage.</strong>{" "}
                Des horaires obsol&egrave;tes, un ancien num&eacute;ro de
                t&eacute;l&eacute;phone ou une description dat&eacute;e
                envoient un signal n&eacute;gatif. Mettez &agrave; jour
                votre balisage &agrave; chaque modification de vos services.
              </li>
              <li>
                <strong className="text-navy">Dupliquer le balisage sur plusieurs pages.</strong>{" "}
                Chaque page doit avoir son propre balisage contextuel. Ne
                copiez pas le m&ecirc;me bloc JSON-LD sur toutes les pages
                de votre site. La page d&apos;accueil peut porter le balisage
                principal de l&apos;&eacute;tablissement, tandis que les pages
                internes portent des balisages sp&eacute;cifiques (chambres,
                restaurant, spa).
              </li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Bonnes pratiques Schema.org pour maximiser l&apos;impact GEO
            </h2>

            <p>
              Au-del&agrave; de la simple conformit&eacute; technique, voici
              les strat&eacute;gies qui font la diff&eacute;rence en
              termes de visibilit&eacute; IA.
            </p>

            <ul className="list-disc pl-6 text-navy/70 leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-navy">Combinez plusieurs types de balisage.</strong>{" "}
                Un h&ocirc;tel peut int&eacute;grer un balisage Hotel sur
                la page d&apos;accueil, un balisage Restaurant pour sa page
                restauration, un balisage FAQPage pour sa FAQ et un
                balisage BreadcrumbList sur chaque page. Cette approche
                multi-balisage cr&eacute;e un maillage de donn&eacute;es
                riche que les IA exploitent efficacement.
              </li>
              <li>
                <strong className="text-navy">Renseignez l&apos;aggregateRating.</strong>{" "}
                Les avis agr&eacute;g&eacute;s sont un signal fort pour les
                IA. Si vous avez des avis sur Google ou TripAdvisor,
                int&eacute;grez votre note moyenne et le nombre d&apos;avis
                dans votre balisage. Attention : les donn&eacute;es doivent
                &ecirc;tre exactes et v&eacute;rifiables.
              </li>
              <li>
                <strong className="text-navy">Soignez la propri&eacute;t&eacute; description.</strong>{" "}
                La description dans votre balisage est directement
                utilis&eacute;e par les IA. R&eacute;digez-la comme une
                r&eacute;ponse factuelle &agrave; la question &laquo; Que
                propose cet &eacute;tablissement ? &raquo;. &Eacute;vitez
                le jargon marketing et privil&eacute;giez les faits
                concrets.
              </li>
              <li>
                <strong className="text-navy">Ajoutez le balisage sameAs.</strong>{" "}
                La propri&eacute;t&eacute;{" "}
                <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">sameAs</code>{" "}
                liste vos profils sur les plateformes tierces (Google
                Business, TripAdvisor, Instagram, Facebook). Elle
                permet aux IA de recouper vos informations et de renforcer
                votre autorit&eacute;.
              </li>
              <li>
                <strong className="text-navy">Utilisez des images avec URL absolues.</strong>{" "}
                Toutes les URLs d&apos;images dans votre balisage doivent
                &ecirc;tre absolues (commen&ccedil;ant par https://). Les
                URLs relatives ne sont pas toujours correctement
                interpr&eacute;t&eacute;es par les crawlers.
              </li>
            </ul>

            {/* Section 8 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Impl&eacute;menter Schema.org selon votre technologie
            </h2>

            <h3 className="text-lg font-semibold text-navy mt-8 mb-3">
              Dans Next.js (React)
            </h3>

            <p>
              Dans un projet Next.js, la m&eacute;thode la plus propre
              consiste &agrave; d&eacute;finir votre objet JSON-LD comme une
              constante puis &agrave; l&apos;injecter via une balise{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">script</code>{" "}
              avec <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">dangerouslySetInnerHTML</code>.
              Cette approche fonctionne avec le Server Side Rendering et
              garantit que le balisage est pr&eacute;sent d&egrave;s le
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
              Pour WordPress, trois options s&apos;offrent &agrave; vous.
              La plus simple est d&apos;utiliser une extension comme Yoast
              SEO ou Rank Math, qui g&eacute;n&egrave;rent automatiquement
              certains balisages. Cependant, pour un balisage complet et
              optimis&eacute; GEO, nous recommandons d&apos;ajouter
              manuellement le JSON-LD via le fichier{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">functions.php</code>{" "}
              de votre th&egrave;me ou via un plugin custom.
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
              Pour un site HTML statique, ins&eacute;rez simplement le bloc
              JSON-LD dans la balise{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded text-sm">&lt;head&gt;</code>{" "}
              de chaque page concern&eacute;e. C&apos;est la m&eacute;thode
              la plus directe et elle fonctionne avec n&apos;importe quel
              h&eacute;bergeur.
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
  <!-- Contenu de la page -->
</body>
</html>`}</code></pre>
            </div>

            {/* Conclusion */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Conclusion : le balisage structur&eacute; est la fondation du
              GEO
            </h2>

            <p>
              Le balisage Schema.org n&apos;est pas un d&eacute;tail
              technique. C&apos;est la fondation sur laquelle repose toute
              votre strat&eacute;gie GEO. Sans donn&eacute;es
              structur&eacute;es, les moteurs IA doivent deviner qui vous
              &ecirc;tes et ce que vous proposez. Avec un balisage complet
              et bien impl&eacute;ment&eacute;, vous leur fournissez une
              fiche d&apos;identit&eacute; claire et fiable qui maximise
              vos chances d&apos;&ecirc;tre recommand&eacute;.
            </p>

            <p>
              L&apos;effort est ponctuel : une fois le balisage en place,
              il suffit de le maintenir &agrave; jour lors des
              changements de services ou d&apos;horaires. Le retour sur
              investissement, en revanche, est durable. Les
              &eacute;tablissements qui investissent aujourd&apos;hui dans
              un balisage structur&eacute; complet construisent un avantage
              concurrentiel qui se renforcera au fil des mois, &agrave;
              mesure que les moteurs IA gagnent en importance.
            </p>

            <p>
              Commencez par le balisage principal de votre
              &eacute;tablissement (Hotel, Restaurant ou LocalBusiness),
              puis &eacute;tendez progressivement avec FAQPage,
              BreadcrumbList et le balisage de votre contenu
              &eacute;ditorial. Testez syst&eacute;matiquement avec les
              outils de validation. Et surtout, pensez chaque
              propri&eacute;t&eacute; comme une r&eacute;ponse &agrave;
              une question que pourrait poser un utilisateur &agrave; une
              IA.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-navy to-navy/90 p-8 sm:p-12 text-center text-white">
            <h2 className="text-[20px] sm:text-2xl font-bold">
              Besoin d&apos;aide pour votre balisage Schema.org ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Nous auditons votre site, identifions les balisages manquants
              et impl&eacute;mentons un Schema.org complet optimis&eacute;
              pour le GEO. R&eacute;sultats mesurables en quelques semaines.
            </p>
            <Link href="/contact" className="mt-6 inline-block">
              <Button className="h-12 cursor-pointer rounded-full bg-cyan px-8 text-base font-semibold text-white hover:bg-cyan-dark">
                Demander un audit Schema.org
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
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
