import { site } from "../config/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: site.name,
    url: site.url,
    image: new URL("/images/provider-renjinming.webp", site.url).toString(),
    description: site.description,
    email: site.email,
    telephone: site.phone || undefined,
    address: site.address
      ? {
          "@type": "PostalAddress",
          streetAddress: site.address,
        }
      : undefined,
    areaServed: site.serviceArea.map((name) => ({
      "@type": "Place",
      name,
    })),
    medicalSpecialty: [
      "Acupuncture",
      "Pain Management",
      "Fertility Support",
      "Women's Health",
      "Digestive Health",
    ],
    sameAs: site.socialLinks.map((social) => social.href),
    employee: {
      "@type": "Person",
      name: "Renjinming Dai",
      jobTitle: "Licensed Acupuncturist in Virginia",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: site.bookingUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
