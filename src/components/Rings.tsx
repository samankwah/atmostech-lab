// Faint concentric circles from the Canva hero.
export default function Rings({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 1200 1200"
      fill="none"
    >
      <circle cx="600" cy="600" r="560" stroke="white" strokeOpacity="0.09" strokeWidth="1.5" />
      <circle cx="600" cy="600" r="470" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
    </svg>
  );
}
