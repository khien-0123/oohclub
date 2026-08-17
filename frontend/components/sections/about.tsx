import Image from "next/image";
import { about } from "@/content/home";
import { SectionHeading } from "@/components/ui/section-heading";
import { sectionY, wrap } from "@/components/ui/styles";

export function About() {
  return (
    <section id="gioi-thieu" className={`${sectionY} scroll-mt-24`}>
      <div className={wrap}>
        <SectionHeading kicker="Giới thiệu" title="Về OOHClub" />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div
            className="relative aspect-[4/3] overflow-hidden border border-line bg-bg-soft lg:col-span-7 lg:aspect-[16/11]"
            data-reveal="left"
          >
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          <dl className="flex flex-col lg:col-span-5" data-reveal="right">
            {about.identity.map((item) => (
              <div
                key={item.label}
                className="group flex flex-1 flex-col justify-center border-t border-line py-5 last:border-b"
              >
                <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold leading-snug">
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-muted"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 pt-2">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-0">
            <article
              className="sm:pr-10 lg:pr-14"
              data-reveal
              style={{ ["--reveal-delay" as string]: "60ms" }}
            >
              <h3 className="text-xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.35rem]">
                {about.criteriaTitle}
              </h3>
              <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted">
                {about.criteria.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </article>

            <article
              className="border-t border-line pt-10 sm:border-l sm:border-t-0 sm:border-gold/45 sm:pl-10 sm:pt-0 lg:pl-14"
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              <h3 className="text-xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.35rem]">
                {about.purposeTitle}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                {about.purpose}
              </p>
            </article>
          </div>

          <div className="mt-10" data-reveal>
            <a
              href={about.moreHref}
              className="inline-flex items-center border border-fg/25 px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fg transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
            >
              {about.moreLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
