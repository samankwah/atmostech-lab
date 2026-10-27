"use client";

import { container } from "@/components/Band";
import { lab, socials } from "@/data/site";

// Simple Icons brand marks (24×24), keyed by `socials` label
const socialIcons: Record<string, string> = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  X: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z",
  YouTube:
    "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};

// The "Get in Touch" band and the footer bar share one gradient, as in the Canva design.
export default function Footer() {
  return (
    <footer className="bg-atmos relative overflow-hidden text-white">
      <div className="art-lines absolute inset-0" />
      <div className={`${container} py-28`}>
        <p className="eyebrow">Get in Touch</p>
        <h2 className="display-title hero-title mt-6 text-[clamp(3rem,8vw,7rem)]">Research. Collaborate. Build.</h2>
        <p className="mt-6 max-w-[620px] text-xl leading-relaxed text-slate-200">
          Interested in collaboration in atmospheric science, air quality, Earth observation, environmental technology
          or research innovation? Get in touch.
        </p>
        <a
          href={`mailto:${lab.email}`}
          className="mt-8 inline-block text-[clamp(1.5rem,2.5vw,2.25rem)] text-cyan-accent hover:text-white"
        >
          {lab.email}
        </a>
      </div>
      <div className="relative border-t border-white/15 bg-navy-950/60">
        <div className={`${container} flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-slate-300`}>
          <p>
            {lab.name} · {lab.dept} · {lab.affiliation} · {lab.city}.
          </p>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`AtmosTech Lab on ${s.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-colors hover:border-cyan-accent hover:text-cyan-accent"
                  >
                    <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d={socialIcons[s.label]} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-cyan-accent hover:text-white"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
