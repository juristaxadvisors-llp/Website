import { SectionLabel } from "@/components/section-label";
import { primaryServices, servicesIntro } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="overflow-hidden border-t border-line bg-ivory py-12 sm:py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="page-wrap">
        <div className="max-w-[36rem]">
          <SectionLabel>{servicesIntro.label}</SectionLabel>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-[clamp(1.9rem,6.8vw,3.35rem)] font-medium leading-[1.18] text-navy"
          >
            {servicesIntro.heading}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-[1.75] text-muted sm:text-[1.05rem]">
            {servicesIntro.supporting}
          </p>
        </div>

        <div className="mt-8 border-b border-line sm:mt-10 md:mt-14">
          {primaryServices.map((service) => (
            <article
              key={service.number}
              className="group relative border-t border-line py-5 sm:py-7 md:py-8"
            >
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-3 gap-y-2 md:grid-cols-12 md:gap-8 md:pl-5">
                <span
                  aria-hidden
                  className="absolute left-0 top-7 hidden h-[2.4rem] w-px bg-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:top-8 md:block"
                />
                <p className="text-[11px] tracking-[0.12em] text-muted md:col-span-1 md:text-[12px]">
                  {service.number}
                </p>
                <h3 className="font-serif text-[1.45rem] font-medium leading-none text-navy transition-transform duration-200 group-hover:translate-x-1 sm:text-[1.85rem] md:col-span-4 md:text-[2.05rem]">
                  {service.title}
                </h3>
                <p className="col-span-2 text-[0.92rem] leading-relaxed text-muted transition-colors duration-200 group-hover:text-navy md:col-span-7 md:col-start-6">
                  {service.items.join("  ·  ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
