import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { useAnimationFrame } from 'framer-motion';

export function useGalleryScroll({
    contentWidth,
    loopWidth = 0,
    startOffset = 0, // NEW: Buffer offset
    bgParallax = 0.5,
    autoScrollSpeed = 2.5,
    acceleration = 0.01,
    enableAutoScroll = true
}) {
    const lenis = useLenis();
    const lastScrollRef = useRef(0);
    const currentSpeedRef = useRef(0);
    const initRef = useRef(false); // Track initialization

    // Transition State for Iris/Navigation
    const [transitionState, setTransitionState] = useState('idle'); // 'idle' | 'closing' | 'opening'
    const [targetProgress, setTargetProgress] = useState(0);

    // Calculate total width for the spacer based on measured content
    const spacerWidth = useMemo(() => {
        if (!contentWidth) return window.innerWidth;

        const lastItemHalfWidth = 200;
        const effectiveWidth = Math.max(0, contentWidth - lastItemHalfWidth);
        // Transform logic: x = -scrollTop * (1 - factor)
        // We want final x to be -effectiveWidth
        // -effectiveWidth = -maxScroll * (1 - bgParallax)
        // maxScroll = effectiveWidth / (1 - bgParallax)
        const requiredScrollDist = effectiveWidth / (1 - bgParallax);

        return requiredScrollDist + window.innerWidth;
    }, [contentWidth, bgParallax]);



    const isUserInteractingRef = useRef(false);
    const resumeTimerRef = useRef(null);

    // Interaction Handlers to Pause Auto-Scroll
    useEffect(() => {
        let startX = 0;
        let startY = 0;
        const TAP_THRESHOLD = 10;

        const handleInteraction = (e) => {
            // Filter Taps vs Scrolls for Touch Events
            if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                // Do NOT set interacting yet
                return;
            }

            if (e.type === 'touchmove') {
                const currentX = e.touches[0].clientX;
                const currentY = e.touches[0].clientY;
                const dist = Math.hypot(currentX - startX, currentY - startY);

                // Ignore micro-movements (wobbly taps)
                if (dist < TAP_THRESHOLD) return;
            }

            isUserInteractingRef.current = true;

            // Clear existing timer
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

            // Set new timer to resume after 0.1s of inactivity
            resumeTimerRef.current = setTimeout(() => {
                isUserInteractingRef.current = false;
            }, 100);
        };

        const events = ['wheel', 'keydown', 'touchstart', 'touchmove'];

        events.forEach(event => window.addEventListener(event, handleInteraction, { passive: true }));

        return () => {
            events.forEach(event => window.removeEventListener(event, handleInteraction));
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        };
    }, []);

    // Auto-Scroll Loop
    useAnimationFrame((time, delta) => {
        if (!lenis) return;

        // --- INITIALIZATION ---
        // Jump to Start Offset on first valid frame
        if (!initRef.current && startOffset > 0) {
            // Calculate scroll position needed to bring Start Marker to viewport 0
            // Logic: startMarker.left in DOM is `startOffset`.
            // Transform is `translateX(-scroll * (1-bgParallax))`.
            // We want `startOffset - scroll * (1-bgParallax) = 0`.
            // So `scroll = startOffset / (1-bgParallax)`.
            const startScroll = startOffset / (1 - bgParallax);

            lenis.scrollTo(startScroll, { immediate: true });
            lastScrollRef.current = startScroll;

            // Kickstart speed to max immediately for "walking on entry" effect
            currentSpeedRef.current = autoScrollSpeed;

            initRef.current = true;
            return; // Skip this frame to let jumps settle
        }

        let currentScroll = lenis.scroll;

        // --- INFINITE LOOP CHECK ---
        if (loopWidth > 0 && startOffset > 0) {
            const scrollLoopLength = loopWidth / (1 - bgParallax);
            const scrollStart = startOffset / (1 - bgParallax);

            // Backward Check: If we scroll into the pre-buffer (left of Start Marker)
            if (currentScroll < scrollStart) {
                // Jump Forward (to end of loop)
                const overflow = currentScroll + scrollLoopLength;
                lenis.scrollTo(overflow, { immediate: true });
                currentScroll = overflow;
                lastScrollRef.current = overflow;
            }
            // Forward Check: If we scroll past the end of the loop
            else if (currentScroll >= scrollStart + scrollLoopLength) {
                // Jump Backward (to start of loop)
                const overflow = currentScroll - scrollLoopLength;
                lenis.scrollTo(overflow, { immediate: true });
                currentScroll = overflow;
                lastScrollRef.current = overflow;
            }
        }

        lastScrollRef.current = currentScroll;

        // --- SPEED LOGIC ---

        // 1. Check for High Inertia (Coasting)
        // If user finished interacting but scroll is still flying fast, let it glide.
        // Don't "slam on the brakes" to enforce walking speed until it slows down naturally.
        const velocityThreshold = autoScrollSpeed * 2; // e.g. 5.0
        if (!isUserInteractingRef.current && Math.abs(lenis.velocity) > velocityThreshold) {
            currentSpeedRef.current = 0;
            return;
        }

        // 2. Interaction / Disable Check
        if (!enableAutoScroll || isUserInteractingRef.current) {
            currentSpeedRef.current = 0;
            return;
        }

        // Accelerate
        // Normalize acceleration to 60fps (16.67ms)
        // If delta is 33ms (30fps), accel should be 2x
        const timeScale = delta / 16.667;

        if (currentSpeedRef.current < autoScrollSpeed) {
            currentSpeedRef.current = Math.min(
                currentSpeedRef.current + (acceleration * timeScale),
                autoScrollSpeed
            );
        } else if (currentSpeedRef.current > autoScrollSpeed) {
            currentSpeedRef.current = Math.max(
                currentSpeedRef.current - (acceleration * timeScale),
                autoScrollSpeed
            );
        }

        // Apply speed corrected for delta time
        const increment = currentSpeedRef.current * timeScale;
        lenis.scrollTo(currentScroll + increment, { immediate: true });
    });

    // Handle Iris Navigation
    const handleProgressClick = useCallback((e) => {
        if (transitionState !== 'idle') return;

        const rect = e.currentTarget.getBoundingClientRect();
        const t = (e.clientX - rect.left) / rect.width;
        const clampedT = Math.max(0, Math.min(1, t));

        setTargetProgress(clampedT);
        setTransitionState('closing');
    }, [transitionState]);

    const performScrollJump = useCallback(() => {
        if (!lenis) return;

        const maxScroll = Math.max(0, spacerWidth - window.innerWidth);
        let effectiveMaxScroll = maxScroll;
        const scrollStart = startOffset > 0 ? startOffset / (1 - bgParallax) : 0;

        if (loopWidth > 0) {
            effectiveMaxScroll = loopWidth / (1 - bgParallax);
        }

        const targetPx = scrollStart + (targetProgress * effectiveMaxScroll);
        lenis.scrollTo(targetPx, { immediate: true });

        setTimeout(() => {
            setTransitionState('opening');
        }, 50);
    }, [lenis, spacerWidth, targetProgress, loopWidth, bgParallax, startOffset]);

    // Force resize on mount/update
    useEffect(() => {
        if (lenis) lenis.resize();
    }, [lenis, spacerWidth]);

    return {
        spacerWidth,
        transitionState,
        setTransitionState,
        handleProgressClick,
        performScrollJump,
        targetProgress,
        setTargetProgress,
        irisRadius: 80 // We might move iris calculation here or keep in measurement
    };
}
