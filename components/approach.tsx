import { approach } from "@/lib/content";

export function Approach() {
  return (
    <section
      id="approach"
      className="border-t border-line py-14 md:py-16"
      aria-labelledby="approach-heading"
    >
      <div className="page-wrap">
        <div className="max-w-[34rem]">
          <h2
            id="approach-heading"
            className="text-[1.35rem] font-medium tracking-[-0.01em] text-navy md:text-[1.5rem]"
          >
            {approach.heading}
          </h2>
          <p className="mt-3 text-[0.98rem] leading-[1.7] text-muted">
            {approach.supporting}
          </p>
        </div>

        <ol className="mt-10 space-y-8 md:space-y-9">
          {approach.steps.map((step) => (
            <li
              key={step.title}
              className="max-w-[40rem] border-l-2 border-navy/15 pl-5 md:pl-6"
            >
              <h3 className="text-[1.05rem] font-medium text-navy">{step.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-[1.7] text-ink/80">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
