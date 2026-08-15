import Image from "next/image";
import { hero } from "@/content/home";

export function Hero() {
  const [headlineBefore, headlineAfter] = hero.headline.split("OOHClub");
  const headlineTail = headlineAfter?.replace(/^\s*[–—-]\s*/, "") ?? "";

  return (
    <section className="relative min-h-[32rem] overflow-hidden border-b border-line bg-white sm:min-h-[40rem] lg:min-h-[calc(100svh-4.5rem)]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover object-[center_70%]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 lg:via-white/70 lg:to-transparent" />

      <div className="wrap relative flex min-h-[32rem] items-center py-16 sm:min-h-[40rem] lg:min-h-[calc(100svh-4.5rem)] lg:py-24">
        <div className="max-w-xl animate-fade-up">
          <p className="kicker">OOHClub · HO ChI MINH CITY</p>

          <h1 className="mt-6 text-[clamp(2.2rem,3.8vw,3.4rem)] font-semibold leading-[1.16] tracking-[-0.01em]">
            {headlineBefore}
            <span className="text-accent">O</span>
            <span className="o-gold">O</span>
            <span className="text-muted">HClub</span>
            <br />
            {headlineTail}
          </h1>

          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted">
            {hero.support}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center bg-ink px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-on-accent transition hover:bg-fg"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center border border-fg/25 bg-white/80 px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fg transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
