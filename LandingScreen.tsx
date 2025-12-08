import React, { useEffect, useState, useRef } from 'react';
import { MEDIA_DATA, MediaItem } from './mediaData';
import coverVideo from './assets/cover/cover.mp4';
import balloonSfx from './assets/audio/Balloon.wav';
import typingSfx from './assets/audio/Typing.mp3';
import curtainSfx from './assets/audio/curtain.wav';

interface LandingScreenProps {
  onStartTransition: () => void;
}

interface Heart {
  id: number;
  x: number;
  y: number;
  scale: number;
  growing: boolean;
}

interface HeartMark {
  id: number;
  x: number;
  y: number;
  scale: number;
  fading?: boolean;
}

const makeCursor = (emoji: string) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(
    emoji
  )}%3C/text%3E%3C/svg%3E\") 16 16, auto`;

const heartCursor = makeCursor('❤️');
const flowerCursor = makeCursor('🌸');

const LandingScreen: React.FC<LandingScreenProps> = ({ onStartTransition }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [holdHeart, setHoldHeart] = useState<Heart | null>(null);
  const [marks, setMarks] = useState<HeartMark[]>([]);
  const subtitleFull = `Chef of SF's Finest Egg Fried Rice, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds,连续戒烟成功者...`;
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const heartIdRef = useRef(0);
  const isHoldingRef = useRef(false);
  const balloonAudioRef = useRef<HTMLAudioElement | null>(null);
  const typingAudioRef = useRef<HTMLAudioElement | null>(null);
  const curtainAudioRef = useRef<HTMLAudioElement | null>(null);
  const heartsDisabledRef = useRef(false);
  const addMark = (x: number, y: number, scale: number) => {
    heartIdRef.current += 1;
    const id = heartIdRef.current;
    setMarks(prev => [...prev, { id, x, y, scale }]);
  };

  // 1. Preloading Simulation
  useEffect(() => {
    let loaded = 0;
    const extraPreload = MEDIA_DATA.slice(0, 4); // first few media for fast first view
    const preloadable = [
      { src: coverVideo, previewSrc: coverVideo, type: 'video' as const },
      ...MEDIA_DATA.filter((item: MediaItem) => item.type === 'image'),
      ...extraPreload,
    ];
    const seen = new Set<string>();
    const uniquePreload = preloadable.filter(item => {
      const key = item.previewSrc || item.src;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    const total = uniquePreload.length || 1;

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    };

    const loadAll = async () => {
      const promises = uniquePreload.map(item =>
        preloadImage(item.previewSrc || item.src).then(() => {
          loaded++;
          setLoadingProgress(Math.floor((loaded / total) * 100));
        })
      );
      await Promise.all(promises);
      setTimeout(() => setIsReady(true), 300);
    };

    const fallback = setTimeout(() => {
      setLoadingProgress(100);
      setIsReady(true);
    }, 6000);

    loadAll().finally(() => clearTimeout(fallback));
  }, []);

  // Typing effect for subtitle
  useEffect(() => {
    if (!typingAudioRef.current) {
      const audio = new Audio(typingSfx);
      audio.loop = true;
      audio.volume = 0.4;
      typingAudioRef.current = audio;
    }
    typingAudioRef.current?.play().catch(() => { });

    let idx = 0;
    const speed = 30; // ms per character
    const timer = setInterval(() => {
      idx += 1;
      setTypedSubtitle(subtitleFull.slice(0, idx));
      if (idx >= subtitleFull.length) {
        typingAudioRef.current?.pause();
        if (typingAudioRef.current) typingAudioRef.current.currentTime = 0;
        clearInterval(timer);
      }
    }, speed);
    return () => {
      clearInterval(timer);
      typingAudioRef.current?.pause();
      if (typingAudioRef.current) typingAudioRef.current.currentTime = 0;
    };
  }, [subtitleFull]);

  const handleClick = () => {
    setHasClicked(true);
    heartsDisabledRef.current = true;
    isHoldingRef.current = false;
    setHoldHeart(null);
    setMarks(prev => prev.map(m => ({ ...m, fading: true })));
    setTimeout(() => setMarks([]), 250);
    if (balloonAudioRef.current) {
      balloonAudioRef.current.pause();
      balloonAudioRef.current.currentTime = 0;
    }
    if (!curtainAudioRef.current) {
      curtainAudioRef.current = new Audio(curtainSfx);
    }
    curtainAudioRef.current?.play().catch(() => { });
    // Wait a tiny bit for the visual fade to start before triggering rain logic
    // This is purely for visual polish
    setTimeout(() => {
      onStartTransition();
    }, 100);
  };

  // Heart animation
  const baseScale = 0.6;
  const maxScale = 3.0;
  const growRate = 2.0; // scale units per second
  const shrinkRate = 4.0; // scale units per second

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const step = (ts: number) => {
      const dt = (ts - last) / 1000;
      last = ts;

      setHoldHeart(prev => {
        if (!prev) return null;
        let scale = prev.scale;
        if (prev.growing) {
          scale = Math.min(maxScale, scale + growRate * dt);
          if (scale >= maxScale && balloonAudioRef.current) {
            balloonAudioRef.current.pause();
            addMark(prev.x, prev.y, scale);
            isHoldingRef.current = false;
            return { ...prev, growing: false, scale };
          }
          return { ...prev, scale };
        } else {
          scale = Math.max(baseScale, scale - shrinkRate * dt);
          if (scale <= baseScale + 0.01) {
            return null;
          }
          return { ...prev, scale };
        }
      });

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const spawnHeart = (x: number, y: number) => {
    heartIdRef.current += 1;
    const id = heartIdRef.current;
    setHoldHeart({ id, x, y, scale: baseScale, growing: true });
  };

  const stopGrowing = () => {
    isHoldingRef.current = false;
    setHoldHeart(prev => {
      if (prev && prev.growing) {
        addMark(prev.x, prev.y, prev.scale);
        return { ...prev, growing: false };
      }
      return prev;
    });
    if (balloonAudioRef.current) {
      balloonAudioRef.current.pause();
      balloonAudioRef.current.currentTime = 0;
    }
  };

  const handleBackgroundMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasClicked || heartsDisabledRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    isHoldingRef.current = true;
    if (!balloonAudioRef.current) {
      const audio = new Audio(balloonSfx);
      audio.loop = true;
      audio.playbackRate = 1.2;
      balloonAudioRef.current = audio;
    }
    balloonAudioRef.current?.play().catch(() => { });
    spawnHeart(x, y);
  };

  const handleBackgroundMouseUp = () => {
    stopGrowing();
  };

  const handleBackgroundMouseLeave = () => {
    stopGrowing();
  };

  // Render Loading State
  if (loadingProgress < 100 && !isReady) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000">
        <div className="relative w-64 h-2 bg-gray-200 rounded overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-200"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <div className="mt-2 text-xs font-bold text-gray-400 font-mono">
          {loadingProgress}%
        </div>
        <p className="mt-1 font-bold text-gray-400 animate-pulse text-sm">Loading Gallery...</p>
      </div>
    );
  }

  // Render Main Landing
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${hasClicked ? 'pointer-events-none' : ''}`}
      onMouseDown={handleBackgroundMouseDown}
      onMouseUp={handleBackgroundMouseUp}
      onMouseLeave={handleBackgroundMouseLeave}
      // Touch Support
      onTouchStart={(e) => {
        // If touching button, don't spawn heart
        if ((e.target as HTMLElement).closest('wired-button')) return;
        if (hasClicked || heartsDisabledRef.current) return;

        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        // Re-use mouse logic
        isHoldingRef.current = true;
        if (!balloonAudioRef.current) {
          const audio = new Audio(balloonSfx);
          audio.loop = true;
          audio.playbackRate = 1.2;
          balloonAudioRef.current = audio;
        }
        balloonAudioRef.current?.play().catch(() => { });
        spawnHeart(x, y);
      }}
      onTouchEnd={() => {
        stopGrowing();
      }}
      // Prevent scrolling while holding/interacting on landing
      onTouchMove={(e) => isHoldingRef.current && e.preventDefault()}
      style={{ cursor: heartCursor }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10000 }}>
        {marks.map(m => (
          <div
            key={m.id}
            style={{
              position: 'absolute',
              left: m.x,
              top: m.y,
              transform: `translate(-50%, -50%) scale(${m.scale})`,
              opacity: m.fading ? 0 : 1,
              transition: m.fading ? 'opacity 200ms ease-out' : undefined,
              fontSize: '32px',
              pointerEvents: 'none',
              zIndex: 10001,
            }}
          >
            ❤️
          </div>
        ))}
        {holdHeart && (
          <div
            style={{
              position: 'absolute',
              left: holdHeart.x,
              top: holdHeart.y,
              transform: `translate(-50%, -50%) scale(${holdHeart.scale})`,
              opacity: 1,
              fontSize: '32px',
              pointerEvents: 'none',
            }}
          >
            ❤️
          </div>
        )}
      </div>

      {/* Main Card - Fades out on click */}
      {/* Removed hover:scale-105 for better mobile experience, or use active:scale-95 only */}
      <div className={`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out 
            ${hasClicked ? 'opacity-0 scale-95' : 'md:hover:scale-105 active:scale-100'}
        `}>
        <div className="w-80 aspect-[4/5] flex flex-col items-center">
          <div className="w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in">
            <video
              src={coverVideo}
              className="w-full h-full object-cover grayscale contrast-125 opacity-80"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <h1 className="text-3xl text-center font-bold mb-1 select-none pointer-events-none">The Secret Life of Warco Mu</h1>
          <p className="text-gray-500 text-sm text-center mb-6 select-none pointer-events-none">2021.8-2025.12</p>
          <p className="text-gray-800 text-m text-center mb-6 select-none pointer-events-none">
            {typedSubtitle}
            {typedSubtitle.length < subtitleFull.length && <span className="animate-pulse">|</span>}
          </p>

          {/* @ts-ignore */}
          <wired-button
            elevation={2}
            onClick={handleClick}
            className="bg-black text-white font-bold tracking-widest cursor-pointer select-none"
            style={{ cursor: flowerCursor }}
          >
            PAY RESPECT
            {/* @ts-ignore */}
          </wired-button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
