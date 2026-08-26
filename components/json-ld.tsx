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
    email: site.contact.email,
    telephone: "+919643939494",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
