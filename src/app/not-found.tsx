import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/styles/pages/not-found.css";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};


export default function NotFound() {
  return (
    <>
      <section className="nf">
        <p className="nf-code">404</p>
        <h1 className="nf-title">
          Cette page est <span className="nf-mark">introuvable</span>.
        </h1>
        <p className="nf-text">
          Le lien est peut-être ancien, ou l&apos;adresse comporte une erreur.
          Voici par où continuer.
        </p>

        <Image
          sizes="(max-width: 767px) 200px, 420px"
          src="/illustrations/xyEexm52.png"
          alt="Mascotte lion perplexe"
          width={1536}
          height={1536}
          className="nf-lion"
        />

        <nav className="nf-links">
          <Link href="/">Accueil</Link>
          <Link href="/offre">Notre offre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
    </>
  );
}
