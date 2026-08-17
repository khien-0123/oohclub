import Image from "next/image";
import { experts } from "@/content/home";


export function Experts() {
  return (
    <section id="chuyen-gia" className="section scroll-mt-24 border-b border-line bg-bg-soft/60">
      <div className="wrap">
        <div className="mb-12 max-w-2xl" data-reveal>
          <p className="kicker">Cộng đồng</p>
          <h2 className="heading">Góc chuyên gia</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Những chuyên gia ngành quảng cáo ngoài trời trên OOHClub.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Con số lớn */}
          <div className="lg:col-span-4" data-reveal="left">
            <div className="border-b-2 border-gold pb-6 lg:border-b-0 lg:border-l-2 lg:border-gold lg:pb-0 lg:pl-8">
              <p className="text-7xl font-semibold leading-none text-accent sm:text-8xl">
                {experts.length}
              </p>
              <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
                chuyên gia đang chia sẻ kinh nghiệm và góc nhìn cùng cộng đồng OOHClub.
              </p>
            </div>
          </div>

          {/* Danh sách avatar + tên, 2 cột */}
          <ul
            id="thanh-vien"
            className="grid scroll-mt-24 gap-x-12 self-start sm:grid-cols-2 lg:col-span-8"
            data-reveal="right"
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
