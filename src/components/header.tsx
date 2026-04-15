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
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PulseoAI"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="text-2xl font-semibold text-navy">
                Pulseo<span className="text-cyan">AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-navy/70 transition-colors hover:text-cyan"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Link href="/contact">
                <Button className="bg-cyan hover:bg-cyan-dark text-white font-semibold px-6 rounded-full">
                  Audit GEO gratuit
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger - min 44x44 touch target */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-navy active:bg-gray-100 transition-colors"
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
        <div className="fixed inset-0 z-[45] bg-white lg:hidden flex flex-col" style={{ top: "64px" }}>
          <nav className="flex-1 flex flex-col px-6 pt-6 pb-8 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-lg font-medium text-navy py-4 border-b border-gray-100 active:text-cyan transition-colors min-h-[48px]"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA in menu, at bottom */}
            <div className="mt-auto pt-8">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button className="w-full h-14 bg-cyan hover:bg-cyan-dark text-white font-semibold rounded-full text-base">
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
