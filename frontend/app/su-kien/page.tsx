import Image from "next/image";
import Link from "next/link";
import { DateBadge } from "@/components/ui/date-badge";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Kicker } from "@/components/ui/kicker";
import { meta, pageBannerOverlay, sectionY, wrap } from "@/components/ui/styles";
import {
  eventBanner,
  eventFilters,
  facebookGroupHref,
  getEventsByFilter,
  getUpcomingEvents,
  isEventUpcoming,
  type EventFilter,
  type EventItem,
} from "@/content/events";

type Props = {
  searchParams: Promise<{ muc?: string }>;
};

export const metadata = {
  title: "Sự kiện — OOHClub",
  description:
    "Lịch hội thảo, OOHCafe và networking của Câu lạc bộ Quảng cáo ngoài trời TP.HCM — trực thuộc Hội Quảng cáo TP.HCM (HAA).",
};

function filterHref(filter: EventFilter) {
  return filter === "Tất cả" ? "/su-kien" : `/su-kien?muc=${encodeURIComponent(filter)}`;
}

function EventCard({ item, index }: { item: EventItem; index: number }) {
  const past = !isEventUpcoming(item);

  return (
    <li data-reveal style={{ ["--reveal-delay" as string]: `${(index % 3) * 80}ms` }}>
      <Link
        href={`/su-kien/${item.slug}`}
        className="group flex h-full flex-col border border-[#e51d73]/40 bg-bg transition hover:border-[#e51d73]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[#e51d73]/25 bg-bg-soft">
          <Image
            src={item.image}
            alt=""
            fill
            className={`object-cover transition duration-500 group-hover:scale-105 ${past ? "grayscale-[0.35]" : ""}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <DateBadge date={item.date} />
          {past ? (
            <span className="absolute right-0 top-0 bg-ink/80 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-white/85">
              Đã diễn ra
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">{item.category}</p>
          <h2 className="mt-2 text-[1.05rem] font-semibold leading-snug transition group-hover:text-muted">
            {item.title}
          </h2>
          <p className={`${meta} mt-2`}>
            {item.city}
            {item.venue ? ` · ${item.venue}` : ""}
          </p>
          <span className="mt-auto pt-5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-fg opacity-70 transition group-hover:text-gold group-hover:opacity-100">
            Xem chi tiết
          </span>
        </div>
      </Link>
    </li>
  );
}

export default async function EventsPage({ searchParams }: Props) {
  const { muc } = await searchParams;
  const active = eventFilters.includes(muc as EventFilter) ? (muc as EventFilter) : "Tất cả";
  const items = getEventsByFilter(active);
  const featured =
    active === "Đã diễn ra"
      ? undefined
      : active === "Tất cả" || active === "Sắp diễn ra"
        ? getUpcomingEvents()[0]
        : items.find((item) => isEventUpcoming(item));
  const showFeaturedSection = active === "Tất cả" || active === "Sắp diễn ra" || Boolean(featured);
  const gridItems = featured ? items.filter((item) => item.slug !== featured.slug) : items;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[18rem] overflow-hidden border-b border-line bg-white sm:min-h-[22rem]">
          <Image
            src={eventBanner.image}
            alt={eventBanner.imageAlt}
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
          <div className={pageBannerOverlay} />
          <div className={`${wrap} relative flex min-h-[18rem] items-center py-12 sm:min-h-[22rem] sm:py-16`}>
            <div className="max-w-xl animate-fade-up" data-reveal>
              <h1 className="text-[clamp(2rem,5vw,3.1rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-ink">
                {eventBanner.title}
              </h1>
              <p className="mt-4 max-w-md text-[0.95rem] font-medium leading-relaxed text-ink">{eventBanner.support}</p>
              <p className="mt-4 text-sm text-fg/70">
                <Link href="/" className="transition hover:text-gold">
                  Trang chủ
                </Link>
                <span className="mx-2 text-line">/</span>
                Sự kiện
              </p>
            </div>
          </div>
        </section>

        {showFeaturedSection ? (
          <section className={`${sectionY} border-b border-line`}>
            <div className={wrap}>
              {featured ? (
                <Link
                  href={`/su-kien/${featured.slug}`}
                  className="group grid min-w-0 border border-[#e51d73]/40 transition hover:border-[#e51d73] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                  data-reveal
                >
                  <div className="relative aspect-[16/10] min-h-[16rem] overflow-hidden bg-bg-soft lg:aspect-auto lg:min-h-[22rem] lg:border-r lg:border-[#e51d73]/25">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      priority
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <DateBadge date={featured.date} />
                  </div>
                  <div className="flex flex-col justify-center border-t border-[#e51d73]/25 bg-bg p-6 sm:px-8 sm:py-10 lg:border-t-0">
                    <Kicker>Sắp diễn ra</Kicker>
                    <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">
                      {featured.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-snug transition group-hover:text-muted sm:text-[1.7rem]">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{featured.excerpt}</p>
                    <p className={`${meta} mt-4`}>
                      {featured.date}
                      {featured.time ? ` · ${featured.time}` : ""}
                      {` · ${featured.city}`}
                    </p>
                    <span className="mt-6 inline-block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-fg transition group-hover:text-gold">
                      Xem chi tiết
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="border border-line bg-bg-soft px-6 py-10 sm:px-10" data-reveal>
                  <Kicker>Sắp diễn ra</Kicker>
                  <h2 className="mt-4 text-xl font-semibold">Chưa có sự kiện mới trên lịch</h2>
                  <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted">
                    Khi câu lạc bộ công bố hội thảo hoặc OOHCafe tiếp theo, lịch sẽ hiện tại đây. Theo dõi fanpage để nhận thông báo sớm.
                  </p>
                  <a
                    href={facebookGroupHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center border border-fg/25 px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fg transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    Theo dõi trên Facebook
                  </a>
                </div>
              )}
            </div>
          </section>
        ) : null}

        <section className={sectionY}>
          <div className={wrap}>
            <div className="mb-8 flex flex-wrap gap-2" data-reveal>
              {eventFilters.map((filter) => {
                const isActive = filter === active;
                return (
                  <Link
                    key={filter}
                    href={filterHref(filter)}
                    className={`inline-flex min-h-11 items-center border px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition ${
                      isActive
                        ? "border-accent bg-accent text-on-accent"
                        : "border-line text-muted hover:border-fg hover:text-fg"
                    }`}
                  >
                    {filter}
                  </Link>
                );
              })}
            </div>

            {gridItems.length ? (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gridItems.map((item, i) => (
                  <EventCard key={item.slug} item={item} index={i} />
                ))}
              </ul>
            ) : (
              <p className="text-muted" data-reveal>
                Chưa có sự kiện trong mục này.
              </p>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
