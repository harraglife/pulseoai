import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("dots-openai-agents-ia-pme");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function DotsOpenaiAgentsIaPmePage() {
  return <BlogArticleTemplate article={article} />;
}
