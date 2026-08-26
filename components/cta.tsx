import { ContactTrigger } from "@/components/contact-trigger";
import { Reveal } from "@/components/reveal";
import { cta, site } from "@/lib/content";

export function Cta() {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-navy py-14 text-ivory sm:py-16 md:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="page-wrap text-center">
        <Reveal className="mx-auto max-w-[40rem]">
          <h2
            id="cta-heading"
            className="whitespace-pre-line font-serif text-[clamp(1.9rem,7.2vw,3.5rem)] font-medium leading-[1.18] text-ivory"
          >
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[32rem] text-[0.98rem] leading-[1.7] text-ivory/70 sm:mt-5 sm:text-[1.05rem] sm:leading-[1.75]">
            {cta.supporting}
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <ContactTrigger className="btn btn-on-dark sm:w-auto">
              {cta.primary}
            </ContactTrigger>
            <a href={site.contact.emailHref} className="btn btn-outline-light sm:w-auto">
              {cta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
