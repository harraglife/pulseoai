"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="sticky-mobile-cta">
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 w-full rounded-full bg-cyan py-3.5 text-[15px] font-semibold text-white active:bg-cyan-dark transition-colors"
      >
        Obtenir un audit
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
