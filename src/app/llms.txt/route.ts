import { SITE_URL } from "@/config/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# PulseoAI

> PulseoAI est une agence française de GEO (Generative Engine Optimization) et de SEO, basée à Nantes (Saint-Herblain). Elle aide les entreprises — hôtels, PME, e-commerce, services — à être comprises, citées et recommandées par ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, ainsi qu'à être visibles sur Google.

## Ce que fait PulseoAI
- Audit de visibilité SEO et GEO (Google + moteurs IA)
- Optimisation des contenus et de la structure du site pour les IA (answer-first, données structurées)
- Renforcement des sources citées par les IA (fiches, avis, annuaires, mentions de marque)
- Suivi mensuel des citations IA et des concurrents cités

## Pages principales
- [Notre offre SEO / GEO](${SITE_URL}/offre)
- [GEO Hôtellerie](${SITE_URL}/geo-hotellerie)
- [Agence SEO / GEO à Nantes](${SITE_URL}/agence-seo-geo-nantes)
- [FAQ référencement IA](${SITE_URL}/faq)
- [À propos](${SITE_URL}/a-propos)
- [Contact / Audit](${SITE_URL}/contact)

## Guides
- [Se référencer sur ChatGPT](${SITE_URL}/blog/apparaitre-chatgpt-client-cherche-entreprise)
- [Se référencer sur Perplexity](${SITE_URL}/blog/comment-se-referencer-sur-perplexity)
- [Google AI Overviews pour les entreprises](${SITE_URL}/blog/google-ai-overviews-entreprises-comprendre)
- [Pourquoi votre site seul ne suffit pas](${SITE_URL}/blog/sources-citees-ia-site-ne-suffit-pas)
- [Audit SEO / GEO](${SITE_URL}/blog/audit-seo-geo-visibilite-ia)
- [Schema.org pour le GEO](${SITE_URL}/blog/schema-org-guide-complet-geo)
- [llms.txt expliqué](${SITE_URL}/blog/llms-txt-guide-pratique)

## Contact
- Email: contact@pulseoai.fr
- Localisation: Nantes, France
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
