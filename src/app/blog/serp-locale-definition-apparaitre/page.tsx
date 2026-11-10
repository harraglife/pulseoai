import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("serp-locale-definition-apparaitre");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SerpLocaleDefinitionApparaitrePage() {
  return <BlogArticleTemplate article={article} />;
}
