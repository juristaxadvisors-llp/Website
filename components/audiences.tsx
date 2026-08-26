import { Building2, Rocket, UserRound } from "lucide-react";
import { GoldLabel } from "@/components/section-label";
import { audiences } from "@/lib/content";

const icons = [Building2, Rocket, UserRound];

export function Audiences() {
  return (
    <section className="overflow-hidden border-t border-line py-16 md:py-20" aria-labelledby="audience-heading">
      <div className="page-wrap">
        <GoldLabel>{audiences.label}</GoldLabel>
        <h2
          id="audience-heading"
          className="sr-only"
        >
          {audiences.heading}
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {audiences.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title} className="text-center sm:text-left">
                <Icon className="mx-auto h-8 w-8 text-gold sm:mx-0" strokeWidth={1.4} />
                <h3 className="mt-4 text-[13px] font-semibold tracking-[0.16em] text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] text-muted">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
