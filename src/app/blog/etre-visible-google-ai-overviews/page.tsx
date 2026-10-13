import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("etre-visible-google-ai-overviews");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function EtreVisibleGoogleAiOverviewsPage() {
  return <BlogArticleTemplate article={article} />;
}
