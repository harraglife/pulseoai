import { blogPosts, parseFrenchDate } from "@/lib/blog-posts";

export async function GET() {
  const baseUrl = "https://www.pulseoai.fr";

  const items = [...blogPosts]
    .sort((a, b) => parseFrenchDate(b.date).getTime() - parseFrenchDate(a.date).getTime())
    .map(
      (post) => `
<item>
  <title><![CDATA[${post.title}]]></title>
  <link>${baseUrl}/blog/${post.slug}</link>
  <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
  <description><![CDATA[${post.description}]]></description>
  <pubDate>${parseFrenchDate(post.date).toUTCString()}</pubDate>
  <category><![CDATA[${post.category}]]></category>
</item>`,
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog SEO / GEO | PulseoAI</title>
    <link>${baseUrl}/blog</link>
    <description>Guides et analyses pour améliorer la visibilité Google et la visibilité IA sur ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.</description>
    <language>fr-FR</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
