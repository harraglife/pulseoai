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
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1100px] px-6">
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
              <span className="text-2xl font-semibold">
                Pulseo<span className="text-cyan">AI</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              PulseoAI, agence GEO. Experts en référencement IA pour l'hôtellerie, la restauration et les PME.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/pulseoai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cyan transition-colors"
                aria-label="LinkedIn PulseoAI"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@pulseoai.fr"
                className="text-white/60 hover:text-cyan transition-colors"
                aria-label="Email PulseoAI"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Ressources
            </h3>
            <ul className="space-y-3">
              {footerNav.ressources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:contact@pulseoai.fr" className="hover:text-cyan transition-colors">
                  contact@pulseoai.fr
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Nantes, France</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <ExternalLink className="h-4 w-4 shrink-0" />
                <a
                  href="https://www.linkedin.com/company/pulseoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Keywords links - SEO internal linking */}
        <div className="border-t border-white/10 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Column 1: Nos services */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-3">Nos services</h4>
              <ul className="space-y-1.5">
                <li><Link href="/offre" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Référencement IA</Link></li>
                <li><Link href="/contact" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Audit de visibilité IA</Link></li>
                <li><Link href="/geo-hotellerie" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">GEO Hôtellerie</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Optimisation IA</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Monitoring IA</Link></li>
              </ul>
            </div>
            {/* Column 2: Moteurs IA */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-3">Moteurs IA</h4>
              <ul className="space-y-1.5">
                <li><Link href="/faq" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">ChatGPT</Link></li>
                <li><Link href="/faq" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Gemini</Link></li>
                <li><Link href="/faq" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Claude</Link></li>
                <li><Link href="/blog" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Google AI Overviews</Link></li>
                <li><Link href="/faq" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Copilot</Link></li>
              </ul>
            </div>
            {/* Column 3: Secteurs */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-3">Secteurs</h4>
              <ul className="space-y-1.5">
                <li><Link href="/geo-hotellerie" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Hôtels</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Restaurants</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Commerces</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">PME</Link></li>
                <li><Link href="/offre" className="text-[13px] text-white/35 hover:text-white/60 transition-colors">Services B2B</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/50">
            © 2026 PulseoAI, agence GEO. Nantes, France. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
