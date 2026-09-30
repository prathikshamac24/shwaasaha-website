"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Send, Sparkles, Check, ArrowRight } from "lucide-react";

interface ConversationBridgeProps {
  onOpenTalk: (customPrompt?: string) => void;
}

export default function ConversationBridgeSection({ onOpenTalk }: ConversationBridgeProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<string>(
    "Hi Chethan! I am completely new to yoga, and I'd like to understand how to begin."
  );

  const samplePrompts = [
    {
      title: "Completely New",
      text: "Hi Chethan, I am completely new to yoga and not very flexible. How do I begin?",
    },
    {
      title: "Desk Stiff / Work Stress",
      text: "Hi Chethan, I work long hours in tech and carry chronic tension in my neck and lower back. Looking for relief.",
    },
    {
      title: "Breath & Deeper Practice",
      text: "Hi Chethan, I want to learn authentic pranayama, meditation, and traditional Indian breathwork.",
    },
    {
      title: "General Curiosity",
      text: "Hi Chethan! I came across SHWAASA: and would love to understand more about your sessions.",
    },
  ];

  return (
    <section className="section" style={{ position: "relative" }}>
      <div className="container-content">
        
        {/* Header */}
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
            <span>The Human Connection</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4.5vw, 48px)",
              color: "var(--color-brand-dark)",
              marginBottom: "14px",
            }}
          >
            No Course Catalogs. No Transaction Pressure.
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            We don’t believe in putting rigid price tags or 200-hour syllabi in front of someone who just wants to breathe.
            Your first step is simply a conversation.
          </p>
        </div>

        {/* The WhatsApp Conversation Simulator Box */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            backgroundColor: "#FAF7F2",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(55, 51, 34, 0.12)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
          }}
        >
          {/* Chat Window Header */}
          <div
            style={{
              backgroundColor: "#1E1B13",
              borderBottom: "1px solid rgba(223, 190, 145, 0.25)",
              padding: "clamp(14px, 3vw, 18px) clamp(16px, 3.5vw, 24px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              color: "#FAF7F2",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
              <div
                style={{
                  position: "relative",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--color-awareness)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/chethan-portrait.jpg"
                  alt="Chethan Yadav Avatar"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{ minWidth: 0 }}>
                <h4 style={{ fontSize: "15px", color: "#FAF7F2", fontFamily: "var(--font-serif)", fontWeight: 600, letterSpacing: "0.02em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Chethan Yadav • SHWAASA:
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-awareness)",
                      boxShadow: "0 0 6px var(--color-awareness)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "11.5px", color: "rgba(250, 247, 242, 0.75)" }}>Lead Teacher • 1:1 Guidance</span>
                </div>
              </div>
            </div>

            <div
              className="chat-status-pill"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(250, 247, 242, 0.15)",
                padding: "5px 14px",
                borderRadius: "var(--radius-pill)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "var(--color-awareness)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Direct Inquiry
            </div>
          </div>

          {/* Chat Bubble Area */}
          <div
            style={{
              padding: "clamp(18px, 4vw, 28px) clamp(14px, 3.5vw, 24px)",
              backgroundColor: "#EFECE6",
              backgroundImage:
                "radial-gradient(#D8D2C5 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {/* Incoming message from Chethan */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                maxWidth: "88%",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px 18px 18px 4px",
                  padding: "16px 20px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                  color: "var(--color-brand-dark)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                }}
              >
                <p style={{ marginBottom: "8px", color: "var(--color-brand-dark)" }}>
                  Hi! Welcome to SHWAASA: 🙏
                </p>
                <p style={{ marginBottom: "8px", color: "var(--color-brand-dark)" }}>
                  We’d love to understand what you’re looking for.
                </p>
                <p style={{ fontWeight: 600, color: "var(--color-brand-dark)" }}>
                  Are you completely new to yoga, or have you practised before?
                </p>
                <span
                  style={{
                    display: "block",
                    fontSize: "11px",
                    color: "var(--color-text-faint)",
                    textAlign: "right",
                    marginTop: "6px",
                  }}
                >
                  Just now
                </span>
              </div>
            </div>

            {/* Quick response pills */}
            <div style={{ marginTop: "12px" }}>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: "10px",
                }}
              >
                Pick your preferred starting thought:
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {samplePrompts.map((p) => {
                  const isSelected = selectedPrompt === p.text;
                  return (
                    <button
                      key={p.title}
                      onClick={() => setSelectedPrompt(p.text)}
                      style={{
                        padding: "8px 14px",
                        fontSize: "13px",
                        borderRadius: "var(--radius-pill)",
                        backgroundColor: isSelected ? "var(--color-brand-dark)" : "#ffffff",
                        color: isSelected ? "#FAF7F2" : "var(--color-brand-dark)",
                        border: isSelected
                          ? "1px solid var(--color-brand-dark)"
                          : "1px solid rgba(55, 51, 34, 0.15)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        transition: "all 0.2s ease",
                        fontWeight: 500,
                      }}
                    >
                      {p.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected outgoing preview message */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginTop: "6px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E1F7CB",
                  borderRadius: "18px 18px 4px 18px",
                  padding: "14px 18px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                  color: "#1E3B1C",
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                  maxWidth: "88%",
                }}
              >
                <p>{selectedPrompt}</p>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "4px",
                    fontSize: "11px",
                    color: "#5E855A",
                    marginTop: "6px",
                  }}
                >
                  Ready to send <Check size={13} />
                </span>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div
            className="chat-action-bar"
            style={{
              padding: "clamp(16px, 3.5vw, 20px) clamp(16px, 3.5vw, 24px)",
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px",
              borderTop: "1px solid rgba(55, 51, 34, 0.08)",
            }}
          >
            <div>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-brand-dark)" }}>
                Start this exact conversation with Chethan Yadav
              </span>
              <p style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                Direct human mentorship • No sales bots • Guidance for your body & breath
              </p>
            </div>

            <button
              onClick={() => onOpenTalk(selectedPrompt)}
              className="btn btn-primary chat-action-btn"
              style={{
                padding: "14px 28px",
                fontSize: "14px",
                letterSpacing: "0.06em",
                boxShadow: "0 6px 20px rgba(55, 51, 34, 0.25)",
              }}
            >
              <span>START CONVERSATION</span>
              <ArrowRight size={16} style={{ color: "var(--color-awareness)" }} />
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .chat-action-bar {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          :global(.chat-action-btn) {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 440px) {
          :global(.chat-status-pill) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
