import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { adFormatsPrimary, adFormatTags, adFormatTagImages } from "@/content/home";
import { meta, sectionY, tag, wrap } from "@/components/ui/styles";

/**
 * Mosaic trên: 3 loại hình chữ to nhất trang thật —
 * OOH (22pt + quảng cáo ngoài trời 19.5pt) làm tile lớn, DOOH + Creative OOH cột phải.
 * Slider dưới: các tag >9pt còn lại, tự chạy, 4 tile hiển thị một lúc.
 */
const topTiles = adFormatsPrimary.slice(0, 3);
const topTagLabels = new Set(["OOH", "quảng cáo ngoài trời", "DOOH", "creative OOH"]);

export function AdFormats() {
  const sliderTags = adFormatTags
    .filter((t) => t.weight >= 2 && !topTagLabels.has(t.label))
    .slice()
    .sort((a, b) => b.weight - a.weight);
  const chipTags = adFormatTags.filter((t) => t.weight === 1);

  return (
    <section
      id="loai-hinh"
      className={`${sectionY} scroll-mt-24 overflow-x-clip border-b border-line`}
    >
      <div className={`${wrap} min-w-0`}>
        <SectionHeading
          kicker="Chuyên mục"
          title="Loại hình quảng cáo"
          description="Các định dạng OOH được cộng đồng quan tâm trên OOHClub."
          className="mb-12"
        />

        {/* Mosaic 3 ảnh trên */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topTiles.map((item, i) => {
            const isLead = i === 0;

            return (
              <li
                key={item.name}
                className={`min-w-0 ${isLead ? "sm:col-span-2 sm:row-span-2" : ""}`}
                data-reveal="scale"
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              >
                <article
                  className={`group relative h-full w-full cursor-pointer overflow-hidden border border-line ${
                    isLead ? "aspect-[16/10] sm:aspect-auto sm:min-h-[28rem]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes={
                      isLead
                        ? "(max-width: 640px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition group-hover:from-black/90" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3
                      className={`font-semibold leading-snug text-white transition group-hover:text-gold ${
                        isLead ? "text-2xl sm:text-3xl" : "text-lg"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed text-white/70 ${
                        isLead ? "max-w-md text-sm" : "text-xs"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Slider tự chạy — các chuyên mục >9pt còn lại, 4 tile một khung nhìn */}
        <div className="relative mt-4 max-w-full overflow-x-hidden hover:[&_.animate-marquee]:[animation-play-state:paused]">
          <div className="flex w-max max-w-none animate-marquee gap-4">
            {[...sliderTags, ...sliderTags].map((tag, i) => {
              const image = adFormatTagImages[tag.label];

              return (
                <article
                  key={`${tag.label}-${i}`}
                  className="group relative aspect-[16/10] w-[11.5rem] shrink-0 cursor-pointer overflow-hidden border border-line sm:w-64 lg:w-[18.25rem]"
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={tag.label}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                      sizes="292px"
                    />
                  ) : (
                    <div className="h-full w-full bg-bg-soft" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 break-words text-sm font-semibold leading-snug text-white transition group-hover:text-gold sm:bottom-3 sm:left-4 sm:right-4 sm:text-base">
                    {tag.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Tag 8pt — chữ thường, làm chip */}
        <div className="mt-10 min-w-0">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <p className={tag}>Chuyên mục khác</p>
            <span className={`${meta} shrink-0`}>{chipTags.length} chuyên mục</span>
          </div>
          <ul className="flex max-w-full flex-wrap gap-2">
            {chipTags.map((item) => (
              <li key={item.label} className="max-w-full">
                <a
                  href="#"
                  className="inline-flex max-w-full items-center border border-line px-3 py-2 text-left text-xs leading-snug text-muted break-words transition hover:border-fg hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
