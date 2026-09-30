"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Sun, Wind, Feather, Anchor, Heart } from "lucide-react";

export default function PersonArisingSection() {
  const [selectedZone, setSelectedZone] = useState<number>(0);
  const [colorFillPercent, setColorFillPercent] = useState<number>(15);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsColumnRef = useRef<HTMLDivElement>(null);

  const colorMeanings = [
    {
      id: "awareness",
      num: "01",
      name: "Awareness",
      sanskrit: "Surya / Chitta",
      sanskritDevanagari: "चित्त • सूर्य",
      color: "#DFBE91",
      lightBg: "#F7EDE0",
      region: "Head & Crown",
      icon: Sun,
      hotspot: { top: "18%", left: "49%", width: "130px", height: "130px" },
      quote: "Somewhere between all of this, we stop listening to ourselves.",
      meaning:
        "The warm golden ochre represents mental clarity and conscious awareness. In SHWAASA:, you do not practice to empty your mind mechanically; you practice to observe yourself with compassionate light. It clears mental fatigue from long work hours.",
      practicalImpact: "Dissolves cognitive fog, screen exhaustion, and restores mental quiet.",
    },
    {
      id: "breath",
      num: "02",
      name: "Breath",
      sanskrit: "Śvāsa / Prāṇa",
      sanskritDevanagari: "श्वास • प्राण",
      color: "#9CB1B6",
      lightBg: "#E6EEF0",
      region: "Throat & Heart Center",
      icon: Wind,
      hotspot: { top: "37%", left: "53%", width: "140px", height: "140px" },
      quote: "Breathe Into Your True Self.",
      meaning:
        "The muted slate sky represents the breath—the core name of SHWAASA:. Breath is the invisible thread linking physical movement with mental stillness. When your breath lengthens, your heart rate settles and your nervous system downshifts.",
      practicalImpact: "Soothes the sympathetic nervous system and releases stored chest tension.",
    },
    {
      id: "movement",
      num: "03",
      name: "Movement",
      sanskrit: "Āsana / Body",
      sanskritDevanagari: "आसन • देह",
      color: "#A4A07B",
      lightBg: "#EEF0E6",
      region: "Spine & Limbs",
      icon: Feather,
      hotspot: { top: "56%", left: "46%", width: "150px", height: "150px" },
      quote: "You don't need to be flexible. You don't need to know yoga.",
      meaning:
        "The sage olive green represents the living body and organic movement. In SHWAASA:, movement is never aggressive or competitive. It is gentle, restorative, and teaches you to listen to stiffness before it turns into chronic pain.",
      practicalImpact: "Decompresses desk-bound posture, opens tight hips, and frees spinal flow.",
    },
    {
      id: "stillness",
      num: "04",
      name: "Stillness",
      sanskrit: "Sthira / Śānti",
      sanskritDevanagari: "स्थिर • शान्ति",
      color: "#DF975F",
      lightBg: "#FAECE3",
      region: "Seated Base & Root",
      icon: Anchor,
      hotspot: { top: "79%", left: "44%", width: "190px", height: "130px" },
      quote: "The practice begins on the mat. The real change happens in your life.",
      meaning:
        "The warm terracotta clay represents the grounded root. No matter how turbulent work and family life become, this stillness remains anchored deep within you. It is the peace you take off the mat and into your world.",
      practicalImpact: "Creates an unshakable emotional anchor that stays with you off the mat.",
    },
  ];

  // Scroll spy & gradual color fill calculation
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      colorMeanings.forEach((_, idx) => {
        const card = document.getElementById(`arising-card-${idx}`);
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - viewportCenter);

        if (rect.top < window.innerHeight * 0.82 && rect.bottom > window.innerHeight * 0.15) {
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });

      setSelectedZone(closestIdx);

      // Continuous Color Fill Calculation:
      // Track how far the cards column has scrolled past viewport center
      if (cardsColumnRef.current) {
        const cardsRect = cardsColumnRef.current.getBoundingClientRect();
        const startOffset = window.innerHeight * 0.75;
        const totalHeight = cardsRect.height;
        const scrolledDistance = startOffset - cardsRect.top;
        const rawProgress = Math.max(0, Math.min(1, scrolledDistance / totalHeight));

        // Gradual progression:
        // When entering: 10% (pure line art)
        // Card 1 (Awareness): ~30%
        // Card 2 (Breath): ~55%
        // Card 3 (Movement): ~78%
        // Card 4 (Stillness): 100%
        const fill = Math.round(10 + rawProgress * 90);
        setColorFillPercent(Math.min(100, Math.max(10, fill)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [colorMeanings]);

  const scrollToCard = (idx: number) => {
    setSelectedZone(idx);
    const card = document.getElementById(`arising-card-${idx}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const activeData = colorMeanings[selectedZone];

  return (
    <section
      id="person-arising"
      className="section"
      ref={sectionRef}
      style={{
        backgroundColor: "var(--color-bg)",
        position: "relative",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
      }}
    >
      <div className="container-content">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto clamp(40px, 6vw, 64px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(55, 51, 34, 0.05)",
              borderRadius: "var(--radius-pill)",
              padding: "4px 14px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: "18px",
            }}
          >
            <Sparkles size={12} style={{ color: "var(--color-awareness)" }} />
            <span>The Human Being Arising</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4.5vw, 48px)",
              color: "var(--color-brand-dark)",
              marginBottom: "14px",
              lineHeight: 1.15,
            }}
          >
            The Four Colors of Your Practice
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2.2vw, 17px)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            The four petals in the SHWAASA: emblem are not decorative.
            They contour the human body arising into peace—each color representing a vital dimension of your return to self.
          </p>
        </div>

        {/* ======================================================== */}
        {/* STAGED STICKY LAYOUT:                                    */}
        {/* Left: Stagnant, Breathing Artwork with Color Wash        */}
        {/* Right: Scrolling Story Cards                             */}
        {/* ======================================================== */}
        <div className="person-arising-layout">
          {/* Column 1: Stagnant, Breathing Artwork */}
          <div className="person-arising-sticky-art">
            <div
              className="person-arising-image-frame"
              style={{
                borderColor: `${activeData.color}45`,
                boxShadow: `0 24px 60px ${activeData.color}25, 0 8px 24px rgba(55, 51, 34, 0.08)`,
              }}
            >
              {/* Lifelike Breathing Wrapper */}
              <div className="breathing-artwork-wrap">
                {/* 1. Base Layer: Pure Hand-Drawn Ink Line Art (Grayscale) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    filter: "grayscale(100%) contrast(1.18) brightness(1.02)",
                    opacity: 0.88,
                  }}
                >
                  <Image
                    src="/images/person-arising.jpg"
                    alt="Ink line art of the woman arising in yogic meditation"
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    priority
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "16px",
                    }}
                  />
                </div>

                {/* 2. Color Fill Layer: Revealed Gradually as You Scroll Down */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    clipPath: `inset(0 0 ${Math.max(0, 100 - colorFillPercent)}% 0)`,
                    WebkitClipPath: `inset(0 0 ${Math.max(0, 100 - colorFillPercent)}% 0)`,
                    transition: "clip-path 0.4s cubic-bezier(0.16, 1, 0.3, 1), -webkit-clip-path 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <Image
                    src="/images/person-arising.jpg"
                    alt="The woman arising with sacred watercolor pigments filling her form"
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    priority
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "16px",
                    }}
                  />
                </div>

                {/* 3. Subtle Watercolor Diffusion Wave at the fill edge */}
                {colorFillPercent < 98 && (
                  <div
                    style={{
                      position: "absolute",
                      top: `${colorFillPercent}%`,
                      left: "15%",
                      right: "15%",
                      height: "24px",
                      transform: "translateY(-50%)",
                      background: `radial-gradient(ellipse at center, ${activeData.color}90 0%, ${activeData.color}30 50%, transparent 80%)`,
                      filter: "blur(8px)",
                      pointerEvents: "none",
                      transition: "top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                )}

                {/* 4. Active Zone Glowing Prana Hotspot */}
                {colorMeanings.map((item, idx) => (
                  <div
                    key={item.id}
                    style={{
                      position: "absolute",
                      top: item.hotspot.top,
                      left: item.hotspot.left,
                      width: item.hotspot.width,
                      height: item.hotspot.height,
                      transform: "translate(-50%, -50%)",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${item.color}85 0%, ${item.color}25 50%, transparent 75%)`,
                      pointerEvents: "none",
                      opacity: selectedZone === idx ? 1 : 0,
                      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      filter: "blur(12px)",
                    }}
                  />
                ))}

                {/* 5. Heartbeat / Prana Breath Pulse Wave */}
                <div className="heart-prana-pulse" />
              </div>

              {/* Top Left: Devanagari Sacred Seal */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 12px",
                  border: `1px solid ${activeData.color}70`,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: activeData.color,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.3s ease",
                  zIndex: 2,
                }}
              >
                <span>{activeData.sanskritDevanagari}</span>
              </div>

              {/* Top Right: Gentle Breathing Indicator */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 10px",
                  border: "1px solid rgba(55, 51, 34, 0.1)",
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  zIndex: 2,
                }}
              >
                <span className="breathing-dot" style={{ backgroundColor: activeData.color }} />
                <span>Prāṇa Breath</span>
              </div>


            </div>

            {/* Explanatory Caption below artwork */}
            <p
              style={{
                fontSize: "12.5px",
                color: "var(--color-text-muted)",
                marginTop: "14px",
                textAlign: "center",
                maxWidth: "380px",
                lineHeight: 1.5,
              }}
            >
              The human contour infused with Awareness (crown), Breath (heart), Movement (spine), and Stillness (base).
            </p>
          </div>

          {/* Column 2: Scrolling Story Cards */}
          <div className="person-arising-scroll-cards" ref={cardsColumnRef}>
            {colorMeanings.map((item, idx) => {
              const isSelected = selectedZone === idx;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={`arising-card-${idx}`}
                  data-zone-index={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`arising-story-card ${isSelected ? "active" : ""}`}
                  style={{
                    borderLeft: `5px solid ${item.color}`,
                    borderColor: isSelected ? `${item.color}` : "rgba(55, 51, 34, 0.1)",
                    borderLeftColor: item.color,
                    backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                  }}
                >
                  {/* Card Header */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "50%",
                            backgroundColor: item.lightBg,
                            color: item.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 4px 12px ${item.color}35`,
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: item.color,
                            }}
                          >
                            PART {item.num} • {item.region}
                          </div>
                          <h3
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "clamp(22px, 3.5vw, 26px)",
                              color: "var(--color-brand-dark)",
                              lineHeight: 1.2,
                            }}
                          >
                            {item.name}{" "}
                            <span style={{ fontSize: "17px", fontWeight: 400, color: "var(--color-text-muted)" }}>
                              ({item.sanskrit})
                            </span>
                          </h3>
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: "12px",
                          fontFamily: "var(--font-serif)",
                          color: "var(--color-text-muted)",
                          fontStyle: "italic",
                        }}
                      >
                        {item.sanskritDevanagari}
                      </span>
                    </div>

                    {/* Meaning Narrative */}
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.7,
                        color: "var(--color-text-secondary)",
                        marginBottom: "20px",
                      }}
                    >
                      {item.meaning}
                    </p>

                    {/* Quote Highlight */}
                    <div
                      style={{
                        backgroundColor: item.lightBg,
                        borderRadius: "var(--radius-sm)",
                        padding: "12px 16px",
                        marginBottom: "16px",
                        borderLeft: `3px solid ${item.color}`,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "14.5px",
                          fontStyle: "italic",
                          color: "var(--color-brand-dark)",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        “{item.quote}”
                      </p>
                    </div>
                  </div>

                  {/* Practical Body Impact */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(55, 51, 34, 0.08)",
                      paddingTop: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "12.5px",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    <span>
                      <strong style={{ color: "var(--color-brand-dark)" }}>Practice Effect: </strong>
                      {item.practicalImpact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scoped CSS for Breathing Artwork, Gradual Color Fill & Scrolling Layout */}
      <style jsx>{`
        .person-arising-layout {
          display: grid;
          grid-template-columns: minmax(320px, 480px) 1fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
          position: relative;
        }

        .person-arising-sticky-art {
          position: sticky;
          top: clamp(80px, 12vh, 110px);
          align-self: start;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .person-arising-image-frame {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: clamp(480px, 72vh, 640px);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: #FAF7F2;
          border: 1.5px solid rgba(55, 51, 34, 0.12);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        /* 1. Meditative Yogic Breathing Animation (7-second natural inhale & exhale) */
        .breathing-artwork-wrap {
          width: 100%;
          height: 100%;
          position: relative;
          transform-origin: center 42%; /* Centered around the chest/heart */
          animation: yogicPranaBreath 7s ease-in-out infinite;
        }

        @keyframes yogicPranaBreath {
          0% {
            transform: scale(1) translateY(0);
          }
          40% {
            /* Inhale: gentle expansion as chest and spine rise */
            transform: scale(1.02) translateY(-3px);
          }
          50% {
            /* Slight serene pause at crest of breath */
            transform: scale(1.022) translateY(-3px);
          }
          90% {
            /* Slow, restorative release */
            transform: scale(1) translateY(0);
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }

        /* Breathing pulse dot in top tag */
        .breathing-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          animation: pulseDot 3.5s ease-in-out infinite;
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(0.85);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        /* Heart/Chest Prana Pulse */
        .heart-prana-pulse {
          position: absolute;
          top: 38%;
          left: 52%;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(156, 177, 182, 0.35) 0%, transparent 70%);
          filter: blur(8px);
          pointer-events: none;
          animation: heartBreath 7s ease-in-out infinite;
        }

        @keyframes heartBreath {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.2;
          }
          45% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.7;
          }
        }

        .person-arising-scroll-cards {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 6vh, 60px);
          padding-bottom: clamp(40px, 8vh, 80px);
        }

        .arising-story-card {
          min-height: clamp(240px, 32vh, 320px);
          border-radius: var(--radius-lg);
          padding: clamp(24px, 4vw, 36px) clamp(20px, 3.5vw, 32px);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(55, 51, 34, 0.08);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .arising-story-card.active {
          box-shadow: 0 16px 40px rgba(55, 51, 34, 0.14);
          transform: translateY(-4px);
        }

        @media (max-width: 860px) {
          .person-arising-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .person-arising-sticky-art {
            position: sticky;
            top: 60px;
            z-index: 15;
            background-color: var(--color-bg);
            padding-bottom: 12px;
          }
          .person-arising-image-frame {
            max-width: 360px;
            height: clamp(240px, 42vw, 300px);
          }
        }
      `}</style>
    </section>
  );
}
