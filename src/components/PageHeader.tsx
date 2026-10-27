import Image from "next/image";
import Rings from "@/components/Rings";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imagePosition?: string; // CSS object-position for the photo, e.g. "50% 30%"
  credit?: { text: string; href: string }; // required for CC BY / CC BY-SA photos
};

// A shorter take on the home hero: optional photo under the same navy wash and rings; the grid shows only without a photo.
export default function PageHeader({ eyebrow, title, intro, image, imagePosition, credit }: Props) {
  return (
    <section className="bg-atmos relative overflow-hidden text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,31,0.94)_0%,rgba(11,26,43,0.82)_38%,rgba(15,58,74,0.5)_72%,rgba(27,85,99,0.3)_100%)]" />
        </>
      )}
      {!image && <div className="art-lines absolute inset-0" />}
      <Rings className="-right-[420px] -top-[520px] h-[1100px] w-[1100px]" />
      <div className="relative mx-auto max-w-[1366px] px-4 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <p className="eyebrow">AtmosTech Lab / {eyebrow}</p>
        <h1 className="display-title hero-title mt-4 text-[clamp(2.5rem,5.5vw,4.5rem)]">{title}</h1>
        {intro && <p className="mt-5 max-w-[640px] text-lg leading-relaxed text-slate-200">{intro}</p>}
      </div>
      {credit && (
        <a
          href={credit.href}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 right-4 z-10 text-[11px] text-white/50 hover:text-white sm:right-8 lg:right-10"
        >
          {credit.text}
        </a>
      )}
    </section>
  );
}
