import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agence-agents-ia-comment-choisir-prestataire");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgenceAgentsIaCommentChoisirPrestatairePage() {
  return <BlogArticleTemplate article={article} />;
}
