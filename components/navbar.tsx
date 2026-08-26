"use client";

import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-cream/95 transition-[padding,border-color] duration-200",
        compact ? "border-line py-2" : "border-line/70 py-3",
      )}
    >
      <div className="page-wrap flex items-center justify-between gap-6">
        <a
          href="#top"
          className="relative z-10 shrink-0"
          aria-label="Juristax Advisors LLP home"
          onClick={() => setOpen(false)}
        >
          <Logo compact={compact} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "font-sans text-[14px] text-navy/70 transition-colors hover:text-navy",
                active === item.href && "text-navy",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden bg-navy px-4 py-2.5 font-sans text-[13px] text-ivory hover:bg-navy-deep sm:inline-flex"
          >
            Speak with us
          </a>

          <button
            type="button"
            className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-navy transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-4 bg-navy transition-transform duration-300",
                  open ? "top-1.5 -rotate-45" : "top-2.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="border-t border-line bg-cream lg:hidden">
          <nav className="page-wrap flex flex-col py-4" aria-label="Mobile">
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
            <a
              href="#contact"
              className="mt-5 inline-flex w-fit bg-navy px-5 py-3 font-sans text-[13px] text-ivory"
              onClick={() => setOpen(false)}
            >
              Speak with us
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
