import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { latestNews } from "@/content/home";
import { sectionY, wrap } from "@/components/ui/styles";

/** Khối magazine nền tối — "Tin tức mới" */
export function News() {
  const [lead, ...rest] = latestNews;
  const sideItems = rest.slice(0, 3);
  const bottomItems = rest.slice(3);

  return (
    <section id="tin-tuc" className="scroll-mt-24 border-b border-line bg-ink text-on-accent">
      <div className={`${wrap} ${sectionY}`}>
        <SectionHeading kicker="Cập nhật" title="Tin tức mới" variant="gold" className="mb-10" />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Bài nổi bật */}
          <article
            className="group relative min-h-[20rem] cursor-pointer overflow-hidden sm:min-h-[26rem] lg:col-span-2"
            data-reveal="left"
          >
            <Image
              src={lead.image}
              alt={lead.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <time className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold">
                {lead.date}
              </time>
              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-white transition group-hover:text-gold sm:text-3xl">
                {lead.title}
              </h3>
            </div>
          </article>

          {/* Sidebar: Tin mới nhất */}
          <div data-reveal="right">
            <a
              href="#"
              className="group/link flex items-center justify-between border-b border-white/15 pb-4"
            >
              <h3 className="text-lg font-semibold transition group-hover/link:text-gold">
                Xem tất cả tin mới nhất
              </h3>
              <span aria-hidden className="text-gold transition group-hover/link:translate-x-1">
                →
              </span>
            </a>
            <ul className="divide-y divide-white/10">
              {sideItems.map((item) => (
                <li key={item.title}>
                  <article className="group grid cursor-pointer grid-cols-[5.5rem_1fr] gap-4 py-4">
                    <div className="relative aspect-[16/11] self-start overflow-hidden border border-white/15">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                        sizes="88px"
                      />
                    </div>
                    <div>
                      <time className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
                        {item.date}
                      </time>
                      <h4 className="mt-1.5 text-sm font-semibold leading-snug text-white/90 transition group-hover:text-gold">
                        {item.title}
                      </h4>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hàng card dưới */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {bottomItems.map((item, i) => (
            <article
              key={item.title}
              className="group cursor-pointer"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden border border-white/15">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <time className="mt-4 block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-gold">
                {item.date}
              </time>
              <h4 className="mt-2 text-base font-semibold leading-snug text-white/90 transition group-hover:text-gold">
                {item.title}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
