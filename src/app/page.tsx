import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResultsCarousel } from "@/components/results-carousel";
import {
  Search,
  BarChart3,
  FileText,
  Globe,
  TrendingUp,
  Shield,
  Users,
  MapPin,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Eye,
  MessageSquare,
  Bot,
  Code2,
  Mail,
  ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Agence GEO · Visibilité IA pour hôtels et entreprises",
  description: "Faites apparaître votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO à Nantes. Experts hôtellerie et PME.",
  openGraph: {
    title: "PulseoAI · Agence GEO, experts en référencement IA",
    description: "Faites apparaître votre entreprise sur ChatGPT, Claude et Gemini. PulseoAI, agence GEO à Nantes.",
    url: "https://www.pulseoai.fr",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – Agence GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseoAI · Agence GEO, experts en référencement IA",
    description: "Faites apparaître votre entreprise sur ChatGPT, Claude et Gemini.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
};

/* ─── Mini mockup components (HTML/CSS only, no images) ─── */

function MockupAIOverview() {
  return (
    <div className="w-full max-w-full sm:max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
      {/* Google search bar */}
      <div className="mb-3 flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2">
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-navy/30" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-[13px] sm:text-sm text-navy/70">meilleur h&ocirc;tel spa Nantes</span>
      </div>
      {/* AI Overview box */}
      <div className="mb-5 rounded-lg border border-cyan/30 bg-cyan/5 p-4">
        <div className="mb-3 flex items-center gap-1.5">
          <div className="flex size-4 items-center justify-center rounded-full bg-cyan">
            <Star className="size-2.5 text-white" />
          </div>
          <span className="text-xs font-semibold text-cyan">AI Overview</span>
        </div>
        <p className="text-[12px] leading-relaxed text-navy/70">
          Parmi les meilleurs h&ocirc;tels spa &agrave; Nantes,
          &laquo;&nbsp;<strong className="font-semibold text-cyan">Votre h&ocirc;tel</strong>&nbsp;&raquo; se
          distingue par son espace bien &ecirc;tre de 600&nbsp;m&sup2; avec hammam,
          sauna et piscine int&eacute;rieure chauff&eacute;e. Son restaurant
          Le Jardin propose une cuisine bistronomique...
        </p>
      </div>
      {/* Pushed down organic results */}
      <div className="space-y-3.5 opacity-40">
        <div>
          <p className="text-[11px] text-green-700">www.booking.com &rsaquo; nantes &rsaquo; spa</p>
          <p className="text-[12px] font-medium text-blue-700">Top 10 des h&ocirc;tels spa &agrave; Nantes</p>
          <p className="text-[10px] text-navy/50">D&eacute;couvrez notre s&eacute;lection des meilleurs h&ocirc;tels avec spa &agrave; Nantes. R&eacute;servez au meilleur prix...</p>
        </div>
        <div>
          <p className="text-[11px] text-green-700">www.tripadvisor.fr &rsaquo; nantes &rsaquo; spa</p>
          <p className="text-[12px] font-medium text-blue-700">H&ocirc;tels avec spa Nantes : les 8 meilleurs</p>
          <p className="text-[10px] text-navy/50">Comparez les prix et avis des h&ocirc;tels avec spa &agrave; Nantes...</p>
        </div>
        <div>
          <p className="text-[11px] text-green-700">www.expedia.fr &rsaquo; nantes &rsaquo; hotels</p>
          <p className="text-[12px] font-medium text-blue-700">Offres h&ocirc;tels spa Nantes, jusqu&apos;&agrave; 40%</p>
          <p className="text-[10px] text-navy/50">R&eacute;servez un h&ocirc;tel avec spa &agrave; Nantes. Annulation gratuite...</p>
        </div>
      </div>
      <p className="mt-4 text-center text-[10px] font-medium text-navy/30">Les r&eacute;sultats classiques sont pouss&eacute;s vers le bas</p>
    </div>
  );
}

function MockupAuditTable() {
  const rows = [
    { q: "h\u00f4tel spa Nantes", gpt: true, gem: false, score: 4 },
    { q: "restaurant Lyon centre", gpt: true, gem: true, score: 8 },
    { q: "meilleur coiffeur Paris", gpt: false, gem: false, score: 1 },
  ];
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-100 bg-white text-[11px]">
      <div className="border-b border-gray-100 bg-[#F8F9FA] px-3 py-2.5">
        <span className="text-[11px] font-semibold text-navy/70">Score de visibilit&eacute; IA</span>
      </div>
      {rows.map((r) => (
        <div key={r.q} className="grid grid-cols-4 gap-2 border-b border-gray-50 px-3 py-2 text-navy/70">
          <span className="truncate">{r.q}</span>
          <span className="text-center">{r.gpt ? <span className="text-green-500">&#10003;</span> : <span className="text-red-400">&#10007;</span>}</span>
          <span className="text-center">{r.gem ? <span className="text-green-500">&#10003;</span> : <span className="text-red-400">&#10007;</span>}</span>
          <div className="flex items-center justify-center gap-1">
            <div className="h-1.5 w-12 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full rounded-full bg-cyan" style={{ width: `${r.score * 10}%` }} />
            </div>
            <span className="text-[10px] font-bold">{r.score}/10</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockupArticle() {
  return (
    <div className="w-full rounded-lg border border-gray-100 bg-white p-4 text-[11px]">
      <div className="mb-2 h-2.5 w-[80%] rounded bg-navy/70" />
      <div className="mb-3 h-1.5 w-[60%] rounded bg-navy/20" />
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-sm bg-cyan" />
        <div className="h-2 w-24 rounded bg-navy/40" />
      </div>
      <div className="space-y-1 pl-3.5 mb-3">
        <div className="h-1.5 w-full rounded bg-gray-100" />
        <div className="h-1.5 w-[90%] rounded bg-gray-100" />
        <div className="h-1.5 w-[75%] rounded bg-gray-100" />
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-sm bg-cyan" />
        <div className="h-2 w-20 rounded bg-navy/40" />
      </div>
      <div className="space-y-1 pl-3.5">
        <div className="h-1.5 w-full rounded bg-gray-100" />
        <div className="h-1.5 w-[85%] rounded bg-gray-100" />
      </div>
    </div>
  );
}

function MockupJsonLd() {
  return (
    <div className="w-full rounded-lg bg-[#1e1e2e] p-4 font-mono text-[10px] leading-relaxed">
      <p><span className="text-gray-500">{"{"}</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;@type&quot;</span><span className="text-gray-400">: </span><span className="text-[#a6e3a1]">&quot;Hotel&quot;</span><span className="text-gray-500">,</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;name&quot;</span><span className="text-gray-400">: </span><span className="text-[#a6e3a1]">&quot;Mon H&ocirc;tel&quot;</span><span className="text-gray-500">,</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;starRating&quot;</span><span className="text-gray-400">: </span><span className="text-[#fab387]">4</span><span className="text-gray-500">,</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;amenity&quot;</span><span className="text-gray-400">: </span><span className="text-[#a6e3a1]">&quot;Spa&quot;</span></p>
      <p><span className="text-gray-500">{"}"}</span></p>
    </div>
  );
}

function MockupCitations() {
  const logos = [
    { name: "Google", color: "#4285F4" },
    { name: "Foursquare", color: "#F94877" },
    { name: "TripAdvisor", color: "#00AF87" },
    { name: "Yelp", color: "#D32323" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {logos.map((l) => (
        <div key={l.name} className="flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1.5 shadow-sm">
          <div className="size-3 rounded-full" style={{ background: l.color }} />
          <span className="text-[11px] font-medium text-navy/60">{l.name}</span>
        </div>
      ))}
    </div>
  );
}

function MockupSparkline() {
  return (
    <div className="w-full rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-end justify-between gap-0.5 h-16">
        {[15, 20, 18, 25, 30, 28, 35, 42, 48, 55, 62, 70].map((v, i) => (
          <div key={i} className="flex-1 rounded-t bg-cyan/70 transition-all" style={{ height: `${v}%` }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[9px] text-navy/30">
        <span>Jan</span><span>F&eacute;v</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
      </div>
      <p className="mt-1 text-center text-[10px] font-semibold text-cyan">+367 % de visibilit&eacute; IA</p>
    </div>
  );
}

/* ─── Timeline step component ─── */
function TimelineStep({ step, title, text, mockup, isLast }: { step: string; title: string; text: string; mockup: React.ReactNode; isLast: boolean }) {
  return (
    <div className="relative flex gap-6 pb-16 last:pb-0">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-cyan/20" />
      )}
      {/* Step circle */}
      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan text-sm font-bold text-white shadow-md shadow-cyan/20">
        {step}
      </div>
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-navy">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-navy/60">{text}</p>
        <div className="mt-4 max-w-xs">{mockup}</div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.pulseoai.fr" },
            ],
          }),
        }}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="hero-aurora bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-14 lg:py-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-2xl lg:flex-1">
              <h1 className="text-[28px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[52px]">
                <span className="text-navy">Vos concurrents apparaissent sur les IA. </span>
                <span className="text-cyan">Pas vous.</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-navy/60 sm:text-lg">
                Nous faisons appara&icirc;tre votre entreprise dans les r&eacute;ponses de ChatGPT, Gemini et Claude.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0 sm:divide-x sm:divide-navy/15">
                {[
                  { value: "2,8 Mds", label: "d\u2019utilisateurs ChatGPT par mois" },
                  { value: "80 %", label: "font confiance aux r\u00e9ponses IA" },
                  { value: "+527 %", label: "de trafic IA en 2025" },
                ].map(({ value, label }, i) => (
                  <div key={value} className={`${i > 0 ? "sm:pl-6" : ""} ${i < 2 ? "sm:pr-6" : ""}`}>
                    <span className="text-lg font-bold text-navy sm:text-[26px]">{value}</span>
                    <p className="text-xs text-navy/50 sm:text-sm">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto h-12 sm:h-11 cursor-pointer rounded-full bg-cyan px-7 text-[15px] font-semibold text-white hover:bg-cyan-dark" size="lg">
                    Obtenir mon audit GEO gratuit
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/geo-hotellerie" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto h-12 sm:h-11 cursor-pointer rounded-full border-navy/20 px-7 text-[15px] font-semibold text-navy hover:bg-navy/5" size="lg">
                    D&eacute;couvrir le GEO
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mockup ChatGPT */}
            <div className="lg:flex-1 flex justify-center lg:justify-end">
              <div className="w-full max-w-full sm:max-w-md rotate-0 sm:rotate-1 lg:rotate-2 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-lg">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#10a37f]">
                    <svg viewBox="0 0 24 24" className="size-5 text-white" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                  </div>
                  <span className="text-base font-semibold text-navy">ChatGPT</span>
                </div>
                <div className="flex justify-end mb-5">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#F4F4F4] px-5 py-3">
                    <p className="text-[14px] text-navy">Quel est le meilleur h&ocirc;tel avec spa &agrave; Nantes ?</p>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="text-[13px] leading-relaxed text-navy/80">
                    Je vous recommande le{" "}
                    <strong className="font-semibold text-cyan">Quintessia</strong>,
                    un h&ocirc;tel 4&nbsp;&eacute;toiles situ&eacute; &agrave; Orvault,
                    aux portes de Nantes. Il dispose d&apos;un spa de 600&nbsp;m&sup2;
                    avec hammam, sauna et piscine int&eacute;rieure chauff&eacute;e.
                    Son restaurant Le Jardin propose une cuisine bistronomique de saison...
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-navy/20 animate-pulse" />
                  <div className="size-2 rounded-full bg-navy/20 animate-pulse [animation-delay:150ms]" />
                  <div className="size-2 rounded-full bg-navy/20 animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ RESULTATS CLIENTS ═══════ */}
      <section className="overflow-x-hidden bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1100px] px-6 pt-24 pb-4 lg:pt-28">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">R&eacute;sultats clients</h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">Des r&eacute;sultats concrets, mesurables, sous accord de confidentialit&eacute;.</p>
          </div>
        </div>
        <div className="pb-24 pt-10 lg:pb-28">
          <ResultsCarousel />
        </div>
      </section>

      {/* ═══════ LE PROBLÈME ═══════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-24 lg:py-28">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="max-w-[500px] lg:flex-1">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">Le probl&egrave;me</span>
              <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">
                Vos clients ne cherchent plus sur Google comme avant
              </h2>
              <p className="mt-4 text-[15px] text-[#6B7280]">
                Aujourd&apos;hui, vos clients <span className="text-cyan">posent directement leurs questions aux IA</span>&nbsp;:
                &laquo;&nbsp;quel est le meilleur h&ocirc;tel spa &agrave; Nantes&nbsp;?&nbsp;&raquo;,
                &laquo;&nbsp;quel restaurant pour un d&icirc;ner d&apos;affaires &agrave; Paris&nbsp;?&nbsp;&raquo;.
              </p>
              <p className="mt-4 text-lg font-medium text-navy">
                Si votre entreprise n&apos;appara&icirc;t pas dans la r&eacute;ponse,
                c&apos;est <span className="text-cyan">votre concurrent qui r&eacute;cup&egrave;re le client</span>.
                Sans m&ecirc;me que le v&ocirc;tre visite votre site.
              </p>
              <div className="mt-10 grid gap-3 grid-cols-1 sm:grid-cols-3">
                {[
                  { stat: "25 %", label: "des recherches Google affichent des r\u00e9ponses IA", icon: Eye },
                  { stat: "+527 %", label: "de trafic IA en un an", icon: TrendingUp },
                  { stat: "80 %", label: "font confiance aux r\u00e9ponses IA", icon: Star },
                ].map(({ stat, label, icon: Icon }) => (
                  <div key={stat} className="rounded-xl bg-[#F8F9FA] p-5 text-center">
                    <Icon className="mx-auto mb-2 size-5 text-cyan" />
                    <p className="text-2xl font-bold text-navy">{stat}</p>
                    <p className="mt-1 text-xs text-navy/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Visuals */}
            <div className="lg:flex-1 flex flex-col items-center gap-6">
              <MockupAIOverview />
              {/* Mockup: IA ranking result */}
              <div className="w-full max-w-full sm:max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex size-4 items-center justify-center rounded-full bg-[#10a37f]">
                    <Star className="size-3 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-navy/60">R&eacute;ponse IA : &laquo; Meilleur h&ocirc;tel spa Nantes &raquo;</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg bg-cyan/10 border border-cyan/20 px-3 py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cyan text-[10px] font-bold text-white">1</span>
                    <div>
                      <p className="text-sm font-semibold text-cyan">Votre entreprise</p>
                      <p className="text-[10px] text-navy/50">Recommand&eacute;e en premier par l&apos;IA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-navy/40">2</span>
                    <div><p className="text-sm text-navy/40">Concurrent A</p></div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-navy/40">3</span>
                    <div><p className="text-sm text-navy/40">Concurrent B</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ NOTRE SOLUTION ═══════ */}
      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1100px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">Notre solution</span>
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">Nous nous occupons de tout pour <span className="text-cyan">vous rendre visible</span></h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">
              Vous continuez &agrave; g&eacute;rer votre business. Nous nous chargeons de faire appara&icirc;tre votre entreprise dans les r&eacute;ponses des IA.
            </p>
          </div>

          <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg">
              <div className="mb-4"><MockupAuditTable /></div>
              <h3 className="text-base font-semibold text-navy">Nous analysons votre visibilit&eacute;</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">Nous testons votre entreprise sur ChatGPT, Gemini et Claude. Vous recevez un rapport clair avec <span className="text-cyan">votre score</span> et celui de vos concurrents.</p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg">
              <div className="mb-4"><MockupArticle /></div>
              <h3 className="text-base font-semibold text-navy">Nous cr&eacute;ons le bon contenu</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">Nous r&eacute;digeons et optimisons les contenus de votre site pour que les IA les comprennent et <span className="text-cyan">les recommandent &agrave; vos clients</span>.</p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg">
              <div className="mb-4"><MockupJsonLd /></div>
              <h3 className="text-base font-semibold text-navy">Nous optimisons votre site</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">Nous mettons en place les &eacute;l&eacute;ments techniques qui permettent aux moteurs IA de <span className="text-cyan">lire et de citer</span> votre site correctement.</p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg">
              <div className="mb-4"><MockupCitations /></div>
              <h3 className="text-base font-semibold text-navy">Nous boostons votre r&eacute;putation en ligne</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">Nous optimisons vos fiches Google, TripAdvisor et tous les annuaires que les IA consultent pour faire <span className="text-cyan">leurs recommandations</span>.</p>
            </div>
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-lg">
              <div className="mb-4"><MockupSparkline /></div>
              <h3 className="text-base font-semibold text-navy">Nous suivons vos r&eacute;sultats chaque mois</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">Chaque mois, vous recevez un rapport avec <span className="text-cyan">l&apos;&eacute;volution de votre visibilit&eacute; IA</span>, les progr&egrave;s r&eacute;alis&eacute;s et les prochaines actions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ POURQUOI PULSEOAI ═══════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">Pourquoi PulseoAI</span>
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">L&apos;agence GEO qui conna&icirc;t votre secteur</h2>
          </div>

          <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {([
              { icon: Shield, title: "Experts en h\u00f4tellerie", desc: <>L&apos;h&ocirc;tellerie est notre <span className="text-cyan">c&oelig;ur de m&eacute;tier</span>. Nous connaissons vos enjeux, vos concurrents et ce qui fait qu&apos;un voyageur r&eacute;serve chez vous plut&ocirc;t qu&apos;ailleurs.</> },
              { icon: Target, title: "50+ entreprises analys\u00e9es", desc: <>Nous avons d&eacute;j&agrave; analys&eacute; plus de 50 entreprises. Nous savons exactement <span className="text-cyan">ce qui fonctionne</span> pour appara&icirc;tre sur les moteurs IA.</> },
              { icon: BarChart3, title: "R\u00e9sultats mesurables", desc: <>Pas de promesses en l&apos;air. Nous vous montrons vos scores <span className="text-cyan">avant et apr&egrave;s</span>, noir sur blanc, chaque mois.</> },
              { icon: MapPin, title: "Nantes et partout ailleurs", desc: <>Nous sommes bas&eacute;s &agrave; Nantes mais nous travaillons <span className="text-cyan">partout</span>. Tout se fait &agrave; distance, en visio et par email.</> },
              { icon: Users, title: "Approche p\u00e9dagogique", desc: <>Nous vous expliquons tout <span className="text-cyan">simplement</span>. Pas de jargon, pas de blabla technique. Vous comprenez ce que nous faisons et pourquoi.</> },
              { icon: Globe, title: "Tous secteurs", desc: <>H&ocirc;tels, restaurants, commerces, services, PME. Nous adaptons notre m&eacute;thode &agrave; <span className="text-cyan">votre m&eacute;tier</span>.</> },
            ] as { icon: React.ElementType; title: string; desc: React.ReactNode }[]).map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-transparent bg-[#F8F9FA] p-8 transition-all hover:border-l-[3px] hover:border-l-cyan hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-cyan/10">
                  <Icon className="size-5 text-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#6B7280]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMMENT ÇA MARCHE ═══════ */}
      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1100px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-cyan">Processus</span>
            <h2 className="text-[22px] font-bold text-navy sm:text-[28px] lg:text-[34px]">Comment &ccedil;a marche</h2>
            <p className="mt-4 text-[15px] text-[#6B7280]">Quatre &eacute;tapes, z&eacute;ro prise de t&ecirc;te.</p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <TimelineStep
              step="01"
              title="Vous nous contactez"
              text="Un simple email ou formulaire suffit. Dites nous le nom de votre entreprise et votre site web."
              isLast={false}
              mockup={
                <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
                  <div className="flex size-8 items-center justify-center rounded-full bg-cyan/10"><Mail className="size-4 text-cyan" /></div>
                  <div>
                    <p className="text-xs font-semibold text-navy">contact@pulseoai.fr</p>
                    <p className="text-[10px] text-navy/40">Nous vous r&eacute;pondons sous 24h</p>
                  </div>
                </div>
              }
            />
            <TimelineStep
              step="02"
              title="Nous testons votre visibilit&eacute; gratuitement"
              text="Nous posons les questions que vos clients posent aux IA et nous v&eacute;rifions si vous apparaissez. Vous recevez votre rapport en 48h."
              isLast={false}
              mockup={
                <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
                  <div className="flex size-8 items-center justify-center rounded-full bg-cyan/10"><Search className="size-4 text-cyan" /></div>
                  <div>
                    <p className="text-xs font-semibold text-navy">Rapport de visibilit&eacute; IA</p>
                    <p className="text-[10px] text-navy/40">Envoy&eacute; sous 48h, gratuit et sans engagement</p>
                  </div>
                </div>
              }
            />
            <TimelineStep
              step="03"
              title="Nous mettons en place la strat&eacute;gie"
              text="Contenu, technique, r&eacute;putation en ligne. Nous nous occupons de tout, vous n&apos;avez rien &agrave; faire."
              isLast={false}
              mockup={
                <div className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3 shadow-sm">
                  <div className="flex size-8 items-center justify-center rounded-full bg-cyan/10"><Zap className="size-4 text-cyan" /></div>
                  <div>
                    <p className="text-xs font-semibold text-navy">Tout est pris en charge</p>
                    <p className="text-[10px] text-navy/40">Vous continuez &agrave; g&eacute;rer votre business</p>
                  </div>
                </div>
              }
            />
            <TimelineStep
              step="04"
              title="Vous recevez vos r&eacute;sultats chaque mois"
              text="Un rapport clair avec vos scores, votre progression et les prochaines actions. Vous voyez exactement ce que nous faisons pour vous."
              isLast={true}
              mockup={<MockupSparkline />}
            />
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="bg-navy">
        <div className="mx-auto max-w-[1100px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="text-[22px] font-bold text-white sm:text-[28px] lg:text-4xl">
              Pr&ecirc;t &agrave; appara&icirc;tre sur ChatGPT&nbsp;?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] text-white/50">
              Demandez votre audit gratuit. Nous testons votre entreprise en 48h et nous vous disons exactement o&ugrave; vous en &ecirc;tes.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="h-12 cursor-pointer rounded-full bg-cyan px-8 text-base font-semibold text-white hover:bg-cyan-dark" size="lg">
                  Recevoir mon audit gratuit
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
