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
      "Acupuncture uses fine, sterile, single-use needles at carefully selected points to support pain, women’s health, stress, sleep, digestion, and overall wellbeing.",
    introTitle: "Care that begins with one point and considers the whole person.",
    introCopy:
      "Acupuncture is more than placing needles where it hurts. We look at what is happening now, how long it has been going on, what makes it better or worse, your medications and medical care, and patterns such as sleep, digestion, menstrual changes, stress, and energy. Point selection is then guided by your main concern, physical findings, and traditional tongue and pulse assessment when useful.",
    image: "/images/service-acupuncture.png",
    imageAlt: "Acupuncture treatment using fine needles",
    primaryLabel: "How it may work",
    primaryCopy:
      "Needle stimulation sends signals through sensory nerves and local connective tissue. These signals can influence pain processing, muscle tone, local blood flow, and parts of the nervous system involved in stress and recovery. Research suggests acupuncture works through several overlapping pathways rather than one single mechanism, and the strength of evidence varies by condition.",
    visitLabel: "What a visit may involve",
    visitCopy:
      "We begin with your main concern, health history, medications, current medical treatment, and any changes since your last visit. Fine needles are placed gently and usually remain while you rest for about 20–30 minutes. Electroacupuncture or cupping may be added when there is a clear reason to use it. We track what changes between visits and adjust the plan rather than repeating the same treatment automatically.",
    safetyLabel: "Safety & comfort",
    safetyCopy:
      "Most people feel little or no pain when the needles are placed. Brief heaviness, warmth, tingling, mild soreness, or light bruising can occur. We use sterile, single-use needles and review pregnancy, medications, bleeding risk, recent procedures, and other health factors before treatment.",
    careAreas: [
      "Menstrual cramps, cycle-related discomfort, and irregular-cycle concerns",
      "Perimenopause and menopause symptoms such as hot flashes, night sweats, and sleep disruption",
      "Fertility planning and supportive care during IUI or IVF",
      "TMJ, jaw, facial pain, headaches, and migraine-related concerns",
      "Neck, shoulder, back, and other musculoskeletal pain or tension",
      "Stress, anxiety-related physical tension, and difficulty winding down",
      "Sleep difficulties, fatigue, and recovery during demanding periods",
      "Bloating and digestive symptoms that may fluctuate with stress or routine",
    ],
    clinicalNote:
      "Acupuncture can be useful as part of a broader care plan, but it is not the right tool for every problem. Evidence is strongest for some pain conditions and more mixed for many other concerns. We set clear goals, watch your response over time, and recommend medical evaluation or coordination when symptoms need more than acupuncture alone.",
    faqs: [
      {
        question: "What happens during an acupuncture visit?",
        answer:
          "We start with the reason you came in and the details that can change treatment: when symptoms began, what triggers them, sleep, digestion, menstrual or hormonal changes when relevant, medications, recent procedures, and other medical care. After an exam and traditional assessment when useful, fine needles are placed and you rest quietly for about 20–30 minutes. We review how you respond and use that information to guide the next visit.",
      },
      {
        question: "Does acupuncture hurt?",
        answer:
          "Most people feel little or no pain. You may notice a quick pinch as a needle enters, followed by heaviness, warmth, tingling, pressure, or a dull ache around some points. These sensations should remain tolerable, and needles can be adjusted or removed at any time.",
      },
      {
        question: "How soon should I expect to notice a change?",
        answer:
          "There is no single timeline. Some people notice relaxation or symptom changes after an early visit, while long-standing or complex concerns may change more gradually. We look for practical signs such as fewer painful days, better sleep, easier movement, less symptom intensity, or improved recovery rather than promising a specific result by a specific visit.",
      },
      {
        question: "How often should I receive acupuncture?",
        answer:
          "Frequency depends on what you are treating, how severe or long-standing it is, and how you respond. Acute problems may be seen more closely at first, while maintenance or supportive care may be spaced farther apart. We agree on a practical starting schedule and reassess instead of assuming everyone needs the same number of visits.",
      },
      {
        question: "Can acupuncture be used during fertility treatment, IUI, or IVF?",
        answer:
          "Yes, acupuncture can be used as supportive care during fertility treatment when it is coordinated with your reproductive plan. We take timing, medications, procedures, pregnancy possibility, symptoms, and your fertility clinic’s instructions into account. Acupuncture does not replace reproductive medical care or guarantee pregnancy or IVF success.",
      },
      {
        question: "Can acupuncture help with perimenopause or menopause symptoms?",
        answer:
          "Acupuncture is sometimes used to support symptoms such as hot flashes, night sweats, sleep disruption, stress, headaches, and muscle tension during the menopause transition. Because symptoms can also reflect other medical issues, we review the broader picture and encourage appropriate medical evaluation when needed.",
      },
      {
        question: "What can acupuncture support?",
        answer:
          "Common reasons people seek acupuncture include pain and muscle tension, headaches and TMJ symptoms, menstrual discomfort, fertility support, perimenopause symptoms, stress, sleep problems, and some digestive concerns. The evidence and expected benefit are not the same for every condition, so the plan should match the problem rather than treating acupuncture as a cure-all.",
      },
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
      "Herbs can cause side effects and interact with medicines. Please disclose pregnancy, fertility treatment, planned procedures, and all medications or supplements so formula selection can be thoughtful and individualized.",
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
      { question: "How can herbal medicine be incorporated into care?", answer: "Formula selection considers your symptoms, medications, supplements, pregnancy or fertility treatment, and response over time, with clear instructions and follow-up." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
