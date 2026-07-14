"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "../config/site";
import { ArrowIcon } from "./icons";

const nav = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About Us",
    intro: "The perspective, training, and principles behind your care.",
    items: [
      { href: "/about#traditional-chinese-medicine", title: "About Traditional Chinese Medicine", text: "A whole-person clinical system shaped through centuries of practice and observation.", tone: "spring" },
      { href: "/about#acupuncture", title: "About Acupuncture", text: "How this traditional therapy is understood and practiced through a modern lens.", tone: "needle" },
      { href: "/about#provider", title: "About Our Provider", text: "Meet Renjinming Dai and explore her clinical, academic, and research background.", tone: "portrait" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    intro: "Traditional therapies, explained clearly and tailored thoughtfully.",
    items: [
      { href: "/services/acupuncture", title: "Acupuncture", text: "Personalized, gentle treatment using sterile, single-use needles.", tone: "needle" },
      { href: "/services/cupping", title: "Fire Cupping", text: "Traditional warming care for muscle tightness, stiffness, and tension patterns.", tone: "cups" },
      { href: "/services/herbal-medicine", title: "Herbal Medicine", text: "Individualized formula guidance with careful safety screening.", tone: "herbs" },
    ],
  },
  {
    href: "/specialist",
    label: "Specialist",
    intro: "Focused care areas for women’s health, pain, stress, sleep, digestion, and fertility support.",
    items: [
      { href: "/specialist#fertility-ivf", title: "Women’s Health & IVF", text: "Support for cycle care, natural conception, IUI, IVF, and reproductive wellbeing.", tone: "fertility" },
      { href: "/specialist#pain-management", title: "Pain Management", text: "Care for TMJ, facial pain, headaches, neck tension, and musculoskeletal discomfort.", tone: "orofacial" },
      { href: "/specialist#stress-sleep", title: "Stress, Sleep & Digestion", text: "A whole-person approach to stress, sleep disruption, bloating, and digestive discomfort.", tone: "wellness" },
    ],
  },
  {
    href: "/pricing",
    label: "Pricing",
    intro: "Straightforward visit costs and payment information before you schedule.",
    items: [
      { href: "/pricing#initial-visit", title: "Initial Visit", text: "$50 consultation plus a $95 acupuncture treatment · 60–75 minutes.", tone: "initial" },
      { href: "/pricing#follow-up", title: "Follow-Up", text: "$95 for a progress review and full acupuncture session · 45–60 minutes.", tone: "followup" },
      { href: "/pricing#insurance", title: "Insurance & Superbills", text: "Learn about self-pay care and possible out-of-network reimbursement.", tone: "insurance" },
    ],
  },
  {
    href: "/blog",
    label: "Blog",
    intro: "Grounded, patient-friendly guidance for informed whole-person care.",
    items: [
      { href: "/blog#fertility-ivf", title: "Fertility & IVF", text: "Patient-friendly guidance for fertility support and acupuncture during IVF care.", tone: "fertility" },
      { href: "/blog#pain-management", title: "Pain Management", text: "Understand TMJ, headaches, muscle tension, and supportive treatment options.", tone: "orofacial" },
      { href: "/blog#stress-sleep-digestion", title: "Stress, Sleep & Digestion", text: "Practical education about sleep, stress, digestion, and herbal safety.", tone: "wellness" },
    ],
  },
  {
    href: "/contact",
    label: "Contact Us",
    intro: "Choose the simplest next step for questions, planning, or scheduling.",
    items: [
      { href: "/contact#request", title: "Request an Appointment", text: "Tell us what brings you in and share your preferred appointment times.", tone: "request" },
      { href: "/contact#visit-details", title: "Visit Details", text: "Review location, hours, contact information, and first-visit timing.", tone: "visit" },
      { href: "/faq", title: "Frequently Asked Questions", text: "Prepare for treatment and find answers to common questions.", tone: "faq" },
    ],
  },
];

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 861px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeNavigation = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header
      className={`site-header ${mobileOpen ? "is-mobile-menu-open" : ""}`}
      onMouseLeave={() => {
        if (!mobileOpen) setOpenMenu(null);
      }}
    >
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Springwell Acupuncture home" onClick={closeNavigation}>
          <span className="brand-mark">SW</span>
          <span className="brand-name">
            <strong>Springwell</strong>
            <small>Acupuncture</small>
          </span>
        </Link>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => {
            setMobileOpen((current) => !current);
            if (mobileOpen) setOpenMenu(null);
          }}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav ${mobileOpen ? "is-mobile-open" : ""}`}
          aria-label="Main navigation"
        >
          {nav.map((item) => item.items ? (
            <div
              className={`nav-group ${openMenu === item.label ? "is-open" : ""}`}
              key={item.href}
            >
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={openMenu === item.label}
                onClick={() => setOpenMenu((current) => current === item.label ? null : item.label)}
              >
                {item.label}<span aria-hidden="true">⌄</span>
              </button>
              <div className="mega-menu">
                <div className="container mega-menu-inner">
                  <div className="mega-menu-intro">
                    <p className="eyebrow">Explore {item.label}</p>
                    <h2>{item.label}</h2>
                    <p>{item.intro}</p>
                    <Link className="text-link" href={item.href} onClick={closeNavigation}>
                      View overview <ArrowIcon />
                    </Link>
                  </div>
                  <div className="mega-menu-grid">
                    {item.items.map((subitem, index) => (
                      <Link className="mega-menu-card" href={subitem.href} key={subitem.href} onClick={closeNavigation}>
                        <span className={`mega-menu-visual visual-${subitem.tone}`} aria-hidden="true"><i>0{index + 1}</i></span>
                        <strong>{subitem.title}</strong>
                        <small>{subitem.text}</small>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link href={item.href} key={item.href} onClick={closeNavigation}>{item.label}</Link>
          ))}
          <Link className="mobile-book-link" href={site.bookingUrl} target="_blank" rel="noreferrer" onClick={closeNavigation}>
            Book Online <ArrowIcon />
          </Link>
        </nav>
        <Link className="button button-small button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
          Book Online <ArrowIcon />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">SW</span>
            <span className="brand-name">
              <strong>Springwell</strong>
              <small>Acupuncture</small>
            </span>
          </Link>
          <p className="footer-note">
            Modern, personalized acupuncture for women’s health, fertility,
            pain management, stress, sleep, and digestive wellbeing.
          </p>
          <div className="footer-socials" aria-label="Springwell social media">
            <p className="footer-label">Follow Springwell</p>
            <div className="social-links">
              {site.socialLinks.map((social) => (
                <a href={social.href} key={social.href} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">◎</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/specialist">Specialist</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <p>Northern Virginia</p>
          <p>Appointments by request</p>
          <p>Exact practice address shared before your visit</p>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Phone details available by email</p>
          <Link className="text-link footer-link" href="/contact">Contact us <ArrowIcon /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Springwell Acupuncture. All rights reserved.</span>
        <span>Information on this site is educational and is not medical advice.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children, variant }: { children: React.ReactNode; variant?: "home" }) {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(id);
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className={variant === "home" ? "page-shell home-shell" : "page-shell"}>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function InteriorHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <section className="interior-hero section-pad">
      <div className="container interior-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <p className="interior-lead">{text}</p>
      </div>
      {image ? (
        <div
          className="interior-hero-media"
          aria-hidden="true"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(255,247,232,.92) 0%, rgba(255,247,232,.32) 100%), url(${image})` }}
        />
      ) : <div className="interior-ripple" aria-hidden="true" />}
    </section>
  );
}

export function BottomCTA() {
  return (
    <section className="section-pad cta-section compact-cta">
      <div className="container cta-card">
        <div>
          <p className="eyebrow light">Care starts here</p>
          <h2>Ready to take the next step?</h2>
        </div>
        <div>
          <p>Share what brings you in, and we’ll help you plan your first visit.</p>
          <Link className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">
            Book Online <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
