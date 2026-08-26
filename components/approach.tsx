import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { approach } from "@/lib/content";

export function Approach() {
  const last = approach.steps.length - 1;

  return (
    <section
      id="approach"
      className="overflow-hidden border-t border-line bg-ivory py-12 sm:py-16 md:py-20"
      aria-labelledby="approach-heading"
    >
      <div className="page-wrap">
        <Reveal>
          <div className="max-w-[34rem]">
            <SectionLabel>{approach.label}</SectionLabel>
            <h2
              id="approach-heading"
              className="mt-4 whitespace-pre-line font-serif text-[clamp(1.9rem,6.8vw,3.35rem)] font-medium leading-[1.18] text-navy"
            >
              {approach.heading}
            </h2>
          </div>
        </Reveal>

        <ol className="mt-8 grid gap-0 sm:mt-12 md:grid-cols-4 md:gap-10">
          {approach.steps.map((step, index) => (
            <li
              key={step.number}
              className="relative py-6 first:pt-0 last:pb-0 md:py-0"
            >
              <Reveal delay={index * 70}>
                <p className="text-[12px] tracking-[0.12em] text-muted">{step.number}</p>
                <h3 className="mt-2 font-serif text-[1.45rem] font-medium text-navy sm:mt-3 sm:text-[1.65rem]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted sm:mt-3 sm:text-[0.98rem]">
                  {step.body}
                </p>
              </Reveal>

              {index < last ? (
                <>
                  <ArrowRight
                    aria-hidden
                    className="pointer-events-none absolute left-full top-[2.35rem] ml-5 hidden h-5 w-5 -translate-x-1/2 text-gold md:block"
                    strokeWidth={1.5}
                  />
                  <ArrowDown
                    aria-hidden
                    className="mx-auto mt-5 h-4 w-4 text-gold md:hidden"
                    strokeWidth={1.5}
                  />
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
