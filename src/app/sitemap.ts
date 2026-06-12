import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { blogPosts, parseFrenchDate } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/",                      lastModified: "2026-06-01", changeFrequency: "weekly"  as const, priority: 1.0 },
    { path: "/offre",                 lastModified: "2026-05-20", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/geo-hotellerie",        lastModified: "2026-05-20", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/agence-seo-geo-nantes", lastModified: "2026-06-12", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/faq",                   lastModified: "2026-05-10", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/a-propos",              lastModified: "2026-04-28", changeFrequency: "yearly"  as const, priority: 0.6 },
    { path: "/blog",                  lastModified: "2026-06-04", changeFrequency: "weekly"  as const, priority: 0.8 },
    { path: "/blog/referencement-chatgpt-apparaitre-ia",      lastModified: "2026-06-12", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blog/veille-concurrentielle-seo-ia-serp-locales", lastModified: "2026-06-12", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact",               lastModified: "2026-04-15", changeFrequency: "yearly"  as const, priority: 0.5 },
    { path: "/mentions-legales",      lastModified: "2026-01-10", changeFrequency: "yearly"  as const, priority: 0.2 },
  ];

  const staticBlogSlugs = new Set<string>([
    "referencement-chatgpt-apparaitre-ia",
    "veille-concurrentielle-seo-ia-serp-locales",
  ]);

  const blogEntries: MetadataRoute.Sitemap = blogPosts
    .filter((post) => !staticBlogSlugs.has(post.slug))
    .map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: parseFrenchDate(post.date).toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: p.lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...blogEntries,
  ];
}
