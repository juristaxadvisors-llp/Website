import { SectionLabel } from "@/components/section-label";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      className="overflow-hidden border-t border-line py-14 sm:py-16 md:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="flex items-start leading-none text-navy">
            <span className="font-serif text-[clamp(6.5rem,20vw,12rem)] font-medium tracking-[-0.06em]">
              10
            </span>
            <span className="mt-[0.14em] font-serif text-[clamp(2.25rem,7vw,4.25rem)] font-medium text-gold">
              +
            </span>
          </p>
          <p className="mt-4 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[12px] sm:tracking-[0.16em]">
            {experience.markCaption}
          </p>
        </div>

        <div className="lg:col-span-7">
          <SectionLabel>{experience.label}</SectionLabel>
          <h2
            id="experience-heading"
            className="mt-3 max-w-[16ch] whitespace-pre-line font-serif text-[clamp(1.9rem,4vw,2.85rem)] font-medium leading-[1.18] text-navy"
          >
            {experience.heading}
          </h2>
          <p className="mt-5 max-w-[36rem] text-[0.98rem] leading-[1.75] text-muted sm:text-[1.05rem] md:text-[1.125rem]">
            {experience.body}
          </p>
        </div>
      </div>
    </section>
  );
}
