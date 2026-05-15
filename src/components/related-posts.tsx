import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedBlogPosts } from "@/lib/blog-posts";

type RelatedPostsProps = {
  currentSlug: string;
  explicitSlugs?: string[];
};

export function RelatedPosts({ currentSlug, explicitSlugs = [] }: RelatedPostsProps) {
  const posts = getRelatedBlogPosts(currentSlug, explicitSlugs, 3);

  if (!posts.length) {
    return null;
  }

  return (
    <section className="mt-12 sm:mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan">
            Articles liés
          </p>
          <h2 className="mt-3 text-[23px] font-semibold tracking-[-0.04em] text-navy sm:text-[26px]">
            Pour approfondir le sujet
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden items-center gap-2 text-[14px] font-semibold text-cyan transition-colors hover:text-cyan-dark sm:inline-flex"
        >
          Voir le blog
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-6 grid gap-3.5 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-[22px] border border-[#DEE6F3] bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)] transition-transform hover:-translate-y-0.5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
              {post.category}
            </p>
            <h3 className="mt-3 text-[18px] font-semibold leading-7 tracking-[-0.03em] text-navy">
              {post.title}
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-navy/64">{post.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-navy">
              Lire l’article
              <ArrowRight className="size-4 text-cyan" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
