"use client";

import { useState } from "react";
import ArtImage from "@/components/ArtImage";
import { publications } from "@/data/site";

const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

// Matches the PI's name in its published variants so it can be bolded.
const PI_NAME = /(Asilevi(?: Junior)?, P\.(?: J\.)?|Junior, P\. A\.)/;

export default function PublicationList() {
  const [year, setYear] = useState<number | "all">("all");
  const shown = years.filter((y) => year === "all" || y === year);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter by year">
        {(["all", ...years] as const).map((y) => (
          <button
            key={y}
            type="button"
            onClick={() => setYear(y)}
            aria-pressed={year === y}
            className={`h-9 border px-4 text-base font-medium transition-colors ${
              year === y
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-navy-900"
            }`}
          >
            {y === "all" ? "All years" : y}
          </button>
        ))}
      </div>

      {shown.map((y) => (
        <div key={y} className="mb-12 grid gap-4 md:grid-cols-[120px_1fr]">
          <h2 className="display-title text-5xl text-cyan-strong">{y}</h2>
          <ol className="divide-y divide-slate-300 border-y border-slate-300">
            {publications
              .filter((p) => p.year === y)
              .map((p) => (
                <li key={p.title} className="flex gap-6 py-5">
                  <ArtImage className="hidden h-[56px] w-[76px] shrink-0 sm:block" />
                  <div>
                    <p className="text-lg font-semibold leading-snug">{p.title}</p>
                    <p className="mt-1 text-base text-slate-600">
                      {p.authors.split(PI_NAME).map((part, i) =>
                        i % 2 ? (
                          <strong key={i} className="font-semibold text-ink">{part}</strong>
                        ) : (
                          part
                        ),
                      )}
                    </p>
                    <p className="mt-1 text-base">
                      <em className="text-slate-700">{p.venue}</em>
                      {p.doi && (
                        <>
                          {" · "}
                          <a
                            href={`https://doi.org/${p.doi}`}
                            className="font-medium text-teal-mid hover:text-ink"
                            target="_blank"
                            rel="noreferrer"
                          >
                            doi:{p.doi}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      ))}
    </>
  );
}
