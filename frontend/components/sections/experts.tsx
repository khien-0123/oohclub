import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { experts } from "@/content/home";
import { sectionY, wrap } from "@/components/ui/styles";

export function Experts() {
  return (
    <section
      id="chuyen-gia"
      className={`${sectionY} scroll-mt-24 border-b border-line bg-bg-soft/60`}
    >
      <div className={wrap}>
        <SectionHeading
          kicker="Cộng đồng"
          title="Góc chuyên gia"
          description="Những chuyên gia ngành quảng cáo ngoài trời trên OOHClub."
          className="mb-12"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Con số lớn */}
          <div className="flex lg:col-span-4 lg:self-stretch" data-reveal>
            <div className="flex w-full flex-col justify-center border-b-2 border-gold pb-6 text-center lg:border-b-0 lg:border-l-2 lg:border-gold lg:pb-0 lg:pl-8">
              <p className="text-7xl font-semibold leading-none text-accent sm:text-8xl">
                {experts.length}
              </p>
              <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
                chuyên gia đang chia sẻ kinh nghiệm và góc nhìn cùng cộng đồng OOHClub.
              </p>
            </div>
          </div>

          {/* Danh sách avatar + tên, 2 cột */}
          <ul
            id="thanh-vien"
            className="grid min-w-0 scroll-mt-24 gap-x-8 self-start sm:grid-cols-2 sm:gap-x-12 lg:col-span-8"
            data-reveal
          >
            {experts.map((expert) => {
              const initials = expert.name
                .split(" ")
                .slice(-2)
                .map((part) => part[0])
                .join("");
              const image = "image" in expert ? expert.image : undefined;

              return (
                <li key={expert.name} className="border-b border-line">
                  <a href="#" className="group flex items-center gap-4 py-3.5">
                    {image ? (
                      <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-4 ring-accent-soft transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={image}
                          alt={expert.name}
                          fill
                          className="object-cover object-top"
                          sizes="40px"
                        />
                      </span>
                    ) : (
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-bold text-on-accent ring-4 ring-line transition-transform duration-300 group-hover:scale-110">
                        {initials}
                      </span>
                    )}

                    <span className="text-[0.95rem] font-medium transition group-hover:text-muted">
                      {expert.name}
                    </span>

                    <span
                      aria-hidden
                      className="ml-auto h-px w-5 bg-line transition-all group-hover:w-9 group-hover:bg-gold"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
