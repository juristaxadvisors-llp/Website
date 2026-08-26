import { Reveal } from "@/components/reveal";
import { credibility } from "@/lib/content";

export function Credibility() {
  return (
    <section
      className="relative z-10 shrink-0 border-y border-navy/20 bg-cream"
      aria-label="Firm at a glance"
    >
      <div className="page-wrap grid md:grid-cols-3">
        {credibility.map((item, index) => (
          <Reveal
            key={item.mark}
            delay={index * 70}
            className={
              index === 0
                ? "py-5 md:py-6 md:pr-10"
                : "border-t border-navy/20 py-5 md:border-l md:border-t-0 md:px-10 md:py-6"
            }
          >
            <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 leading-none text-navy">
              <span className="font-serif text-[1.85rem] font-medium tracking-tight md:text-[2.05rem]">
                {item.mark}
              </span>
              <span className="font-serif text-[1.05rem] font-medium md:text-[1.15rem]">
                {item.label}
              </span>
            </p>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-muted md:text-[0.9rem]">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
