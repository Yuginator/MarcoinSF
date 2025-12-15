import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { MediaItem, MEDIA_DATA, MUSIC_TRACKS, MusicTrack } from './mediaData';
import { MEDIA_DIMENSIONS } from './mediaDimensions';
import LandingScreen from './LandingScreen';

import timelinePinIcon from './assets/icons/timelinePin.svg';
import { createCastleScene, CASTLE_CONFIG } from './src/scene/Castle';

// --- Types ---

declare global {
  interface Window {
    audioContext?: AudioContext;
  }
}

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
  // X Offset
  X_OFFSET: 2.2,
  CAMERA_START_Z: CASTLE_CONFIG.startZ, // Use Castle config for start position

  // Opacity / Visibility
  FADE_START: 100,
  FADE_END: 1000,
  HIGHLIGHT_RANGE: 4,

  // Audio Config
  AUDIO_MAX_DISTANCE: 12,
  AUDIO_QUICK_FADE_BEHIND: 4, // Faster fade when passed
  BGM_FADE_ZONE: 20,
  BGM_SILENCE_RADIUS: 5, // Distance from end to be fully silent

  // Scroll Physics
  MAX_SCROLL_SPEED: 20,
  SCROLL_SPEED_MULTIPLIER: 2.5,
  AUTO_SCROLL_BASE_SPEED: 0.5, // CLICK-TO-SCROLL SPEED
  HOVER_MIN_SPEED_FACTOR: 0.05,
  TIMELINE_FOCUS_OFFSET: 4,

  // Sky Cycle configuration
  SKY_STOPS: [
    // { pos: 0.0, color: new THREE.Color(0xf1f5dc) }, // Day (light yellow)
    // { pos: 0.2, color: new THREE.Color(0xc2dbf2) }, // Day (Blue)
    // { pos: 0.5, color: new THREE.Color(0xe3b69f) }, // Sunset (Peach)
    // { pos: 0.0, color: new THREE.Color(0x3d51ad) }, // Blue Hour
    { pos: 0.0, color: new THREE.Color(0x1b1e2b) },
    { pos: 0.95, color: new THREE.Color(0x050510) } // Midnight
  ]
};
// #322a4bff
// #1b1e2bff
// #050510

// --- Data Generation ---

const generateLayout = (isMobile: boolean): LayoutItem[] => {
  const xOffset = isMobile ? 1.9 : CONFIG.X_OFFSET; // Tighter offset on mobile

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
      x: (Math.random() - 0.5) * 2 + (i % 2 === 0 ? -xOffset : xOffset), // Alternating zig-zag
      y: (Math.random() - 0.5) * 0.5,
      rotationY: (i % 2 === 0 ? 0.12 : -0.12) + (Math.random() - 0.5) * 0.05,
      rotationZ: (Math.random() - 0.5) * 0.1, // Slight tilt
      borderIntensity: Math.random() < 0.3 ? 2 : (Math.random() < 0.6 ? 1 : 0),
      initialWidth: width,
      initialHeight: height
    };
  });
};

// --- Helper: Retro Mac Window Textures ---
const createPinstripeTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 8; // Slightly taller for more distinct lines
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Fill Light Grey background
  ctx.fillStyle = '#dbd9d9ff';
  ctx.fillRect(0, 0, 32, 12);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  return texture;
};

// --- Helper: Glow Shader for Window ---
const createGlowMaterial = () => {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0xFFFFFF) }, // Bright White
      uSize: { value: new THREE.Vector2(1, 1) },   // Dimensions of the Window Box
      uGlowSize: { value: 0.8 }                    // Current Glow spread
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uTime;
      uniform vec2 uSize;      // Window Width, Height (in world units)
      uniform float uGlowSize; // Margin added for glow mesh
      
      varying vec2 vUv;
      
      // Signed Distance Field for Box
      float sdBox( in vec2 p, in vec2 b ) {
        vec2 d = abs(p) - b;
        return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
      }

      void main() {
        // vUv is 0..1. Map to world coordinates centered at 0.
        // Mesh Size = uSize + 2 * uGlowSize
        vec2 meshSize = uSize + vec2(uGlowSize * 2.0);
        
        vec2 p = vUv * meshSize - (meshSize * 0.5);
        
        // Define box half-size
        vec2 boxHalf = uSize * 0.5;
        
        // Calculate Distance
        float dist = sdBox(p, boxHalf);
        
        // dist <= 0 is INSIDE the window (opaque or ignore? Glow is BEHIND, so inside doesn't matter much if z-ordered)
        // dist > 0 is OUTSIDE.
        
        // Soft Falloff
        // Gaussianish: exp(-k * d*d)
        float glow = 0.0;
        if (dist > 0.0) {
            // Reduced spread: Multiplier from 0.4 to 0.2 makes sigma smaller -> faster falloff
            float sigma = uGlowSize * 0.25; 
            glow = exp(-(dist * dist) / (2.0 * sigma * sigma));
        } else {
            // Inside the box
            glow = 1.0; 
        }
        
        // Animation: Pulse intensity
        float pulse = 0.8 + 0.2 * sin(uTime * 2.5); // Faster pulse
        
        float alpha = glow * pulse;
        
        // Hard cut at texture edge to avoid repeat artifacts if any (though plain plane shouldn't behave weird)
        // Fade out at very edge
        // distance from center to edge of mesh?
        // Let's just trust Gaussian to be near 0 at edge.
        
        gl_FragColor = vec4(uColor, alpha);
        
        // Optional: extra sparkle?
      }
    `,
    transparent: true,
    depthWrite: false, // Don't write depth, just blend
    blending: THREE.AdditiveBlending // Add to background (stars)
  });
};

const createWindowButtonTexture = (type: 'close' | 'zoom' | 'collapse') => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // 1. Box Background (White)
  ctx.fillStyle = '#8e8e8eff';
  ctx.fillRect(0, 0, 32, 32);

  // 2. Black/Grey Border
  // Use #333333 for darker grey instead of pure black
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 0, 32, 32);

  // 3. Icon
  ctx.beginPath();
  if (type === 'close') {
    // Draw X
    const p = 8;
    ctx.moveTo(p, p);
    ctx.lineTo(32 - p, 32 - p);
    ctx.moveTo(32 - p, p);
    ctx.lineTo(p, 32 - p);
  } else if (type === 'zoom') {
    // Draw Box
    const p = 8;
    ctx.strokeRect(p, p, 32 - 2 * p, 32 - 2 * p);
  } else if (type === 'collapse') {
    // Draw Line
    const p = 8;
    ctx.moveTo(p, 16);
    ctx.lineTo(32 - p, 16);
  }
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  return texture;
};

// --- Helper: Create Text Texture for Date ---
const createDateTexture = (text: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  canvas.width = 512;
  canvas.height = 128;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Use ChicagoFLF for header date
  ctx.font = '60px "ChicagoFLF"';
  ctx.fillStyle = '#000000';
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

// --- Retro Photo Material Factory ---
const createRetroPhotoMaterial = () => {
  return new THREE.ShaderMaterial({
    uniforms: {
      uMap: { value: null },
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(512, 512) }, // Default, updated on load
      uGlitchStrength: { value: 0.005 },
      opacity: { value: 1.0 }
    },
    vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
    fragmentShader: `
            uniform sampler2D uMap;
            uniform float uTime;
            uniform vec2 uResolution;
            uniform float uGlitchStrength;
            uniform float opacity;
            varying vec2 vUv;

            // Random function
            float random(vec2 st) {
                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }

            void main() {
                vec2 uv = vUv;

                // 1. Pixelation (Low-res)
                // Effective resolution control (lower = more blocked)
                float pixelSize = 256.0; 
                vec2 pixelatedUv = floor(uv * pixelSize) / pixelSize;

                // 2. Glitch / Scanline Displacement
                // Random horizontal jiggle on scanlines
                float scanlineJiggle = (random(vec2(0.0, floor(uv.y * 50.0) + floor(uTime * 20.0))) - 0.5) * uGlitchStrength;
                // Occasional large glitch block
                float blockGlitch = 0.0;
                if (random(vec2(floor(uTime * 5.0), floor(uv.y * 10.0))) > 0.95) {
                    blockGlitch = (random(vec2(uTime, uv.y)) - 0.5) * 0.05;
                }
                
                vec2 finalUv = pixelatedUv + vec2(scanlineJiggle + blockGlitch, 0.0);
                
                vec4 color = texture2D(uMap, finalUv);

                // 3. CRT Color & Scanlines
                // Basic contrast boost - REDUCED for washed out look
                // Was: (color.rgb - 0.5) * 1.3 + 0.5;
                color.rgb = (color.rgb - 0.5) * 0.9 + 0.5;

                // Desaturation (Washed out)
                float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                // Mix 60% color, 40% gray
                color.rgb = mix(vec3(gray), color.rgb, 0.6);

                // Lift blacks slightly using screen with dark grey
                color.rgb = clamp(color.rgb, 0.0, 1.0);
                color.rgb = mix(color.rgb, vec3(0.1, 0.1, 0.12), 0.1);

                // Color shift (Aberration)
                float r = texture2D(uMap, finalUv + vec2(0.002, 0.0)).r;
                float b = texture2D(uMap, finalUv - vec2(0.002, 0.0)).b;
                color.r = mix(color.r, r, 0.5);
                color.b = mix(color.b, b, 0.5);
                
                // Scanlines (Darkening lines)
                float scanline = sin(uv.y * 800.0 + uTime * 5.0) * 0.05; // Reduced intensity
                color.rgb -= scanline;

                // Green tint for "Matrix/CRT" vibe
                color.rgb += vec3(0.0, 0.02, 0.05);

                gl_FragColor = color;
                gl_FragColor.a *= opacity;
            }
        `,
    transparent: true // Needed if original media has transparency, usually photos don't but safe to have.
  });
};

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // State
  // Initial generation based on current window width
  const [layout, setLayout] = useState(() => generateLayout(window.innerWidth < 768));

  // Update layout on resize to handle rotation (Mobile <-> Desktop)
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      // We only want to regenerate if the mode actually changed to avoid unnecessary jitters
      // But since generateLayout uses Math.random(), full regeneration changes everything.
      // For now, let's just accept the jitter on rotation as the price for responsiveness.
      setLayout(generateLayout(isMobile));
    };
    // Debounce or just raw? Raw is fine for simple component.
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile for UI (Re-use resize logic or generic check)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);


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
  const glowMaterialsRef = useRef<THREE.ShaderMaterial[]>([]);

  const videoElementsRef = useRef<{ [id: string]: HTMLVideoElement }>({});
  // Added loadedOpacity and targetLoadedOpacity for smooth resize transitions
  // Added expandProgress and targetExpandProgress for window expand animation (line to rectangle)
  const mediaNodesRef = useRef<{ item: MediaItem; contentMesh: THREE.Mesh; updateGeometry: (w: number, h: number) => void; video?: HTMLVideoElement; texture?: THREE.Texture; loadedOpacity: number; targetLoadedOpacity: number; expandProgress: number; targetExpandProgress: number; gainNode?: GainNode }[]>([]);
  const retroMaterialsRef = useRef<THREE.ShaderMaterial[]>([]);
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
  const lastScrollTimeRef = useRef(0);

  // Castle Scene Updates
  const castleUpdateRef = useRef<((time: number) => void) | null>(null);

  // Auto-scroll State
  const isAutoScrollingRef = useRef(false);

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

    // Directly enter the gallery without transition
    setHasEntered(true);
    setIsBgmPlaying(true);
    setAutoScrollSpeed(5);
    (Object.values(videoElementsRef.current) as HTMLVideoElement[]).forEach(video => {
      video.muted = false;
      video.volume = 0;
    });
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
  // Responsive Start Z
  const [startZ, setStartZ] = useState(() => window.innerWidth < 768 ? 14 : CONFIG.CAMERA_START_Z);

  useEffect(() => {
    const handleResize = () => {
      const newZ = window.innerWidth < 768 ? 14 : CONFIG.CAMERA_START_Z;
      setStartZ(prev => prev !== newZ ? newZ : prev);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Derived state for scroll calculations
  const zStartRaw = startZ;
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

  // --- Web Audio Context Init ---
  // Must be resumed on first user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!window.audioContext) {
        window.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (window.audioContext.state === 'suspended') {
        window.audioContext.resume();
      }
    };
    window.addEventListener('touchstart', initAudio, { once: true });
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });
    return () => {
      window.removeEventListener('touchstart', initAudio);
      window.removeEventListener('click', initAudio);
      window.removeEventListener('keydown', initAudio);
    };
  }, []);

  // --- Three.js Setup & Loop ---
  useEffect(() => {
    if (!canvasRef.current) return;

    // 1. Scene
    const scene = new THREE.Scene();
    // --- Scene Setup ---
    scene.background = new THREE.Color(0xf1f5dc); // Monument Valley Sky Blue
    scene.fog = new THREE.Fog(0xf1f5dc, 20, 80); // Fog: Start fading at 20, fully obscured at 80

    // Add Castle / Planets!
    // Calculate depth based on layout
    const galleryDepthZ = layout[layout.length - 1]?.z || -100;
    const { update: castleUpdate } = createCastleScene(scene, galleryDepthZ);
    castleUpdateRef.current = castleUpdate;

    // --- Lighting (Pastel Style) ---
    // 1. Hemisphere Light (Sky vs Ground ambients)
    // REDUCED INTENSITY: Was 0.6. Lowered to 0.35 to allow toon shadows to appear.
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.35);
    scene.add(hemiLight);

    // 2. Directional Light (Sun)
    const dirLight = new THREE.DirectionalLight(0xffecd2, 1.5);
    // Adjusted position for better cross-lighting on spheres
    dirLight.position.set(80, 60, 50);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    // Ensure shadow box covers the castle
    dirLight.shadow.camera.left = -50;
    dirLight.shadow.camera.right = 50;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -50;
    scene.add(dirLight);

    // Ambient fill
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // REMOVED: Old random "friends" drawing logic
    // (The castle has its own details now)

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, startZ);
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

    // CHANGED: Card background to WHITE per user request (Updated to Dark Grey)
    const cardMaterial = new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true });
    const dateWidth = 2;
    const dateHeight = 0.5;
    const dateGeometry = new THREE.PlaneGeometry(dateWidth, dateHeight);




    // DYNAMIC BACKGROUND SCALING Logic REMOVED
    // Castle scene is static relative to world, camera moves through it.
    // Legacy bgLines/friendsLines logic removed.

    // 3. Create Meshes
    meshesRef.current = [];

    mediaNodesRef.current = [];

    // --- Shared Resources for Lazy Loading ---
    const TITLE_BAR_HEIGHT = 0.2;
    const BORDER_THICKNESS = 0.02;
    const BEVEL_THICKNESS = 0.04;
    const WINDOW_PAD = 0.2;


    // Shared Materials
    const sharedWindowBodyMat = new THREE.MeshBasicMaterial({ color: 0xd1d1d1 }); // Light Grey Body #d1d1d1
    const sharedBorderMat = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const sharedBevelMat = new THREE.MeshBasicMaterial({ color: 0xdddddd });

    // Shared Textures
    const sharedPinstripeTex = createPinstripeTexture();
    const sharedCloseTex = createWindowButtonTexture('close');
    const sharedZoomTex = createWindowButtonTexture('zoom');
    const sharedCollapseTex = createWindowButtonTexture('collapse');

    // Shared Button Materials (Reusable)
    const sharedCloseMat = new THREE.MeshBasicMaterial({ map: sharedCloseTex, transparent: true });
    const sharedZoomMat = new THREE.MeshBasicMaterial({ map: sharedZoomTex, transparent: true });
    const sharedCollapseMat = new THREE.MeshBasicMaterial({ map: sharedCollapseTex, transparent: true });

    layout.forEach((item) => {
      const group = new THREE.Group();
      group.position.set(item.x, item.y, item.z);
      group.rotation.y = item.rotationY;
      group.rotation.z = item.rotationZ;

      // Use pre-calculated dimensions
      const iW = item.initialWidth;
      const iH = item.initialHeight;

      // 1. Content Mesh (Placeholder / Raycast Target)
      const contentGeo = new THREE.PlaneGeometry(iW, iH);
      // Use standard material for placeholder, but wait for loadMedia to swap to Retro Material
      // ACTUALLY: Let's refactor loadMedia to create the retro material. 
      // For the placeholder, transparent basic is fine.
      const contentMesh = new THREE.Mesh(contentGeo, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
      contentMesh.position.z = 0.1;
      contentMesh.position.y = 0.0;

      // Lazy-loaded meshes references
      let bodyMesh: THREE.Mesh | undefined;
      let titleMesh: THREE.Mesh | undefined;
      let closeBoxMesh: THREE.Mesh | undefined;
      let zoomBoxMesh: THREE.Mesh | undefined;
      let collapseBoxMesh: THREE.Mesh | undefined;
      let borderMesh: THREE.Mesh | undefined;
      let bevelMesh: THREE.Mesh | undefined;
      let contentBorderMesh: THREE.Mesh | undefined;
      let separatorMesh: THREE.Mesh | undefined;
      let glowMesh: THREE.Mesh | undefined;
      let dateHeaderMesh: THREE.Mesh | undefined;

      // Need per-instance glow/title materials due to uniforms/repeat
      let glowMat: THREE.ShaderMaterial | undefined;
      let pinstripeTex: THREE.Texture | undefined;

      // Logic to resize meshes based on aspect ratio AND Lazily Create them
      const updateGeometry = (width: number, height: number) => {
        const aspectRatio = width / height;
        let newW = MAX_WIDTH;
        let newH = MAX_WIDTH / aspectRatio;

        if (newH > MAX_HEIGHT) {
          newH = MAX_HEIGHT;
          newW = MAX_HEIGHT * aspectRatio;
        }

        // Recalculate dimensions
        const bW = newW + (WINDOW_PAD * 2);
        const bH = newH + (WINDOW_PAD * 2);

        // --- LAZY CREATION START ---
        if (!bodyMesh) {
          // A. Main Body
          bodyMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), sharedWindowBodyMat);
          bodyMesh.position.z = 0.05;
          group.add(bodyMesh);

          // B. Title Bar (Unique Texture Repeat)
          // Clone texture to allow unique UV scaling via repeat? 
          // Or share material and clone texture?
          // To keep it simple, clone the texture and make a new mat.
          if (sharedPinstripeTex) {
            pinstripeTex = sharedPinstripeTex.clone();
            pinstripeTex.needsUpdate = true; // Essential for cloned texture to init
          }
          const titleBarMat = new THREE.MeshBasicMaterial({ map: pinstripeTex, color: 0xffffff });
          titleMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), titleBarMat);
          titleMesh.position.z = 0.05;
          group.add(titleMesh);

          // C. Buttons
          // Helper to position buttons relative to title bar
          const boxSize = TITLE_BAR_HEIGHT * 0.7; // Box size
          const boxY = 0; // Set in updates
          const boxZ = 0.06;

          closeBoxMesh = new THREE.Mesh(new THREE.PlaneGeometry(boxSize, boxSize), sharedCloseMat); // reusing geometry ok? No, position unique
          group.add(closeBoxMesh);

          zoomBoxMesh = new THREE.Mesh(new THREE.PlaneGeometry(boxSize, boxSize), sharedZoomMat);
          group.add(zoomBoxMesh);

          collapseBoxMesh = new THREE.Mesh(new THREE.PlaneGeometry(boxSize, boxSize), sharedCollapseMat);
          group.add(collapseBoxMesh);

          // D. Borders
          bevelMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), sharedBevelMat);
          bevelMesh.position.z = 0.02;
          group.add(bevelMesh);

          borderMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), sharedBorderMat);
          borderMesh.position.z = 0;
          group.add(borderMesh);

          contentBorderMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), sharedBorderMat);
          contentBorderMesh.position.z = 0.04;
          group.add(contentBorderMesh);

          separatorMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.02), sharedBorderMat);
          separatorMesh.position.z = 0.06;
          group.add(separatorMesh);

          // E. Glow
          const glowMargin = 0.4;
          glowMat = createGlowMaterial();
          glowMaterialsRef.current.push(glowMat);
          glowMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), glowMat);
          glowMesh.position.z = -0.05;
          glowMesh.position.x = 0;
          group.add(glowMesh);

          // F. Date Header (Centered on Title Bar)
          const dateTex = createDateTexture(item.date);
          if (dateTex) {
            // Aspect Ratio of canvas is 512 / 128 = 4
            // Fit within Title Bar Height
            const dH = TITLE_BAR_HEIGHT;
            const dW = dH * 4; // 0.56
            const dateMat = new THREE.MeshBasicMaterial({ map: dateTex, transparent: true });
            dateHeaderMesh = new THREE.Mesh(new THREE.PlaneGeometry(dW, dH), dateMat);
            dateHeaderMesh.position.z = 0.07; // Above separator/title
            group.add(dateHeaderMesh);
          }

          group.add(contentMesh); // Ensure content mesh is at end or handled? 
          // Actually contentMesh was added below in original code. 
          // But now we add these new meshes. 
          // Let's ensure Z-order is correct by position.z
        }
        // --- LAZY CREATION END ---

        contentMesh.geometry.dispose();
        contentMesh.geometry = new THREE.PlaneGeometry(newW, newH);

        // Update Body
        if (bodyMesh) {
          bodyMesh.geometry.dispose();
          bodyMesh.geometry = new THREE.PlaneGeometry(bW, bH);
          bodyMesh.position.y = 0;
        }

        // Update Content Border
        if (contentBorderMesh) {
          contentBorderMesh.geometry.dispose();
          contentBorderMesh.geometry = new THREE.PlaneGeometry(bW + 0.02, bH + 0.02);
          contentBorderMesh.position.y = 0;
        }

        // Update Separator
        if (separatorMesh) {
          separatorMesh.geometry.dispose();
          separatorMesh.geometry = new THREE.PlaneGeometry(bW, 0.02);
          separatorMesh.position.y = (bH / 2);
        }

        // Update Title Bar
        if (titleMesh) {
          titleMesh.geometry.dispose();
          titleMesh.geometry = new THREE.PlaneGeometry(bW, TITLE_BAR_HEIGHT);
          titleMesh.position.y = (bH / 2) + (TITLE_BAR_HEIGHT / 2);

          // Texture Repeat Update
          if (pinstripeTex) {
            pinstripeTex.repeat.set(bW / 2, 1);
          }

          // Update Date Header Position
          if (dateHeaderMesh) {
            dateHeaderMesh.position.y = titleMesh.position.y;
            dateHeaderMesh.position.x = 0; // Centered
          }
        }

        // Update Buttons
        const boxSize = TITLE_BAR_HEIGHT * 0.7; // boxSize matching creation
        const boxZ = 0.06;
        if (titleMesh && closeBoxMesh && zoomBoxMesh && collapseBoxMesh) {
          const bY = titleMesh.position.y;
          closeBoxMesh.position.set(-(bW / 2) + (boxSize / 2) + 0.1, bY, boxZ);
          zoomBoxMesh.position.set((bW / 2) - (boxSize / 2) - 0.1, bY, boxZ);
          collapseBoxMesh.position.set((bW / 2) - (boxSize * 1.5) - 0.2, bY, boxZ);
        }

        // Update Bevel Frame
        const bevW = bW + (BEVEL_THICKNESS * 2);
        const bevH = bH + TITLE_BAR_HEIGHT + (BEVEL_THICKNESS * 2);
        if (bevelMesh) {
          bevelMesh.geometry.dispose();
          bevelMesh.geometry = new THREE.PlaneGeometry(bevW, bevH);
          bevelMesh.position.y = (TITLE_BAR_HEIGHT / 2);
        }

        // Update Outer Border
        const outW = bevW + (BORDER_THICKNESS * 2);
        const outH = bevH + (BORDER_THICKNESS * 2);
        if (borderMesh) {
          borderMesh.geometry.dispose();
          borderMesh.geometry = new THREE.PlaneGeometry(outW, outH);
          borderMesh.position.y = (TITLE_BAR_HEIGHT / 2);
        }

        // Update Glow (Illumination)
        const glowMargin = 0.4;
        if (glowMesh && glowMat && borderMesh) { // check borderMesh for pos
          const glW = outW + (glowMargin * 2);
          const glH = outH + (glowMargin * 2);
          glowMesh.geometry.dispose();
          glowMesh.geometry = new THREE.PlaneGeometry(glW, glH);
          glowMesh.position.y = borderMesh.position.y;
          // Update uniforms for shader SDF
          glowMat.uniforms.uSize.value.set(outW, outH);
        }

        // Move Date Label - REMOVED (Legacy)
      };

      // Defer loading; populate registry with item-specific geometry updater
      // Init opacity to 0 to hide initial layout shift
      mediaNodesRef.current.push({ item, contentMesh, updateGeometry, loadedOpacity: 0, targetLoadedOpacity: 0, expandProgress: 0, targetExpandProgress: 0 });
      // Re-add Date Caption
      // const dateTexture = createDateTexture(item.date); // REMOVED: Old date caption
      // if (dateTexture) {
      //   const dateMaterial = new THREE.MeshBasicMaterial({ map: dateTexture, transparent: true, opacity: 0.8 });
      //   const dateMesh = new THREE.Mesh(dateGeometry, dateMaterial);
      //   dateMesh.userData = { isDate: true };
      //   // Initial pos will be fixed by updateGeometry
      //   dateMesh.position.y = -2;
      //   dateMesh.position.z = 0.11;
      //   group.add(dateMesh);
      // }

      group.add(contentMesh);

      group.userData = { id: item.id };
      scene.add(group);
      meshesRef.current.push(contentMesh);
    });

    // Lazy load helpers
    const loadedMap: Record<string, boolean> = {};

    const loadMedia = (node: { item: MediaItem; contentMesh: THREE.Mesh; updateGeometry: (w: number, h: number) => void; video?: HTMLVideoElement; texture?: THREE.Texture; loadedOpacity: number; targetLoadedOpacity: number; expandProgress: number; targetExpandProgress: number; gainNode?: GainNode }) => {
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
          node.targetExpandProgress = 1; // Start expand animation
          video.play().catch(() => { }); // Auto-play immediately (muted) for texture update
        };

        // --- Web Audio Init ---
        let gainNode: GainNode | null = null;
        if (window.audioContext) {
          try {
            // Re-use source if already created (unlikely here as we create fresh video, but good practice)
            const source = window.audioContext.createMediaElementSource(video);
            gainNode = window.audioContext.createGain();
            source.connect(gainNode);
            gainNode.connect(window.audioContext.destination);
            gainNode.gain.value = 0;
          } catch (e) { console.error(e); }
        }
        if (gainNode) node.gainNode = gainNode;

        if (gainNode) node.gainNode = gainNode;

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.colorSpace = THREE.SRGBColorSpace;

        node.texture = texture;

        // --- Retro Shader Replacement ---
        const retroMat = createRetroPhotoMaterial();
        retroMat.uniforms.uMap.value = texture;
        retroMat.uniforms.uResolution.value.set(video.videoWidth, video.videoHeight);

        node.contentMesh.material.dispose(); // Cleanup placeholder
        node.contentMesh.material = retroMat;
        node.contentMesh.material.needsUpdate = true;

        retroMaterialsRef.current.push(retroMat); // Track for updates
      } else {
        const src = item.type === 'embed' ? (item.previewSrc || item.src) : item.src;
        textureLoader.load(src, (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;

          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;

          texture.wrapT = THREE.ClampToEdgeWrapping;

          node.texture = texture;

          // --- Retro Shader Replacement ---
          const retroMat = createRetroPhotoMaterial();
          retroMat.uniforms.uMap.value = texture;
          if (texture.image) {
            retroMat.uniforms.uResolution.value.set(texture.image.width, texture.image.height);
          }

          node.contentMesh.material.dispose();
          node.contentMesh.material = retroMat;
          node.contentMesh.material.needsUpdate = true;
          retroMaterialsRef.current.push(retroMat);

          if (texture.image) {
            node.updateGeometry(texture.image.width, texture.image.height);
          }
          node.targetLoadedOpacity = 1; // Start fade in
          node.targetExpandProgress = 1; // Start expand animation
        });
      }
      loadedMap[item.id] = true;
    };

    const unloadMedia = (node: { item: MediaItem; contentMesh: THREE.Mesh; updateGeometry: (w: number, h: number) => void; video?: HTMLVideoElement; texture?: THREE.Texture; loadedOpacity: number; targetLoadedOpacity: number; expandProgress: number; targetExpandProgress: number }) => {
      const id = node.item.id;
      if (!loadedMap[id]) return;

      // Reset opacity logic
      node.loadedOpacity = 0;
      node.targetLoadedOpacity = 0;
      node.expandProgress = 0;
      node.targetExpandProgress = 0;

      if (node.texture) {
        node.texture.dispose();
        // Dispose Shader Material if used
        if (node.contentMesh.material instanceof THREE.ShaderMaterial) {
          // Remove from ref array
          const matIdx = retroMaterialsRef.current.indexOf(node.contentMesh.material);
          if (matIdx > -1) retroMaterialsRef.current.splice(matIdx, 1);
          node.contentMesh.material.dispose();
        }
        // Restore basic placeholder
        node.contentMesh.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
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

        const clampedDiff = Math.max(-CONFIG.MAX_SCROLL_SPEED * 0.2, Math.min(CONFIG.MAX_SCROLL_SPEED * 0.2, diff));
        scrollProgressRef.current += clampedDiff * 0.1 + (diff * 0.05);

        camera.position.z = startZ - (scrollProgressRef.current * totalZDist);

        if (timelineRef.current) {
          timelineRef.current.style.width = `${scrollProgressRef.current * 100}% `;
        }

        // ANIMATE FRIENDS OPACITY - REMOVED (Legacy)
        // The castle scene is static.

        // --- DYNAMIC SKY CYCLE ---
        const prog = Math.min(1, Math.max(0, scrollProgressRef.current));
        const stops = CONFIG.SKY_STOPS;

        // Find which two stops we are between
        for (let i = 0; i < stops.length - 1; i++) {
          const start = stops[i];
          const end = stops[i + 1];
          if (prog >= start.pos && prog <= end.pos) {
            const range = end.pos - start.pos;
            const mix = (prog - start.pos) / range;

            // Lerp color directly into scene background
            if (scene.background instanceof THREE.Color) {
              scene.background.copy(start.color).lerp(end.color, mix);
            }
            // Sync Fog Color
            if (scene.fog instanceof THREE.Fog) {
              scene.fog.color.copy(scene.background as THREE.Color);
            }
            break;
          }
        }
      }

      // Update Glow Materials Time
      if (glowMaterialsRef.current.length > 0) {
        const time = performance.now() / 1000;
        glowMaterialsRef.current.forEach(mat => {
          mat.uniforms.uTime.value = time;
        });
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
      // --- Audio Manager Phase 1: Aggregation ---
      // Z-BAND STRATEGY: 
      // Map Camera Z to a unique "Item Index". That item owns the audio zone.
      // This guarantees zero overlap because adjacent zones share a boundary at the midpoint.

      // Calculate Scroll Position relative to the feed start
      const relativeScrollZ = startZ - camera.position.z;
      // Clamp zone index to prevent overshooting the last item when scrolling past end
      const zoneIndex = Math.min(MEDIA_DATA.length - 1, Math.max(0, Math.round(relativeScrollZ / CONFIG.Z_SPACING)));

      const activeItem = MEDIA_DATA[zoneIndex];
      let activeAudioId: string | null = null;
      let activeZoneCenterZ = 0;

      // If the owner of this zone is a video, it gets the mic.
      if (activeItem && activeItem.type === 'video') {
        activeAudioId = activeItem.id;
        // Calculate the "Optimal Viewing Position" for this item
        // To view item at ItemZ, camera should be at (ItemZ + startZ)
        // ItemZ = -zoneIndex * 8
        // Manual Offset: +4 units (Push peak slightly later/further to match visual center better)
        const MANUAL_AUDIO_OFFSET = 0;
        activeZoneCenterZ = -(zoneIndex * CONFIG.Z_SPACING) + startZ + MANUAL_AUDIO_OFFSET;
      }

      // Strict Non-Overlapping Range = Half Spacing
      const AUDIO_DIST = CONFIG.Z_SPACING / 2; // 4.0 units

      let globalMaxVideoVol = 0;

      for (let i = startIndex; i <= endIndex; i++) {
        const node = mediaNodesRef.current[i];
        const group = node.contentMesh.parent!;
        const mesh = node.contentMesh;

        const dist = Math.abs(camera.position.z - group.position.z);

        // Load/Unload Logic
        const nearLoad = 22;
        const farUnload = 32;
        // NEVER unload the last item (Finale)
        const isLastItem = (i === mediaNodesRef.current.length - 1);

        if (dist < nearLoad) loadMedia(node);
        else if (dist > farUnload && !isLastItem) unloadMedia(node);



        // Opacity Logic
        // 1. Distance Fading
        let distAlpha = 0;
        const NEAR_FADE_START = 6; // Start fading earlier
        const NEAR_FADE_END = 3;   // Fully invisible before hitting camera

        if (dist < NEAR_FADE_END) {
          distAlpha = 0; // Still hide close items completely
          group.visible = false; // Disable rendering to avoid blocking
        } else {
          group.visible = true;
          if (dist < NEAR_FADE_START) {
            distAlpha = (dist - NEAR_FADE_END) / (NEAR_FADE_START - NEAR_FADE_END);
          } else if (dist <= CONFIG.FADE_START) {
            distAlpha = 1;
          } else if (dist >= CONFIG.FADE_END) {
            distAlpha = 0.3; // Floor at 30% opacity instead of 0
          } else {
            // Lerp from 1.0 down to 0.3
            const t = (dist - CONFIG.FADE_START) / (CONFIG.FADE_END - CONFIG.FADE_START);
            distAlpha = 1.0 - (0.7 * t);
          }
        }


        // 2. Load Fade-In and Expand Animation
        node.loadedOpacity += (node.targetLoadedOpacity - node.loadedOpacity) * 0.05;
        node.expandProgress += (node.targetExpandProgress - node.expandProgress) * 0.04;

        const globalAlpha = distAlpha * node.loadedOpacity;

        // Apply Opacity to ALL children to prevent "size jump" artifact
        // Content
        if (mesh.material instanceof THREE.ShaderMaterial) {
          mesh.material.uniforms.opacity.value = globalAlpha;
        } else {
          (mesh.material as THREE.MeshBasicMaterial).opacity = globalAlpha;
        }

        // Background Card
        // Assuming bgMesh is the first child or finding it
        const bgMesh = group.children.find(c => (c as THREE.Mesh).isMesh && c !== mesh && !c.userData.isDate) as THREE.Mesh;
        if (bgMesh && bgMesh.material) {
          (bgMesh.material as THREE.MeshBasicMaterial).opacity = globalAlpha;
        }

        // Frame - REMOVED

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

        // Apply expand animation (vertical scale from line to rectangle)
        const scaleY = 0.01 + (node.expandProgress * 0.99); // Start at 1% height, expand to 100%
        group.scale.set(scale, scale * scaleY, 1);

        const itemId = node.item.id;

        // Audio Logic
        if (videoElementsRef.current[itemId]) {
          const video = videoElementsRef.current[itemId];
          if (!isOverlayOpenRef.current && hasEnteredRef.current) {

            // Logic:
            // Mobile (Small Screen): VISUALS ONLY. Strict Mute.
            // Desktop: Gradient Audio (Zone Based)

            const isSmallScreen = window.innerWidth < 768;

            // EXCLUSIVE AUDIO: Only the winner gets to play
            const isWinner = (itemId === activeAudioId);
            const isLastItem = (i === mediaNodesRef.current.length - 1);

            // Force audio for last item even on small screens
            if (isVideoMutedRef.current || (isSmallScreen && !isLastItem)) {
              if (!video.muted) video.muted = true; // Ensure muted
              // Also mute gain node if exists
              if (node.gainNode && node.gainNode.gain.value > 0) {
                node.gainNode.gain.cancelScheduledValues(0);
                node.gainNode.gain.value = 0;
              }
            } else if (isWinner) {
              // ACTIVE ZONE (WINNER TAKES ALL)
              // Universal Gradient Logic
              video.muted = false;

              // Calculate Volume
              // Fade from 0 to 4 units distance
              // Peak at activeZoneCenterZ (Volume 1.0)
              // Zero at 4 distance (Volume 0.0)

              let distToCenter = Math.abs(camera.position.z - activeZoneCenterZ);

              // STICKY FINALE: If this is the last item and we have scrolled PAST the center (camera.z < center),
              // keep the volume at max (dist = 0).
              if (isLastItem && camera.position.z < activeZoneCenterZ) {
                distToCenter = 0;
              }

              let vol = Math.max(0, 1 - (distToCenter / AUDIO_DIST));

              // Apply volume using Web Audio API if available (Safari Fix)
              if (node.gainNode) {
                // Use ramping for ultra-smoothness
                node.gainNode.gain.setTargetAtTime(vol, window.audioContext.currentTime, 0.1);
              } else {
                // Fallback for simple setups
                video.volume = vol;
              }

              globalMaxVideoVol = Math.max(globalMaxVideoVol, vol);

              if (video.paused) video.play().catch(() => { });

            } else {
              // INACTIVE ZONE (But still visible/loaded)
              // Ensure Muted, but keep playing for visuals!
              if (!video.muted) video.muted = true;
              // REMOVED video.pause() here. 
              // If it's loaded, it should play visually. 
              // UnloadMedia handles stopping it when it goes off-screen.
              if (video.paused) video.play().catch(() => { });
            }
          }
        }
      } // End of Loop

      // --- Audio Manager Phase 2: BGM Orchestration ---
      if (audioRef.current && isBgmEnabled) {
        // 1. Determine Target Volume based on priority
        let targetBgmVol = 1.0;

        const distToLast = Math.abs(camera.position.z - (layout[layout.length - 1].z));

        // FINALE LOGIC: If the last media is the ACTIVE audio source, kill BGM completely.
        const lastItemId = mediaNodesRef.current[mediaNodesRef.current.length - 1]?.item.id;
        const isFinalePlaying = (activeAudioId === lastItemId);

        if (isFinalePlaying) {
          targetBgmVol = 0.0; // Priority 0: Total silence for the finale
        } else if (globalMaxVideoVol > 0.1) {
          targetBgmVol = 0.1; // Priority 1: Duck for video
        } else if (distToLast < CONFIG.BGM_FADE_ZONE) {
          // Priority 2: Fade out at end of gallery
          targetBgmVol = Math.max(0, (distToLast - CONFIG.BGM_SILENCE_RADIUS) / (CONFIG.BGM_FADE_ZONE - CONFIG.BGM_SILENCE_RADIUS));
        }

        // 2. Resume if needed (Handle Mobile OS Pause)
        // Only resume if we actually want to hear it (target > 0)
        if (isBgmPlaying && audioRef.current.paused && targetBgmVol > 0.01) {
          audioRef.current.play().catch(() => { });
        }

        // 3. Apply Smooth Volume Transition (Lerp)
        const currentVol = audioRef.current.volume;
        // Move ~5% towards target per frame for smooth fades
        if (Math.abs(currentVol - targetBgmVol) > 0.005) {
          audioRef.current.volume += (targetBgmVol - currentVol) * 0.05;
        } else {
          audioRef.current.volume = targetBgmVol; // Snap to exact value when close
        }
      }

      if (castleUpdateRef.current) {
        castleUpdateRef.current(performance.now());
      }

      // Update Retro Materials
      const time = performance.now() / 1000;
      retroMaterialsRef.current.forEach(mat => {
        mat.uniforms.uTime.value = time;
      });

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
  }, [layout, startZ, totalZDist]);


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



      <div className={`fixed top-6 left-0 right-0 z-10 pointer-events-none transition-opacity duration-500 flex justify-center ${hasEntered ? 'opacity-100' : 'opacity-0'} `}>
        <h1 className="text-1xl md:text-3xl font-bold text-[#FFFFFF] drop-shadow-sm text-center px-4 whitespace-nowrap animate-text-glow"
          style={{ fontFamily: 'ChicagoFLF' }}>
          The secret life of Warco Mu 🐵
        </h1>
      </div>

      {/* --- Right Side Vertical Stack --- */}
      <div className={`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}>

        {/* 1. Audio Button */}
        <div className="relative flex flex-col items-end">
          <button
            className="w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
            onClick={() => togglePanel('audio')}
          >
            <IconMusic />
          </button>

          {activePanel === 'audio' && (
            <div className="absolute top-12 right-0 z-50 animate-fade-in">
              {/* @ts-ignore */}
              <wired-card elevation={3} className="bg-white p-4 w-72 block border-2 border-black">
                <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-3">
                  <span className="text-lg" style={{ fontFamily: 'ChicagoFLF' }}>Audio Settings</span>
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

                  {/* Mobile Disclaimer */}
                  {isMobile && (
                    <div className="text-[10px] text-amber-700 bg-amber-50 p-2 rounded mb-2 border border-amber-200 leading-tight">
                      Video sound is disabled on mobile devices. <br />(Except for the finale!)
                    </div>
                  )}
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
                        className={`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${currentTrackIndex === idx ? 'bg-gray-50 font-bold text-gray-700' : 'text-gray-600'} `}
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
          <button
            className="w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
            onClick={() => togglePanel('general')}
          >
            <IconSettings />
          </button>

          {activePanel === 'general' && (
            <div className="absolute top-12 right-0 z-50 animate-fade-in">
              {/* @ts-ignore */}
              <wired-card elevation={3} className="bg-white p-4 w-64 block border-2 border-black">
                <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-3">
                  <span className="text-lg" style={{ fontFamily: 'ChicagoFLF' }}>General Settings</span>
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
          <button
            className="w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
            onClick={() => togglePanel('credit')}
          >
            <IconInfo />
          </button>

          {activePanel === 'credit' && (
            <div className="absolute top-12 right-0 z-50 animate-fade-in">
              {/* @ts-ignore */}
              <wired-card elevation={3} className="bg-white p-4 w-64 block border-2 border-black">
                <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-3">
                  <span className="text-lg" style={{ fontFamily: 'ChicagoFLF' }}>Credits</span>
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
            className="h-full bg-gray-500 relative transition-all duration-75 z-0"
            style={{ width: '0%', backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNkI3MjgwIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')" }}
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
          <div className="relative z-10 w-auto max-w-[95vw] flex flex-col items-center pointer-events-auto">
            {/* Mac OS Window Container */}
            <div className="relative bg-white" style={{
              border: '2px solid #000000',
              boxShadow: '0 0 0 2px #a0a0a0, 0 0 0 4px #333333',
              maxWidth: '90vw',
            }}>
              {/* Title Bar */}
              <div className="relative h-8 flex items-center px-2" style={{
                background: '#d0d0d0',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='stripeGrad' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:0.5'/%3E%3Cstop offset='50%25' style='stop-color:%23ffffff;stop-opacity:0.2'/%3E%3Cstop offset='100%25' style='stop-color:%23cccccc;stop-opacity:0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='4' height='4' fill='%23d0d0d0'/%3E%3Crect x='0' y='0' width='1' height='4' fill='url(%23stripeGrad)'/%3E%3Crect x='2' y='0' width='1' height='4' fill='url(%23stripeGrad)'/%3E%3C/svg%3E")`,
                borderBottom: '1px solid #333333',
              }}>
                {/* Close Button */}
                <button
                  onClick={closeOverlay}
                  className="w-6 h-6 flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{
                    background: '#8e8e8e',
                    border: '2px solid #333333',
                  }}
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3">
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                  </svg>
                </button>
                {/* Title Text */}
                <div className="flex-1 text-center text-sm font-bold text-black select-none" style={{ fontFamily: 'ChicagoFLF, sans-serif' }}>
                  {selectedMedia.title}
                </div>
                {/* Spacer for symmetry */}
                <div className="w-6"></div>
              </div>

              {/* Content Area */}
              <div className="p-4 bg-white overflow-y-auto max-h-[85vh] no-scrollbar">
                <div className="relative flex items-center justify-center bg-black border-2 border-black rounded-sm shadow-inner overflow-hidden"
                  style={{
                    maxHeight: '75vh',
                    maxWidth: '85vw',
                    aspectRatio: selectedMedia.type === 'embed'
                      ? (MEDIA_DIMENSIONS[selectedMedia.filename]?.aspectRatio || 16 / 9)
                      : undefined,
                    width: selectedMedia.type === 'embed'
                      ? `min(100%, calc(75vh * ${(MEDIA_DIMENSIONS[selectedMedia.filename]?.aspectRatio || 1.777)}))`
                      : 'auto',
                    minWidth: selectedMedia.type === 'embed' ? '60vw' : 'auto',
                  }}
                >
                  {selectedMedia.type === 'video' && (
                    <video
                      src={selectedMedia.src}
                      className="block max-w-full max-h-[75vh] w-auto h-auto object-contain"
                      controls
                      autoPlay
                    />
                  )}
                  {selectedMedia.type === 'embed' && (
                    <iframe
                      src={(() => {
                        const base = selectedMedia.embedUrl || selectedMedia.src;
                        const sep = base.includes('?') ? '&' : '?';
                        return `${base}${sep}autoplay=1&muted=1&playsinline=1&loop=1&controls=1`;
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
                      className="block max-w-full max-h-[75vh] w-auto h-auto object-contain"
                    />
                  )}
                </div>
                {selectedMedia.description && (
                  <div className="mt-4 text-center">
                    <p className="text-gray-800 text-sm md:text-base">{selectedMedia.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
