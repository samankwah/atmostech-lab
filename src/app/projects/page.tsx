import type { Metadata } from "next";
import Band, { Heading } from "@/components/Band";
import { Tag } from "@/components/Card";
import FeaturedProject from "@/components/FeaturedProject";
import PageHeader from "@/components/PageHeader";
import { findPublication, projects, publicationHref, type Project } from "@/data/site";

export const metadata: Metadata = { title: "Projects" };

function ProjectCard({ p }: { p: Project }) {
  const active = p.status === "Active";
  return (
    <article
      id={p.slug}
      className="group relative flex scroll-mt-24 flex-col overflow-hidden border-t-[3px] border-cyan-strong bg-white p-7 transition-shadow hover:shadow-[0_12px_40px_rgba(11,26,43,0.10)] sm:p-8"
    >
      <span className="absolute inset-y-0 left-0 w-1 bg-cyan-strong opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tag>{p.category ?? p.area}</Tag>
        <span
          className={`flex items-center gap-2 text-sm font-semibold ${
            active ? "text-emerald-600" : "text-slate-400"
          }`}
        >
          <span className={`h-2 w-2 rounded-full ${active ? "bg-emerald-500" : "bg-slate-300"}`} />
          {p.years}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold leading-snug">{p.title}</h3>
      <p className="mt-3 text-lg leading-relaxed text-slate-600">{p.summary}</p>
      {p.collaborators && (
        <p className="mt-3 text-base text-slate-500">
          <span className="font-medium text-slate-700">With:</span> {p.collaborators}
        </p>
      )}
      {p.outputs.length > 0 && (
        <div className="mt-6 border-t border-slate-100 pt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
            Outputs ({p.outputs.length})
          </p>
          <ul className="mt-3 space-y-3">
            {p.outputs.map((title) => {
              const pub = findPublication(title);
              const href = pub && publicationHref(pub);
              return (
                <li key={title} className="flex gap-3 text-base leading-snug">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan-strong" />
                  <span>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-teal-mid">
                        {title}
                      </a>
                    ) : (
                      <span className="font-medium">{title}</span>
                    )}
                    {pub && (
                      <span className="text-slate-500">
                        {" "}· {pub.venue.split(",")[0]}, {pub.year}
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Research made tangible."
        image="/hero/dust.jpg"
        intro="Platforms, instruments, models and datasets led by Dr. Prince Junior Asilevi, alongside research lines in satellite air quality, fire emissions, solar resource and plasma pollution control."
      />

      <Band tone="deep">
        <Heading label="Featured Projects" title="Platforms, instruments & datasets." dark />
        <div className="mt-14 space-y-9">
          {featured.map((p, i) => (
            <FeaturedProject key={p.title} p={p} index={i} link={false}>
              {p.outputs.map((title) => {
                const pub = findPublication(title);
                const href = pub && publicationHref(pub);
                return href ? (
                  <a key={title} href={href} target="_blank" rel="noreferrer" className="mt-6 text-base font-semibold text-cyan-accent hover:text-white">
                    {title} ↗
                  </a>
                ) : null;
              })}
            </FeaturedProject>
          ))}
        </div>
      </Band>

      {(["Active", "Earlier work"] as const).map((status, i) => (
        <Band key={status} tone={i ? "fog" : "mist"}>
          <Heading
            label={status === "Active" ? "Current Research" : "Earlier Work"}
            title={status === "Active" ? "Research lines in progress." : "Foundations of the lab."}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects
              .filter((p) => !p.featured && p.status === status)
              .map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
          </div>
        </Band>
      ))}
    </>
  );
}
