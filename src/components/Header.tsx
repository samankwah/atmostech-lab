"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { lab, nav } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

// Line icons for the mobile drawer, keyed by nav href
const icons: Record<string, string> = {
  "/": "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  "/research": "M9 3v6L4 18.5A1 1 0 0 0 4.9 20h14.2a1 1 0 0 0 .9-1.5L15 9V3M8 3h8",
  "/projects": "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  "/people": "M15 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 20v-1a4 4 0 0 0-3-3.9M15 3.1a4 4 0 0 1 0 7.8",
  "/publications": "M6 2h9l5 5v15H6zM14 2v6h6M9 13h8M9 17h8",
  "/tools-data": "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  "/opportunities": "M3 7h18v13H3zM8 7V4h8v3M3 13h18",
  "/news": "M4 4h13v16H6a2 2 0 0 1-2-2zM17 8h3v10a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h5",
  "/contact": "M3 5h18v14H3zM3 6l9 7 9-7",
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // While the drawer is open: lock page scroll and close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur">
        <div className="mx-auto flex h-[80px] max-w-[1366px] items-center justify-between px-4 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-[19px] font-semibold tracking-tight text-white">AtmosTech Lab</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-accent">
              · KNUST
            </span>
          </Link>

          <nav className="hidden xl:block" aria-label="Main">
            <ul className="flex items-center gap-7">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`group block py-[29px] text-[15px] transition-colors ${
                        active ? "text-cyan-accent" : "text-slate-300 hover:text-cyan-accent"
                      }`}
                    >
                      {/* Gradient text plus a glowing underline that grows from the centre, as in the WASCAT reference */}
                      <span className="relative">
                        <span className={`nav-label ${active ? "is-active" : ""}`}>{item.label}</span>
                        <span
                          className={`nav-underline ${active ? "is-active" : ""}`}
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-white xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer: slides in from the left over a dimmed page, LinkedIn-style */}
      <div className="xl:hidden" inert={!open}>
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-[60] bg-navy-950/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`fixed inset-y-0 left-0 z-[70] flex w-[85%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-atmos relative px-6 pb-6 pt-5 text-white">
            <button
              type="button"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center text-white/80 hover:text-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-navy-900/60 font-semibold text-cyan-accent">
              AT
            </div>
            <p className="mt-4 text-lg font-semibold">{lab.name}</p>
            <p className="mt-1 text-sm leading-snug text-slate-300">
              {lab.dept} · {lab.affiliation}
            </p>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto py-2">
            <ul>
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-4 border-l-[3px] px-6 py-3.5 text-base transition-colors ${
                        active
                          ? "border-cyan-strong bg-mist font-semibold text-ink"
                          : "border-transparent text-slate-700 hover:bg-mist"
                      }`}
                    >
                      <svg
                        aria-hidden
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={active ? "text-teal-mid" : "text-slate-500"}
                      >
                        <path d={icons[item.href]} />
                      </svg>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-slate-200 px-6 py-5">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Get in touch</p>
            <a href={`mailto:${lab.email}`} className="mt-1 block text-base font-semibold text-teal-mid">
              {lab.email}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
