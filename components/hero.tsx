import Image from "next/image";
import { ArrowRight, Award, Layers, Handshake } from "lucide-react";
import { ContactTrigger } from "@/components/contact-trigger";
import { hero, trustBar } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pt-10 md:pt-14" aria-labelledby="hero-heading">
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/70">
            {hero.kicker}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-[14ch] font-serif text-[clamp(2.4rem,4.6vw,3.65rem)] font-medium leading-[1.18] text-navy"
          >
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-[1.75] text-muted">
            {hero.supporting}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ContactTrigger className="btn-pill btn-primary">
              {hero.primaryCta}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </ContactTrigger>
            <a href="#services" className="btn-pill btn-outline">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-building.jpg"
              alt="Modern office buildings"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
              priority
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 max-w-[16.5rem] overflow-hidden rounded-xl border border-navy/15 bg-ivory/80 p-4 shadow-sm backdrop-blur-md sm:right-auto">
            <p className="flex items-center gap-3 font-serif text-[2rem] leading-none text-navy">
              <span className="text-gold">{hero.experienceBadge}</span>
              <span className="h-8 w-px bg-gold" aria-hidden />
              <span className="font-sans text-[12px] font-medium leading-snug text-navy/80">
                {hero.experienceLabel}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-y border-line bg-ivory">
        <div className="page-wrap grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {trustBar.map((item, index) => {
            const Icon = [Award, Layers, Handshake][index];
            return (
              <div key={item.title} className="flex items-start gap-3 py-6 md:px-8 md:py-7 first:md:pl-0 last:md:pr-0">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.12em] text-navy">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
