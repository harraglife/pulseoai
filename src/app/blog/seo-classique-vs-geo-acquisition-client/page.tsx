import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("seo-classique-vs-geo-acquisition-client");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SeoClassiqueVsGeoAcquisitionClientPage() {
  return <BlogArticleTemplate article={article} />;
}
