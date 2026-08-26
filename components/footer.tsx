import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-cream pb-8 pt-12 sm:pt-14">
      <Reveal>
        <div className="page-wrap grid gap-8 sm:gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-5">
            <Logo compact />
            <p className="mt-4 text-[11px] tracking-[0.06em] text-muted sm:text-[12px] sm:tracking-[0.08em]">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-[28ch] text-[0.92rem] leading-relaxed text-navy sm:mt-4 sm:text-[0.95rem]">
              {site.line}
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 sm:mt-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.95rem] text-navy transition-colors duration-200 hover:text-muted"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 md:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              Get in touch
            </p>
            <ul className="mt-3 space-y-2 break-words text-[0.92rem] text-navy sm:mt-4 sm:text-[0.95rem]">
              <li>
                <a
                  href={site.contact.emailHref}
                  className="transition-colors duration-200 hover:text-muted"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors duration-200 hover:text-muted"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li>{site.contact.location}</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="page-wrap mt-10 border-t border-line pt-5 sm:mt-12">
          <p className="text-[12px] text-muted">© 2026 {site.name}</p>
        </div>
      </Reveal>
    </footer>
  );
}
