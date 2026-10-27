import type { Metadata } from "next";
import ArtImage from "@/components/ArtImage";
import Band, { Heading } from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import { methods, researchAreas } from "@/data/site";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Across scales."
        image="/hero/research-gmet-station.jpg"
        imagePosition="50% 30%"
        credit={{
          text: "Ghana Meteorological Agency, Accra · Amuzujoe, CC BY-SA 4.0",
          href: "https://commons.wikimedia.org/wiki/File:Weather_Station_01.jpg",
        }}
        intro="From particles to planetary systems: atmospheric composition, observation, modelling, environmental technologies and climate processes over Ghana and West Africa."
      />

      {researchAreas.map((area, i) => (
        <Band
          key={area.slug}
          id={area.slug}
          tone={i % 2 ? "fog" : "mist"}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <ArtImage src={area.image} className={`aspect-[5/4] ${i % 2 ? "lg:order-last" : ""}`} />
          <div>
            <Heading label={area.label} title={area.title} />
            <p className="mt-6 text-xl leading-loose text-slate-600">{area.summary}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {area.topics.map((t) => (
                <li key={t} className="border-t-[3px] border-cyan-strong bg-white px-5 py-4 text-base font-semibold">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Band>
      ))}

      <Band tone="panel">
        <Heading label="How We Work" title="From observation to action." dark />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((m) => (
            <li key={m.title}>
              <ArtImage
                src={m.image}
                overlay
                className="aspect-[16/9]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              >
                {m.credit && (
                  <a
                    href={m.credit.href}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-3 top-3 bg-navy-950/60 px-2 py-1 text-[10px] text-white/80 hover:text-white"
                  >
                    {m.credit.text}
                  </a>
                )}
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-xl font-semibold leading-snug text-white">{m.title}</h3>
                </div>
              </ArtImage>
            </li>
          ))}
        </ol>
      </Band>
    </>
  );
}
