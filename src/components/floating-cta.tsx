"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Bouton d'action fixe, commun a tout le site.
 * Desktop : bouton crayon en bas a droite. Mobile : barre pleine largeur en bas.
 * Masque en haut de page, masque quand un formulaire est a l'ecran, absent sur /contact.
 * Destination selon la page : agents IA vers le formulaire de /agents-ia, le reste vers /contact.
 */
export function FloatingCta({ agentSlugs }: { agentSlugs: string[] }) {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const isAgent =
    pathname.startsWith("/agents-ia") || agentSlugs.some((slug) => pathname === `/blog/${slug}`);
  const href = isAgent ? "/agents-ia#cadrer" : "/contact";
  const label = isAgent ? "Cadrer mon agent IA" : "Obtenir mon audit visibilité IA";
  const disabled = pathname.startsWith("/contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const targets = document.querySelectorAll("main form, #cadrer");
    if (!targets.length) {
      setFormVisible(false);
      return;
    }
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        setFormVisible(visible.size > 0);
      },
      { threshold: 0.15 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  if (disabled) return null;
  const show = scrolled && !formVisible;

  return (
    <div className={`floating-cta${show ? " is-visible" : ""}`} aria-hidden={!show}>
      <Link href={href} className="floating-cta-btn" tabIndex={show ? 0 : -1}>
        {label}
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}
