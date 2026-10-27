const tones = {
  mist: "bg-mist text-ink",
  fog: "bg-fog text-ink",
  deep: "bg-navy-950 text-white",
  navy: "bg-navy-900 text-white",
  panel: "bg-navy-800 text-white",
};

export type Tone = keyof typeof tones;

export const container = "relative mx-auto max-w-[1366px] px-4 sm:px-8 lg:px-10";

// Full-width coloured band holding one numbered section, as in the Canva design
export default function Band({
  tone,
  id,
  className = "",
  children,
}: {
  tone: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 overflow-hidden ${tones[tone]}`}>
      <div className={`${container} py-20 sm:py-24 ${className}`}>{children}</div>
    </section>
  );
}

// Eyebrow label plus Bodoni title
export function Heading({
  label,
  title,
  dark,
  className = "",
}: {
  label: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className={`eyebrow ${dark ? "" : "text-cyan-strong"}`}>
        {label}
      </p>
      <h2 className="display-title mt-6 text-[clamp(2.5rem,5vw,4.5rem)]">{title}</h2>
    </div>
  );
}
