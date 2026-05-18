import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Audit SEO / GEO pour votre entreprise",
  description:
    "Évaluez la visibilité de votre entreprise sur ChatGPT, Claude et Gemini. Recevez votre rapport en 48h.",
  openGraph: {
    title: "Audit SEO / GEO pour votre entreprise",
    description:
      "Évaluez la visibilité de votre entreprise sur ChatGPT, Claude et Gemini. Recevez votre rapport en 48h.",
    url: "https://www.pulseoai.fr/contact",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI - Audit SEO / GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit SEO / GEO pour votre entreprise",
    description:
      "Évaluez la visibilité de votre entreprise sur ChatGPT, Claude et Gemini. Recevez votre rapport en 48h.",
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

      <section className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-6 sm:mb-8">
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
          <div className="mb-10 max-w-[680px] sm:mb-12">
            <h1 className="text-[24px] font-bold tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              Votre entreprise est-elle visible sur{" "}
              <span className="text-cyan">ChatGPT</span> ?
            </h1>
            <p className="mt-6 text-[15px] text-[#6B7280] leading-relaxed">
              Demandez votre audit SEO / GEO. Nous testons votre entreprise
              sur ChatGPT, Claude et Gemini et nous vous envoyons le rapport.
            </p>
          </div>

          <div className="mb-8 max-w-[780px] rounded-[24px] border border-[#DEE6F3] bg-white px-5 py-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:mb-10 sm:px-6">
            <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-navy">
              Ce que nous vérifions pendant l’audit SEO / GEO
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-navy/68">
              L’audit sert à comprendre où votre entreprise est visible, où elle est absente et quels concurrents prennent la place sur Google et dans les réponses IA. Nous analysons la visibilité Google, la présence dans ChatGPT, Gemini et Perplexity, ainsi que les pages stratégiques qui portent déjà votre acquisition organique.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-navy/68">
              Nous regardons aussi vos contenus, le balisage Schema.org, les citations de marque, les sources qui parlent de vous et les signaux qui aident les moteurs IA à vous comprendre. Le résultat est un plan d’action priorisé, avec les corrections les plus utiles à lancer d’abord.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Visibilité Google et requêtes clés",
                "Présence dans ChatGPT, Gemini et Perplexity",
                "Pages stratégiques et contenus existants",
                "Balisage Schema.org et structure technique",
                "Citations, sources externes et profils utiles",
                "Concurrents visibles à votre place",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-navy/72">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two columns */}
          <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Left: form (3 cols) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right: contact info (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Response badge */}
              <div className="rounded-2xl bg-cyan/10 p-6 text-center sm:p-8">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-cyan" />
                </div>
                <p className="font-bold text-navy text-lg">
                  Réponse sous 48 h
                </p>
                <p className="mt-1 text-navy/60 text-sm">
                  Nous analysons votre visibilité IA et préparons votre
                  rapport personnalisé.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:space-y-6 sm:p-8">
                <h2 className="text-lg font-bold text-navy">
                  Coordonnées
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
