'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

interface Slide {
  src: string;
  alt: string;
  caption: string;
  formatTag: string;
}

const SLIDES: Slide[] = [
  {
    src: '/images/luke-live/luke_live_1.jpg',
    alt: 'Luke Moore singing with acoustic guitar and cowboy hat',
    caption: 'Americana & Country Roots • Acoustic Sets',
    formatTag: 'Solo Acoustic / Americana'
  },
  {
    src: '/images/luke-live/luke_live_6.jpg',
    alt: 'Luke Moore smiling and waving to the audience with acoustic guitar',
    caption: 'Crowd Connection & Live Entertainment',
    formatTag: 'Acoustic Storytelling'
  },
  {
    src: '/images/luke-live/luke_live_7.jpg',
    alt: 'Luke Moore passionately singing with acoustic guitar close-up',
    caption: 'Passionate Vocal & Acoustic Delivery',
    formatTag: 'Solo Acoustic & Harmonies'
  },
  {
    src: '/images/luke-live/luke_live_2.jpg',
    alt: 'Luke Moore playing electric guitar solo on stage',
    caption: 'Rock & Blues Lead Guitar Performance',
    formatTag: 'Full Band Lead'
  },
  {
    src: '/images/luke-live/luke_live_8.jpg',
    alt: 'Luke Moore in western hat playing acoustic guitar into stage mic',
    caption: 'Outlaw Country & Classic Rock Anthems',
    formatTag: 'Americana Roots'
  },
  {
    src: '/images/luke-live/luke_live_3.jpg',
    alt: 'Luke Moore performing on electric guitar in palm shirt',
    caption: 'Dynamic Stage Groove & Crowd Favorites',
    formatTag: 'Acoustic Duo & Rock Band'
  },
  {
    src: '/images/luke-live/luke_live_9.jpg',
    alt: 'Luke Moore singing with vintage acoustic guitar in warm lighting',
    caption: 'Warm Acoustic Ballads & Songwriting',
    formatTag: 'Originals & Covers'
  },
  {
    src: '/images/luke-live/luke_live_4.jpg',
    alt: 'Luke Moore singing live vocals into microphone',
    caption: 'Live Vocals, Harmonies & Storytelling',
    formatTag: 'Vocals & Guitar'
  },
  {
    src: '/images/luke-live/luke_live_5.jpg',
    alt: 'Luke Moore performing with Gibson guitar under stage lights',
    caption: 'Stage-Ready Sets Across Washington State',
    formatTag: 'Live in Bellingham & WA'
  }
];

export default function LiveMusicSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        border: '2px solid #b8972e',
        boxShadow: '0 8px 32px rgba(0,0,0,0.95), 0 0 24px rgba(212,175,55,0.25)',
        backgroundColor: '#0a0a0a',
        borderRadius: '4px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto'
      }}
    >
      {/* 5-PLY GIBSON CUSTOM BINDING ACCENT (GOLD & CREAM) */}
      <div style={{ height: '3px', backgroundColor: '#d4af37' }} />
      <div style={{ height: '1px', backgroundColor: '#ede2cb', opacity: 0.7 }} />

      {/* IMAGE DISPLAY CONTAINER */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '460px',
        backgroundColor: '#070707',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: idx === currentIndex ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
              pointerEvents: idx === currentIndex ? 'auto' : 'none'
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
              priority={idx === 0}
            />
            {/* Subtle dark gradient overlay at bottom for readable text */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.3) 30%, transparent 60%)'
            }} />
          </div>
        ))}

        {/* LEFT / RIGHT NAV ARROWS */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(10,10,10,0.85)',
            border: '1px solid #d4af37',
            color: '#f5ecd7',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.2s'
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(10,10,10,0.85)',
            border: '1px solid #d4af37',
            color: '#f5ecd7',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.2s'
          }}
        >
          <ChevronRight size={20} />
        </button>

        {/* FORMAT TAG BADGE TOP RIGHT */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: 'rgba(10,10,10,0.92)',
          border: '1px solid #d4af37',
          padding: '4px 10px',
          fontSize: '11px',
          color: '#f5ecd7',
          fontWeight: 700,
          fontFamily: "'Courier New', Courier, monospace, sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '1px',
          zIndex: 10
        }}>
          {currentSlide.formatTag}
        </div>
      </div>

      {/* CAPTION & INSTAGRAM BAR */}
      <div style={{
        backgroundColor: '#0c0c0c',
        borderTop: '1px solid #222222',
        padding: '12px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: 700,
            fontFamily: 'Georgia, serif'
          }}>
            {currentSlide.caption}
          </div>

          <a
            href="https://www.instagram.com/lukemooreguitar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#d4af37',
              fontSize: '11px',
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: "'Courier New', Courier, monospace, sans-serif",
              backgroundColor: '#161218',
              border: '1px solid #e1306c',
              padding: '4px 8px',
              borderRadius: '2px'
            }}
          >
            <InstagramIcon size={12} color="#e1306c" />
            <span>@lukemooreguitar</span>
          </a>
        </div>

        {/* DOTS NAVIGATION INDICATOR */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '4px'
        }}>
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === currentIndex ? '18px' : '6px',
                height: '5px',
                backgroundColor: idx === currentIndex ? '#d4af37' : '#333333',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
                border: 'none'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
