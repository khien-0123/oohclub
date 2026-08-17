import Image from "next/image";
import { Kicker } from "@/components/ui/kicker";
import { SectionHeading } from "@/components/ui/section-heading";
import { featured } from "@/content/home";
import { meta, sectionY, wrap } from "@/components/ui/styles";

function DateBadge({ date }: { date: string }) {
  const full = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!full) return null;

  return (
    <time
      dateTime={`${full[3]}-${full[2]}-${full[1]}`}
      className="absolute left-0 top-0 z-10 flex w-[3.15rem] flex-col text-center"
    >
      <span className="bg-gold py-1 text-[0.5rem] font-bold uppercase tracking-[0.12em] text-ink">
        Thg {Number(full[2])}
      </span>
      <span className="bg-ink py-1.5 text-[1.15rem] font-semibold leading-none text-white">
        {Number(full[1])}
      </span>
    </time>
  );
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
          action={{ href: "#su-kien", label: "Xem sự kiện" }}
        />

        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Cột trái: lead + 2 card kích thước cũ (~1/3 trang) */}
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
                <a
                  href="#su-kien"
                  className="mt-5 inline-block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-fg transition hover:text-gold"
                >
                  Xem chi tiết
                </a>
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
                  <a
                    href="#su-kien"
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
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột phải: dài bằng cả khối trái */}
          <aside
            className="flex h-full flex-col lg:col-span-4 lg:self-stretch"
            data-reveal="right"
          >
            <Kicker>Sự kiện khác</Kicker>

            <a href="#su-kien" className="group mt-5 block">
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
            </a>

            <ul className="mt-5 flex flex-1 flex-col divide-y divide-line border-y border-line">
              {sideSmall.map((item) => (
                <li key={item.title} className="flex flex-1">
                  <a
                    href="#su-kien"
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
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
