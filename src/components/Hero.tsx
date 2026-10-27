"use client";

import dynamic from "next/dynamic";
import HeroSlideView, { heroHeight } from "@/components/hero/HeroSlideView";
import { heroSlides } from "@/data/site";

// The first slide is prerendered as static HTML; Swiper takes over once it loads in the browser.
function StaticHero() {
  return (
    <section className={`relative overflow-hidden bg-navy-900 ${heroHeight}`}>
      <HeroSlideView slide={heroSlides[0]} index={0} active />
    </section>
  );
}

const HeroCarousel = dynamic(() => import("@/components/hero/HeroCarousel"), {
  ssr: false,
  loading: StaticHero,
});

export default function Hero() {
  return <HeroCarousel />;
}
