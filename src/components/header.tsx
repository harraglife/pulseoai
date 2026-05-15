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

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#E9EEF7] bg-[rgba(255,255,255,0.88)] backdrop-blur-md lg:backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(255,255,255,0.72)]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
          <div className="flex h-[66px] items-center justify-between lg:h-[76px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2.5">
              <Image
                src="/logo.png"
                alt="PulseoAI"
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
              <span className="text-[21px] font-semibold tracking-[-0.04em] text-navy sm:text-[24px]">
                Pulseo<span className="text-cyan">AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex lg:items-center lg:gap-7">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[14px] font-medium tracking-[-0.01em] text-navy/62 transition-colors hover:text-navy"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Link href="/contact">
                <Button className="h-11 rounded-full bg-cyan px-6 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(37,71,208,0.18)] hover:bg-cyan-dark">
                  Obtenez votre audit
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger - min 44x44 touch target */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors active:bg-[#F3F6FB] lg:hidden"
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
        <div className="fixed inset-0 z-[45] flex flex-col bg-[rgba(255,255,255,0.98)] lg:hidden" style={{ top: "66px" }}>
          <nav className="flex flex-1 flex-col overflow-y-auto px-5 pb-7 pt-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex min-h-[48px] items-center border-b border-[#EEF2F7] py-4 text-[17px] font-medium tracking-[-0.02em] text-navy transition-colors active:text-cyan"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA in menu, at bottom */}
            <div className="mt-auto pt-8">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="h-12 w-full rounded-full bg-cyan text-[15px] font-semibold text-white hover:bg-cyan-dark">
                  Obtenir un audit
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
