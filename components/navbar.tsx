"use client";

import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/logo";
import { ContactTrigger } from "@/components/contact-trigger";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-42% 0px -48% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        if (!document.getElementById("contact-modal")) {
          document.body.style.overflow = "";
        }
      };
    }

    if (!document.getElementById("contact-modal")) {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-cream">
      <div
        className={cn(
          "page-wrap flex items-center justify-between gap-2 sm:gap-4 transition-[padding] duration-200",
          compact ? "py-2.5" : "py-3.5",
        )}
      >
        <a
          href="#top"
          className="min-w-0"
          aria-label="Juristax Advisors LLP home"
          onClick={() => setOpen(false)}
        >
          <Logo compact={compact} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative pb-1 text-[13px] text-navy/65 hover:text-navy",
                active === item.href && "text-navy",
              )}
            >
              {item.label}
              <span
                aria-hidden
                className={cn(
                  "absolute bottom-0 left-0 h-px bg-gold transition-[width] duration-200",
                  active === item.href ? "w-full" : "w-0",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactTrigger className="btn btn-primary hidden sm:inline-flex sm:w-auto">
            Talk to us
          </ContactTrigger>
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-navy transition-transform",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-navy transition-transform",
                  open ? "top-1.5 -rotate-45" : "top-2.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-line bg-cream lg:hidden">
          <nav className="page-wrap flex flex-col py-3" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-[1.05rem] text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ContactTrigger
              className="btn btn-primary mt-5 sm:w-auto"
              onClick={() => setOpen(false)}
            >
              Talk to us
            </ContactTrigger>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
