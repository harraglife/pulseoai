import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("seo-ia-ecommerce-recommandation-marketplace");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function SeoIaEcommerceRecommandationMarketplacePage() {
  return <BlogArticleTemplate article={article} />;
}
