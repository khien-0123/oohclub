import Image from "next/image";
import { Kicker } from "@/components/ui/kicker";
import { hero } from "@/content/home";
import { oGold, wrap } from "@/components/ui/styles";

export function Hero() {
  const [headlineBefore, headlineAfter] = hero.headline.split("OOHClub");
  const headlineTail = headlineAfter?.replace(/^\s*[–—-]\s*/, "") ?? "";

  return (
    <section className="relative min-h-[32rem] overflow-hidden border-b border-line bg-white sm:min-h-[40rem] lg:min-h-[calc(100svh-4.5rem)]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        preload
        className="object-cover object-[72%_center] sm:object-[center_70%]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#cfdcea] via-[#cfdcea]/80 to-[#cfdcea]/35 sm:bg-gradient-to-r sm:from-[#cfdcea] sm:from-[8%] sm:via-[#cfdcea]/75 sm:via-[38%] sm:to-transparent sm:to-[70%]" />

      <div
        className={`${wrap} relative flex min-h-[32rem] items-center py-14 sm:min-h-[40rem] sm:py-16 lg:min-h-[calc(100svh-4.5rem)] lg:py-24`}
      >
        <div className="mx-auto w-full max-w-xl animate-fade-up text-center sm:mx-0 sm:text-left">
          <Kicker className="justify-center sm:justify-start">
            OOHClub · HO CHI MINH CITY
          </Kicker>

          <h1 className="mt-6 text-[clamp(2rem,8vw,3.4rem)] font-semibold leading-[1.16] tracking-[-0.01em]">
            {headlineBefore}
            <span className="text-accent">O</span>
            <span className={oGold}>O</span>
            <span className="text-muted">HClub</span>
            <br />
            {headlineTail}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-pretty text-[0.95rem] font-medium leading-relaxed text-fg sm:mx-0 sm:max-w-md">
            {hero.support}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center bg-ink px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-on-accent transition hover:bg-fg sm:px-6 sm:py-3.5 sm:text-[0.78rem]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center border border-fg/25 bg-white/80 px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-fg transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-ink sm:px-6 sm:py-3.5 sm:text-[0.78rem]"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
