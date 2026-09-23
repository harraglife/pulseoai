import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("referencement-local-chatgpt-apparaitre-ville");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function ReferencementLocalChatgptApparaitreVillePage() {
  return <BlogArticleTemplate article={article} />;
}
