"use client";

import { useState } from "react";

const field =
  "mt-2 block w-full border border-slate-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-navy-900";

// No backend yet: the form only shows a confirmation. Wire it to an API route or form service later.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-start justify-center border-t-[3px] border-cyan-strong bg-white p-10">
        <p className="eyebrow text-cyan-strong">Message received</p>
        <h2 className="display-title mt-3 text-5xl">Thank you.</h2>
        <p className="mt-3 text-slate-600">We&apos;ll get back to you within a few working days.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-base font-semibold text-teal-mid hover:text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="border-t-[3px] border-cyan-strong bg-white p-6 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-base font-medium">
          Name
          <input name="name" required className={field} />
        </label>
        <label className="text-base font-medium">
          Email
          <input name="email" type="email" required className={field} />
        </label>
      </div>
      <label className="mt-5 block text-base font-medium">
        Topic
        <select name="topic" className={field} defaultValue="General enquiry">
          <option>General enquiry</option>
          <option>Data access</option>
          <option>Collaboration</option>
          <option>Joining the lab</option>
          <option>Media</option>
        </select>
      </label>
      <label className="mt-5 block text-base font-medium">
        Message
        <textarea name="message" required rows={6} className={field} />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex h-[52px] items-center bg-cyan-accent px-7 text-[15px] font-semibold text-navy-900 hover:bg-[#7fdde7]"
      >
        Send Message
      </button>
    </form>
  );
}
