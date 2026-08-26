"use client";

import { FormEvent, useEffect, useState } from "react";
import { Check, ChevronDown, LoaderCircle, X } from "lucide-react";
import { useContact } from "@/components/contact-provider";
import { enquiryServices } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const { open, closeForm } = useContact();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError("");
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [open]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") ?? "").trim()) {
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
    } catch {
      setStatus("error");
      setError("The message could not be sent. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div
      id="contact-form"
      className="mt-8 overflow-hidden rounded-xl bg-ivory text-ink ring-1 ring-ivory/15"
    >
      <div className="h-[3px] bg-gold" aria-hidden />
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div>
          <p className="font-serif text-[1.2rem] text-navy">Start a conversation</p>
          <p className="text-[12px] text-muted">A short note is enough. We will take it from there.</p>
        </div>
        <button
          type="button"
          onClick={closeForm}
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-navy/5 hover:text-navy"
          aria-label="Close contact form"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>

      {status === "sent" ? (
        <div className="flex items-start gap-3 px-5 py-6">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-ivory">
            <Check className="h-4 w-4" strokeWidth={2} />
          </span>
          <div>
            <p className="font-medium text-navy">Message received.</p>
            <p className="mt-1 text-[0.92rem] leading-relaxed text-muted">
              Thank you. We will reply to the email you provided.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-3 px-5 py-4 sm:grid-cols-2">
          <label className="sr-only" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <label className="block sm:col-span-1">
            <span className="mb-1.5 block text-[11px] font-medium tracking-[0.08em] text-muted">
              NAME
            </span>
            <input
              name="name"
              required
              maxLength={80}
              className="h-10 w-full rounded-lg border border-line bg-cream px-3 text-[0.92rem] text-navy outline-none transition-colors focus:border-gold"
            />
          </label>

          <label className="block sm:col-span-1">
            <span className="mb-1.5 block text-[11px] font-medium tracking-[0.08em] text-muted">
              EMAIL
            </span>
            <input
              name="email"
              type="email"
              required
              maxLength={120}
              className="h-10 w-full rounded-lg border border-line bg-cream px-3 text-[0.92rem] text-navy outline-none transition-colors focus:border-gold"
            />
          </label>

          <label className="block sm:col-span-1">
            <span className="mb-1.5 block text-[11px] font-medium tracking-[0.08em] text-muted">
              PHONE
            </span>
            <input
              name="phone"
              type="tel"
              required
              maxLength={20}
              className="h-10 w-full rounded-lg border border-line bg-cream px-3 text-[0.92rem] text-navy outline-none transition-colors focus:border-gold"
            />
          </label>

          <label className="relative block sm:col-span-1">
            <span className="mb-1.5 block text-[11px] font-medium tracking-[0.08em] text-muted">
              SERVICE
            </span>
            <select
              name="service"
              required
              defaultValue=""
              className="h-10 w-full appearance-none rounded-lg border border-line bg-cream px-3 pr-9 text-[0.92rem] text-navy outline-none transition-colors focus:border-gold"
            >
              <option value="" disabled>
                Select a service
              </option>
              {enquiryServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-[2.15rem] h-4 w-4 text-muted"
              strokeWidth={1.75}
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-[11px] font-medium tracking-[0.08em] text-muted">
              MESSAGE
            </span>
            <textarea
              name="message"
              required
              minLength={8}
              maxLength={1200}
              rows={3}
              className="w-full resize-none rounded-lg border border-line bg-cream px-3 py-2 text-[0.92rem] leading-relaxed text-navy outline-none transition-colors focus:border-gold"
            />
          </label>

          {status === "error" ? (
            <p className="sm:col-span-2 text-[0.85rem] text-red-700">{error}</p>
          ) : null}

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-pill btn-primary min-w-[8.5rem]"
            >
              {status === "sending" ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                "Send message"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
