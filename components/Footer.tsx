'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, MapPin, ArrowUpRight } from 'lucide-react';
import { SpotifyIcon, YouTubeIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '2px solid #b8972e',
      backgroundColor: '#070707',
      color: '#a8a090',
      fontSize: '12px',
      fontFamily: "'Courier New', Courier, monospace, sans-serif"
    }}>
      {/* 5-PLY GIBSON CUSTOM BINDING ACCENT (GOLD & CREAM) */}
      <div style={{ height: '2px', backgroundColor: '#d4af37', width: '100%' }} />
      <div style={{ height: '1px', backgroundColor: '#ede2cb', width: '100%', opacity: 0.6 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 20px 32px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px',
          marginBottom: '40px'
        }}>
          
          {/* BRAND COLUMN */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
              <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <Image
                  src="/images/scenic-route-logo.jpg"
                  alt="Scenic Route Music"
                  width={180}
                  height={95}
                  style={{
                    height: 'auto',
                    maxHeight: '56px',
                    width: 'auto',
                    objectFit: 'contain',
                    mixBlendMode: 'screen'
                  }}
                />
              </Link>
            </div>
            
            <p style={{
              fontSize: '13px',
              color: '#d5cec2',
              lineHeight: 1.6,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              marginBottom: '16px'
            }}>
              Premier audiovisual production, live performance by Luke Moore, and music instruction. Serving the U.S.A.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#d4af37',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: '1px solid #2e2e2e',
              padding: '6px 10px',
              backgroundColor: '#121212'
            }}>
              <ShieldCheck size={14} color="#d4af37" /> SDVOSB Certified Contractor
            </div>
          </div>

          {/* THREE CORE SERVICES */}
          <div>
            <h4 style={{
              color: '#d4af37',
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '16px',
              borderBottom: '1px solid #222222',
              paddingBottom: '8px'
            }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link href="/live-sound" style={{ color: '#ede2cb', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowUpRight size={13} color="#d4af37" />
                  <span>Live Sound &amp; Audiovisual Production</span>
                </Link>
              </li>
              <li>
                <Link href="/live-music" style={{ color: '#ede2cb', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowUpRight size={13} color="#d4af37" />
                  <span>Live Music (Luke Moore • Solo/Duo/Band)</span>
                </Link>
              </li>
              <li>
                <Link href="/lessons" style={{ color: '#ede2cb', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowUpRight size={13} color="#d4af37" />
                  <span>Music Lessons (Rock Band &amp; Songwriting)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* SDVOSB PROCUREMENT & ARTIST PROFILES */}
          <div>
            <h4 style={{
              color: '#d4af37',
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '16px',
              borderBottom: '1px solid #222222',
              paddingBottom: '8px'
            }}>
              Contractor &amp; Artist
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px' }}>
              <div>
                <span style={{ color: '#777777', textTransform: 'uppercase', display: 'block' }}>Entity</span>
                <span style={{ color: '#f5f2eb', fontWeight: 600 }}>Scenic Route Music LLC</span>
              </div>
              <div>
                <span style={{ color: '#777777', textTransform: 'uppercase', display: 'block' }}>Contractor / Owner</span>
                <span style={{ color: '#f5f2eb' }}>Luke Moore (SDVOSB)</span>
              </div>
              <div>
                <span style={{ color: '#777777', textTransform: 'uppercase', display: 'block' }}>Streaming &amp; Social</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '3px' }}>
                  <a 
                    href="https://open.spotify.com/artist/4B7nwmbI38Z1vKMBb3ikDr?si=8k61dq-GRSC0hqPxrY7BeA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#1db954', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                  >
                    <SpotifyIcon size={13} color="#1db954" /> Spotify Artist
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UCk3q7zz31DM4u1XaWiD1pAQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#ff4d4d', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                  >
                    <YouTubeIcon size={13} color="#ff0000" /> YouTube Channel
                  </a>
                  <a 
                    href="https://www.instagram.com/lukemooreguitar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#e1306c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                  >
                    <InstagramIcon size={13} color="#e1306c" /> @lukemooreguitar
                  </a>
                </div>
              </div>
              <div style={{ marginTop: '4px' }}>
                <span style={{ color: '#777777', textTransform: 'uppercase', display: 'block' }}>Primary NAICS Codes</span>
                <span style={{ color: '#d4af37', fontFamily: 'monospace' }}>
                  711510 • 512240 • 611610 • 561920
                </span>
              </div>
            </div>
          </div>

          {/* SERVICE AREA & CONTACT */}
          <div>
            <h4 style={{
              color: '#d4af37',
              fontSize: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '16px',
              borderBottom: '1px solid #222222',
              paddingBottom: '8px'
            }}>
              Service Region
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', color: '#d5cec2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={15} color="#d4af37" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#f5f2eb' }}>Headquartered in Bellingham, WA</strong>
                  <div style={{ fontSize: '11px', color: '#a8a090', marginTop: '2px' }}>
                    Available for travel across Whatcom, Skagit, Snohomish, King, Pierce counties &amp; throughout Washington State.
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '4px' }}>
                <Link
                  href="/live-sound#contact"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#d4af37',
                    color: '#0a0a0a',
                    fontWeight: 800,
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    border: '1px solid #f5ecd7'
                  }}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div style={{
          borderTop: '1px solid #1c1c1c',
          paddingTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '11px',
          color: '#666666'
        }}>
          <div>
            © {new Date().getFullYear()} Scenic Route Music LLC. All rights reserved.
          </div>
          <div>
            Washington State LLC • Service-Disabled Veteran-Owned Small Business
          </div>
        </div>

      </div>
    </footer>
  );
}
