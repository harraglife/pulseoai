"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Header du site en direction papier.
 * Remplace l'ancien Header, masque en CSS par PAPER_CSS.
 */

const SERVICES = [
  { name: "Notre offre", href: "/offre" },
  { name: "GEO Hôtellerie", href: "/geo-hotellerie" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // fermeture au clic exterieur et a la touche Echap
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpenServices(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenServices(false);
        setOpenMobile(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="tn">
      <div className="tn-inner">
        <Link href="/" className="tn-logo">
          PulseoAI
        </Link>

        <nav className="tn-nav">
          <Link href="/" className="tn-link tn-l1">
            Accueil
          </Link>

          <div className="tn-drop-wrap" ref={wrapRef}>
            <button
              type="button"
              className="tn-link tn-l2 tn-trigger"
              aria-expanded={openServices}
              aria-haspopup="true"
              onClick={() => setOpenServices((v) => !v)}
            >
              Devenir visible sur les IA
              <span className={`tn-caret${openServices ? " tn-caret-open" : ""}`} aria-hidden>
                ▾
              </span>
            </button>

            {openServices && (
              <div className="tn-drop">
                {SERVICES.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`tn-drop-link tn-d${i + 1}`}
                    onClick={() => setOpenServices(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/agents-ia" className="tn-link tn-l5">
            Recruter mon agent IA
          </Link>

          <Link href="/a-propos" className="tn-link tn-l3">
            À propos
          </Link>
          <Link href="/blog" className="tn-link tn-l4">
            Blog
          </Link>
        </nav>

        <Link href="/contact" className="tn-cta">
          <span>Obtenez votre audit</span>
        </Link>

        <button
          type="button"
          className="tn-burger"
          aria-label="Ouvrir le menu"
          aria-expanded={openMobile}
          onClick={() => setOpenMobile((v) => !v)}
        >
          {openMobile ? "✕" : "☰"}
        </button>
      </div>

      {openMobile && (
        <div className="tn-mobile">
          <Link href="/" onClick={() => setOpenMobile(false)}>
            Accueil
          </Link>
          <span className="tn-mobile-group">Devenir visible sur les IA</span>
          {SERVICES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="tn-mobile-sub"
              onClick={() => setOpenMobile(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/agents-ia" onClick={() => setOpenMobile(false)}>
            Recruter mon agent IA
          </Link>
          <Link href="/a-propos" onClick={() => setOpenMobile(false)}>
            À propos
          </Link>
          <Link href="/blog" onClick={() => setOpenMobile(false)}>
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}
