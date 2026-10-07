import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("referencement-searchgpt-chatgpt-search");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function ReferencementSearchgptChatgptSearchPage() {
  return <BlogArticleTemplate article={article} />;
}
