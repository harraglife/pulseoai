import type { Metadata } from "next";
import { BlogArticleTemplate } from "@/components/blog-article-template";
import { buildBlogArticleMetadata, getNewBlogArticleBySlug } from "@/lib/blog-posts";

const article = getNewBlogArticleBySlug("agent-ia-restaurant-reservations-avis");

export const metadata: Metadata = buildBlogArticleMetadata(article);

export default function AgentIaRestaurantReservationsAvisPage() {
  return <BlogArticleTemplate article={article} />;
}
