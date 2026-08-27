"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ContactModal } from "@/components/contact-modal";

type ContactContextValue = {
  open: boolean;
  presetService: string;
  openForm: (service?: string) => void;
  closeForm: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  const openForm = useCallback((service?: string) => {
    setPresetService(service?.trim() ?? "");
    setOpen(true);
  }, []);
  const closeForm = useCallback(() => {
    setOpen(false);
    setPresetService("");
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const value = useMemo(
    () => ({ open, presetService, openForm, closeForm }),
    [open, presetService, openForm, closeForm],
  );

  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactModal />
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
}
