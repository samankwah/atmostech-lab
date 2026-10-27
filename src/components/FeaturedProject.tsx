import Link from "next/link";
import ArtImage from "@/components/ArtImage";
import type { Project } from "@/data/site";

// Image + navy panel row for a featured project; odd rows put the image on the right.
export default function FeaturedProject({
  p,
  index,
  link = true,
  children,
}: {
  p: Project;
  index: number;
  link?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <article id={link ? undefined : p.slug} className="grid scroll-mt-24 md:min-h-[480px] md:grid-cols-2">
      <ArtImage
        src={p.image}
        alt=""
        className={`aspect-[16/10] md:aspect-auto ${index % 2 ? "md:order-last" : ""}`}
      >
        {p.credit && (
          <a
            href={p.credit.href}
            target="_blank"
            rel="noreferrer"
            className="absolute right-3 top-3 bg-navy-950/60 px-2 py-1 text-[10px] text-white/80 hover:text-white"
          >
            {p.credit.text}
          </a>
        )}
      </ArtImage>
      <div className="flex flex-col justify-center bg-navy-800 px-6 py-12 text-white sm:px-12 lg:px-[70px]">
        <p className="eyebrow">{p.category}</p>
        <h3 className="mt-6 text-[clamp(1.75rem,3vw,2.75rem)] leading-tight">
          {link ? (
            <Link href={`/projects#${p.slug}`} className="hover:text-cyan-accent">
              {p.title}
            </Link>
          ) : (
            p.title
          )}
        </h3>
        <p className="mt-8 max-w-[640px] text-lg leading-loose text-slate-300">{p.summary}</p>
        {children}
      </div>
    </article>
  );
}
