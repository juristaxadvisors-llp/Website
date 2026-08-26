import { site } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "GST",
      "Income tax",
      "Taxation",
      "TDS",
      "ROC",
      "Finance",
      "Advisory",
      "Compliance",
    ],
    slogan: "Taxation, Finance, Advisory, Compliance",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
