import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-vocal-ia-transfert-conseiller-humain-comparer");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentVocalIaTransfertConseillerHumainComparerPage() {
  return <BlogArticleTemplate article={article} />;
}
