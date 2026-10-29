import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-rgpd-ai-act-pme");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaRgpdAiActPmePage() {
  return <BlogArticleTemplate article={article} />;
}
