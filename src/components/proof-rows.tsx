"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const rows = [
  {
    src: "/proof-1.png",
    alt: "Résultats Google Search Console client B2B haut de gamme : 3 250 clics et 254 k impressions sur 6 mois",
    segment: "B2B haut de gamme",
    points: [
      { strong: "×2,5", rest: " en acquisition" },
      { strong: "+3 250", rest: " clics qualifiés en 6 mois" },
    ],
  },
  {
    src: "/proof-2.png",
    alt: "Résultats Google Search Console client e-commerce premium : +180 mots-clés en TOP 3 et +78 000€ de CA",
    segment: "E-commerce premium",
    points: [
      { strong: "+78 000€", rest: " de CA généré" },
      { strong: "+180", rest: " mots-clés en TOP 3" },
    ],
  },
  {
    src: "/proof-3.png",
    alt: "Résultats Google Search Console client BTP & Construction : 45 000€ de CA mensuel et 5 leads à 9 000€ minimum",
    segment: "BTP & Construction",
    points: [
      { strong: "45 000€", rest: " de CA mensuel" },
      { strong: "5 leads", rest: " à 9 000€ minimum" },
    ],
  },
];

export function ProofRows() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-8 space-y-4 lg:space-y-5">
      {rows.map((row, index) => (
        <div
          key={row.src}
          className="grid items-center gap-4 transition-all duration-700 ease-out lg:grid-cols-[0.5fr_0.5fr] lg:gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: `${index * 160}ms`,
          }}
        >
          <div className="w-full max-w-[440px] overflow-hidden rounded-[20px] border border-[#DCE4F4] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.07)]">
            <Image
              src={row.src}
              alt={row.alt}
              width={1920}
              height={724}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 440px"
              className="h-auto w-full"
            />
          </div>

          <div className="lg:pl-2">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2547D0]">
              {row.segment}
            </span>
            <div className="mt-3 space-y-2">
              {row.points.map((point) => (
                <p key={point.strong} className="text-[19px] leading-7 tracking-[-0.02em] text-navy/72">
                  <span className="font-semibold text-navy">{point.strong}</span>
                  {point.rest}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
