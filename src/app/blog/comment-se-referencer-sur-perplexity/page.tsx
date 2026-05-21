import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("comment-se-referencer-sur-perplexity");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function CommentSeReferencerSurPerplexityPage() {
  return <BlogArticleTemplate article={article} />;
}
