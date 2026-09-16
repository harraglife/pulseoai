import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agence-referencement-chatgpt-comment-choisir");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgenceReferencementChatgptCommentChoisirPage() {
  return <BlogArticleTemplate article={article} />;
}
