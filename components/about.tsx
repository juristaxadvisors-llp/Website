import { Reveal } from "@/components/reveal";
import { about } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="overflow-hidden py-16 sm:py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="page-wrap">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-gold" />
            {about.label}
          </p>
        </Reveal>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-2 lg:gap-x-12">
          <Reveal>
            <h2
              id="about-heading"
              className="font-serif text-[clamp(2.15rem,5vw,3.75rem)] font-medium leading-[1.12] text-navy"
            >
              {about.heading}
              <span className="mt-1 block text-navy/55">{about.headingSecond}</span>
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <span className="mb-6 block h-px w-14 bg-gold" aria-hidden />
            <p className="text-[1.02rem] leading-[1.8] text-muted md:text-[1.125rem]">
              {about.body}
            </p>
            <p className="mt-6 text-[1.02rem] leading-[1.8] text-navy md:text-[1.125rem]">
              {about.close}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-y-2 border-t border-line pt-6 md:mt-20">
            {about.practices.map((item, index) => (
              <li
                key={item}
                className="flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-muted"
              >
                {index > 0 ? (
                  <span aria-hidden className="mx-3 h-1 w-1 rounded-full bg-gold sm:mx-5" />
                ) : null}
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
