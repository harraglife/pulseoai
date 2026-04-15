import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site pulseoai.fr. PulseoAI SAS, RCS Nantes 103 074 605.",
  openGraph: {
    title: "Mentions légales",
    description:
      "Mentions légales du site pulseoai.fr. PulseoAI SAS, RCS Nantes 103 074 605.",
    url: "https://www.pulseoai.fr/mentions-legales",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions légales",
    description:
      "Mentions légales du site pulseoai.fr. PulseoAI SAS, RCS Nantes 103 074 605.",
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

export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-navy/60">
              <li>
                <Link href="/" className="hover:text-cyan transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="font-medium text-navy">Mentions l&eacute;gales</li>
            </ol>
          </nav>

          <h1 className="text-[26px] font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl mb-8 sm:mb-12">
            Mentions l&eacute;gales
          </h1>

          <div className="space-y-10">
            {/* Éditeur du site */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                &Eacute;diteur du site
              </h2>
              <div className="text-navy/70 leading-relaxed space-y-2">
                <p>
                  <strong className="text-navy">PulseoAI</strong>, SAS au capital
                  de 200&nbsp;&euro;.
                </p>
                <p>RCS Nantes 103&nbsp;074&nbsp;605.</p>
                <p>
                  Si&egrave;ge social : 17 rue Oc&eacute;ane, 44800 Saint Herblain,
                  France.
                </p>
                <p>TVA non applicable, art.&nbsp;293&nbsp;B du CGI.</p>
                <p>Directeur de publication : Romain.</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                H&eacute;bergeur
              </h2>
              <div className="text-navy/70 leading-relaxed space-y-2">
                <p>
                  <strong className="text-navy">Vercel Inc.</strong>
                </p>
                <p>San Francisco, CA, USA.</p>
                <p>
                  Site web :{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline"
                  >
                    vercel.com
                  </a>
                </p>
              </div>
            </div>

            {/* Protection des données */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Protection des donn&eacute;es
              </h2>
              <div className="text-navy/70 leading-relaxed space-y-2">
                <p>
                  Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur
                  la Protection des Donn&eacute;es (RGPD), vous disposez d&apos;un
                  droit d&apos;acc&egrave;s, de rectification et de suppression de
                  vos donn&eacute;es personnelles.
                </p>
                <p>
                  Pour exercer ces droits, contactez nous par email :{" "}
                  <a
                    href="mailto:contact@pulseoai.fr"
                    className="text-cyan hover:underline"
                  >
                    contact@pulseoai.fr
                  </a>
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Cookies</h2>
              <div className="text-navy/70 leading-relaxed space-y-2">
                <p>
                  Ce site utilise uniquement des cookies essentiels au bon
                  fonctionnement du service. Aucun cookie publicitaire ou de suivi
                  n&apos;est utilis&eacute;.
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Propri&eacute;t&eacute; intellectuelle
              </h2>
              <div className="text-navy/70 leading-relaxed space-y-2">
                <p>
                  L&apos;ensemble des contenus pr&eacute;sents sur le site
                  pulseoai.fr (textes, images, logos, ic&ocirc;nes, mise en page)
                  est la propri&eacute;t&eacute; exclusive de PulseoAI, sauf
                  mention contraire. Toute reproduction, repr&eacute;sentation ou
                  diffusion, m&ecirc;me partielle, est interdite sans autorisation
                  pr&eacute;alable &eacute;crite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
