export type PainCondition = {
  slug: string;
  title: string;
  menuTitle: string;
  cardTitle: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  overviewTitle: string;
  overview: string[];
  symptoms: string[];
  treatmentFocus: { title: string; text: string }[];
  careCoordination: string;
  faqs: { question: string; answer: string }[];
  evidence: { text: string; label: string; url: string };
};

export const painConditions: PainCondition[] = [
  {
    slug: "headache-migraine",
    title: "Headache & Migraine Acupuncture",
    menuTitle: "Headache & Migraine",
    cardTitle: "Headache & Migraine Acupuncture",
    seoTitle: "Migraine & Headache Acupuncture in Herndon, VA",
    description: "Individualized acupuncture for migraine and tension headaches in Herndon, VA, serving Reston and Northern Virginia.",
    eyebrow: "Migraine · tension headache · neck and jaw tension",
    summary: "Personalized acupuncture care for recurring migraine and tension-type headaches, with attention to the neck, jaw, sleep, stress, and other patterns that may shape each episode.",
    image: "/images/pain-cards/migraine.webp",
    imageAlt: "Illustration of a woman experiencing migraine pain",
    overviewTitle: "Headache care that looks beyond the painful moment.",
    overview: [
      "Headaches can differ in location, sensation, timing, triggers, and associated symptoms. Your first visit explores the full pattern—including headache frequency, neck and jaw tension, sleep, stress, menstrual timing, hydration, and the impact on work or daily life.",
      "Acupuncture may be used as supportive care for migraine prevention and tension-type headache burden. Treatment is individualized and does not replace evaluation for a new, sudden, severe, or changing headache pattern.",
    ],
    symptoms: ["Throbbing or pressure-like head pain", "Light, sound, or smell sensitivity", "Nausea or post-headache fatigue", "Neck, shoulder, or jaw tension", "Headaches linked with stress or menstrual timing", "Recurring headaches that interrupt work or sleep"],
    treatmentFocus: [
      { title: "Map the pattern", text: "We review frequency, location, associated symptoms, likely triggers, and what helps or worsens each episode." },
      { title: "Address connected tension", text: "Point selection may include the head, neck, shoulders, jaw, hands, or feet depending on your presentation." },
      { title: "Track meaningful change", text: "Progress may include fewer headache days, lower intensity, shorter episodes, or less disruption to normal activity." },
    ],
    careCoordination: "Continue prescribed medication and neurological or primary-care follow-up. Seek urgent medical attention for a sudden ‘worst headache,’ new weakness, confusion, fainting, fever with neck stiffness, or headache after significant injury.",
    faqs: [
      { question: "Can acupuncture be used alongside migraine medication?", answer: "Often, yes. Bring an updated medication list and continue prescribed care unless your medical clinician advises otherwise." },
      { question: "How often are visits scheduled?", answer: "Frequency depends on headache frequency, severity, goals, and response. We recommend a realistic starting plan after your first assessment." },
      { question: "Do I need to have a headache during treatment?", answer: "No. Many patients schedule care between episodes with a prevention and pattern-management focus." },
    ],
    evidence: { text: "Evidence reviews suggest acupuncture may help reduce tension-headache frequency and support migraine prevention for some people, although individual results vary.", label: "Read the NCCIH pain overview", url: "https://files.nccih.nih.gov/pain-ebook-2024-08-508.pdf" },
  },
  {
    slug: "tmj-jaw-pain",
    title: "TMJ & Jaw Pain Acupuncture",
    menuTitle: "TMJ & Jaw Pain",
    cardTitle: "TMJ & Jaw Pain Acupuncture",
    seoTitle: "TMJ & Jaw Pain Acupuncture in Herndon, VA",
    description: "Acupuncture for TMJ pain, jaw tension, clenching, and related headaches in Herndon, VA, near Reston.",
    eyebrow: "TMJ pain · clenching · facial tension",
    summary: "Focused acupuncture for jaw muscle tension, clenching, facial pain, and related head and neck patterns—designed to complement appropriate dental and medical care.",
    image: "/images/pain-cards/tmj-jaw-tension.webp",
    imageAlt: "Illustration representing TMJ and jaw pain",
    overviewTitle: "A coordinated approach to jaw tension and movement.",
    overview: [
      "TMJ symptoms may involve the jaw joint, chewing muscles, neck, shoulders, sleep, stress, dental factors, or several of these at once. We ask about clenching, grinding, clicking, mouth opening, headaches, and activities such as chewing and speaking.",
      "Treatment may focus on overworked masseter and temporalis muscles as well as connected neck and shoulder tension. Acupuncture is supportive care and may be combined with a dentist-directed night guard, physical therapy, or other recommended treatment.",
    ],
    symptoms: ["Jaw clenching or nighttime grinding", "Masseter or temple tenderness", "Pain with chewing, yawning, or speaking", "Clicking with limited or uncomfortable opening", "Temple headaches or facial aching", "Neck and shoulder tension accompanying jaw pain"],
    treatmentFocus: [
      { title: "Assess jaw function", text: "We discuss clenching, chewing, opening, headaches, sleep, stress, and current dental care." },
      { title: "Release muscle guarding", text: "Local and distal acupuncture may be used around the jaw, face, neck, shoulders, hands, or feet." },
      { title: "Support comfortable use", text: "We track changes in opening, chewing, speaking, morning tightness, and headache frequency." },
    ],
    careCoordination: "Acupuncture does not correct dental bite problems or replace evaluation for joint locking, trauma, infection, or significant dental disease. We coordinate with dental, medical, or physical-therapy care when appropriate.",
    faqs: [
      { question: "Are needles placed in the face?", answer: "They may be when appropriate, but treatment can also include points in the neck, shoulders, hands, and feet. Your comfort guides the plan." },
      { question: "Can I continue using a night guard?", answer: "Yes. Continue dentist-recommended care and bring any relevant diagnosis or treatment guidance to your visit." },
      { question: "Can acupuncture stop jaw clicking?", answer: "Clicking has different causes, so no single result can be promised. We focus on pain, muscle tension, comfortable movement, and appropriate referral." },
    ],
    evidence: { text: "A 2024 systematic review found possible short-term pain benefit for muscular TMD while emphasizing that the overall evidence remains limited.", label: "Review the PubMed study", url: "https://pubmed.ncbi.nlm.nih.gov/38308258/" },
  },
  {
    slug: "neck-shoulder-pain",
    title: "Neck & Shoulder Pain Acupuncture",
    menuTitle: "Neck & Shoulder Pain",
    cardTitle: "Neck & Shoulder Pain Acupuncture",
    seoTitle: "Neck & Shoulder Pain Acupuncture in Herndon, VA",
    description: "Individualized acupuncture for neck stiffness, shoulder tension, and movement-related pain in Herndon, VA, near Reston.",
    eyebrow: "Neck stiffness · shoulder tension · limited movement",
    summary: "Acupuncture care for neck and shoulder pain related to muscle guarding, desk work, driving, stress, posture, or overuse—with progress measured through everyday movement.",
    image: "/images/pain-cards/neck-shoulder-pain.webp",
    imageAlt: "Illustration of neck and shoulder pain",
    overviewTitle: "Relief focused on movement, function, and daily demands.",
    overview: [
      "Neck and shoulder discomfort can develop after overuse, sustained positions, stress-related guarding, or injury. We review where symptoms travel, which movements are limited, what your day requires, and whether numbness, weakness, dizziness, or recent trauma needs medical attention.",
      "Treatment may combine local and distal acupuncture to address pain sensitivity and muscular tension. The plan is adjusted according to changes in turning the head, reaching, working at a computer, driving, exercising, and sleeping.",
    ],
    symptoms: ["Neck stiffness or reduced rotation", "Tight shoulders or upper-back aching", "Pain aggravated by desk work or driving", "Muscle knots or tender trigger points", "Tension that contributes to headaches", "Discomfort with reaching, lifting, or sleep position"],
    treatmentFocus: [
      { title: "Identify aggravating movement", text: "We connect your symptoms with work, exercise, sleep position, stress, and recent strain or injury." },
      { title: "Treat the local and wider pattern", text: "Acupuncture may address painful tissue as well as related muscles and distal points." },
      { title: "Reassess function", text: "Comfortable rotation, reaching, sleep, and work tolerance help guide the next visit." },
    ],
    careCoordination: "New arm weakness, spreading numbness, severe dizziness, loss of coordination, fever, or symptoms after substantial trauma require medical evaluation. Acupuncture can complement physical therapy, exercise, and medical care.",
    faqs: [
      { question: "Can treatment include cupping?", answer: "Cupping may be considered when muscle tightness or soreness is prominent and it is appropriate for your health history and preferences." },
      { question: "Will treatment focus only on the painful spot?", answer: "Not necessarily. Local points may be combined with the upper back, shoulders, arms, hands, or other areas involved in the pattern." },
      { question: "How will we measure progress?", answer: "We track pain as well as practical changes such as head rotation, reaching, sleep, work tolerance, and exercise comfort." },
    ],
    evidence: { text: "Recent reviews suggest acupuncture may help some people with neck pain, while study quality and individual response vary.", label: "Review the PubMed evidence", url: "https://pubmed.ncbi.nlm.nih.gov/38856887/" },
  },
  {
    slug: "low-back-pain-sciatica",
    title: "Low-Back Pain & Sciatica Acupuncture",
    menuTitle: "Low-Back Pain & Sciatica",
    cardTitle: "Low-Back Pain & Sciatica Acupuncture",
    seoTitle: "Low-Back Pain & Sciatica Acupuncture in Herndon, VA",
    description: "Acupuncture for low-back pain, stiffness, and sciatica symptoms in Herndon, VA, serving Reston and Northern Virginia.",
    eyebrow: "Low-back pain · stiffness · sciatica",
    summary: "Individualized acupuncture for low-back pain and selected sciatica patterns, with attention to pain sensitivity, muscle guarding, mobility, sleep, and daily function.",
    image: "/images/pain-cards/low-back-pain.webp",
    imageAlt: "Illustration of a woman experiencing low-back pain",
    overviewTitle: "Back-pain support built around the movements you need.",
    overview: [
      "Low-back pain may feel like a local ache, stiffness, spasm, or pain that changes with sitting, bending, lifting, walking, and sleep. Sciatica may add pain, tingling, or numbness traveling into the buttock or leg. We assess the pattern and screen for symptoms that need medical evaluation.",
      "Acupuncture may be incorporated into a broader plan to reduce pain sensitivity and muscle guarding while supporting easier movement. Care can complement physical therapy, exercise, medication, or evaluation for disc, nerve, or structural concerns.",
    ],
    symptoms: ["Low-back aching, stiffness, or spasm", "Pain aggravated by sitting, bending, or lifting", "Pain traveling into the buttock or leg", "Tingling or numbness associated with sciatica", "Difficulty walking, exercising, or sleeping comfortably", "Recurring pain after work, travel, or overuse"],
    treatmentFocus: [
      { title: "Screen the pain pattern", text: "We review location, leg symptoms, weakness, triggers, prior imaging, diagnoses, and current care." },
      { title: "Reduce guarding", text: "Local and distal acupuncture, and gentle electroacupuncture when appropriate, may support pain modulation." },
      { title: "Build toward function", text: "We track sitting, standing, walking, bending, lifting, exercise, and sleep tolerance." },
    ],
    careCoordination: "Urgent evaluation is needed for new bowel or bladder changes, saddle numbness, rapidly worsening weakness, fever, or severe pain after trauma. Acupuncture does not replace diagnosis or recommended medical and rehabilitation care.",
    faqs: [
      { question: "Is acupuncture appropriate for every type of sciatica?", answer: "No single treatment fits every cause. We review your symptoms and current diagnosis and refer for medical evaluation when the pattern requires it." },
      { question: "Can I continue physical therapy or exercise?", answer: "Usually, yes. Acupuncture is often used alongside rehabilitation and a clinician-approved movement plan." },
      { question: "Is electroacupuncture always used?", answer: "No. It may be considered for selected muscular or chronic pain patterns and is adjusted to your comfort and health history." },
    ],
    evidence: { text: "NCCIH notes low- to moderate-quality evidence for acupuncture and several other mind-body approaches for chronic low-back pain. A 2024 trial also reported benefit for a specific chronic sciatica population.", label: "Read the NCCIH low-back pain overview", url: "https://www.nccih.nih.gov/health/low-back-pain-and-complementary-health-approaches-what-you-need-to-know" },
  },
  {
    slug: "myofascial-pain-muscle-tension",
    title: "Myofascial Pain & Muscle Tension Acupuncture",
    menuTitle: "Myofascial Pain",
    cardTitle: "Myofascial Pain & Muscle Tension",
    seoTitle: "Myofascial Pain Acupuncture in Herndon, VA",
    description: "Acupuncture and optional cupping for myofascial pain, trigger points, and muscle tension in Herndon, VA, near Reston.",
    eyebrow: "Trigger points · muscle knots · referred pain",
    summary: "Targeted acupuncture for deep muscle aching, tender trigger points, stiffness, and referred pain—with optional cupping when appropriate.",
    image: "/images/pain-cards/myofascial-pain.webp",
    imageAlt: "Illustration of muscle tension around the shoulder",
    overviewTitle: "Treatment for the muscle pattern—not just one sore point.",
    overview: [
      "Myofascial pain often involves tender areas in muscle or connective tissue, stiffness, and pain that can be felt away from the most sensitive point. We map the painful area, related movements, workload, recovery habits, and the muscles that may be compensating.",
      "Treatment may combine local and distal acupuncture, gentle electroacupuncture, and cupping when appropriate. The aim is to support comfortable movement and reduce guarding while staying coordinated with rehabilitation or medical care when needed.",
    ],
    symptoms: ["Deep, aching muscle pain", "Tender trigger points or palpable knots", "Referred pain away from the tender area", "Stiffness or restricted range of motion", "Tension after repetitive work or exercise", "Recurring tightness in the neck, shoulders, back, or hips"],
    treatmentFocus: [
      { title: "Map tension and referral", text: "We identify the tender tissue, connected pain pattern, and movements that reproduce or ease symptoms." },
      { title: "Choose the right input", text: "Acupuncture, gentle electroacupuncture, or cupping may be selected according to the tissue and your preferences." },
      { title: "Measure easier movement", text: "Range of motion, activity tolerance, recovery, and daily comfort guide treatment changes." },
    ],
    careCoordination: "Persistent swelling, unexplained weakness, fever, significant trauma, or pain that is worsening without a clear reason should be medically evaluated. Treatment can complement physical therapy and a gradual movement plan.",
    faqs: [
      { question: "Is myofascial pain the same as a muscle knot?", answer: "A ‘knot’ is a common description for a tender, tight area, but pain can have multiple causes. We assess the broader pattern rather than relying on one label." },
      { question: "Will cupping leave marks?", answer: "Temporary circular discoloration can occur. We discuss expected effects and alternatives before adding cupping." },
      { question: "Can acupuncture be used after exercise?", answer: "Often, yes, but treatment timing and intensity depend on whether symptoms reflect normal soreness, strain, or an injury needing evaluation." },
    ],
    evidence: { text: "Myofascial pain can contribute to neck, shoulder, back, and headache patterns. Evidence for specific techniques varies, so treatment is individualized and progress is reassessed.", label: "Explore NCCIH pain resources", url: "https://www.nccih.nih.gov/health/pain-considering-complementary-approaches-ebook" },
  },
  {
    slug: "chronic-pain-mobility",
    title: "Chronic Pain & Mobility Support",
    menuTitle: "Chronic Pain & Mobility",
    cardTitle: "Chronic Pain & Mobility Support",
    seoTitle: "Chronic Pain Acupuncture in Herndon, VA",
    description: "Personalized acupuncture for chronic pain, recurring tension, and mobility goals in Herndon, VA, serving Reston.",
    eyebrow: "Persistent pain · recurring tension · mobility support",
    summary: "Whole-person acupuncture care for persistent or recurring pain that affects sleep, work, exercise, mood, or confidence with movement.",
    image: "/images/pain-cards/tension-headache.webp",
    imageAlt: "Illustration representing a persistent pain pattern",
    overviewTitle: "Care centered on function—not a one-size-fits-all pain score.",
    overview: [
      "Persistent pain can continue after tissue has healed or recur alongside stress, sleep disruption, muscle guarding, reduced activity, and heightened pain sensitivity. Your plan begins with the specific functions you want to regain or protect.",
      "Acupuncture may be one part of a broader pain-management strategy. We track comfort and function while coordinating with medical care, rehabilitation, exercise, dental care, behavioral health, or pain-specialist support when appropriate.",
    ],
    symptoms: ["Pain that continues or returns over time", "Sleep disrupted by discomfort", "Reduced confidence with movement or exercise", "Muscle guarding and recurring tension", "Pain affecting work, mood, or daily activity", "Multiple overlapping pain areas"],
    treatmentFocus: [
      { title: "Define practical goals", text: "We identify what pain is preventing and choose specific activities or functions to monitor." },
      { title: "Regulate the wider pattern", text: "Treatment may address pain sensitivity, muscle tension, sleep disruption, and stress-related guarding together." },
      { title: "Adapt over time", text: "Visit frequency and treatment focus change according to response, activity, and the rest of your care plan." },
    ],
    careCoordination: "Chronic pain deserves appropriate diagnosis and ongoing medical support. Acupuncture is not a substitute for urgent evaluation of new neurological symptoms, fever, unexplained weight loss, significant trauma, or rapidly worsening pain.",
    faqs: [
      { question: "What counts as progress when pain is chronic?", answer: "Progress may include better sleep, longer activity tolerance, easier movement, fewer severe days, or less disruption—even when pain does not disappear completely." },
      { question: "Can acupuncture be part of multidisciplinary pain care?", answer: "Yes. We support coordination with your physicians, physical therapist, dentist, behavioral-health clinician, or pain specialist." },
      { question: "Will the same treatment be repeated every visit?", answer: "Not automatically. We reassess symptoms, function, and response so point selection and visit frequency can evolve." },
    ],
    evidence: { text: "Research on acupuncture differs by condition. The clearest evidence relates to selected chronic pain conditions, while outcomes and certainty vary.", label: "Read the NCCIH acupuncture overview", url: "https://www.nccih.nih.gov/health/acupuncture-effectiveness-and-safety" },
  },
];

export const painConditionBySlug = Object.fromEntries(painConditions.map((condition) => [condition.slug, condition])) as Record<string, PainCondition>;

export const painConditionHrefByCardTitle = Object.fromEntries(
  painConditions.map((condition) => [condition.cardTitle, `/care/pain-management/${condition.slug}`]),
) as Record<string, string>;
