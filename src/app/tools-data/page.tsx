import type { Metadata } from "next";
import ArtImage from "@/components/ArtImage";
import Band, { Heading } from "@/components/Band";
import { Tag } from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { tools, type Tool } from "@/data/site";

export const metadata: Metadata = { title: "Tools & Data" };

function ToolLink({ t, className = "" }: { t: Tool; className?: string }) {
  const external = t.href.startsWith("http");
  return (
    <a
      href={t.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`text-base font-semibold text-teal-mid hover:text-ink ${className}`}
    >
      {t.linkLabel} →
    </a>
  );
}

export default function ToolsDataPage() {
  const featured = tools.filter((t) => t.featured);
  const rest = tools.filter((t) => !t.featured);

  return (
    <>
      <PageHeader
        eyebrow="Tools & Data"
        title="Ways to see the atmosphere differently."
        image="/hero/tools-code-screen.jpg" // "Code on computer monitor" (Unsplash), CC0 (Wikimedia Commons)
        intro="Platforms, datasets, software and dashboards produced by the lab, shared for research, teaching and decision-making."
      />

      <Band tone="fog">
        <Heading label="Featured" title="Platforms & datasets." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((t) => (
            <article key={t.name} className="relative flex flex-col bg-white">
              <ArtImage src={t.image} className="h-[220px] lg:h-[300px]" />
              {t.credit && (
                <a
                  href={t.credit.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-3 top-3 bg-navy-950/60 px-2 py-1 text-[10px] text-white/80 hover:text-white"
                >
                  {t.credit.text}
                </a>
              )}
              <div className="flex flex-1 flex-col p-7">
                <Tag>{t.kind}</Tag>
                <h2 className="mt-4 text-2xl font-semibold">{t.name}</h2>
                <p className="mt-2 flex-1 text-lg leading-relaxed text-slate-600">{t.description}</p>
                <ToolLink t={t} className="mt-6" />
              </div>
            </article>
          ))}
        </div>
      </Band>

      <Band tone="mist">
        <Heading label="More Data & Code" title="Datasets from our publications." />
        <ul className="mt-14 divide-y divide-slate-300 border-y border-slate-300">
          {rest.map((t) => (
            <li key={t.name} className="grid gap-4 py-7 md:grid-cols-[76px_1fr_auto] md:items-center md:gap-10">
              <ArtImage className="hidden h-[56px] w-[76px] md:block" />
              <div>
                <p className="eyebrow text-cyan-strong">{t.kind}</p>
                <h3 className="mt-2 text-xl font-semibold">{t.name}</h3>
                <p className="mt-1 text-base leading-relaxed text-slate-600">{t.description}</p>
              </div>
              <ToolLink t={t} />
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
