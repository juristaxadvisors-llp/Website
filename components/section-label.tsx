import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.16em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
