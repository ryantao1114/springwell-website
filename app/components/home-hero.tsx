"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, CheckIcon } from "./icons";
import { site } from "../config/site";

const slides = [
  {
    eyebrow: "Acupuncture for women’s health · Fertility · IVF",
    title: "Acupuncture for women’s health, fertility, and IVF support.",
    text: "Personalized acupuncture care for menstrual health, hormonal changes, fertility planning, IVF support, and the health concerns women may experience across every stage of life.",
    video: "/images/videos/hero-womens-health-uploaded-v4.mp4",
    poster: "/images/videos/hero-womens-health-uploaded-poster-v4.webp",
    alt: "Gentle clinical care for women’s health and fertility support",
    href: "/specialist#womens-health",
    linkLabel: "Explore women’s health care",
  },
  {
    eyebrow: "Acupuncture for pain · Neck, back · Muscle · TMJ",
    title: "Acupuncture for neck, back, muscle, and TMJ pain.",
    text: "Focused acupuncture care for neck, back, shoulder, and muscle pain, TMJ and facial pain, headaches, and tension that affects movement and daily comfort.",
    video: "/images/videos/hero-pain.mp4",
    poster: "/images/videos/hero-pain-poster.webp",
    alt: "Flowing water representing movement and recovery in pain care",
    href: "/specialist#pain-management",
    linkLabel: "Explore pain care",
  },
  {
    eyebrow: "Acupuncture for stress · Sleep · Digestive health",
    title: "Acupuncture for stress, sleep, and digestive health.",
    text: "Acupuncture support for stress-related tension, sleep difficulties, low energy, and digestive symptoms such as bloating, nausea, and irregularity.",
    video: "/images/videos/hero-stress-digestion.mp4",
    poster: "/images/videos/hero-stress-digestion-poster.webp",
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
              Book Your Visit <ArrowIcon />
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
          <button type="button" className="video-arrow" onClick={() => goTo(active - 1)} aria-label="Previous care area">Previous</button>
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
          <button type="button" className="video-arrow" onClick={() => goTo(active + 1)} aria-label="Next care area">Next</button>
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
