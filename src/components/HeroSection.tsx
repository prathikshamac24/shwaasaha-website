"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Sparkles,
  Sun,
  Wind,
  Feather,
  Anchor,
  ArrowRight,
} from "lucide-react";

interface HeroSectionProps {
  onOpenTalk: (context?: string) => void;
}

interface EmblemPart {
  id: "awareness" | "breath" | "movement" | "stillness" | "center";
  name: string;
  sanskrit: string;
  sanskritDevanagari: string;
  color: string;
  lightBg: string;
  borderColor: string;
  position: "top" | "right" | "left" | "bottom" | "center";
  region: string;
  shortRegion: string;
  shortSummary: string;
  description: string;
  quote: string;
  icon: React.ElementType;
}

const EMBLEM_PARTS: EmblemPart[] = [
  {
    id: "awareness",
    name: "Awareness",
    sanskrit: "Surya / Chitta",
    sanskritDevanagari: "चित्त • सूर्य",
    color: "#DFBE91",
    lightBg: "rgba(223, 190, 145, 0.18)",
    borderColor: "#DFBE91",
    position: "top",
    region: "Head & Crown",
    shortRegion: "Crown",
    shortSummary: "Mental clarity & awakened perception",
    description:
      "In SHWAASA:, we do not force the mind to empty. We cultivate gentle, compassionate observation—clearing cognitive fatigue and anxiety from long work hours.",
    quote: "Somewhere between the deadlines, we stop listening to ourselves.",
    icon: Sun,
  },
  {
    id: "breath",
    name: "Breath",
    sanskrit: "Śvāsa / Prāṇa",
    sanskritDevanagari: "श्वास • प्राण",
    color: "#9CB1B6",
    lightBg: "rgba(156, 177, 182, 0.18)",
    borderColor: "#9CB1B6",
    position: "right",
    region: "Throat & Heart Center",
    shortRegion: "Heart",
    shortSummary: "The core prana that regulates your nervous system",
    description:
      "The true namesake of SHWAASA:. Breath is the invisible bridge linking physical movement to mental stillness. Lengthening prana signals absolute safety to your heart.",
    quote: "Breathe into your true self.",
    icon: Wind,
  },
  {
    id: "movement",
    name: "Movement",
    sanskrit: "Āsana / Body",
    sanskritDevanagari: "आसन • शरीर",
    color: "#A4A07B",
    lightBg: "rgba(164, 160, 123, 0.18)",
    borderColor: "#A4A07B",
    position: "left",
    region: "Spine & Limbs",
    shortRegion: "Body",
    shortSummary: "Organic release without force or strain",
    description:
      "Movement here is never aggressive or performative. It is gentle and restorative—teaching you to listen to tightness in neck and back before it turns into chronic pain.",
    quote: "You don't need to be flexible. You just need to begin.",
    icon: Feather,
  },
  {
    id: "stillness",
    name: "Stillness",
    sanskrit: "Sthira / Śānti",
    sanskritDevanagari: "स्थिर • शान्ति",
    color: "#DF975F",
    lightBg: "rgba(223, 151, 95, 0.18)",
    borderColor: "#DFBE91",
    position: "bottom",
    region: "Seated Base & Root",
    shortRegion: "Root",
    shortSummary: "Grounded presence carried into everyday life",
    description:
      "The unshakeable root. No matter how demanding work or family life becomes, this inner quiet remains anchored deep inside you, long after you leave the mat.",
    quote: "The practice begins on the mat. The real change happens in your life.",
    icon: Anchor,
  },
  {
    id: "center",
    name: "Sacred Union",
    sanskrit: "Samatvam / Yoga",
    sanskritDevanagari: "समत्वम् • योग",
    color: "#E8D6B7",
    lightBg: "rgba(232, 214, 183, 0.25)",
    borderColor: "rgba(55, 51, 34, 0.3)",
    position: "center",
    region: "The Core Bindu",
    shortRegion: "Center",
    shortSummary: "Where Mind, Breath, Body & Stillness unite",
    description:
      "When Awareness, Breath, Movement, and Stillness converge at the center, the four petals become one living mandala. That moment is SHWAASA: returning home to your true self.",
    quote: "Yoga is the harmonious return to your natural state of peace.",
    icon: Sparkles,
  },
];

export default function HeroSection({ onOpenTalk }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress State (0.00 to 1.00)
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);

  // Mobile detection for fluid viewport sizing
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Interactive Highlighting: which part is currently hovered
  const [activePart, setActivePart] = useState<EmblemPart["id"] | null>(null);

  // Gentle breathing cycle pacer state
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale" | "Pause">("Inhale");
  const [breathCount, setBreathCount] = useState<number>(4);

  // 1. Breathing Cycle Timer
  useEffect(() => {
    const phases: { name: "Inhale" | "Hold" | "Exhale" | "Pause"; seconds: number }[] = [
      { name: "Inhale", seconds: 4 },
      { name: "Hold", seconds: 3 },
      { name: "Exhale", seconds: 4 },
      { name: "Pause", seconds: 3 },
    ];

    let currentPhaseIndex = 0;
    let timer = phases[0].seconds;

    const interval = setInterval(() => {
      timer -= 1;
      if (timer <= 0) {
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
        setBreathPhase(phases[currentPhaseIndex].name);
        timer = phases[currentPhaseIndex].seconds;
      }
      setBreathCount(timer);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 2. High-performance scroll tracking with lerp animation loop
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolledPast = -rect.top;
      const rawProgress = scrolledPast / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      targetProgressRef.current = clamped;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Smooth lerp loop for liquid 60/120fps transitions
    const updateLerp = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0008) {
        currentProgressRef.current += diff * 0.14;
        setScrollProgress(currentProgressRef.current);
      }
      animId = requestAnimationFrame(updateLerp);
    };

    animId = requestAnimationFrame(updateLerp);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Helper function for silky smooth Hermite interpolation
  const smoothstep = (min: number, max: number, val: number): number => {
    const x = Math.max(0, Math.min(1, (val - min) / (max - min)));
    return x * x * (3 - 2 * x);
  };

  // Transformation Calculations (Forward Exploration -> Peak Hold -> Graceful Rewind):
  // 1. Initial Fade-out of hero text as scrolling begins, then rewinds back into place
  const forwardHeroFade = 1 - smoothstep(0.06, 0.18, scrollProgress);
  const rewindHeroFade = smoothstep(0.78, 0.88, scrollProgress);
  const heroFadeOpacity = scrollProgress < 0.50 ? forwardHeroFade : rewindHeroFade;

  // 2. Vertical slide for top/bottom text (slides away, then returns cleanly to 0px)
  const slideDistance = isMobile ? 35 : 55;
  const forwardTopSlide = -smoothstep(0.06, 0.18, scrollProgress) * slideDistance;
  const rewindTopSlide = -(1 - smoothstep(0.78, 0.88, scrollProgress)) * slideDistance;
  const topSlideY = scrollProgress < 0.50 ? forwardTopSlide : rewindTopSlide;

  const forwardBottomSlide = smoothstep(0.06, 0.18, scrollProgress) * slideDistance;
  const rewindBottomSlide = (1 - smoothstep(0.78, 0.88, scrollProgress)) * slideDistance;
  const bottomSlideY = scrollProgress < 0.50 ? forwardBottomSlide : rewindBottomSlide;

  // 3. Rotation: rotates 0deg -> 180deg during expansion, holds, then rotates back to 0deg
  const forwardRot = smoothstep(0.10, 0.38, scrollProgress);
  const rewindRot = 1 - smoothstep(0.68, 0.85, scrollProgress);
  const rotFactor = scrollProgress < 0.50 ? forwardRot : rewindRot;
  const emblemRotation = rotFactor * 180;

  // 4. Scale: scales up to focus on sacred geometry, holds, then scales back to 1.0
  const maxScaleMultiplier = isMobile ? 0.65 : 2.0;
  const forwardScale = smoothstep(0.10, 0.38, scrollProgress);
  const rewindScale = 1 - smoothstep(0.68, 0.85, scrollProgress);
  const scaleFactor = scrollProgress < 0.50 ? forwardScale : rewindScale;
  const emblemScale = 1 + scaleFactor * maxScaleMultiplier;
  const baseEmblemSize = isMobile ? 74 : 108;

  // 5. Exploded anatomy separation: separates petals outward, holds, then reunites back to 0px
  const maxExplode = isMobile ? 14 : 26;
  const forwardExplode = smoothstep(0.28, 0.46, scrollProgress);
  const rewindExplode = 1 - smoothstep(0.62, 0.76, scrollProgress);
  const explodeFactor = scrollProgress < 0.50 ? forwardExplode : rewindExplode;
  const explodeDistance = explodeFactor * maxExplode;

  // 6. Anatomy cards opacity: fades in at peak, holds, then fades out before rewind completes
  const forwardAnatomy = smoothstep(0.36, 0.48, scrollProgress);
  const rewindAnatomy = 1 - smoothstep(0.58, 0.68, scrollProgress);
  const anatomyOpacity = scrollProgress < 0.50 ? forwardAnatomy : rewindAnatomy;

  // 7. Mid-scroll tracker pill visibility (only during active exploration)
  const showTracker = scrollProgress > 0.22 && scrollProgress < 0.66;
  const trackerOpacity = showTracker
    ? scrollProgress < 0.34
      ? smoothstep(0.22, 0.34, scrollProgress)
      : 1 - smoothstep(0.56, 0.66, scrollProgress)
    : 0;

  // Active highlighted part
  const currentActivePart = EMBLEM_PARTS.find((p) => p.id === activePart);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "360vh", // Generous track for exploration & full reverse rewind
        backgroundColor: "var(--color-bg)",
      }}
    >
      {/* Sticky Fullscreen Stage */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          minHeight: "100dvh",
          maxHeight: "100dvh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "12px 14px" : "16px 20px",
        }}
      >
        {/* MID-SCROLL HEADER TAG (Only active on desktop during sacred expansion & exploration) */}
        {!isMobile && showTracker && (
          <div
            style={{
              position: "absolute",
              top: isMobile ? "14px" : "22px",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 10,
              opacity: trackerOpacity,
              pointerEvents: "none",
              transition: "opacity 0.2s ease",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "1px solid rgba(55, 51, 34, 0.1)",
                borderRadius: "var(--radius-pill)",
                padding: isMobile ? "4px 12px" : "6px 20px",
                boxShadow: "var(--shadow-sm)",
                backdropFilter: "blur(10px)",
                maxWidth: "92%",
              }}
            >
              <Sparkles size={isMobile ? 12 : 14} style={{ color: "var(--color-awareness)", flexShrink: 0 }} />
              <span
                style={{
                  fontSize: isMobile ? "10.5px" : "12px",
                  fontWeight: 600,
                  letterSpacing: isMobile ? "0.08em" : "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-brand-dark)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {scrollProgress < 0.48
                  ? (isMobile ? "Sacred Geometry Expanding" : "Rotating & Expanding Sacred Geometry")
                  : (isMobile ? "Sacred Anatomy: Tap Any Petal" : "Sacred Anatomy: Hover Any Petal to Reveal Significance")}
              </span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VERTICAL HERO FLOW (EXACT NON-OVERLAPPING STACK)        */}
        {/* [1] TOP: Pill -> Title -> Tagline -> Triad              */}
        {/* [2] MID: Logo Emblem (Below Triad)                      */}
        {/* [3] BOTTOM: Written Card -> TALK TO US Button           */}
        {/* ======================================================== */}
        <div
          style={{
            position: "relative",
            zIndex: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "760px",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          {/* ====================================================== */}
          {/* GROUP A: TOP WRITTEN STUFF (Fades out & slides up)    */}
          {/* ====================================================== */}
          <div
            style={{
              opacity: heroFadeOpacity,
              transform: `translateY(${topSlideY}px)`,
              pointerEvents: heroFadeOpacity < 0.1 ? "none" : "auto",
              transition: "opacity 0.12s ease-out",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* 1. Breathing Pacer Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(55, 51, 34, 0.1)",
                borderRadius: "var(--radius-pill)",
                padding: isMobile ? "4px 12px" : "5px 16px",
                marginBottom: isMobile ? "6px" : "10px",
                boxShadow: "var(--shadow-sm)",
                backdropFilter: "blur(6px)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor:
                    breathPhase === "Inhale"
                      ? "var(--color-breath)"
                      : breathPhase === "Hold"
                      ? "var(--color-awareness)"
                      : breathPhase === "Exhale"
                      ? "var(--color-movement)"
                      : "var(--color-stillness)",
                  transition: "background-color 0.5s ease",
                }}
              />
              <span
                style={{
                  fontSize: isMobile ? "10.5px" : "12px",
                  fontWeight: 600,
                  letterSpacing: isMobile ? "0.08em" : "0.12em",
                  color: "var(--color-text-secondary)",
                  textTransform: "uppercase",
                }}
              >
                श्वासः • {breathPhase} ({breathCount}s)
              </span>
            </div>

            {/* 2. Main Title */}
            <h1
              className="hero-title"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: isMobile ? "clamp(30px, 9vw, 42px)" : "clamp(44px, 7vw, 72px)",
                fontWeight: 400,
                letterSpacing: isMobile ? "0.09em" : "0.18em",
                color: "var(--color-brand-dark)",
                marginBottom: "2px",
                lineHeight: 1.05,
              }}
            >
              SHWΛΛSΛ:
            </h1>

            {/* 3. Tagline */}
            <p
              className="hero-tagline"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: isMobile ? "13px" : "clamp(17px, 3vw, 26px)",
                fontWeight: 500,
                letterSpacing: isMobile ? "0.08em" : "0.16em",
                textTransform: "uppercase",
                color: "var(--color-brand-dark)",
                marginBottom: isMobile ? "5px" : "8px",
              }}
            >
              BREATHE INTO YOUR TRUE SELF
            </p>

            {/* 4. Triad */}
            <div
              className="hero-triad"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: isMobile ? "8px" : "12px",
                fontSize: isMobile ? "11px" : "13px",
                fontWeight: 600,
                letterSpacing: isMobile ? "0.08em" : "0.16em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: isMobile ? "8px" : "16px",
              }}
            >
              <span>Yoga</span>
              <span style={{ color: "var(--color-awareness)" }}>•</span>
              <span>Breath</span>
              <span style={{ color: "var(--color-breath)" }}>•</span>
              <span>Awareness</span>
            </div>
          </div>

          {/* ====================================================== */}
          {/* GROUP B: LOGO IN THE MID (Below Triad, above Card)     */}
          {/* Pure clean SVG with interactive petal highlighting     */}
          {/* ZERO BUBBLES, NO FUZZY HALOS, CRISP SACRED GEOMETRY    */}
          {/* ====================================================== */}
          <div
            className="hero-logo-anchor"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: isMobile ? "6px 0 10px" : "12px 0 16px",
              zIndex: 15,
            }}
          >
            {/* MOBILE ONLY: Anatomy Header Pill (Anchored directly above logo) */}
            <div
              className="mobile-anatomy-header"
              style={{
                position: "absolute",
                bottom: "calc(100% + 32px)",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: anatomyOpacity,
                pointerEvents: anatomyOpacity > 0.25 ? "auto" : "none",
                transition: "opacity 0.25s ease",
                whiteSpace: "nowrap",
                zIndex: 25,
              }}
            >
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--color-brand-dark)",
                  textTransform: "uppercase",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  padding: "5px 16px",
                  borderRadius: "var(--radius-pill)",
                  boxShadow: "0 2px 10px rgba(55, 51, 34, 0.08)",
                  border: "1px solid rgba(55, 51, 34, 0.12)",
                }}
              >
                The 4 Sacred Circles of SHWAASA:
              </div>
            </div>

            {/* SVG RENDERING OF THE SACRED QUAD-PETAL EMBLEM */}
            <div
              style={{
                position: "relative",
                width: `${baseEmblemSize}px`,
                height: `${baseEmblemSize}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotate(${emblemRotation}deg) scale(${emblemScale})`,
                transformOrigin: "center center",
                willChange: "transform",
                pointerEvents: "auto",
                cursor: "pointer",
              }}
            >
              {/* ViewBox: 0 0 300 300, Center is (150, 150), Circle Radius R = 75 */}
              <svg
                viewBox="0 0 300 300"
                width="100%"
                height="100%"
                style={{
                  overflow: "visible",
                  filter: "drop-shadow(0 8px 20px rgba(55, 51, 34, 0.16))",
                }}
              >
                {/* PART 3: LEFT CIRCLE -> MOVEMENT (Muted Sage) */}
                <g
                  id="petal-movement"
                  onClick={() => setActivePart("movement")}
                  onMouseEnter={() => setActivePart("movement")}
                  onMouseLeave={() => setActivePart(null)}
                  style={{
                    transform: `translate(${-explodeDistance - (activePart === "movement" ? 4 : 0)}px, 0) scale(${
                      activePart === "movement" ? 1.05 : 1
                    })`,
                    transformOrigin: "75px 150px",
                    transition: "transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease",
                    cursor: "pointer",
                    pointerEvents: "all",
                    opacity: activePart === null || activePart === "movement" ? 0.95 : 0.45,
                    filter:
                      activePart === "movement"
                        ? "drop-shadow(0 0 16px rgba(164, 160, 123, 1)) brightness(1.18)"
                        : "none",
                  }}
                >
                  <circle
                    cx="75"
                    cy="150"
                    r="75"
                    fill="#A4A07B"
                    stroke={activePart === "movement" ? "#ffffff" : "none"}
                    strokeWidth="3"
                  />
                </g>

                {/* PART 4: BOTTOM CIRCLE -> STILLNESS (Terracotta Clay) */}
                <g
                  id="petal-stillness"
                  onClick={() => setActivePart("stillness")}
                  onMouseEnter={() => setActivePart("stillness")}
                  onMouseLeave={() => setActivePart(null)}
                  style={{
                    transform: `translate(0, ${explodeDistance + (activePart === "stillness" ? 4 : 0)}px) scale(${
                      activePart === "stillness" ? 1.05 : 1
                    })`,
                    transformOrigin: "150px 225px",
                    transition: "transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease",
                    cursor: "pointer",
                    pointerEvents: "all",
                    opacity: activePart === null || activePart === "stillness" ? 0.95 : 0.45,
                    filter:
                      activePart === "stillness"
                        ? "drop-shadow(0 0 16px rgba(223, 151, 95, 1)) brightness(1.18)"
                        : "none",
                  }}
                >
                  <circle
                    cx="150"
                    cy="225"
                    r="75"
                    fill="#DF975F"
                    stroke={activePart === "stillness" ? "#ffffff" : "none"}
                    strokeWidth="3"
                  />
                </g>

                {/* PART 2: RIGHT CIRCLE -> BREATH (Slate Sky) */}
                <g
                  id="petal-breath"
                  onClick={() => setActivePart("breath")}
                  onMouseEnter={() => setActivePart("breath")}
                  onMouseLeave={() => setActivePart(null)}
                  style={{
                    transform: `translate(${explodeDistance + (activePart === "breath" ? 4 : 0)}px, 0) scale(${
                      activePart === "breath" ? 1.05 : 1
                    })`,
                    transformOrigin: "225px 150px",
                    transition: "transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease",
                    cursor: "pointer",
                    pointerEvents: "all",
                    opacity: activePart === null || activePart === "breath" ? 0.95 : 0.45,
                    filter:
                      activePart === "breath"
                        ? "drop-shadow(0 0 16px rgba(156, 177, 182, 1)) brightness(1.18)"
                        : "none",
                  }}
                >
                  <circle
                    cx="225"
                    cy="150"
                    r="75"
                    fill="#9CB1B6"
                    stroke={activePart === "breath" ? "#ffffff" : "none"}
                    strokeWidth="3"
                  />
                </g>

                {/* PART 1: TOP CIRCLE -> AWARENESS (Warm Ochre) */}
                <g
                  id="petal-awareness"
                  onClick={() => setActivePart("awareness")}
                  onMouseEnter={() => setActivePart("awareness")}
                  onMouseLeave={() => setActivePart(null)}
                  style={{
                    transform: `translate(0, ${-explodeDistance - (activePart === "awareness" ? 4 : 0)}px) scale(${
                      activePart === "awareness" ? 1.05 : 1
                    })`,
                    transformOrigin: "150px 75px",
                    transition: "transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease",
                    cursor: "pointer",
                    pointerEvents: "all",
                    opacity: activePart === null || activePart === "awareness" ? 0.95 : 0.45,
                    filter:
                      activePart === "awareness"
                        ? "drop-shadow(0 0 16px rgba(223, 190, 145, 1)) brightness(1.18)"
                        : "none",
                  }}
                >
                  <circle
                    cx="150"
                    cy="75"
                    r="75"
                    fill="#DFBE91"
                    stroke={activePart === "awareness" ? "#ffffff" : "none"}
                    strokeWidth="3"
                  />
                </g>

                {/* SACRED CENTER PETALS (Harmonious Overlapping Lenses) */}
                <g
                  id="petal-center"
                  onClick={() => setActivePart("center")}
                  onMouseEnter={() => setActivePart("center")}
                  onMouseLeave={() => setActivePart(null)}
                  style={{
                    opacity:
                      activePart === "center"
                        ? 1
                        : Math.max(0, 1 - explodeDistance / 24),
                    transition: "opacity 0.2s ease, filter 0.2s ease",
                    cursor: "pointer",
                    pointerEvents: "all",
                    filter:
                      activePart === "center"
                        ? "drop-shadow(0 0 16px rgba(232, 214, 183, 1)) brightness(1.15)"
                        : "none",
                  }}
                >
                  <path d="M 150 150 A 75 75 0 0 1 225 75 A 75 75 0 0 1 150 150 Z" fill="#E8D6B7" opacity="0.96" />
                  <path d="M 150 150 A 75 75 0 0 1 75 75 A 75 75 0 0 1 150 150 Z" fill="#E8D6B7" opacity="0.96" />
                  <path d="M 150 150 A 75 75 0 0 1 75 225 A 75 75 0 0 1 150 150 Z" fill="#E8D6B7" opacity="0.96" />
                  <path d="M 150 150 A 75 75 0 0 1 225 225 A 75 75 0 0 1 150 150 Z" fill="#E8D6B7" opacity="0.96" />
                </g>

                {/* BINDU CORE: Clean center mark when exploded */}
                {explodeFactor > 0.25 && (
                  <g
                    onClick={() => setActivePart("center")}
                    onMouseEnter={() => setActivePart("center")}
                    onMouseLeave={() => setActivePart(null)}
                    style={{
                      cursor: "pointer",
                      pointerEvents: "all",
                      transition: "all 0.2s ease",
                      filter: activePart === "center" ? "drop-shadow(0 0 10px #E8D6B7)" : "none",
                    }}
                  >
                    <circle cx="150" cy="150" r="12" fill="#ffffff" stroke="#373322" strokeWidth="2" />
                    <circle cx="150" cy="150" r="6" fill="#DFBE91" />
                  </g>
                )}
              </svg>
            </div>

            {/* MOBILE ONLY: 4-Circle Anatomy Matrix (Anchored directly below logo) */}
            <div
              className="mobile-anatomy-matrix"
              style={{
                position: "absolute",
                top: "calc(100% + 32px)",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: anatomyOpacity,
                pointerEvents: anatomyOpacity > 0.25 ? "auto" : "none",
                transition: "opacity 0.25s ease",
                width: "min(400px, calc(100vw - 24px))",
                zIndex: 25,
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  width: "100%",
                }}
              >
                {[
                  EMBLEM_PARTS[0], // Awareness (Top Circle)
                  EMBLEM_PARTS[1], // Breath (Right Circle)
                  EMBLEM_PARTS[2], // Movement (Left Circle)
                  EMBLEM_PARTS[3], // Stillness (Bottom Circle)
                ].map((item) => {
                  const isSelected = activePart === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePart(isSelected ? null : item.id);
                      }}
                      style={{
                        backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.94)",
                        border: isSelected ? `2px solid ${item.color}` : "1px solid rgba(55, 51, 34, 0.12)",
                        borderLeft: `4px solid ${item.color}`,
                        borderRadius: "var(--radius-sm)",
                        padding: "6px 8px",
                        boxShadow: isSelected
                          ? `0 6px 18px ${item.color}35`
                          : "0 2px 6px rgba(55, 51, 34, 0.05)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        transform: isSelected ? "scale(1.02)" : "none",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "3px",
                          gap: "4px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", minWidth: 0 }}>
                          <span
                            style={{
                              width: "7px",
                              height: "7px",
                              borderRadius: "50%",
                              backgroundColor: item.color,
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "var(--color-brand-dark)",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {item.name}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: "8.5px",
                            color: item.color,
                            backgroundColor: item.lightBg,
                            padding: "1px 6px",
                            borderRadius: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          {item.shortRegion}
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: "9.5px",
                          lineHeight: 1.35,
                          color: "var(--color-text-secondary)",
                          margin: 0,
                        }}
                      >
                        {item.shortSummary}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Center Core note */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePart(activePart === "center" ? null : "center");
                }}
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  color: "var(--color-brand-dark)",
                  fontWeight: 500,
                  backgroundColor: activePart === "center" ? "#ffffff" : "rgba(255, 255, 255, 0.88)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-pill)",
                  border: activePart === "center" ? "1px solid #DFBE91" : "1px solid rgba(55, 51, 34, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  boxShadow: "0 2px 6px rgba(55, 51, 34, 0.04)",
                  cursor: "pointer",
                }}
              >
                <Sparkles size={11} style={{ color: "var(--color-awareness)" }} />
                <span>Center Core: <strong>SHWAASA:</strong> — True Self Union</span>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* GROUP C: BOTTOM WRITTEN STUFF (Fades out & slides down)*/}
          {/* Written Card -> TALK TO US button                      */}
          {/* ====================================================== */}
          <div
            style={{
              opacity: heroFadeOpacity,
              transform: `translateY(${bottomSlideY}px)`,
              pointerEvents: heroFadeOpacity < 0.1 ? "none" : "auto",
              transition: "opacity 0.12s ease-out",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Written Card (Placed cleanly a little below the logo in exact 3 lines) */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                border: "1px solid rgba(55, 51, 34, 0.08)",
                borderRadius: "var(--radius-md)",
                padding: isMobile ? "12px 20px" : "16px 28px",
                maxWidth: "480px",
                margin: isMobile ? "22px auto 14px" : "28px auto 18px",
                backdropFilter: "blur(8px)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? "13.5px" : "clamp(15px, 2vw, 17px)",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.55,
                  textAlign: "center",
                  margin: 0,
                }}
              >
                <span style={{ display: "block" }}>You don’t need to be flexible.</span>
                <span style={{ display: "block" }}>You don’t need to know yoga.</span>
                <strong
                  style={{
                    display: "block",
                    marginTop: "3px",
                    color: "var(--color-brand-dark)",
                    fontWeight: 600,
                  }}
                >
                  You just need to begin.
                </strong>
              </p>
            </div>

            {/* Proper Luxury CTA Button */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? "6px" : "10px" }}>
              <button
                onClick={() => onOpenTalk("Hero Section CTA")}
                className="btn btn-primary"
                style={{
                  fontSize: isMobile ? "13px" : "14.5px",
                  padding: isMobile ? "13px 30px" : "16px 42px",
                  letterSpacing: "0.08em",
                  boxShadow: "0 8px 24px rgba(55, 51, 34, 0.22)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>BEGIN YOUR PRACTICE</span>
                <ArrowRight size={isMobile ? 15 : 17} style={{ color: "var(--color-awareness)" }} />
              </button>

              <span
                style={{
                  fontSize: isMobile ? "11.5px" : "12.5px",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.02em",
                }}
              >
                Direct mentorship with Chethan & Indira • Beginners warmly welcomed
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PHASE 3: DESKTOP ONLY 4-CORNER ANATOMICAL CARDS         */}
        {/* Rendered during peak exploration, smoothly fades out during rewind */}
        {anatomyOpacity > 0.01 && (
          <div
            className="desktop-anatomy-overlay"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 8,
              opacity: anatomyOpacity,
              pointerEvents: anatomyOpacity < 0.2 ? "none" : "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "70px 32px 75px",
              maxWidth: "1380px",
              margin: "0 auto",
              width: "100%",
              transition: "opacity 0.3s ease",
            }}
          >
            {/* Top Instruction Pill */}
            <div style={{ textAlign: "center", marginBottom: "8px", zIndex: 12 }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  color: "var(--color-brand-dark)",
                  textTransform: "uppercase",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  padding: "5px 18px",
                  borderRadius: "var(--radius-pill)",
                  display: "inline-block",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid rgba(55, 51, 34, 0.1)",
                }}
              >
                Hover any petal on the logo to highlight its significance
              </p>
            </div>

            {/* Desktop 4-Corner Cards: Placed cleanly on left & right of logo */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
                flex: 1,
                alignItems: "center",
                pointerEvents: "none",
              }}
              className="desktop-anatomy-grid"
            >
              {/* LEFT COLUMN: Movement & Stillness */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                  maxWidth: "340px",
                  pointerEvents: "auto",
                }}
              >
                {/* Movement Card */}
                {(() => {
                  const item = EMBLEM_PARTS[2];
                  const Icon = item.icon;
                  const isSelected = activePart === item.id;
                  const isDimmed = activePart !== null && !isSelected;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActivePart(item.id)}
                      onMouseEnter={() => setActivePart(item.id)}
                      onMouseLeave={() => setActivePart(null)}
                      className={`hero-anatomy-card ${isSelected ? "is-active" : ""}`}
                      style={{
                        borderLeft: `5px solid ${item.color}`,
                        border: isSelected ? `2px solid ${item.color}` : "1px solid rgba(55, 51, 34, 0.1)",
                        backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.88)",
                        transform: isSelected ? "translateX(10px) scale(1.04)" : "none",
                        opacity: isDimmed ? 0.38 : 1,
                        boxShadow: isSelected
                          ? `0 18px 40px ${item.color}35`
                          : "0 10px 30px rgba(55, 51, 34, 0.08)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            color: item.color,
                            textTransform: "uppercase",
                            marginBottom: "4px",
                          }}
                        >
                          ✦ HIGHLIGHTED SIGNIFICANCE
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: item.lightBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                          }}
                        >
                          <Icon size={17} />
                        </div>
                        <div>
                          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: item.color, textTransform: "uppercase" }}>
                            LEFT PART • {item.region}
                          </div>
                          <h4 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-brand-dark)" }}>
                            {item.name} ({item.sanskrit})
                          </h4>
                        </div>
                      </div>
                      <p style={{ fontSize: "12.5px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                        {item.description}
                      </p>
                    </div>
                  );
                })()}

                {/* Stillness Card */}
                {(() => {
                  const item = EMBLEM_PARTS[3];
                  const Icon = item.icon;
                  const isSelected = activePart === item.id;
                  const isDimmed = activePart !== null && !isSelected;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActivePart(item.id)}
                      onMouseEnter={() => setActivePart(item.id)}
                      onMouseLeave={() => setActivePart(null)}
                      className={`hero-anatomy-card ${isSelected ? "is-active" : ""}`}
                      style={{
                        borderLeft: `5px solid ${item.color}`,
                        border: isSelected ? `2px solid ${item.color}` : "1px solid rgba(55, 51, 34, 0.1)",
                        backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.88)",
                        transform: isSelected ? "translateX(10px) scale(1.04)" : "none",
                        opacity: isDimmed ? 0.38 : 1,
                        boxShadow: isSelected
                          ? `0 18px 40px ${item.color}35`
                          : "0 10px 30px rgba(55, 51, 34, 0.08)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            color: item.color,
                            textTransform: "uppercase",
                            marginBottom: "4px",
                          }}
                        >
                          ✦ HIGHLIGHTED SIGNIFICANCE
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: item.lightBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                          }}
                        >
                          <Icon size={17} />
                        </div>
                        <div>
                          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: item.color, textTransform: "uppercase" }}>
                            BOTTOM PART • {item.region}
                          </div>
                          <h4 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-brand-dark)" }}>
                            {item.name} ({item.sanskrit})
                          </h4>
                        </div>
                      </div>
                      <p style={{ fontSize: "12.5px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                        {item.description}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* RIGHT COLUMN: Awareness & Breath */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                  maxWidth: "340px",
                  marginLeft: "auto",
                  pointerEvents: "auto",
                }}
              >
                {/* Awareness Card */}
                {(() => {
                  const item = EMBLEM_PARTS[0];
                  const Icon = item.icon;
                  const isSelected = activePart === item.id;
                  const isDimmed = activePart !== null && !isSelected;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActivePart(item.id)}
                      onMouseEnter={() => setActivePart(item.id)}
                      onMouseLeave={() => setActivePart(null)}
                      className={`hero-anatomy-card ${isSelected ? "is-active" : ""}`}
                      style={{
                        borderRight: `5px solid ${item.color}`,
                        border: isSelected ? `2px solid ${item.color}` : "1px solid rgba(55, 51, 34, 0.1)",
                        backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.88)",
                        transform: isSelected ? "translateX(-10px) scale(1.04)" : "none",
                        opacity: isDimmed ? 0.38 : 1,
                        boxShadow: isSelected
                          ? `0 18px 40px ${item.color}35`
                          : "0 10px 30px rgba(55, 51, 34, 0.08)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            color: item.color,
                            textTransform: "uppercase",
                            marginBottom: "4px",
                          }}
                        >
                          ✦ HIGHLIGHTED SIGNIFICANCE
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: item.lightBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                          }}
                        >
                          <Icon size={17} />
                        </div>
                        <div>
                          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: item.color, textTransform: "uppercase" }}>
                            TOP PART • {item.region}
                          </div>
                          <h4 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-brand-dark)" }}>
                            {item.name} ({item.sanskrit})
                          </h4>
                        </div>
                      </div>
                      <p style={{ fontSize: "12.5px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                        {item.description}
                      </p>
                    </div>
                  );
                })()}

                {/* Breath Card */}
                {(() => {
                  const item = EMBLEM_PARTS[1];
                  const Icon = item.icon;
                  const isSelected = activePart === item.id;
                  const isDimmed = activePart !== null && !isSelected;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActivePart(item.id)}
                      onMouseEnter={() => setActivePart(item.id)}
                      onMouseLeave={() => setActivePart(null)}
                      className={`hero-anatomy-card ${isSelected ? "is-active" : ""}`}
                      style={{
                        borderRight: `5px solid ${item.color}`,
                        border: isSelected ? `2px solid ${item.color}` : "1px solid rgba(55, 51, 34, 0.1)",
                        backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.88)",
                        transform: isSelected ? "translateX(-10px) scale(1.04)" : "none",
                        opacity: isDimmed ? 0.38 : 1,
                        boxShadow: isSelected
                          ? `0 18px 40px ${item.color}35`
                          : "0 10px 30px rgba(55, 51, 34, 0.08)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            color: item.color,
                            textTransform: "uppercase",
                            marginBottom: "4px",
                          }}
                        >
                          ✦ HIGHLIGHTED SIGNIFICANCE
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: item.lightBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                          }}
                        >
                          <Icon size={17} />
                        </div>
                        <div>
                          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: item.color, textTransform: "uppercase" }}>
                            RIGHT PART • {item.region}
                          </div>
                          <h4 style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-brand-dark)" }}>
                            {item.name} ({item.sanskrit})
                          </h4>
                        </div>
                      </div>
                      <p style={{ fontSize: "12.5px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                        {item.description}
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}


      </div>

      {/* Responsive Style Tweaks for Mobile Screens */}
      <style jsx global>{`
        @media (min-width: 901px) {
          .mobile-anatomy-header,
          .mobile-anatomy-matrix {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          .desktop-anatomy-overlay {
            display: none !important;
          }
          .mobile-anatomy-header {
            display: block !important;
          }
          .mobile-anatomy-matrix {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .hero-title {
            letter-spacing: 0.08em !important;
            font-size: clamp(28px, 8.5vw, 42px) !important;
          }
          .hero-tagline {
            letter-spacing: 0.07em !important;
            font-size: 13px !important;
          }
          .hero-triad {
            gap: 7px !important;
            font-size: 11px !important;
            letter-spacing: 0.07em !important;
          }
        }
      `}</style>
    </section>
  );
}
