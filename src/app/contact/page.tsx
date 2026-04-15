import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Audit GEO gratuit pour votre entreprise",
  description:
    "Testez gratuitement la visibilité de votre entreprise sur ChatGPT, Claude et Gemini. Recevez votre rapport en 48h.",
  openGraph: {
    title: "Audit GEO gratuit pour votre entreprise",
    description:
      "Testez gratuitement la visibilité de votre entreprise sur ChatGPT, Claude et Gemini. Recevez votre rapport en 48h.",
    url: "https://www.pulseoai.fr/contact",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – Audit GEO gratuit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit GEO gratuit pour votre entreprise",
    description:
      "Testez gratuitement la visibilité de votre entreprise sur ChatGPT, Claude et Gemini. Recevez votre rapport en 48h.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/contact" },
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
      name: "Contact",
      item: "https://www.pulseoai.fr/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[#F8F9FA] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
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
              <li className="font-medium text-navy">Contact</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="max-w-[680px] mb-12">
            <h1 className="text-[26px] font-bold tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              Votre entreprise est elle visible sur{" "}
              <span className="text-cyan">ChatGPT</span>&nbsp;?
            </h1>
            <p className="mt-6 text-[15px] text-[#6B7280] leading-relaxed">
              Demandez votre audit GEO gratuit. Nous testons votre entreprise
              sur ChatGPT, Claude et Gemini et nous vous envoyons le rapport.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: form (3 cols) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right: contact info (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Response badge */}
              <div className="rounded-2xl bg-cyan/10 p-8 text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-cyan" />
                </div>
                <p className="font-bold text-navy text-lg">
                  R&eacute;ponse sous 48&nbsp;h
                </p>
                <p className="mt-1 text-navy/60 text-sm">
                  Nous analysons votre visibilit&eacute; IA et pr&eacute;parons votre
                  rapport personnalis&eacute;.
                </p>
              </div>

              {/* Contact details */}
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 space-y-6">
                <h2 className="text-lg font-bold text-navy">
                  Coordonn&eacute;es
                </h2>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-cyan/10 p-2.5">
                    <Mail className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy/60">Email</p>
                    <a
                      href="mailto:contact@pulseoai.fr"
                      className="text-navy font-medium hover:text-cyan transition-colors"
                    >
                      contact@pulseoai.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-cyan/10 p-2.5">
                    <ExternalLink className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy/60">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/pulseoai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy font-medium hover:text-cyan transition-colors"
                    >
                      PulseoAI
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-cyan/10 p-2.5">
                    <MapPin className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy/60">
                      Localisation
                    </p>
                    <p className="text-navy font-medium">Nantes, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
