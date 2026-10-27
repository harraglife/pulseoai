import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("utiliser-chatgpt-pour-le-seo");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function UtiliserChatgptPourLeSeoPage() {
  return <BlogArticleTemplate article={article} />;
}
