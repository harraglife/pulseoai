import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("suivre-visibilite-ai-mode-google");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SuivreVisibiliteAiModeGooglePage() {
  return <BlogArticleTemplate article={article} />;
}
