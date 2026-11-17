import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("schema-org-organization-baliser-entreprise");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SchemaOrgOrganizationBaliserEntreprisePage() {
  return <BlogArticleTemplate article={article} />;
}
