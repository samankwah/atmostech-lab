import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  axes: ["opsz"],
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AtmosTech Lab · KNUST",
    template: "%s · AtmosTech Lab",
  },
  description:
    "AtmosTech Lab at KNUST, Ghana: atmospheric science and environmental technology research.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
