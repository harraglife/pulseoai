import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("outil-geo-suite-seo-ou-plateforme-dediee");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function OutilGeoSuiteSeoOuPlateformeDedieePage() {
  return <BlogArticleTemplate article={article} />;
}
