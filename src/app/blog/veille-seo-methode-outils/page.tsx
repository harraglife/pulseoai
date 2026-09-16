import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("veille-seo-methode-outils");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function VeilleSeoMethodeOutilsPage() {
  return <BlogArticleTemplate article={article} />;
}
