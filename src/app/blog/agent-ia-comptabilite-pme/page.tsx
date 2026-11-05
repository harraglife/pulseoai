import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-comptabilite-pme");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaComptabilitePmePage() {
  return <BlogArticleTemplate article={article} />;
}
