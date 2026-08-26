"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, LoaderCircle, X } from "lucide-react";
import { useContact } from "@/components/contact-provider";
import { contactModal, enquiryServiceGroups } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

function ServicePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  return (
    <div ref={wrapRef} className="sm:col-span-2">
      <span className="field-label">What can we help you with?</span>
      <button
        type="button"
        className="field flex items-center justify-between gap-3 pr-3 text-left"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? "truncate text-navy" : "text-muted"}>
          {value || "Select an area"}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.75}
        />
      </button>
      {open ? (
        <div
          role="listbox"
          className="mt-2 max-h-52 overflow-y-auto overscroll-contain rounded-lg border border-line bg-white"
        >
          {enquiryServiceGroups.map((group) => (
            <div key={group.label} className="border-b border-line last:border-b-0">
              <p className="px-3 pb-1 pt-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                {group.label}
              </p>
              {group.options.map((service) => (
                <button
                  key={service}
                  type="button"
                  role="option"
                  aria-selected={value === service}
                  className={`block w-full px-3 py-2 text-left text-[0.9rem] ${
                    value === service
                      ? "bg-cream text-navy"
                      : "text-navy hover:bg-cream"
                  }`}
                  onClick={() => {
                    onChange(service);
                    setOpen(false);
                  }}
                >
                  {service}
                </button>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ContactModal() {
  const { open, closeForm } = useContact();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [service, setService] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError("");
      setService("");
      return;
    }

    const frame = requestAnimationFrame(() => nameRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") ?? "").trim()) {
      setStatus("sent");
      form.reset();
      setService("");
      return;
    }

    if (!service) {
      setError("Please select what we can help you with.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          organisation: String(data.get("organisation") ?? "").trim(),
          service,
          message: String(data.get("message") ?? "").trim(),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(result.error || "The message could not be sent. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
      setService("");
      closeRef.current?.focus();
    } catch {
      setStatus("error");
      setError("The message could not be sent. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div
      id="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-heading"
      className="modal-overlay fixed inset-0 z-[60] flex flex-col bg-ivory text-ink"
    >
      <div className="h-[3px] shrink-0 bg-gold" aria-hidden />

      <div className="page-wrap flex w-full shrink-0 items-start justify-between gap-4 py-5">
        <div>
          <h2
            id="contact-modal-heading"
            className="font-serif text-[1.75rem] font-medium leading-tight text-navy md:text-[2.1rem]"
          >
            {contactModal.heading}
          </h2>
          <p className="mt-1.5 max-w-[40ch] text-[0.9rem] leading-relaxed text-muted">
            {contactModal.supporting}
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={closeForm}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-navy/5 hover:text-navy"
          aria-label="Close contact form"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="page-wrap max-w-[40rem] pb-10">
          {status === "sent" ? (
            <div className="pt-6">
              <p className="font-serif text-[1.75rem] font-medium text-navy">
                {contactModal.successTitle}
              </p>
              <p className="mt-3 max-w-[36ch] text-[1rem] leading-relaxed text-muted">
                {contactModal.successBody}
              </p>
              <button type="button" onClick={closeForm} className="btn btn-primary mt-8 sm:w-auto">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="website">
                Website
              </label>
              <input
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <label className="block sm:col-span-1">
                <span className="field-label">Name</span>
                <input
                  ref={nameRef}
                  name="name"
                  required
                  maxLength={80}
                  autoComplete="name"
                  className="field"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="field-label">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  className="field"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="field-label">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  autoComplete="tel"
                  className="field"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="field-label">Company / Organisation</span>
                <input
                  name="organisation"
                  maxLength={120}
                  autoComplete="organization"
                  className="field"
                />
              </label>

              <ServicePicker value={service} onChange={setService} />

              <label className="block sm:col-span-2">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  required
                  minLength={8}
                  maxLength={1200}
                  rows={5}
                  className="field h-auto py-2.5 leading-relaxed"
                />
              </label>

              {status === "error" ? (
                <p className="sm:col-span-2 text-[0.9rem] text-[#8a2a2a]">{error}</p>
              ) : null}

              <div className="sm:col-span-2 pt-1">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary min-w-[8.25rem] sm:w-auto"
                >
                  {status === "sending" ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    "Send enquiry"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
