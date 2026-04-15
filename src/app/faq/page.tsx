import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqCategories } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ : le GEO expliqué aux hôteliers",
  description:
    "30+ réponses sur le référencement IA pour les hôtels. Qu'est ce que le GEO, combien ça coûte, quels résultats attendre.",
  openGraph: {
    title: "FAQ : le GEO expliqué aux hôteliers · PulseoAI",
    description:
      "30+ réponses sur le référencement IA pour les hôtels. Qu'est ce que le GEO, combien ça coûte, quels résultats attendre.",
    url: "https://www.pulseoai.fr/faq",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – FAQ GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ : le GEO expliqué aux hôteliers · PulseoAI",
    description:
      "30+ réponses sur le référencement IA pour les hôtels. Qu'est ce que le GEO, combien ça coûte, quels résultats attendre.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/faq" },
};

const allFaqItems = faqCategories.flatMap((cat) => cat.items);

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
      name: "FAQ",
      item: "https://www.pulseoai.fr/faq",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-24 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-[26px] sm:text-[32px] md:text-[44px] font-bold mb-6">
            Questions fréquentes sur le{" "}
            <span className="text-cyan">GEO hôtelier</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur le référencement IA pour votre
            hôtel, expliqué simplement.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 md:py-28">
        <div className="max-w-[680px] mx-auto px-6">
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-24 md:py-28">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="text-[22px] sm:text-2xl md:text-[28px] font-bold mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos
            interrogations sur le GEO et la visibilité IA de votre hôtel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-cyan px-6 py-3 min-h-[48px] font-semibold text-navy hover:bg-cyan/90 transition"
            >
              Demander un audit gratuit
            </Link>
            <Link
              href="/offre"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 min-h-[48px] font-semibold text-white hover:bg-white/10 transition"
            >
              Découvrir notre offre
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
