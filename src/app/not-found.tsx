import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PASTELS, feutre } from "@/lib/paper-da";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

const CSS = `
.nf {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 66px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 72px 24px 88px;
  background: #F4F3EF;
  color: #111110;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Helvetica, Arial, sans-serif;
}
@media (min-width: 1024px) { .nf { min-height: calc(100vh - 76px); } }
.nf-code {
  margin: 0;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 1;
  color: #111110;
}
.nf-title {
  margin: 18px 0 0;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #111110;
}
.nf-text {
  margin: 16px auto 0;
  max-width: 32em;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(17, 17, 16, 0.62);
}
.nf-mark {
  display: inline;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.1em 0.26em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: ${feutre(PASTELS.peche)};
}
.nf-lion { width: auto; height: clamp(180px, 24vh, 250px); object-fit: contain; margin: 30px auto 0; }
.nf-links { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
.nf-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: #111110;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
}
`;

export default function NotFound() {
  return (
    <>
      <style>{CSS}</style>
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
