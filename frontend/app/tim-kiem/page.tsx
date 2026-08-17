import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { searchContent } from "@/lib/search";

type Props = {
  searchParams: Promise<{ s?: string }>;
};

export async function generateMetadata({ searchParams }: Props) {
  const { s } = await searchParams;
  const q = (s ?? "").trim();
  return {
    title: q
      ? `Kết quả tìm kiếm: ${q} — OOHClub`
      : "Tìm kiếm — OOHClub",
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { s } = await searchParams;
  const query = (s ?? "").trim();
  const results = query ? searchContent(query) : [];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-line bg-bg-soft">
          <div className="wrap section" data-reveal>
            <p className="kicker">Tìm kiếm</p>
            <h1 className="heading">
              {query ? (
                <>
                  Kết quả tìm kiếm: <span className="text-accent">{query}</span>
                </>
              ) : (
                "Tìm kiếm nội dung"
              )}
            </h1>
            <p className="mt-3 text-sm text-muted">
              {query ? (
                <>
                  Trang chủ / Kết quả cho &lsquo;{query}&rsquo;
                  {results.length > 0 ? ` — ${results.length} kết quả` : ""}
                </>
              ) : (
                "Nhập từ khóa ở thanh tìm kiếm trên header."
              )}
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            {!query ? (
              <p className="text-muted" data-reveal>
                Chưa có từ khóa tìm kiếm.
              </p>
            ) : results.length === 0 ? (
              <p className="text-muted" data-reveal>
                Không tìm thấy nội dung liên quan tới &ldquo;{query}&rdquo;.
              </p>
            ) : (
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((item, i) => (
                  <li
                    key={`${item.type}-${item.title}`}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
                  >
                    <Link href="/#tin-tuc" className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <p className="kicker mt-4">{item.type}</p>
                      <h2 className="mt-2 text-lg font-semibold leading-snug transition group-hover:text-gold">
                        {item.title}
                      </h2>
                      <time className="meta mt-2 block">{item.date}</time>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
