"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Users,
  Sun,
  Moon,
  Laptop,
  Heart,
  ShieldCheck,
  Tag,
  ArrowRight,
} from "lucide-react";

interface OnlineBatchProps {
  onOpenTalk: (context?: string) => void;
}

export default function OnlineBatchSection({ onOpenTalk }: OnlineBatchProps) {
  const [selectedBatch, setSelectedBatch] = useState<string>("morning");

  const batches = [
    {
      id: "morning",
      title: "Morning Prana Awakening",
      time: "6:00 AM – 7:00 AM IST",
      type: "Exclusive Morning Slot",
      days: "Monday to Friday",
      icon: <Sun size={20} style={{ color: "var(--color-awareness)" }} />,
      desc: "Our sole morning batch. Align with Brahma Muhurta to clear mental fog, awaken the spine, and build calm vitality before office or daily commitments begin.",
      badge: "Most Popular",
      badgeColor: "var(--color-awareness)",
      badgeBg: "var(--color-awareness-light)",
    },
    {
      id: "evening-1",
      title: "Early Evening Decompression",
      time: "5:15 PM – 6:15 PM IST",
      type: "Evening Slot 1",
      days: "Monday to Friday",
      icon: <Moon size={20} style={{ color: "var(--color-breath)" }} />,
      desc: "Designed for professionals and homemakers looking to dissolve desk stiffness, release screen fatigue, and transition into a peaceful evening.",
      badge: "Evening Option 1",
      badgeColor: "var(--color-breath)",
      badgeBg: "var(--color-breath-light)",
    },
    {
      id: "evening-2",
      title: "Night Restorative & Breath",
      time: "6:30 PM – 7:30 PM IST",
      type: "Evening Slot 2",
      days: "Monday to Friday",
      icon: <Moon size={20} style={{ color: "var(--color-movement)" }} />,
      desc: "A calming restorative sequence focused on nervous system downshifting, gentle joint mobility, and deep pranayama for restorative sleep.",
      badge: "Evening Option 2",
      badgeColor: "var(--color-movement)",
      badgeBg: "var(--color-movement-light)",
    },
  ];

  const handleEnroll = (batchTitle: string, batchTime: string) => {
    const text = encodeURIComponent(
      `Hi! I would like to join the SHWAASA: Online Batch starting November 1 with the Early Bird Offer of ₹999. I am interested in the ${batchTitle} (${batchTime}). Please share the enrollment details.`
    );
    window.open(`https://wa.me/917676756216?text=${text}`, "_blank");
  };

  return (
    <section
      id="online-batch"
      className="section"
      style={{
        backgroundColor: "#FAF7F2",
        borderTop: "1px solid rgba(55, 51, 34, 0.08)",
        borderBottom: "1px solid rgba(55, 51, 34, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "-5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(223, 190, 145, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(156, 177, 182, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 2 }}>
        {/* Header Badge */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto clamp(36px, 6vw, 60px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "1px solid rgba(55, 51, 34, 0.1)",
              borderRadius: "var(--radius-pill)",
              padding: "6px 20px",
              fontSize: "11.5px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "var(--color-brand-dark)",
              marginBottom: "18px",
              boxShadow: "0 2px 10px rgba(55, 51, 34, 0.06)",
            }}
          >
            <Sparkles size={13} style={{ color: "var(--color-awareness)" }} />
            <span>LIVE INTERACTIVE ONLINE BATCH • STARTING NOVEMBER 1</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 5vw, 50px)",
              color: "var(--color-brand-dark)",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Authentic Lineage Yoga, From Your Own Living Room
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 18px)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.65,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            We are opening our exclusive live online batches so that distance, heavy traffic, and packed work schedules are never an obstacle to your health, breath, and inner peace.
          </p>
        </div>

        {/* Why We Are Doing This - Editorial Narrative */}
        <div
          className="online-intro-card"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(55, 51, 34, 0.09)",
            padding: "clamp(28px, 5vw, 44px)",
            boxShadow: "0 8px 30px rgba(55, 51, 34, 0.05)",
            marginBottom: "clamp(36px, 6vw, 56px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(24px, 4vw, 40px)",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-awareness)",
                  marginBottom: "8px",
                }}
              >
                Why We Are Conducting Online Batches
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 3.5vw, 32px)",
                  color: "var(--color-brand-dark)",
                  marginBottom: "14px",
                  lineHeight: 1.25,
                }}
              >
                Yoga was never meant to be confined by geography.
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)", marginBottom: "16px" }}>
                Many seekers who connect with <strong>SHWAASA:</strong> crave authentic, traditional practice guided by seasoned teachers—not recorded fitness videos, fast-paced gym routines, or impersonal algorithm apps. Yet daily office commutes, family responsibilities, and living in different cities make attending in-person studios difficult.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
                In this batch, you receive <strong>live, real-time feedback</strong>, gentle posture adjustments, breath awareness, and personalized guidance directly into your home.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid rgba(55, 51, 34, 0.08)",
                borderRadius: "var(--radius-md)",
                padding: "24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-awareness)", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontSize: "14.5px", color: "var(--color-brand-dark)" }}>
                  <strong>Live & Interactive:</strong> Not pre-recorded videos. Real-time guidance and posture safety.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-breath)", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontSize: "14.5px", color: "var(--color-brand-dark)" }}>
                  <strong>5 Days a Week:</strong> Monday to Friday for disciplined, compounding transformation.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-movement)", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontSize: "14.5px", color: "var(--color-brand-dark)" }}>
                  <strong>Slot Freedom:</strong> Choose between morning or 2 evening slots to match your schedule.
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-stillness)", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontSize: "14.5px", color: "var(--color-brand-dark)" }}>
                  <strong>Personalized Attention:</strong> Small batch sizes to ensure each practitioner is guided safely.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing & Early Bird Callout Card */}
        <div
          style={{
            backgroundColor: "#2E2A1E",
            color: "#FAF7F2",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(28px, 5vw, 44px)",
            boxShadow: "0 16px 40px rgba(46, 42, 30, 0.25)",
            marginBottom: "clamp(36px, 6vw, 56px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(223, 190, 145, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(223, 190, 145, 0.2)",
                  border: "1px solid rgba(223, 190, 145, 0.35)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 14px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-awareness)",
                  marginBottom: "12px",
                }}
              >
                <Tag size={12} />
                <span>Special Early Bird Offer</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  color: "#FAF7F2",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}
              >
                November 1 Immersion Batch
              </h3>

              <p style={{ fontSize: "15px", color: "rgba(250, 247, 242, 0.8)", maxWidth: "540px", lineHeight: 1.6 }}>
                Regular fee is ₹2,500. Secure your spot now with our <strong>Early Bird Offer of just ₹999</strong> for the complete month of guided practice (Monday to Friday).
              </p>
            </div>

            {/* Price Tag Box */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(250, 247, 242, 0.15)",
                borderRadius: "var(--radius-md)",
                padding: "20px 28px",
                textAlign: "center",
                minWidth: "220px",
              }}
            >
              <div style={{ fontSize: "13px", color: "rgba(250, 247, 242, 0.6)", textDecoration: "line-through", marginBottom: "4px" }}>
                Regular Price: ₹2,500
              </div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "6px", marginBottom: "6px" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "42px", fontWeight: 700, color: "var(--color-awareness)" }}>
                  ₹999
                </span>
                <span style={{ fontSize: "14px", color: "rgba(250, 247, 242, 0.7)" }}>/ month</span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-awareness)",
                  backgroundColor: "rgba(223, 190, 145, 0.18)",
                  border: "1px solid rgba(223, 190, 145, 0.3)",
                  padding: "3px 12px",
                  borderRadius: "var(--radius-pill)",
                  display: "inline-block",
                }}
              >
                Save 60% • Early Bird Offer
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Batches Schedule Grid */}
        <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(24px, 3.8vw, 34px)",
                color: "var(--color-brand-dark)",
                marginBottom: "8px",
              }}
            >
              Choose Your Preferred Batch Time
            </h3>
            <p style={{ fontSize: "15px", color: "var(--color-text-secondary)" }}>
              Classes run <strong>Monday to Friday</strong>. You are completely free to choose any slot that matches your rhythm:
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {batches.map((batch) => {
              const isSelected = selectedBatch === batch.id;
              return (
                <div
                  key={batch.id}
                  onClick={() => setSelectedBatch(batch.id)}
                  className="batch-card"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "var(--radius-lg)",
                    border: isSelected ? "2px solid var(--color-awareness)" : "1px solid rgba(55, 51, 34, 0.1)",
                    padding: "32px 26px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: isSelected ? "0 12px 36px rgba(55, 51, 34, 0.12)" : "0 6px 20px rgba(55, 51, 34, 0.04)",
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Top Badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        backgroundColor: batch.badgeBg,
                        color: "var(--color-brand-dark)",
                        padding: "5px 12px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {batch.icon}
                      <span>{batch.type}</span>
                    </div>

                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        border: isSelected ? "6px solid var(--color-brand-dark)" : "2px solid rgba(55, 51, 34, 0.2)",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </div>

                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "24px",
                        color: "var(--color-brand-dark)",
                        marginBottom: "6px",
                      }}
                    >
                      {batch.title}
                    </h4>

                    {/* Time highlight */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "rgba(55, 51, 34, 0.05)",
                        padding: "6px 14px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: "var(--color-brand-dark)",
                        marginBottom: "16px",
                      }}
                    >
                      <Clock size={15} style={{ color: "var(--color-brand-dark)" }} />
                      <span>{batch.time}</span>
                    </div>

                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                      {batch.desc}
                    </p>
                  </div>

                  {/* Slot CTA */}
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--color-text-muted)",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Calendar size={13} />
                      <span>Monday – Friday • Starts Nov 1</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnroll(batch.title, batch.time);
                      }}
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        padding: "13px 18px",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        boxShadow: "0 4px 16px rgba(55, 51, 34, 0.16)",
                      }}
                    >
                      <span>RESERVE THIS SLOT • ₹999</span>
                      <ArrowRight size={15} style={{ color: "var(--color-awareness)" }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Is This Online Batch For? */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(55, 51, 34, 0.09)",
            padding: "clamp(32px, 5vw, 48px)",
            boxShadow: "0 8px 30px rgba(55, 51, 34, 0.05)",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 36px" }}>
            <div
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-movement)",
                marginBottom: "8px",
              }}
            >
              Designed For Real Lives & Real Constraints
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(26px, 3.8vw, 36px)",
                color: "var(--color-brand-dark)",
                marginBottom: "10px",
              }}
            >
              Who Is The Online Batch For?
            </h3>
            <p style={{ fontSize: "15px", color: "var(--color-text-secondary)" }}>
              If you’ve hesitated to begin yoga because of inflexible schedules, distance, or self-consciousness, this sanctuary was created for you:
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: <Laptop size={22} style={{ color: "var(--color-awareness)" }} />,
                title: "Tech & Corporate Professionals",
                desc: "Counteract 8–10 hours of screen-bound posture, relieve upper back strain, compressed hips, and dissolve cognitive burnout without losing commuting time.",
              },
              {
                icon: <Heart size={22} style={{ color: "var(--color-breath)" }} />,
                title: "Homemakers & Caregivers",
                desc: "An uninterrupted, sacred hour for your own replenishment right from home, leaving you deeply energized rather than exhausted by midday.",
              },
              {
                icon: <ShieldCheck size={22} style={{ color: "var(--color-movement)" }} />,
                title: "Complete Beginners & Seekers",
                desc: "Never touched a yoga mat? No problem. We do not do acrobatics. We guide you step-by-step with joint safety, gentle breathing, and compassionate care.",
              },
              {
                icon: <Users size={22} style={{ color: "var(--color-stillness)" }} />,
                title: "Those Battling Stress & Shallow Breath",
                desc: "Struggling with restless sleep or constant mental chatter? Learn the traditional science of Pranayama to reset your autonomic nervous system naturally.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="target-audience-card"
                style={{
                  backgroundColor: "var(--color-bg)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px 22px",
                  border: "1px solid rgba(55, 51, 34, 0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ marginBottom: "14px" }}>{item.icon}</div>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "20px",
                    color: "var(--color-brand-dark)",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "var(--color-text-secondary)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Final Large WhatsApp CTA for Online Batch */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(55, 51, 34, 0.08)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <button
              onClick={() => handleEnroll("Preferred Online Slot", "Starting Nov 1")}
              className="btn btn-primary"
              style={{
                padding: "18px 48px",
                fontSize: "15px",
                letterSpacing: "0.08em",
                boxShadow: "0 8px 30px rgba(55, 51, 34, 0.28)",
                background: "linear-gradient(135deg, #373322 0%, #1e1b13 100%)",
                border: "1px solid rgba(223, 190, 145, 0.35)",
              }}
            >
              <span>CLAIM YOUR EARLY BIRD SPOT • ₹999</span>
              <ArrowRight size={18} style={{ color: "var(--color-awareness)" }} />
            </button>
            <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
              Direct confirmation • Class starts November 1 • Limited early bird seats
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .batch-card:hover {
          transform: translateY(-5px);
        }
        .target-audience-card:hover {
          background-color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(55, 51, 34, 0.07);
        }
      `}</style>
    </section>
  );
}
