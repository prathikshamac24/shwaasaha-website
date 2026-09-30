"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function WhatWeDoSection() {
  const sessionPhotos = [
    {
      src: "/images/real/chetan-leading-session.jpg",
      alt: "Collective morning yoga session under open skies",
    },
    {
      src: "/images/real/class-arms-raised.jpg",
      alt: "Students breathing and raising arms in morning sunlight",
    },
    {
      src: "/images/real/class-stretch-side.jpg",
      alt: "Gentle spinal and lateral stretching for desk relief",
    },
    {
      src: "/images/real/class-elder-stretch.jpg",
      alt: "Elderly practitioner gently practicing restorative yoga",
    },
    {
      src: "/images/real/chetan-namaskara.jpg",
      alt: "Grounding namaskara arrival at the start of practice",
    },
    {
      src: "/images/real/rooftop-forward-bend.jpg",
      alt: "Practitioners in standing forward fold (Uttanasana) on morning rooftop mats",
    },
    {
      src: "/images/real/group-morning-stretch.jpg",
      alt: "Students stretching upward together in morning sunlight",
    },
    {
      src: "/images/real/community-yoga-day.jpg",
      alt: "SHWAASA: yoga community celebration and collective fellowship",
    },
  ];

  // Duplicate for seamless 100% infinite marquee loop
  const marqueeItems = [...sessionPhotos, ...sessionPhotos];

  return (
    <section
      id="what-we-do"
      className="section"
      style={{
        backgroundColor: "var(--color-bg)",
        borderTop: "1px solid rgba(55, 51, 34, 0.06)",
        borderBottom: "1px solid rgba(55, 51, 34, 0.06)",
        position: "relative",
        paddingTop: "90px",
        paddingBottom: "90px",
        overflow: "hidden",
      }}
    >
      <div className="container-content" style={{ marginBottom: "36px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(55, 51, 34, 0.05)",
              borderRadius: "var(--radius-pill)",
              padding: "5px 16px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: "18px",
            }}
          >
            <Sparkles size={12} style={{ color: "var(--color-stillness)" }} />
            <span>What We Do</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 4.8vw, 50px)",
              color: "var(--color-brand-dark)",
              marginBottom: "14px",
              lineHeight: 1.15,
            }}
          >
            This is what a real session looks like.
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            No fluorescent studio mirrors. No performance anxiety.
            <br />
            Just real people, open-air morning breath, and unhurried guidance.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* ENDLESS FULL-WIDTH PHOTO MARQUEE (Zero clutter / text)    */}
      {/* Continuous smooth infinite horizontal gliding             */}
      {/* ======================================================== */}
      <div className="marquee-track">
        <div className="marquee-inner">
          {marqueeItems.map((photo, idx) => (
            <div
              key={`${photo.src}-${idx}`}
              className="marquee-card"
              style={{
                position: "relative",
                width: "360px",
                height: "250px",
                flexShrink: 0,
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 12px 28px rgba(55, 51, 34, 0.12)",
                border: "1px solid rgba(55, 51, 34, 0.1)",
                backgroundColor: "#FAF7F2",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(55, 51, 34, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(55, 51, 34, 0.12)";
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 270px, 360px"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gentle Bottom Note */}
      <div style={{ textAlign: "center", marginTop: "32px", padding: "0 16px" }}>
        <p
          style={{
            fontSize: "13px",
            color: "var(--color-text-muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Open-air morning sessions • Beginners and elders practicing side by side
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          :global(.marquee-card) {
            width: 270px !important;
            height: 190px !important;
            border-radius: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
