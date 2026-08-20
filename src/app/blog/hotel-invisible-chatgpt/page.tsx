import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getArticleSchemaEnhancements } from "@/lib/article-metadata";
import { QuickAnswer } from "@/components/quick-answer";
import { ContactForm } from "@/components/contact-form";
import { RelatedPosts } from "@/components/related-posts";
import "@/styles/article.css";

export const metadata: Metadata = {
  title: "Hôtel invisible sur ChatGPT : solutions",
  description:
    "Votre hôtel n'apparaît pas sur ChatGPT ? Les 5 causes de cette invisibilité et les solutions concrètes pour y remédier.",
  openGraph: {
    title: "Hôtel invisible sur ChatGPT : solutions",
    description:
      "Votre hôtel n'apparaît pas sur ChatGPT ? Les 5 causes de cette invisibilité et les solutions concrètes pour y remédier.",
    url: "https://www.pulseoai.fr/blog/hotel-invisible-chatgpt",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hôtel invisible sur ChatGPT : solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hôtel invisible sur ChatGPT : solutions",
    description:
      "Votre hôtel n'apparaît pas sur ChatGPT ? Découvrez les 5 causes principales de cette invisibilité et les solutions concrètes pour y remédier.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/blog/hotel-invisible-chatgpt" },
};

const articleSchemaEnhancements = getArticleSchemaEnhancements("hotel-invisible-chatgpt");

const blogPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Pourquoi votre hôtel est invisible sur ChatGPT (et comment y remédier)",
  description:
    "Pourquoi un hôtel peut disparaître des réponses ChatGPT et comment renforcer ses sources, contenus et signaux GEO pour être recommandé.",
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  inLanguage: "fr-FR",
  url: "https://www.pulseoai.fr/blog/hotel-invisible-chatgpt",
  articleSection: "Hôtellerie",
  keywords: [
    "hôtel invisible ChatGPT",
    "GEO hôtellerie",
    "visibilité IA hôtel",
    "référencement IA hôtel",
    "ChatGPT hôtel",
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
  ...(articleSchemaEnhancements?.about ? { about: articleSchemaEnhancements.about } : {}),
  ...(articleSchemaEnhancements?.mentions
    ? { mentions: articleSchemaEnhancements.mentions }
    : {}),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.pulseoai.fr/blog/hotel-invisible-chatgpt",
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
      name: "Pourquoi votre hôtel est invisible sur ChatGPT",
      item: "https://www.pulseoai.fr/blog/hotel-invisible-chatgpt",
    },
  ],
};

export default function HotelInvisibleChatGPT() {
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

      <article className="ba bg-white">
        {/* Header */}
        <div className="bg-[#F8F9FA]">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:py-28">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              <ArrowLeft className="size-4" />
              Retour au blog
            </Link>

            <h1 className="mt-6 text-[22px] font-bold leading-tight tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              Pourquoi votre h&ocirc;tel est invisible sur <span className="ba-mark">ChatGPT</span>{" "}
              (et comment y rem&eacute;dier)
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy/50">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />5 mars 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />6 min de lecture
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="size-4" />PulseoAI
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 py-10 lg:py-16">
          <div className="space-y-7 text-[16px] leading-relaxed text-navy/80 sm:space-y-8 sm:text-[17px]">
            {/* Introduction */}
            <p className="text-lg text-navy/90 font-medium leading-relaxed">
              Vous avez tap&eacute; le nom de votre h&ocirc;tel dans ChatGPT et il
              n&apos;appara&icirc;t pas. Pire encore, quand vous demandez une recommandation
              d&apos;h&ocirc;tel dans votre ville, ce sont vos concurrents qui sont cit&eacute;s.
              Ce n&apos;est pas un hasard. Voici pourquoi votre &eacute;tablissement reste invisible
              sur les moteurs de recherche IA, et surtout comment corriger cela.
            </p>

            <QuickAnswer
              question="Pourquoi un hôtel peut-il être invisible sur ChatGPT ?"
              answer="Un hôtel peut être invisible sur ChatGPT si ses informations sont floues, dispersées ou peu confirmées par des sources externes. Le GEO hôtelier permet de renforcer les signaux que les moteurs IA utilisent pour comprendre et recommander un établissement."
            />

            <div className="rounded-[24px] border border-navy/10 bg-[#F8FAFC] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
                Liens utiles
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm font-medium text-navy">
                <Link href="/geo-hotellerie" className="rounded-full border border-navy/10 bg-white px-4 py-2 transition hover:border-cyan/30 hover:text-cyan">
                  GEO h&ocirc;tellerie
                </Link>
                <Link href="/blog/geo-local-guide-entreprises" className="rounded-full border border-navy/10 bg-white px-4 py-2 transition hover:border-cyan/30 hover:text-cyan">
                  Guide GEO local
                </Link>
                <Link href="/blog/booking-vs-reservations-directes-geo" className="rounded-full border border-navy/10 bg-white px-4 py-2 transition hover:border-cyan/30 hover:text-cyan">
                  R&eacute;servations directes
                </Link>
              </div>
            </div>

            {/* Section 1 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Le constat : votre h&ocirc;tel n&apos;appara&icirc;t pas
            </h2>

            <p>
              Faites le test. Ouvrez ChatGPT, Gemini ou Claude et posez une question
              du type &laquo; Quel h&ocirc;tel recommandes tu &agrave; [votre ville] pour
              un s&eacute;jour en couple ? &raquo;. Analysez la r&eacute;ponse. Si votre
              &eacute;tablissement n&apos;est pas mentionn&eacute;, vous faites partie
              de la grande majorit&eacute; des h&ocirc;tels qui sont totalement absents
              des r&eacute;ponses IA.
            </p>

            <p>
              Ce probl&egrave;me est massif. Nos audits montrent que plus de 80 % des h&ocirc;tels
              ind&eacute;pendants en France ne sont jamais cit&eacute;s dans les r&eacute;ponses
              de ChatGPT, m&ecirc;me pour des requ&ecirc;tes directement li&eacute;es &agrave;
              leur localisation. Et avec 2,8 milliards d&apos;utilisateurs mensuels sur ChatGPT,
              l&apos;impact sur les r&eacute;servations est consid&eacute;rable.
            </p>

            <p>
              La question n&apos;est plus de savoir si les voyageurs utilisent les IA pour choisir
              leur h&ocirc;tel. Ils le font d&eacute;j&agrave;. La question est de savoir
              pourquoi votre &eacute;tablissement n&apos;appara&icirc;t pas, et comment y rem&eacute;dier.
            </p>

            <ul className="space-y-3 rounded-[24px] border border-navy/10 bg-white p-5 text-[15px] text-navy/70">
              <li>Informations floues ou incompl&egrave;tes</li>
              <li>Sources externes faibles ou contradictoires</li>
              <li>Contenus peu lisibles pour les moteurs IA</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les 5 causes de l&apos;invisibilit&eacute;
            </h2>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Cause 1 : aucune donn&eacute;e structur&eacute;e sur votre site
            </h3>
            <p>
              Les donn&eacute;es structur&eacute;es (balisage Schema.org) sont le langage
              que comprennent les moteurs IA. Sans balisage de type Hotel ou LodgingBusiness,
              l&apos;IA ne sait pas pr&eacute;cis&eacute;ment ce qu&apos;est votre
              &eacute;tablissement. Elle ne conna&icirc;t ni votre nombre d&apos;&eacute;toiles,
              ni vos services, ni votre fourchette de prix. R&eacute;sultat : elle ne peut pas
              vous recommander en r&eacute;ponse &agrave; une question sp&eacute;cifique.
            </p>
            <p>
              Nos audits r&eacute;v&egrave;lent que 70 % des sites d&apos;h&ocirc;tels
              ind&eacute;pendants n&apos;ont aucun balisage Schema.org, ou un balisage
              incomplet qui ne couvre que les informations de base (nom et adresse).
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Cause 2 : aucune mention sur des sources de confiance
            </h3>
            <p>
              Les LLMs s&apos;appuient sur des sources tierces pour valider la qualit&eacute;
              d&apos;un &eacute;tablissement. Si votre h&ocirc;tel n&apos;est mentionn&eacute;
              ni dans des guides de voyage en ligne, ni dans des articles de presse,
              ni dans des blogs sp&eacute;cialis&eacute;s, les IA n&apos;ont aucune raison
              de vous consid&eacute;rer comme une recommandation pertinente.
            </p>
            <p>
              Ce probl&egrave;me touche particuli&egrave;rement les h&ocirc;tels qui comptent
              exclusivement sur Booking et les OTA pour leur visibilit&eacute;. Ces plateformes
              g&eacute;n&egrave;rent des r&eacute;servations, mais elles ne construisent pas
              votre autorit&eacute; aux yeux des IA.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Cause 3 : un contenu non optimis&eacute; pour les LLMs
            </h3>
            <p>
              Votre site est peut &ecirc;tre esth&eacute;tique, mais les IA ne voient pas
              les images. Elles lisent le texte. Un site avec peu de contenu textuel,
              des descriptions vagues (&laquo; Un havre de paix au c&oelig;ur de la ville &raquo;)
              ou un texte structur&eacute; en un seul bloc ne fournit pas aux LLMs les informations
              dont ils ont besoin pour vous recommander.
            </p>
            <p>
              Les IA recherchent des r&eacute;ponses factuelles : nombre de chambres,
              &eacute;quipements sp&eacute;cifiques, distance par rapport aux points
              d&apos;int&eacute;r&ecirc;t, politique d&apos;annulation, options de restauration.
              Si ces informations sont absentes ou noy&eacute;es dans du texte marketing,
              vous restez invisible.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Cause 4 : pas de fichier llms.txt
            </h3>
            <p>
              Le fichier llms.txt est un standard &eacute;mergent qui permet aux LLMs
              de comprendre rapidement votre site. Plac&eacute; &agrave; la racine de votre
              domaine, il fournit un r&eacute;sum&eacute; structur&eacute; de votre
              &eacute;tablissement sp&eacute;cialement con&ccedil;u pour les IA. Sans ce fichier,
              le LLM doit parcourir l&apos;ensemble de votre site pour comprendre qui vous &ecirc;tes,
              ce qui r&eacute;duit significativement vos chances d&apos;&ecirc;tre cit&eacute;.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Cause 5 : un profil de citations faible
            </h3>
            <p>
              Le profil de citations d&eacute;signe l&apos;ensemble des endroits o&ugrave; votre
              h&ocirc;tel est mentionn&eacute; en ligne. Cela inclut les annuaires, les avis,
              les articles et les r&eacute;f&eacute;rences. Un profil faible (peu de mentions,
              des informations incoh&eacute;rentes entre les sources, des avis peu nombreux
              ou anciens) signale aux IA que votre &eacute;tablissement n&apos;est pas
              suffisamment &eacute;tabli pour &ecirc;tre recommand&eacute;.
            </p>

            {/* Section 3 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Les solutions pour chaque cause
            </h2>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Solution pour la cause 1 : implanter un balisage complet
            </h3>
            <p>
              Ajoutez un balisage Schema.org de type Hotel (ou LodgingBusiness) en JSON LD
              sur votre page d&apos;accueil et vos pages cl&eacute;s. Incluez toutes les
              propri&eacute;t&eacute;s pertinentes : nom, adresse, coordonn&eacute;es,
              description, note agr&eacute;g&eacute;e, &eacute;quipements, fourchette de prix,
              images et politique de r&eacute;servation. Validez votre balisage avec l&apos;outil
              de test de Google. Le d&eacute;lai moyen de mise en place est de 2 &agrave; 5 jours
              pour un site standard.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Solution pour la cause 2 : construire votre pr&eacute;sence &eacute;ditoriale
            </h3>
            <p>
              Identifiez les guides, blogs et m&eacute;dias qui couvrent votre destination.
              Proposez du contenu (communiqu&eacute;s de presse, accueils presse, partenariats
              &eacute;ditoriaux) pour &ecirc;tre mentionn&eacute; naturellement. Inscrivez vous
              sur les annuaires de votre office de tourisme local. Chaque mention sur une source
              reconnue renforce votre autorit&eacute; aupr&egrave;s des IA.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Solution pour la cause 3 : restructurer votre contenu
            </h3>
            <p>
              R&eacute;&eacute;crivez vos pages avec des titres explicites, des paragraphes
              courts et des informations factuelles. Cr&eacute;ez une page FAQ qui r&eacute;pond
              aux questions les plus fr&eacute;quentes des voyageurs. D&eacute;taillez chaque
              service (spa, restaurant, parking, activit&eacute;s) sur des pages d&eacute;di&eacute;es.
              L&apos;objectif est de fournir aux IA des blocs d&apos;information clairs et facilement
              extractibles.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Solution pour la cause 4 : cr&eacute;er votre fichier llms.txt
            </h3>
            <p>
              R&eacute;digez un fichier llms.txt qui r&eacute;sume votre &eacute;tablissement
              en quelques sections cl&eacute;s : identit&eacute;, localisation, services,
              client&egrave;le cible et points forts. Placez le &agrave; la racine de votre site
              (votrehotel.com/llms.txt). La cr&eacute;ation prend quelques heures et l&apos;impact
              est mesurable en semaines.
            </p>

            <h3 className="text-xl font-semibold text-navy pt-2">
              Solution pour la cause 5 : renforcer votre profil de citations
            </h3>
            <p>
              V&eacute;rifiez la coh&eacute;rence de vos informations (nom, adresse, t&eacute;l&eacute;phone)
              sur toutes les plateformes. Encouragez activement les avis clients
              apr&egrave;s chaque s&eacute;jour. R&eacute;pondez &agrave; tous les avis.
              Inscrivez vous sur les annuaires professionnels de votre r&eacute;gion. Un profil
              de citations coh&eacute;rent et riche est un signal de confiance majeur pour les IA.
            </p>

            {/* Section 4 */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Par o&ugrave; commencer : le plan d&apos;action prioritaire
            </h2>

            <p>
              Face &agrave; cette liste de chantiers, il est normal de se sentir d&eacute;pass&eacute;.
              Voici l&apos;ordre de priorit&eacute; que nous recommandons pour maximiser
              l&apos;impact rapidement.
            </p>

            <p>
              <strong className="text-navy">Semaine 1 :</strong> r&eacute;alisez un audit de votre
              visibilit&eacute; IA actuelle. Testez votre h&ocirc;tel sur ChatGPT, Gemini et Claude
              avec diff&eacute;rentes requ&ecirc;tes. V&eacute;rifiez votre balisage Schema.org existant.
              Identifiez les lacunes principales.
            </p>

            <p>
              <strong className="text-navy">Semaines 2 et 3 :</strong> mettez en place le balisage
              Schema.org complet et le fichier llms.txt. Ce sont les actions les plus rapides
              &agrave; impl&eacute;menter et elles posent les fondations de votre visibilit&eacute; IA.
            </p>

            <p>
              <strong className="text-navy">Mois 2 :</strong> restructurez votre contenu web.
              R&eacute;&eacute;crivez les pages principales avec une approche orient&eacute;e
              questions/r&eacute;ponses. Cr&eacute;ez une FAQ compl&egrave;te.
            </p>

            <p>
              <strong className="text-navy">Mois 3 et suivants :</strong> d&eacute;veloppez votre
              pr&eacute;sence sur les sources de confiance et renforcez votre profil de citations.
              C&apos;est un travail de fond qui porte ses fruits sur le moyen terme.
            </p>

            <div className="rounded-[24px] border border-cyan/15 bg-cyan/5 p-5 text-[15px] text-navy/75">
              Pour les h&ocirc;tels, notre accompagnement{" "}
              <Link href="/geo-hotellerie" className="font-semibold text-cyan hover:underline">
                GEO h&ocirc;tellerie
              </Link>{" "}
              aide &agrave; analyser les requ&ecirc;tes voyageurs, les concurrents visibles et les
              sources cit&eacute;es par les IA.
            </div>

            {/* Conclusion */}
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy pt-4">
              Conclusion : l&apos;invisibilit&eacute; n&apos;est pas une fatalit&eacute;
            </h2>

            <p>
              Si votre h&ocirc;tel n&apos;appara&icirc;t pas sur ChatGPT aujourd&apos;hui,
              ce n&apos;est pas parce qu&apos;il n&apos;est pas assez bien. C&apos;est parce
              que les moteurs IA ne disposent pas des informations n&eacute;cessaires pour
              le recommander. La bonne nouvelle, c&apos;est que chaque cause d&apos;invisibilit&eacute;
              a une solution concr&egrave;te et mesurable.
            </p>

            <p>
              Le GEO est un domaine en pleine croissance. Les h&ocirc;tels qui agissent maintenant
              prennent une avance significative. Dans six mois, la comp&eacute;tition sera
              beaucoup plus intense et il sera plus difficile de se d&eacute;marquer.
            </p>
          </div>

          <RelatedPosts
            currentSlug="hotel-invisible-chatgpt"
            explicitSlugs={[
              "geo-local-guide-entreprises",
              "booking-vs-reservations-directes-geo",
              "schema-org-guide-complet-geo",
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
            <h2 className="text-[20px] sm:text-2xl font-bold text-navy">
              D&eacute;couvrez pourquoi votre h&ocirc;tel est invisible
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-navy/70">
              Notre audit SEO / GEO analyse la visibilit&eacute; de votre
              &eacute;tablissement sur ChatGPT, Gemini et Claude. Vous recevez un
              diagnostic complet avec les causes identifi&eacute;es et un plan d&apos;action
              personnalis&eacute;.
            </p>
            <div className="ba-form-wrap">
              <ContactForm />
            </div>

            <p className="ba-form-links">
              <Link href="/contact">Obtenir un audit</Link>
            </p>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-navy/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:underline"
            >
              <ArrowLeft className="size-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
