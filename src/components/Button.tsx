import Link from "next/link";

type Props = {
  href: string;
  variant?: "primary" | "outline" | "dark";
  children: React.ReactNode;
};

const styles = {
  primary: "bg-cyan-accent text-navy-900 hover:bg-[#7fdde7]",
  outline: "border border-white/80 text-white hover:bg-white/10",
  dark: "bg-navy-900 text-white hover:bg-navy-800",
};

export default function Button({ href, variant = "primary", children }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[52px] items-center justify-center px-7 text-[15px] font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
