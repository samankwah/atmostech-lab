import type { Metadata } from "next";
import ArtImage from "@/components/ArtImage";
import Band, { container, Heading } from "@/components/Band";
import Button from "@/components/Button";
import { Tag } from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { lab, opportunities } from "@/data/site";

export const metadata: Metadata = { title: "Opportunities" };

const skills = [
  "Atmospheric measurements",
  "Satellite remote sensing",
  "Python & data science",
  "Atmospheric modelling",
  "Machine learning",
  "Instrumentation",
  "Field campaigns",
  "Scientific communication",
];

export default function OpportunitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Opportunities"
        title="Join the lab."
        image="/hero/opportunities-lecture.jpg" // lecture at Somali National University, CC0 (Wikimedia Commons)
        intro="We welcome curious, motivated people from physics, engineering, mathematics, computer science and environmental science."
      />

      <Band tone="mist" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* KNUST students at a campus workshop: "AfroCuration2023 Students of KNUST and UEW", Wikimedia Commons, CC0 */}
        <ArtImage
          src="/training/knust-students-workshop.jpg"
          alt="KNUST students working on laptops at a campus workshop"
          className="aspect-[5/4]"
        />
        <div>
          <Heading label="Training" title="Training the next generation of atmospheric scientists." />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {skills.map((s) => (
              <li key={s} className="border-t-[3px] border-cyan-strong bg-white px-5 py-4 text-base font-semibold">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      <Band tone="fog">
        <Heading label="Open Positions" title="Current openings." />
        <div className="mt-14 space-y-6">
          {opportunities.map((o) => (
            <article
              key={o.title}
              className="grid gap-6 border-t-[3px] border-cyan-strong bg-white p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10"
            >
              <div>
                <Tag>{o.type}</Tag>
                <h2 className="mt-4 text-2xl font-semibold">{o.title}</h2>
                <p className="mt-2 max-w-3xl text-lg leading-relaxed text-slate-600">{o.description}</p>
                <p className="mt-4 text-base">
                  <span className="text-slate-500">Deadline: </span>
                  <span className="font-semibold">{o.deadline}</span>
                </p>
              </div>
              <Button href="/contact" variant="dark">Enquire</Button>
            </article>
          ))}
        </div>
      </Band>

      <section className="bg-atmos relative overflow-hidden text-white">
        <div className="art-lines absolute inset-0" />
        <div className={`${container} py-24`}>
          <p className="eyebrow">Open Applications</p>
          <h2 className="display-title mt-6 text-[clamp(2.5rem,5vw,4.5rem)]">Don&apos;t see a fit?</h2>
          <p className="mt-6 max-w-[620px] text-xl leading-relaxed text-slate-200">
            Send a CV and a short statement of interest.
          </p>
          <a href={`mailto:${lab.email}`} className="mt-8 inline-block text-[clamp(1.5rem,2.5vw,2.25rem)] text-cyan-accent hover:text-white">
            {lab.email}
          </a>
        </div>
      </section>
    </>
  );
}
