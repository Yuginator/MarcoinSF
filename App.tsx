import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { MediaItem, MEDIA_DATA, MUSIC_TRACKS, MusicTrack } from './mediaData';
import { MEDIA_DIMENSIONS } from './mediaDimensions';
import LandingScreen from './LandingScreen';
import TennisRainTransition from './TennisRainTransition';
import timelinePinIcon from './assets/icons/timelinePin.svg';

// --- Types & Interfaces ---

interface LayoutItem extends MediaItem {
  x: number;
  y: number;
  z: number;
  rotationY: number;
  rotationZ: number;
  borderIntensity: number; // 0 = neat, 1 = normal, 2 = messy
  initialWidth: number;
  initialHeight: number;
}

// --- Configuration ---

const CONFIG = {
  Z_SPACING: 8,
  X_OFFSET: 2.2,
  CAMERA_START_Z: 8,
  FOG_COLOR: 0xfcfbf9, // Match body bg

  // Opacity / Visibility
  FADE_START: 12,
  FADE_END: 24, // REDUCED from 32 to 24 to reduce clutter
  HIGHLIGHT_RANGE: 4,

  // Audio Config
  AUDIO_MAX_DISTANCE: 12,
  AUDIO_QUICK_FADE_BEHIND: 1.2,
  BGM_FADE_ZONE: 25,
  BGM_SILENCE_RADIUS: 6,

  // Scroll Physics
  MAX_SCROLL_SPEED: 0.15,
  HOVER_MIN_SPEED_FACTOR: 0.05,
  TIMELINE_FOCUS_OFFSET: 4,
};

// --- Data Generation ---

const generateLayout = (): LayoutItem[] => {
  return MEDIA_DATA.map((item, i) => {
    // Default dimensions
    let width = 3.2;
    let height = 2.4;

    // Lookup pre-calculated dimensions
    const dim = MEDIA_DIMENSIONS[item.filename];

    if (dim) {
      // Constrain to max bounds (3.2 x 3.2) while preserving aspect ratio
      const MAX_W = 3.2;
      const MAX_H = 3.2;
      const aspect = dim.aspectRatio;

      if (aspect > 1) { // Landscape
        width = Math.min(dim.width, MAX_W);
        height = width / aspect;
        if (height > MAX_H) {
          height = MAX_H;
          width = height * aspect;
        }
      } else { // Portrait
        height = Math.min(dim.height, MAX_H);
        width = height * aspect;
        if (width > MAX_W) {
          width = MAX_W;
          height = width / aspect;
        }
      }
    }

    const isLast = i === MEDIA_DATA.length - 1;

    // Special logic for the final item
    if (isLast) {
      return {
        ...item,
        z: -i * CONFIG.Z_SPACING - 8,
        x: 0,
        y: 0,
        rotationY: 0,
        rotationZ: 0,
        borderIntensity: 2,
        initialWidth: width,
        initialHeight: height
      };
    }

    return {
      ...item,
      z: -i * CONFIG.Z_SPACING,
      x: (Math.random() - 0.5) * 2 + (i % 2 === 0 ? -CONFIG.X_OFFSET : CONFIG.X_OFFSET), // Alternating zig-zag
      y: (Math.random() - 0.5) * 0.5,
      rotationY: (i % 2 === 0 ? 0.12 : -0.12) + (Math.random() - 0.5) * 0.05,
      rotationZ: (Math.random() - 0.5) * 0.1, // Slight tilt
      borderIntensity: Math.random() < 0.3 ? 2 : (Math.random() < 0.6 ? 1 : 0),
      initialWidth: width,
      initialHeight: height
    };
  });
};

// --- Helper: Create Sketchy Box Geometry ---
const createSketchyBoxGeometry = (width: number, height: number, intensity: number = 1) => {
  const points: THREE.Vector3[] = [];
  const w = width / 2;
  const h = height / 2;

  const loops = intensity === 0 ? 1 : (intensity === 1 ? 2 : 3);
  const baseJitter = intensity === 0 ? 0.01 : (intensity === 1 ? 0.02 : 0.04);
  const overshoot = intensity === 2 ? 0.1 : 0.02;

  const addLine = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const dirX = dx / len;
    const dirY = dy / len;

    const startX = x1 - dirX * (Math.random() * overshoot);
    const startY = y1 - dirY * (Math.random() * overshoot);
    const endX = x2 + dirX * (Math.random() * overshoot);
    const endY = y2 + dirY * (Math.random() * overshoot);

    points.push(new THREE.Vector3(startX, startY, 0));

    const midX = (startX + endX) / 2 + (Math.random() - 0.5) * baseJitter;
    const midY = (startY + endY) / 2 + (Math.random() - 0.5) * baseJitter;
    points.push(new THREE.Vector3(midX, midY, 0));

    points.push(new THREE.Vector3(endX, endY, 0));
  };

  for (let i = 0; i < loops; i++) {
    const jitter = baseJitter * (i + 1);
    addLine(-w - Math.random() * jitter, h + Math.random() * jitter, w + Math.random() * jitter, h - Math.random() * jitter);
    addLine(w + Math.random() * jitter, h - Math.random() * jitter, w - Math.random() * jitter, -h + Math.random() * jitter);
    addLine(w - Math.random() * jitter, -h + Math.random() * jitter, -w + Math.random() * jitter, -h - Math.random() * jitter);
    addLine(-w + Math.random() * jitter, -h - Math.random() * jitter, -w - Math.random() * jitter, h + Math.random() * jitter);
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return geometry;
};

// --- Helper: Create Hand-Drawn Background (SF Style) ---
const createSketchyBackground = () => {
  const points: THREE.Vector3[] = [];
  const width = 120; // Wide landscape

  const addStroke = (x1: number, y1: number, x2: number, y2: number, jitterAmt: number = 0.2) => {
    const segments = 6;
    let px = x1;
    let py = y1;
    const dx = (x2 - x1) / segments;
    const dy = (y2 - y1) / segments;

    for (let i = 0; i < segments; i++) {
      const nx = x1 + dx * (i + 1);
      const ny = y1 + dy * (i + 1);
      points.push(new THREE.Vector3(px, py, 0));
      const jx = i === segments - 1 ? 0 : (Math.random() - 0.5) * jitterAmt;
      const jy = i === segments - 1 ? 0 : (Math.random() - 0.5) * jitterAmt;
      points.push(new THREE.Vector3(nx + jx, ny + jy, 0));
      px = nx + jx;
      py = ny + jy;
    }
  };

  // 1. Horizon / Rolling Hills
  let prevY = 0;
  for (let x = -width / 2; x <= width / 2; x += 2) {
    const y = Math.sin(x * 0.05) * 5 + Math.sin(x * 0.15) * 2 - 5;
    if (x > -width / 2) {
      addStroke(x - 2, prevY, x, y, 0.4);
      addStroke(x - 2, prevY - 0.2, x, y - 0.2, 0.6);
    }
    prevY = y;
  }

  // 2. Transamerica Pyramid-ish Shape
  const towerX = 15;
  const towerBaseY = Math.sin(towerX * 0.05) * 5 + Math.sin(towerX * 0.15) * 2 - 5;
  addStroke(towerX - 4, towerBaseY, towerX, towerBaseY + 18, 0.3);
  addStroke(towerX + 4, towerBaseY, towerX, towerBaseY + 18, 0.3);
  addStroke(towerX - 3.8, towerBaseY + 2, towerX + 3.8, towerBaseY + 2, 0.2);
  addStroke(towerX - 2.5, towerBaseY + 12, towerX + 2.5, towerBaseY + 12, 0.2);

  // 3. Golden Gate Bridge Suggestions
  const bridgeX = -25;
  const bridgeY = Math.sin(bridgeX * 0.05) * 5 - 5;
  addStroke(bridgeX, bridgeY, bridgeX, bridgeY + 12, 0.3);
  addStroke(bridgeX + 1, bridgeY, bridgeX + 1, bridgeY + 12, 0.3);
  addStroke(bridgeX - 0.5, bridgeY + 10, bridgeX + 1.5, bridgeY + 10, 0.1);
  addStroke(bridgeX - 15, bridgeY - 2, bridgeX - 15, bridgeY + 10, 0.3);
  let bpx = bridgeX - 15;
  let bpy = bridgeY + 10;
  for (let bx = bridgeX - 15; bx <= bridgeX; bx += 2) {
    const by = bridgeY + 10 - Math.sin(((bx - (bridgeX - 15)) / 15) * Math.PI) * 4;
    addStroke(bpx, bpy, bx, by, 0.1);
    bpx = bx;
    bpy = by;
  }

  // 4. Clouds / Sun
  const addCloud = (cx: number, cy: number, scale: number) => {
    const segments = 12;
    let lastX = cx + Math.cos(0) * scale;
    let lastY = cy + Math.sin(0) * scale * 0.6;
    for (let i = 1; i <= segments + 1; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const r = scale + (Math.random() - 0.5) * (scale * 0.4);
      const x = cx + Math.cos(theta) * r;
      const y = cy + Math.sin(theta) * (r * 0.6);
      addStroke(lastX, lastY, x, y, 0.5);
      lastX = x;
      lastY = y;
    }
  };
  addCloud(-30, 15, 6);
  addCloud(-10, 20, 4);
  addCloud(25, 18, 7);
  const sunX = 35;
  const sunY = 22;
  addCloud(sunX, sunY, 3);
  for (let i = 0; i < 8; i++) {
    const theta = (i / 8) * Math.PI * 2;
    const x1 = sunX + Math.cos(theta) * 4;
    const y1 = sunY + Math.sin(theta) * 4;
    const x2 = sunX + Math.cos(theta) * 6;
    const y2 = sunY + Math.sin(theta) * 6;
    addStroke(x1, y1, x2, y2, 0.2);
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return geometry;
};

// --- Helper: Create Text Texture for Date ---
const createDateTexture = (text: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  canvas.width = 512;
  canvas.height = 128;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Use Gloria Hallelujah for hand-drawn feel
  ctx.font = '40px "Gloria Hallelujah", cursive';
  ctx.fillStyle = '#666666';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return texture;
};

// --- Icons ---

const IconMusic = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
);
const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
);
const IconInfo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
);
const IconSpeakerOn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
);
const IconSpeakerOff = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"></path></svg>
);
const IconPlay = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);
const IconPause = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
);
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);


// --- Components ---

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // State
  const [layout] = useState(generateLayout);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Panels State
  const [activePanel, setActivePanel] = useState<'audio' | 'general' | 'credit' | null>(null);

  // Media Control State
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const [isBgmEnabled, setIsBgmEnabled] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const [isVideoMuted, setIsVideoMuted] = useState(false);

  // Auto Scroll & Settings State
  const [autoScrollSpeed, setAutoScrollSpeed] = useState(5);
  const autoScrollSpeedRef = useRef(0);
  const hoverSlowdownRef = useRef(1.0);
  const [scrollSensitivity, setScrollSensitivity] = useState(1);
  const scrollSensitivityRef = useRef(1);

  // Timeline Tooltip State
  const [timelineHoverDate, setTimelineHoverDate] = useState<string | null>(null);
  const timelineScrollRafRef = useRef<number | null>(null);
  const [timelineHoverPos, setTimelineHoverPos] = useState(0);

  // Refs for Animation Loop Access
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const frameLinesRef = useRef<{ [id: string]: THREE.LineSegments }>({});
  const videoElementsRef = useRef<{ [id: string]: HTMLVideoElement }>({});
  // Added loadedOpacity and targetLoadedOpacity for smooth resize transitions
  const mediaNodesRef = useRef<{ item: MediaItem; contentMesh: THREE.Mesh; updateGeometry: (w: number, h: number) => void; video?: HTMLVideoElement; texture?: THREE.Texture; loadedOpacity: number; targetLoadedOpacity: number }[]>([]);
  const isOverlayOpenRef = useRef(false);
  const hasEnteredRef = useRef(false);
  const scrollProgressRef = useRef(0);
  const targetScrollProgressRef = useRef(0);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const hoveredMediaIdRef = useRef<string | null>(null);

  const isVideoMutedRef = useRef(false);
  const bgmVolumeRef = useRef(1.0);

  // Virtual Scroll Refs
  const virtualScrollYRef = useRef(0);
  const maxScrollRef = useRef(0);
  const velocityRef = useRef(0); // Current velocity (pixels / frame)
  const isDraggingRef = useRef(false);
  const lastTouchYRef = useRef(0);
  const lastDragTimeRef = useRef(0);

  // Sync refs
  useEffect(() => {
    isOverlayOpenRef.current = isOverlayOpen;
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
      (Object.values(videoElementsRef.current) as HTMLVideoElement[]).forEach(v => v.pause());
    } else if (hasEntered) {
      document.body.style.overflow = 'auto';
    }
  }, [isOverlayOpen, hasEntered]);

  useEffect(() => {
    hasEnteredRef.current = hasEntered;
    if (hasEntered) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [hasEntered]);

  useEffect(() => {
    autoScrollSpeedRef.current = autoScrollSpeed;
  }, [autoScrollSpeed]);

  useEffect(() => {
    isVideoMutedRef.current = isVideoMuted;
  }, [isVideoMuted]);

  useEffect(() => {
    scrollSensitivityRef.current = scrollSensitivity;
  }, [scrollSensitivity]);

  // Boost sensitivity on touch devices
  useEffect(() => {
    const coarse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (coarse) {
      setScrollSensitivity(1.8);
    }
  }, []);

  // --- Music Logic ---
  useEffect(() => {
    if (audioRef.current) {
      if (isBgmPlaying && isBgmEnabled) {
        audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isBgmPlaying, isBgmEnabled, currentTrackIndex]);

  const updateBgmVolume = (vol: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, vol));
    }
  };

  const toggleBgmPlay = () => setIsBgmPlaying(!isBgmPlaying);
  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsBgmPlaying(true);
    setIsBgmEnabled(true);
  };

  // --- Transition Logic ---
  const handleStartTransition = () => {
    // 1. Click button -> Start Rain
    // Landing Screen REMAINS visible
    window.scrollTo({ top: 0, behavior: 'auto' });
    scrollProgressRef.current = 0;
    targetScrollProgressRef.current = 0;
    virtualScrollYRef.current = 0; // Reset virtual scroll
    velocityRef.current = 0; // Reset momentum
    setIsTransitioning(true);
  };

  const handleTransitionCovered = () => {
    // 2. Rain covers screen -> Dismiss Landing Screen -> Reveal Gallery
    setHasEntered(true);

    // Start gallery logic
    setIsBgmPlaying(true);
    setAutoScrollSpeed(5);
    (Object.values(videoElementsRef.current) as HTMLVideoElement[]).forEach(video => {
      video.muted = false;
      video.volume = 0;
    });
  };

  const handleTransitionComplete = () => {
    // 3. Rain clears -> Unmount Rain Component
    setIsTransitioning(false);
  };

  // --- Timeline Hover Logic ---
  const handleTimelineMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    setTimelineHoverPos(e.clientX);

    const totalItems = MEDIA_DATA.length;
    const index = Math.floor(pct * (totalItems - 1));
    // --- Configuration --- (Removed duplicate)
    const item = MEDIA_DATA[index];
    if (item) {
      setTimelineHoverDate(item.date);
    }
  };

  const handleTimelineMouseLeave = () => {
    setTimelineHoverDate(null);
  };

  // --- Virtual Scroll Setup ---
  // Derived state for scroll calculations
  const zStartRaw = CONFIG.CAMERA_START_Z;
  const lastItemZRaw = layout[layout.length - 1].z;
  const totalZDist = zStartRaw - (lastItemZRaw + 5); // Start - End
  const pixelsPerZ = 250 / scrollSensitivity;

  // Update max scroll when layout/sensitivity changes
  useEffect(() => {
    maxScrollRef.current = totalZDist * pixelsPerZ;
  }, [totalZDist, pixelsPerZ]);

  // Virtual Scroll Listener & Physics
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isOverlayOpenRef.current || !hasEnteredRef.current) return;
      // Wheel acts as immediate movement + impulse
      // For trackpads, deltaY is small and frequent. For wheels, large and singular.
      virtualScrollYRef.current += e.deltaY;
      virtualScrollYRef.current = Math.max(0, Math.min(virtualScrollYRef.current, maxScrollRef.current));

      // Kill existing momentum on manual intervention
      velocityRef.current = 0;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, wired-slider, input, .wired-rendered')) return;

      isDraggingRef.current = true;
      velocityRef.current = 0; // Stop momentum
      lastTouchYRef.current = e.touches[0].clientY;
      lastDragTimeRef.current = performance.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, wired-slider, input, .wired-rendered')) return;
      if (isOverlayOpenRef.current || !hasEnteredRef.current) return;

      e.preventDefault();

      const touchY = e.touches[0].clientY;
      const deltaY = lastTouchYRef.current - touchY;
      lastTouchYRef.current = touchY;

      // 1:1 Movement
      virtualScrollYRef.current += deltaY;
      virtualScrollYRef.current = Math.max(0, Math.min(virtualScrollYRef.current, maxScrollRef.current));

      // Calculate instantaneous velocity for momentum on release
      const now = performance.now();
      const dt = now - lastDragTimeRef.current;
      lastDragTimeRef.current = now;

      // Moving average for smoother release velocity
      if (dt > 0) {
        const newVel = deltaY; // pixels per event
        // Lerp velocity for smoothing
        velocityRef.current = velocityRef.current * 0.5 + newVel * 0.5;
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      // Momentum will be picked up by animate loop using velocityRef.current
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // --- Three.js Setup & Loop ---
  useEffect(() => {
    if (!canvasRef.current) return;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(CONFIG.FOG_COLOR);
    // Tighter fog to hide the "pop in" at the back
    scene.fog = new THREE.Fog(CONFIG.FOG_COLOR, 10, 30); // Reduced from 60 to 30

    // Extend the far plane so the distant background stays in view from the start.
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, CONFIG.CAMERA_START_Z);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Assets & Geometry Generators
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'Anonymous';

    // Default sizes (max bounds)
    const MAX_WIDTH = 3.2;
    const MAX_HEIGHT = 3.2;

    // Initial Geometry 
    const initialGeometry = new THREE.PlaneGeometry(3.2, 2.4);

    // CHANGED: Card background to WHITE per user request
    const cardMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const dateWidth = 2;
    const dateHeight = 0.5;
    const dateGeometry = new THREE.PlaneGeometry(dateWidth, dateHeight);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x222222,
      linewidth: 2,
      opacity: 0.8,
      transparent: true
    });

    // Background
    const bgGeometry = createSketchyBackground();
    const bgLines = new THREE.LineSegments(bgGeometry, new THREE.LineBasicMaterial({
      color: 0x888888,
      opacity: 0.6,
      transparent: true,
      fog: false
    }));
    const lastItemZPos = layout[layout.length - 1].z;

    // DYNAMIC BACKGROUND SCALING Logic
    const bgDistance = Math.abs(lastItemZPos - CONFIG.CAMERA_START_Z) + 20;
    bgLines.position.set(0, 0, lastItemZPos - 10);
    const depthScale = Math.max(1.5, bgDistance / 50);
    bgLines.scale.set(depthScale, depthScale, 1);

    scene.add(bgLines);

    // 3. Create Meshes
    meshesRef.current = [];
    frameLinesRef.current = {};
    mediaNodesRef.current = [];

    layout.forEach((item) => {
      const group = new THREE.Group();
      group.position.set(item.x, item.y, item.z);
      group.rotation.y = item.rotationY;
      group.rotation.z = item.rotationZ;

      // Use pre-calculated dimensions
      const iW = item.initialWidth;
      const iH = item.initialHeight;

      // 1. Content Mesh
      const contentGeo = new THREE.PlaneGeometry(iW, iH);
      const contentMesh = new THREE.Mesh(contentGeo, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
      contentMesh.position.z = 0.1;
      contentMesh.position.y = 0.15;

      // 2. Background Card (slightly larger)
      const cardW = iW + 0.3;
      const cardH = iH + 0.8;
      const bgGeo = new THREE.PlaneGeometry(cardW, cardH);
      const bgMesh = new THREE.Mesh(bgGeo, cardMaterial.clone());
      bgMesh.position.z = 0;

      // 3. Frame (matches background size)
      const initialFrameGeo = createSketchyBoxGeometry(cardW + 0.05, cardH + 0.05, item.borderIntensity);
      const frameLines = new THREE.LineSegments(initialFrameGeo, lineMaterial.clone());
      frameLines.position.z = 0.15;
      frameLinesRef.current[item.id] = frameLines;

      // Logic to resize meshes based on aspect ratio
      const updateGeometry = (width: number, height: number) => {
        const aspectRatio = width / height;
        let newW = MAX_WIDTH;
        let newH = MAX_WIDTH / aspectRatio;

        if (newH > MAX_HEIGHT) {
          newH = MAX_HEIGHT;
          newW = MAX_HEIGHT * aspectRatio;
        }

        contentMesh.geometry.dispose();
        contentMesh.geometry = new THREE.PlaneGeometry(newW, newH);

        const cardW = newW + 0.3;
        const cardH = newH + 0.8;
        bgMesh.geometry.dispose();
        bgMesh.geometry = new THREE.PlaneGeometry(cardW, cardH);

        const frameGeo = createSketchyBoxGeometry(cardW + 0.05, cardH + 0.05, item.borderIntensity);
        frameLines.geometry.dispose();
        frameLines.geometry = frameGeo;

        // Move Date Label if exists
        const dateY = -(cardH / 2) + 0.4;
        const dateMesh = group.children.find(c => c.userData.isDate);
        if (dateMesh) {
          dateMesh.position.y = dateY;
        }
      };

      // Defer loading; populate registry with item-specific geometry updater
      // Init opacity to 0 to hide initial layout shift
      mediaNodesRef.current.push({ item, contentMesh, updateGeometry, loadedOpacity: 0, targetLoadedOpacity: 0 });
      // Re-add Date Caption
      const dateTexture = createDateTexture(item.date);
      if (dateTexture) {
        const dateMaterial = new THREE.MeshBasicMaterial({ map: dateTexture, transparent: true, opacity: 0.8 });
        const dateMesh = new THREE.Mesh(dateGeometry, dateMaterial);
        dateMesh.userData = { isDate: true };
        dateMesh.position.y = -(cardH / 2) + 0.4; // Position relative to dynamic height
        dateMesh.position.z = 0.11;
        group.add(dateMesh);
      }

      group.add(bgMesh);
      group.add(contentMesh);
      group.add(frameLines);
      group.userData = { id: item.id };
      scene.add(group);
      meshesRef.current.push(contentMesh);
    });

    // Lazy load helpers
    const loadedMap: Record<string, boolean> = {};

    const loadMedia = (node: { item: MediaItem; contentMesh: THREE.Mesh; updateGeometry: (w: number, h: number) => void; video?: HTMLVideoElement; texture?: THREE.Texture; loadedOpacity: number; targetLoadedOpacity: number }) => {
      const item = node.item;
      if (loadedMap[item.id]) return;
      if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.crossOrigin = 'Anonymous';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'auto';

        videoElementsRef.current[item.id] = video;
        node.video = video;

        video.onloadedmetadata = () => {
          node.updateGeometry(video.videoWidth, video.videoHeight);
          node.targetLoadedOpacity = 1; // Start fade in
        };

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;

        texture.colorSpace = THREE.SRGBColorSpace;
        node.texture = texture;
        node.contentMesh.material.map = texture;
        node.contentMesh.material.needsUpdate = true;
      } else {
        const src = item.type === 'embed' ? (item.previewSrc || item.src) : item.src;
        textureLoader.load(src, (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;

          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;

          node.texture = texture;
          node.contentMesh.material.map = texture;
          node.contentMesh.material.needsUpdate = true;
          if (texture.image) {
            node.updateGeometry(texture.image.width, texture.image.height);
          }
          node.targetLoadedOpacity = 1; // Start fade in
        });
      }
      loadedMap[item.id] = true;
    };

    const unloadMedia = (node: { item: MediaItem; contentMesh: THREE.Mesh; updateGeometry: (w: number, h: number) => void; video?: HTMLVideoElement; texture?: THREE.Texture; loadedOpacity: number; targetLoadedOpacity: number }) => {
      const id = node.item.id;
      if (!loadedMap[id]) return;

      // Reset opacity logic
      node.loadedOpacity = 0;
      node.targetLoadedOpacity = 0;

      if (node.texture) {
        node.texture.dispose();
        node.contentMesh.material.map = null;
        node.contentMesh.material.needsUpdate = true;
        node.texture = undefined;
      }
      if (node.video) {
        node.video.pause();
        node.video.src = '';
        node.video.load();
        delete videoElementsRef.current[id];
        node.video = undefined;
      }
      delete loadedMap[id];
    };

    // 4. Scroll Calculation (Variables for internal logic if needed)
    const zStart = CONFIG.CAMERA_START_Z;
    const lastItemZ = layout[layout.length - 1].z;
    const zEnd = lastItemZ + 5;
    // Note: Scroll listeners moved to top-level useEffect to avoid "Invalid Hook Call" error



    // 6. Raycaster & Hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const getVisibilityAlpha = (group: THREE.Group) => {
      const dist = Math.abs(camera.position.z - group.position.z);
      if (dist <= CONFIG.FADE_START) return 1;
      if (dist >= CONFIG.FADE_END) return 0;
      return 1 - (dist - CONFIG.FADE_START) / (CONFIG.FADE_END - CONFIG.FADE_START);
    };

    const handleCanvasClick = (e: MouseEvent) => {
      if (isOverlayOpenRef.current || !hasEnteredRef.current) return;

      // If we already have a reliable hover target, prefer it to avoid stray hits.
      if (hoveredMediaIdRef.current) {
        const item = layout.find(i => i.id === hoveredMediaIdRef.current);
        if (item) {
          setSelectedMedia(item);
          setIsOverlayOpen(true);
          return;
        }
      }

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      scene.updateMatrixWorld(true);
      raycaster.setFromCamera(mouse, camera);

      const sceneGroups = scene.children.filter(c => c instanceof THREE.Group && c.userData.id);
      const intersects = raycaster.intersectObjects(sceneGroups, true).filter(hit => hit.object instanceof THREE.Mesh);

      // Build frustum to discard off-screen items from selection.
      const frustum = new THREE.Frustum();
      const projScreenMatrix = new THREE.Matrix4();
      projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      frustum.setFromProjectionMatrix(projScreenMatrix);
      const forward = camera.getWorldDirection(new THREE.Vector3());

      // Pick the first visible (non-faded) media under the cursor to avoid "ghost" hits.
      for (const hit of intersects) {
        let target = hit.object;
        while (target.parent && !target.userData?.id) {
          target = target.parent;
        }
        const mediaId = target.userData?.id;
        if (!mediaId) continue;

        // Skip if the item is off-screen.
        const worldPos = (target as THREE.Object3D).getWorldPosition(new THREE.Vector3());
        if (!frustum.containsPoint(worldPos)) continue;

        // Skip if the item is behind the camera.
        const toObj = worldPos.clone().sub(camera.position);
        if (toObj.dot(forward) <= 0) continue;

        // Skip if it is visually faded out.
        const alpha = getVisibilityAlpha(target as THREE.Group);
        if (alpha < 0.1) continue;

        const item = layout.find(i => i.id === mediaId);
        if (item) {
          setSelectedMedia(item);
          setIsOverlayOpen(true);
          break;
        }
      }
    };
    canvasRef.current.addEventListener('click', handleCanvasClick);

    const handleMouseMove = (e: MouseEvent) => {
      if (isOverlayOpenRef.current || !hasEnteredRef.current) return;
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const sceneGroups = scene.children.filter(c => c instanceof THREE.Group && c.userData.id);
      const intersects = raycaster.intersectObjects(sceneGroups, true);

      // FIX: Also filter hover check for Mesh only
      const meshIntersect = intersects.find(hit => hit.object instanceof THREE.Mesh);

      if (meshIntersect) {
        let target = meshIntersect.object;
        while (target.parent && !target.userData?.id) {
          target = target.parent;
        }
        hoveredMediaIdRef.current = target.userData?.id;
        document.body.style.cursor = 'pointer';
      } else {
        hoveredMediaIdRef.current = null;
        document.body.style.cursor = 'default';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);


    // 7. Animation Loop
    let animationId: number;

    // NEW: Check for coarse pointer (touch) to disable smoothing
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isOverlayOpenRef.current && hasEnteredRef.current) {

        const targetSlowdown = hoveredMediaIdRef.current ? CONFIG.HOVER_MIN_SPEED_FACTOR : 1.0;
        hoverSlowdownRef.current += (targetSlowdown - hoverSlowdownRef.current) * 0.1;

        if (!isDraggingRef.current) {
          // Unified Physics Controller
          // 1. Determine Target Velocity
          // If auto-scroll is ON, our 'rest state' is moving forward.
          // If auto-scroll is OFF, our 'rest state' is 0 (stop).
          let targetVel = 0;
          if (autoScrollSpeedRef.current > 0) {
            const currentPixelsPerZ = 250 / scrollSensitivityRef.current;
            // Calculate cruising velocity. 
            // Scaled so "Speed 10" feels like a gentle walk.
            targetVel = (autoScrollSpeedRef.current * 0.8) * (currentPixelsPerZ / 200) * hoverSlowdownRef.current;
          }

          // 2. Apply "Friction" / Momentum by Lerping towards Target
          // 0.05 factor = ~95% momentum retention per frame (smooth)
          velocityRef.current += (targetVel - velocityRef.current) * 0.05;

          // Stop infinite micro-scrolling only if target is 0
          if (Math.abs(targetVel) < 0.01 && Math.abs(velocityRef.current) < 0.01) {
            velocityRef.current = 0;
          }

          // Apply Velocity
          virtualScrollYRef.current += velocityRef.current;

          // Clamp
          if (virtualScrollYRef.current < 0) {
            virtualScrollYRef.current = 0;
            velocityRef.current = 0;
          } else if (virtualScrollYRef.current > maxScrollRef.current) {
            virtualScrollYRef.current = maxScrollRef.current;
            velocityRef.current = 0;
          }
        }

        // Sync Target (Always)
        if (maxScrollRef.current > 0) {
          targetScrollProgressRef.current = virtualScrollYRef.current / maxScrollRef.current;
        }

        const diff = targetScrollProgressRef.current - scrollProgressRef.current;

        // Unified smoothing (Desktop & Mobile Momentum both benefit from slight visual lerp)
        const clampedDiff = Math.max(-CONFIG.MAX_SCROLL_SPEED * 0.2, Math.min(CONFIG.MAX_SCROLL_SPEED * 0.2, diff));
        scrollProgressRef.current += clampedDiff * 0.1 + (diff * 0.05);

        camera.position.z = zStart - (scrollProgressRef.current * totalZDist);

        if (timelineRef.current) {
          timelineRef.current.style.width = `${scrollProgressRef.current * 100}% `;
        }

        // BGM Fading Logic (Last Item)
        const distToLast = Math.abs(camera.position.z - lastItemZPos);
        if (audioRef.current && isBgmEnabled) {
          let targetVol = 1.0;
          if (distToLast < CONFIG.BGM_FADE_ZONE) {
            targetVol = Math.max(0, (distToLast - CONFIG.BGM_SILENCE_RADIUS) / (CONFIG.BGM_FADE_ZONE - CONFIG.BGM_SILENCE_RADIUS));
          }
          // Smooth lerp
          bgmVolumeRef.current += (targetVol - bgmVolumeRef.current) * 0.05;
          audioRef.current.volume = Math.max(0, Math.min(1, bgmVolumeRef.current));
        }
      }

      // CLEANUP / GARBAGE COLLECTION:
      // Check keys in loadedMap to handle items that might have been skipped by the O(K) window (e.g. after a long jump)
      Object.keys(loadedMap).forEach(id => {
        const node = mediaNodesRef.current.find(n => n.item.id === id);
        if (node) {
          const group = node.contentMesh.parent!;
          const dist = Math.abs(camera.position.z - group.position.z);
          if (dist > 32) { // farUnload threshold
            unloadMedia(node);
          }
        }
      });

      // OPTIMIZATION: Only loop through visible range of items (O(N) -> O(K))
      // z = -i * 8.  index = -z / 8
      const centerIndex = Math.max(0, Math.floor(-camera.position.z / CONFIG.Z_SPACING));
      const buffer = 8; // items
      const startIndex = Math.max(0, centerIndex - buffer);
      const endIndex = Math.min(mediaNodesRef.current.length - 1, centerIndex + buffer);

      for (let i = startIndex; i <= endIndex; i++) {
        const node = mediaNodesRef.current[i];
        const group = node.contentMesh.parent!;
        const mesh = node.contentMesh;

        const dist = Math.abs(camera.position.z - group.position.z);

        // Load/Unload Logic
        const nearLoad = 22;
        const farUnload = 32;
        if (dist < nearLoad) loadMedia(node);
        else if (dist > farUnload) unloadMedia(node);

        // Frame Hover Effect
        const itemId = node.item.id;
        const frame = frameLinesRef.current[itemId];
        if (frame) {
          if (hoveredMediaIdRef.current === itemId) {
            (frame.material as THREE.LineBasicMaterial).color.setHex(0x000000);
            (frame.material as THREE.LineBasicMaterial).opacity = 1.0;
            frame.scale.setScalar(1.02);
          } else {
            (frame.material as THREE.LineBasicMaterial).color.setHex(0x222222);
            (frame.material as THREE.LineBasicMaterial).opacity = 0.8;
            frame.scale.setScalar(1.0);
          }
        }

        // Opacity Logic
        // 1. Distance Fading
        let distAlpha = 0;
        const NEAR_FADE_START = 4; // Start fading out when closer than this
        const NEAR_FADE_END = 0.5; // Fully invisible when closer than this

        if (dist < NEAR_FADE_END) {
          distAlpha = 0;
        } else if (dist < NEAR_FADE_START) {
          distAlpha = (dist - NEAR_FADE_END) / (NEAR_FADE_START - NEAR_FADE_END);
        } else if (dist <= CONFIG.FADE_START) {
          distAlpha = 1;
        } else if (dist >= CONFIG.FADE_END) {
          distAlpha = 0;
        } else {
          distAlpha = 1 - (dist - CONFIG.FADE_START) / (CONFIG.FADE_END - CONFIG.FADE_START);
        }

        // 2. Load Fade-In
        node.loadedOpacity += (node.targetLoadedOpacity - node.loadedOpacity) * 0.05;

        const globalAlpha = distAlpha * node.loadedOpacity;

        // Apply Opacity to ALL children to prevent "size jump" artifact
        // Content
        (mesh.material as THREE.MeshBasicMaterial).opacity = globalAlpha;

        // Background Card
        // Assuming bgMesh is the first child or finding it
        const bgMesh = group.children.find(c => (c as THREE.Mesh).isMesh && c !== mesh && !c.userData.isDate) as THREE.Mesh;
        if (bgMesh && bgMesh.material) {
          (bgMesh.material as THREE.MeshBasicMaterial).opacity = globalAlpha;
          (bgMesh.material as THREE.MeshBasicMaterial).transparent = true; // Ensure transparent is set so opacity works
        }

        // Frame
        if (frame) {
          const baseFrameOpacity = (hoveredMediaIdRef.current === itemId) ? 1.0 : 0.8;
          (frame.material as THREE.LineBasicMaterial).opacity = baseFrameOpacity * globalAlpha;
          (frame.material as THREE.LineBasicMaterial).transparent = true;
        }

        // Date Label
        const dateMesh = group.children.find(c => c.userData.isDate) as THREE.Mesh;
        if (dateMesh && dateMesh.material) {
          (dateMesh.material as THREE.MeshBasicMaterial).opacity = 0.8 * globalAlpha;
        }

        // Scale Effect
        let scale = 1;
        if (dist < CONFIG.HIGHLIGHT_RANGE) {
          scale = 1 + (1 - dist / CONFIG.HIGHLIGHT_RANGE) * 0.15;
        }
        group.scale.set(scale, scale, 1);

        // Audio Logic
        if (videoElementsRef.current[itemId]) {
          const video = videoElementsRef.current[itemId];
          if (!isOverlayOpenRef.current && hasEnteredRef.current) {
            if (isVideoMutedRef.current) {
              video.volume = 0;
            } else if (dist < CONFIG.AUDIO_MAX_DISTANCE) {
              // Unmute if close enough/valid
              video.muted = false;

              const isBehind = camera.position.z < (group.position.z - 2);
              let volume = 0;
              if (isBehind) {
                const behindDist = Math.abs(camera.position.z - group.position.z);
                volume = Math.max(0, 1 - (behindDist / CONFIG.AUDIO_QUICK_FADE_BEHIND));
              } else {
                volume = Math.max(0, 1 - (dist / CONFIG.AUDIO_MAX_DISTANCE));
              }
              video.volume = volume;
              if (video.paused) video.play().catch(() => { });
            } else {
              if (video.volume > 0) video.volume = 0;
              if (!video.paused) video.pause();
            }
          }
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvasRef.current?.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationId);
      if (timelineScrollRafRef.current) cancelAnimationFrame(timelineScrollRafRef.current);
      renderer.dispose();
      document.body.style.height = 'auto';
      (Object.values(videoElementsRef.current) as HTMLVideoElement[]).forEach(v => {
        v.pause(); v.src = ""; v.load();
      });
    };
  }, [layout]);


  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedMedia(null);
  };

  const scrollToPercent = (pct: number) => {
    // Virtual Scroll Jump
    // Kill momentum
    velocityRef.current = 0;

    targetScrollProgressRef.current = Math.max(0, Math.min(1, pct));
    if (maxScrollRef.current > 0) {
      virtualScrollYRef.current = targetScrollProgressRef.current * maxScrollRef.current;
    }
  };

  const handleTimelineTouchMove = (e: React.TouchEvent) => {
    // Prevent page scroll while scrubbing
    // Note: 'touch-action: none' in CSS is also required for this to work perfectly
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const pct = Math.min(Math.max((touch.clientX - rect.left) / rect.width, 0), 1);

    setTimelineHoverPos(touch.clientX);

    const totalItems = MEDIA_DATA.length;
    const index = Math.floor(pct * (totalItems - 1));
    const item = MEDIA_DATA[index];
    if (item) {
      setTimelineHoverDate(item.date);
    }

    // Direct scrubbing
    scrollToPercent(pct);
  };

  const handleTimelineClick = (e: React.MouseEvent) => {
    if (isOverlayOpen || !hasEntered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    scrollToPercent(focusPctFromPct(pct));
  };

  const togglePanel = (panel: 'audio' | 'general' | 'credit') => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const zStartForTimeline = CONFIG.CAMERA_START_Z;
  const lastItemZForTimeline = layout[layout.length - 1].z;
  const zEndForTimeline = lastItemZForTimeline + 5;
  const totalZDistForTimeline = zStartForTimeline - zEndForTimeline || 1;

  const progressForZ = (z: number) => Math.min(Math.max((zStartForTimeline - z) / totalZDistForTimeline, 0), 1);
  const zForProgress = (pct: number) => zStartForTimeline - pct * totalZDistForTimeline;
  const focusPctFromPct = (pct: number) => progressForZ(zForProgress(pct) + CONFIG.TIMELINE_FOCUS_OFFSET);

  const timelinePins = layout
    .filter(item => item.timelineLabel)
    .map(item => ({
      id: item.id,
      label: item.timelineLabel as string,
      pct: progressForZ(item.z),
      focusPct: progressForZ(item.z + CONFIG.TIMELINE_FOCUS_OFFSET),
      z: item.z,
    }));

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full block z-0" />

      <audio
        ref={audioRef}
        src={MUSIC_TRACKS[currentTrackIndex].src}
        onEnded={() => playTrack((currentTrackIndex + 1) % MUSIC_TRACKS.length)}
      />

      {/* Landing / Opening Modal */}
      {!hasEntered && (
        <LandingScreen onStartTransition={handleStartTransition} />
      )}

      {/* Transition Layer */}
      {isTransitioning && (
        <TennisRainTransition
          onCovered={handleTransitionCovered}
          onComplete={handleTransitionComplete}
        />
      )}

      <div className={`fixed top-6 left-0 right-6 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 flex justify-center ${hasEntered ? 'opacity-100' : 'opacity-0'} `}>
        <h1 className="text-1xl md:text-3xl font-bold text-gray-800 drop-shadow-sm rotate-[-2deg] text-center px-4">
          The secret life of <span className="text-gray-600">Warco Mu</span>
        </h1>
      </div>

      {/* --- Right Side Vertical Stack --- */}
      <div className={`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}>

        {/* 1. Audio Button */}
        <div className="relative flex flex-col items-end">
          {/* @ts-ignore */}
          <wired-icon-button className="bg-white text-gray-800 rounded-full" onClick={() => togglePanel('audio')}>
            <IconMusic />
            {/* @ts-ignore */}
          </wired-icon-button>

          {activePanel === 'audio' && (
            <div className="absolute top-12 right-0 z-50 animate-fade-in">
              {/* @ts-ignore */}
              <wired-card elevation={3} className="bg-white p-4 w-72 block">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
                  <span className="font-bold text-sm">Audio Settings</span>
                  <button onClick={() => setActivePanel(null)} className="text-gray-500 hover:text-black"><IconClose /></button>
                </div>

                {/* Video Audio Mute */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs text-gray-500">Video Sound</label>
                    <button
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="p-1 rounded hover:bg-gray-100"
                      title={isVideoMuted ? "Unmute Videos" : "Mute Videos"}
                    >
                      {isVideoMuted ? <IconSpeakerOff /> : <IconSpeakerOn />}
                    </button>
                  </div>
                </div>

                {/* BGM Controls */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs text-gray-500">Background Music</label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsBgmEnabled(!isBgmEnabled)}
                        className="p-1 rounded hover:bg-gray-100"
                        title={isBgmEnabled ? "Disable BGM" : "Enable BGM"}
                      >
                        {isBgmEnabled ? <IconSpeakerOn /> : <IconSpeakerOff />}
                      </button>
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 justify-center py-2 transition-opacity ${isBgmEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'} `}>
                    <button
                      onClick={toggleBgmPlay}
                      className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors"
                    >
                      {isBgmPlaying ? <IconPause /> : <IconPlay />}
                    </button>
                  </div>

                  <div className={`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${isBgmEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'} `}>
                    {MUSIC_TRACKS.map((track, idx) => (
                      <div
                        key={idx}
                        onClick={() => playTrack(idx)}
                        className={`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${currentTrackIndex === idx ? 'bg-blue-50 font-bold text-blue-700' : 'text-gray-600'} `}
                      >
                        {idx + 1}. {track.title}
                      </div>
                    ))}
                  </div>
                </div>
                {/* @ts-ignore */}
              </wired-card>
            </div>
          )}
        </div>

        {/* 2. General Settings Button */}
        <div className="relative flex flex-col items-end">
          {/* @ts-ignore */}
          <wired-icon-button className="bg-white text-gray-800 rounded-full" onClick={() => togglePanel('general')}>
            <IconSettings />
            {/* @ts-ignore */}
          </wired-icon-button>

          {activePanel === 'general' && (
            <div className="absolute top-12 right-0 z-50 animate-fade-in">
              {/* @ts-ignore */}
              <wired-card elevation={3} className="bg-white p-4 w-64 block">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
                  <span className="font-bold text-sm">General Settings</span>
                  <button onClick={() => setActivePanel(null)} className="text-gray-500 hover:text-black"><IconClose /></button>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-1">Auto-Forward Speed</label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Off</span>
                    <input
                      type="range" min="0" max="20" step="1"
                      value={autoScrollSpeed}
                      onChange={(e) => setAutoScrollSpeed(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-xs font-bold w-4 text-center">{autoScrollSpeed}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs text-gray-500 block mb-1">Scroll Sensitivity</label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Low</span>
                    <input
                      type="range" min="0.1" max="5.0" step="0.1"
                      value={scrollSensitivity}
                      onChange={(e) => setScrollSensitivity(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-xs text-gray-400">High</span>
                  </div>
                </div>
                {/* @ts-ignore */}
              </wired-card>
            </div>
          )}
        </div>

        {/* 3. Credits Button */}
        <div className="relative flex flex-col items-end">
          {/* @ts-ignore */}
          <wired-icon-button className="bg-white text-gray-800 rounded-full" onClick={() => togglePanel('credit')}>
            <IconInfo />
            {/* @ts-ignore */}
          </wired-icon-button>

          {activePanel === 'credit' && (
            <div className="absolute top-12 right-0 z-50 animate-fade-in">
              {/* @ts-ignore */}
              <wired-card elevation={3} className="bg-white p-4 w-64 block">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
                  <span className="font-bold text-sm">Credits</span>
                  <button onClick={() => setActivePanel(null)} className="text-gray-500 hover:text-black"><IconClose /></button>
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  <p className="mb-2"><strong>Coming Soon</strong></p>
                  <p className="mb-2">This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. <br></br>Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit.</p>
                  <br></br>
                  <p>Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements.</p>
                  <br></br>
                  <p>BGM from YouTube:
                    https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi
                  </p>
                </div>
                {/* @ts-ignore */}
              </wired-card>
            </div>
          )}
        </div>

      </div>
      {hasEntered && (
        <div
          className="fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative"
          style={{ position: 'fixed', bottom: 0, left: 0, right: 0, top: 'auto', touchAction: 'none' }}
          onClick={handleTimelineClick}
          onMouseMove={handleTimelineMouseMove}
          onMouseLeave={handleTimelineMouseLeave}
          onTouchStart={handleTimelineTouchMove}
          onTouchMove={handleTimelineTouchMove}
          onTouchEnd={handleTimelineMouseLeave}
        >
          {timelinePins.map(pin => (
            <button
              key={pin.id}
              onClick={(e) => {
                e.stopPropagation();
                scrollToPercent(pin.focusPct);
              }}
              className="absolute flex flex-col items-center group/pin transition-transform duration-150"
              style={{ left: `calc(${pin.pct * 100}% - 6px)`, bottom: '8px', zIndex: 10 }}
              title={pin.label}
            >
              <span className="text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap">
                {pin.label}
              </span>
              <img
                src={timelinePinIcon}
                alt={pin.label}
                className="w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"
              />
            </button>
          ))}
          <div
            ref={timelineRef}
            className="h-full bg-blue-500 relative transition-all duration-75 z-0"
            style={{ width: '0%', backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDI5OUUxIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')" }}
          />
          {timelineHoverDate && (
            <div
              className="absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50"
              style={{ left: timelineHoverPos }}
            >
              {timelineHoverDate}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
            </div>
          )}
        </div>
      )}
      {isOverlayOpen && selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeOverlay}
          />
          <div className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            {/* @ts-ignore */}
            <wired-card elevation={4} className="bg-white p-2 max-w-5xl">
              <div className="p-4 flex flex-col items-center">
                <div className="w-full flex justify-end mb-2">
                  {/* @ts-ignore */}
                  <wired-button onClick={closeOverlay} elevation={2}>Close [X]</wired-button>
                </div>
                <div className="relative flex items-center justify-center bg-black border-2 border-black rounded-sm shadow-inner overflow-hidden"
                  style={{
                    // Adaptive sizing logic:
                    maxHeight: '65vh',
                    maxWidth: '90vw',
                    // 2. For embeds (no intrinsic size), we must enforce aspect ratio via CSS
                    aspectRatio: selectedMedia.type === 'embed'
                      ? (MEDIA_DIMENSIONS[selectedMedia.filename]?.aspectRatio || 16 / 9)
                      : undefined,
                    // 3. For embeds, we need explicit width to fill the aspect-ratio box but not overflow
                    width: selectedMedia.type === 'embed'
                      ? `min(100%, calc(65vh * ${(MEDIA_DIMENSIONS[selectedMedia.filename]?.aspectRatio || 1.777)}))`
                      : 'auto',
                  }}
                >
                  {selectedMedia.type === 'video' && (
                    <video
                      src={selectedMedia.src}
                      className="block max-w-full max-h-[65vh] w-auto h-auto object-contain"
                      controls
                      autoPlay
                    />
                  )}
                  {selectedMedia.type === 'embed' && (
                    <iframe
                      src={(() => {
                        const base = selectedMedia.embedUrl || selectedMedia.src;
                        const sep = base.includes('?') ? '&' : '?';
                        return `${base}${sep} autoplay=1&muted=1&playsinline=1&loop=1&controls=1`;
                      })()}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={selectedMedia.title}
                    />
                  )}
                  {selectedMedia.type === 'image' && (
                    <img
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      className="block max-w-full max-h-[65vh] w-auto h-auto object-contain"
                    />
                  )}
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {selectedMedia.title}
                  </h2>
                  {selectedMedia.description && (
                    <p className="text-gray-600 text-lg font-light">{selectedMedia.description}</p>
                  )}
                </div>
              </div>
              {/* @ts-ignore */}
            </wired-card>
          </div >
        </div >
      )}
    </>
  );
};

export default App;
