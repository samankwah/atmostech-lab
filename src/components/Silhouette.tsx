// Placeholder portrait from the Canva design: a light silhouette on a teal radial wash.
export default function Silhouette({ className = "", caption }: { className?: string; caption?: string }) {
  const box = (
    <div
      className={`relative flex items-end justify-center overflow-hidden bg-[radial-gradient(80%_80%_at_50%_30%,#4a7f92_0%,#1d4a66_55%,#0b2a44_100%)] ${className}`}
    >
      <div className="absolute inset-[6%] border border-white/25" />
      <svg aria-hidden viewBox="0 0 320 300" className="relative w-[56%]">
        <circle cx="160" cy="60" r="62" fill="#b6d5db" />
        <path d="M0 300V170c0-60 56-102 160-102s160 42 160 102v130z" fill="#b6d5db" />
      </svg>
    </div>
  );

  if (!caption) return box;
  return (
    <figure>
      {box}
      <figcaption className="mt-4 text-[12px] uppercase tracking-[0.1em] text-slate-500">{caption}</figcaption>
    </figure>
  );
}
