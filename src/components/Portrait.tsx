import Image from "next/image";
import Silhouette from "@/components/Silhouette";

type Props = {
  photo?: string;
  name: string;
  className?: string;
  sizes?: string;
  caption?: boolean; // only shown on the silhouette, which needs the "not a portrait" note
};

// A person's photo in the design's frame, falling back to the placeholder silhouette.
export default function Portrait({ photo, name, className = "", sizes = "(min-width: 1024px) 25vw, 50vw", caption }: Props) {
  if (!photo) {
    return (
      <Silhouette className={className} caption={caption ? "Illustrative silhouette · Not a portrait" : undefined} />
    );
  }
  return (
    <div className={`relative overflow-hidden bg-navy-800 ${className}`}>
      <Image src={photo} alt={`Portrait of ${name}`} fill sizes={sizes} className="object-cover object-top" />
    </div>
  );
}
