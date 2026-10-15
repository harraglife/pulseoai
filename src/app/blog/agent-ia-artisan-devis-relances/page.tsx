import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-artisan-devis-relances");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaArtisanDevisRelancesPage() {
  return <BlogArticleTemplate article={article} />;
}
