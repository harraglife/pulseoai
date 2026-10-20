import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("tester-balisage-schema-org-validateur");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function TesterBalisageSchemaOrgValidateurPage() {
  return <BlogArticleTemplate article={article} />;
}
