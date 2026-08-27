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
  const baseOptions = enquiryServiceGroups.flatMap((group) => group.options);
  const options =
    value && !baseOptions.includes(value) ? [value, ...baseOptions] : baseOptions;

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
    <div ref={wrapRef} className="relative z-20 sm:col-span-2">
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
          className="absolute left-0 right-0 top-full z-30 mt-1 overflow-hidden rounded-lg border border-line bg-white py-1 shadow-[0_12px_28px_rgba(11,31,51,0.12)]"
        >
          {options.map((service) => (
            <button
              key={service}
              type="button"
              role="option"
              aria-selected={value === service}
              className={`block w-full px-3.5 py-2.5 text-left text-[0.92rem] ${
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
      ) : null}
    </div>
  );
}

export function ContactModal() {
  const { open, closeForm, presetService } = useContact();
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

    setService(presetService);
    const frame = requestAnimationFrame(() => nameRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open, presetService]);

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
      className="modal-overlay fixed inset-0 z-[60] flex items-center justify-center bg-navy/45 p-4 backdrop-blur-[2px] sm:p-6"
      onClick={closeForm}
    >
      <div
        id="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-heading"
        className="modal-panel relative flex max-h-[min(90vh,40rem)] w-full max-w-[34rem] flex-col overflow-hidden rounded-xl bg-ivory text-ink shadow-[0_24px_64px_rgba(11,31,51,0.22)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-[3px] shrink-0 bg-gold" aria-hidden />

        <div className="flex shrink-0 items-start justify-between gap-4 px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
          <div>
            <h2
              id="contact-modal-heading"
              className="font-serif text-[1.55rem] font-medium leading-tight text-navy sm:text-[1.85rem]"
            >
              {contactModal.heading}
            </h2>
            <p className="mt-1.5 max-w-[40ch] text-[0.88rem] leading-relaxed text-muted">
              {contactModal.supporting}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeForm}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted hover:bg-navy/5 hover:text-navy"
            aria-label="Close contact form"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6 sm:px-7 sm:pb-7">
          {status === "sent" ? (
            <div className="pt-1">
              <p className="font-serif text-[1.5rem] font-medium text-navy">
                {contactModal.successTitle}
              </p>
              <p className="mt-3 max-w-[36ch] text-[0.98rem] leading-relaxed text-muted">
                {contactModal.successBody}
              </p>
              <button type="button" onClick={closeForm} className="btn btn-primary mt-6 sm:w-auto">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-3.5 sm:grid-cols-2">
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
                  rows={4}
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
