'use client';

import React, { useState } from "react";
import { 
  Sliders, 
  Mic2, 
  ShieldCheck, 
  FileText, 
  Check, 
  ArrowRight,
  Drum,
  Guitar,
  Piano,
  Radio,
  Ampersand
} from "lucide-react";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const gearLessons = [
    { title: "Guitar", desc: "Acoustic & electric. Rhythm pocket, chord shapes, lead phrasing, and dialing in tube amp gain stages.", icon: Guitar },
    { title: "Bass", desc: "No noodling. Real groove lock with the kick drum, root dynamics, and stage feel.", icon: Sliders },
    { title: "Drums", desc: "Limb independence, solid tempo without rushing the chorus, and dynamic control in tight rooms.", icon: Drum },
    { title: "Keys", desc: "Comping chords, synth leads, and learning how to sit in a band mix without stepping on the bass.", icon: Piano },
    { title: "Vocals", desc: "Breath support, pitch discipline, mic technique, and how not to blow out your throat on gig night.", icon: Mic2 },
  ];

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#0a0a0a", 
      color: "#f5f2eb", 
      fontFamily: "'Courier New', Courier, monospace, -apple-system, sans-serif",
      lineHeight: 1.5
    }}>
      
      {/* AGED BINDING TOP STRIP */}
      <div style={{ 
        backgroundColor: "#111111", 
        borderBottom: "2px solid #b8972e", 
        padding: "8px 16px", 
        fontSize: "11px", 
        letterSpacing: "1.5px", 
        textTransform: "uppercase", 
        color: "#d4af37",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px"
      }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 700 }}>
          <ShieldCheck size={14} color="#d4af37" /> SDVOSB • Service-Disabled Veteran Owned
        </span>
        <span style={{ color: "#8a8275" }}>Washington State LLC • Bellingham & PNW</span>
      </div>

      {/* HEADER / NAVIGATION */}
      <header style={{ 
        borderBottom: "1px solid #222222", 
        backgroundColor: "#0a0a0a", 
        position: "sticky", 
        top: 0, 
        zIndex: 50 
      }}>
        <div style={{ 
          maxWidth: "1050px", 
          margin: "0 auto", 
          padding: "16px 20px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between" 
        }}>
          <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ 
              width: "36px", 
              height: "36px", 
              border: "2px solid #d4af37", 
              backgroundColor: "#151515", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              color: "#f3e5ab",
              fontWeight: 900,
              fontSize: "14px",
              boxShadow: "inset 0 0 4px #000"
            }}>
              SR
            </div>
            <div>
              <span style={{ 
                fontFamily: "Georgia, serif", 
                fontWeight: 700, 
                fontSize: "18px", 
                color: "#f5f2eb", 
                letterSpacing: "0.5px",
                display: "block" 
              }}>
                Scenic Route Music
              </span>
              <span style={{ 
                fontSize: "9px", 
                color: "#b8972e", 
                letterSpacing: "2px", 
                textTransform: "uppercase", 
                fontWeight: 700 
              }}>
                Sound • Gig • Instruction
              </span>
            </div>
          </a>

          <nav style={{ display: "flex", gap: "20px", alignItems: "center", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
            <a href="#services" style={{ color: "#c4bcae", textDecoration: "none" }}>Work</a>
            <a href="#lessons" style={{ color: "#c4bcae", textDecoration: "none" }}>Lessons</a>
            <a href="#gov" style={{ color: "#c4bcae", textDecoration: "none" }}>Contracting</a>
            <a href="#contact" style={{ 
              padding: "8px 16px", 
              backgroundColor: "#d4af37", 
              color: "#0a0a0a", 
              fontWeight: 800, 
              textDecoration: "none",
              border: "1px solid #f3e5ab"
            }}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ maxWidth: "1050px", margin: "0 auto", padding: "64px 20px 48px 20px" }}>
        <div style={{ maxWidth: "800px" }}>
          
          <div style={{ 
            display: "inline-block", 
            borderLeft: "3px solid #d4af37", 
            paddingLeft: "12px", 
            color: "#d4af37", 
            fontSize: "12px", 
            textTransform: "uppercase", 
            letterSpacing: "2px", 
            marginBottom: "20px",
            fontWeight: 700
          }}>
            
          </div>

          <h1 style={{ 
            fontFamily: "Georgia, serif", 
            fontSize: "clamp(34px, 5vw, 56px)", 
            lineHeight: 1.1, 
            color: "#ffffff", 
            margin: "0 0 24px 0",
            fontWeight: 700
          }}>
            Live sound done right <br />
            <span style={{ color: "#d4af37", fontStyle: "italic" }}>Music Instruction for performance</span>
          </h1>

          <p style={{ 
            fontSize: "16px", 
            color: "#b5ac9a", 
            lineHeight: 1.7, 
            marginBottom: "32px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }}>
            Scenic Route Music provides performance, sound engineering, and music instruction. Stage-ready live sets, front of house sound, event music management, and instruction for guitar, bass, drums, keys, and vocals.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ 
              padding: "12px 24px", 
              backgroundColor: "#d4af37", 
              color: "#0a0a0a", 
              fontWeight: 800, 
              fontSize: "13px", 
              textDecoration: "none", 
              textTransform: "uppercase", 
              letterSpacing: "1px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid #f3e5ab"
            }}>
              Book a Job / Get Quote <ArrowRight size={16} />
            </a>

            <a href="#gov" style={{ 
              padding: "12px 24px", 
              backgroundColor: "#151515", 
              border: "1px solid #333333", 
              color: "#f5f2eb", 
              fontWeight: 700, 
              fontSize: "13px", 
              textDecoration: "none", 
              textTransform: "uppercase", 
              letterSpacing: "1px" 
            }}>
              Contractor Codes (SDVOSB)
            </a>
          </div>

        </div>
      </section>

      {/* CORE WORK BREAKDOWN */}
      <section id="services" style={{ 
        backgroundColor: "#0f0f0f", 
        borderTop: "1px solid #222222", 
        borderBottom: "1px solid #222222", 
        padding: "60px 20px" 
      }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          
          <div style={{ marginBottom: "36px" }}>
            <span style={{ color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}></span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#ffffff", margin: "4px 0 0 0" }}>What We Do</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            
            {/* Live Audio */}
            <div style={{ 
              backgroundColor: "#141414", 
              border: "1px solid #2a2a2a", 
              padding: "24px",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
            }}>
              <div style={{ color: "#d4af37", marginBottom: "16px" }}><Sliders size={28} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#ffffff", margin: "0 0 10px 0" }}>Live Sound & Board Mixing</h3>
              <p style={{ fontSize: "13px", color: "#9c9484", lineHeight: 1.6, fontFamily: "-apple-system, sans-serif", margin: "0 0 18px 0" }}>
                Front-of-House mixing, monitor management, feedback suppression, and room EQ. For outdoor events, festivals, and venue stages, I bring the exact rig required so you aren't paying for gear markups.
              </p>
              <div style={{ fontSize: "11px", color: "#d4af37", letterSpacing: "1px", textTransform: "uppercase", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div>• Digital mixing & PA routing</div>
                <div>• Room tuning & mic staging</div>
              </div>
            </div>

            {/* Performance */}
            <div style={{ 
              backgroundColor: "#141414", 
              border: "1px solid #2a2a2a", 
              padding: "24px",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
            }}>
              <div style={{ color: "#d4af37", marginBottom: "16px" }}><Mic2 size={28} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#ffffff", margin: "0 0 10px 0" }}>Live Performance</h3>
              <p style={{ fontSize: "13px", color: "#9c9484", lineHeight: 1.6, fontFamily: "-apple-system, sans-serif", margin: "0 0 18px 0" }}>
                Acoustic solo/duo or high-energy rock band sets tailored for private gatherings, civic events, municipal stages, and festival lineups. Professional, punctual, and volume-conscious.
              </p>
              <div style={{ fontSize: "11px", color: "#d4af37", letterSpacing: "1px", textTransform: "uppercase", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div>• Classic & modern rock catalog</div>
                <div>• Ceremonial & event entertainment</div>
              </div>
            </div>

            {/* Instruction */}
            <div style={{ 
              backgroundColor: "#141414", 
              border: "1px solid #2a2a2a", 
              padding: "24px",
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
            }}>
              <div style={{ color: "#d4af37", marginBottom: "16px" }}><Radio size={28} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#ffffff", margin: "0 0 10px 0" }}>Rock Band Coaching</h3>
              <p style={{ fontSize: "13px", color: "#9c9484", lineHeight: 1.6, fontFamily: "-apple-system, sans-serif", margin: "0 0 18px 0" }}>
                Practical instruction across all 5 rock band instruments. We learn actual songs, master timing, and train your ears so you can jump on stage with a real group without getting lost.
              </p>
              <div style={{ fontSize: "11px", color: "#d4af37", letterSpacing: "1px", textTransform: "uppercase", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div>• 5 core instruments taught</div>
                <div>• Ensemble & timing clinics</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LESSONS BREAKDOWN */}
      <section id="lessons" style={{ maxWidth: "1050px", margin: "0 auto", padding: "60px 20px" }}>
        <div style={{ marginBottom: "36px" }}>
          <span style={{ color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>Instruction</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#ffffff", margin: "4px 0 6px 0" }}>Learn Real Rhythm Section Mechanics</h2>
          <p style={{ color: "#9c9484", fontSize: "14px", fontFamily: "-apple-system, sans-serif", margin: 0 }}>
            Individual lessons or band tune-up workshops in Western Washington.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px" }}>
          {gearLessons.map((item) => (
            <div key={item.title} style={{ 
              backgroundColor: "#111111", 
              border: "1px solid #222222", 
              padding: "20px", 
              borderTop: "2px solid #d4af37" 
            }}>
              <h4 style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "#f5f2eb", margin: "0 0 8px 0" }}>{item.title}</h4>
              <p style={{ fontSize: "12px", color: "#8a8275", margin: 0, fontFamily: "-apple-system, sans-serif", lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SDVOSB & GOVERNMENT CONTRACTING */}
      <section id="gov" style={{ 
        backgroundColor: "#0d0d0d", 
        borderTop: "1px solid #222222", 
        borderBottom: "1px solid #222222", 
        padding: "60px 20px" 
      }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "36px", alignItems: "center" }}>
          
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#d4af37", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>
              <ShieldCheck size={16} /> Procurement Data & Bids
            </div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#ffffff", margin: "0 0 14px 0" }}>
              Contractor Specifications
            </h2>
            <p style={{ fontSize: "14px", color: "#9c9484", lineHeight: 1.6, fontFamily: "-apple-system, sans-serif", margin: "0 0 20px 0" }}>
              Scenic Route Music LLC is organized to fulfill municipal, state, and federal socioeconomic contracting goals. Low-overhead service delivery model utilizing contract-specific equipment cross-rentals.
            </p>
            <div style={{ fontSize: "12px", color: "#c4bcae", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div>✔ Washington Department of Revenue (DOR) Active</div>
              <div>✔ SDVOSB Veteran Status (VetCert & WDVA alignable)</div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: "#141414", 
            border: "1px solid #333333", 
            padding: "24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.8)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #222222", paddingBottom: "12px", marginBottom: "16px", color: "#d4af37", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
              <FileText size={16} /> Fast Facts
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
              <div>
                <span style={{ color: "#736b5e", textTransform: "uppercase", fontSize: "10px", display: "block" }}>Legal Name</span>
                <span style={{ color: "#f5f2eb", fontWeight: 700 }}>Scenic Route Music LLC</span>
              </div>

              <div>
                <span style={{ color: "#736b5e", textTransform: "uppercase", fontSize: "10px", display: "block" }}>Contractor</span>
                <span style={{ color: "#f5f2eb" }}>Luke Moore (SDVOSB)</span>
              </div>

              <div>
                <span style={{ color: "#736b5e", textTransform: "uppercase", fontSize: "10px", display: "block", marginBottom: "4px" }}>Relevant NAICS</span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", fontFamily: "monospace", fontSize: "11px" }}>
                  <div style={{ padding: "6px", backgroundColor: "#0a0a0a", border: "1px solid #222" }}><span style={{ color: "#d4af37" }}>711510</span> Performers</div>
                  <div style={{ padding: "6px", backgroundColor: "#0a0a0a", border: "1px solid #222" }}><span style={{ color: "#d4af37" }}>512240</span> Live Sound</div>
                  <div style={{ padding: "6px", backgroundColor: "#0a0a0a", border: "1px solid #222" }}><span style={{ color: "#d4af37" }}>611610</span> Music Training</div>
                  <div style={{ padding: "6px", backgroundColor: "#0a0a0a", border: "1px solid #222" }}><span style={{ color: "#d4af37" }}>561920</span> Events / AV</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 20px" }}>
        <div style={{ marginBottom: "28px", textAlign: "center" }}>
          <span style={{ color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>Get in Touch</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#ffffff", margin: "4px 0 6px 0" }}>Book a Gig or Lessons</h2>
          <p style={{ color: "#9c9484", fontSize: "13px", fontFamily: "-apple-system, sans-serif", margin: 0 }}>
            Send over your date, venue, or lesson requirements. I'll get back to you directly.
          </p>
        </div>

        <div style={{ backgroundColor: "#111111", border: "1px solid #2a2a2a", padding: "28px" }}>
          {formSubmitted ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ color: "#d4af37", fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>Message Received</div>
              <p style={{ color: "#8a8275", fontSize: "13px", margin: 0, fontFamily: "-apple-system, sans-serif" }}>
                Thanks Luke. I'll review the note and reply shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", color: "#8a8275", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Name / Org</label>
                  <input required style={{ width: "100%", padding: "10px", backgroundColor: "#0a0a0a", border: "1px solid #333333", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} placeholder="Luke Moore" />
                </div>
                <div>
                  <label style={{ display: "block", color: "#8a8275", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Email</label>
                  <input required type="email" style={{ width: "100%", padding: "10px", backgroundColor: "#0a0a0a", border: "1px solid #333333", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} placeholder="luke@example.com" />
                </div>
              </div>

              <div>
                <label style={{ display: "block", color: "#8a8275", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Service Needed</label>
                <select style={{ width: "100%", padding: "10px", backgroundColor: "#0a0a0a", border: "1px solid #333333", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }}>
                  <option>Live Sound Engineering (Board Op / Rigging)</option>
                  <option>Rock Band Lessons (Guitar/Bass/Drums/Keys/Vocals)</option>
                  <option>Live Music Performance</option>
                  <option>Gov / Municipal Contract RFP</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", color: "#8a8275", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Details (Date, Venue, Goals)</label>
                <textarea rows={4} required style={{ width: "100%", padding: "10px", backgroundColor: "#0a0a0a", border: "1px solid #333333", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} placeholder="Tell me what you're trying to put together..."></textarea>
              </div>

              <button type="submit" style={{ 
                padding: "12px", 
                backgroundColor: "#d4af37", 
                color: "#0a0a0a", 
                fontWeight: 800, 
                fontSize: "13px", 
                textTransform: "uppercase", 
                letterSpacing: "1px",
                border: "1px solid #f3e5ab",
                cursor: "pointer",
                marginTop: "6px"
              }}>
                Submit Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ 
        borderTop: "2px solid #b8972e", 
        backgroundColor: "#070707", 
        padding: "24px 20px", 
        textAlign: "center", 
        fontSize: "11px", 
        color: "#736b5e" 
      }}>
        <div style={{ color: "#d4af37", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>
          
        </div>
        <div>Washington State • Service-Disabled Veteran-Owned Small Business</div>
        <div style={{ marginTop: "8px", color: "#444444" }}>© {new Date().getFullYear()} Scenic Route Music LLC. All rights reserved.</div>
      </footer>

    </div>
  );
}