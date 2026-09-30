"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ConnectionSection from "../components/ConnectionSection";
import DifferenceSection from "../components/DifferenceSection";
import YogaMatGraphic from "../components/YogaMatGraphic";
import PersonArisingSection from "../components/PersonArisingSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import WhoIsThisForSection from "../components/WhoIsThisForSection";
import OnlineBatchSection from "../components/OnlineBatchSection";
import RealPracticeSection from "../components/RealPracticeSection";
import GuideSection from "../components/GuideSection";
import ConversationBridgeSection from "../components/ConversationBridgeSection";
import FinalSection from "../components/FinalSection";
import WhatsAppModal from "../components/WhatsAppModal";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPrompt, setModalPrompt] = useState<string>(
    "Hi Chethan! I'm reaching out from the SHWAASA: website. I'd love to understand more about starting my practice."
  );

  const handleOpenTalk = (customContext?: string) => {
    if (customContext && !customContext.includes("Floating")) {
      if (customContext.includes("Online") || customContext.includes("Batch")) {
        setModalPrompt(
          "Hi! I would like to join the SHWAASA: Online Batch starting November 1 with the Early Bird Offer of ₹999. Please share the enrollment details."
        );
      } else if (customContext.includes("IT") || customContext.includes("desk")) {
        setModalPrompt(
          "Hi Chethan! I work in tech / at a desk with lots of stiffness and stress. I'd love to start a grounded yoga practice with SHWAASA:."
        );
      } else if (customContext.includes("Begin") || customContext.includes("yourself")) {
        setModalPrompt(
          "Hi Chethan! I want to begin yoga with SHWAASA:. I don't have prior experience, but I want to take this first step."
        );
      } else if (customContext.includes("Indira")) {
        setModalPrompt(
          "Namaste Indira mam! I would love to connect with you regarding yoga practice at SHWAASA:."
        );
      } else if (customContext.includes("Chethan") || customContext.includes("Guide") || customContext.includes("Mentor")) {
        setModalPrompt(
          "Hi Chethan! I'd love to speak with you about starting my yoga practice at SHWAASA:."
        );
      } else {
        setModalPrompt(
          "Hi Chethan! I'm reaching out from the SHWAASA: website. I'd love to understand more about starting my practice."
        );
      }
    } else {
      setModalPrompt(
        "Hi Chethan! I'm reaching out from the SHWAASA: website. I'd love to understand more about starting my practice."
      );
    }
    setModalOpen(true);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 1. Global Navigation */}
      <Navbar onOpenTalk={handleOpenTalk} />

      <main>
        {/* 2. Hero Section: FEEL */}
        <HeroSection onOpenTalk={handleOpenTalk} />

        {/* 3. The Connection: FEEL & RECOGNIZE */}
        <ConnectionSection onOpenTalk={handleOpenTalk} />

        {/* 4. What Makes SHWAASA: Different: UNDERSTAND */}
        <DifferenceSection />

        {/* 5. Special Feature: Graphic of Yoga Mat unrolling in rectangular form & routine */}
        <YogaMatGraphic />

        {/* 6. Special Feature: Person Arising with human-shaped boundary filled with the 4 logo colors */}
        <PersonArisingSection />

        {/* 7. What We Do: Real Photographs from actual classes */}
        <WhatWeDoSection />

        {/* 8. Who Is This For: DISARM & WELCOME */}
        <WhoIsThisForSection onOpenTalk={handleOpenTalk} />

        {/* 9. Live Online Immersion Batch (Nov 1, ₹999 Early Bird) */}
        <OnlineBatchSection onOpenTalk={handleOpenTalk} />

        {/* 10. Real People. Real Practice: TRUST */}
        <RealPracticeSection />

        {/* 11. Meet Your Mentors: TRUST & HUMAN CONNECTION (Chethan Yadav & Indira Yadav) */}
        <GuideSection onOpenTalk={handleOpenTalk} />

        {/* 12. The WhatsApp Bridge: TALK */}
        <ConversationBridgeSection onOpenTalk={handleOpenTalk} />
      </main>

      {/* 13. Final Section: BEGIN & CONTACT */}
      <FinalSection onOpenTalk={handleOpenTalk} />

      {/* Interactive WhatsApp Intake Modal */}
      <WhatsAppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPrompt={modalPrompt}
      />

      {/* Floating Quick Action Trigger (Luxury Brand Aesthetic) */}
      <button
        onClick={() => handleOpenTalk()}
        aria-label="Connect with SHWAASA: Mentors"
        className="floating-mentor-btn"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 90,
          backgroundColor: "#1E1B13",
          color: "#FAF7F2",
          height: "48px",
          padding: "0 20px",
          borderRadius: "var(--radius-pill)",
          display: "flex",
          alignItems: "center",
          gap: "9px",
          boxShadow: "0 8px 28px rgba(30, 27, 19, 0.45)",
          border: "1px solid rgba(223, 190, 145, 0.45)",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 12px 36px rgba(30, 27, 19, 0.6)";
          e.currentTarget.style.borderColor = "var(--color-awareness)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(30, 27, 19, 0.45)";
          e.currentTarget.style.borderColor = "rgba(223, 190, 145, 0.45)";
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--color-awareness)",
            display: "inline-block",
            boxShadow: "0 0 8px var(--color-awareness)",
          }}
        />
        <span className="floating-btn-label">Connect with Mentors</span>
        <MessageCircle size={16} style={{ color: "var(--color-awareness)" }} />
      </button>

      <style jsx global>{`
        @media (max-width: 640px) {
          .floating-mentor-btn {
            bottom: 16px !important;
            right: 16px !important;
            padding: 0 14px !important;
            height: 44px !important;
          }
          .floating-btn-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
