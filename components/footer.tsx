import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/content";

export function Footer() {
  const details = [site.contact.email, site.contact.phone, site.contact.address].filter(
    Boolean,
  );

  return (
    <footer className="border-t border-line bg-cream py-10 md:py-12">
      <div className="page-wrap flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 text-[12px] tracking-[0.08em] text-muted">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[0.95rem] text-ink/75 hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {details.length > 0 ? (
            <ul className="mt-5 space-y-1 text-[0.92rem] text-muted">
              {details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </nav>
      </div>

      <div className="page-wrap mt-10 border-t border-line pt-5">
        <p className="text-[12px] text-muted">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
