import Image from "next/image";
import Button from "@/components/Button";
import Rings from "@/components/Rings";
import type { HeroSlide } from "@/data/site";

export const heroHeight = "h-[calc(100svh-80px)] min-h-[620px] lg:h-[760px]";

type Props = {
  slide: HeroSlide;
  index: number;
  active: boolean;
};

// One hero slide: photo, navy wash, rings and copy. Shared by the static first paint and the carousel.
export default function HeroSlideView({ slide, index, active }: Props) {
  return (
    <div className="relative h-full overflow-hidden">
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        priority={index === 0}
        sizes="100vw"
        className={`hero-img object-cover ${active ? "is-active" : ""}`}
      />
      {/* Navy wash keeps the Canva palette and text contrast over any photo */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,31,0.94)_0%,rgba(11,26,43,0.82)_38%,rgba(15,58,74,0.45)_72%,rgba(27,85,99,0.25)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,19,31,0.75)_0%,transparent_35%)]" />
      <Rings className="-right-[500px] -top-[200px] h-[1150px] w-[1150px]" />

      <div className="relative mx-auto flex h-full max-w-[1366px] flex-col justify-center px-4 pb-24 sm:px-8 lg:px-10">
        <div className={`hero-copy max-w-[820px] ${active ? "is-active" : ""}`}>
          <p className="eyebrow text-[0.8125rem]">{slide.eyebrow}</p>
          {index === 0 ? (
            <h1 className="display-title hero-title mt-6 text-[clamp(3.75rem,10vw,8.5rem)] text-white">
              {slide.title}
            </h1>
          ) : (
            <h2 className="display-title mt-6 text-[clamp(3rem,7vw,6.25rem)] text-white">{slide.title}</h2>
          )}
          <p className="mt-8 max-w-[720px] text-[clamp(1.625rem,2.8vw,2.5rem)] leading-tight text-white">
            {slide.subtitle}
          </p>
          <p className="mt-5 max-w-[580px] text-[1.25rem] leading-relaxed text-slate-200">{slide.text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={slide.primary.href}>{slide.primary.label}</Button>
            <Button href={slide.secondary.href} variant="outline">
              {slide.secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
