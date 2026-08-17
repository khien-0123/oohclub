import Image from "next/image";
import { adFormatsPrimary, adFormatTags } from "@/content/home";

/**
 * Mosaic trên: 3 loại hình chữ to nhất trang thật —
 * OOH (22pt + quảng cáo ngoài trời 19.5pt) làm tile lớn, DOOH + Creative OOH cột phải.
 * Slider dưới: các tag >9pt còn lại, tự chạy, 4 tile hiển thị một lúc.
 */
const topTiles = adFormatsPrimary.slice(0, 3);
const topTagLabels = new Set(["OOH", "quảng cáo ngoài trời", "DOOH", "creative OOH"]);

/** Ảnh thật (public/images) gán cho từng chuyên mục trong slider */
const sliderImages: Record<string, string> = {
  traffic: "/images/news-running-man.jpg",
  "Top 10": "/images/news-trends.jpg",
  "Wiki Traffic": "/images/news-growth.jpg",
  Shojiki: "/images/hero-led-nguyen-hue.jpg",
  OOHAward: "/images/gallery-gala.jpg",
  "Nguyễn Lê Phi Sơn": "/images/expert-group-1.jpg",
  "màn hình LED": "/images/gallery-led.jpg",
  creativeOOH: "/images/news-plastic.jpg",
  "báo cáo OOH": "/images/about-meeting.jpg",
  "OOH Award": "/images/featured-adtalk.jpg",
  HAA: "/images/featured-haa-world.jpg",
  "Góc chuyên gia": "/images/expert-group-2.jpg",
  "#quangcaongoaitroi": "/images/cta-bali.jpg",
  "#dangvinhquang": "/images/expert-group-3.jpg",
};

export function AdFormats() {
  const sliderTags = adFormatTags
    .filter((t) => t.weight >= 2 && !topTagLabels.has(t.label))
    .slice()
    .sort((a, b) => b.weight - a.weight);
  const chipTags = adFormatTags.filter((t) => t.weight === 1);

  return (
    <section id="loai-hinh" className="section scroll-mt-24 border-b border-line">
      <div className="wrap">
        <div className="mb-12 max-w-2xl" data-reveal>
          <p className="kicker">Chuyên mục</p>
          <h2 className="heading">Loại hình quảng cáo</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Các định dạng OOH được cộng đồng quan tâm trên OOHClub.
          </p>
        </div>

        {/* Mosaic 3 ảnh trên */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topTiles.map((item, i) => {
            const isLead = i === 0;

            return (
              <li
                key={item.name}
                className={isLead ? "sm:col-span-2 sm:row-span-2" : ""}
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
        <div className="marquee mt-4 overflow-hidden" data-reveal>
          <div className="flex w-max gap-4 animate-marquee">
            {[...sliderTags, ...sliderTags].map((tag, i) => {
              const image = sliderImages[tag.label];

              return (
                <article
                  key={`${tag.label}-${i}`}
                  className="group relative aspect-[16/10] w-56 shrink-0 cursor-pointer overflow-hidden border border-line sm:w-64 lg:w-[18.25rem]"
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
                  <p className="absolute bottom-3 left-4 right-4 break-words text-base font-semibold leading-snug text-white transition group-hover:text-gold">
                    {tag.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Tag 8pt — chữ thường, làm chip */}
        <div className="mt-12 border-t border-line pt-8" data-reveal>
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <p className="tag">Chuyên mục khác</p>
            <span className="meta">{chipTags.length} chuyên mục</span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {chipTags.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="inline-flex items-center border border-line px-3 py-2 text-xs text-muted transition hover:border-fg hover:text-fg"
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
