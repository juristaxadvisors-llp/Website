import { story } from "@/lib/content";

export function Story() {
  return (
    <section
      id="about"
      className="border-t border-line py-14 md:py-16"
      aria-labelledby="story-heading"
    >
      <div className="page-wrap grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 md:items-start">
        <h2
          id="story-heading"
          className="font-serif text-[clamp(2rem,3.4vw,2.85rem)] font-normal leading-[1.15] text-navy"
        >
          <span className="block">{story.line1}</span>
          <span className="block">{story.line2}</span>
        </h2>
        <div className="max-w-[38rem] space-y-4 text-[1.02rem] leading-[1.75] text-ink/85">
          <p>{story.p1}</p>
          <p>{story.p2}</p>
          <p className="text-ink">{story.p3}</p>
        </div>
      </div>
    </section>
  );
}
