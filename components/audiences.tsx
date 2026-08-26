"use client";

import { ArrowRight, Briefcase, ChartColumnIncreasing, User } from "lucide-react";
import { ContactTrigger } from "@/components/contact-trigger";
import { Reveal } from "@/components/reveal";
import { audiences } from "@/lib/content";

const icons = [Briefcase, ChartColumnIncreasing, User];

export function Audiences() {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 md:py-24"
      aria-labelledby="audience-heading"
    >
      <div className="page-wrap grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-5 lg:min-h-[22rem] lg:pb-24">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-gold" />
            {audiences.label}
          </p>
          <h2
            id="audience-heading"
            className="mt-4 max-w-[16ch] font-serif text-[clamp(1.85rem,7vw,2.85rem)] font-medium leading-[1.18] text-navy"
          >
            {audiences.heading}
          </h2>
          <span className="mt-5 block h-px w-16 bg-gold sm:mt-6" aria-hidden />
          <p className="mt-5 max-w-[32rem] text-[0.95rem] leading-[1.75] text-muted sm:mt-6 sm:text-[0.98rem] sm:leading-[1.8]">
            {audiences.supporting}
          </p>

          <svg
            className="pointer-events-none absolute -bottom-6 left-0 hidden h-36 w-48 text-gold/35 lg:block"
            viewBox="0 0 192 144"
            fill="none"
            aria-hidden
          >
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 6 }).map((__, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={8 + col * 14}
                  cy={88 + row * 12}
                  r="1.1"
                  fill="currentColor"
                />
              )),
            )}
            <path
              d="M24 132 C 90 132 130 70 188 36"
              stroke="currentColor"
              strokeWidth="1.15"
            />
          </svg>
        </Reveal>

        <ul className="flex w-full min-w-0 flex-col gap-3 sm:gap-4 lg:col-span-7">
          {audiences.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <li key={item.title} className="min-w-0">
                <Reveal delay={index * 70}>
                  <ContactTrigger
                    className="group flex w-full min-w-0 items-start gap-3 rounded-xl border border-line bg-white px-3.5 py-4 text-left shadow-[0_8px_24px_rgba(11,31,51,0.04)] transition-[border-color,background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-ivory hover:shadow-[0_10px_28px_rgba(11,31,51,0.06)] sm:items-center sm:gap-4 sm:px-4 sm:py-5 md:gap-5 md:px-5 md:py-6"
                    aria-label={`Talk to Juristax: ${item.title}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f3f0e8] sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 text-gold sm:h-[22px] sm:w-[22px]" strokeWidth={1.5} />
                    </span>
                    <span className="mt-1 hidden h-11 w-px shrink-0 bg-gold/80 sm:mt-0 sm:block" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-[1.3rem] font-medium leading-none text-navy sm:text-[1.55rem] md:text-[1.75rem]">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-[0.84rem] leading-relaxed text-muted sm:text-[0.88rem]">
                        {item.body}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-200 group-hover:translate-x-1 sm:mt-0"
                      strokeWidth={1.5}
                    />
                  </ContactTrigger>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
