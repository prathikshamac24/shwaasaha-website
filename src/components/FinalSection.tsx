"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Phone, Mail, MapPin, Clock, ArrowUpRight, Calendar, Compass, Shield } from "lucide-react";

interface FinalProps {
  onOpenTalk: (context?: string) => void;
}

export default function FinalSection({ onOpenTalk }: FinalProps) {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#16140F",
        color: "#FAF7F2",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(223, 190, 145, 0.18)",
      }}
    >
      {/* Ambient background glow & radial warmth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(223, 190, 145, 0.08) 0%, transparent 72%)",
          pointerEvents: "none",
        }}
      />

      {/* ======================================================== */}
      {/* 1. ARCHITECTURAL PRE-FOOTER: THE MOMENT TO BEGIN          */}
      {/* ======================================================== */}
      <div
        style={{
          paddingTop: "clamp(72px, 9vw, 110px)",
          paddingBottom: "clamp(60px, 8vw, 90px)",
          position: "relative",
          zIndex: 2,
          borderBottom: "1px solid rgba(250, 247, 242, 0.08)",
        }}
      >
        <div className="container-content" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          {/* Sacred Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(223, 190, 145, 0.1)",
              border: "1px solid rgba(223, 190, 145, 0.28)",
              borderRadius: "var(--radius-pill)",
              padding: "6px 20px",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "var(--color-awareness)",
              marginBottom: "24px",
            }}
          >
            <Sparkles size={13} />
            <span>The Mat Is Waiting For You</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5.5vw, 56px)",
              color: "#FAF7F2",
              marginBottom: "18px",
              lineHeight: 1.15,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Maybe this is the moment to begin.
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2.2vw, 17.5px)",
              color: "rgba(250, 247, 242, 0.75)",
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 auto 38px",
            }}
          >
            You don’t have to become someone else to practise yoga. No acrobatics, no extreme flexibility, no expectations. You simply begin with your breath.
          </p>

          {/* Proper High-End Luxury CTA */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
            <button
              onClick={() => onOpenTalk("Final Section Pre-Footer CTA")}
              className="btn btn-luxury-cta"
              style={{
                backgroundColor: "#FAF7F2",
                color: "#16140F",
                padding: "18px 46px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.09em",
                borderRadius: "var(--radius-pill)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.45)",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(223, 190, 145, 0.35)";
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.45)";
                e.currentTarget.style.backgroundColor = "#FAF7F2";
              }}
            >
              <span>BEGIN YOUR JOURNEY WITH SHWAASA:</span>
              <ArrowRight size={17} style={{ color: "#16140F" }} />
            </button>
          </div>

          {/* 4 Rhythmic Cadence Words */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "14px 28px",
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(20px, 3.2vw, 25px)",
              color: "rgba(250, 247, 242, 0.35)",
              letterSpacing: "0.06em",
            }}
          >
            <span style={{ color: "var(--color-awareness)" }}>Breathe.</span>
            <span>•</span>
            <span style={{ color: "var(--color-breath)" }}>Pause.</span>
            <span>•</span>
            <span style={{ color: "var(--color-movement)" }}>Listen.</span>
            <span>•</span>
            <span style={{ color: "#FAF7F2", fontWeight: 600 }}>Begin.</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. STRUCTURED CONTACT & ENROLLMENT SHOWCASE               */}
      {/* Three distinct, elegant architectural cards              */}
      {/* ======================================================== */}
      <div
        style={{
          paddingTop: "clamp(54px, 7vw, 76px)",
          paddingBottom: "clamp(54px, 7vw, 76px)",
          position: "relative",
          zIndex: 2,
          borderBottom: "1px solid rgba(250, 247, 242, 0.08)",
        }}
      >
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-awareness)",
                marginBottom: "8px",
              }}
            >
              Direct Access & Communications
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(24px, 3.6vw, 34px)",
                color: "#FAF7F2",
                fontWeight: 400,
              }}
            >
              Reach Our Lead Teachers Directly
            </h3>
          </div>

          <div
            className="footer-contact-matrix"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "28px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >

            {/* Card B: Official Correspondence (Email) */}
            <div
              className="footer-card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(250, 247, 242, 0.1)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(139, 168, 136, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-breath)",
                    marginBottom: "18px",
                  }}
                >
                  <Mail size={20} />
                </div>

                <div
                  style={{
                    fontSize: "11.5px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-breath)",
                    marginBottom: "6px",
                  }}
                >
                  Official Email
                </div>

                <a
                  href="mailto:shwaasaha@gmail.com"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#FAF7F2",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "8px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-breath)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FAF7F2")}
                >
                  shwaasaha@gmail.com
                </a>

                <p style={{ fontSize: "13.5px", color: "rgba(250, 247, 242, 0.65)", lineHeight: 1.6 }}>
                  Inquiries regarding corporate sessions, private therapeutic consultations, and batch enrollment.
                </p>
              </div>

              <a
                href="mailto:shwaasaha@gmail.com"
                className="btn"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#FAF7F2",
                  border: "1px solid rgba(250, 247, 242, 0.15)",
                  padding: "12px 20px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(139, 168, 136, 0.25)";
                  e.currentTarget.style.borderColor = "var(--color-breath)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(250, 247, 242, 0.15)";
                }}
              >
                <span>SEND AN EMAIL</span>
                <ArrowRight size={14} style={{ color: "var(--color-breath)" }} />
              </a>
            </div>

            {/* Card C: Online Batch & Mentorship */}
            <div
              className="footer-card"
              style={{
                backgroundColor: "rgba(223, 190, 145, 0.06)",
                border: "1px solid rgba(223, 190, 145, 0.24)",
                borderRadius: "var(--radius-lg)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
                transition: "all 0.3s ease",
                position: "relative",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(223, 190, 145, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-awareness)",
                    }}
                  >
                    <Calendar size={20} />
                  </div>

                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      backgroundColor: "rgba(223, 190, 145, 0.2)",
                      border: "1px solid rgba(223, 190, 145, 0.4)",
                      color: "var(--color-awareness)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-pill)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Early Bird ₹999
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "11.5px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-awareness)",
                    marginBottom: "6px",
                  }}
                >
                  Live Interactive Cohort
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#FAF7F2",
                    marginBottom: "8px",
                  }}
                >
                  Starting November 1
                </div>

                <p style={{ fontSize: "13.5px", color: "rgba(250, 247, 242, 0.7)", lineHeight: 1.6 }}>
                  Morning 6–7 AM • Evening 5:15–6:15 PM & 6:30–7:30 PM. Led by Chethan Yadav & Indira Yadav.
                </p>
              </div>

              <button
                onClick={() => onOpenTalk("Footer Online Batch Card")}
                className="btn"
                style={{
                  backgroundColor: "var(--color-awareness)",
                  color: "#16140F",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 16px rgba(223, 190, 145, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(223, 190, 145, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(223, 190, 145, 0.2)";
                }}
              >
                <span>RESERVE ONLINE SLOT</span>
                <ArrowRight size={14} style={{ color: "#16140F" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. STRUCTURED SITEMAP DIRECTORY (4 BALANCED COLUMNS)      */}
      {/* ======================================================== */}
      <div
        style={{
          paddingTop: "clamp(54px, 7vw, 70px)",
          paddingBottom: "clamp(46px, 6vw, 60px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="container-wide">
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr 1.1fr 1.3fr",
              gap: "clamp(32px, 5vw, 56px)",
              alignItems: "start",
            }}
          >
            {/* Column 1: Brandmark & Lineage */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    position: "relative",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: "#FAF7F2",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/logo-emblem-clean.png"
                    alt="SHWAASA: Mandala Emblem"
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "22px",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      color: "#FAF7F2",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    SHWΛΛSΛ:
                  </span>
                  <span
                    style={{
                      fontSize: "9.5px",
                      letterSpacing: "0.16em",
                      color: "var(--color-awareness)",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    Traditional Lineage Wisdom
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.7,
                  color: "rgba(250, 247, 242, 0.65)",
                  maxWidth: "320px",
                }}
              >
                A sanctuary dedicated to authentic Indian yoga, pranayama, and mindful embodiment. Guided by teachers Chethan Yadav and Indira Yadav.
              </p>

              <div
                style={{
                  padding: "12px 16px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(250, 247, 242, 0.08)",
                  borderRadius: "var(--radius-sm)",
                  maxWidth: "320px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "14px",
                    color: "rgba(250, 247, 242, 0.8)",
                    fontStyle: "italic",
                    marginBottom: "3px",
                  }}
                >
                  “तस्मिन सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः”
                </div>
                <div style={{ fontSize: "11px", color: "rgba(250, 247, 242, 0.45)" }}>
                  Patañjali Yoga Sūtra 2.49 • Conscious Regulation of Prana
                </div>
              </div>
            </div>

            {/* Column 2: The Practice Directory */}
            <div>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-awareness)",
                  marginBottom: "20px",
                }}
              >
                The Practice
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
                {[
                  { label: "The Connection", href: "#connection" },
                  { label: "Why SHWAASA:", href: "#why-shwaasa" },
                  { label: "The Mat Routine", href: "#yoga-mat" },
                  { label: "The 4 Colors of Self", href: "#person-arising" },
                  { label: "Real Session Moments", href: "#what-we-do" },
                  { label: "Addressing Hesitations", href: "#who-is-this-for" },
                  { label: "Community Testimonials", href: "#real-practice" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="footer-nav-link"
                      style={{
                        fontSize: "13.5px",
                        color: "rgba(250, 247, 242, 0.65)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Batches & Timings */}
            <div>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-breath)",
                  marginBottom: "20px",
                }}
              >
                Batches & Schedule
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="#online-batch"
                    className="footer-nav-link"
                    style={{
                      fontSize: "13.5px",
                      color: "var(--color-awareness)",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      textDecoration: "none",
                    }}
                  >
                    <span>Online Batch (Starts Nov 1)</span>
                    <span
                      style={{
                        fontSize: "10px",
                        backgroundColor: "rgba(223, 190, 145, 0.25)",
                        padding: "2px 7px",
                        borderRadius: "var(--radius-pill)",
                        color: "var(--color-awareness)",
                      }}
                    >
                      ₹999
                    </span>
                  </a>
                </li>
                {[
                  { label: "Morning Prana (6:00 – 7:00 AM)", href: "#online-batch" },
                  { label: "Evening Batch 1 (5:15 – 6:15 PM)", href: "#online-batch" },
                  { label: "Evening Batch 2 (6:30 – 7:30 PM)", href: "#online-batch" },
                  { label: "Chethan Yadav (Lead Guide)", href: "#the-guide" },
                  { label: "Indira Yadav (Master Teacher)", href: "#the-guide" },
                  { label: "1:1 Mentorship Guidance", href: "#bridge" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="footer-nav-link"
                      style={{
                        fontSize: "13.5px",
                        color: "rgba(250, 247, 242, 0.65)",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Directory */}
            <div>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-movement)",
                  marginBottom: "20px",
                }}
              >
                Inquiries & Location
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(250, 247, 242, 0.45)", marginBottom: "4px" }}>
                    Official Email
                  </div>
                  <a
                    href="mailto:shwaasaha@gmail.com"
                    className="footer-nav-link"
                    style={{
                      fontSize: "14.5px",
                      fontWeight: 600,
                      color: "#FAF7F2",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      wordBreak: "break-all",
                    }}
                  >
                    <Mail size={13} style={{ color: "var(--color-breath)" }} />
                    <span>shwaasaha@gmail.com</span>
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(250, 247, 242, 0.45)", marginBottom: "4px" }}>
                    Direct Email
                  </div>
                  <a
                    href="mailto:shwaasaha@gmail.com"
                    className="footer-nav-link"
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#FAF7F2",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      wordBreak: "break-all",
                    }}
                  >
                    <Mail size={13} style={{ color: "var(--color-breath)" }} />
                    <span>shwaasaha@gmail.com</span>
                  </a>
                </div>

                <div>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(250, 247, 242, 0.45)", marginBottom: "4px" }}>
                    Studio Location
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "7px" }}>
                    <MapPin size={13} style={{ color: "rgba(250, 247, 242, 0.45)", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontSize: "12.5px", color: "rgba(250, 247, 242, 0.6)", lineHeight: 1.5 }}>
                      Bengaluru, Karnataka, India • Online Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. REFINED BOTTOM COPYRIGHT & TOP JUMP BAR               */}
      {/* ======================================================== */}
      <div
        style={{
          borderTop: "1px solid rgba(250, 247, 242, 0.08)",
          paddingTop: "24px",
          paddingBottom: "24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            fontSize: "12.5px",
            color: "rgba(250, 247, 242, 0.45)",
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>SHWAASA:</strong>. All rights reserved. Lineage-rooted, crafted for real life.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="#top"
              className="footer-nav-link"
              style={{ color: "rgba(250, 247, 242, 0.6)", textDecoration: "none" }}
            >
              Back to top ↑
            </a>
            <span style={{ opacity: 0.3 }}>•</span>
            <span style={{ color: "rgba(250, 247, 242, 0.4)" }}>Yoga • Breath • Awareness</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-nav-link:hover {
          color: #FAF7F2 !important;
          transform: translateX(3px);
        }
        .footer-card:hover {
          transform: translateY(-4px);
          border-color: rgba(223, 190, 145, 0.35) !important;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
        }
        @media (max-width: 960px) {
          .footer-contact-matrix {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
