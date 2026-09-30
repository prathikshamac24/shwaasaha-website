"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Quote, CheckCircle2 } from "lucide-react";

export default function RealPracticeSection() {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const photos = [
    {
      src: "/images/real/rooftop-forward-bend.jpg",
      title: "Grounded Movement & Release",
      caption: "Gentle forward bends (Uttanasana) releasing tight hamstrings and lower-back stiffness on the morning rooftop mats.",
    },
    {
      src: "/images/real/group-morning-stretch.jpg",
      title: "Conscious Upward Breath",
      caption: "Students reaching and breathing synchronously under open skies, resetting the desk-bound spine.",
    },
    {
      src: "/images/real/community-yoga-day.jpg",
      title: "Joyful Community Fellowship",
      caption: "An inclusive family of practitioners of all ages united in daily wellness and lasting inner calm.",
    },
  ];

  const testimonials = [
    {
      quote:
        "I sit 10 hours a day in front of multiple screens. I was always intimidated by yoga studios where people folded like pretzels. Chetan made me realize yoga isn't about touching your toes—it's about touching your breath. My chronic neck spasms have vanished, and my mind feels quiet at the end of a chaotic workday.",
      name: "Ananya Ramanathan",
      role: "Lead Systems Architect, 34 yrs",
      city: "Bengaluru",
      highlight: "Tension melted after 3 weeks",
    },
    {
      quote:
        "In clinical medicine, I see stress destroying cardiovascular and metabolic health daily. SHWAASA: taught me the Sanskrit roots of pranayama in a practical manner that fit directly into my pre-rounds routine. It is deeply grounded, compassionate, and completely free of commercial wellness nonsense.",
      name: "Dr. K. Raghavan",
      role: "Internal Medicine Physician, 56 yrs",
      city: "Chennai",
      highlight: "Scientifically & traditionally sound",
    },
    {
      quote:
        "Between managing elderly parents, children, and a home, I had stopped breathing for myself. When Chetan said: 'You simply begin with yourself,' I broke into tears of relief. That one hour on the mat is my sacred anchor every morning. I'm a calmer mother, a calmer partner, and a calmer human.",
      name: "Meera Sundaram",
      role: "Homemaker & Educator, 41 yrs",
      city: "Bengaluru",
      highlight: "A sacred personal sanctuary",
    },
  ];

  return (
    <section id="real-practice" className="section" style={{ position: "relative" }}>
      <div className="container-content">
        
        {/* Header (Exact text requested) */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 48px" }}>
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
              marginBottom: "20px",
            }}
          >
            <Sparkles size={12} style={{ color: "var(--color-breath)" }} />
            <span>Real People. Real Practice.</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4.5vw, 48px)",
              color: "var(--color-brand-dark)",
              marginBottom: "16px",
            }}
          >
            SHWAASA: began with people.
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px 24px",
              fontSize: "18px",
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-secondary)",
            }}
          >
            <span>Real classes.</span>
            <span style={{ color: "var(--color-awareness)" }}>•</span>
            <span>Real practice.</span>
            <span style={{ color: "var(--color-breath)" }}>•</span>
            <span>Real experiences.</span>
          </div>
        </div>

        {/* 3 Real Class Photographs - Strictly Symmetrical */}
        <div className="practice-photos-grid">
          {photos.map((photo, idx) => (
            <div
              key={photo.title}
              onMouseEnter={() => setActivePhoto(idx)}
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                border: "1px solid rgba(55, 51, 34, 0.08)",
                backgroundColor: "#ffffff",
                transition: "all 0.3s ease",
                transform: activePhoto === idx ? "translateY(-4px)" : "none",
              }}
            >
              <div style={{ position: "relative", height: "260px", width: "100%" }}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ padding: "20px" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "20px",
                    color: "var(--color-brand-dark)",
                    marginBottom: "6px",
                  }}
                >
                  {photo.title}
                </h4>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Intro */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(24px, 3.2vw, 30px)",
              fontStyle: "italic",
              color: "var(--color-brand-dark)",
            }}
          >
            “Don’t take our word for it.”
          </p>
          <span style={{ fontSize: "14px", color: "var(--color-text-muted)" }}>
            Genuine experiences from practitioners who began just like you.
          </span>
        </div>

        {/* 3 Strong Testimonials Grid - Strictly Symmetrical */}
        <div className="practice-testimonials-grid">
          {testimonials.map((item) => (
            <div
              key={item.name}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(20px, 4vw, 32px) clamp(16px, 3.5vw, 26px)",
                border: "1px solid rgba(55, 51, 34, 0.08)",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "3px 10px",
                    borderRadius: "var(--radius-pill)",
                    backgroundColor: "var(--color-breath-light)",
                    color: "var(--color-brand-dark)",
                    fontSize: "11px",
                    fontWeight: 600,
                    marginBottom: "16px",
                  }}
                >
                  <CheckCircle2 size={12} style={{ color: "#25d366" }} />
                  <span>{item.highlight}</span>
                </div>

                <Quote
                  size={24}
                  style={{
                    color: "var(--color-awareness)",
                    opacity: 0.8,
                    marginBottom: "10px",
                  }}
                />

                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                    marginBottom: "24px",
                    fontStyle: "normal",
                  }}
                >
                  “{item.quote}”
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(55, 51, 34, 0.06)",
                  paddingTop: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "18px",
                      color: "var(--color-brand-dark)",
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </h4>
                  <p style={{ fontSize: "12.5px", color: "var(--color-text-muted)" }}>
                    {item.role} • {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style jsx>{`
        .practice-photos-grid,
        .practice-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .practice-photos-grid {
          margin-bottom: 68px;
        }
        @media (max-width: 900px) {
          .practice-photos-grid,
          .practice-testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
