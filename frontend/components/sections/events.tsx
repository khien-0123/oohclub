import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { latestEvents } from "@/content/home";
import { meta, sectionY, wrap } from "@/components/ui/styles";

/** Khối sáng — "Sự kiện mới" */
export function Events() {
  return (
    <section id="su-kien" className="scroll-mt-24 bg-bg-soft/60">
      <div className={`${wrap} ${sectionY}`}>
        <SectionHeading
          kicker="Lịch"
          title="Sự kiện mới"
          action={{ href: "/su-kien", label: "Xem tất cả sự kiện" }}
          className="mb-10"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestEvents.map((item, i) => (
            <li
              key={item.slug}
              data-reveal="scale"
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <Link
                href={`/su-kien/${item.slug}`}
                className="group flex h-full flex-col border border-[#e51d73]/40 bg-bg transition hover:border-[#e51d73]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#e51d73]/25">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time className={meta}>{item.date}</time>
                  <h3 className="mt-2 text-sm font-semibold leading-snug transition group-hover:text-muted sm:text-[0.95rem]">
                    {item.title}
                  </h3>
                  <span className="mt-auto pt-5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-fg opacity-70 transition group-hover:text-gold group-hover:opacity-100">
                    Xem chi tiết
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
