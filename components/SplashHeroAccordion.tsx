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
  CheckCircle2
} from 'lucide-react';

interface Offering {
  id: string;
  title: string;
  icon: React.ElementType;
  bullets: string[];
  ctaHref: string;
}

const OFFERINGS: Offering[] = [
  {
    id: 'live-sound',
    title: 'Live Sound & AV Production',
    icon: Sliders,
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
    icon: Mic2,
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
    icon: GraduationCap,
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
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderBottom: '2px solid #b8972e',
        boxSizing: 'border-box',
        paddingTop: '20px'
      }}
    >
      {/* 5-PLY GIBSON CUSTOM BINDING ACCENT (GOLD & CREAM) */}
      <div style={{ height: '3px', backgroundColor: '#d4af37', width: '100%', position: 'absolute', top: 0, left: 0 }} />
      <div style={{ height: '1px', backgroundColor: '#ede2cb', width: '100%', position: 'absolute', top: '3px', left: 0, opacity: 0.8 }} />

      {/* TOP BRAND HEADER (Centered: Official Logo + 3 Offering Links) */}
      <div style={{
        padding: '0 20px 8px 20px',
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
              maxHeight: '90px',
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
          marginTop: '4px'
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
                  padding: '6px 14px',
                  backgroundColor: '#121212',
                  border: '1px solid #2e2e2e',
                  color: '#f5ecd7',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  fontFamily: "'Courier New', Courier, monospace, sans-serif",
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={13} color="#d4af37" />
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
          gap: '10px',
          fontSize: '10px',
          color: '#a8a090',
          fontFamily: "'Courier New', Courier, monospace, sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
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
            <Sparkles size={11} color="#d4af37" /> Statewide WA Travel
          </span>
        </div>
      </div>

      {/* 3 EXPANDING VERTICAL PANELS (GLOSS BLACK & GOLD HARDWARE WITH CREAM BINDING) */}
      <div 
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '6px 18px 12px 18px',
          gap: '14px',
          boxSizing: 'border-box',
          alignItems: 'stretch'
        }}
        className="splash-accordion-container"
      >
        {OFFERINGS.map((offering, idx) => {
          const isHovered = hoveredIndex === idx;
          const isNoneHovered = hoveredIndex === null;
          const Icon = offering.icon;

          // Flex sizing: evenly spaced (1) when none hovered, or 2.2 vs 0.75 when one is hovered
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

      {/* COMPACT BOTTOM PROMPT */}
      <div 
        style={{
          padding: '8px 20px',
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

      {/* RESPONSIVE CSS */}
      <style jsx>{`
        @media (max-width: 900px) {
          .splash-accordion-container {
            flex-direction: column !important;
            height: auto !important;
            min-height: auto !important;
          }
          .splash-panel {
            flex: 1 1 auto !important;
            min-height: 180px;
          }
        }
      `}</style>
    </section>
  );
}
