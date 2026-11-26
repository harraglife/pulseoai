import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-recrutement-pme-trier-candidatures");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaRecrutementPmeTrierCandidaturesPage() {
  return <BlogArticleTemplate article={article} />;
}
