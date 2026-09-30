"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function YogaMatGraphic() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-driven unroll progress (0% to 100%)
  const [unrollProgress, setUnrollProgress] = useState<number>(15);
  const targetProgressRef = useRef<number>(15);
  const currentProgressRef = useRef<number>(15);

  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section starts unrolling when entering the lower viewport
      // Reaches 100% when centered in viewport
      const startPoint = windowHeight * 0.88;
      const endPoint = windowHeight * 0.22;
      const totalDistance = startPoint - endPoint;

      const progress = (startPoint - rect.top) / totalDistance;
      const clamped = Math.max(0, Math.min(1, progress));

      // Ease the unroll progress smoothly: 12% min to 100% max
      const targetPercent = 12 + clamped * 88;
      targetProgressRef.current = targetPercent;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Smooth lerp loop for liquid 60/120fps motion
    const updateLerp = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.05) {
        currentProgressRef.current += diff * 0.12;
        setUnrollProgress(currentProgressRef.current);
      }
      animId = requestAnimationFrame(updateLerp);
    };

    animId = requestAnimationFrame(updateLerp);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Text and watermark reveal opacity as mat unrolls
  const contentOpacity = Math.max(0, Math.min(1, (unrollProgress - 35) / 50));

  return (
    <section
      id="yoga-mat"
      ref={sectionRef}
      className="section"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderTop: "1px solid rgba(55, 51, 34, 0.06)",
        borderBottom: "1px solid rgba(55, 51, 34, 0.06)",
        padding: "clamp(50px, 7vw, 100px) clamp(14px, 4vw, 24px)",
        overflow: "hidden",
      }}
    >
      <div className="container-content">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto clamp(32px, 5vw, 48px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(55, 51, 34, 0.08)",
              borderRadius: "var(--radius-pill)",
              padding: "5px 16px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: "16px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <Sparkles size={13} style={{ color: "var(--color-movement)" }} />
            <span>The Daily Mat Practice</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4.5vw, 50px)",
              color: "var(--color-brand-dark)",
              marginBottom: "12px",
              lineHeight: 1.15,
            }}
          >
            Unrolling Your Sacred Space
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            The moment your mat opens on the floor, you carve out a quiet sanctuary in a noisy world.
          </p>
        </div>

        {/* ======================================================== */}
        {/* FULLY SCROLL-ANIMATED YOGA MAT ROLLOUT CANVAS            */}
        {/* Zero manual controls, zero step cards                    */}
        {/* ======================================================== */}
        <div
          style={{
            position: "relative",
            minHeight: "clamp(190px, 32vw, 260px)",
            backgroundColor: "#EDE4D6",
            backgroundImage: "radial-gradient(#D5C7B4 1.2px, transparent 1.2px)",
            backgroundSize: "20px 20px",
            borderRadius: "22px",
            padding: "clamp(16px, 3vw, 32px) clamp(12px, 2.5vw, 28px)",
            boxShadow:
              "inset 0 2px 14px rgba(55, 51, 34, 0.09), 0 10px 30px rgba(55, 51, 34, 0.04)",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            border: "1px solid rgba(55, 51, 34, 0.08)",
          }}
        >
          {/* Subtle natural wood plank lines in background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.12,
              background:
                "repeating-linear-gradient(90deg, #7A5328 0, #7A5328 1px, transparent 0, transparent 48px)",
              pointerEvents: "none",
            }}
          />

          {/* THE UNROLLING YOGA MAT */}
          <div
            style={{
              position: "relative",
              minHeight: "clamp(150px, 24vw, 190px)",
              width: `${unrollProgress}%`,
              minWidth: "75px",
              maxWidth: "100%",
              background:
                "linear-gradient(135deg, #DFBE91 0%, #D4AE7C 50%, #C89E68 100%)",
              borderRadius: "16px",
              boxShadow:
                "0 20px 48px rgba(55, 51, 34, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(14px, 2.5vw, 24px) clamp(16px, 3vw, 36px)",
              overflow: "hidden",
              willChange: "width",
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Fine natural mat linen weave pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.07) 0, rgba(255, 255, 255, 0.07) 2px, transparent 0, transparent 6px)",
                pointerEvents: "none",
              }}
            />

            {/* ==================================================== */}
            {/* 1. SACRED LOGO WATERMARK ON THE BACK OF THE MAT      */}
            {/* Purely circular, transparent background, NOT square! */}
            {/* ==================================================== */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "clamp(100px, 18vw, 150px)",
                height: "clamp(100px, 18vw, 150px)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: contentOpacity * 0.32,
                pointerEvents: "none",
                transition: "opacity 0.4s ease",
              }}
            >
              <Image
                src="/logo-emblem-clean.png"
                alt="SHWAASA: Sacred Quad-Petal Watermark"
                width={140}
                height={140}
                style={{
                  objectFit: "contain",
                  borderRadius: "50%", // Pure circular shape, zero square edges
                }}
              />
            </div>

            {/* ==================================================== */}
            {/* 2. THE ONLY QUOTE ON THE MAT                         */}
            {/* "The practice begins on the mat.                     */}
            {/*  The real change happens in your life."              */}
            {/* ==================================================== */}
            <div
              style={{
                position: "relative",
                zIndex: 3,
                textAlign: "center",
                maxWidth: "680px",
                opacity: contentOpacity,
                transform: `scale(${0.92 + contentOpacity * 0.08})`,
                transition: "opacity 0.4s ease, transform 0.4s ease",
                pointerEvents: "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(15px, 2.6vw, 28px)",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#373322",
                  lineHeight: 1.4,
                  letterSpacing: "0.01em",
                  textShadow: "0 1px 2px rgba(255, 255, 255, 0.4)",
                }}
              >
                “The practice begins on the mat.
                <br />
                The real change happens in your life.”
              </p>
            </div>

            {/* ==================================================== */}
            {/* 3D ROLLED CYLINDER EDGE (The rolling curl)           */}
            {/* ==================================================== */}
            <div
              style={{
                position: "absolute",
                right: "-2px",
                top: "-8px",
                bottom: "-8px",
                width: "30px",
                background:
                  "linear-gradient(90deg, #A8824E 0%, #D4AE7C 35%, #7E5F33 100%)",
                borderRadius: "15px",
                boxShadow:
                  "5px 0 18px rgba(0, 0, 0, 0.32), inset 0 2px 4px rgba(255, 255, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
              title="Rolling mat cylinder edge"
            >
              <div
                style={{
                  width: "4px",
                  height: "80px",
                  borderRadius: "2px",
                  backgroundColor: "rgba(255, 255, 255, 0.35)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
