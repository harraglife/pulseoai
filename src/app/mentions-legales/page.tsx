import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import "@/styles/pages/mentions-legales.css";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Consultez les mentions légales du site PulseoAI : éditeur, direction de publication, propriété intellectuelle, données personnelles et contact.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: "Mentions légales | PulseoAI",
    description:
      "Consultez les mentions légales du site PulseoAI : éditeur, direction de publication, propriété intellectuelle, données personnelles et contact.",
    url: "https://www.pulseoai.fr/mentions-legales",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – Mentions légales" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions légales | PulseoAI",
    description:
      "Consultez les mentions légales du site PulseoAI : éditeur, direction de publication, propriété intellectuelle, données personnelles et contact.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
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
      name: "Mentions légales",
      item: "https://www.pulseoai.fr/mentions-legales",
    },
  ],
};

const sections = [
  {
    title: "Éditeur du site",
    content: (
      <>
        <p>
          Le site pulseoai.fr est édité par PulseoAI, SAS au capital social de 200 €.
        </p>
        <ul className="mt-4 space-y-2">
          <li>Raison sociale : PulseoAI</li>
          <li>Forme juridique : SAS</li>
          <li>Capital social : 200 €</li>
          <li>Siège social : 17 rue Océane, 44800 Saint-Herblain, France</li>
          <li>RCS : Nantes</li>
          <li>SIREN : 103 074 605</li>
          <li>Activité : Conseil pour les affaires et autres conseils de gestion</li>
          <li>Code NAF / APE : 70.22Z</li>
          <li>Email : contact@pulseoai.fr</li>
        </ul>
      </>
    ),
  },
  {
    title: "Direction de la publication",
    content: (
      <>
        <p>Le directeur de la publication du site est Romain Duclos.</p>
        <p className="mt-3">Dirigeants : Romain Duclos, Fondateur, et Sofiane Aiche, Co-fondateur.</p>
      </>
    ),
  },
  {
    title: "Hébergement",
    content: (
      <>
        <p>Hébergeur : Vercel Inc.</p>
        <p className="mt-3">
          Site web :{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">
            vercel.com
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          L’ensemble des contenus présents sur le site pulseoai.fr, incluant notamment les textes, éléments graphiques, logos, interfaces, visuels, éléments de design et structures de pages, est la propriété exclusive de PulseoAI, sauf mention contraire.
        </p>
        <p className="mt-3">
          Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, sans autorisation préalable écrite de PulseoAI, est interdite.
        </p>
      </>
    ),
  },
  {
    title: "Responsabilité",
    content: (
      <>
        <p>
          PulseoAI s’efforce de fournir sur son site des informations fiables, exactes et régulièrement mises à jour. Toutefois, PulseoAI ne saurait garantir l’exactitude, l’exhaustivité ou l’actualité permanente des informations diffusées.
        </p>
        <p className="mt-3">
          L’utilisateur reste seul responsable de l’usage qu’il fait des informations présentes sur le site.
        </p>
      </>
    ),
  },
  {
    title: "Données personnelles et RGPD",
    content: (
      <>
        <p>
          Les informations transmises via les formulaires du site sont utilisées uniquement pour répondre aux demandes reçues, assurer le suivi commercial et échanger avec les personnes ayant contacté PulseoAI.
        </p>
        <p className="mt-3">
          Conformément au Règlement Général sur la Protection des Données, vous disposez d’un droit d’accès, de rectification, d’opposition, de suppression et de limitation du traitement de vos données personnelles.
        </p>
        <p className="mt-3">
          Pour exercer vos droits, vous pouvez contacter PulseoAI à l’adresse suivante :{" "}
          <a href="mailto:contact@pulseoai.fr" className="text-cyan hover:underline">
            contact@pulseoai.fr
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Cookies",
    content: (
      <>
        <p>
          Le site pulseoai.fr utilise uniquement des cookies essentiels au bon fonctionnement du site, sauf indication contraire.
        </p>
        <p className="mt-3">
          Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Certaines fonctionnalités du site peuvent toutefois être limitées en cas de désactivation des cookies essentiels.
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        Pour toute question relative aux mentions légales du site, vous pouvez contacter PulseoAI à l’adresse suivante :{" "}
        <a href="mailto:contact@pulseoai.fr" className="text-cyan hover:underline">
          contact@pulseoai.fr
        </a>
        .
      </p>
    ),
  },
];



export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <section className="ml">
        <div className="ml-inner">
          <nav aria-label="Fil d'Ariane">
            <ol className="ml-crumb">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="ml-crumb-now">Mentions légales</li>
            </ol>
          </nav>

          <span className="ml-eyebrow">MENTIONS LÉGALES</span>
          <h1>Mentions légales</h1>
          <p className="ml-lead">Informations légales relatives au site pulseoai.fr.</p>

          <div className="ml-list">
            {sections.map((section) => (
              <section key={section.title} className="ml-card">
                <h2>{section.title}</h2>
                <div className="ml-body">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
