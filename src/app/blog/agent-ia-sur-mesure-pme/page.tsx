import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-sur-mesure-pme");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaSurMesurePmePage() {
  return <BlogArticleTemplate article={article} />;
}
