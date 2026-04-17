import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

const footerNav = {
  services: [
    { name: "Notre offre GEO", href: "/offre" },
    { name: "GEO Hôtellerie", href: "/geo-hotellerie" },
    { name: "Audit GEO gratuit", href: "/contact" },
  ],
  ressources: [
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "À propos", href: "/a-propos" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/mentions-legales" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#05070F] text-white border-t border-white/[0.06]">
      {/* Top accent gradient line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(0,200,224,0.35)_50%,transparent_100%)]"
      />

      <div className="mx-auto max-w-[1180px] px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PulseoAI"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-2xl font-semibold tracking-tight">
                Pulseo<span className="gradient-word">AI</span>
              </span>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed">
              PulseoAI, agence GEO. Experts en référencement IA pour l'hôtellerie, la restauration et les PME.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/pulseoai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-white/60 transition-all duration-200 hover:border-[#00C8E0]/40 hover:text-[#00C8E0] hover:shadow-[0_0_20px_-4px_rgba(0,200,224,0.35)]"
                aria-label="LinkedIn PulseoAI"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@pulseoai.fr"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-white/60 transition-all duration-200 hover:border-[#00C8E0]/40 hover:text-[#00C8E0] hover:shadow-[0_0_20px_-4px_rgba(0,200,224,0.35)]"
                aria-label="Email PulseoAI"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 transition-colors duration-150 hover:text-[#00C8E0]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 mb-4">
              Ressources
            </h3>
            <ul className="space-y-3">
              {footerNav.ressources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 transition-colors duration-150 hover:text-[#00C8E0]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/55">
                <Mail className="h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="mailto:contact@pulseoai.fr"
                  className="transition-colors duration-150 hover:text-[#00C8E0]"
                >
                  contact@pulseoai.fr
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/55">
                <MapPin className="h-4 w-4 shrink-0 text-white/40" />
                <span>Nantes, France</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/55">
                <ExternalLink className="h-4 w-4 shrink-0 text-white/40" />
                <a
                  href="https://www.linkedin.com/company/pulseoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-150 hover:text-[#00C8E0]"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Keywords links - SEO internal linking */}
        <div className="border-t border-white/[0.06] py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Column 1: Nos services */}
            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-3">Nos services</h4>
              <ul className="space-y-1.5">
                <li><Link href="/offre" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Référencement IA</Link></li>
                <li><Link href="/contact" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Audit de visibilité IA</Link></li>
                <li><Link href="/geo-hotellerie" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">GEO Hôtellerie</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Optimisation IA</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Monitoring IA</Link></li>
              </ul>
            </div>
            {/* Column 2: Moteurs IA */}
            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-3">Moteurs IA</h4>
              <ul className="space-y-1.5">
                <li><Link href="/faq" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">ChatGPT</Link></li>
                <li><Link href="/faq" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Gemini</Link></li>
                <li><Link href="/faq" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Claude</Link></li>
                <li><Link href="/blog" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Google AI Overviews</Link></li>
                <li><Link href="/faq" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Copilot</Link></li>
              </ul>
            </div>
            {/* Column 3: Secteurs */}
            <div>
              <h4 className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-3">Secteurs</h4>
              <ul className="space-y-1.5">
                <li><Link href="/geo-hotellerie" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Hôtels</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Restaurants</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Commerces</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">PME</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/30 transition-colors duration-150 hover:text-white/70">Services B2B</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6">
          <p className="text-center text-xs text-white/40">
            © 2026 PulseoAI, agence GEO. Nantes, France. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
