import type { Metadata } from "next";
import Band, { Heading } from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import { pi, publications } from "@/data/site";
import PublicationList from "./PublicationList";

export const metadata: Metadata = { title: "Publications" };

const years = publications.map((p) => p.year);
const stats = [
  { value: publications.length, label: "Publications" },
  { value: publications.filter((p) => p.authors.startsWith("Asilevi") || p.authors.startsWith("Junior, P")).length, label: "First-authored" },
  { value: `${Math.min(...years)} – ${Math.max(...years)}`, label: "Years active" },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Questions driving the work."
        image="/hero/publications-papers.jpg" // documents stacked on a table, San Diego Air & Space Museum, public domain
        intro={`Peer-reviewed articles and conference contributions by ${pi.name} and collaborators.`}
      />
      <Band tone="deep" className="flex flex-wrap items-end justify-between gap-10">
        <dl className="flex flex-wrap gap-12 sm:gap-20">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="eyebrow">{s.label}</dt>
              <dd className="display-title mt-4 text-[clamp(3rem,6vw,5rem)]">{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-3">
          {pi.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[52px] items-center border border-white/80 px-7 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </Band>
      <Band tone="mist">
        <Heading label="All Publications" title="Selected research, year by year." className="mb-14" />
        <PublicationList />
      </Band>
    </>
  );
}
