"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "../config/site";
import { ArrowIcon } from "./icons";

const nav = [
  { href: "/", label: "Home" },
  {
    href: "/services/acupuncture",
    label: "Acupuncture",
    intro: "Traditional treatments, explained clearly and selected according to your needs.",
    items: [
      { href: "/services/acupuncture", title: "Acupuncture", text: "Personalized treatment using sterile, single-use needles, with electroacupuncture when appropriate.", tone: "needle" },
      { href: "/services/cupping", title: "Cupping", text: "Focused support for muscle tightness, soreness, stiffness, and movement-related tension.", tone: "cups" },
      { href: "/services/herbal-medicine", title: "Herbal Medicine", text: "Individualized traditional formula guidance with careful medication and safety screening.", tone: "herbs" },
    ],
  },
  {
    href: "/specialist",
    label: "Specialties",
    intro: "Focused, individualized care for the concerns that bring you in.",
    items: [
      { href: "/care/womens-health-fertility", title: "Women’s Health & Fertility", text: "Menstrual health, fertility, IUI, IVF, and reproductive wellbeing.", tone: "fertility" },
      { href: "/care/pain-management", title: "Pain Management", text: "Headache, TMJ, neck, back, muscle tension, and persistent pain support.", tone: "orofacial" },
      { href: "/care/stress-sleep", title: "Stress, Sleep & Digestion", text: "A whole-person approach to stress, sleep disruption, bloating, and digestive discomfort.", tone: "wellness" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/new-patients", label: "New Patients" },
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
          <span className="brand-mark"><img src="/images/springwell-logo.png" alt="Springwell Acupuncture" /></span>
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
                    {item.label !== "Services" && item.label !== "What We Treat" && <Link className="text-link" href={item.href} onClick={closeNavigation}>
                      View overview <ArrowIcon />
                    </Link>}
                  </div>
                  <div className="mega-menu-grid">
                    {item.items.map((subitem) => (
                      <Link className="mega-menu-card" href={subitem.href} key={subitem.href} onClick={closeNavigation}>
                        <span className={`mega-menu-visual visual-${subitem.tone}`} aria-hidden="true" />
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
            Book Now <ArrowIcon />
          </Link>
        </nav>
        <Link className="button button-small button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
          Book Now <ArrowIcon />
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
            <span className="brand-mark"><img src="/images/springwell-logo.png" alt="Springwell Acupuncture" /></span>
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
          <Link href="/services/acupuncture">Acupuncture</Link>
          <Link href="/services/cupping">Cupping</Link>
          <Link href="/services/herbal-medicine">Herbal Medicine</Link>
          <Link href="/specialist">Specialties</Link>
          <Link href="/about">About</Link>
          <Link href="/new-patients">New Patients</Link>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <p>463 Carlisle Dr., Room 4</p>
          <p>Herndon, VA 20170</p>
          <p>Serving Herndon, Reston, and Northern Virginia</p>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Questions and scheduling by email</p>
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
        <p className="eyebrow light">Springwell Acupuncture</p>
        <h2>Ready to take the next step?</h2>
        <p className="cta-copy">Tell us what brings you in, and we’ll help you choose the right first visit.</p>
        <Link className="button button-light cta-button" href={site.bookingUrl} target="_blank" rel="noreferrer">
          Book Your Visit <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
