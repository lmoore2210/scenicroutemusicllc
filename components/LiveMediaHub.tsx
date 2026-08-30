'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Shuffle, 
  Heart, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { SpotifyIcon, YouTubeIcon, InstagramIcon } from './SocialIcons';

interface InstagramPost {
  id: string;
  imgSrc: string;
  caption: string;
  location: string;
  date: string;
  formatTag: string;
  likes: number;
  postUrl: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    imgSrc: '/images/luke-live/luke_live_1.jpg',
    caption: 'Dialing in the acoustic set before soundcheck in Bellingham. Bringing a mix of Jason Isbell, classic rock, and originals.',
    location: 'Bellingham, WA',
    date: 'Recent Show',
    formatTag: 'Solo Acoustic',
    likes: 184,
    postUrl: 'https://www.instagram.com/lukemooreguitar'
  },
  {
    id: 'post-2',
    imgSrc: '/images/luke-live/luke_live_2.jpg',
    caption: 'Full band locked in on the groove tonight. Nothing beats loud tubes and live drums in Western WA.',
    location: 'Whatcom County, WA',
    date: 'Live Stage',
    formatTag: 'Full Rock Band',
    likes: 242,
    postUrl: 'https://www.instagram.com/lukemooreguitar'
  },
  {
    id: 'post-3',
    imgSrc: '/images/luke-live/luke_live_6.jpg',
    caption: 'Festival stage soundcheck complete. Crystal clear FOH audio and good vibes all afternoon.',
    location: 'Skagit Valley, WA',
    date: 'Festival Showcase',
    formatTag: 'Live Sound + Music',
    likes: 198,
    postUrl: 'https://www.instagram.com/lukemooreguitar'
  },
  {
    id: 'post-4',
    imgSrc: '/images/luke-live/luke_live_8.jpg',
    caption: 'Intimate patio session with two-part vocal harmonies and acoustic groove.',
    location: 'San Juan Islands, WA',
    date: 'Sunset Session',
    formatTag: 'Acoustic Duo',
    likes: 165,
    postUrl: 'https://www.instagram.com/lukemooreguitar'
  },
  {
    id: 'post-5',
    imgSrc: '/images/luke-live/luke_live_10.jpg',
    caption: 'Fingerstyle rhythm and acoustic storytelling. Playing 370+ songs across Washington.',
    location: 'Seattle, WA',
    date: 'Private Event',
    formatTag: 'Singer-Songwriter',
    likes: 215,
    postUrl: 'https://www.instagram.com/lukemooreguitar'
  },
  {
    id: 'post-6',
    imgSrc: '/images/luke-live/luke_live_12.jpg',
    caption: 'Wrapping up the wedding reception with high-energy roots rock anthems on the dance floor.',
    location: 'Snohomish, WA',
    date: 'Wedding Reception',
    formatTag: 'Full Band',
    likes: 278,
    postUrl: 'https://www.instagram.com/lukemooreguitar'
  }
];

interface FeaturedVideo {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  embedUrl: string;
  duration: string;
}

const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: 'channel-uploads',
    title: 'Luke Moore — Live Concerts & Releases',
    subtitle: 'Official Channel Uploads & Live Performances',
    category: 'Latest Channel Stream',
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=UUk3q7zz31DM4u1XaWiD1pAQ',
    duration: 'Auto-Updated'
  },
  {
    id: 'acoustic-originals',
    title: 'Acoustic Americana & Songwriting Showcase',
    subtitle: 'Intimate Live Fingerstyle & Vocal Sets',
    category: 'Acoustic Sessions',
    embedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=lukemooreguitar',
    duration: 'Live Series'
  }
];

export default function LiveMediaHub() {
  const [activeTab, setActiveTab] = useState<'youtube' | 'instagram' | 'spotify'>('youtube');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentInstaIndex, setCurrentInstaIndex] = useState(0);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const handleRandomPull = () => {
    // Randomize tab or content within current tab
    const tabs: ('youtube' | 'instagram' | 'spotify')[] = ['youtube', 'instagram', 'spotify'];
    const randomTab = tabs[Math.floor(Math.random() * tabs.length)];
    setActiveTab(randomTab);
    
    if (randomTab === 'instagram') {
      const nextIndex = Math.floor(Math.random() * INSTAGRAM_POSTS.length);
      setCurrentInstaIndex(nextIndex);
    } else if (randomTab === 'youtube') {
      const nextIndex = Math.floor(Math.random() * FEATURED_VIDEOS.length);
      setCurrentVideoIndex(nextIndex);
    }
  };

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const activePost = INSTAGRAM_POSTS[currentInstaIndex];
  const activeVideo = FEATURED_VIDEOS[currentVideoIndex];

  return (
    <div style={{
      width: '100%',
      maxWidth: '540px',
      margin: '0 auto',
      backgroundColor: '#0a0a0a',
      border: '2px solid #b8972e',
      boxShadow: '0 10px 36px rgba(0,0,0,0.95), 0 0 24px rgba(212,175,55,0.25)',
      borderRadius: '4px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* 5-PLY GIBSON CUSTOM BINDING ACCENT (GOLD & CREAM) */}
      <div style={{ height: '3px', backgroundColor: '#d4af37' }} />
      <div style={{ height: '1px', backgroundColor: '#ede2cb', opacity: 0.7 }} />

      {/* TOP HUB CONTROLS: PLATFORM TABS & RANDOM SHUFFLE */}
      <div style={{
        backgroundColor: '#0f0f0f',
        borderBottom: '1px solid #242424',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {/* PLATFORM SWITCHER */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <button
            onClick={() => setActiveTab('youtube')}
            style={{
              padding: '6px 10px',
              backgroundColor: activeTab === 'youtube' ? '#ff0000' : '#181818',
              color: activeTab === 'youtube' ? '#ffffff' : '#a8a090',
              border: activeTab === 'youtube' ? '1px solid #ff4d4d' : '1px solid #2e2e2e',
              fontSize: '11px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: "'Courier New', Courier, monospace, sans-serif",
              transition: 'all 0.2s'
            }}
          >
            <YouTubeIcon size={13} color={activeTab === 'youtube' ? '#ffffff' : '#ff0000'} />
            <span>YouTube</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            style={{
              padding: '6px 10px',
              backgroundColor: activeTab === 'instagram' ? '#e1306c' : '#181818',
              color: activeTab === 'instagram' ? '#ffffff' : '#a8a090',
              border: activeTab === 'instagram' ? '1px solid #ff70a0' : '1px solid #2e2e2e',
              fontSize: '11px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: "'Courier New', Courier, monospace, sans-serif",
              transition: 'all 0.2s'
            }}
          >
            <InstagramIcon size={13} color={activeTab === 'instagram' ? '#ffffff' : '#e1306c'} />
            <span>Instagram</span>
          </button>

          <button
            onClick={() => setActiveTab('spotify')}
            style={{
              padding: '6px 10px',
              backgroundColor: activeTab === 'spotify' ? '#1db954' : '#181818',
              color: activeTab === 'spotify' ? '#0a0a0a' : '#a8a090',
              border: activeTab === 'spotify' ? '1px solid #1ed760' : '1px solid #2e2e2e',
              fontSize: '11px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontFamily: "'Courier New', Courier, monospace, sans-serif",
              transition: 'all 0.2s'
            }}
          >
            <SpotifyIcon size={13} color={activeTab === 'spotify' ? '#0a0a0a' : '#1db954'} />
            <span>Spotify</span>
          </button>
        </div>

        {/* RANDOM DISCOVERY PULL BUTTON */}
        <button
          onClick={handleRandomPull}
          title="Pull a random live performance, song, or gig clip!"
          style={{
            padding: '6px 10px',
            backgroundColor: '#1a1408',
            color: '#d4af37',
            border: '1px solid #d4af37',
            fontSize: '11px',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: "'Courier New', Courier, monospace, sans-serif",
            boxShadow: '0 0 10px rgba(212,175,55,0.2)',
            transition: 'all 0.2s'
          }}
        >
          <Shuffle size={12} color="#d4af37" />
          <span>Random Pull</span>
        </button>
      </div>

      {/* ========================================================== */}
      {/* 1. YOUTUBE EMBED PLAYER TAB */}
      {/* ========================================================== */}
      {activeTab === 'youtube' && (
        <div>
          {/* VIDEO FRAME CONTAINER */}
          <div style={{ position: 'relative', width: '100%', height: '320px', backgroundColor: '#000000' }}>
            <iframe
              src={activeVideo.embedUrl}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </div>

          {/* VIDEO DETAILS & CHANNEL CONTROLS */}
          <div style={{
            backgroundColor: '#0c0c0c',
            borderTop: '1px solid #222222',
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
              <div>
                <span style={{
                  fontSize: '10px',
                  color: '#ff4d4d',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  fontFamily: "'Courier New', Courier, monospace, sans-serif",
                  display: 'block',
                  marginBottom: '2px'
                }}>
                  ✦ {activeVideo.category}
                </span>
                <h4 style={{
                  margin: 0,
                  color: '#ffffff',
                  fontSize: '15px',
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1.2
                }}>
                  {activeVideo.title}
                </h4>
              </div>

              <a
                href="https://www.youtube.com/channel/UCk3q7zz31DM4u1XaWiD1pAQ"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#ff0000',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '11px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  flexShrink: 0,
                  fontFamily: "'Courier New', Courier, monospace, sans-serif"
                }}
              >
                <YouTubeIcon size={13} color="#ffffff" />
                <span>Visit Channel</span>
              </a>
            </div>

            {/* QUICK PLAYLIST SELECTOR */}
            <div style={{
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              paddingTop: '6px',
              borderTop: '1px solid #1a1a1a'
            }}>
              {FEATURED_VIDEOS.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setCurrentVideoIndex(idx)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: currentVideoIndex === idx ? '#1a1a1a' : '#111111',
                    border: currentVideoIndex === idx ? '1px solid #d4af37' : '1px solid #222222',
                    color: currentVideoIndex === idx ? '#d4af37' : '#888888',
                    fontSize: '10px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontFamily: "'Courier New', Courier, monospace, sans-serif",
                    textTransform: 'uppercase'
                  }}
                >
                  {vid.category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* 2. INSTAGRAM REEL & GIG CLIP FEED TAB */}
      {/* ========================================================== */}
      {activeTab === 'instagram' && (
        <div>
          {/* INSTA POST IMAGE/MEDIA */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '340px',
            backgroundColor: '#070707',
            overflow: 'hidden'
          }}>
            <Image
              src={activePost.imgSrc}
              alt={activePost.caption}
              fill
              sizes="(max-width: 768px) 100vw, 540px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />

            {/* GRADIENT OVERLAY */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.2) 40%, transparent 70%)'
            }} />

            {/* FORMAT BADGE TOP RIGHT */}
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(10,10,10,0.9)',
              border: '1px solid #e1306c',
              padding: '4px 10px',
              fontSize: '10px',
              color: '#f5ecd7',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: "'Courier New', Courier, monospace, sans-serif"
            }}>
              {activePost.formatTag}
            </div>

            {/* LOCATION BADGE TOP LEFT */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(10,10,10,0.85)',
              border: '1px solid #333333',
              padding: '4px 8px',
              fontSize: '10px',
              color: '#ede2cb',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: "'Courier New', Courier, monospace, sans-serif"
            }}>
              <span>📍 {activePost.location}</span>
            </div>

            {/* SLIDE CONTROLS (PREV / NEXT) */}
            <button
              onClick={() => setCurrentInstaIndex((prev) => (prev > 0 ? prev - 1 : INSTAGRAM_POSTS.length - 1))}
              aria-label="Previous Instagram Post"
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(10,10,10,0.85)',
                border: '1px solid #e1306c',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => setCurrentInstaIndex((prev) => (prev < INSTAGRAM_POSTS.length - 1 ? prev + 1 : 0))}
              aria-label="Next Instagram Post"
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(10,10,10,0.85)',
                border: '1px solid #e1306c',
                color: '#ffffff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* INSTAGRAM POST CAPTION & INTERACTION BAR */}
          <div style={{
            backgroundColor: '#0c0c0c',
            borderTop: '1px solid #222222',
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            <p style={{
              margin: 0,
              fontSize: '13px',
              color: '#f5f2eb',
              lineHeight: 1.5,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            }}>
              <strong style={{ color: '#d4af37', marginRight: '6px' }}>@lukemooreguitar</strong>
              {activePost.caption}
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #1c1c1c',
              paddingTop: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <button
                  onClick={() => toggleLike(activePost.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: likedPosts[activePost.id] ? '#e1306c' : '#888888',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    padding: 0
                  }}
                >
                  <Heart size={15} fill={likedPosts[activePost.id] ? '#e1306c' : 'none'} />
                  <span>{activePost.likes + (likedPosts[activePost.id] ? 1 : 0)}</span>
                </button>

                <span style={{ fontSize: '11px', color: '#666666', fontFamily: "'Courier New', Courier, monospace, sans-serif" }}>
                  {activePost.date}
                </span>
              </div>

              <a
                href={activePost.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '5px 12px',
                  backgroundColor: '#161218',
                  border: '1px solid #e1306c',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '11px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  borderRadius: '2px',
                  fontFamily: "'Courier New', Courier, monospace, sans-serif"
                }}
              >
                <InstagramIcon size={12} color="#e1306c" />
                <span>View on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* 3. SPOTIFY EMBEDDED PLAYER TAB */}
      {/* ========================================================== */}
      {activeTab === 'spotify' && (
        <div style={{ padding: '16px', backgroundColor: '#070707' }}>
          <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{
                fontSize: '10px',
                color: '#1db954',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                fontFamily: "'Courier New', Courier, monospace, sans-serif",
                display: 'block'
              }}>
                ✦ Official Streaming Player
              </span>
              <h4 style={{ margin: 0, color: '#ffffff', fontSize: '15px', fontFamily: 'Georgia, serif' }}>
                Luke Moore on Spotify
              </h4>
            </div>

            <a
              href="https://open.spotify.com/artist/4B7nwmbI38Z1vKMBb3ikDr?si=8k61dq-GRSC0hqPxrY7BeA"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '6px 12px',
                backgroundColor: '#1db954',
                color: '#0a0a0a',
                fontWeight: 800,
                fontSize: '11px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: "'Courier New', Courier, monospace, sans-serif"
              }}
            >
              <SpotifyIcon size={13} color="#0a0a0a" />
              <span>Open in App</span>
            </a>
          </div>

          <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #1db954' }}>
            <iframe
              src="https://open.spotify.com/embed/artist/4B7nwmbI38Z1vKMBb3ikDr?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}

      {/* FOOTER CALLOUT BAR */}
      <div style={{
        backgroundColor: '#070707',
        borderTop: '1px solid #1a1a1a',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '10px',
        color: '#a8a090',
        fontFamily: "'Courier New', Courier, monospace, sans-serif"
      }}>
        <span>@lukemooreguitar</span>
        <span style={{ color: '#d4af37', textTransform: 'uppercase', letterSpacing: '1px' }}>
          ✦ Live from Bellingham, WA ✦
        </span>
      </div>
    </div>
  );
}
