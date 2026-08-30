'use client';

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  Tv,
  Radio
} from "lucide-react";

export default function LiveSoundPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Wedding (Ceremony & Reception)",
    date: "",
    location: "Bellingham / Whatcom County",
    liveMusicAddon: "None (Sound Engineering Only)",
    details: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const solutionCategories = [
    {
      categoryTitle: "Live Sound & Concert Production",
      icon: Sliders,
      items: [
        {
          label: "Acoustic & Solo/Duo Sets",
          desc: "Compact, crystal-clear PA systems tailored for intimate performances, tasting rooms, patio shows, and private gatherings."
        },
        {
          label: "Full-Band Sound Reinforcement",
          desc: "Digital mixing, stage monitoring (wedges or in-ear systems), full drum and backline microphone kits, and dedicated Front-of-House engineering."
        },
        {
          label: "Weddings & Private Events",
          desc: "Complete audio coverage for ceremonies, cocktail hours, and receptions, featuring discrete wireless microphones and background playback."
        }
      ]
    },
    {
      categoryTitle: "Corporate & Event AV",
      icon: Tv,
      items: [
        {
          label: "Keynotes & Presentations",
          desc: "Speech-optimized PA systems, podium microphones, wireless lapel/handheld units, and seamless laptop media integration."
        },
        {
          label: "Panel Discussions & Town Halls",
          desc: "Multi-microphone setups, active feedback suppression, and dedicated roaming microphones for audience Q&A."
        },
        {
          label: "Visual Displays & Projection",
          desc: "High-definition video projection, portable fast-fold screens, and large confidence monitors for slide decks and video presentations."
        }
      ]
    },
    {
      categoryTitle: "Add-On Services",
      icon: Radio,
      items: [
        {
          label: "Multi-Track Live Recording",
          desc: "Capture individual track stems or direct stereo soundboard feeds for live releases, archives, or promotional content."
        },
        {
          label: "Stage & Ambient Lighting",
          desc: "Wireless LED uplighting packages and stage wash lighting to elevate your venue's atmosphere."
        },
        {
          label: "Livestream & Broadcast Audio",
          desc: "Dedicated mix-minus audio feeds routed directly into Zoom, YouTube, or private streaming broadcasts."
        }
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "Wedding (Ceremony & Reception)",
      date: "",
      location: "Bellingham / Whatcom County",
      liveMusicAddon: "None (Sound Engineering Only)",
      details: "",
    });
    setFormSubmitted(false);
  };

  return (
    <div style={{ minHeight: "100%", paddingBottom: "60px" }}>
      
      {/* HERO SECTION */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 20px 48px 20px"
      }}>
        <div style={{ maxWidth: "900px" }}>
          
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(34px, 5.5vw, 56px)",
            lineHeight: 1.15,
            color: "#ffffff",
            margin: "0 0 16px 0",
            fontWeight: 700
          }}>
            Precision Live Sound &amp; Audiovisual Design <br />
            <span style={{ color: "#d4af37", fontStyle: "italic", fontSize: "clamp(24px, 3.8vw, 38px)" }}>
              Clarity, Impact and Reliability
            </span>
          </h1>

          <p style={{
            fontSize: "17px",
            color: "#d5cec2",
            lineHeight: 1.75,
            marginBottom: "32px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }}>
            <strong>Scenic Route Music</strong> delivers high-definition live sound engineering and turnkey AV production across Washington State. From intimate acoustic ceremonies to corporate galas and rock shows, we dial in pristine sound and provide visual solutions for any event.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#contact" style={{
              padding: "14px 28px",
              backgroundColor: "#d4af37",
              color: "#0a0a0a",
              fontWeight: 800,
              fontSize: "13px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid #f5ecd7",
              boxShadow: "0 4px 15px rgba(212,175,55,0.35)",
              fontFamily: "'Courier New', Courier, monospace, sans-serif"
            }}>
              Request Sound Quote <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* COMPREHENSIVE SOLUTIONS SECTION */}
      <section style={{
        backgroundColor: "#070707",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "64px 20px"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "#ffffff", margin: "0 0 10px 0" }}>
              Engineered Audio &amp; Visual Services
            </h2>
            <p style={{ color: "#a8a090", fontSize: "15px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: 0 }}>
              Tailored acoustic deployment and visual integration for concerts, private celebrations, and corporate stages across Washington State.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {solutionCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.categoryTitle} style={{
                  backgroundColor: "#121212",
                  border: "2px solid #b8972e",
                  padding: "32px 26px",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.8), inset 0 0 15px rgba(245,236,215,0.03)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  {/* Top Gold Hardware Line */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "#d4af37" }} />

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                      <div style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "4px",
                        backgroundColor: "#1c1c1c",
                        border: "1px solid #d4af37",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#d4af37"
                      }}>
                        <Icon size={20} />
                      </div>
                      <h3 style={{ fontFamily: "Georgia, serif", fontSize: "21px", color: "#ffffff", margin: 0 }}>
                        {cat.categoryTitle}
                      </h3>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "18px", borderTop: "1px solid #222222", paddingTop: "18px" }}>
                      {cat.items.map((item) => (
                        <div key={item.label}>
                          <div style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            marginBottom: "4px"
                          }}>
                            <CheckCircle2 size={15} color="#d4af37" style={{ marginTop: "2px", flexShrink: 0 }} />
                            <strong style={{ color: "#ffffff", fontSize: "14px", fontFamily: "Georgia, serif" }}>
                              {item.label}
                            </strong>
                          </div>
                          <p style={{
                            fontSize: "13px",
                            color: "#d5cec2",
                            lineHeight: 1.6,
                            margin: 0,
                            paddingLeft: "23px",
                            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
                          }}>
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SPECIAL FEATURED ADD-ON BUNDLE */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "64px 20px"
      }}>
        <div style={{
          backgroundColor: "#121212",
          border: "2px solid #b8972e",
          padding: "36px 30px",
          boxShadow: "0 6px 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(212,175,55,0.06)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          alignItems: "center"
        }}>
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "#ffffff", margin: "0 0 14px 0" }}>
              Add Live Music by Luke Moore <br />
              <span style={{ color: "#d4af37", fontStyle: "italic", fontSize: "22px" }}>
                Americana Singer-Songwriter &amp; Band
              </span>
            </h2>

            <p style={{
              fontSize: "14px",
              color: "#d5cec2",
              lineHeight: 1.7,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              margin: "0 0 20px 0"
            }}>
              Why hire two separate vendors? Combine your <strong>Live Sound / PA System</strong> with stage-tested live music performed by Luke Moore. Choose between intimate acoustic solo sets, harmonized duo sets, or a full rock/Americana band.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/live-music" style={{
                padding: "10px 20px",
                backgroundColor: "#d4af37",
                color: "#0a0a0a",
                fontWeight: 800,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid #f5ecd7",
                fontFamily: "'Courier New', Courier, monospace, sans-serif"
              }}>
                View Song List &amp; Music Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div style={{
            backgroundColor: "#0a0a0a",
            border: "1px solid #282828",
            padding: "24px"
          }}>
            <h4 style={{ color: "#ffffff", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 16px 0", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
              Popular Sound + Music Packages
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ padding: "12px", backgroundColor: "#141414", borderLeft: "3px solid #d4af37" }}>
                <strong style={{ color: "#ffffff", fontSize: "13px", display: "block" }}>The Complete Wedding Package</strong>
                <span style={{ fontSize: "12px", color: "#a8a090" }}>Full ceremony &amp; reception PA + Solo acoustic cocktail hour &amp; dinner set.</span>
              </div>

              <div style={{ padding: "12px", backgroundColor: "#141414", borderLeft: "3px solid #d4af37" }}>
                <strong style={{ color: "#ffffff", fontSize: "13px", display: "block" }}>The Corporate Dinner &amp; Stage</strong>
                <span style={{ fontSize: "12px", color: "#a8a090" }}>Podium &amp; keynote sound engineering + Acoustic duo entertainment.</span>
              </div>

              <div style={{ padding: "12px", backgroundColor: "#141414", borderLeft: "3px solid #d4af37" }}>
                <strong style={{ color: "#ffffff", fontSize: "13px", display: "block" }}>Festival &amp; Civic Headliner</strong>
                <span style={{ fontSize: "12px", color: "#a8a090" }}>Stage management, multi-band sound mixing + Luke Moore Full Band set.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / AV QUOTE FORM */}
      <section id="contact" style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 20px 20px 20px" }}>
        <div style={{ marginBottom: "28px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#ffffff", margin: "0 0 8px 0" }}>
            Request an Audiovisual &amp; Sound Quote
          </h2>
          <p style={{ color: "#a8a090", fontSize: "14px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0 }}>
            Tell us about your upcoming wedding, corporate event, or stage. We reply with itemized proposals and availability.
          </p>
        </div>

        <div style={{
          backgroundColor: "#121212",
          border: "2px solid #b8972e",
          padding: "32px",
          boxShadow: "0 6px 30px rgba(0,0,0,0.8)"
        }}>
          {formSubmitted ? (
            <div style={{ textAlign: "center", padding: "28px 0" }}>
              <div style={{ color: "#d4af37", fontWeight: 700, fontSize: "18px", marginBottom: "8px", fontFamily: "Georgia, serif" }}>
                Sound Request Received
              </div>
              <p style={{ color: "#f5f2eb", fontSize: "14px", margin: "0 0 8px 0", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Thank you, <strong>{formData.name || "friend"}</strong>! We have received your inquiry for <strong>{formData.eventType}</strong> in <strong>{formData.location}</strong>.
              </p>
              <p style={{ color: "#a8a090", fontSize: "13px", margin: "0 0 24px 0", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Luke Moore will review the technical requirements and reply with gear specs and availability shortly.
              </p>
              <button 
                type="button"
                onClick={handleReset}
                style={{ 
                  padding: "10px 22px", 
                  backgroundColor: "#1a1a1a", 
                  color: "#d4af37", 
                  border: "1px solid #d4af37", 
                  fontSize: "12px", 
                  fontWeight: 700, 
                  textTransform: "uppercase", 
                  letterSpacing: "1px", 
                  cursor: "pointer",
                  fontFamily: "'Courier New', Courier, monospace, sans-serif"
                }}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "12px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div>
                  <label htmlFor="name-input" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Name / Org *</label>
                  <input 
                    id="name-input"
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2c2c2c", color: "#f5f2eb", boxSizing: "border-box", fontFamily: "inherit" }} 
                    placeholder="Your Name or Organization" 
                  />
                </div>
                <div>
                  <label htmlFor="email-input" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Email *</label>
                  <input 
                    id="email-input"
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2c2c2c", color: "#f5f2eb", boxSizing: "border-box", fontFamily: "inherit" }} 
                    placeholder="you@example.com" 
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div>
                  <label htmlFor="event-type" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Event Type</label>
                  <select 
                    id="event-type"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2c2c2c", color: "#f5f2eb", boxSizing: "border-box", fontFamily: "inherit" }}
                  >
                    <option value="Wedding (Ceremony & Reception)">Wedding (Ceremony &amp; Reception)</option>
                    <option value="Corporate Event / Gala">Corporate Event / Gala</option>
                    <option value="Festival / Outdoor Stage">Festival / Outdoor Stage</option>
                    <option value="Private Gathering / Party">Private Gathering / Party</option>
                    <option value="Municipal / Government RFP">Municipal / Government RFP (SDVOSB)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location-input" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Event Location in WA</label>
                  <input 
                    id="location-input"
                    required 
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2c2c2c", color: "#f5f2eb", boxSizing: "border-box", fontFamily: "inherit" }} 
                    placeholder="e.g. Bellingham, Seattle, Leavenworth..." 
                  />
                </div>
              </div>

              {/* LIVE MUSIC ADD-ON SELECTOR */}
              <div style={{ backgroundColor: "#181818", border: "1px solid #2c2c2c", padding: "12px 14px" }}>
                <label htmlFor="music-addon" style={{ display: "block", color: "#d4af37", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px", fontWeight: 700 }}>
                  ✦ Add-On Live Music by Luke Moore (Optional)
                </label>
                <select 
                  id="music-addon"
                  value={formData.liveMusicAddon}
                  onChange={(e) => setFormData({ ...formData, liveMusicAddon: e.target.value })}
                  style={{ width: "100%", padding: "10px", backgroundColor: "#0a0a0a", border: "1px solid #b8972e", color: "#f5f2eb", boxSizing: "border-box", fontFamily: "inherit" }}
                >
                  <option value="None (Sound Engineering Only)">None (Sound Engineering Only)</option>
                  <option value="Add Solo Acoustic Luke Moore Set (Cocktail/Dinner)">Add Solo Acoustic Luke Moore Set (Cocktail/Dinner)</option>
                  <option value="Add Acoustic Duo Harmonies Set">Add Acoustic Duo Harmonies Set</option>
                  <option value="Add Full Rock/Americana Band Set">Add Full Rock/Americana Band Set</option>
                </select>
              </div>

              <div>
                <label htmlFor="details-textarea" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Event Details (Date, Estimated Attendance, Venue Setup)</label>
                <textarea 
                  id="details-textarea"
                  rows={4} 
                  required 
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2c2c2c", color: "#f5f2eb", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} 
                  placeholder="Tell us about the schedule, indoor/outdoor setup, number of speakers/microphones needed, projection/visual displays..."
                />
              </div>

              <button type="submit" style={{ 
                padding: "14px", 
                backgroundColor: "#d4af37", 
                color: "#0a0a0a", 
                fontWeight: 800, 
                fontSize: "13px", 
                textTransform: "uppercase", 
                letterSpacing: "1.5px", 
                border: "1px solid #f5ecd7", 
                cursor: "pointer", 
                marginTop: "6px" 
              }}>
                Submit Sound &amp; AV Request
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
