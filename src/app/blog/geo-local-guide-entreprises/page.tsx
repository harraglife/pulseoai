import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("geo-local-guide-entreprises");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function GeoLocalGuideEntreprisesPage() {
  return <BlogArticleTemplate article={article} />;
}
