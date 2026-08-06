export type Service = {
  slug: "acupuncture" | "cupping" | "herbal-medicine";
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  introTitle: string;
  introCopy: string;
  image: string;
  imageAlt: string;
  primaryLabel: string;
  primaryCopy: string;
  visitLabel: string;
  visitCopy: string;
  safetyLabel: string;
  safetyCopy: string;
  commonReasons?: string[];
  careAreas: string[];
  clinicalNote: string;
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "acupuncture",
    number: "01",
    eyebrow: "Core treatment",
    title: "Acupuncture",
    summary:
      "A personalized treatment using very fine, sterile, single-use needles placed at selected points on the body.",
    introTitle: "Care that begins with one point and considers the whole person.",
    introCopy: "Our licensed acupuncturist selects points according to your symptoms, health history, treatment goals, and traditional tongue and pulse assessment. The aim is thoughtful, individualized care that connects a local treatment with the wider patterns affecting how you feel.",
    image: "/images/service-acupuncture.png",
    imageAlt: "Acupuncture treatment using fine needles",
    primaryLabel: "How it may work",
    primaryCopy:
      "Needle stimulation engages sensory nerves and local connective tissue. These signals may influence pain processing, muscle tone, local circulation, and autonomic regulation. Research suggests that acupuncture works through several overlapping pathways rather than one single mechanism.",
    visitLabel: "What a visit may involve",
    visitCopy:
      "Point selection is based on your health history, current symptoms, treatment goals, and traditional assessment. Needles are placed gently and usually remain for a short rest period while you relax.",
    safetyLabel: "Safety & comfort",
    safetyCopy:
      "Temporary soreness, light bruising, or a brief heavy or tingling sensation can occur. We use sterile, single-use needles and adjust technique to your comfort.",
    careAreas: [
      "Women’s health and menstrual cycle concerns",
      "Fertility planning, IUI, and IVF support",
      "TMJ, jaw, and facial pain",
      "Headaches and neck, shoulder, or back tension",
      "Stress, sleep difficulties, and fatigue",
      "Bloating and stress-sensitive digestive concerns",
    ],
    clinicalNote:
      "Acupuncture may be used as supportive care alongside appropriate medical evaluation and treatment. New, severe, or unexplained symptoms should be assessed by a qualified healthcare professional. Fertility care should remain coordinated with your reproductive endocrinologist or OB-GYN.",
    faqs: [
      { question: "What happens during an acupuncture visit?", answer: "We begin with a detailed conversation about your symptoms, health history, and goals. When appropriate, the visit includes tongue and pulse assessment, gentle needle placement, a quiet rest period, and a plan for follow-up." },
      { question: "Does acupuncture hurt?", answer: "Most people feel little or no pain. A brief pinch, heaviness, warmth, tingling, or a dull sensation can occur, and we adjust the treatment to your comfort." },
      { question: "How often should I receive acupuncture?", answer: "Frequency depends on the severity, duration, and pattern of your concern. We discuss a practical starting plan and adjust it according to your response." },
      { question: "Can acupuncture replace medical care?", answer: "No. Acupuncture is supportive care. New, severe, or unexplained symptoms should be evaluated by an appropriate medical professional, and fertility care should remain coordinated with your medical team." },
    ],
  },
  {
    slug: "cupping",
    number: "02",
    eyebrow: "Traditional supportive therapy",
    title: "Fire Cupping",
    summary:
      "A warming Traditional Chinese Medicine therapy used to ease areas of tension and restriction and encourage the smooth movement of Qi and Blood.",
    introTitle: "Warmth, movement, and a more comfortable sense of the body.",
    introCopy: "Fire cupping uses carefully controlled suction to create a local treatment signal. It may be selected for areas that feel tight, sore, heavy, or restricted, and can be used alone or alongside acupuncture when appropriate.",
    image: "/images/service-cupping.jpg",
    imageAlt: "Traditional glass cups used for cupping therapy",
    primaryLabel: "Traditional Chinese Medicine perspective",
    primaryCopy:
      "In Chinese medicine, aching, stiffness, and heaviness may reflect a pattern in which Qi and Blood are not moving freely. Fire cupping is traditionally used to ease this stagnation, dispel Cold and Dampness, and help the body return to a more comfortable sense of movement and balance.",
    visitLabel: "Why patients choose it",
    visitCopy:
      "Its warming quality makes fire cupping especially well suited to tight, sore, or heavy-feeling areas and discomfort that tends to feel worse in cold or damp weather. It may be used on its own or alongside acupuncture when appropriate.",
    safetyLabel: "About cupping marks",
    safetyCopy:
      "Temporary circular marks are common and usually fade within several days. Their color is not a measure of “toxins” or treatment success. Cupping is not used over broken, irritated, infected, or otherwise unsuitable skin.",
    commonReasons: [
      "Neck, shoulder, and upper-back tension",
      "Low-back tightness or stiffness",
      "Sore or overworked muscles",
      "Exercise-related muscle fatigue",
      "Tension headaches associated with neck tightness",
      "Discomfort aggravated by cold or damp weather",
      "A sense of heaviness or restricted movement",
      "General physical tension and difficulty relaxing",
    ],
    careAreas: [
      "Neck, shoulder, and upper-back tightness",
      "Low-back stiffness and overworked muscles",
      "Exercise-related soreness and physical fatigue",
      "Tension headaches associated with neck tightness",
      "A sense of heaviness or restricted movement",
      "Warm, supportive care alongside acupuncture",
    ],
    clinicalNote:
      "Cupping marks are a temporary skin response, not proof that toxins were removed. We screen for skin conditions, bleeding risk, pregnancy-related considerations, and other reasons a technique may not be appropriate.",
    faqs: [
      { question: "What does fire cupping feel like?", answer: "Most people notice firm warmth and a gentle pulling sensation. Suction is adjusted to the area, your skin, and your comfort." },
      { question: "How long do cupping marks last?", answer: "Circular marks are common and usually fade over several days. Their color does not measure toxins removed or treatment success." },
      { question: "What concerns may cupping support?", answer: "Patients often choose cupping for tight neck and shoulders, low-back stiffness, overworked muscles, soreness, and tension that feels heavy or restricted." },
      { question: "Can cupping be combined with acupuncture?", answer: "Yes. When appropriate, cupping may be used alongside acupuncture to address both local muscle tension and a broader treatment plan." },
    ],
  },
  {
    slug: "herbal-medicine",
    number: "03",
    eyebrow: "Traditional medicine",
    title: "Herbal Medicine",
    summary:
      "An individualized approach using carefully selected traditional formulas rather than a one-size-fits-all supplement.",
    introTitle: "Traditional formulas, considered with modern safety standards.",
    introCopy: "Chinese herbal medicine is not a generic supplement list. Formula selection considers your symptoms, constitution, medications, supplements, pregnancy or fertility care, and response over time, with clear communication about safety and coordination.",
    image: "/images/service-herbal-medicine.jpg",
    imageAlt: "Chinese herbs arranged for an individualized formula",
    primaryLabel: "How it may work",
    primaryCopy:
      "Herbal formulas contain multiple naturally occurring compounds that may act on more than one biological pathway. In Chinese medicine, ingredient selection and proportions are refined according to the person’s symptom pattern and response. Effects, quality of evidence, and safety vary by formula and individual ingredient.",
    visitLabel: "What a visit may involve",
    visitCopy:
      "A consultation includes your symptoms, medications, supplements, allergies, health history, and traditional tongue and pulse findings. When appropriate, a formula is selected with clear instructions and reviewed at follow-up.",
    safetyLabel: "Safety & comfort",
    safetyCopy:
      "Herbs can cause side effects and interact with medicines. Please disclose pregnancy, fertility treatment, planned procedures, and all medications or supplements before use. Herbal care does not replace prescribed medical treatment.",
    careAreas: [
      "Digestive patterns such as bloating, irregularity, and reduced appetite",
      "Menstrual cycle and women’s health support",
      "Stress-related tension and sleep support",
      "Recovery and wellbeing alongside acupuncture",
      "Individualized formula review when supplements are already in use",
    ],
    clinicalNote:
      "A formula is never chosen from a symptom list alone. Product quality, ingredient identity, dose, medication interactions, pregnancy status, and coordination with your medical team all matter.",
    faqs: [
      { question: "Are Chinese herbs the same as supplements?", answer: "Not exactly. A formula is selected and adjusted around your symptoms, health history, medications, supplements, pregnancy or fertility care, and response over time." },
      { question: "How do you choose a formula?", answer: "We review your symptoms and timeline, medications, allergies, and relevant medical care, then consider tongue and pulse findings before discussing whether an individualized formula is appropriate." },
      { question: "Can herbs interact with medications?", answer: "Yes. Tell us about every prescription, over-the-counter medicine, supplement, pregnancy or fertility treatment, and planned procedure before using an herbal product." },
      { question: "Do herbs replace prescribed treatment?", answer: "No. Herbal medicine is complementary care and should not replace prescribed treatment or medical evaluation. Do not stop medication without speaking with the prescribing clinician." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
