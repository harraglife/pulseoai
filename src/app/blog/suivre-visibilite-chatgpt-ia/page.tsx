import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("suivre-visibilite-chatgpt-ia");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SuivreVisibiliteChatgptIaPage() {
  return <BlogArticleTemplate article={article} />;
}
