import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-8 top-6 hidden w-[min(42vw,480px)] opacity-[0.07] lg:block"
        aria-hidden
      >
        <Image
          src="/logo.png"
          alt=""
          width={783}
          height={616}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="page-wrap relative max-w-[42rem]">
        <p className="mb-5 text-[13px] text-muted">{hero.kicker}</p>
        <h1
          id="hero-heading"
          className="font-serif text-[clamp(2.15rem,4.2vw,3.35rem)] font-normal leading-[1.2] tracking-[-0.015em] text-navy"
        >
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-[36rem] text-[1.02rem] leading-[1.75] text-ink/85">
          {hero.supporting}
        </p>
        <p className="mt-4 max-w-[36rem] text-[1.02rem] leading-[1.75] text-ink">
          {hero.fact}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center bg-navy px-5 py-2.5 text-[14px] text-ivory hover:bg-navy-deep"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#services"
            className="inline-flex min-h-11 items-center justify-center text-[14px] text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
