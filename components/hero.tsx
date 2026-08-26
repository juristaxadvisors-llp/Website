import Image from "next/image";
import { ContactTrigger } from "@/components/contact-trigger";
import { Reveal } from "@/components/reveal";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-0 flex-1 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="hero-visual pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/chatgpt_hero.png"
          alt=""
          fill
          className="object-cover object-[center_30%] opacity-40 md:object-center"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative flex h-full flex-col justify-center py-10 sm:py-12 md:py-10">
        <div className="page-wrap">
          <Reveal>
            <p className="max-w-full text-[10px] font-medium uppercase leading-relaxed tracking-[0.12em] text-muted sm:text-[11px] sm:tracking-[0.16em]">
              {hero.kicker}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 max-w-[14ch] font-serif text-[clamp(2.15rem,8.4vw,4.25rem)] font-medium leading-[1.14] text-navy"
            >
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-[1.7] text-muted sm:mt-5 sm:text-[1.02rem] md:text-[1.1rem]">
              {hero.supporting}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center">
              <ContactTrigger className="btn btn-primary sm:w-auto">
                {hero.primaryCta}
              </ContactTrigger>
              <a href="#services" className="btn btn-outline sm:w-auto">
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
