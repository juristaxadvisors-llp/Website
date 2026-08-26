import { practiceAreas, servicesIntro, specialistWork } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-line py-14 md:py-16"
      aria-labelledby="services-heading"
    >
      <div className="page-wrap">
        <div className="max-w-[36rem]">
          <h2
            id="services-heading"
            className="text-[1.35rem] font-medium tracking-[-0.01em] text-navy md:text-[1.5rem]"
          >
            {servicesIntro.heading}
          </h2>
          <p className="mt-3 text-[0.98rem] leading-[1.7] text-muted">
            {servicesIntro.supporting}
          </p>
        </div>

        <dl className="mt-10 divide-y divide-line border-y border-line">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="grid gap-2 py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10 md:py-7"
            >
              <dt className="font-serif text-[1.45rem] leading-snug text-navy">
                {area.title}
              </dt>
              <dd className="text-[0.98rem] leading-[1.7] text-ink/80">
                {area.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          {specialistWork.map((item) => (
            <p key={item.title} className="max-w-[32rem] text-[0.95rem] leading-[1.7] text-muted">
              <span className="font-medium text-navy">{item.title}. </span>
              {item.detail}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
