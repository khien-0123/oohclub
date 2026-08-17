import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Kicker } from "@/components/ui/kicker";
import { heading, meta, sectionY, wrap } from "@/components/ui/styles";
import { getNewsBySlug, newsArticles } from "@/content/news";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "Tin tức — OOHClub" };
  return {
    title: `${article.title} — OOHClub`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const related = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <section className="border-b border-line bg-bg-soft">
            <div className={`${wrap} ${sectionY} max-w-3xl`} data-reveal>
              <Kicker>{article.category}</Kicker>
              <h1 className={heading}>{article.title}</h1>
              <time className={`${meta} mt-4 block`}>{article.date}</time>
              <p className="mt-3 text-sm text-muted">
                <Link href="/" className="transition hover:text-gold">
                  Trang chủ
                </Link>
                <span className="mx-2 text-line">/</span>
                <Link href="/tin-tuc" className="transition hover:text-gold">
                  Tin tức
                </Link>
                <span className="mx-2 text-line">/</span>
                {article.category}
              </p>
            </div>
          </section>

          <div className={`${wrap} ${sectionY}`}>
            <div className="relative aspect-[16/9] overflow-hidden border border-line bg-bg-soft" data-reveal>
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 80rem"
              />
            </div>

            <div className="mx-auto mt-10 max-w-2xl space-y-5 text-[0.95rem] leading-relaxed text-muted" data-reveal>
              {article.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-2xl" data-reveal>
              <Link
                href="/tin-tuc"
                className="inline-flex items-center border border-fg/25 px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fg transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
              >
                ← Tất cả tin tức
              </Link>
            </div>
          </div>
        </article>

        <section className={`${sectionY} border-t border-line bg-bg-soft/60`}>
          <div className={wrap}>
            <Kicker>Đọc thêm</Kicker>
            <h2 className={`${heading} mb-8`}>Tin liên quan</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <li
                  key={item.slug}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                >
                  <Link
                    href={`/tin-tuc/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden border border-[#e51d73]/40 bg-bg transition hover:border-[#e51d73]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-[#e51d73]/25">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-semibold leading-snug transition group-hover:text-muted">
                        {item.title}
                      </h3>
                      <time className={`${meta} mt-auto pt-4`}>{item.date}</time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
