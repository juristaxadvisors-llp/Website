"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, LoaderCircle, X } from "lucide-react";
import { useContact } from "@/components/contact-provider";
import { contactModal, enquiryServiceGroups } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactModal() {
  const { open, closeForm } = useContact();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError("");
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
          service: String(data.get("service") ?? "").trim(),
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
      closeRef.current?.focus();
    } catch {
      setStatus("error");
      setError("The message could not be sent. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-[60] flex items-end justify-center bg-navy/40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:items-center sm:p-6"
      onClick={closeForm}
    >
      <div
        id="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-heading"
        className="modal-panel flex max-h-[min(92dvh,40rem)] w-full max-w-[32rem] flex-col overflow-hidden bg-ivory text-ink sm:max-h-[90dvh]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-[3px] bg-gold" aria-hidden />

        <div className="flex items-start justify-between gap-4 px-5 pt-5">
          <div>
            <h2
              id="contact-modal-heading"
              className="font-serif text-[1.55rem] font-medium leading-tight text-navy"
            >
              {contactModal.heading}
            </h2>
            <p className="mt-1.5 max-w-[36ch] text-[0.82rem] leading-relaxed text-muted">
              {contactModal.supporting}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeForm}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-navy/5 hover:text-navy sm:h-8 sm:w-8"
            aria-label="Close contact form"
          >
            <X className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5 pt-4">
          {status === "sent" ? (
            <div className="pt-2">
              <p className="font-serif text-[1.55rem] font-medium text-navy">
                {contactModal.successTitle}
              </p>
              <p className="mt-2 max-w-[36ch] text-[0.9rem] leading-relaxed text-muted">
                {contactModal.successBody}
              </p>
              <button type="button" onClick={closeForm} className="btn btn-primary mt-6">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
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

              <label className="relative block sm:col-span-2">
                <span className="field-label">What can we help you with?</span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="field appearance-none pr-9"
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  {enquiryServiceGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.options.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-[2.15rem] h-4 w-4 text-muted"
                  strokeWidth={1.75}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  required
                  minLength={8}
                  maxLength={1200}
                  rows={3}
                  className="field h-auto py-2 leading-relaxed"
                />
              </label>

              {status === "error" ? (
                <p className="sm:col-span-2 text-[0.82rem] text-[#8a2a2a]">{error}</p>
              ) : null}

              <div className="sm:col-span-2 pt-0.5">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary min-w-[8.25rem]"
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
