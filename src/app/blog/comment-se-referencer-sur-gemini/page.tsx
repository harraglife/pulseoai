import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("comment-se-referencer-sur-gemini");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function CommentSeReferencerSurGeminiPage() {
  return <BlogArticleTemplate article={article} />;
}
