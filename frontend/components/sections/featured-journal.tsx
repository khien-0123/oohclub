import Image from "next/image";
import Link from "next/link";
import { DateBadge } from "@/components/ui/date-badge";
import { Kicker } from "@/components/ui/kicker";
import { SectionHeading } from "@/components/ui/section-heading";
import { featured } from "@/content/home";
import { getEventByTitle } from "@/content/events";
import { newsArticles } from "@/content/news";
import { meta, sectionY, wrap } from "@/components/ui/styles";

function hrefForFeatured(title: string) {
  const event = getEventByTitle(title);
  if (event) return `/su-kien/${event.slug}`;
  const article = newsArticles.find((item) => item.title === title);
  if (article) return `/tin-tuc/${article.slug}`;
  return "/su-kien";
}

export function FeaturedJournal() {
  const [lead, ...rest] = featured;
  const [sideLead, ...sideRest] = rest;
  const sideSmall = sideRest.slice(0, 3);
  const below = sideRest.slice(3, 5);

  return (
    <section id="su-kien-noi-bat" className={`${sectionY} scroll-mt-24 border-b border-line`}>
      <div className={wrap}>
        <SectionHeading
          kicker="Nổi bật"
          title="Sự kiện nổi bật"
          action={{ href: "/su-kien", label: "Xem sự kiện" }}
        />

        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-10 lg:col-span-8">
            <article
              className="grid min-w-0 border border-[#e51d73]/40 transition hover:border-[#e51d73] sm:grid-cols-[minmax(0,5fr)_minmax(0,3fr)]"
              data-reveal
            >
              <div className="relative aspect-[16/10] min-h-[16rem] overflow-hidden bg-bg-soft sm:aspect-auto sm:min-h-[20rem] sm:border-r sm:border-[#e51d73]/25">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <DateBadge date={lead.date} />
              </div>
              <div className="flex flex-col justify-center border-t border-[#e51d73]/25 bg-bg p-6 sm:border-t-0 sm:px-8 sm:py-8">
                <Kicker>Sự kiện</Kicker>
                <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-[1.35rem]">
                  {lead.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{lead.excerpt}</p>
                <Link
                  href={hrefForFeatured(lead.title)}
                  className="mt-5 inline-block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-fg transition hover:text-gold"
                >
                  Xem chi tiết
                </Link>
              </div>
            </article>

            <ul className="grid gap-8 sm:grid-cols-2 sm:items-stretch">
              {below.map((item, i) => (
                <li
                  key={item.title}
                  className="flex"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${80 + i * 100}ms` }}
                >
                  <Link
                    href={hrefForFeatured(item.title)}
                    className="group flex h-full w-full flex-col overflow-hidden border border-[#e51d73]/40 bg-bg transition hover:border-[#e51d73]"
                  >
                    <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-[#e51d73]/25 bg-bg-soft">
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
                      <Kicker className="shrink-0">Sự kiện</Kicker>
                      <h3 className="mt-2 h-[3.25rem] shrink-0 overflow-hidden text-[1.15rem] font-semibold leading-snug transition group-hover:text-muted">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.excerpt}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside
            className="flex h-full flex-col lg:col-span-4 lg:self-stretch"
            data-reveal="right"
          >
            <Kicker>Sự kiện khác</Kicker>

            <Link href={hrefForFeatured(sideLead.title)} className="group mt-5 block">
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
                <Image
                  src={sideLead.image}
                  alt={sideLead.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <DateBadge date={sideLead.date} />
              </div>
              <h3 className="mt-4 text-[1.05rem] font-semibold leading-snug transition group-hover:text-muted">
                {sideLead.title}
              </h3>
              <time className={`${meta} mt-2 block`}>{sideLead.date}</time>
            </Link>

            <ul className="mt-5 flex flex-1 flex-col divide-y divide-line border-y border-line">
              {sideSmall.map((item) => (
                <li key={item.title} className="flex flex-1">
                  <Link
                    href={hrefForFeatured(item.title)}
                    className="group grid flex-1 grid-cols-[1fr_5.5rem] items-center gap-4 py-4"
                  >
                    <div>
                      <time className={meta}>{item.date}</time>
                      <h3 className="mt-1.5 text-[0.95rem] font-semibold leading-snug transition group-hover:text-muted">
                        {item.title}
                      </h3>
                    </div>
                    <div className="relative aspect-[4/3] self-center overflow-hidden bg-bg-soft">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="88px"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
