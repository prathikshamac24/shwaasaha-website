"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface ConnectionProps {
  onOpenTalk: (context?: string) => void;
}

export default function ConnectionSection({ onOpenTalk }: ConnectionProps) {
  const stressors = [
    { label: "Work.", color: "var(--color-awareness)" },
    { label: "Family.", color: "var(--color-breath)" },
    { label: "Responsibilities.", color: "var(--color-movement)" },
    { label: "Stress.", color: "var(--color-stillness)" },
  ];

  return (
    <section
      id="connection"
      className="section"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderTop: "1px solid rgba(55, 51, 34, 0.06)",
        borderBottom: "1px solid rgba(55, 51, 34, 0.06)",
      }}
    >
      <div className="container-narrow" style={{ textAlign: "center" }}>
        
        {/* Journey Step Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(55, 51, 34, 0.08)",
            borderRadius: "var(--radius-pill)",
            padding: "4px 14px",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "var(--color-text-muted)",
            marginBottom: "32px",
          }}
        >
          <Sparkles size={12} style={{ color: "var(--color-stillness)" }} />
          <span>The Connection</span>
        </div>

        {/* Primary Emotive Hook */}
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(34px, 5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.25,
            color: "var(--color-brand-dark)",
            marginBottom: "40px",
          }}
        >
          Life gets busy.
          <br />
          <span style={{ fontWeight: 600, fontStyle: "italic" }}>
            We often forget ourselves.
          </span>
        </h2>

        {/* 4 Cadence Blocks */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px 20px",
            marginBottom: "40px",
          }}
        >
          {stressors.map((item) => (
            <span
              key={item.label}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3vw, 30px)",
                color: "var(--color-brand-dark)",
                backgroundColor: "rgba(255, 255, 255, 0.65)",
                padding: "8px 24px",
                borderRadius: "var(--radius-pill)",
                border: "1px solid rgba(55, 51, 34, 0.08)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Turning Point */}
        <p
          style={{
            fontSize: "clamp(18px, 2.2vw, 22px)",
            lineHeight: 1.8,
            color: "var(--color-text-secondary)",
            maxWidth: "600px",
            margin: "0 auto 36px",
          }}
        >
          Somewhere between all of this,
          <br />
          we stop listening to ourselves.
        </p>

        {/* SHWAASA's Invitation Card */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(24px, 5vw, 44px) clamp(16px, 4vw, 32px)",
            border: "1px solid rgba(55, 51, 34, 0.1)",
            boxShadow: "var(--shadow-md)",
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 4vw, 26px)",
              color: "var(--color-brand-dark)",
              marginBottom: "18px",
            }}
          >
            SHWAASA: is a space to pause.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                padding: "16px 14px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-breath-light)",
                color: "var(--color-brand-dark)",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.04em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "56px",
              }}
            >
              To breathe.
            </div>
            <div
              style={{
                padding: "16px 14px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-movement-light)",
                color: "var(--color-brand-dark)",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.04em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "56px",
              }}
            >
              To move.
            </div>
            <div
              style={{
                padding: "16px 14px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-awareness-light)",
                color: "var(--color-brand-dark)",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.04em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "56px",
              }}
            >
              To become aware.
            </div>
            <div
              style={{
                padding: "16px 14px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-stillness-light)",
                color: "var(--color-brand-dark)",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.04em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "56px",
              }}
            >
              To rest.
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onOpenTalk("Connection Section: I Want to Begin")}
          className="btn btn-primary"
          style={{
            fontSize: "15px",
            padding: "18px 40px",
          }}
        >
          <span>I WANT TO BEGIN</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
