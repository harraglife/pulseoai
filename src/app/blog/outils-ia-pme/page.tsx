import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("outils-ia-pme");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function OutilsIaPmePage() {
  return <BlogArticleTemplate article={article} />;
}
