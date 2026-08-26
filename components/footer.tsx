"use client";

import { Logo } from "@/components/logo";
import { ContactTrigger } from "@/components/contact-trigger";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-cream py-8">
      <div className="page-wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Logo compact />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                {item.href === "#contact" ? (
                  <ContactTrigger className="text-[13px] text-muted hover:text-navy">
                    {item.label}
                  </ContactTrigger>
                ) : (
                  <a href={item.href} className="text-[13px] text-muted hover:text-navy">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-[12px] text-muted">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
