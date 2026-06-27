export const conditions = [
  "Neck Pain",
  "Back Pain",
  "Shoulder Pain",
  "Headache / Migraine",
  "TMJ / Jaw Pain",
  "Orofacial Pain",
  "Stress",
  "Insomnia",
  "Fertility Support",
  "IVF / IUI Support",
  "Menstrual Pain",
  "PMS",
  "Women's Health",
  "Anxiety",
  "Digestive Health",
  "IBS Support",
  "Fatigue",
  "General Wellness"
].map((name) => ({
  name,
  description: `Personalized acupuncture care may support patients experiencing ${name.toLowerCase()}.`
}));
