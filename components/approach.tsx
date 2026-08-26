import { GoldLabel } from "@/components/section-label";
import { approach } from "@/lib/content";

export function Approach() {
  return (
    <section id="approach" className="overflow-hidden py-16 md:py-20" aria-labelledby="approach-heading">
      <div className="page-wrap">
        <GoldLabel>{approach.label}</GoldLabel>
        <h2
          id="approach-heading"
          className="mt-4 font-serif text-[clamp(2rem,3.4vw,2.75rem)] font-medium leading-[1.2] text-navy"
        >
          {approach.heading}
        </h2>

        <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden
            className="absolute left-[1.15rem] top-4 hidden h-px w-[calc(100%-2.3rem)] bg-line md:block"
          />
          {approach.steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gold bg-cream text-[11px] font-semibold text-gold">
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-[1.4rem] font-medium text-navy">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[20rem] text-[0.92rem] leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
