"use client";

import React, { useState } from "react";
import { Sparkles, MessageCircle, HeartHandshake, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";

interface WhoIsThisForProps {
  onOpenTalk: (context?: string) => void;
}

export default function WhoIsThisForSection({ onOpenTalk }: WhoIsThisForProps) {
  const [activeDoubt, setActiveDoubt] = useState<number>(0);

  const hesitations = [
    {
      id: "beginner",
      num: "01",
      tag: "First-Time Practitioners",
      question: "“I’ve never done yoga before in my life. What if I look awkward or can’t keep up?”",
      shortLabel: "Never done yoga",
      sanskritQuote: "आरम्भः कल्याणकरः • Every beginning is auspicious",
      truthTitle: "You don't need experience. You only need the willingness to breathe.",
      explanation:
        "At SHWAASA:, there are no synchronized gymnastics, no front-row performers, and zero judgment. Every session begins with the absolute basics of natural breath and joint ease. More than 70% of our students started having never set foot on a mat before.",
      firstSessionExperience: [
        "Arrive in any comfortable loose clothing (no branded gym gear needed).",
        "We guide your breath step-by-step before any physical movement.",
        "Every posture is adapted to your natural range with bolsters and ease.",
      ],
      whatsappContext: "Never done yoga before",
      accentColor: "var(--color-movement)",
      lightBg: "var(--color-movement-light)",
    },
    {
      id: "flexibility",
      num: "02",
      tag: "Body Mobility & Stiffness",
      question: "“I’m completely stiff and can’t even reach my knees, let alone my toes.”",
      shortLabel: "Not flexible",
      sanskritQuote: "सुखं स्थिरम् • Ease precedes all posture",
      truthTitle: "Flexibility is not a prerequisite. It is the natural consequence of exhaling.",
      explanation:
        "Saying you are too stiff for yoga is like saying you are too dirty to take a bath. You come to yoga to dissolve chronic stiffness, not to prove how far you can bend. We honor your body’s current boundaries and teach you how to soften into them gently.",
      firstSessionExperience: [
        "Zero forcing or painful overstretching.",
        "Gentle micro-movements that unlock tight hips, lower back, and hamstrings.",
        "You discover how deep rhythmic breath unlocks tension faster than force.",
      ],
      whatsappContext: "Stiff body and lack of flexibility",
      accentColor: "var(--color-breath)",
      lightBg: "var(--color-breath-light)",
    },
    {
      id: "desk-worker",
      num: "03",
      tag: "Tech & Corporate Professionals",
      question: "“I sit at a screen for 10 hours a day. My neck, spine, and eyes are exhausted.”",
      shortLabel: "10h desk job",
      sanskritQuote: "कशेरुका मोक्षः • Liberation of the spine",
      truthTitle: "Your spine was meant to breathe, not freeze behind a monitor.",
      explanation:
        "Modern desk work locks the thoracic spine, compresses the cervical neck vertebrae, and traps the nervous system in shallow chest breathing. SHWAASA: was specifically refined to counteract the toll of prolonged screen time.",
      firstSessionExperience: [
        "Immediate decompression of rounded shoulders and tech-neck tension.",
        "Diaphragmatic pacing that calms the screen-stimulated nervous system.",
        "Simple, practical breath tools you can use between Zoom meetings.",
      ],
      whatsappContext: "IT desk job stiffness and stress",
      accentColor: "var(--color-awareness)",
      lightBg: "var(--color-awareness-light)",
    },
    {
      id: "homemaker",
      num: "04",
      tag: "Family & Everyday Responsibilities",
      question: "“I give all my energy to my family and home. I barely have time for myself.”",
      shortLabel: "Family & busy schedule",
      sanskritQuote: "आत्मने शान्तिः • Peace unto your own soul",
      truthTitle: "You have nourished everyone else. This is the sacred hour you nourish you.",
      explanation:
        "Caring for children, parents, and households is physically and mentally consuming. SHWAASA: provides a serene, quiet sanctuary where you are not on call for anyone else. It is an intentional pause to restore your own vitality so you can live with joy rather than exhaustion.",
      firstSessionExperience: [
        "A peaceful sanctuary with no chores, notifications, or demands.",
        "Gentle restorative postures supported by soft cushions and blankets.",
        "Deep mental relaxation that leaves you renewed and light-hearted.",
      ],
      whatsappContext: "Managing family and finding personal peace",
      accentColor: "var(--color-stillness)",
      lightBg: "var(--color-stillness-light)",
    },
    {
      id: "burnout",
      num: "05",
      tag: "Mental Fatigue & Restlessness",
      question: "“My mind races constantly. I can't sit still, and meditation feels impossible.”",
      shortLabel: "Overthinking & anxiety",
      sanskritQuote: "चित्तवृत्ति निरोधः • Stillness through natural breath",
      truthTitle: "We do not ask you to stop thinking. We teach your nervous system how to rest.",
      explanation:
        "Trying to force a racing mind into silence only creates more tension. In authentic Indian tradition, we work through the breath (Prāṇa) first. When your breath becomes slow and rhythmic, the brain naturally downshifts into parasympathetic stillness without struggle.",
      firstSessionExperience: [
        "No forced chanting or difficult sitting postures.",
        "Step-by-step breath synchronization that naturally dissolves anxiety.",
        "A guided rest at the end where your racing thoughts naturally settle.",
      ],
      whatsappContext: "Stress, anxiety, and racing mind",
      accentColor: "var(--color-movement)",
      lightBg: "var(--color-movement-light)",
    },
    {
      id: "authentic-depth",
      num: "06",
      tag: "Traditional Depth Seekers",
      question: "“I’m tired of commercial fitness yoga with loud pop music and fast pacing.”",
      shortLabel: "Looking for authentic depth",
      sanskritQuote: "परम्परा शुद्धिः • Authentic traditional lineage",
      truthTitle: "Rooted in 12+ years of Vedanta, traditional Sanskrit, and authentic practice.",
      explanation:
        "If you crave genuine depth rather than an aerobic workout, SHWAASA: is your home. Guided by Chethan Yadav and our senior acharyas, our teaching bridges traditional Indian knowledge systems with compassionate, practical relevance for daily living.",
      firstSessionExperience: [
        "Paced with sacred quietness, intentional awareness, and Sanskrit clarity.",
        "Clear philosophical context behind why each posture and breath is practiced.",
        "A lifelong relationship with self-awareness rather than temporary exercise.",
      ],
      whatsappContext: "Seeking traditional authentic yoga wisdom",
      accentColor: "var(--color-brand-dark)",
      lightBg: "rgba(55, 51, 34, 0.06)",
    },
  ];

  const current = hesitations[activeDoubt];

  return (
    <section
      id="who-is-this-for"
      className="section"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderTop: "1px solid rgba(55, 51, 34, 0.06)",
        borderBottom: "1px solid rgba(55, 51, 34, 0.06)",
        paddingTop: "clamp(60px, 8vw, 100px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
      }}
    >
      <div className="container-content">
        {/* Editorial Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto clamp(36px, 6vw, 56px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: "1px solid rgba(55, 51, 34, 0.08)",
              borderRadius: "var(--radius-pill)",
              padding: "4px 14px",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: "18px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <HeartHandshake size={12} style={{ color: "var(--color-stillness)" }} />
            <span>Removing Hesitations • Your Sanctuary</span>
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
            You Can Begin Exactly as You Are.
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2.2vw, 17px)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Most people hesitate to begin yoga because of silent internal doubts.
            <br />
            Touch the thought you carry below to see how SHWAASA: receives you with open arms:
          </p>
        </div>

        {/* Mobile Horizontal Pill Selector */}
        <div className="hesitation-mobile-pill-bar">
          {hesitations.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveDoubt(idx)}
              className={`hesitation-pill-btn ${activeDoubt === idx ? "active" : ""}`}
              style={{
                border: activeDoubt === idx ? `1.5px solid ${item.accentColor}` : "1px solid rgba(55, 51, 34, 0.12)",
                backgroundColor: activeDoubt === idx ? item.lightBg : "rgba(255, 255, 255, 0.8)",
                color: activeDoubt === idx ? "var(--color-brand-dark)" : "var(--color-text-secondary)",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 700, opacity: 0.6 }}>{item.num}</span>
              <span>{item.shortLabel}</span>
            </button>
          ))}
        </div>

        {/* ======================================================== */}
        {/* BESPOKE EDITORIAL SANCTUARY SPREAD                       */}
        {/* Left: The Quiet Inquiries (Human Voices)                 */}
        {/* Right: The Sanctuary Response Canvas                     */}
        {/* ======================================================== */}
        <div className="hesitation-sanctuary-spread">
          {/* Left Column: Contemplative Inquiry List */}
          <div className="hesitation-inquiry-list">
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "8px",
                paddingLeft: "4px",
              }}
            >
              Select Your Inner Hesitation:
            </div>

            {hesitations.map((item, idx) => {
              const isSelected = activeDoubt === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveDoubt(idx)}
                  className={`hesitation-inquiry-item ${isSelected ? "selected" : ""}`}
                  style={{
                    backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.55)",
                    border: isSelected
                      ? `2px solid ${item.accentColor}`
                      : "1px solid rgba(55, 51, 34, 0.08)",
                    borderLeft: isSelected ? `5px solid ${item.accentColor}` : "1px solid rgba(55, 51, 34, 0.08)",
                    boxShadow: isSelected ? "var(--shadow-md)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: isSelected ? item.accentColor : "var(--color-text-muted)",
                        minWidth: "22px",
                        paddingTop: "2px",
                      }}
                    >
                      {item.num}
                    </span>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: isSelected ? item.accentColor : "var(--color-text-muted)",
                          marginBottom: "4px",
                        }}
                      >
                        {item.tag}
                      </div>

                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "15px",
                          lineHeight: 1.45,
                          color: isSelected ? "var(--color-brand-dark)" : "var(--color-text-secondary)",
                          fontWeight: isSelected ? 600 : 400,
                          margin: 0,
                        }}
                      >
                        {item.question}
                      </p>
                    </div>

                    <ChevronRight
                      size={18}
                      style={{
                        color: isSelected ? item.accentColor : "rgba(55, 51, 34, 0.2)",
                        transform: isSelected ? "translateX(3px)" : "none",
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                        marginTop: "8px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: The Sanctuary Response Canvas */}
          <div className="hesitation-sanctuary-canvas">
            <div
              className="sanctuary-parchment"
              style={{
                borderColor: `${current.accentColor}35`,
                boxShadow: `0 16px 40px ${current.accentColor}18, 0 4px 16px rgba(55, 51, 34, 0.06)`,
              }}
            >
              {/* Canvas Header Banner */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                  paddingBottom: "18px",
                  borderBottom: "1px solid rgba(55, 51, 34, 0.08)",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: current.accentColor,
                      boxShadow: `0 0 10px ${current.accentColor}`,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: current.accentColor,
                    }}
                  >
                    The SHWAASA: Reassurance • Part {current.num}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "13px",
                    fontStyle: "italic",
                    color: "var(--color-brand-dark)",
                    opacity: 0.8,
                  }}
                >
                  {current.sanskritQuote}
                </span>
              </div>

              {/* The Bold Compassionate Declaration */}
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 3.6vw, 32px)",
                  color: "var(--color-brand-dark)",
                  lineHeight: 1.25,
                  marginBottom: "16px",
                  fontWeight: 500,
                }}
              >
                {current.truthTitle}
              </h3>

              {/* Living Truth Explanation */}
              <p
                style={{
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  marginBottom: "28px",
                }}
              >
                {current.explanation}
              </p>

              {/* "What Your First Session Feels Like" Box */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "var(--radius-md)",
                  padding: "clamp(18px, 3vw, 24px)",
                  border: "1px solid rgba(55, 51, 34, 0.08)",
                  boxShadow: "var(--shadow-sm)",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    fontSize: "11.5px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-dark)",
                    marginBottom: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Sparkles size={13} style={{ color: current.accentColor }} />
                  <span>What Your First Session Feels Like With Us:</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {current.firstSessionExperience.map((step, sIdx) => (
                    <div key={sIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <CheckCircle2
                        size={16}
                        style={{ color: current.accentColor, flexShrink: 0, marginTop: "2px" }}
                      />
                      <span style={{ fontSize: "14px", color: "var(--color-brand-dark)", lineHeight: 1.5 }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(55, 51, 34, 0.08)",
                }}
              >
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-brand-dark)" }}>
                    Still have questions about this?
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                    Talk directly with Chethan on WhatsApp • No automated bot
                  </div>
                </div>

                <button
                  onClick={() => onOpenTalk(`Hesitation: ${current.whatsappContext}`)}
                  className="btn btn-primary"
                  style={{
                    padding: "13px 26px",
                    fontSize: "13.5px",
                    letterSpacing: "0.06em",
                    boxShadow: "0 4px 18px rgba(55, 51, 34, 0.2)",
                  }}
                >
                  <span>TALK ABOUT THIS</span>
                  <ArrowRight size={15} style={{ color: "var(--color-awareness)" }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Bottom Reassurance Quote */}
        <div
          style={{
            marginTop: "clamp(36px, 6vw, 56px)",
            textAlign: "center",
            padding: "24px",
            borderRadius: "var(--radius-lg)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "1px solid rgba(55, 51, 34, 0.06)",
            maxWidth: "760px",
            margin: "clamp(36px, 6vw, 56px) auto 0",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "var(--color-brand-dark)",
              fontStyle: "italic",
              marginBottom: "8px",
            }}
          >
            “You don’t have to become someone else to practise yoga. You simply begin with yourself.”
          </p>
          <span style={{ fontSize: "12.5px", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            SHWAASA: • Authentic Indian Wisdom For Modern Life
          </span>
        </div>
      </div>

      {/* Scoped Styling for the Bespoke Sanctuary Spread */}
      <style jsx>{`
        .hesitation-mobile-pill-bar {
          display: none;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 12px;
          margin-bottom: 20px;
          -webkit-overflow-scrolling: touch;
        }

        .hesitation-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-pill);
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .hesitation-sanctuary-spread {
          display: grid;
          grid-template-columns: minmax(300px, 420px) 1fr;
          gap: clamp(24px, 4vw, 44px);
          align-items: start;
        }

        .hesitation-inquiry-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hesitation-inquiry-item {
          padding: 16px 18px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        .hesitation-inquiry-item:hover {
          background-color: #ffffff !important;
          transform: translateX(4px);
        }

        .hesitation-inquiry-item.selected {
          transform: translateX(6px);
        }

        .sanctuary-parchment {
          background: linear-gradient(145deg, #FAF7F2 0%, #FFFFFF 100%);
          border-radius: var(--radius-lg);
          padding: clamp(24px, 4vw, 40px);
          border: 1.5px solid rgba(55, 51, 34, 0.12);
          position: sticky;
          top: clamp(80px, 12vh, 110px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        @media (max-width: 900px) {
          .hesitation-sanctuary-spread {
            grid-template-columns: 1fr;
          }
          .hesitation-mobile-pill-bar {
            display: flex;
          }
          .hesitation-inquiry-list {
            display: none;
          }
          .sanctuary-parchment {
            position: relative;
            top: 0;
            padding: 20px 18px;
          }
        }
      `}</style>
    </section>
  );
}
