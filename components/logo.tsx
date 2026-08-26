import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2 sm:gap-3", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={783}
        height={616}
        className={cn(
          "h-9 w-auto shrink-0 object-contain transition-[height] duration-200 sm:h-11 md:h-12",
          compact && "h-8 sm:h-10 md:h-11",
        )}
        priority
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-sans text-[12px] font-semibold tracking-[0.04em] text-navy sm:text-[13px] md:text-[14px]">
          JURISTAX
        </span>
        <span className="mt-1 font-sans text-[9px] tracking-[0.12em] text-muted sm:text-[10px] sm:tracking-[0.14em]">
          ADVISORS LLP
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
