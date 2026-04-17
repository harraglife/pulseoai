import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ResultsCarousel } from "@/components/results-carousel";
import { BrowserWindow } from "@/components/browser-window";
import { SectionDivider } from "@/components/section-divider";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  Search,
  BarChart3,
  Globe,
  TrendingUp,
  Shield,
  Users,
  MapPin,
  Zap,
  Star,
  Target,
  Eye,
  Mail,
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

/* ─── Mini mockup components (light-themed) ─── */

function MockupAIOverview() {
  return (
    <BrowserWindow
      url="google.com/search?q=meilleur+hôtel+spa+Nantes"
      label="Google"
      className="w-full max-w-full sm:max-w-sm"
      contentClassName="p-4"
    >
      {/* Google search bar */}
      <div className="mb-3 flex items-center gap-2 rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-3 py-2">
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="text-[13px] sm:text-sm text-slate-800">meilleur h&ocirc;tel spa Nantes</span>
      </div>
      {/* AI Overview box */}
      <div className="mb-5 rounded-lg border border-[#2547D0]/25 bg-[rgba(37,71,208,0.05)] p-4">
        <div className="mb-3 flex items-center gap-1.5">
          <div className="flex size-4 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2547D0_0%,#00C8E0_100%)]">
            <Star className="size-2.5 text-white" />
          </div>
          <span className="text-xs font-semibold text-[#2547D0]">AI Overview</span>
        </div>
        <p className="text-[12px] leading-relaxed text-slate-700">
          Parmi les meilleurs h&ocirc;tels spa &agrave; Nantes,
          &laquo;&nbsp;<strong className="font-semibold text-[#2547D0]">Votre h&ocirc;tel</strong>&nbsp;&raquo; se
          distingue par son espace bien &ecirc;tre de 600&nbsp;m&sup2; avec hammam,
          sauna et piscine int&eacute;rieure chauff&eacute;e. Son restaurant
          Le Jardin propose une cuisine bistronomique...
        </p>
      </div>
      {/* Pushed down organic results */}
      <div className="space-y-3.5 opacity-50">
        <div>
          <p className="text-[11px] text-emerald-700">www.booking.com &rsaquo; nantes &rsaquo; spa</p>
          <p className="text-[12px] font-medium text-blue-700">Top 10 des h&ocirc;tels spa &agrave; Nantes</p>
          <p className="text-[10px] text-slate-500">D&eacute;couvrez notre s&eacute;lection des meilleurs h&ocirc;tels avec spa &agrave; Nantes. R&eacute;servez au meilleur prix...</p>
        </div>
        <div>
          <p className="text-[11px] text-emerald-700">www.tripadvisor.fr &rsaquo; nantes &rsaquo; spa</p>
          <p className="text-[12px] font-medium text-blue-700">H&ocirc;tels avec spa Nantes : les 8 meilleurs</p>
          <p className="text-[10px] text-slate-500">Comparez les prix et avis des h&ocirc;tels avec spa &agrave; Nantes...</p>
        </div>
        <div>
          <p className="text-[11px] text-emerald-700">www.expedia.fr &rsaquo; nantes &rsaquo; hotels</p>
          <p className="text-[12px] font-medium text-blue-700">Offres h&ocirc;tels spa Nantes, jusqu&apos;&agrave; 40%</p>
          <p className="text-[10px] text-slate-500">R&eacute;servez un h&ocirc;tel avec spa &agrave; Nantes. Annulation gratuite...</p>
        </div>
      </div>
      <p className="mt-4 text-center text-[10px] font-medium text-slate-500">Les r&eacute;sultats classiques sont pouss&eacute;s vers le bas</p>
    </BrowserWindow>
  );
}

function MockupAuditTable() {
  const rows = [
    { q: "h\u00f4tel spa Nantes", gpt: true, gem: false, score: 4 },
    { q: "restaurant Lyon centre", gpt: true, gem: true, score: 8 },
    { q: "meilleur coiffeur Paris", gpt: false, gem: false, score: 1 },
  ];
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[rgba(15,23,42,0.08)] bg-white text-[11px] shadow-[0_1px_2px_0_rgba(15,23,42,0.04)]">
      <div className="border-b border-[rgba(15,23,42,0.06)] bg-[#FAFBFC] px-3 py-2.5">
        <span className="text-[11px] font-semibold text-slate-700">Score de visibilit&eacute; IA</span>
      </div>
      {rows.map((r) => (
        <div key={r.q} className="grid grid-cols-4 gap-2 border-b border-[rgba(15,23,42,0.04)] px-3 py-2 text-slate-600 last:border-b-0">
          <span className="truncate">{r.q}</span>
          <span className="text-center">{r.gpt ? <span className="text-emerald-600">&#10003;</span> : <span className="text-rose-500">&#10007;</span>}</span>
          <span className="text-center">{r.gem ? <span className="text-emerald-600">&#10003;</span> : <span className="text-rose-500">&#10007;</span>}</span>
          <div className="flex items-center justify-center gap-1">
            <div className="h-1.5 w-12 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#00C8E0_0%,#2547D0_100%)]"
                style={{ width: `${r.score * 10}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-slate-900">{r.score}/10</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockupArticle() {
  return (
    <div className="w-full rounded-lg border border-[rgba(15,23,42,0.08)] bg-white p-4 text-[11px] shadow-[0_1px_2px_0_rgba(15,23,42,0.04)]">
      <div className="mb-2 h-2.5 w-[80%] rounded bg-slate-800" />
      <div className="mb-3 h-1.5 w-[60%] rounded bg-slate-300" />
      <div className="mb-2 flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-sm bg-[#2547D0]" />
        <div className="h-2 w-24 rounded bg-slate-400" />
      </div>
      <div className="space-y-1 pl-3.5 mb-3">
        <div className="h-1.5 w-full rounded bg-slate-200" />
        <div className="h-1.5 w-[90%] rounded bg-slate-200" />
        <div className="h-1.5 w-[75%] rounded bg-slate-200" />
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-sm bg-[#2547D0]" />
        <div className="h-2 w-20 rounded bg-slate-400" />
      </div>
      <div className="space-y-1 pl-3.5">
        <div className="h-1.5 w-full rounded bg-slate-200" />
        <div className="h-1.5 w-[85%] rounded bg-slate-200" />
      </div>
    </div>
  );
}

function MockupJsonLd() {
  return (
    <div className="w-full rounded-lg border border-slate-800 bg-[#0B0F1E] p-4 font-mono text-[10px] leading-relaxed shadow-[0_8px_24px_-8px_rgba(15,23,42,0.40)]">
      <p><span className="text-white/40">{"{"}</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;@type&quot;</span><span className="text-white/50">: </span><span className="text-[#a6e3a1]">&quot;Hotel&quot;</span><span className="text-white/40">,</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;name&quot;</span><span className="text-white/50">: </span><span className="text-[#a6e3a1]">&quot;Mon H&ocirc;tel&quot;</span><span className="text-white/40">,</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;starRating&quot;</span><span className="text-white/50">: </span><span className="text-[#fab387]">4</span><span className="text-white/40">,</span></p>
      <p className="pl-3"><span className="text-[#89b4fa]">&quot;amenity&quot;</span><span className="text-white/50">: </span><span className="text-[#a6e3a1]">&quot;Spa&quot;</span></p>
      <p><span className="text-white/40">{"}"}</span></p>
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
        <div
          key={l.name}
          className="flex items-center gap-1.5 rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-3 py-1.5 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)]"
        >
          <div className="size-3 rounded-full" style={{ background: l.color, boxShadow: `0 0 12px -2px ${l.color}` }} />
          <span className="text-[11px] font-medium text-slate-700">{l.name}</span>
        </div>
      ))}
    </div>
  );
}

function MockupSparkline() {
  return (
    <div className="w-full rounded-lg border border-[rgba(15,23,42,0.08)] bg-white p-4 shadow-[0_1px_2px_0_rgba(15,23,42,0.04)]">
      <div className="flex items-end justify-between gap-0.5 h-16">
        {[15, 20, 18, 25, 30, 28, 35, 42, 48, 55, 62, 70].map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-[linear-gradient(180deg,#00C8E0_0%,#2547D0_100%)] transition-all"
            style={{ height: `${v}%`, boxShadow: "0 0 8px -2px rgba(37,71,208,0.30)" }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[9px] text-slate-400">
        <span>Jan</span><span>F&eacute;v</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
      </div>
      <p className="mt-1 text-center text-[10px] font-semibold gradient-word">+367 % de visibilit&eacute; IA</p>
    </div>
  );
}

/* ─── Timeline step component ─── */
function TimelineStep({ step, title, text, mockup, isLast }: { step: string; title: string; text: string; mockup: React.ReactNode; isLast: boolean }) {
  return (
    <div className="relative flex gap-6 pb-16 last:pb-0">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-px bg-[linear-gradient(180deg,rgba(37,71,208,0.35)_0%,rgba(37,71,208,0.05)_100%)]" />
      )}
      {/* Step circle */}
      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2547D0_0%,#00C8E0_100%)] text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(37,71,208,0.55),0_0_0_4px_rgba(37,71,208,0.08)]">
        {step}
      </div>
      {/* Content */}
      <div className="flex-1">
        <h3 className="font-heading text-lg font-semibold text-[color:var(--text-primary)]">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">{text}</p>
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
      <section className="hero-aurora relative">
        {/* Faint grid behind aurora, masked to the top */}
        <div className="grid-bg absolute inset-0 z-0 opacity-60" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1180px] px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-2xl lg:flex-1">
              <h1 className="font-heading text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-primary)] sm:text-[48px] lg:text-[60px]">
                <span>Vos concurrents apparaissent sur les IA. </span>
                <span className="gradient-word">Pas vous.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[color:var(--text-secondary)] sm:text-[19px]">
                Nous faisons appara&icirc;tre votre entreprise dans les r&eacute;ponses de ChatGPT, Gemini et Claude.
              </p>
              <div className="mt-10 flex flex-col gap-0 sm:flex-row sm:items-center sm:gap-0 sm:divide-x sm:divide-[rgba(15,23,42,0.08)]">
                {[
                  { value: "2,8 Mds", label: "d\u2019utilisateurs ChatGPT par mois" },
                  { value: "80 %", label: "font confiance aux r\u00e9ponses IA" },
                  { value: "+527 %", label: "de trafic IA en 2025" },
                ].map(({ value, label }, i) => (
                  <div
                    key={value}
                    className={`py-3 sm:py-0 ${i > 0 ? "sm:pl-6" : ""} ${i < 2 ? "sm:pr-6" : ""} border-b border-[rgba(15,23,42,0.06)] sm:border-b-0 last:border-b-0`}
                  >
                    <AnimatedCounter
                      value={value}
                      className="block font-heading text-[22px] font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-[28px]"
                    />
                    <p className="mt-0.5 text-xs text-[color:var(--text-tertiary)] sm:text-[13px]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="cta" size="cta" className="w-full sm:w-auto">
                    Obtenir mon audit GEO gratuit
                    <svg viewBox="0 0 24 24" className="ml-2 size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Button>
                </Link>
                <Link href="/geo-hotellerie" className="w-full sm:w-auto">
                  <Button variant="cta-ghost" size="cta" className="w-full sm:w-auto">
                    D&eacute;couvrir le GEO
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mockup ChatGPT with 3D tilt + reflection */}
            <div className="lg:flex-1 flex justify-center lg:justify-end [perspective:1400px]">
              <div className="relative w-full max-w-full sm:max-w-md [transform-style:preserve-3d] lg:[transform:rotateY(-6deg)_rotateX(3deg)]">
                {/* Soft glow behind the card */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-[24px] bg-[radial-gradient(ellipse_at_center,rgba(37,71,208,0.22)_0%,transparent_70%)] blur-2xl"
                />
                <BrowserWindow
                  url="chatgpt.com"
                  label="ChatGPT"
                  labelIcon={
                    <div className="flex size-4 items-center justify-center rounded-full bg-[#10a37f]">
                      <svg viewBox="0 0 24 24" className="size-3 text-white" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/></svg>
                    </div>
                  }
                  className="w-full"
                  contentClassName="p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="flex size-8 items-center justify-center rounded-full bg-[#10a37f]">
                      <svg viewBox="0 0 24 24" className="size-5 text-white" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                    </div>
                    <span className="text-base font-semibold text-[color:var(--text-primary)]">ChatGPT</span>
                  </div>
                  <div className="flex justify-end mb-5">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#F3F4F8] border border-[rgba(15,23,42,0.06)] px-5 py-3">
                      <p className="text-[14px] text-[color:var(--text-primary)]">Quel est le meilleur h&ocirc;tel avec spa &agrave; Nantes ?</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="text-[13px] leading-relaxed text-slate-700">
                      Je vous recommande le{" "}
                      <strong className="font-semibold text-[#2547D0]">Quintessia</strong>,
                      un h&ocirc;tel 4&nbsp;&eacute;toiles situ&eacute; &agrave; Orvault,
                      aux portes de Nantes. Il dispose d&apos;un spa de 600&nbsp;m&sup2;
                      avec hammam, sauna et piscine int&eacute;rieure chauff&eacute;e.
                      Son restaurant Le Jardin propose une cuisine bistronomique de saison...
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-slate-300 animate-pulse" />
                    <div className="size-2 rounded-full bg-slate-300 animate-pulse [animation-delay:150ms]" />
                    <div className="size-2 rounded-full bg-slate-300 animate-pulse [animation-delay:300ms]" />
                  </div>
                </BrowserWindow>
              </div>
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* ═══════ RESULTATS CLIENTS ═══════ */}
      <section className="overflow-x-hidden">
        <div className="mx-auto max-w-[1180px] px-6 pt-24 pb-4 lg:pt-28">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="font-heading text-[26px] font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-[32px] lg:text-[40px]">R&eacute;sultats clients</h2>
            <p className="mt-4 text-[15px] text-[color:var(--text-secondary)]">Des r&eacute;sultats concrets, mesurables, sous accord de confidentialit&eacute;.</p>
          </div>
        </div>
        <div className="pb-24 pt-10 lg:pb-28">
          <ResultsCarousel />
        </div>
        <SectionDivider />
      </section>

      {/* ═══════ LE PROBLÈME ═══════ */}
      <section className="section-gradient">
        <div className="mx-auto max-w-[1180px] px-6 py-24 lg:py-28">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="max-w-[500px] lg:flex-1">
              <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2547D0]">Le probl&egrave;me</span>
              <h2 className="font-heading text-[26px] font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-[32px] lg:text-[40px]">
                Vos clients ne cherchent plus sur Google comme avant
              </h2>
              <p className="mt-4 text-[15px] text-[color:var(--text-secondary)]">
                Aujourd&apos;hui, vos clients <span className="text-[#2547D0] font-medium">posent directement leurs questions aux IA</span>&nbsp;:
                &laquo;&nbsp;quel est le meilleur h&ocirc;tel spa &agrave; Nantes&nbsp;?&nbsp;&raquo;,
                &laquo;&nbsp;quel restaurant pour un d&icirc;ner d&apos;affaires &agrave; Paris&nbsp;?&nbsp;&raquo;.
              </p>
              <p className="mt-4 text-lg font-medium text-[color:var(--text-primary)]">
                Si votre entreprise n&apos;appara&icirc;t pas dans la r&eacute;ponse,
                c&apos;est <span className="text-[#2547D0]">votre concurrent qui r&eacute;cup&egrave;re le client</span>.
                Sans m&ecirc;me que le v&ocirc;tre visite votre site.
              </p>
              <div className="mt-10 grid gap-3 grid-cols-1 sm:grid-cols-3">
                {[
                  { stat: "25 %", label: "des recherches Google affichent des r\u00e9ponses IA", icon: Eye },
                  { stat: "+527 %", label: "de trafic IA en un an", icon: TrendingUp },
                  { stat: "80 %", label: "font confiance aux r\u00e9ponses IA", icon: Star },
                ].map(({ stat, label, icon: Icon }) => (
                  <div key={stat} className="glass rounded-xl p-5 text-center">
                    <Icon className="mx-auto mb-2 size-5 text-[#2547D0]" />
                    <AnimatedCounter
                      value={stat}
                      className="block font-heading text-2xl font-semibold text-[color:var(--text-primary)]"
                    />
                    <p className="mt-1 text-xs text-[color:var(--text-tertiary)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Visuals */}
            <div className="lg:flex-1 flex flex-col items-center gap-6">
              <MockupAIOverview />
              {/* Mockup: IA ranking result */}
              <div className="glass w-full max-w-full sm:max-w-sm rounded-xl p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex size-4 items-center justify-center rounded-full bg-[#10a37f]">
                    <Star className="size-3 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[color:var(--text-secondary)]">R&eacute;ponse IA : &laquo; Meilleur h&ocirc;tel spa Nantes &raquo;</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-lg border border-[#2547D0]/25 bg-[rgba(37,71,208,0.06)] px-3 py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2547D0_0%,#00C8E0_100%)] text-[10px] font-bold text-white shadow-[0_4px_12px_-2px_rgba(37,71,208,0.60)]">1</span>
                    <div>
                      <p className="text-sm font-semibold text-[#2547D0]">Votre entreprise</p>
                      <p className="text-[10px] text-[color:var(--text-tertiary)]">Recommand&eacute;e en premier par l&apos;IA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-400">2</span>
                    <div><p className="text-sm text-slate-400">Concurrent A</p></div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-400">3</span>
                    <div><p className="text-sm text-slate-400">Concurrent B</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* ═══════ NOTRE SOLUTION ═══════ */}
      <section>
        <div className="mx-auto max-w-[1180px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2547D0]">Notre solution</span>
            <h2 className="font-heading text-[26px] font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-[32px] lg:text-[40px]">
              Nous nous occupons de tout pour <span className="gradient-word">vous rendre visible</span>
            </h2>
            <p className="mt-4 text-[15px] text-[color:var(--text-secondary)]">
              Vous continuez &agrave; g&eacute;rer votre business. Nous nous chargeons de faire appara&icirc;tre votre entreprise dans les r&eacute;ponses des IA.
            </p>
          </div>

          <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <Card className="p-7">
              <div className="mb-4"><MockupAuditTable /></div>
              <h3 className="font-heading text-base font-semibold text-[color:var(--text-primary)]">Nous analysons votre visibilit&eacute;</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">Nous testons votre entreprise sur ChatGPT, Gemini et Claude. Vous recevez un rapport clair avec <span className="text-[#2547D0] font-medium">votre score</span> et celui de vos concurrents.</p>
            </Card>
            <Card className="p-7">
              <div className="mb-4"><MockupArticle /></div>
              <h3 className="font-heading text-base font-semibold text-[color:var(--text-primary)]">Nous cr&eacute;ons le bon contenu</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">Nous r&eacute;digeons et optimisons les contenus de votre site pour que les IA les comprennent et <span className="text-[#2547D0] font-medium">les recommandent &agrave; vos clients</span>.</p>
            </Card>
            <Card className="p-7">
              <div className="mb-4"><MockupJsonLd /></div>
              <h3 className="font-heading text-base font-semibold text-[color:var(--text-primary)]">Nous optimisons votre site</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">Nous mettons en place les &eacute;l&eacute;ments techniques qui permettent aux moteurs IA de <span className="text-[#2547D0] font-medium">lire et de citer</span> votre site correctement.</p>
            </Card>
            <Card className="p-7">
              <div className="mb-4"><MockupCitations /></div>
              <h3 className="font-heading text-base font-semibold text-[color:var(--text-primary)]">Nous boostons votre r&eacute;putation en ligne</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">Nous optimisons vos fiches Google, TripAdvisor et tous les annuaires que les IA consultent pour faire <span className="text-[#2547D0] font-medium">leurs recommandations</span>.</p>
            </Card>
            <Card className="p-7">
              <div className="mb-4"><MockupSparkline /></div>
              <h3 className="font-heading text-base font-semibold text-[color:var(--text-primary)]">Nous suivons vos r&eacute;sultats chaque mois</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">Chaque mois, vous recevez un rapport avec <span className="text-[#2547D0] font-medium">l&apos;&eacute;volution de votre visibilit&eacute; IA</span>, les progr&egrave;s r&eacute;alis&eacute;s et les prochaines actions.</p>
            </Card>
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* ═══════ POURQUOI PULSEOAI ═══════ */}
      <section className="section-gradient">
        <div className="mx-auto max-w-[1180px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2547D0]">Pourquoi PulseoAI</span>
            <h2 className="font-heading text-[26px] font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-[32px] lg:text-[40px]">L&apos;agence GEO qui conna&icirc;t votre secteur</h2>
          </div>

          <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {([
              { icon: Shield, title: "Experts en h\u00f4tellerie", desc: <>L&apos;h&ocirc;tellerie est notre <span className="text-[#2547D0] font-medium">c&oelig;ur de m&eacute;tier</span>. Nous connaissons vos enjeux, vos concurrents et ce qui fait qu&apos;un voyageur r&eacute;serve chez vous plut&ocirc;t qu&apos;ailleurs.</> },
              { icon: Target, title: "50+ entreprises analys\u00e9es", desc: <>Nous avons d&eacute;j&agrave; analys&eacute; plus de 50 entreprises. Nous savons exactement <span className="text-[#2547D0] font-medium">ce qui fonctionne</span> pour appara&icirc;tre sur les moteurs IA.</> },
              { icon: BarChart3, title: "R\u00e9sultats mesurables", desc: <>Pas de promesses en l&apos;air. Nous vous montrons vos scores <span className="text-[#2547D0] font-medium">avant et apr&egrave;s</span>, noir sur blanc, chaque mois.</> },
              { icon: MapPin, title: "Nantes et partout ailleurs", desc: <>Nous sommes bas&eacute;s &agrave; Nantes mais nous travaillons <span className="text-[#2547D0] font-medium">partout</span>. Tout se fait &agrave; distance, en visio et par email.</> },
              { icon: Users, title: "Approche p\u00e9dagogique", desc: <>Nous vous expliquons tout <span className="text-[#2547D0] font-medium">simplement</span>. Pas de jargon, pas de blabla technique. Vous comprenez ce que nous faisons et pourquoi.</> },
              { icon: Globe, title: "Tous secteurs", desc: <>H&ocirc;tels, restaurants, commerces, services, PME. Nous adaptons notre m&eacute;thode &agrave; <span className="text-[#2547D0] font-medium">votre m&eacute;tier</span>.</> },
            ] as { icon: React.ElementType; title: string; desc: React.ReactNode }[]).map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-8">
                <CardContent className="p-0">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(37,71,208,0.10)_0%,rgba(0,200,224,0.10)_100%)] border border-[#2547D0]/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]">
                    <Icon className="size-5 text-[#2547D0]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[color:var(--text-primary)]">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionDivider />
      </section>

      {/* ═══════ COMMENT ÇA MARCHE ═══════ */}
      <section>
        <div className="mx-auto max-w-[1180px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2547D0]">Processus</span>
            <h2 className="font-heading text-[26px] font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-[32px] lg:text-[40px]">Comment &ccedil;a marche</h2>
            <p className="mt-4 text-[15px] text-[color:var(--text-secondary)]">Quatre &eacute;tapes, z&eacute;ro prise de t&ecirc;te.</p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <TimelineStep
              step="01"
              title="Vous nous contactez"
              text="Un simple email ou formulaire suffit. Dites nous le nom de votre entreprise et votre site web."
              isLast={false}
              mockup={
                <div className="glass flex items-center gap-3 rounded-lg px-4 py-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[rgba(37,71,208,0.08)] border border-[#2547D0]/20"><Mail className="size-4 text-[#2547D0]" /></div>
                  <div>
                    <p className="text-xs font-semibold text-[color:var(--text-primary)]">contact@pulseoai.fr</p>
                    <p className="text-[10px] text-[color:var(--text-tertiary)]">Nous vous r&eacute;pondons sous 24h</p>
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
                <div className="glass flex items-center gap-3 rounded-lg px-4 py-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[rgba(37,71,208,0.08)] border border-[#2547D0]/20"><Search className="size-4 text-[#2547D0]" /></div>
                  <div>
                    <p className="text-xs font-semibold text-[color:var(--text-primary)]">Rapport de visibilit&eacute; IA</p>
                    <p className="text-[10px] text-[color:var(--text-tertiary)]">Envoy&eacute; sous 48h, gratuit et sans engagement</p>
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
                <div className="glass flex items-center gap-3 rounded-lg px-4 py-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[rgba(37,71,208,0.08)] border border-[#2547D0]/20"><Zap className="size-4 text-[#2547D0]" /></div>
                  <div>
                    <p className="text-xs font-semibold text-[color:var(--text-primary)]">Tout est pris en charge</p>
                    <p className="text-[10px] text-[color:var(--text-tertiary)]">Vous continuez &agrave; g&eacute;rer votre business</p>
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
      <section className="section-gradient-strong">
        <div className="mx-auto max-w-[1180px] px-6 py-24 lg:py-28">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="font-heading text-[28px] font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-[34px] lg:text-[44px]">
              Pr&ecirc;t &agrave; appara&icirc;tre sur ChatGPT&nbsp;?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] text-[color:var(--text-secondary)]">
              Demandez votre audit gratuit. Nous testons votre entreprise en 48h et nous vous disons exactement o&ugrave; vous en &ecirc;tes.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button variant="cta" size="cta" className="px-8">
                  Recevoir mon audit gratuit
                  <svg viewBox="0 0 24 24" className="ml-2 size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
