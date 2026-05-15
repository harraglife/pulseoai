import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("google-ai-overviews-entreprises-comprendre");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function GoogleAiOverviewsEntreprisesComprendrePage() {
  return <BlogArticleTemplate article={article} />;
}
