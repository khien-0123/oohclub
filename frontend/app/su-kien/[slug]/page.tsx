import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DateBadge } from "@/components/ui/date-badge";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Kicker } from "@/components/ui/kicker";
import { heading, meta, sectionY, wrap } from "@/components/ui/styles";
import {
  clubEvents,
  facebookGroupHref,
  getEventBySlug,
  getRelatedEvents,
  isEventUpcoming,
} from "@/content/events";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clubEvents.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Sự kiện — OOHClub" };
  return {
    title: `${event.title} — OOHClub`,
    description: event.excerpt,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const related = getRelatedEvents(event.slug);
  const upcoming = isEventUpcoming(event);
  const facts = [
    { label: "Ngày", value: event.date },
    event.time ? { label: "Giờ", value: event.time } : null,
    { label: "Địa điểm", value: `${event.venue}, ${event.city}` },
    { label: "Loại", value: event.category },
  ].filter((item): item is { label: string; value: string } => item !== null);

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <section className="border-b border-line bg-bg-soft">
            <div className={`${wrap} ${sectionY}`} data-reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <DateBadge date={event.date} size="lg" />
                <div className="min-w-0 max-w-3xl">
                  <Kicker>{event.category}</Kicker>
                  <h1 className={heading}>{event.title}</h1>
                  <p className="mt-3 text-sm text-muted">
                    <Link href="/" className="transition hover:text-gold">
                      Trang chủ
                    </Link>
                    <span className="mx-2 text-line">/</span>
                    <Link href="/su-kien" className="transition hover:text-gold">
                      Sự kiện
                    </Link>
                    <span className="mx-2 text-line">/</span>
                    {event.title}
                  </p>
                </div>
              </div>

              <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-bg px-5 py-4">
                    <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">{fact.label}</dt>
                    <dd className="mt-2 text-[0.95rem] font-semibold leading-snug">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <div className={`${wrap} ${sectionY}`}>
            <div className="relative aspect-[16/9] overflow-hidden border border-line bg-bg-soft" data-reveal>
              <Image
                src={event.image}
                alt={event.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 80rem"
              />
              {!upcoming ? (
                <span className="absolute right-0 top-0 bg-ink/80 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/90">
                  Đã diễn ra
                </span>
              ) : null}
            </div>

            <div className="mx-auto mt-10 max-w-2xl space-y-5 text-[0.95rem] leading-relaxed text-muted" data-reveal>
              {event.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap gap-3" data-reveal>
              <a
                href={facebookGroupHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center border border-fg/25 px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fg transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
              >
                Theo dõi trên Facebook
              </a>
              <Link
                href="/su-kien"
                className="inline-flex min-h-11 items-center border border-fg/25 px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fg transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
              >
                ← Tất cả sự kiện
              </Link>
            </div>
          </div>
        </article>

        <section className={`${sectionY} border-t border-line bg-bg-soft/60`}>
          <div className={wrap}>
            <Kicker>Lịch khác</Kicker>
            <h2 className={`${heading} mb-8`}>Sự kiện liên quan</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <li
                  key={item.slug}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                >
                  <Link
                    href={`/su-kien/${item.slug}`}
                    className="group flex h-full flex-col border border-[#e51d73]/40 bg-bg transition hover:border-[#e51d73]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-[#e51d73]/25">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <DateBadge date={item.date} />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-accent">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-semibold leading-snug transition group-hover:text-muted">
                        {item.title}
                      </h3>
                      <p className={`${meta} mt-auto pt-4`}>{item.city}</p>
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
