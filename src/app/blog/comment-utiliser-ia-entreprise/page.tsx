import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("comment-utiliser-ia-entreprise");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function CommentUtiliserIaEntreprisePage() {
  return <BlogArticleTemplate article={article} />;
}
