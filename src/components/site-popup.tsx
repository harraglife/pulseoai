"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Pop-up des deux offres (audit visibilite IA / agents IA).
 * - Apparait apres 20 s sur le site, une seule fois par visite (sessionStorage).
 * - Rien dans le HTML serveur : le contenu n'existe qu'apres le minuteur, cote navigateur.
 *   Google et les IA ne le voient pas, il ne modifie ni le texte des pages ni leur mise en page.
 * - Mobile : encart compact en bas de l'ecran (pas de plein ecran, regle Google sur les interstitiels).
 * - Jamais sur /contact, jamais pendant qu'un formulaire est a l'ecran ou en cours de saisie.
 */
const DELAY_MS = 20_000;
const RETRY_MS = 5_000;
const STORAGE_KEY = "pa-popup-vu";

function alreadySeen() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* stockage indisponible : la pop-up ne reviendra pas avant rechargement */
  }
}

function formIsBusy() {
  const active = document.activeElement;
  if (active && active.closest("form")) return true;
  const forms = document.querySelectorAll("main form, #cadrer");
  for (const form of forms) {
    const rect = form.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15) return true;
  }
  return false;
}

export function SitePopup() {
  const pathname = usePathname() ?? "/";
  const pathRef = useRef(pathname);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (alreadySeen()) return;
    let timer: ReturnType<typeof setTimeout>;
    const attempt = () => {
      if (alreadySeen()) return;
      if (pathRef.current.startsWith("/contact") || formIsBusy()) {
        timer = setTimeout(attempt, RETRY_MS);
        return;
      }
      markSeen();
      setOpen(true);
    };
    timer = setTimeout(attempt, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.dataset.popup = "open";
    dialogRef.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      delete document.documentElement.dataset.popup;
    };
  }, [open, close]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (!open) return null;

  return (
    <div className="site-popup" role="presentation">
      <div className="site-popup-backdrop" onClick={close} aria-hidden />
      <div
        ref={dialogRef}
        className="site-popup-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-popup-title"
        tabIndex={-1}
      >
        <button type="button" className="site-popup-close" onClick={close} aria-label="Fermer">
          <X className="size-5" aria-hidden />
        </button>
        <p id="site-popup-title" className="site-popup-title">
          On peut vous aider sur deux sujets
        </p>
        <div className="site-popup-grid">
          <div className="site-popup-offer">
            <p className="site-popup-kicker">Visibilité IA</p>
            <p className="site-popup-name">Audit de visibilité IA offert</p>
            <p className="site-popup-text">
              On regarde si ChatGPT, Gemini et Perplexity citent votre entreprise, et qui est cité à votre place.
            </p>
            <Link href="/contact" className="pa-btn pa-btn-primary site-popup-btn" onClick={close}>
              Obtenir mon audit
            </Link>
          </div>
          <div className="site-popup-offer">
            <p className="site-popup-kicker">Agents IA</p>
            <p className="site-popup-name">Un agent IA qui bosse pour vous 24h/24</p>
            <p className="site-popup-text">
              Décrivez une tâche qui vous prend du temps, on vous dit si un agent IA peut s&apos;en charger.
            </p>
            <Link href="/agents-ia#cadrer" className="pa-btn pa-btn-primary site-popup-btn" onClick={close}>
              Cadrer mon agent IA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
