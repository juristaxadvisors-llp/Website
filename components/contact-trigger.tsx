"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useContact } from "@/components/contact-provider";
import { cn } from "@/lib/utils";

export function ContactTrigger({
  children,
  className,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const { open, toggleForm } = useContact();

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls="contact-form"
      className={cn(className)}
      onClick={(event) => {
        toggleForm();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
