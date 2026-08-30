'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sliders, Mic2, GraduationCap } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  // If on home page, SplashHeroAccordion provides the top logo and links
  if (pathname === '/') {
    return null;
  }

  const offerings = [
    { href: '/live-sound', label: 'Live Sound & AV', icon: Sliders },
    { href: '/live-music', label: 'Live Music By Luke Moore', icon: Mic2 },
    { href: '/lessons', label: 'Music Lessons', icon: GraduationCap },
  ];

  return (
    <header style={{
      backgroundColor: '#070707',
      borderBottom: '2px solid #b8972e',
      paddingTop: '16px',
      paddingBottom: '16px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 40
    }}>
      {/* 5-PLY GIBSON CUSTOM BINDING ACCENT (GOLD & CREAM) */}
      <div style={{ height: '3px', backgroundColor: '#d4af37', width: '100%', position: 'absolute', top: 0, left: 0 }} />
      <div style={{ height: '1px', backgroundColor: '#ede2cb', width: '100%', position: 'absolute', top: '3px', left: 0, opacity: 0.8 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* CENTERED OFFICIAL LOGO LINKING BACK TO HOME */}
        <Link 
          href="/" 
          style={{ 
            textDecoration: 'none', 
            display: 'inline-flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: '10px'
          }}
          title="Return to Main Page"
        >
          <Image
            src="/images/scenic-route-logo.jpg"
            alt="Scenic Route Music"
            width={240}
            height={130}
            style={{
              height: 'auto',
              maxHeight: '80px',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen',
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            priority
          />
        </Link>

        {/* 3 OFFERINGS AS NAV LINKS DIRECTLY UNDER LOGO */}
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {offerings.map((offering) => {
            const isActive = pathname === offering.href;
            const Icon = offering.icon;
            return (
              <Link
                key={offering.href}
                href={offering.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  backgroundColor: isActive ? '#d4af37' : '#121212',
                  color: isActive ? '#0a0a0a' : '#ede2cb',
                  border: isActive ? '1px solid #f5ecd7' : '1px solid #282828',
                  fontSize: '12px',
                  fontWeight: isActive ? 800 : 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  textDecoration: 'none',
                  fontFamily: "'Courier New', Courier, monospace, sans-serif",
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 2px 12px rgba(212,175,55,0.35)' : 'none'
                }}
              >
                <Icon size={14} color={isActive ? '#0a0a0a' : '#d4af37'} />
                <span>{offering.label}</span>
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
