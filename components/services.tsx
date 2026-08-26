import {
  FileText,
  LineChart,
  Compass,
  Shield,
  BarChart3,
  Waypoints,
} from "lucide-react";
import { GoldLabel } from "@/components/section-label";
import { serviceCards, servicesIntro } from "@/lib/content";

const icons = {
  taxation: FileText,
  finance: LineChart,
  advisory: Compass,
  compliance: Shield,
  analytics: BarChart3,
  liaison: Waypoints,
};

export function Services() {
  return (
    <section id="services" className="overflow-hidden py-16 md:py-20" aria-labelledby="services-heading">
      <div className="page-wrap grid gap-10 lg:grid-cols-[minmax(15.5rem,18.5rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="lg:sticky lg:top-28">
          <GoldLabel>{servicesIntro.label}</GoldLabel>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-[clamp(2rem,3.4vw,2.75rem)] font-medium leading-[1.2] text-navy"
          >
            {servicesIntro.heading}
          </h2>
          <p className="mt-4 max-w-[28rem] text-[0.98rem] leading-[1.75] text-muted">
            {servicesIntro.supporting}
          </p>
          <a href="#services" className="btn-pill btn-primary mt-8">
            {servicesIntro.cta}
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => {
            const Icon = icons[card.id as keyof typeof icons];
            return (
              <article
                key={card.id}
                className="overflow-hidden rounded-xl border border-gold/35 bg-card p-5 transition-shadow hover:shadow-[0_8px_24px_rgba(11,31,51,0.06)]"
              >
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-[1.35rem] font-medium text-navy">
                  {card.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[0.9rem] leading-relaxed text-muted">
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
