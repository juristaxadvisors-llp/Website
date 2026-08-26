import Image from "next/image";
import { people, principal } from "@/lib/content";

export function People() {
  const hasProfile = Boolean(principal.name);

  return (
    <section
      className="border-t border-line bg-ivory py-14 md:py-16"
      aria-labelledby="people-heading"
    >
      <div className="page-wrap grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div>
          <h2
            id="people-heading"
            className="text-[1.35rem] font-medium tracking-[-0.01em] text-navy md:text-[1.5rem]"
          >
            {people.heading}
          </h2>
          <p className="mt-5 font-serif text-[1.65rem] leading-[1.3] text-navy md:text-[1.85rem]">
            {people.lead}
          </p>
        </div>

        <div className="space-y-4 text-[1.02rem] leading-[1.75] text-ink/85">
          {hasProfile ? (
            <article className="mb-8 flex flex-col gap-6 sm:flex-row sm:gap-8">
              {principal.photo ? (
                <Image
                  src={principal.photo}
                  alt={principal.name}
                  width={280}
                  height={360}
                  className="h-auto w-full max-w-[11rem] object-cover sm:w-44"
                />
              ) : null}
              <div>
                <p className="text-[1.15rem] font-medium text-navy">
                  {principal.name}
                </p>
                <p className="mt-1 text-[0.92rem] text-muted">{principal.role}</p>
                {principal.bio ? (
                  <p className="mt-4 text-[0.98rem] leading-[1.7]">{principal.bio}</p>
                ) : null}
                {principal.expertise.length > 0 ? (
                  <p className="mt-3 text-[0.92rem] text-muted">
                    {principal.expertise.join(" · ")}
                  </p>
                ) : null}
                {principal.linkedin ? (
                  <a
                    href={principal.linkedin}
                    className="mt-4 inline-block text-[0.92rem] text-navy underline decoration-navy/25 underline-offset-4"
                  >
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </article>
          ) : null}
          <p>{people.p1}</p>
          <p>{people.p2}</p>
        </div>
      </div>
    </section>
  );
}
