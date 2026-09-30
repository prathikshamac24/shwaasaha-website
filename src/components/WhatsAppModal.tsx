"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, MessageCircle, Send, Check, Copy, ArrowRight } from "lucide-react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  initialPrompt = "Hi Chethan! I am interested in beginning yoga with SHWAASA:.",
}: WhatsAppModalProps) {
  const [message, setMessage] = useState(initialPrompt);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPrompt) {
      setMessage(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Default WhatsApp Phone Number
  const phoneNumber = "917676756216";

  const handleLaunchWhatsApp = () => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        backgroundColor: "rgba(45, 41, 30, 0.65)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(10px, 3vw, 20px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "520px",
          backgroundColor: "#FAF7F2",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-hover)",
          border: "1px solid rgba(55, 51, 34, 0.15)",
          overflow: "hidden",
          animation: "matRollout 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            backgroundColor: "#1E1B13",
            borderBottom: "1px solid rgba(223, 190, 145, 0.25)",
            padding: "clamp(14px, 3vw, 20px) clamp(16px, 3.5vw, 24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#FAF7F2",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                alt="Chethan Yadav"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: "clamp(15px, 3.5vw, 17px)", color: "#FAF7F2", fontFamily: "var(--font-serif)", fontWeight: 600, letterSpacing: "0.02em" }}>
                Talk to Mentors • SHWAASA:
              </h3>
              <p style={{ fontSize: "11.5px", color: "var(--color-awareness)", opacity: 0.9 }}>
                Direct Teacher Line • +91 76767 56216
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              color: "#FAF7F2",
              opacity: 0.8,
              padding: "6px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(250, 247, 242, 0.12)",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "clamp(16px, 4vw, 24px)", overflowY: "auto" }}>
          
          {/* Greeting Box */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "var(--radius-md)",
              padding: "16px",
              border: "1px solid rgba(55, 51, 34, 0.08)",
              marginBottom: "18px",
            }}
          >
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
              <strong style={{ color: "var(--color-brand-dark)" }}>Chethan:</strong> “Hi! Welcome to SHWAASA: 🙏 We’d love to understand what you’re looking for. Tell us a little about yourself or pick below.”
            </p>
          </div>

          {/* Quick Option Selector */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Quick Options:
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {[
                "I want to join the Online Batch (Nov 1)",
                "I am completely new to yoga",
                "I have desk stiffness & stress",
                "I want authentic breathwork",
                "Just want to know session timings",
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() =>
                    setMessage(`Hi! ${opt}. I'd love to understand how to begin with SHWAASA:.`)
                  }
                  style={{
                    fontSize: "12px",
                    padding: "6px 12px",
                    borderRadius: "var(--radius-pill)",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(55, 51, 34, 0.12)",
                    color: "var(--color-brand-dark)",
                    transition: "all 0.15s",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Editable text area */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="wa-message"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Your Message to Chethan:
            </label>
            <textarea
              id="wa-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(55, 51, 34, 0.15)",
                fontSize: "14.5px",
                fontFamily: "var(--font-sans)",
                color: "var(--color-brand-dark)",
                backgroundColor: "#ffffff",
                resize: "vertical",
                lineHeight: 1.5,
              }}
            />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              onClick={handleLaunchWhatsApp}
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "16px",
                fontSize: "14.5px",
                letterSpacing: "0.08em",
                boxShadow: "0 6px 20px rgba(55, 51, 34, 0.28)",
              }}
            >
              <span>CONTINUE TO CONVERSATION</span>
              <ArrowRight size={16} style={{ color: "var(--color-awareness)" }} />
            </button>

            <button
              onClick={handleCopy}
              type="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "10px",
                fontSize: "13px",
                color: "var(--color-text-muted)",
                borderRadius: "var(--radius-pill)",
              }}
            >
              {copied ? (
                <>
                  <Check size={14} style={{ color: "#25d366" }} /> Copied to clipboard!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy message text
                </>
              )}
            </button>
          </div>

          <div
            style={{
              marginTop: "16px",
              textAlign: "center",
              fontSize: "12px",
              color: "var(--color-text-muted)",
            }}
          >
            No automated bots • Direct human connection with Chethan Yadav & team
          </div>
        </div>
      </div>
    </div>
  );
}
