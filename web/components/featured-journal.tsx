import Image from "next/image";
import { featured } from "@/content/home";

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
    <section id="su-kien-noi-bat" className="section scroll-mt-24 border-b border-line">
      <div className="wrap">
        <div
          className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
          data-reveal
        >
          <div>
            <p className="kicker">Nổi bật</p>
            <h2 className="heading">Sự kiện nổi bật</h2>
          </div>
          <a
            href="#su-kien"
            className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-fg transition hover:text-gold"
          >
            Xem sự kiện →
          </a>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Cột trái: lead + 2 card kích thước cũ (~1/3 trang) */}
          <div className="flex flex-col gap-10 lg:col-span-8">
            <article className="grid sm:grid-cols-[5fr_3fr]" data-reveal="left">
              <div className="relative min-h-[16rem] overflow-hidden bg-bg-soft sm:min-h-[20rem]">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <DateBadge date={lead.date} />
              </div>
              <div className="flex flex-col justify-center bg-bg-soft p-6 sm:px-8 sm:py-8">
                <p className="kicker">Sự kiện</p>
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
                  <a href="#su-kien" className="group flex h-full w-full flex-col">
                    <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-bg-soft">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <DateBadge date={item.date} />
                    </div>
                    <div className="mt-5 flex flex-1 flex-col">
                      <p className="kicker shrink-0">Sự kiện</p>
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
            <p className="kicker">Sự kiện khác</p>

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
              <time className="meta mt-2 block">{sideLead.date}</time>
            </a>

            <ul className="mt-5 flex flex-1 flex-col divide-y divide-line border-y border-line">
              {sideSmall.map((item) => (
                <li key={item.title} className="flex flex-1">
                  <a
                    href="#su-kien"
                    className="group grid flex-1 grid-cols-[1fr_5.5rem] items-center gap-4 py-4"
                  >
                    <div>
                      <time className="meta">{item.date}</time>
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
