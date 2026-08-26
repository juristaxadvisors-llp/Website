import { cta, site } from "@/lib/content";

export function Cta() {
  const email = site.contact.email;
  const phone = site.contact.phone;
  const address = site.contact.address;
  const hasDetails = Boolean(email || phone || address);

  return (
    <section
      id="contact"
      className="bg-navy py-14 text-ivory md:py-16"
      aria-labelledby="cta-heading"
    >
      <div
        className={
          hasDetails
            ? "page-wrap grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end md:gap-16"
            : "page-wrap"
        }
      >
        <div>
          <h2
            id="cta-heading"
            className="max-w-[16ch] font-serif text-[clamp(1.85rem,3.4vw,2.65rem)] font-normal leading-[1.2] text-ivory"
          >
            {cta.heading}
          </h2>
          <p className="mt-5 max-w-[32rem] text-[1.02rem] leading-[1.7] text-ivory/75">
            {cta.supporting}
          </p>
          {email ? (
            <a
              href={site.contact.emailHref ?? `mailto:${email}`}
              className="mt-8 inline-flex min-h-11 items-center justify-center bg-ivory px-5 py-2.5 text-[14px] text-navy hover:bg-cream"
            >
              {cta.secondary}
            </a>
          ) : null}
        </div>

        {hasDetails ? (
          <address
            id="contact-details"
            className="not-italic text-[0.98rem] leading-[1.8] text-ivory/80"
          >
            {email ? (
              <p>
                <a
                  href={site.contact.emailHref ?? `mailto:${email}`}
                  className="hover:text-ivory"
                >
                  {email}
                </a>
              </p>
            ) : null}
            {phone ? (
              <p>
                {site.contact.phoneHref ? (
                  <a href={site.contact.phoneHref} className="hover:text-ivory">
                    {phone}
                  </a>
                ) : (
                  phone
                )}
              </p>
            ) : null}
            {address ? <p>{address}</p> : null}
          </address>
        ) : null}
      </div>
    </section>
  );
}
