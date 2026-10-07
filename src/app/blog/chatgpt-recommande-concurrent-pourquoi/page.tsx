import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("chatgpt-recommande-concurrent-pourquoi");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function ChatgptRecommandeConcurrentPourquoiPage() {
  return <BlogArticleTemplate article={article} />;
}
