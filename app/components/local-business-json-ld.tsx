import { site } from "../config/site";

export function LocalBusinessJsonLd() {
  const logo = new URL("/images/springwell-official-logo.png", site.url).toString();
  const business = {
    "@id": `${site.url}/#business`,
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: site.name,
    alternateName: "Springwell Acupuncture",
    url: site.url,
    logo,
    image: [
      logo,
      new URL("/images/provider-renjinming-2026.webp", site.url).toString(),
    ],
    description: site.description,
    email: site.email,
    telephone: "+1-703-495-2857",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: "US",
    },
    hasMap: site.directionsUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday", "Friday", "Sunday"],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-703-495-2857",
      contactType: "appointments",
      areaServed: "US",
    },
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

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        alternateName: "Springwell Acupuncture",
        description: site.description,
        publisher: { "@id": `${site.url}/#business` },
      },
      business,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
