import { cn } from "@/lib/utils";

export function GoldLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold",
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-gold" />
      {children}
    </p>
  );
}
