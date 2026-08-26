import { SectionLabel } from "@/components/section-label";
import { approach } from "@/lib/content";

export function Approach() {
  return (
    <section
      id="approach"
      className="overflow-hidden border-t border-line bg-ivory py-12 sm:py-16 md:py-20"
      aria-labelledby="approach-heading"
    >
      <div className="page-wrap">
        <div className="max-w-[34rem]">
          <SectionLabel>{approach.label}</SectionLabel>
          <h2
            id="approach-heading"
            className="mt-4 whitespace-pre-line font-serif text-[clamp(1.9rem,6.8vw,3.35rem)] font-medium leading-[1.18] text-navy"
          >
            {approach.heading}
          </h2>
        </div>

        <ol className="mt-8 grid gap-0 sm:mt-12 md:grid-cols-4 md:gap-8">
          {approach.steps.map((step, index) => (
            <li
              key={step.number}
              className={
                index === 0
                  ? "border-b border-line py-6 md:border-b-0 md:py-0"
                  : "border-b border-line py-6 last:border-b-0 md:border-b-0 md:border-l md:border-line md:py-0 md:pl-8"
              }
            >
              <p className="text-[12px] tracking-[0.12em] text-muted">{step.number}</p>
              <h3 className="mt-2 font-serif text-[1.45rem] font-medium text-navy sm:mt-3 sm:text-[1.65rem]">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted sm:mt-3 sm:text-[0.98rem]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
