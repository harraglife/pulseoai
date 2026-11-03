import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("consultant-geo-role-missions-choisir");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function ConsultantGeoRoleMissionsChoisirPage() {
  return <BlogArticleTemplate article={article} />;
}
