import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-prospection-commerciale-pme");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaProspectionCommercialePmePage() {
  return <BlogArticleTemplate article={article} />;
}
