"use client";

import { useEffect, useRef, useState } from "react";

const results = [
  {
    name: "CABINET D\u2019AVOCATS",
    nda: true,
    image: "/clients/avocats.png",
    description:
      "Positionnement GEO d\u00e9marr\u00e9 en janvier 2026. L\u2019objectif : appara\u00eetre dans les r\u00e9ponses de ChatGPT sur les requ\u00eates cl\u00e9s du droit p\u00e9nal \u00e0 Paris.",
    stats: [
      { value: "N\u00b01", label: "sur ChatGPT" },
      { value: "6 mois", label: "pour y arriver" },
      { value: "+40%", label: "de demandes entrantes" },
    ],
  },
  {
    name: "H\u00d4TEL 3 \u00c9TOILES PARIS",
    nda: true,
    image: "/clients/best-western.png",
    description:
      "Accompagnement GEO d\u00e9marr\u00e9 en f\u00e9vrier 2026. Audit complet, optimisation des fiches, contenu structur\u00e9 et strat\u00e9gie de citations.",
    stats: [
      { value: "+15", label: "r\u00e9servations directes / mois" },
      { value: "+22%", label: "de trafic organique" },
      { value: "3 mois", label: "pour les premiers r\u00e9sultats" },
    ],
  },
  {
    name: "H\u00d4TEL 5 \u00c9TOILES NANTES",
    nda: true,
    image: "/clients/maubreil.png",
    description:
      "Strat\u00e9gie GEO compl\u00e8te pour un \u00e9tablissement premium. Objectif : dominer les requ\u00eates haut de gamme sur les moteurs IA.",
    stats: [
      { value: "90%", label: "des requ\u00eates cit\u00e9es sur Gemini" },
      { value: "Top 3", label: "sur ChatGPT en 4 mois" },
      { value: "+18%", label: "de r\u00e9servations directes" },
    ],
  },
  {
    name: "H\u00d4TEL 4 \u00c9TOILES NANTES",
    nda: true,
    image: "/clients/sozo.png",
    description:
      "Optimisation technique et strat\u00e9gie de contenu GEO. Focus sur la visibilit\u00e9 locale et les requ\u00eates li\u00e9es au patrimoine nantais.",
    stats: [
      { value: "+28%", label: "de trafic organique en 3 mois" },
      { value: "8", label: "requ\u00eates en top 3 IA" },
      { value: "+12", label: "r\u00e9servations directes / mois" },
    ],
  },
  {
    name: "CENTRE ESTH\u00c9TIQUE PARIS",
    nda: true,
    image: "/clients/centre-marceau.png",
    description:
      "D\u00e9ploiement GEO pour un centre de m\u00e9decine esth\u00e9tique. Objectif : capter les patients qui cherchent via les moteurs IA.",
    stats: [
      { value: "+35", label: "nouveaux RDV / mois" },
      { value: "+52%", label: "de visibilit\u00e9 IA" },
      { value: "2 mois", label: "avant premiers r\u00e9sultats" },
    ],
  },
  {
    name: "H\u00d4TEL 4\u2605 SPA NANTES",
    nda: true,
    image: "/clients/quintessia.png",
    description:
      "Accompagnement GEO complet : audit, contenu, citations, balisage. Sp\u00e9cialisation sur les requ\u00eates spa et bien \u00eatre.",
    stats: [
      { value: "+23", label: "r\u00e9servations directes / mois" },
      { value: "N\u00b01", label: "sur \u00ab h\u00f4tel spa Nantes \u00bb" },
      { value: "+34%", label: "de trafic IA" },
    ],
  },
];

const items = [...results, ...results];

export function ResultsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const pause = () => setPaused(true);
    const resume = () => setPaused(false);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume, { passive: true });
    return () => {
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ touchAction: "pan-y" }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F8F9FA] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F8F9FA] to-transparent sm:w-20" />

      <div
        ref={trackRef}
        className={`flex w-max gap-4 sm:gap-6 py-2 animate-marquee ${paused ? "paused" : ""}`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:w-[400px]"
          >
            {/* Screenshot */}
            <div className="border-b border-gray-100">
              <img
                src={item.image}
                alt={`Résultat client ${item.name}`}
                className="block w-full aspect-[16/9] object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="px-4 py-4 sm:px-5 sm:py-5">
              {/* Name + NDA badge */}
              <div className="flex items-center gap-2.5 mb-3">
                <h3 className="text-xs font-semibold tracking-wider text-navy/80">
                  {item.name}
                </h3>
                {item.nda && (
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-navy/40">
                    NDA
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-[13px] leading-relaxed text-navy/55 mb-4">
                {item.description}
              </p>

              {/* Stats row */}
              <div className="flex items-start gap-0 divide-x divide-gray-100">
                {item.stats.map((stat, j) => (
                  <div key={j} className={`flex-1 ${j > 0 ? "pl-3" : ""} ${j < 2 ? "pr-3" : ""}`}>
                    <p className="text-base font-bold text-cyan sm:text-xl">{stat.value}</p>
                    <p className="text-[10px] leading-tight text-navy/45 sm:text-[11px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
