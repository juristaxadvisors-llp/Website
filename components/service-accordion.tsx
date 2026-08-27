"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  BadgeCheck,
  Bell,
  BookOpen,
  Building2,
  Calculator,
  ClipboardList,
  FileBarChart,
  FileInput,
  FileSearch,
  FileSpreadsheet,
  FileText,
  GitBranch,
  LayoutDashboard,
  LineChart,
  ListChecks,
  Mail,
  MessagesSquare,
  Percent,
  PieChart,
  Reply,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { ContactTrigger } from "@/components/contact-trigger";
import { Reveal } from "@/components/reveal";
import { primaryServices } from "@/lib/content";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, LucideIcon[]> = {
  Taxation: [FileText, Percent, Calculator, Search, Bell, Users],
  Finance: [
    BookOpen,
    FileSpreadsheet,
    ClipboardList,
    Wallet,
    Calculator,
    Scale,
  ],
  Advisory: [
    Search,
    GitBranch,
    FileSearch,
    ShieldAlert,
    ShieldCheck,
    LineChart,
  ],
  Compliance: [
    FileText,
    Percent,
    Calculator,
    Building2,
    BookOpen,
    ClipboardList,
  ],
  "Data Analytics": [
    FileBarChart,
    LayoutDashboard,
    TrendingUp,
    PieChart,
    LineChart,
    Wallet,
  ],
  Liaisoning: [
    FileInput,
    Mail,
    MessagesSquare,
    BadgeCheck,
    Reply,
    ListChecks,
  ],
};

function ServiceDetail({
  body,
  items,
  close,
  icons,
  open,
}: {
  body: readonly string[];
  items: readonly string[];
  close: string;
  icons: LucideIcon[];
  open: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        open ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-2 lg:gap-0">
        <div className="lg:border-r lg:border-navy/20 lg:pr-8 xl:pr-10">
          <p className="text-[0.98rem] leading-[1.75] text-muted md:text-[1.02rem]">
            {body[0]}
          </p>
          <p className="mt-4 text-[0.98rem] leading-[1.75] text-muted md:mt-5 md:text-[1.02rem]">
            {body[1]}
          </p>
        </div>

        <div className="flex min-h-0 flex-col lg:pl-8 xl:pl-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
            What we help with
          </p>
          <ul className="mt-3.5 grid min-h-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:overflow-y-auto lg:overscroll-contain">
            {items.map((item, index) => {
              const Icon = icons[index] ?? FileText;
              return (
                <li key={item}>
                  <ContactTrigger
                    service={item}
                    aria-label={`Enquire about ${item}`}
                    className="flex h-full w-full items-center gap-3 rounded-md border border-line bg-white px-3.5 py-3 text-left transition-[border-color,background-color] duration-200 hover:border-gold/50 hover:bg-ivory sm:px-4 sm:py-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3f0e8]">
                      <Icon className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0 text-[0.88rem] leading-snug text-navy sm:text-[0.9rem]">
                      {item}
                    </span>
                  </ContactTrigger>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="mt-5 flex shrink-0 items-start gap-3 border-l-2 border-gold bg-white/80 px-4 py-3 text-[0.9rem] font-medium leading-relaxed text-navy sm:mt-6 sm:px-5 sm:py-3.5 sm:text-[0.95rem]">
        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
        {close}
      </p>
    </div>
  );
}

export function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (openIndex === null) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const item = itemRefs.current[openIndex];
    const panel = panelRefs.current[openIndex];
    panel?.scrollTo({ top: 0 });

    const frame = window.requestAnimationFrame(() => {
      item?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [openIndex]);

  return (
    <ul className="mt-12 flex flex-col gap-3 md:mt-16 md:gap-3.5">
      {primaryServices.map((service, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li
            key={service.number}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className={cn(
              "overflow-hidden rounded-sm border-2 bg-white shadow-[0_8px_24px_rgba(11,31,51,0.04)] transition-[border-color,box-shadow] duration-200",
              open
                ? "border-navy/45 bg-cream shadow-[0_14px_36px_rgba(11,31,51,0.08)]"
                : "border-navy/30 hover:border-navy/45",
            )}
          >
            <Reveal delay={index * 40}>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className={cn(
                  "flex w-full items-start gap-4 px-4 py-5 text-left sm:gap-6 sm:px-6 sm:py-6 md:gap-8 md:px-8 md:py-6",
                  open && "bg-white pb-5 sm:pb-6 md:pb-6",
                )}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="w-8 shrink-0 pt-1 font-serif text-[0.95rem] tabular-nums tracking-[0.08em] text-gold sm:w-10 sm:pt-1.5">
                  {service.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-[1.35rem] font-medium leading-none text-navy sm:text-[1.55rem] md:text-[1.75rem]">
                    {service.title}
                  </span>
                  <span
                    className={cn(
                      "mt-2.5 block max-w-[40rem] text-[0.92rem] leading-relaxed sm:mt-3 sm:text-[0.95rem]",
                      open ? "text-navy/80" : "text-muted",
                    )}
                  >
                    {service.lead}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold bg-gold/10"
                >
                  <svg
                    viewBox="0 0 12 12"
                    className={cn(
                      "h-3.5 w-3.5 text-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      open && "rotate-180",
                    )}
                    fill="currentColor"
                  >
                    <path d="M2.05 4.1a.75.75 0 0 1 1.06 0L6 6.99l2.89-2.89a.75.75 0 1 1 1.06 1.06L6.53 8.58a.75.75 0 0 1-1.06 0L2.05 5.16a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    ref={(node) => {
                      panelRefs.current[index] = node;
                    }}
                    className="service-panel-scroll border-t border-navy/20"
                  >
                    <div className="flex h-full min-h-0 flex-col px-4 py-5 sm:px-6 sm:py-6 md:px-8">
                      <ServiceDetail
                        body={service.body}
                        items={service.items}
                        close={service.close}
                        icons={serviceIcons[service.title] ?? []}
                        open={open}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
