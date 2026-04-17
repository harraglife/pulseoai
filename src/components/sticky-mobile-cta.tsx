"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="sticky-mobile-cta">
      <Link
        href="/contact"
        className="cta-glow flex items-center justify-center gap-2 w-full rounded-full bg-[linear-gradient(135deg,#2547D0_0%,#4A6BE8_100%)] py-3.5 text-[15px] font-semibold text-white transition-transform duration-150 active:scale-[0.98]"
      >
        Audit gratuit
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
