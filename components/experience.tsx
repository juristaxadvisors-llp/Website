import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      className="overflow-hidden border-t border-line py-16 sm:py-20 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="page-wrap">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-gold" />
            {experience.label}
          </p>
        </Reveal>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <h2
              id="experience-heading"
              className="max-w-[16ch] font-serif text-[clamp(2.15rem,5vw,3.75rem)] font-medium leading-[1.12] text-navy"
            >
              {experience.heading}
              <span className="mt-1 block text-navy/55">{experience.headingSecond}</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid items-stretch gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <article className="relative flex h-full flex-col justify-end overflow-hidden rounded-sm border border-navy/15 bg-navy px-7 py-8 text-ivory sm:px-9 sm:py-10">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gold" aria-hidden />
              <p className="flex items-start leading-none">
                <span className="font-serif text-[clamp(6.5rem,18vw,9.5rem)] font-medium tracking-[-0.07em]">
                  {experience.mark}
                </span>
                <span className="mt-[0.12em] font-serif text-[clamp(2.25rem,7vw,3.75rem)] font-medium text-gold">
                  +
                </span>
              </p>
              <span className="mt-5 block h-px w-12 bg-gold" aria-hidden />
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory/70 sm:text-[12px]">
                {experience.markCaption}
              </p>
            </article>
          </Reveal>

          <Reveal delay={90} className="flex flex-col justify-center lg:col-span-7">
            <span className="mb-6 hidden h-px w-14 bg-gold lg:block" aria-hidden />
            <p className="max-w-[36rem] text-[1.02rem] leading-[1.8] text-muted md:text-[1.125rem]">
              {experience.body}
            </p>
            <p className="mt-6 max-w-[36rem] text-[1.02rem] leading-[1.8] text-navy md:text-[1.125rem]">
              {experience.close}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ul className="mt-12 grid gap-0 border-t border-line sm:mt-16 md:grid-cols-3">
            {experience.points.map((point, index) => (
              <li
                key={point.title}
                className={
                  index === 0
                    ? "py-7 md:py-8 md:pr-10"
                    : "border-t border-line py-7 md:border-l md:border-t-0 md:px-10 md:py-8"
                }
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
                  {point.title}
                </p>
                <p className="mt-3 max-w-[22ch] text-[0.98rem] leading-relaxed text-navy sm:text-[1.02rem]">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
