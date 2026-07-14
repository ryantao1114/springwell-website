"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, CheckIcon } from "./icons";
import { site } from "../config/site";

const slides = [
  {
    eyebrow: "Women’s health · Fertility · IVF",
    title: "Care for every chapter of women’s health.",
    text: "Personalized acupuncture care for menstrual health, hormonal transitions, fertility planning, IVF support, and the physical and emotional changes that shape each stage of life.",
    video: "/images/videos/hero-womens-health.mp4",
    poster: "/images/home-hero-care.jpg",
    alt: "Gentle clinical care for women’s health and fertility support",
    href: "/specialist#womens-health",
    linkLabel: "Explore women’s health care",
  },
  {
    eyebrow: "Pain management · Neck, back & muscle pain",
    title: "A thoughtful plan for pain and movement.",
    text: "Acupuncture care for neck, back, shoulder, and muscle pain, TMJ and orofacial pain, headaches, and tension that affects movement and daily comfort.",
    video: "/images/videos/hero-pain.mp4",
    poster: "/images/videos/hero-pain-poster.jpg",
    alt: "Flowing water representing movement and recovery in pain care",
    href: "/specialist#pain-management",
    linkLabel: "Explore pain care",
  },
  {
    eyebrow: "Stress relief · Sleep support · Digestive health",
    title: "Support for rest, recovery, and digestion.",
    text: "When stress affects sleep, energy, appetite, or digestion, care should reflect the connected pattern—not treat each concern as a separate problem.",
    video: "/images/videos/hero-stress-digestion.mp4",
    poster: "/images/videos/hero-stress-digestion-poster.jpg",
    alt: "A quiet woodland stream representing rest, recovery, and digestive support",
    href: "/specialist#stress-sleep-digestion",
    linkLabel: "Explore stress & digestive care",
  },
] as const;

export function HomeHero() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const slide = slides[active];

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 8500);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      void video.play().catch(() => setPlaying(false));
    } else {
      video.pause();
    }
  }, [active, playing]);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
    setPlaying(true);
  };

  return (
    <section className="home-video-hero" aria-label="Springwell care areas">
      <video
        ref={videoRef}
        key={slide.video}
        className="home-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        poster={slide.poster}
        aria-label={slide.alt}
      >
        <source src={slide.video} type="video/mp4" />
      </video>
      <div className="home-video-overlay" aria-hidden="true" />
      <div className="container home-video-content">
        <div className="home-video-copy" aria-live="polite">
          <p className="eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p className="hero-lead">{slide.text}</p>
          <div className="button-row">
            <Link className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
              Book Online <ArrowIcon />
            </Link>
            <Link className="text-link" href={slide.href}>
              {slide.linkLabel} <ArrowIcon />
            </Link>
          </div>
          <div className="trust-row" aria-label="Practice highlights">
            <span><CheckIcon /> Virginia licensed</span>
            <span><CheckIcon /> Individualized plans</span>
            <span><CheckIcon /> Calm, private care</span>
          </div>
        </div>

        <div className="home-video-controls" aria-label="Hero video controls">
          <button type="button" className="video-arrow" onClick={() => goTo(active - 1)} aria-label="Previous care area">←</button>
          <div className="video-dots" role="tablist" aria-label="Choose a care area">
            {slides.map((item, index) => (
              <button
                key={item.video}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show ${item.eyebrow}`}
                className={index === active ? "is-active" : ""}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" className="video-arrow" onClick={() => goTo(active + 1)} aria-label="Next care area">→</button>
          <button
            type="button"
            className="video-play-toggle"
            onClick={() => setPlaying((current) => !current)}
            aria-label={playing ? "Pause hero video" : "Play hero video"}
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
}
