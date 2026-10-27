import type { Metadata } from "next";
import ArtImage from "@/components/ArtImage";
import Band, { Heading } from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import { formatDate, news, newsCategories } from "@/data/site";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Field Notes"
        title="Signals from the lab."
        image="/hero/news-megaphone.jpg"
        imagePosition="50% 30%"
        credit={{
          text: "Photo: Solomon203, CC BY-SA 4.0",
          href: "https://commons.wikimedia.org/wiki/File:Seikaku_ER-56_20190217.jpg",
        }}
        intro="Research updates, field and lab work, publications and conferences."
      />
      {newsCategories.map((c, ci) => {
        const items = news.filter((n) => n.category === c.slug);
        return (
          <Band key={c.slug} id={c.slug} tone={ci % 2 ? "fog" : "mist"}>
            <Heading label="News & Field Notes" title={`${c.label}.`} />
            {items.length === 0 ? (
              <p className="mt-10 text-lg text-slate-500">Nothing here yet.</p>
            ) : (
              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <article key={item.title} className="relative flex flex-col bg-white">
                    <ArtImage src={item.image} className="h-[200px] lg:h-[240px]" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    {item.credit && (
                      <a
                        href={item.credit.href}
                        target="_blank"
                        rel="noreferrer"
                        className="absolute right-3 top-3 bg-navy-950/60 px-2 py-1 text-[10px] text-white/80 hover:text-white"
                      >
                        {item.credit.text}
                      </a>
                    )}
                    <div className="p-7">
                      <time dateTime={item.date} className="eyebrow text-cyan-strong">
                        {formatDate(item.date)}
                      </time>
                      <h2 className="mt-4 text-xl font-semibold leading-snug">{item.title}</h2>
                      <p className="mt-3 text-base leading-relaxed text-slate-600">{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </Band>
        );
      })}
    </>
  );
}
