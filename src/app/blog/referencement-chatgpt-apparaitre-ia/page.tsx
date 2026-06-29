import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("referencement-chatgpt-apparaitre-ia");

export const metadata: Metadata = {
  title: "Référencement ChatGPT : apparaître sur ChatGPT et toutes les IA",
  description:
    "Référencement ChatGPT : comment faire apparaître votre entreprise sur ChatGPT, Perplexity, Gemini et Claude. Les 5 leviers du référencement IA (GEO) expliqués.",
  alternates: {
    canonical: "/blog/referencement-chatgpt-apparaitre-ia",
  },
  keywords: article?.keywords,
  openGraph: {
    title: "Référencement ChatGPT : apparaître sur ChatGPT et toutes les IA",
    description:
      "Référencement ChatGPT : comment faire apparaître votre entreprise sur ChatGPT, Perplexity, Gemini et Claude.",
    url: "https://www.pulseoai.fr/blog/referencement-chatgpt-apparaitre-ia",
    type: "article",
    publishedTime: "2026-06-04",
    modifiedTime: "2026-06-12",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: article?.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Référencement ChatGPT : apparaître sur ChatGPT et toutes les IA",
    description:
      "Référencement ChatGPT : comment faire apparaître votre entreprise sur ChatGPT, Perplexity, Gemini et Claude.",
    images: ["/og-image.png"],
  },
};

export default function ReferencementChatgptPage() {
  return <BlogArticleTemplate article={article} />;
}
