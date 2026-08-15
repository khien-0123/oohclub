import { About } from "@/components/about";
import { AdFormatsEnhanced } from "@/components/ad-formats-enhanced";
import { ExpertsEnhanced } from "@/components/experts-enhanced";
import { FeaturedJournal } from "@/components/featured-journal";
import { Hero } from "@/components/hero";
import { NewsAndEventsEnhanced } from "@/components/news-and-events-enhanced";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FeaturedJournal />
        <NewsAndEventsEnhanced />
        <AdFormatsEnhanced />
        <ExpertsEnhanced />
      </main>
      <SiteFooter />
    </>
  );
}
