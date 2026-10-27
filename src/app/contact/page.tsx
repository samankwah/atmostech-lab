import type { Metadata } from "next";
import Band, { Heading } from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import { lab } from "@/data/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together."
        image="/hero/contact-telephone.jpg" // Oval Office telephone, White House photo, public domain (Wikimedia Commons)
        intro="Questions about our research, data access, collaborations or joining the lab? We'd love to hear from you."
      />
      <Band tone="mist" className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Heading label="Contact" title="Find us." />
          <dl className="mt-10 space-y-8">
            <div>
              <dt className="eyebrow text-cyan-strong">Email</dt>
              <dd className="mt-3">
                <a href={`mailto:${lab.email}`} className="text-2xl text-teal-mid hover:text-ink">
                  {lab.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-cyan-strong">Visit</dt>
              <dd className="mt-3 text-lg leading-relaxed text-slate-700">
                {lab.department}
                {lab.address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-cyan-strong">Phone</dt>
              <dd className="mt-3 text-lg text-slate-700">{lab.phone}</dd>
            </div>
          </dl>
          <iframe
            title="Map of KNUST, Kumasi"
            className="mt-10 h-64 w-full border border-[#9fb4bd]/60"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.585%2C6.665%2C-1.555%2C6.690&layer=mapnik&marker=6.6745%2C-1.5716"
          />
        </div>
        <ContactForm />
      </Band>
    </>
  );
}
