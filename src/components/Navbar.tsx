"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenTalk: (context?: string) => void;
}

export default function Navbar({ onOpenTalk }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Why SHWAASA:", href: "#why-shwaasa" },
    { label: "Online Batch", href: "#online-batch", isPill: true },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Mentors", href: "#the-guide" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          backgroundColor: scrolled
            ? "rgba(250, 247, 242, 0.94)"
            : "rgba(250, 247, 242, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(55, 51, 34, 0.08)"
            : "1px solid transparent",
          padding: scrolled ? "10px 0" : "16px 0",
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo-emblem-clean.png"
                alt="SHWAASA: Mandala Emblem"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(18px, 4vw, 20px)",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  color: "var(--color-brand-dark)",
                  lineHeight: 1.1,
                }}
              >
                SHWΛΛSΛ:
              </span>
              <span
                className="nav-tagline"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  color: "var(--color-text-muted)",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Breathe Into Your True Self
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "clamp(18px, 2.4vw, 32px)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "13.5px",
                  fontWeight: link.isPill ? 600 : 500,
                  whiteSpace: "nowrap",
                  color: link.isPill ? "var(--color-brand-dark)" : "var(--color-text-secondary)",
                  backgroundColor: link.isPill ? "rgba(223, 190, 145, 0.25)" : "transparent",
                  border: link.isPill ? "1px solid rgba(223, 190, 145, 0.5)" : "1px solid transparent",
                  padding: link.isPill ? "5px 16px" : "4px 0",
                  borderRadius: link.isPill ? "var(--radius-pill)" : "0",
                  letterSpacing: "0.03em",
                  transition: "all 0.25s ease",
                  boxShadow: link.isPill ? "0 2px 8px rgba(223, 190, 145, 0.25)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (link.isPill) {
                    e.currentTarget.style.backgroundColor = "rgba(223, 190, 145, 0.4)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  } else {
                    e.currentTarget.style.color = "var(--color-brand-dark)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (link.isPill) {
                    e.currentTarget.style.backgroundColor = "rgba(223, 190, 145, 0.25)";
                    e.currentTarget.style.transform = "translateY(0)";
                  } else {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <button
              onClick={() => onOpenTalk("Navbar CTA")}
              className="btn btn-primary nav-talk-btn"
              style={{
                padding: "8px 20px",
                fontSize: "12.5px",
                letterSpacing: "0.07em",
                borderRadius: "var(--radius-pill)",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                boxShadow: "0 2px 10px rgba(55, 51, 34, 0.15)",
              }}
            >
              <span className="nav-btn-text">BEGIN PRACTICE</span>
              <ArrowRight size={13} style={{ color: "var(--color-awareness)" }} />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(55, 51, 34, 0.06)",
                color: "var(--color-brand-dark)",
                flexShrink: 0,
              }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(250, 247, 242, 0.98)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px",
            gap: "20px",
            overflowY: "auto",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "20px",
                fontFamily: "var(--font-serif)",
                color: link.isPill ? "var(--color-brand-dark)" : "var(--color-brand-dark)",
                backgroundColor: link.isPill ? "rgba(223, 190, 145, 0.25)" : "transparent",
                border: link.isPill ? "1px solid rgba(223, 190, 145, 0.5)" : "none",
                borderBottom: link.isPill ? "1px solid rgba(223, 190, 145, 0.5)" : "1px solid rgba(55, 51, 34, 0.08)",
                borderRadius: link.isPill ? "var(--radius-md)" : "0",
                padding: link.isPill ? "10px 16px" : "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: link.isPill ? 600 : 400,
              }}
            >
              <span>{link.label}</span>
              {link.isPill && (
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    backgroundColor: "var(--color-brand-dark)",
                    color: "#ffffff",
                    padding: "3px 8px",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  ₹999
                </span>
              )}
            </a>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTalk("Mobile Menu CTA");
            }}
            className="btn btn-primary"
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "16px",
              letterSpacing: "0.08em",
              boxShadow: "0 6px 20px rgba(55, 51, 34, 0.25)",
            }}
          >
            <span>BEGIN YOUR PRACTICE</span>
            <ArrowRight size={16} style={{ color: "var(--color-awareness)" }} />
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .nav-tagline {
            display: none !important;
          }
        }
        @media (max-width: 360px) {
          .nav-btn-text {
            display: none !important;
          }
          .nav-talk-btn {
            padding: 8px 10px !important;
          }
        }
      `}</style>
    </>
  );
}
