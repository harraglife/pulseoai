import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("etre-cite-par-chatgpt-devenir-source");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function EtreCiteParChatgptDevenirSourcePage() {
  return <BlogArticleTemplate article={article} />;
}
