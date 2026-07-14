const themes = [
  { id: "A", name: "Mist Blue", note: "Quiet, refined, and slightly editorial", className: "theme-mist", colors: ["#69554C", "#9AACC8", "#CDE4F4", "#FFF7E8"] },
  { id: "B", name: "Warm Sand", note: "Natural, grounded, and softly luxurious", className: "theme-sand", colors: ["#4D4542", "#B7A79A", "#CCC3BA", "#DDCDA6"] },
  { id: "C", name: "Healing Aqua", note: "Fresh, calm, and distinctly wellness-focused", className: "theme-aqua", colors: ["#4D4542", "#A5D6DB", "#E8E8C6", "#F9E9D9"] },
  { id: "D", name: "Coastal Blue", note: "Clean, modern, and clinically polished", className: "theme-coastal", colors: ["#495D6D", "#7A90AB", "#A8CAE8", "#EFEAE4"] },
  { id: "E", name: "Botanical Sage", note: "Organic, warm, and grounded in natural materials", className: "theme-botanical", colors: ["#4F5C45", "#99AA86", "#F0D1A1", "#F9E3D4"] },
  { id: "F", name: "Powder Coast", note: "Fresh coastal blue balanced by earth and olive", className: "theme-powder", colors: ["#514532", "#8B9900", "#A6BFD4", "#F9F0E3"] },
  { id: "G", name: "Ivory Flow", note: "Minimal, tactile, and quietly luxurious", className: "theme-ivory", colors: ["#4F4037", "#9F8772", "#DDD0BD", "#F7F1E7"] },
  { id: "H", name: "Celadon Paper", note: "Soft Chinese paper texture with a modern botanical tone", className: "theme-celadon", colors: ["#43523D", "#91A47B", "#DCE5BD", "#F8F3E6"] },
];

export default function ThemeOptionsPage() {
  return (
    <main className="theme-options-page">
      <header className="theme-options-header">
        <p>Springwell Acupuncture</p><h1>Color Direction Options</h1>
        <span>The layout and content are identical so you can compare color alone.</span>
      </header>
      <div className="theme-options-list">
        {themes.map((theme) => (
          <section className="theme-option" key={theme.id}>
            <div className="theme-option-meta">
              <div><b>Option {theme.id}</b><h2>{theme.name}</h2><p>{theme.note}</p></div>
              <div className="theme-swatches" aria-label={`${theme.name} palette`}>
                {theme.colors.map((color) => <i key={color} style={{ background: color }} title={color} />)}
              </div>
            </div>
            <div className={`theme-preview ${theme.className}`}>
              <div className="preview-nav">
                <div className="preview-brand"><span>SW</span><b>Springwell<small>Acupuncture</small></b></div>
                <div className="preview-links"><span>About</span><span>Services</span><span>Specialist</span><span>Pricing</span></div>
                <button>Book a visit</button>
              </div>
              <div className="preview-hero">
                <div className="preview-copy">
                  <small>MODERN ACUPUNCTURE · NORTHERN VIRGINIA</small>
                  <h3>Care for the season you’re in.</h3>
                  <p>Personalized acupuncture for fertility, pain management, and whole-person wellbeing.</p>
                  <div><button>Request an appointment</button><a>Explore services →</a></div>
                </div>
                <div className="preview-art"><i /><i /><strong>SW</strong><span>Fertility · Pain · Wellness</span></div>
              </div>
              <div className="preview-services">
                <article><small>01</small><h4>Fertility &amp; IVF</h4><p>Support shaped around your cycle, treatment plan, and goals.</p></article>
                <article><small>02</small><h4>Pain Management</h4><p>Focused care for muscle tension, headaches, and persistent pain.</p></article>
                <article><small>03</small><h4>Women’s Health</h4><p>Individualized care through changing stages of reproductive health.</p></article>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
