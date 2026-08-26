import { Reveal } from "@/components/reveal";
import { primaryServices, servicesIntro } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="overflow-hidden border-t border-line bg-ivory py-16 sm:py-20 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="page-wrap">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-gold" />
                {servicesIntro.label}
              </p>
              <h2
                id="services-heading"
                className="mt-4 font-serif text-[clamp(2.05rem,4.4vw,3.35rem)] font-medium leading-[1.15] text-navy"
              >
                {servicesIntro.heading}
              </h2>
            </div>
            <p className="max-w-[28rem] text-[0.98rem] leading-[1.75] text-muted lg:pb-1 lg:text-right">
              {servicesIntro.supporting}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {primaryServices.map((service, index) => (
            <Reveal key={service.number} delay={index * 60} className="h-full">
              <article className="group h-full rounded-xl border border-line bg-white px-3.5 py-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-gold/40 sm:px-6 sm:py-7">
                <p className="text-[11px] tracking-[0.16em] text-gold">{service.number}</p>
                <h3 className="mt-2 font-serif text-[1.2rem] font-medium leading-snug text-navy sm:mt-3 sm:text-[1.55rem] md:text-[1.75rem]">
                  {service.title}
                </h3>
                <ul className="mt-3 space-y-1.5 sm:mt-4">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-[0.8rem] leading-relaxed text-muted sm:gap-2.5 sm:text-[0.9rem]"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
