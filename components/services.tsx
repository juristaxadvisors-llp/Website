import { Reveal } from "@/components/reveal";
import { ServiceAccordion } from "@/components/service-accordion";
import { servicesIntro } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="overflow-hidden border-t border-line bg-ivory py-16 sm:py-20 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="page-wrap">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-gold" />
            {servicesIntro.label}
          </p>
          <div className="mt-5 grid items-end gap-6 lg:grid-cols-12 lg:gap-12">
            <h2
              id="services-heading"
              className="font-serif text-[clamp(2.05rem,4.4vw,3.35rem)] font-medium leading-[1.15] text-navy lg:col-span-6"
            >
              {servicesIntro.heading}
            </h2>
            <p className="max-w-[28rem] text-[1.02rem] leading-[1.75] text-muted lg:col-span-6 lg:justify-self-end lg:pb-1">
              {servicesIntro.supporting}
            </p>
          </div>
        </Reveal>

        <ServiceAccordion />
      </div>
    </section>
  );
}
