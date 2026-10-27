export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-mist px-2.5 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-teal-mid">
      {children}
    </span>
  );
}
