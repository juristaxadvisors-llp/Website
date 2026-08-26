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
  const { open, openForm } = useContact();

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls="contact-modal"
      className={cn(className)}
      onClick={(event) => {
        openForm();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
