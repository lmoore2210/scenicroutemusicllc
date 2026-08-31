'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Guitar, 
  Mic2, 
  Drum, 
  Piano, 
  Sliders, 
  CheckCircle2, 
  ArrowRight, 
  Volume2,
  Download,
  FileText,
  Sparkles,
  X,
  Lock,
  Mail,
  Check
} from 'lucide-react';
import { submitLeadToEmail } from '@/lib/emailService';

export default function LessonsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instrument: "Guitar (Acoustic / Electric)",
    track: "Acoustic Songwriting & Performance",
    experienceLevel: "Intermediate (Play some chords, want to perform/write)",
    lessonFormat: "1-on-1 Private Lessons (Bellingham WA / Studio)",
    goals: ""
  });

  // EMAIL GATE MODAL STATE FOR FREE CHEAT SHEET PDF
  const [isPdfGateOpen, setIsPdfGateOpen] = useState(false);
  const [isPdfUnlocked, setIsPdfUnlocked] = useState(false);
  const [gateEmail, setGateEmail] = useState("");
  const [gateName, setGateName] = useState("");
  const [gateSubmitted, setGateSubmitted] = useState(false);
  const [gateAction, setGateAction] = useState<'download' | 'view'>('download');

  const handleOpenPdfGate = (action: 'download' | 'view' = 'download') => {
    setGateAction(action);
    if (isPdfUnlocked) {
      if (action === 'download') {
        const link = document.createElement('a');
        link.href = '/downloads/songwriters-number-system-cheat-sheet.pdf';
        link.download = 'Songwriters-Number-System-Cheat-Sheet.pdf';
        link.click();
      } else {
        window.open('/downloads/songwriters-number-system-cheat-sheet.pdf', '_blank');
      }
    } else {
      setIsPdfGateOpen(true);
    }
  };

  const handleUnlockPdf = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gateEmail) return;
    setIsPdfUnlocked(true);
    setGateSubmitted(true);

    // Forward lead to scenicroutemusicllc@gmail.com
    submitLeadToEmail({
      subject: `[Cheat Sheet Download] New Lead: ${gateEmail}`,
      name: gateName || 'Musician',
      email: gateEmail,
      formType: 'Songwriting Cheat Sheet PDF Email Gate'
    });

    // Trigger instant download or view
    if (gateAction === 'download') {
      const link = document.createElement('a');
      link.href = '/downloads/songwriters-number-system-cheat-sheet.pdf';
      link.download = 'Songwriters-Number-System-Cheat-Sheet.pdf';
      link.click();
    } else {
      window.open('/downloads/songwriters-number-system-cheat-sheet.pdf', '_blank');
    }
  };

  const instruments = [
    {
      name: "Guitar (Acoustic & Electric)",
      icon: Guitar,
      rockFocus: "Rhythm pocket, chord voicing, riff construction, lead improvisation & amp tone.",
      acousticFocus: "Fingerpicking, open tunings (DADGAD), dynamic strumming & vocal accompaniment."
    },
    {
      name: "Bass Guitar",
      icon: Sliders,
      rockFocus: "Locking with the kick drum, walking basslines, groove maintenance & fretboard mastery.",
      acousticFocus: "Root-fifth harmonic foundation, acoustic bass phrasing & rhythmic support."
    },
    {
      name: "Drums & Percussion",
      icon: Drum,
      rockFocus: "Solid tempo, dynamic stage volume, 4-way independence & solid backbeats.",
      acousticFocus: "Cajón, brushes, shaker grooves & tasteful stripped-down accompaniment."
    },
    {
      name: "Vocals & Stage Mic Technique",
      icon: Mic2,
      rockFocus: "Vocal projection without strain, breath support, pitch control & stage presence.",
      acousticFocus: "Harmonies, mic proximity dynamics, emotional storytelling & lyrical phrasing."
    },
    {
      name: "Piano & Keys",
      icon: Piano,
      rockFocus: "Organ/pad layers, rhythmic piano comping, synth textures & song arrangement.",
      acousticFocus: "Solo piano-vocal accompaniment, chord inversions & melody harmonization."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Forward lesson inquiry to scenicroutemusicllc@gmail.com
    submitLeadToEmail({
      subject: `[Lesson Inquiry] ${formData.name} - ${formData.instrument}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      instrument: formData.instrument,
      track: formData.track,
      experienceLevel: formData.experienceLevel,
      lessonFormat: formData.lessonFormat,
      goals: formData.goals,
      formType: 'Music Lesson Consultation'
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      instrument: "Guitar (Acoustic / Electric)",
      track: "Acoustic Songwriting & Performance",
      experienceLevel: "Intermediate (Play some chords, want to perform/write)",
      lessonFormat: "1-on-1 Private Lessons (Bellingham WA / Studio)",
      goals: ""
    });
    setFormSubmitted(false);
  };

  return (
    <div style={{ minHeight: "100%", paddingBottom: "60px", position: "relative" }}>
      
      {/* HERO SECTION */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "64px 20px 48px 20px"
      }}>
        <div style={{ maxWidth: "880px" }}>
          
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(34px, 5.5vw, 58px)",
            lineHeight: 1.1,
            color: "#ffffff",
            margin: "0 0 20px 0",
            fontWeight: 700
          }}>
            Songwriting for Guitar &amp; Rock Band Performance
          </h1>

          <p style={{
            fontSize: "17px",
            color: "#d5cec2",
            lineHeight: 1.7,
            marginBottom: "32px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }}>
            Learn how music actually works on stage. Scenic Route Music provides practical, performance-driven instruction across <strong>Guitar, Vocals, Drums, Bass, and Piano</strong>. Whether you want to master the rhythm pocket in a loud rock band or write and perform your own original acoustic songs, we teach real musicality without tedious busywork.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#trial" style={{
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
              Book a Trial Lesson <ArrowRight size={16} />
            </a>

            {/* TOP BUTTON LINKING TO FREE PDF DOWNLOAD WITH EMAIL GATE */}
            <button
              onClick={() => handleOpenPdfGate('download')}
              style={{
                padding: "14px 22px",
                backgroundColor: "#1a1408",
                border: "1px solid #d4af37",
                color: "#f5ecd7",
                fontWeight: 700,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                fontFamily: "'Courier New', Courier, monospace, sans-serif",
                boxShadow: "0 4px 15px rgba(0,0,0,0.6)",
                transition: "all 0.2s ease"
              }}
            >
              <Download size={15} color="#d4af37" /> Free Songwriting PDF
            </button>

            <a href="#programs" style={{
              padding: "14px 22px",
              backgroundColor: "#141414",
              border: "1px solid #2e2e2e",
              color: "#ede2cb",
              fontWeight: 700,
              fontSize: "13px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Courier New', Courier, monospace, sans-serif"
            }}>
              Explore Programs
            </a>
          </div>

        </div>
      </section>

      {/* TWO DEDICATED INSTRUCTION TRACKS */}
      <section id="programs" style={{
        backgroundColor: "#070707",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "64px 20px"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "#ffffff", margin: "0 0 10px 0" }}>
              Two Core Learning Tracks
            </h2>
            <p style={{ color: "#a8a090", fontSize: "15px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: 0 }}>
              Choose your focus area, or blend both tracks to become a complete musician.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            
            {/* Track 1: Rock Band */}
            <div style={{
              backgroundColor: "#121212",
              border: "2px solid #b8972e",
              padding: "32px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: "-12px",
                left: "24px",
                backgroundColor: "#d4af37",
                color: "#0a0a0a",
                fontSize: "10px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                padding: "3px 10px",
                fontFamily: "'Courier New', Courier, monospace, sans-serif"
              }}>
                Track 01
              </div>

              <div style={{ color: "#d4af37", marginBottom: "16px", marginTop: "6px" }}><Volume2 size={32} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "#ffffff", margin: "0 0 12px 0" }}>
                Rock Band &amp; Ensemble Dynamics
              </h3>
              <p style={{ fontSize: "14px", color: "#d5cec2", lineHeight: 1.6, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: "0 0 20px 0" }}>
                Focused on playing in a live group without getting lost. We deconstruct real rock, blues, and funk songs so you master timing, stage volume control, dynamic shifts, and ear training.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Groove lock with kick drum &amp; bassline
                </li>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Amp settings, pedals &amp; stage tone dialing
                </li>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Song structure cues &amp; live communication
                </li>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Clinic tune-ups for existing bands
                </li>
              </ul>
            </div>

            {/* Track 2: Acoustic Songwriting */}
            <div style={{
              backgroundColor: "#121212",
              border: "2px solid #b8972e",
              padding: "32px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: "-12px",
                left: "24px",
                backgroundColor: "#d4af37",
                color: "#0a0a0a",
                fontSize: "10px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                padding: "3px 10px",
                fontFamily: "'Courier New', Courier, monospace, sans-serif"
              }}>
                Track 02
              </div>

              <div style={{ color: "#d4af37", marginBottom: "16px", marginTop: "6px" }}><Guitar size={32} /></div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "#ffffff", margin: "0 0 12px 0" }}>
                Acoustic Guitar, Songwriting &amp; Gigging
              </h3>
              <p style={{ fontSize: "14px", color: "#d5cec2", lineHeight: 1.6, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: "0 0 20px 0" }}>
                Designed for singer-songwriters who want to step on stage with just a guitar and microphone. We tackle chord construction, fingerstyle rhythm, vocal accompaniment, and lyric drafting.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Singing while maintaining rhythm guitar pocket
                </li>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Open tunings (DADGAD, Open D/G) &amp; capo magic
                </li>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Songwriting frameworks &amp; chord progressions
                </li>
                <li style={{ fontSize: "12px", color: "#ede2cb", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  <CheckCircle2 size={14} color="#d4af37" /> Microphone technique &amp; open-mic preparation
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5 INSTRUMENTS BREAKDOWN */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "64px 20px"
      }}>
        <div style={{ marginBottom: "36px" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#ffffff", margin: "0 0 6px 0" }}>
            Instrument-Specific Curriculums
          </h2>
          <p style={{ color: "#a8a090", fontSize: "14px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", margin: 0 }}>
            Every instrument is taught through the lens of live performance and practical song application.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          {instruments.map((inst) => {
            const Icon = inst.icon;
            return (
              <div 
                key={inst.name}
                style={{
                  backgroundColor: "#121212",
                  border: "1px solid #282828",
                  borderTop: "3px solid #d4af37",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ color: "#d4af37", marginBottom: "10px" }}><Icon size={24} /></div>
                  <h4 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#ffffff", margin: "0 0 10px 0" }}>
                    {inst.name}
                  </h4>
                  
                  <div style={{ marginBottom: "12px" }}>
                    <span style={{ fontSize: "10px", color: "#d4af37", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700, display: "block", marginBottom: "3px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                      Rock Band Focus
                    </span>
                    <p style={{ fontSize: "12px", color: "#d5cec2", margin: 0, lineHeight: 1.5, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                      {inst.rockFocus}
                    </p>
                  </div>

                  <div>
                    <span style={{ fontSize: "10px", color: "#f5ecd7", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700, display: "block", marginBottom: "3px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                      Acoustic &amp; Songwriting Focus
                    </span>
                    <p style={{ fontSize: "12px", color: "#a8a090", margin: 0, lineHeight: 1.5, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                      {inst.acousticFocus}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FREE SONGWRITER CHEAT SHEET RESOURCE SECTION */}
      <section id="cheat-sheet" style={{
        backgroundColor: "#070707",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "64px 20px"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          
          <div style={{
            backgroundColor: "#121212",
            border: "2px solid #b8972e",
            boxShadow: "0 10px 40px rgba(0,0,0,0.9), 0 0 25px rgba(212,175,55,0.15)",
            padding: "40px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Top 5-Ply Accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "#d4af37" }} />

            {/* LEFT COLUMN: RESOURCE INFORMATION & DOWNLOAD BUTTONS */}
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                backgroundColor: "#1a1408",
                border: "1px solid #d4af37",
                color: "#d4af37",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontFamily: "'Courier New', Courier, monospace, sans-serif",
                marginBottom: "16px"
              }}>
                <Sparkles size={13} color="#d4af37" />
                <span>Free Songwriting Guide &amp; PDF</span>
              </div>

              <h2 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                color: "#ffffff",
                lineHeight: 1.15,
                margin: "0 0 16px 0",
                fontWeight: 700
              }}>
                Master Songwriting Harmony in Minutes
              </h2>

              <p style={{
                fontSize: "15px",
                color: "#d5cec2",
                lineHeight: 1.7,
                marginBottom: "24px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              }}>
                Ready to take the guesswork out of writing chord progressions? Download our free <strong>Songwriter’s Number System Cheat Sheet</strong> to learn how to transpose instantly, navigate the major scale, and build radio-ready songs in any key.
              </p>

              {/* QUICK HIGHLIGHT BULLETS */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "28px"
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#ede2cb", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  <CheckCircle2 size={15} color="#d4af37" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span><strong>Nashville Number System:</strong> Major scale formula &amp; chord quality map in G, C, D, A &amp; E.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#ede2cb", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  <CheckCircle2 size={15} color="#d4af37" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span><strong>4 Hit Blueprints:</strong> Universal Anthem (1-5-6m-4), Folk/Storyteller, Indie Tension &amp; Americana Blues.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#ede2cb", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  <CheckCircle2 size={15} color="#d4af37" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span><strong>Harmonic Rules of Thumb:</strong> 1-chord anchors, 4 vs 5 momentum, 6m swaps &amp; capo shortcuts.</span>
                </div>
              </div>

              {/* ACTION BUTTONS (GATED BEHIND EMAIL) */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={() => handleOpenPdfGate('download')}
                  style={{
                    padding: "13px 24px",
                    backgroundColor: "#d4af37",
                    color: "#0a0a0a",
                    fontWeight: 800,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "1.2px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid #f5ecd7",
                    boxShadow: "0 4px 15px rgba(212,175,55,0.35)",
                    fontFamily: "'Courier New', Courier, monospace, sans-serif",
                    cursor: "pointer"
                  }}
                >
                  <Download size={15} color="#0a0a0a" /> Download Free PDF
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenPdfGate('view')}
                  style={{
                    padding: "13px 20px",
                    backgroundColor: "#161616",
                    border: "1px solid #2e2e2e",
                    color: "#ede2cb",
                    fontWeight: 700,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Courier New', Courier, monospace, sans-serif",
                    cursor: "pointer"
                  }}
                >
                  <FileText size={15} color="#d4af37" /> View In Browser ↗
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: CRISP VISUAL PREVIEW OF THE PDF CHEAT SHEET */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div
                onClick={() => handleOpenPdfGate('view')}
                style={{
                  display: "block",
                  position: "relative",
                  maxWidth: "380px",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  padding: "8px",
                  borderRadius: "4px",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.9), 0 0 20px rgba(212,175,55,0.25)",
                  border: "2px solid #d4af37",
                  transform: "rotate(-1deg)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  textDecoration: "none"
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "auto", overflow: "hidden", borderRadius: "2px" }}>
                  <Image
                    src="/images/songwriters-cheat-sheet-preview.png"
                    alt="Songwriter's Number System Cheat Sheet Preview"
                    width={612}
                    height={792}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block"
                    }}
                  />
                </div>

                <div style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #d4af37",
                  color: "#d4af37",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  padding: "6px 12px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.8)",
                  fontFamily: "'Courier New', Courier, monospace, sans-serif"
                }}>
                  <Lock size={12} color="#d4af37" /> Unlock Free PDF
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRIAL LESSON BOOKING FORM */}
      <section id="trial" style={{ maxWidth: "760px", margin: "0 auto", padding: "20px 20px" }}>
        <div style={{ marginBottom: "28px", textAlign: "center" }}>
          <span style={{ color: "#d4af37", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
            Individual Lessons &amp; Band Workshops
          </span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "30px", color: "#ffffff", margin: "6px 0 8px 0" }}>
            Schedule a Lesson Consultation
          </h2>
          <p style={{ color: "#a8a090", fontSize: "14px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0 }}>
            In-studio in Bellingham, WA or traveling clinics for bands across Western Washington.
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
                Lesson Request Received
              </div>
              <p style={{ color: "#f5f2eb", fontSize: "14px", margin: "0 0 8px 0", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Thank you, <strong>{formData.name || "musician"}</strong>! We received your request for <strong>{formData.instrument}</strong> in the <strong>{formData.track}</strong> track.
              </p>
              <p style={{ color: "#a8a090", fontSize: "13px", margin: "0 0 24px 0", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                Luke Moore will review your experience level and get in touch to schedule your trial lesson time.
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
                Book Another Student / Lesson
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "12px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div>
                  <label htmlFor="student-name" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Student / Band Name *</label>
                  <input 
                    id="student-name"
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="student-email" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Email *</label>
                  <input 
                    id="student-email"
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }} 
                    placeholder="you@example.com" 
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div>
                  <label htmlFor="instrument" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Primary Instrument</label>
                  <select 
                    id="instrument"
                    value={formData.instrument}
                    onChange={(e) => setFormData({ ...formData, instrument: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }}
                  >
                    <option value="Guitar (Acoustic / Electric)">Guitar (Acoustic / Electric)</option>
                    <option value="Vocals & Performance">Vocals &amp; Performance</option>
                    <option value="Drums & Rhythm">Drums &amp; Rhythm</option>
                    <option value="Bass Guitar">Bass Guitar</option>
                    <option value="Piano / Keyboard">Piano / Keyboard</option>
                    <option value="Full Band Coaching / Workshop">Full Band Coaching / Workshop</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="track" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Preferred Track</label>
                  <select 
                    id="track"
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }}
                  >
                    <option value="Acoustic Songwriting & Performance">Acoustic Songwriting &amp; Performance</option>
                    <option value="Rock Band & Ensemble Mechanics">Rock Band &amp; Ensemble Mechanics</option>
                    <option value="Both / Comprehensive Growth">Both / Comprehensive Growth</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                <div>
                  <label htmlFor="experience" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Current Experience Level</label>
                  <select 
                    id="experience"
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }}
                  >
                    <option value="Beginner (Picking up instrument or starting out)">Beginner (Picking up instrument or starting out)</option>
                    <option value="Intermediate (Play some chords, want to perform/write)">Intermediate (Play some chords, want to perform/write)</option>
                    <option value="Advanced / Working Musician (Fine-tuning performance)">Advanced / Working Musician (Fine-tuning performance)</option>
                    <option value="Existing Ensemble / Band">Existing Ensemble / Band</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lesson-format" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Location / Format</label>
                  <select 
                    id="lesson-format"
                    value={formData.lessonFormat}
                    onChange={(e) => setFormData({ ...formData, lessonFormat: e.target.value })}
                    style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit" }}
                  >
                    <option value="1-on-1 Private Lessons (Bellingham WA / Studio)">1-on-1 Private Lessons (Bellingham WA Studio)</option>
                    <option value="Traveling In-Home / Band Rehearsal Space">Traveling In-Home / Band Rehearsal Space (WA)</option>
                    <option value="Online / Remote Consultation">Online / Remote Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="goals" style={{ display: "block", color: "#a8a090", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>What are your goals or favorite artists?</label>
                <textarea 
                  id="goals"
                  rows={4} 
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  style={{ width: "100%", padding: "11px", backgroundColor: "#0a0a0a", border: "1px solid #2e2e2e", color: "#ffffff", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }} 
                  placeholder="Tell us what songs you'd like to learn, what gigs you're preparing for, or what challenges you're running into..."
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
                Schedule Lesson Consultation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* EMAIL GATE MODAL FOR FREE CHEAT SHEET */}
      {isPdfGateOpen && (
        <div 
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxSizing: "border-box"
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPdfGateOpen(false);
          }}
        >
          <div 
            style={{
              backgroundColor: "#0d0d0d",
              border: "2px solid #d4af37",
              boxShadow: "0 25px 70px rgba(0,0,0,0.98), 0 0 35px rgba(212,175,55,0.3)",
              maxWidth: "520px",
              width: "100%",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
              padding: "36px 30px"
            }}
          >
            {/* 5-Ply Accent Strip */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "#d4af37" }} />
            <div style={{ position: "absolute", top: "3px", left: 0, right: 0, height: "1px", backgroundColor: "#ede2cb", opacity: 0.8 }} />

            {/* Close Button */}
            <button
              onClick={() => setIsPdfGateOpen(false)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                backgroundColor: "#1c1c1c",
                border: "1px solid #333333",
                color: "#ede2cb",
                width: "32px",
                height: "32px",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <X size={18} />
            </button>

            {gateSubmitted ? (
              /* SUCCESS STATE */
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#1a1408",
                  border: "2px solid #d4af37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d4af37",
                  margin: "0 auto 16px auto",
                  boxShadow: "0 0 20px rgba(212,175,55,0.35)"
                }}>
                  <Check size={28} />
                </div>

                <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "#ffffff", margin: "0 0 10px 0" }}>
                  Cheat Sheet Unlocked!
                </h3>
                
                <p style={{ color: "#d5cec2", fontSize: "14px", lineHeight: 1.6, margin: "0 0 24px 0", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  Thank you! Your download of the <strong>Songwriter’s Number System Cheat Sheet</strong> has been initiated. You can also view or save it anytime using the buttons below:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a
                    href="/downloads/songwriters-number-system-cheat-sheet.pdf"
                    download="Songwriters-Number-System-Cheat-Sheet.pdf"
                    style={{
                      padding: "13px 20px",
                      backgroundColor: "#d4af37",
                      color: "#0a0a0a",
                      fontWeight: 800,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif",
                      border: "1px solid #f5ecd7"
                    }}
                  >
                    <Download size={15} color="#0a0a0a" /> Download PDF File Again
                  </a>

                  <a
                    href="/downloads/songwriters-number-system-cheat-sheet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "11px 20px",
                      backgroundColor: "#161616",
                      color: "#ede2cb",
                      fontWeight: 700,
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif",
                      border: "1px solid #333333"
                    }}
                  >
                    <FileText size={15} color="#d4af37" /> Open PDF In New Tab ↗
                  </a>
                </div>
              </div>
            ) : (
              /* EMAIL GATE FORM */
              <div>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  backgroundColor: "#1a1408",
                  border: "1px solid #d4af37",
                  color: "#d4af37",
                  fontSize: "10px",
                  fontWeight: 800,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  fontFamily: "'Courier New', Courier, monospace, sans-serif",
                  marginBottom: "14px"
                }}>
                  <Lock size={11} color="#d4af37" />
                  <span>Instant Free PDF Access</span>
                </div>

                <h3 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "24px",
                  color: "#ffffff",
                  lineHeight: 1.2,
                  margin: "0 0 10px 0",
                  fontWeight: 700
                }}>
                  Unlock Your Free Songwriter Cheat Sheet
                </h3>

                <p style={{
                  color: "#d5cec2",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  margin: "0 0 20px 0",
                  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
                }}>
                  Enter your email to get immediate access to the <strong>Songwriter’s Number System Cheat Sheet</strong> (Nashville Chord Map, Hit Blueprints &amp; Transposition Rules).
                </p>

                <form onSubmit={handleUnlockPdf} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label htmlFor="gate-name" style={{ display: "block", color: "#a8a090", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                      First Name (Optional)
                    </label>
                    <input
                      id="gate-name"
                      type="text"
                      value={gateName}
                      onChange={(e) => setGateName(e.target.value)}
                      placeholder="e.g. Luke"
                      style={{
                        width: "100%",
                        padding: "11px 12px",
                        backgroundColor: "#050505",
                        border: "1px solid #2e2e2e",
                        color: "#ffffff",
                        fontSize: "13px",
                        boxSizing: "border-box",
                        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="gate-email" style={{ display: "block", color: "#d4af37", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px", fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                      Your Email Address *
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        id="gate-email"
                        required
                        type="email"
                        value={gateEmail}
                        onChange={(e) => setGateEmail(e.target.value)}
                        placeholder="you@example.com"
                        style={{
                          width: "100%",
                          padding: "12px 12px 12px 38px",
                          backgroundColor: "#050505",
                          border: "1px solid #d4af37",
                          color: "#ffffff",
                          fontSize: "14px",
                          boxSizing: "border-box",
                          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
                        }}
                      />
                      <Mail size={16} color="#d4af37" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: "14px",
                      backgroundColor: "#d4af37",
                      color: "#0a0a0a",
                      fontWeight: 800,
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      border: "1px solid #f5ecd7",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      fontFamily: "'Courier New', Courier, monospace, sans-serif",
                      boxShadow: "0 4px 18px rgba(212,175,55,0.4)",
                      marginTop: "6px"
                    }}
                  >
                    <Download size={16} color="#0a0a0a" /> Unlock &amp; Download PDF
                  </button>

                  <div style={{ textAlign: "center", marginTop: "4px" }}>
                    <span style={{ fontSize: "11px", color: "#777777", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                      ✦ No spam. We respect your privacy.
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
