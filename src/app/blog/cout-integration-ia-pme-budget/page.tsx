import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("cout-integration-ia-pme-budget");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function CoutIntegrationIaPmeBudgetPage() {
  return <BlogArticleTemplate article={article} />;
}
