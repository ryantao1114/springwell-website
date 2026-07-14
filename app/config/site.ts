export const site = {
  name: "Springwell Acupuncture",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://springwellacu.com",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    "https://springwell-integrative-acupuncture.square.site/",
  description:
    "Personalized acupuncture in Northern Virginia for women’s health, fertility and IVF support, pain management, TMJ and orofacial pain, stress, sleep, and digestive concerns.",
  email: "hello@springwellacu.com",
  phone: "",
  address: "",
  socialLinks: [
    {
      label: "Instagram",
      handle: "@springwell_acupuncture",
      href: "https://www.instagram.com/springwell_acupuncture/",
    },
  ],
  serviceArea: [
    "Northern Virginia",
    "McLean",
    "Falls Church",
    "Fairfax",
    "Vienna",
    "Tysons",
    "Arlington",
    "Alexandria",
    "Washington DC",
    "Bethesda",
    "Rockville",
    "Silver Spring",
  ],
  seoKeywords: [
    "Northern Virginia acupuncture",
    "DMV acupuncture clinic",
    "fertility acupuncture Northern Virginia",
    "IVF acupuncture support",
    "women's health acupuncture Northern Virginia",
    "pain management acupuncture",
    "TMJ acupuncture",
    "orofacial pain acupuncture",
    "stress and sleep acupuncture",
    "digestive health acupuncture",
    "cupping Northern Virginia",
    "Chinese herbal medicine Northern Virginia",
  ],
} as const;
