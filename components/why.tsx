import Image from "next/image";
import { Lightbulb, GitMerge, HeartHandshake } from "lucide-react";
import { GoldLabel } from "@/components/section-label";
import { why } from "@/lib/content";

const icons = [Lightbulb, GitMerge, HeartHandshake];

export function Why() {
  return (
    <section
      id="about"
      className="overflow-hidden border-t border-line bg-ivory py-16 md:py-20"
      aria-labelledby="why-heading"
    >
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/why-pen.jpg"
            alt="Professional documents and writing"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <GoldLabel>{why.label}</GoldLabel>
          <h2
            id="why-heading"
            className="mt-4 max-w-[16ch] font-serif text-[clamp(2rem,3.4vw,2.75rem)] font-medium leading-[1.2] text-navy"
          >
            {why.heading}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-[1.75] text-muted">
            {why.body}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {why.points.map((point, index) => {
              const Icon = icons[index];
              return (
                <div key={point.title}>
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-navy">
                    {point.title}
                  </p>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
