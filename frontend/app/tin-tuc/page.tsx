import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { meta, pageBannerOverlay, sectionY, wrap } from "@/components/ui/styles";
import { getNewsByCategory, newsArticles, newsBanner, newsCategories } from "@/content/news";

type Props = {
  searchParams: Promise<{ muc?: string }>;
};

export const metadata = {
  title: "Tin tức — OOHClub",
  description:
    "Cập nhật tin tức ngành quảng cáo ngoài trời, DOOH, chiến dịch sáng tạo và hoạt động cộng đồng OOHClub.",
};

export default async function NewsPage({ searchParams }: Props) {
  const { muc } = await searchParams;
  const active = newsCategories.includes(muc as (typeof newsCategories)[number])
    ? (muc as (typeof newsCategories)[number])
    : "Tất cả";
  const items = getNewsByCategory(active);
  const [lead, ...rest] = items;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[18rem] overflow-hidden border-b border-line bg-white sm:min-h-[22rem]">
          <Image
            src={newsBanner.image}
            alt={newsBanner.imageAlt}
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className={pageBannerOverlay} />
          <div className={`${wrap} relative flex min-h-[18rem] items-center py-12 sm:min-h-[22rem] sm:py-16`}>
            <div className="max-w-xl animate-fade-up" data-reveal>
              <h1 className="text-[clamp(2rem,5vw,3.1rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-ink">
                {newsBanner.title}
              </h1>
              <p className="mt-4 max-w-md text-[0.95rem] font-medium leading-relaxed text-ink">
                {newsBanner.support}
              </p>
              <p className="mt-4 text-sm text-fg/70">
                <Link href="/" className="transition hover:text-gold">
                  Trang chủ
                </Link>
                <span className="mx-2 text-line">/</span>
                Tin tức
              </p>
            </div>
          </div>
        </section>

        <section className={`${sectionY} border-b border-line bg-ink text-on-accent`}>
          <div className={wrap}>
            {lead ? (
              <div className="grid gap-8 lg:grid-cols-3">
                <Link
                  href={`/tin-tuc/${lead.slug}`}
                  className="group relative min-h-[20rem] overflow-hidden sm:min-h-[26rem] lg:col-span-2"
                  data-reveal="left"
                >
                  <Image
                    src={lead.image}
                    alt={lead.title}
                    fill
                    priority
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold">
                      {lead.category}
                    </p>
                    <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-white transition group-hover:text-gold sm:text-3xl">
                      {lead.title}
                    </h2>
                    <time className="mt-3 block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/70">
                      {lead.date}
                    </time>
                  </div>
                </Link>

                <div data-reveal="right">
                  <p className="border-b border-white/15 pb-4 text-lg font-semibold">Tin mới nhất</p>
                  <ul className="divide-y divide-white/10">
                    {(rest.length ? rest : newsArticles.filter((a) => a.slug !== lead.slug))
                      .slice(0, 3)
                      .map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/tin-tuc/${item.slug}`}
                            className="group grid grid-cols-[5.5rem_1fr] gap-4 py-4"
                          >
                            <div className="relative aspect-[16/11] self-start overflow-hidden border border-white/15">
                              <Image
                                src={item.image}
                                alt=""
                                fill
                                className="object-cover transition duration-500 group-hover:scale-110"
                                sizes="88px"
                              />
                            </div>
                            <div>
                              <time className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
                                {item.date}
                              </time>
                              <h3 className="mt-1.5 text-sm font-semibold leading-snug text-white/90 transition group-hover:text-gold">
                                {item.title}
                              </h3>
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-white/70">Chưa có bài viết trong chuyên mục này.</p>
            )}
          </div>
        </section>

        <section className={sectionY}>
          <div className={wrap}>
            <div className="mb-8 flex flex-wrap gap-2" data-reveal>
              {newsCategories.map((cat) => {
                const isActive = cat === active;
                const href = cat === "Tất cả" ? "/tin-tuc" : `/tin-tuc?muc=${encodeURIComponent(cat)}`;
                return (
                  <Link
                    key={cat}
                    href={href}
                    className={`inline-flex min-h-11 items-center border px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition ${
                      isActive
                        ? "border-accent bg-accent text-on-accent"
                        : "border-line text-muted hover:border-fg hover:text-fg"
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(lead ? items.filter((item) => item.slug !== lead.slug) : items).map((item, i) => (
                <li
                  key={item.slug}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">
                        {item.category}
                      </p>
                      <h2 className="mt-2 text-[1.05rem] font-semibold leading-snug transition group-hover:text-muted">
                        {item.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                        {item.excerpt}
                      </p>
                      <time className={`${meta} mt-auto pt-5`}>{item.date}</time>
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
