'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sliders, 
  Mic2, 
  GraduationCap, 
  ShieldCheck, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface Offering {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  summary: string;
  bullets: string[];
  ctaHref: string;
}

const OFFERINGS: Offering[] = [
  {
    id: 'live-sound',
    title: 'Live Sound & AV Production',
    shortTitle: 'Live Sound & AV',
    icon: Sliders,
    summary: 'FOH mixing, PA deployment, wireless systems & feedback suppression',
    bullets: [
      'Digital and Analog Equipment',
      'Acoustic Optimization',
      'PA deployment',
      'Wireless Systems',
      'Feedback Suppression'
    ],
    ctaHref: '/live-sound'
  },
  {
    id: 'live-music',
    title: 'Live Music By Luke Moore',
    shortTitle: 'Live Music',
    icon: Mic2,
    summary: 'Solo acoustic, duo & full rock band • 300+ song repertoire',
    bullets: [
      'Solo Acoustic, Duo & Full Rock Band',
      '300+ Song Repertoire',
      'Classic Rock, Blues, Country, RnB, Alternative'
    ],
    ctaHref: '/live-music'
  },
  {
    id: 'lessons',
    title: 'Music Lessons',
    shortTitle: 'Music Lessons',
    icon: GraduationCap,
    summary: 'Guitar, Bass, Drums, Piano & Vocals • Band coaching & songwriting',
    bullets: [
      'Acoustic or Electric Guitar, Bass Guitar, Drums, Piano and Vocal Lessons',
      'Rock Band Coaching and Stage Presence',
      'Guitar for Songwriting'
    ],
    ctaHref: '/lessons'
  }
];

export default function SplashHeroAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      className="splash-hero-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '2px solid #b8972e',
        boxSizing: 'border-box',
        paddingTop: '16px'
      }}
    >
      {/* 5-PLY GIBSON CUSTOM BINDING ACCENT (GOLD & CREAM) */}
      <div style={{ height: '3px', backgroundColor: '#d4af37', width: '100%', position: 'absolute', top: 0, left: 0 }} />
      <div style={{ height: '1px', backgroundColor: '#ede2cb', width: '100%', position: 'absolute', top: '3px', left: 0, opacity: 0.8 }} />

      {/* TOP BRAND HEADER (Centered: Official Logo + 3 Offering Links) */}
      <div style={{
        padding: '0 16px 8px 16px',
        textAlign: 'center',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
        {/* OFFICIAL SCENIC ROUTE MUSIC LOGO */}
        <div style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2px'
        }}>
          <Image
            src="/images/scenic-route-logo.jpg"
            alt="Scenic Route Music"
            width={260}
            height={140}
            style={{
              height: 'auto',
              maxHeight: '85px',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen'
            }}
            priority
          />
        </div>

        {/* 3 OFFERINGS AS DIRECT NAV LINKS UNDERNEATH LOGO */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '2px'
        }}>
          {OFFERINGS.map((offering) => {
            const Icon = offering.icon;
            return (
              <Link
                key={offering.id}
                href={offering.ctaHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  backgroundColor: '#121212',
                  border: '1px solid #2e2e2e',
                  color: '#f5ecd7',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  textDecoration: 'none',
                  fontFamily: "'Courier New', Courier, monospace, sans-serif",
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={12} color="#d4af37" />
                <span>{offering.title}</span>
              </Link>
            );
          })}
        </div>

        {/* FAST CREDENTIALS LINE */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '10px',
          color: '#a8a090',
          fontFamily: "'Courier New', Courier, monospace, sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '1.2px',
          marginTop: '2px'
        }}>
          <span style={{ color: '#d4af37', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
            <ShieldCheck size={11} color="#d4af37" /> SDVOSB
          </span>
          <span style={{ color: '#444444' }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
            <MapPin size={11} color="#d4af37" /> Bellingham, WA
          </span>
          <span style={{ color: '#444444' }}>•</span>
          <span style={{ color: '#ede2cb', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
            <Sparkles size={11} color="#d4af37" /> Serving the U.S.A.
          </span>
        </div>
      </div>

      {/* ─── DESKTOP VIEW: 3 EXPANDING VERTICAL PANELS ─── */}
      <div 
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          flex: 1,
          minHeight: 0,
          flexDirection: 'row',
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '6px 18px 12px 18px',
          gap: '14px',
          boxSizing: 'border-box',
          alignItems: 'stretch'
        }}
        className="splash-desktop-accordion"
      >
        {OFFERINGS.map((offering, idx) => {
          const isHovered = hoveredIndex === idx;
          const isNoneHovered = hoveredIndex === null;
          const Icon = offering.icon;

          const panelFlex = isNoneHovered ? 1 : isHovered ? 2.2 : 0.75;

          return (
            <Link
              key={offering.id}
              href={offering.ctaHref}
              onMouseEnter={() => setHoveredIndex(idx)}
              style={{
                flex: panelFlex,
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isHovered ? '#161616' : isNoneHovered ? '#0f0f0f' : '#0a0a0a',
                border: isHovered 
                  ? '2px solid #d4af37' 
                  : isNoneHovered 
                    ? '1px solid #2a2a2a' 
                    : '1px solid #1a1a1a',
                boxShadow: isHovered 
                  ? '0 10px 36px rgba(0,0,0,0.95), 0 0 24px rgba(212,175,55,0.25), inset 0 0 16px rgba(245,236,215,0.06)' 
                  : 'inset 0 0 12px rgba(0,0,0,0.8)',
                borderRadius: '4px',
                padding: isHovered ? '28px 24px' : isNoneHovered ? '24px 20px' : '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxSizing: 'border-box',
                textDecoration: 'none',
                color: 'inherit'
              }}
              className="splash-panel"
            >
              {/* Top Gold Hardware Strip */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                backgroundColor: isHovered ? '#d4af37' : isNoneHovered ? '#333333' : 'transparent',
                transition: 'background-color 0.3s'
              }} />

              {/* CARD TOP ICON */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '4px',
                  backgroundColor: isHovered ? '#1c1c1c' : '#141414',
                  border: isHovered ? '1px solid #f5ecd7' : '1px solid #2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d4af37',
                  boxShadow: isHovered ? '0 0 12px rgba(212,175,55,0.35)' : 'none',
                  transition: 'all 0.3s'
                }}>
                  <Icon size={22} />
                </div>
              </div>

              {/* TITLE */}
              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: isHovered ? '24px' : isNoneHovered ? '21px' : '17px',
                color: '#ffffff',
                margin: '0 0 18px 0',
                lineHeight: 1.2,
                transition: 'all 0.3s'
              }}>
                {offering.title}
              </h3>

              {/* BULLET POINTS */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                borderTop: '1px solid #222222',
                paddingTop: '16px',
                opacity: isHovered || isNoneHovered ? 1 : 0.4,
                transition: 'opacity 0.3s ease'
              }}>
                {offering.bullets.map((bullet) => (
                  <div 
                    key={bullet} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '8px', 
                      fontSize: '13px', 
                      color: '#ede2cb',
                      lineHeight: 1.4,
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
                    }}
                  >
                    <CheckCircle2 size={14} color="#d4af37" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      {/* ─── MOBILE VIEW ONLY: 3 HORIZONTAL CLICKABLE SECTIONS ─── */}
      <div 
        className="splash-mobile-horizontal-container"
        style={{
          width: '100%',
          padding: '12px 16px 18px 16px',
          boxSizing: 'border-box',
          gap: '12px'
        }}
      >
        {OFFERINGS.map((offering) => {
          const Icon = offering.icon;

          return (
            <Link
              key={offering.id}
              href={offering.ctaHref}
              className="splash-mobile-horizontal-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#111111',
                border: '1px solid #282828',
                borderLeft: '4px solid #d4af37',
                borderRadius: '6px',
                padding: '14px 14px',
                textDecoration: 'none',
                color: 'inherit',
                boxShadow: '0 4px 18px rgba(0,0,0,0.85), 0 0 10px rgba(212,175,55,0.08)',
                gap: '12px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Subtle top gloss border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: '#ede2cb',
                opacity: 0.25
              }} />

              {/* LEFT ICON */}
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                backgroundColor: '#1a1a1a',
                border: '1px solid #d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d4af37',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.6)'
              }}>
                <Icon size={19} />
              </div>

              {/* CENTER: BOLD HEADER + ONE-LINE SUBTLE DROP SHADOW SUMMARY */}
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <h3 style={{
                  margin: 0,
                  fontFamily: 'Georgia, serif',
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.2,
                  letterSpacing: '0.2px',
                  textShadow: '0 1px 3px rgba(0,0,0,0.9)'
                }}>
                  {offering.title}
                </h3>

                {/* ONE-LINE SUMMARY WITH SUBTLE DROP SHADOW */}
                <p 
                  className="mobile-summary-text"
                  style={{
                    margin: 0,
                    fontSize: '12px',
                    color: '#d5cec2',
                    lineHeight: 1.35,
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    textShadow: '0 1px 3px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.85)'
                  }}
                >
                  {offering.summary}
                </p>
              </div>

              {/* RIGHT CHEVRON */}
              <div style={{
                color: '#d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                paddingLeft: '2px'
              }}>
                <ChevronRight size={18} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* COMPACT BOTTOM PROMPT */}
      <div 
        style={{
          padding: '8px 16px',
          textAlign: 'center',
          backgroundColor: '#070707',
          borderTop: '1px solid #1f1f1f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          zIndex: 10
        }}
      >
        <span style={{
          fontSize: '10px',
          color: '#d4af37',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          fontWeight: 700,
          fontFamily: "'Courier New', Courier, monospace, sans-serif"
        }}>
          ✦ Select any offering above to view details &amp; book services ✦
        </span>
      </div>

      {/* RESPONSIVE TOGGLE STYLES */}
      <style jsx>{`
        /* Desktop Default */
        .splash-hero-section {
          height: 100vh;
          max-height: 100vh;
          overflow: hidden;
        }
        .splash-desktop-accordion {
          display: flex !important;
        }
        .splash-mobile-horizontal-container {
          display: none !important;
        }

        /* Mobile View Only (<= 768px) */
        @media (max-width: 768px) {
          .splash-hero-section {
            height: auto !important;
            min-height: 100vh;
            max-height: none !important;
            overflow: visible !important;
            padding-bottom: 16px;
          }
          .splash-desktop-accordion {
            display: none !important;
          }
          .splash-mobile-horizontal-container {
            display: flex !important;
            flex-direction: column !important;
          }
          .splash-mobile-horizontal-card:active {
            transform: scale(0.985);
            background-color: #181818 !important;
            border-color: #d4af37 !important;
          }
        }
      `}</style>
    </section>
  );
}

