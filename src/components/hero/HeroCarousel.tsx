"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import HeroSlideView, { heroHeight } from "@/components/hero/HeroSlideView";
import { heroSlides } from "@/data/site";

const DELAY = 6500;

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <section className="hero relative overflow-hidden bg-navy-900" aria-roledescription="carousel" aria-label="Highlights">
      <Swiper
        modules={[Autoplay, EffectFade, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        loop
        keyboard={{ enabled: true }}
        autoplay={{ delay: DELAY, disableOnInteraction: false, pauseOnMouseEnter: false }}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        onSlideChange={(s) => setActive(s.realIndex)}
        onAutoplayTimeLeft={(_, __, p) => setProgress(1 - p)}
        className={heroHeight}
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.image}>
            <HeroSlideView slide={slide} index={i} active={active === i} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide indicators */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10">
        <div className="pointer-events-auto mx-auto flex max-w-[1366px] items-end px-4 sm:px-8 lg:px-10">
          <div className="flex flex-1 items-end gap-3 sm:gap-5">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => swiperRef.current?.slideToLoop(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                aria-current={active === i}
                className="group w-full max-w-[150px] text-left"
              >
                <span
                  className={`hidden text-[13px] font-medium transition-colors sm:block ${
                    active === i ? "text-white" : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  <span className="text-cyan-accent">0{i + 1}</span> {slide.eyebrow.split(" / ").pop()}
                </span>
                <span className="mt-2 block h-[2px] w-full bg-white/20">
                  <span
                    className="block h-full bg-cyan-accent"
                    style={{ width: active === i ? `${progress * 100}%` : "0%" }}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
