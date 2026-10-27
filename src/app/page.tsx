import Link from "next/link";
import ArtImage from "@/components/ArtImage";
import Band, { Heading } from "@/components/Band";
import Button from "@/components/Button";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Portrait from "@/components/Portrait";
import {
  findPublication,
  lab,
  methods,
  newsCategories,
  pi,
  projects,
  publicationHref,
  researchAreas,
  selectedResearch,
  teamGroups,
  tools,
} from "@/data/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const featuredTools = tools.filter((t) => t.featured);

  return (
    <>
      <Hero />

      {/* Our Mission */}
      <Band tone="mist" className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Heading label="Our Mission" title="Studying the atmosphere. Shaping what comes next." />
          <p className="mt-4 text-[1.375rem] leading-loose text-slate-600">{lab.about}</p>
        </div>
        <ArtImage
          src="/hero/clouds.jpg"
          className="aspect-[6/5]"
          caption="Illustrative image · Atmospheric field observation"
        />
      </Band>

      {/* Research Themes */}
      <Band tone="fog">
        <Heading label="Research Themes" title="Across scales, from particles to planetary systems." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {researchAreas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/research#${area.slug}`}
              className={`group flex flex-col bg-white transition-shadow hover:shadow-[0_12px_40px_rgba(11,26,43,0.12)] ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <ArtImage src={area.image} className="h-[220px] lg:h-[280px]" />
              <div className="p-8">
                <p className="eyebrow text-cyan-strong">
                  {area.label}
                </p>
                <h3 className="mt-5 text-[1.625rem] leading-snug group-hover:text-teal-mid">{area.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Band>

      {/* Featured Projects */}
      <Band tone="deep">
        <Heading label="Featured Projects" title="Research made tangible." dark />
        <div className="mt-14 space-y-9">
          {featured.map((p, i) => (
            <FeaturedProject key={p.title} p={p} index={i} />
          ))}
        </div>
      </Band>

      {/* Lab Lead */}
      <Band tone="mist">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,555px)_1fr] lg:gap-20">
          <Portrait photo={pi.photo} name={pi.name} className="aspect-[5/4]" sizes="(min-width: 1024px) 555px, 100vw" caption />
          <div>
            <p className="eyebrow text-cyan-strong">Lab Lead</p>
            <h2 className="display-title mt-6 text-[clamp(2.5rem,5vw,4.5rem)]">{pi.name}</h2>
            <p className="mt-4 text-xl font-semibold text-teal-mid">{pi.labRole}</p>
            <p className="mt-3 text-justify text-2xl text-slate-700">{pi.role}</p>
            <p className="mt-4 text-justify text-xl leading-relaxed text-slate-600">{pi.summary}</p>
            <Link href="/people" className="mt-8 inline-block text-base font-semibold text-teal-mid hover:text-ink">
              Meet the lab →
            </Link>
          </div>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamGroups.map((g) => (
            <Link
              key={g.label}
              href={g.href}
              className="flex h-[180px] items-end border-t-[3px] border-cyan-strong bg-[#e6eef0] p-6 text-xl font-semibold transition-colors hover:bg-white"
            >
              {g.label}
            </Link>
          ))}
        </div>
      </Band>

      {/* How We Work */}
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

      {/* Selected Research */}
      <Band tone="mist">
        <Heading label="Selected Research" title="Questions driving the work." />
        <ul className="mt-14 divide-y divide-slate-300 border-y border-slate-300">
          {selectedResearch.map((r) => {
            const pub = r.publication ? findPublication(r.publication) : undefined;
            const href = r.href ?? (pub && publicationHref(pub)) ?? "/publications";
            const external = href.startsWith("http");
            return (
              <li key={r.title}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-6 py-5 sm:gap-10"
                >
                  <ArtImage className="h-[56px] w-[76px] shrink-0" />
                  <span className="flex-1 text-lg font-semibold leading-snug group-hover:text-teal-mid">
                    {r.title}
                  </span>
                  <span aria-hidden className="text-xl text-teal-mid">
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-10">
          <Button href="/publications">View Publications</Button>
        </div>
      </Band>

      {/* Tools & Data */}
      <Band tone="fog">
        <Heading label="Tools & Data" title="Ways to see the atmosphere differently." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featuredTools.map((t) => (
            <div key={t.name} className="group relative bg-white">
              <Link href="/tools-data">
                <ArtImage src={t.image} className="h-[220px] lg:h-[300px]" />
                <h3 className="p-6 text-xl font-semibold group-hover:text-teal-mid">{t.name}</h3>
              </Link>
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
            </div>
          ))}
        </div>
      </Band>

      {/* Training & Opportunities */}
      <Band tone="mist" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* KNUST students at a campus workshop: "AfroCuration2023 Students of KNUST and UEW", Wikimedia Commons, CC0 */}
        <ArtImage
          src="/training/knust-students-workshop.jpg"
          alt="KNUST students working on laptops at a campus workshop"
          className="aspect-[5/4]"
        />
        <div>
          <Heading label="Training & Opportunities" title="Training the next generation of atmospheric scientists." />
          <p className="mt-4 text-xl leading-loose text-slate-600">
            Student development spans atmospheric measurements, satellite remote sensing, Python and data science,
            atmospheric modelling, machine learning, instrumentation, field campaigns and scientific communication.
          </p>
          <div className="mt-10">
            <Button href="/opportunities">Join / Opportunities</Button>
          </div>
        </div>
      </Band>

      {/* Collaboration */}
      <Band tone="navy" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <svg
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[70%] w-[75%] -translate-y-1/2 lg:block"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <ellipse cx="500" cy="200" rx="495" ry="195" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="relative">
          <Heading label="Collaboration" title="Science without borders." dark />
          <p className="mt-4 max-w-[560px] text-xl leading-relaxed text-slate-200">{lab.collaborations}</p>
        </div>
        {/* "Ceremonial image.jpg" by Wordsmith 619, Wikimedia Commons, CC0 */}
        <ArtImage
          src="/collaboration/partnership-handshake.jpg"
          alt="Two colleagues shaking hands over a certificate"
          className="aspect-[4/3]"
          caption="Partnership in practice"
        />
      </Band>

      {/* News & Field Notes */}
      <Band tone="mist">
        <Heading label="News & Field Notes" title="Signals from the lab." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {newsCategories.map((c) => (
            <div key={c.slug} className="group relative bg-white">
              <Link href={`/news#${c.slug}`}>
                <ArtImage src={c.image} className="h-[220px] lg:h-[260px]" sizes="(min-width: 768px) 33vw, 100vw" />
                <h3 className="p-6 text-xl font-semibold group-hover:text-teal-mid">{c.label}</h3>
              </Link>
              {c.credit && (
                <a
                  href={c.credit.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-3 top-3 bg-navy-950/60 px-2 py-1 text-[10px] text-white/80 hover:text-white"
                >
                  {c.credit.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
