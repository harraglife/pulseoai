import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("audit-seo-geo-visibilite-ia");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AuditSeoGeoVisibiliteIaPage() {
  return <BlogArticleTemplate article={article} />;
}
