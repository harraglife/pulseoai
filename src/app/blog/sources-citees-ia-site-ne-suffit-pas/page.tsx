import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("sources-citees-ia-site-ne-suffit-pas");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SourcesCiteesIaSiteNeSuffitPasPage() {
  return <BlogArticleTemplate article={article} />;
}
