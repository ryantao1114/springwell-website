export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const palette = {
  cream: "#f7f2e9",
  cream2: "#eee6d8",
  mist: "#dfeaf1",
  blue: "#8ca9bd",
  deep: "#294858",
  sage: "#7c9279",
  sage2: "#b7c7ae",
  gold: "#c8a56b",
  blush: "#e8c6bb",
  brown: "#6b5649",
};

function shell(inner: string, label: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.cream}"/>
      <stop offset="1" stop-color="${palette.mist}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.88"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#294858" flood-opacity="0.12"/>
    </filter>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <circle cx="990" cy="120" r="230" fill="${palette.blush}" opacity="0.28"/>
  <circle cx="110" cy="690" r="250" fill="${palette.sage2}" opacity="0.22"/>
  <rect x="44" y="44" width="1112" height="712" rx="42" fill="url(#glow)" stroke="#ffffff" stroke-opacity="0.66"/>
  ${inner}
  <g transform="translate(78 706)" opacity="0.84">
    <line x1="0" y1="0" x2="26" y2="0" stroke="${palette.blue}" stroke-width="4"/>
    <text x="42" y="8" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="6" fill="${palette.deep}">SPRINGWELL ACUPUNCTURE</text>
  </g>
</svg>`;
}

function women() {
  return shell(`
  <g filter="url(#shadow)" transform="translate(600 380)">
    <circle r="214" fill="#fffaf5" stroke="${palette.gold}" stroke-width="3" opacity="0.96"/>
    <path d="M-92 -45c0 112 31 195 92 234 61-39 92-122 92-234" fill="none" stroke="${palette.brown}" stroke-width="11" stroke-linecap="round"/>
    <path d="M-91 -39c-49-38-92-33-128 16 58 3 98 28 126 73" fill="none" stroke="${palette.brown}" stroke-width="10" stroke-linecap="round"/>
    <path d="M91 -39c49-38 92-33 128 16-58 3-98 28-126 73" fill="none" stroke="${palette.brown}" stroke-width="10" stroke-linecap="round"/>
    <path d="M-42 67c22-35 62-35 84 0-6 37-20 66-42 88-22-22-36-51-42-88z" fill="${palette.blush}" opacity="0.76"/>
    <path d="M-5 -120c39-63 91-73 142-30-58 7-102 32-132 76" fill="${palette.sage2}"/>
    <path d="M12 -122c33-38 66-58 99-59-23 28-55 50-99 66" fill="none" stroke="${palette.sage}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="-150" cy="96" r="12" fill="${palette.gold}" opacity="0.8"/>
    <circle cx="156" cy="48" r="9" fill="${palette.blue}" opacity="0.8"/>
  </g>` , "Women’s health and fertility support illustration");
}

function digestive() {
  return shell(`
  <g filter="url(#shadow)" transform="translate(600 374)">
    <circle r="220" fill="#fffaf5" stroke="${palette.gold}" stroke-width="3" opacity="0.96"/>
    <path d="M-58-175c55 25 82 72 72 141-8 54 4 82 44 105 52 31 59 101 17 143-38 38-103 35-145-8-50-52-55-130-20-192 25-45 25-92 2-141-18-39-8-91 30-128z" fill="none" stroke="${palette.brown}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-9 40c57-48 112-55 166-22-46 15-81 48-106 97-33-14-53-39-60-75z" fill="${palette.sage2}" opacity="0.78"/>
    <path d="M62 67c28-23 57-37 88-40" fill="none" stroke="${palette.sage}" stroke-width="5" stroke-linecap="round"/>
    <path d="M-125 98c-33-37-42-76-25-116" fill="none" stroke="${palette.blue}" stroke-width="5" stroke-linecap="round" opacity="0.72"/>
    <circle cx="-148" cy="-55" r="10" fill="${palette.gold}"/>
    <circle cx="132" cy="-96" r="8" fill="${palette.blush}"/>
  </g>` , "Digestive support illustration");
}

function pain() {
  return shell(`
  <g filter="url(#shadow)" transform="translate(600 378)">
    <circle r="220" fill="#fffaf5" stroke="${palette.blue}" stroke-width="3" opacity="0.97"/>
    <path d="M-112 155c35-80 57-145 67-195 8-39 27-74 58-104 31 30 50 65 58 104 10 50 32 115 67 195" fill="none" stroke="${palette.brown}" stroke-width="11" stroke-linecap="round"/>
    <path d="M-8-177v215" stroke="${palette.gold}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="-8" cy="-191" r="12" fill="none" stroke="${palette.gold}" stroke-width="5"/>
    <g stroke="${palette.sage}" stroke-width="4" fill="none" opacity="0.92">
      <path d="M-12 10c-61 11-106 50-136 117"/>
      <path d="M-2 34c48 14 87 52 118 114"/>
      <path d="M-3 67c-37 15-68 43-94 84"/>
    </g>
    <g fill="${palette.gold}">
      <circle cx="-8" cy="20" r="10"/><circle cx="-77" cy="66" r="8"/><circle cx="68" cy="83" r="8"/>
    </g>
    <path d="M150-120c45 21 74 59 86 114" fill="none" stroke="${palette.blush}" stroke-width="8" stroke-linecap="round" opacity="0.65"/>
  </g>` , "Acupuncture and pain management illustration");
}

function rest() {
  return shell(`
  <g filter="url(#shadow)" transform="translate(600 380)">
    <circle r="220" fill="#fffaf5" stroke="${palette.sage}" stroke-width="3" opacity="0.97"/>
    <path d="M72-150c-65 8-115 62-115 129 0 75 61 136 136 136 44 0 83-20 108-52-20 112-118 187-231 164-113-24-183-135-159-248 21-98 111-166 211-158 18 2 35 5 50 9z" fill="${palette.mist}" stroke="${palette.blue}" stroke-width="5"/>
    <path d="M-154 119c47-42 97-49 151-22 48 24 95 20 141-13" fill="none" stroke="${palette.sage}" stroke-width="8" stroke-linecap="round"/>
    <path d="M-147 145c43-29 86-34 129-16 50 21 100 19 151-8" fill="none" stroke="${palette.blue}" stroke-width="5" stroke-linecap="round" opacity="0.65"/>
    <g fill="${palette.gold}" opacity="0.9"><circle cx="83" cy="-79" r="9"/><circle cx="125" cy="-28" r="7"/><circle cx="52" cy="-16" r="5"/></g>
  </g>` , "Stress, sleep, and restorative care illustration");
}

function consult() {
  return shell(`
  <g filter="url(#shadow)" transform="translate(600 378)">
    <circle r="220" fill="#fffaf5" stroke="${palette.gold}" stroke-width="3" opacity="0.97"/>
    <circle cx="-75" cy="-70" r="58" fill="${palette.blush}" opacity="0.72"/>
    <circle cx="88" cy="-70" r="58" fill="${palette.mist}"/>
    <path d="M-171 128c12-98 55-148 96-148s84 50 96 148" fill="none" stroke="${palette.brown}" stroke-width="10" stroke-linecap="round"/>
    <path d="M-8 128c12-98 55-148 96-148s84 50 96 148" fill="none" stroke="${palette.deep}" stroke-width="10" stroke-linecap="round"/>
    <path d="M-12 22h72" stroke="${palette.gold}" stroke-width="6" stroke-linecap="round"/>
    <path d="M6 3l-18 19L6 41" fill="none" stroke="${palette.gold}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42 3l18 19-18 19" fill="none" stroke="${palette.gold}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  </g>` , "Acupuncture consultation illustration");
}

function provider() {
  return shell(`
  <g filter="url(#shadow)" transform="translate(600 372)">
    <circle r="224" fill="#fffaf5" stroke="${palette.blue}" stroke-width="3" opacity="0.97"/>
    <circle cy="-78" r="78" fill="${palette.blush}" opacity="0.72"/>
    <path d="M-175 181c10-130 76-198 175-198s165 68 175 198" fill="${palette.mist}" stroke="${palette.deep}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M-56-118c18-49 80-72 130-42 26 16 43 43 46 74-33-29-69-41-109-35-26 4-48 14-67 29z" fill="${palette.deep}" opacity="0.84"/>
    <path d="M-38-44c13 21 29 31 48 31 19 0 35-10 48-31" fill="none" stroke="${palette.brown}" stroke-width="5" stroke-linecap="round"/>
    <path d="M-46 49c31 22 62 22 93 0" fill="none" stroke="${palette.gold}" stroke-width="5" stroke-linecap="round"/>
    <path d="M-104 126c30-32 64-48 103-48 40 0 75 16 105 48" fill="none" stroke="${palette.sage}" stroke-width="7" stroke-linecap="round"/>
  </g>` , "Springwell acupuncture provider illustration");
}

function generic() {
  return shell(`
  <g filter="url(#shadow)" transform="translate(600 378)">
    <circle r="220" fill="#fffaf5" stroke="${palette.gold}" stroke-width="3" opacity="0.97"/>
    <path d="M0-175v236" stroke="${palette.gold}" stroke-width="5" stroke-linecap="round"/>
    <circle cy="-191" r="12" fill="none" stroke="${palette.gold}" stroke-width="5"/>
    <path d="M-142 34c61-69 111-67 150 5 39-72 89-74 150-5" fill="none" stroke="${palette.sage}" stroke-width="10" stroke-linecap="round"/>
    <path d="M-154 96c45-30 90-31 135-4 45 27 90 26 135-4" fill="none" stroke="${palette.blue}" stroke-width="8" stroke-linecap="round"/>
    <path d="M-126 127c39-20 77-20 116 1 39 20 77 20 116 0" fill="none" stroke="${palette.mist}" stroke-width="8" stroke-linecap="round"/>
    <circle cx="-112" cy="-63" r="10" fill="${palette.blush}"/><circle cx="126" cy="-42" r="8" fill="${palette.gold}"/>
  </g>` , "Springwell acupuncture care illustration");
}

function pick(path: string) {
  const p = path.toLowerCase();
  if (p.endsWith(".mp4") || p.endsWith(".webm") || p.endsWith(".mov")) return null;
  if (p.includes("provider") || p.includes("renjinming") || p.includes("portrait")) return provider();
  if (p.includes("assessment") || p.includes("consult")) return consult();
  if (p.includes("digest") || p.includes("stomach") || p.includes("herb")) return digestive();
  if (p.includes("women") || p.includes("fertility") || p.includes("ivf")) return women();
  if (p.includes("stress") || p.includes("sleep") || p.includes("rest") || p.includes("cupping")) return rest();
  if (p.includes("pain") || p.includes("treatment") || p.includes("needle") || p.includes("acupuncture")) return pain();
  return generic();
}

export async function GET(request: Request) {
  const pathname = new URL(request.url).pathname;
  const svg = pick(pathname);
  if (!svg) return new Response(null, { status: 404 });
  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
