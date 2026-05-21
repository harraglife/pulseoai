import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("veille-concurrentielle-seo-ia-serp-locales");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function VeilleConcurrentielleSeoIaSerpLocalesPage() {
  return <BlogArticleTemplate article={article} />;
}
