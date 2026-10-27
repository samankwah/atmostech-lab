import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  caption?: string;
  overlay?: boolean;
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
};

// Image slot from the Canva design. Without `src` it shows the gradient-grid placeholder;
// with a photo, a teal tint keeps it in the palette.
export default function ArtImage({
  src,
  alt = "",
  caption,
  overlay,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  children,
}: Props) {
  const box = (
    <div className={`art-grid relative overflow-hidden border border-[#9fb4bd]/60 ${className}`}>
      {src && (
        <>
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,43,69,0.55)_0%,rgba(19,85,102,0.3)_55%,rgba(170,211,213,0.1)_100%)]" />
        </>
      )}
      {!src && <div className="art-lines absolute inset-0" />}
      {overlay && (
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,19,31,0.85)_0%,rgba(8,19,31,0.2)_45%,transparent_70%)]" />
      )}
      {children}
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
