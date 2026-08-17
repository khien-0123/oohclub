import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { AdFormats } from "@/components/sections/ad-formats";
import { Events } from "@/components/sections/events";
import { Experts } from "@/components/sections/experts";
import { FeaturedJournal } from "@/components/sections/featured-journal";
import { Hero } from "@/components/sections/hero";
import { News } from "@/components/sections/news";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FeaturedJournal />
        <News />
        <Events />
        <AdFormats />
        <Experts />
      </main>
      <SiteFooter />
    </>
  );
}
