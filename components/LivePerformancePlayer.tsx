'use client';

import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { YouTubeIcon } from './SocialIcons';

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'mZkz-ttQqIU',
    title: 'Live Performance Showcase 1',
    category: 'Live Video'
  },
  {
    id: 'vid-2',
    youtubeId: 'NXQLf7mlRNo',
    title: 'Live Performance Showcase 2',
    category: 'Live Performance'
  },
  {
    id: 'vid-3',
    youtubeId: 'KWjsXCnbtXI',
    title: 'Live Performance Showcase 3',
    category: 'Stage Session'
  },
  {
    id: 'vid-4',
    youtubeId: 't1Un6-jCJRI',
    title: 'Live Performance Showcase 4',
    category: 'Live Concert'
  }
];

export default function LivePerformancePlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentVideo = VIDEOS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : VIDEOS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < VIDEOS.length - 1 ? prev + 1 : 0));
  };

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

      {/* TOP HEADER BAR */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            padding: '4px 8px',
            backgroundColor: '#ff0000',
            color: '#ffffff',
            fontSize: '10px',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            fontFamily: "'Courier New', Courier, monospace, sans-serif"
          }}>
            <YouTubeIcon size={12} color="#ffffff" /> Live Video
          </span>
          <span style={{
            fontSize: '11px',
            color: '#ede2cb',
            fontWeight: 700,
            fontFamily: 'Georgia, serif'
          }}>
            Luke Moore Performance
          </span>
        </div>

        <a
          href="https://www.youtube.com/channel/UCk3q7zz31DM4u1XaWiD1pAQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '10px',
            color: '#d4af37',
            textDecoration: 'none',
            fontFamily: "'Courier New', Courier, monospace, sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: 700
          }}
        >
          YouTube Channel ↗
        </a>
      </div>

      {/* 16:9 RESPONSIVE YOUTUBE EMBED */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}>
        <iframe
          key={currentVideo.youtubeId}
          src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?rel=0`}
          title={currentVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        />
      </div>

      {/* VIDEO SELECTOR & CONTROLS */}
      <div style={{
        backgroundColor: '#0c0c0c',
        borderTop: '1px solid #222222',
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={handlePrev}
              aria-label="Previous video"
              style={{
                backgroundColor: '#181818',
                border: '1px solid #333333',
                color: '#ede2cb',
                width: '28px',
                height: '28px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={16} />
            </button>

            <span style={{
              fontSize: '11px',
              color: '#d4af37',
              fontFamily: "'Courier New', Courier, monospace, sans-serif",
              fontWeight: 700
            }}>
              Video {currentIndex + 1} of {VIDEOS.length}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next video"
              style={{
                backgroundColor: '#181818',
                border: '1px solid #333333',
                color: '#ede2cb',
                width: '28px',
                height: '28px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${currentVideo.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '5px 10px',
              backgroundColor: '#1a1408',
              border: '1px solid #d4af37',
              color: '#d4af37',
              fontSize: '10px',
              fontWeight: 800,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: "'Courier New', Courier, monospace, sans-serif"
            }}
          >
            <Play size={10} fill="#d4af37" /> Watch on YouTube
          </a>
        </div>

        {/* 4 VIDEO SELECTOR PILLS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '6px'
        }}>
          {VIDEOS.map((vid, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={vid.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  padding: '6px 4px',
                  backgroundColor: isSelected ? '#d4af37' : '#141414',
                  color: isSelected ? '#0a0a0a' : '#a8a090',
                  border: isSelected ? '1px solid #f5ecd7' : '1px solid #282828',
                  fontSize: '10px',
                  fontWeight: isSelected ? 800 : 600,
                  cursor: 'pointer',
                  fontFamily: "'Courier New', Courier, monospace, sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  transition: 'all 0.15s ease',
                  textAlign: 'center'
                }}
              >
                Track 0{idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
