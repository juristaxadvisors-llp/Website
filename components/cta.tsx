"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ContactTrigger } from "@/components/contact-trigger";
import { cta, site } from "@/lib/content";

export function Cta() {
  const rows = [
    {
      icon: Mail,
      text: site.contact.email,
      href: site.contact.emailHref,
    },
    {
      icon: Phone,
      text: site.contact.phone,
      href: site.contact.phoneHref,
    },
    {
      icon: MapPin,
      text: site.contact.location,
      href: undefined as string | undefined,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-16 text-ivory md:py-20"
      aria-labelledby="cta-heading"
    >
      <svg
        className="pointer-events-none absolute -bottom-8 right-0 h-40 w-[55%] text-gold/70"
        viewBox="0 0 640 160"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 130 C180 130 280 40 640 28"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>

      <div className="page-wrap relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <h2
              id="cta-heading"
              className="max-w-[16ch] font-serif text-[clamp(2rem,3.6vw,2.85rem)] font-medium leading-[1.2] text-ivory"
            >
              {cta.heading}
            </h2>
            <p className="mt-4 max-w-[32rem] text-[0.98rem] leading-[1.75] text-ivory/75">
              {cta.supporting}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ContactTrigger className="btn-pill btn-gold">
                {cta.primary}
              </ContactTrigger>
              <ContactTrigger className="btn-pill btn-outline-light">
                {cta.secondary}
              </ContactTrigger>
            </div>
          </div>

          <ul className="space-y-4 text-[0.95rem] text-ivory/85">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40">
                    <Icon className="h-4 w-4 text-gold" strokeWidth={1.6} />
                  </span>
                  {row.href ? (
                    <a href={row.href} className="hover:text-ivory">
                      {row.text}
                    </a>
                  ) : (
                    <span>{row.text}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="max-w-[40rem]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
