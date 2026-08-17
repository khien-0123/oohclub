import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { AdFormats } from "@/components/sections/ad-formats";
import { Experts } from "@/components/sections/experts";
import { FeaturedJournal } from "@/components/sections/featured-journal";
import { Hero } from "@/components/sections/hero";
import { NewsAndEvents } from "@/components/sections/news-and-events";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FeaturedJournal />
        <NewsAndEvents />
        <AdFormats />
        <Experts />
      </main>
      <SiteFooter />
    </>
  );
}
