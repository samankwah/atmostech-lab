import type { Metadata } from "next";
import Band, { Heading } from "@/components/Band";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Portrait from "@/components/Portrait";
import { collaborators, groupSlug, people, peopleGroups, pi } from "@/data/site";

export const metadata: Metadata = { title: "People" };

const groupTitles: Record<string, string> = {
  Researchers: "Scientists behind the work.",
  "PhD Students": "Doctoral researchers.",
  "MSc Students": "Master's researchers.",
  "Research Assistants": "Hands on every campaign.",
  "Visiting Researchers": "Guests from partner institutions.",
  Alumni: "Where our people go next.",
};

export default function PeoplePage() {
  const groups = peopleGroups.filter((g) => g !== "Principal Investigator");

  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Meet the lab."
        image="/hero/people-microscope.jpg" // researchers at a confocal microscope, public domain (Wikimedia Commons)
        intro="Physicists, meteorologists, engineers and data scientists working together on the atmosphere over West Africa."
      />

      <Band tone="mist" className="grid gap-12 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-20">
        <Portrait photo={pi.photo} name={pi.name} className="aspect-[5/4]" sizes="(min-width: 1024px) 480px, 100vw" caption />
        <div>
          <p className="eyebrow text-cyan-strong">Lab Lead</p>
          <h2 className="display-title mt-6 text-[clamp(2.5rem,5vw,4.5rem)]">{pi.name}</h2>
          <p className="mt-4 text-xl font-semibold text-teal-mid">{pi.labRole}</p>
          <p className="mt-3 text-justify text-2xl text-slate-700">{pi.role}</p>
          <p className="mt-6 text-justify text-lg leading-loose text-slate-600">{pi.bio}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {pi.interests.map((i) => (
              <li key={i} className="border-t-[3px] border-cyan-strong bg-white px-4 py-2.5 text-sm font-semibold">
                {i}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            {pi.links.map((l, i) => (
              <Button key={l.href} href={l.href} variant={i ? "dark" : "primary"}>
                {l.label} ↗
              </Button>
            ))}
          </div>
        </div>
      </Band>

      {groups.map((group, gi) => (
        <Band key={group} id={groupSlug(group)} tone={gi % 2 ? "mist" : "fog"}>
          <Heading label={group} title={groupTitles[group] ?? group} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {people
              .filter((p) => p.group === group)
              .map((p) => (
                <article key={p.name} className="bg-white">
                  <Portrait photo={p.photo} name={p.name} className="aspect-[4/3]" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="mt-1 text-base font-semibold text-teal-mid">{p.role}</p>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{p.interests}</p>
                  </div>
                </article>
              ))}
          </div>
        </Band>
      ))}

      <Band id="collaborators" tone={groups.length % 2 ? "mist" : "fog"}>
        <Heading label="Collaborators" title="Science without borders." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((c) => (
            <article key={c.name} className="border-t-[3px] border-cyan-strong bg-white p-7">
              <p className="eyebrow text-cyan-strong">{c.place}</p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">{c.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{c.note}</p>
            </article>
          ))}
        </div>
      </Band>
    </>
  );
}
