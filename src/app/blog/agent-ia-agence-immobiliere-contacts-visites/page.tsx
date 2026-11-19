import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-agence-immobiliere-contacts-visites");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaAgenceImmobiliereContactsVisitesPage() {
  return <BlogArticleTemplate article={article} />;
}
