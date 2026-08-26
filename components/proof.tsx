import { proof } from "@/lib/content";

export function Proof() {
  return (
    <section
      className="border-t border-line py-12 md:py-14"
      aria-labelledby="proof-heading"
    >
      <div className="page-wrap">
        <h2
          id="proof-heading"
          className="text-[1.05rem] font-medium text-navy"
        >
          {proof.heading}
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3 md:gap-12">
          {proof.items.map((item) => (
            <li key={item.title}>
              <p className="text-[0.98rem] font-medium text-navy">{item.title}</p>
              <p className="mt-2 text-[0.95rem] leading-[1.65] text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
