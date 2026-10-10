"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Activity, Wind, Eye, Moon, Sparkles } from "lucide-react";

export default function DifferenceSection() {
  const [activeElement, setActiveElement] = useState<number>(0);

  const pillars = [
    {
      title: "Movement",
      sanskrit: "Āsana",
      color: "var(--color-movement)",
      lightBg: "var(--color-movement-light)",
      icon: Activity,
      desc: "Gentle postures to awaken and ease the physical body, without competition or forcing flexibility.",
    },
    {
      title: "Breath",
      sanskrit: "Prāṇa",
      color: "var(--color-breath)",
      lightBg: "var(--color-breath-light)",
      icon: Wind,
      desc: "Conscious rhythmic breathing that calms the racing nervous system and revitalizes life force.",
    },
    {
      title: "Awareness",
      sanskrit: "Chitta",
      color: "var(--color-awareness)",
      lightBg: "var(--color-awareness-light)",
      icon: Eye,
      desc: "Observing your thoughts, emotions, and breath without judgment, bringing light into daily moments.",
    },
    {
      title: "Stillness",
      sanskrit: "Śānti",
      color: "var(--color-stillness)",
      lightBg: "var(--color-stillness-light)",
      icon: Moon,
      desc: "Deep, restorative quiet. The sacred pause where you return home to who you truly are.",
    },
  ];

  return (
    <section id="why-shwaasa" className="section" style={{ position: "relative" }}>
      <div className="container-content">
        
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 56px" }}>
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
              marginBottom: "24px",
            }}
          >
            <Sparkles size={12} style={{ color: "var(--color-awareness)" }} />
            <span>What Makes SHWAASA: Different</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4.5vw, 48px)",
              color: "var(--color-brand-dark)",
              marginBottom: "16px",
            }}
          >
            This is not about doing yoga perfectly.
          </h2>

          <p
            style={{
              fontSize: "clamp(18px, 2.2vw, 22px)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
            }}
          >
            It is about understanding yourself through:
          </p>
        </div>

        {/* 4 Pillars Grid (matching the 4 colors of the logo) - Strictly Symmetrical (4x1, 2x2, or 1x4) */}
        <div className="difference-pillars-grid">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeElement === idx;
            return (
              <div
                key={item.title}
                onClick={() => setActiveElement(idx)}
                style={{
                  backgroundColor: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                  border: isSelected
                    ? `2px solid ${item.color}`
                    : "1px solid rgba(55, 51, 34, 0.08)",
                  borderRadius: "var(--radius-lg)",
                  padding: "clamp(22px, 4vw, 32px) clamp(18px, 3.5vw, 24px)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  boxShadow: isSelected ? "var(--shadow-md)" : "var(--shadow-sm)",
                  transform: isSelected ? "translateY(-4px)" : "none",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: item.lightBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={24} />
                </div>

                <div
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: item.color,
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  {item.sanskrit}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "26px",
                    color: "var(--color-brand-dark)",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "14.5px",
                    lineHeight: 1.6,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>



      </div>
      <style jsx>{`
        .difference-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 0;
        }
        @media (max-width: 960px) {
          .difference-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 520px) {
          .difference-pillars-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
