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
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={783}
        height={616}
        className={cn(
          "h-11 w-auto object-contain md:h-12",
          compact && "h-10 md:h-11",
        )}
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[13px] font-semibold tracking-[0.04em] text-navy md:text-[14px]">
          JURISTAX
        </span>
        <span className="mt-1 font-sans text-[10px] tracking-[0.14em] text-muted">
          ADVISORS LLP
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
