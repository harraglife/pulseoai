import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("apparaitre-chatgpt-client-cherche-entreprise");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function ApparaitreChatgptClientChercheEntreprisePage() {
  return <BlogArticleTemplate article={article} />;
}
