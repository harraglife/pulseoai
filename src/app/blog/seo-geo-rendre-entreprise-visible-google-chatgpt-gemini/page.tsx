import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("seo-geo-rendre-entreprise-visible-google-chatgpt-gemini");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SeoGeoRendreEntrepriseVisiblePage() {
  return <BlogArticleTemplate article={article} />;
}
