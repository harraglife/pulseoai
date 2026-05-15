import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const footerNav = {
  services: [
    { name: "Notre offre", href: "/offre" },
    { name: "GEO Hôtellerie", href: "/geo-hotellerie" },
    { name: "Audit SEO / GEO", href: "/contact" },
    { name: "Référencement IA", href: "/offre" },
    { name: "Monitoring IA", href: "/offre" },
  ],
  ressources: [
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "À propos", href: "/a-propos" },
    { name: "Mentions légales", href: "/mentions-legales" },
  ],
  bottom: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr] lg:gap-8 lg:py-14">
          <div className="max-w-[320px]">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="PulseoAI" width={36} height={36} className="h-9 w-9" />
              <span className="text-[24px] font-semibold tracking-[-0.04em] sm:text-[28px]">
                Pulseo<span className="text-cyan">AI</span>
              </span>
            </Link>
            <p className="mt-4 text-[14px] leading-7 text-white/68">
              PulseoAI, agence SEO / GEO. Nous aidons les entreprises à être visibles sur Google et dans les réponses IA.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/pulseoai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/58 transition-colors hover:text-cyan"
                aria-label="LinkedIn PulseoAI"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@pulseoai.fr"
                className="text-white/58 transition-colors hover:text-cyan"
                aria-label="Email PulseoAI"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[14px] text-white/62 transition-colors hover:text-cyan">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
              Ressources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.ressources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[14px] text-white/62 transition-colors hover:text-cyan">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-[14px] text-white/62">
              <p>
                <a href="mailto:contact@pulseoai.fr" className="transition-colors hover:text-cyan">
                  contact@pulseoai.fr
                </a>
              </p>
              <p>Nantes, France</p>
              <p>
                <a
                  href="https://www.linkedin.com/company/pulseoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-[13px] text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PulseoAI. Tous droits réservés.</p>
          <div className="flex items-center gap-4 sm:gap-5">
            {footerNav.bottom.map((item) => (
              <Link key={item.name} href={item.href} className="transition-colors hover:text-cyan">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
