"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Notre offre", href: "/offre" },
  { name: "GEO Hôtellerie", href: "/geo-hotellerie" },
  { name: "FAQ", href: "/faq" },
  { name: "À propos", href: "/a-propos" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Header solidifies after a tiny scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        data-scrolled={scrolled ? "true" : "false"}
        className="nav-header sticky top-0 z-50 w-full"
      >
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="flex h-16 items-center justify-between lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group/logo">
              <Image
                src="/logo.png"
                alt="PulseoAI"
                width={40}
                height={40}
                className="h-9 w-9 lg:h-10 lg:w-10 transition-transform duration-200 group-hover/logo:scale-[1.04]"
                priority
              />
              <span className="text-xl lg:text-[22px] font-semibold tracking-tight text-[color:var(--text-primary)]">
                Pulseo<span className="gradient-word">AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-[13.5px] font-medium text-[color:var(--text-secondary)] transition-colors duration-150 hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:text-[color:var(--text-primary)]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Link href="/contact">
                <Button variant="cta" size="cta">
                  Audit GEO gratuit
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger - min 44x44 touch target */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-[color:var(--text-primary)] active:bg-[rgba(15,23,42,0.04)] transition-colors"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[45] bg-white lg:hidden flex flex-col"
          style={{ top: "64px" }}
        >
          <nav className="flex-1 flex flex-col px-6 pt-6 pb-8 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-lg font-medium text-[color:var(--text-primary)] py-4 border-b border-[rgba(15,23,42,0.06)] active:text-[#2547D0] transition-colors min-h-[48px]"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA in menu, at bottom */}
            <div className="mt-auto pt-8">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button variant="cta" size="cta" className="w-full h-14 text-base">
                  Audit GEO gratuit
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
