import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  Eye,
  BookOpen,
  Target,
  Users,
  MapPin,
  Globe,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos de PulseoAI \u00b7 Agence GEO Nantes",
  description:
    "Découvrez l\u2019équipe PulseoAI. Romain et Sofiane aident les entreprises à devenir visibles sur les moteurs de recherche IA.",
  openGraph: {
    title: "À propos de PulseoAI \u00b7 Agence GEO Nantes",
    description:
      "Découvrez l\u2019équipe PulseoAI. Romain et Sofiane aident les entreprises à devenir visibles sur les moteurs de recherche IA.",
    url: "https://www.pulseoai.fr/a-propos",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – À propos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de PulseoAI \u00b7 Agence GEO Nantes",
    description:
      "Découvrez l\u2019équipe PulseoAI. Romain et Sofiane aident les entreprises à devenir visibles sur les moteurs de recherche IA.",
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
      name: "\u00c0 propos",
      item: "https://www.pulseoai.fr/a-propos",
    },
  ],
};

const team = [
  {
    name: "Romain",
    photo: "/team/romain.jpg",
    objectPosition: "50% 30%",
    role: "Fondateur, expert GEO",
    bio: "Romain est passionn\u00e9 par l\u2019h\u00f4tellerie et la technologie depuis plus de dix ans. Apr\u00e8s avoir travaill\u00e9 aux c\u00f4t\u00e9s d\u2019h\u00f4teliers ind\u00e9pendants et observ\u00e9 de pr\u00e8s leur d\u00e9pendance croissante aux OTAs, il a d\u00e9cid\u00e9 de cr\u00e9er PulseoAI pour leur offrir une alternative concr\u00e8te. Sp\u00e9cialiste du GEO (Generative Engine Optimization), il con\u00e7oit les strat\u00e9gies de visibilit\u00e9 IA sur mesure, supervise chaque audit et s\u2019assure que chaque action produit des r\u00e9sultats mesurables. Sa conviction : chaque h\u00f4tel m\u00e9rite d\u2019\u00eatre recommand\u00e9 par les intelligences artificielles, pas seulement les grands groupes.",
  },
  {
    name: "Sofiane Aiche",
    photo: "/team/sofiane.png",
    objectPosition: "50% 35%",
    role: "Co fondateur, relations clients",
    bio: "Sofiane est le premier point de contact de chaque h\u00f4telier qui rejoint PulseoAI. En charge des relations clients, il accompagne les \u00e9tablissements du premier \u00e9change jusqu\u2019au suivi des r\u00e9sultats. Son approche repose sur l\u2019\u00e9coute, la p\u00e9dagogie et la transparence : il traduit les donn\u00e9es techniques en informations claires et actionnables. Avant PulseoAI, Sofiane a d\u00e9velopp\u00e9 une expertise solide dans la relation commerciale B2B et la gestion de projets digitaux. Il croit profond\u00e9ment que la proximit\u00e9 humaine est ce qui fait la diff\u00e9rence dans un m\u00e9tier aussi technique que le GEO.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Transparence",
    description:
      "Nous montrons les scores, nous partageons les donn\u00e9es, rien n\u2019est cach\u00e9. Chaque client a acc\u00e8s \u00e0 ses rapports complets, ses positions sur les moteurs IA, et l\u2019historique de chaque action r\u00e9alis\u00e9e. Pas de bo\u00eete noire, pas de jargon volontairement opaque.",
  },
  {
    icon: BookOpen,
    title: "P\u00e9dagogie",
    description:
      "Nous expliquons tout, simplement, pour que vous compreniez ce que nous faisons et pourquoi nous le faisons. Le GEO est un domaine nouveau : notre r\u00f4le est de vous rendre autonome, pas d\u00e9pendant. Chaque rapport inclut des explications concr\u00e8tes.",
  },
  {
    icon: Target,
    title: "R\u00e9sultats",
    description:
      "Nous mesurons tout. Chaque action a un impact mesurable : score de visibilit\u00e9 IA, nombre de mentions, requ\u00eates couvertes, \u00e9volution mois apr\u00e8s mois. Si une action ne produit pas de r\u00e9sultat, nous ajustons. Nous ne facturons pas du vent.",
  },
  {
    icon: Heart,
    title: "Proximit\u00e9",
    description:
      "Nous sommes bas\u00e9s \u00e0 Nantes mais nous travaillons avec des h\u00f4tels partout en France, en Suisse et au Maroc. Chaque client b\u00e9n\u00e9ficie d\u2019un interlocuteur d\u00e9di\u00e9, joignable rapidement, qui conna\u00eet son \u00e9tablissement sur le bout des doigts.",
  },
];

const zones = [
  { icon: MapPin, label: "France (tout le territoire)" },
  { icon: Globe, label: "Suisse" },
  { icon: Globe, label: "Maroc" },
];

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-navy/60">
            <li>
              <Link href="/" className="hover:text-cyan transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <ChevronRight className="size-3.5" />
            </li>
            <li className="font-medium text-navy">&Agrave; propos</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-4xl">
            <h1 className="text-[26px] font-bold tracking-tight text-navy sm:text-[36px] lg:text-[44px]">
              &Agrave; propos de{" "}
              <span className="text-cyan">PulseoAI</span>
            </h1>
            <p className="mt-6 text-[15px] text-[#6B7280] sm:text-xl max-w-[680px] leading-relaxed">
              Nous aidons les entreprises &agrave; reprendre le contr&ocirc;le
              de leur visibilit&eacute; dans l&apos;&egrave;re de la recherche
              IA, en les positionnant dans les r&eacute;ponses de ChatGPT,
              Claude et Gemini. Notre expertise s&apos;est construite dans
              l&apos;h&ocirc;tellerie, et s&apos;applique aujourd&apos;hui
              &agrave; tous les secteurs.
            </p>
          </div>
        </div>
      </section>

      {/* L'histoire */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px] mb-8">
              L&apos;histoire de PulseoAI
            </h2>
            <div className="space-y-6 text-navy/70 leading-[1.7] text-base sm:text-lg">
              <p>
                Tout a commenc&eacute; par un constat simple, et pourtant
                alarmant. Un ami h&ocirc;telier nous a montr&eacute; quelque
                chose d&apos;&eacute;tonnant : quand on demande &agrave;
                ChatGPT &laquo;&nbsp;Quel est le meilleur h&ocirc;tel avec spa
                &agrave; Nantes&nbsp;?&nbsp;&raquo;, son &eacute;tablissement
                n&apos;appara&icirc;t nulle part. Z&eacute;ro mention.
                Invisible. Pourtant, il est bien not&eacute; sur Google, ses
                clients l&apos;adorent, et il investit chaque ann&eacute;e dans
                le r&eacute;f&eacute;rencement classique.
              </p>
              <p>
                Nous avons creus&eacute;. Nous avons test&eacute; des dizaines
                d&apos;h&ocirc;tels ind&eacute;pendants sur ChatGPT, Claude,
                Gemini, Copilot. Le r&eacute;sultat &eacute;tait
                quasi&nbsp;identique&nbsp;: la grande majorit&eacute; des
                &eacute;tablissements ind&eacute;pendants sont totalement
                absents des r&eacute;ponses g&eacute;n&eacute;r&eacute;es par
                les intelligences artificielles. Pendant ce temps, les OTAs
                (Booking, Expedia et consorts) d&eacute;pensent des millions
                pour optimiser leur pr&eacute;sence sur ces nouvelles
                plateformes. Elles captent le trafic, empochent les commissions,
                et les h&ocirc;teliers ind&eacute;pendants ne savent m&ecirc;me
                pas que le jeu a chang&eacute;.
              </p>
              <p>
                C&apos;est ce d&eacute;calage qui nous a motiv&eacute;s. Nous
                avons pass&eacute; des mois &agrave; comprendre comment les
                moteurs de recherche IA s&eacute;lectionnent leurs sources,
                quelles donn&eacute;es ils privil&eacute;gient, quels formats
                ils citent. Nous avons d&eacute;velopp&eacute; une
                m&eacute;thodologie sp&eacute;cifique, d&apos;abord
                test&eacute;e dans l&apos;h&ocirc;tellerie sur des cas
                concrets, puis affin&eacute;e semaine apr&egrave;s semaine.
                PulseoAI est n&eacute; de cette conviction&nbsp;: les
                entreprises ind&eacute;pendantes m&eacute;ritent d&apos;avoir
                acc&egrave;s aux m&ecirc;mes armes que les grandes
                plateformes. Aujourd&apos;hui, cette m&eacute;thode
                s&apos;applique bien au del&agrave; de l&apos;h&ocirc;tellerie,
                &agrave; tous les secteurs o&ugrave; la visibilit&eacute; IA
                devient un enjeu strat&eacute;gique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La mission */}
      <section className="bg-[#F8F9FA] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px] mb-8">
              Notre mission
            </h2>
            <div className="space-y-6 text-navy/70 leading-[1.7] text-base sm:text-lg">
              <p>
                Notre mission&nbsp;: aider les entreprises &agrave; reprendre
                le contr&ocirc;le de leur visibilit&eacute; dans
                l&apos;&egrave;re de la recherche IA. Notre expertise
                s&apos;est construite dans l&apos;h&ocirc;tellerie, un secteur
                o&ugrave; la d&eacute;pendance aux plateformes
                interm&eacute;diaires (Booking, Expedia) est un
                probl&egrave;me quotidien. Aujourd&apos;hui, nous appliquons
                cette m&eacute;thode &agrave; tous les secteurs.
              </p>
              <p>
                Nous rendons cela possible. Nous auditons votre
                pr&eacute;sence sur les moteurs IA, nous identifions les
                lacunes, et nous mettons en place une strat&eacute;gie sur
                mesure pour que ChatGPT, Claude, Gemini et Copilot vous
                recommandent en priorit&eacute;. Pas de promesses vagues, pas
                de jargon incompr&eacute;hensible&nbsp;: des actions
                concr&egrave;tes, des r&eacute;sultats mesur&eacute;s, un
                suivi transparent.
              </p>
              <p>
                Que vous soyez h&ocirc;telier, restaurateur, commer&ccedil;ant
                ou dirigeant de PME, l&apos;objectif est le m&ecirc;me&nbsp;:
                g&eacute;n&eacute;rer plus de clients en direct,
                r&eacute;duire la d&eacute;pendance aux interm&eacute;diaires,
                et ma&icirc;triser votre acquisition client sur ce nouveau
                canal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              L&apos;&eacute;quipe
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Deux profils compl&eacute;mentaires, unis par la m&ecirc;me
              conviction&nbsp;: les h&ocirc;teliers m&eacute;ritent mieux que
              l&apos;invisibilit&eacute; sur les moteurs IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    loading="lazy"
                    style={{ objectPosition: member.objectPosition }}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-navy">
                      {member.name}
                    </h3>
                    <p className="text-cyan font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-navy/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="bg-[#F8F9FA] py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-16">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              Nos valeurs
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Quatre principes qui guident chacune de nos actions au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100"
                >
                  <div className="mb-4 w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Où nous travaillons */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
              O&ugrave; nous travaillons
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Bas&eacute;s &agrave; Nantes, nous accompagnons des
              entreprises sur trois zones g&eacute;ographiques. Tous nos
              &eacute;changes se font &agrave; distance (visio, t&eacute;l&eacute;phone,
              messagerie), ce qui nous permet d&apos;&ecirc;tre r&eacute;actifs
              o&ugrave; que vous soyez.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
            {zones.map((zone) => {
              const Icon = zone.icon;
              return (
                <div
                  key={zone.label}
                  className="flex items-center gap-3 rounded-2xl bg-[#F8F9FA] px-6 py-4 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-cyan" />
                  </div>
                  <span className="font-semibold text-navy">{zone.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-navy py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="max-w-[680px] mx-auto text-center">
            <Users className="mx-auto h-12 w-12 text-cyan mb-6" />
            <h2 className="text-[22px] font-bold text-white sm:text-[28px] lg:text-[34px]">
              Envie de travailler avec nous ?
            </h2>
            <p className="mt-6 text-[15px] text-white/70 leading-relaxed">
              Parlons de votre h&ocirc;tel, de votre visibilit&eacute; sur les
              moteurs IA, et de ce que nous pouvons accomplir ensemble. Premier
              &eacute;change sans engagement.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-cyan hover:bg-cyan-dark text-white font-semibold px-8 py-4 rounded-full text-base h-12">
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
