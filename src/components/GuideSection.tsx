"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Sparkles, Award, HeartHandshake, ArrowRight, ShieldCheck } from "lucide-react";

interface GuideProps {
  onOpenTalk: (context?: string) => void;
}

export default function GuideSection({ onOpenTalk }: GuideProps) {
  return (
    <section
      id="the-guide"
      className="section"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderTop: "1px solid rgba(55, 51, 34, 0.06)",
        borderBottom: "1px solid rgba(55, 51, 34, 0.06)",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        position: "relative",
      }}
    >
      <div className="container-content">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto clamp(36px, 6vw, 60px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(55, 51, 34, 0.08)",
              borderRadius: "var(--radius-pill)",
              padding: "5px 18px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: "16px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <Sparkles size={12} style={{ color: "var(--color-stillness)" }} />
            <span>Meet Your Mentors</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(30px, 4.8vw, 48px)",
              color: "var(--color-brand-dark)",
              marginBottom: "14px",
              lineHeight: 1.15,
            }}
          >
            Guided by Decades of Authentic Practice
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2.2vw, 17px)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            You are not learning from an algorithm, a workout tracker, or a fast-paced fitness gym.
            <br />
            You are guided by seasoned practitioners devoted to your long-term health, breath, and inner peace.
          </p>
        </div>

        {/* ======================================================== */}
        {/* RECTANGLE ALTERNATING EDITORIAL CARDS                     */}
        {/* 1. Chethan Yadav: Photo on Left, Explanation on Right     */}
        {/* 2. Indira Yadav: Explanation on Left, Photo on Right      */}
        {/* ======================================================== */}
        <div className="mentors-stack">
          {/* ---------------------------------------------------- */}
          {/* Card 1: Chethan Yadav (Photo Left, Text Right)       */}
          {/* ---------------------------------------------------- */}
          <div className="mentor-card mentor-card-chethan">
            {/* Photo Column */}
            <div className="mentor-photo-wrapper">
              <div className="mentor-image-container">
                <Image
                  src="/images/chethan-portrait.jpg"
                  alt="Chethan Yadav — Lead Guide at SHWAASA:"
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 420px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 12%",
                  }}
                />

                {/* Subtle vignette scrim at the bottom for badge legibility */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(20, 20, 15, 0.65) 0%, rgba(20, 20, 15, 0.15) 30%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Badge Overlay placed at bottom to keep head completely clear */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(10px)",
                    padding: "6px 16px",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-dark)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.18)",
                    zIndex: 2,
                  }}
                >
                  <Award size={13} style={{ color: "var(--color-awareness)" }} />
                  <span>Lead Guide</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="mentor-content-column">
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-awareness)",
                    marginBottom: "8px",
                  }}
                >
                  <span>वेदान्त • योग • संस्कृतम्</span>
                  <span style={{ opacity: 0.5 }}>•</span>
                  <span>Traditional Lineage</span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(28px, 4vw, 38px)",
                    color: "var(--color-brand-dark)",
                    marginBottom: "4px",
                    lineHeight: 1.15,
                  }}
                >
                  Chethan Yadav
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginBottom: "18px",
                  }}
                >
                  Lead Guide • 12+ Years of Learning & Teaching
                </p>

                {/* Quote Callout */}
                <div
                  style={{
                    borderLeft: "3px solid var(--color-awareness)",
                    backgroundColor: "var(--color-awareness-light)",
                    borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                    padding: "14px 20px",
                    marginBottom: "20px",
                  }}
                >
                  <blockquote
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(15px, 2.2vw, 17px)",
                      lineHeight: 1.55,
                      color: "var(--color-brand-dark)",
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    “Yoga is not something I want people to simply practise. I want them to experience what it can reveal about themselves.”
                  </blockquote>
                </div>

                {/* Bio Description */}
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                    marginBottom: "24px",
                  }}
                >
                  With over 12 years of deep study rooted in authentic Indian knowledge systems, Chethan specializes across Yoga, Vedanta, and traditional Sanskrit. He translates profound scriptural wisdom into practical, compassionate daily practice tailored for modern lifestyles, desk-bound strain, and cognitive fatigue.
                </p>

                {/* Guidance Areas */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "28px",
                  }}
                >
                  {["Mindful Breathwork", "Sanskrit & Philosophy", "Body Awareness", "Desk-Stress Relief"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "rgba(55, 51, 34, 0.05)",
                        padding: "6px 14px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--color-brand-dark)",
                        border: "1px solid rgba(55, 51, 34, 0.08)",
                      }}
                    >
                      ✦ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Action */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", paddingTop: "8px" }}>
                <button
                  onClick={() => onOpenTalk("Guide Section: Talk to Chethan Yadav")}
                  className="btn btn-primary"
                  style={{
                    padding: "14px 30px",
                    fontSize: "13.5px",
                    letterSpacing: "0.07em",
                    boxShadow: "0 6px 20px rgba(55, 51, 34, 0.22)",
                  }}
                >
                  <span>CONNECT WITH CHETHAN</span>
                  <ArrowRight size={15} style={{ color: "var(--color-awareness)" }} />
                </button>
                <span style={{ fontSize: "12.5px", color: "var(--color-text-muted)" }}>
                  Personal 1:1 guidance
                </span>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* Card 2: Indira Yadav (Text Left, Photo Right)        */}
          {/* ---------------------------------------------------- */}
          <div className="mentor-card mentor-card-indira">
            {/* Content Column (Left on Desktop) */}
            <div className="mentor-content-column">
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-movement)",
                    marginBottom: "8px",
                  }}
                >
                  <span>हठयोग • प्राणायाम • आरोग्यम्</span>
                  <span style={{ opacity: 0.5 }}>•</span>
                  <span>Decades of Guidance</span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(28px, 4vw, 38px)",
                    color: "var(--color-brand-dark)",
                    marginBottom: "4px",
                    lineHeight: 1.15,
                  }}
                >
                  Indira Yadav
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginBottom: "18px",
                  }}
                >
                  Senior Acharya & Master Teacher • Decades of Devoted Practice
                </p>

                {/* Quote Callout */}
                <div
                  style={{
                    borderLeft: "3px solid var(--color-movement)",
                    backgroundColor: "var(--color-movement-light)",
                    borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                    padding: "14px 20px",
                    marginBottom: "20px",
                  }}
                >
                  <blockquote
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(15px, 2.2vw, 17px)",
                      lineHeight: 1.55,
                      color: "var(--color-brand-dark)",
                      fontStyle: "italic",
                      margin: 0,
                    }}
                  >
                    “Yoga is not an ambition to conquer postures; it is a gentle return to peace that transforms how you live every single day.”
                  </blockquote>
                </div>

                {/* Bio Description */}
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--color-text-secondary)",
                    marginBottom: "24px",
                  }}
                >
                  Practicing yoga for decades, Indira Yadav has guided and transformed the lives of thousands of students across all walks of life—elders, homemakers, working professionals, and beginners. Her deeply nurturing, compassionate presence teaches you to listen to your body, dissolve chronic stiffness, and experience lasting vitality through authentic Indian wisdom.
                </p>

                {/* Guidance Areas */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "28px",
                  }}
                >
                  {["Traditional Hatha", "Restorative Alignment", "Pranayama for Women & Elders", "Lifelong Vitality"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: "rgba(55, 51, 34, 0.05)",
                        padding: "6px 14px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--color-brand-dark)",
                        border: "1px solid rgba(55, 51, 34, 0.08)",
                      }}
                    >
                      ✦ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Action */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", paddingTop: "8px" }}>
                <button
                  onClick={() => onOpenTalk("Guide Section: Talk to Indira Yadav")}
                  className="btn btn-primary"
                  style={{
                    padding: "14px 30px",
                    fontSize: "13.5px",
                    letterSpacing: "0.07em",
                    boxShadow: "0 6px 20px rgba(55, 51, 34, 0.22)",
                  }}
                >
                  <span>CONNECT WITH INDIRA YADAV</span>
                  <ArrowRight size={15} style={{ color: "var(--color-movement)" }} />
                </button>
                <span style={{ fontSize: "12.5px", color: "var(--color-text-muted)" }}>
                  Gentle mentorship & guidance
                </span>
              </div>
            </div>

            {/* Photo Column (Right on Desktop, perfectly preserving Indira mam's head, hair, and bindi) */}
            <div className="mentor-photo-wrapper">
              <div className="mentor-image-container">
                <Image
                  src="/images/mentor-female.jpg"
                  alt="Indira Yadav — Senior Acharya and Master Teacher at SHWAASA:"
                  fill
                  priority
                  sizes="(max-width: 860px) 100vw, 420px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 0%", // Top-aligned: preserves 100% of mam's head, hair, vermillion, and bindi with zero cropping
                  }}
                />

                {/* Subtle vignette scrim at the bottom for badge legibility */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(20, 20, 15, 0.65) 0%, rgba(20, 20, 15, 0.15) 30%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Badge Overlay placed at bottom to keep head completely clear */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(10px)",
                    padding: "6px 16px",
                    borderRadius: "var(--radius-pill)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-dark)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.18)",
                    zIndex: 2,
                  }}
                >
                  <Award size={13} style={{ color: "var(--color-movement)" }} />
                  <span>Master Teacher</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Bottom Assurance Pill */}
        <div
          style={{
            marginTop: "clamp(36px, 6vw, 56px)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 28px",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "#ffffff",
              border: "1px solid rgba(55, 51, 34, 0.08)",
              fontSize: "13.5px",
              color: "var(--color-text-secondary)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <HeartHandshake size={16} style={{ color: "var(--color-breath)" }} />
            <span>You learn directly from Chethan Yadav & Indira Yadav • Authentic human mentorship</span>
          </div>
        </div>
      </div>

      {/* Scoped Styling for Alternating Rectangular Mentor Cards */}
      <style jsx>{`
        .mentors-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 5vw, 48px);
          max-width: 1100px;
          margin: 0 auto;
        }

        .mentor-card {
          background-color: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(55, 51, 34, 0.09);
          box-shadow: 0 10px 30px rgba(55, 51, 34, 0.06);
          overflow: hidden;
          display: grid;
          align-items: stretch;
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.35s ease;
        }

        .mentor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(55, 51, 34, 0.1);
        }

        /* Desktop: 2-column alternating grid */
        .mentor-card-chethan {
          grid-template-columns: minmax(320px, 400px) 1fr;
        }

        .mentor-card-indira {
          grid-template-columns: 1fr minmax(320px, 400px);
        }

        .mentor-photo-wrapper {
          position: relative;
          width: 100%;
          min-height: 480px;
          height: 100%;
          background-color: #eadecd;
        }

        .mentor-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 480px;
        }

        .mentor-content-column {
          padding: clamp(32px, 4.5vw, 52px) clamp(28px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        /* Tablet & Mobile Responsiveness (< 860px) */
        @media (max-width: 860px) {
          .mentor-card-chethan,
          .mentor-card-indira {
            grid-template-columns: 1fr;
          }

          /* On mobile, stack photo on top for both cards */
          .mentor-card-indira .mentor-photo-wrapper {
            order: -1;
          }

          .mentor-photo-wrapper,
          .mentor-image-container {
            min-height: unset;
            height: clamp(340px, 80vw, 440px);
          }

          .mentor-content-column {
            padding: clamp(24px, 5vw, 36px) clamp(20px, 4vw, 28px);
          }
        }
      `}</style>
    </section>
  );
}
