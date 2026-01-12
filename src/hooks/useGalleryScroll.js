import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { useAnimationFrame } from 'framer-motion';

export function useGalleryScroll({
    contentWidth,
    bgParallax = 0.5,
    autoScrollSpeed = 2.5,
    acceleration = 0.01,
    enableAutoScroll = true
}) {
    const lenis = useLenis();
    const lastScrollRef = useRef(0);
    const currentSpeedRef = useRef(0);

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



    // Auto-Scroll Loop
    useAnimationFrame(() => {
        if (!lenis) return;

        const currentScroll = lenis.scroll;
        lastScrollRef.current = currentScroll;

        if (!enableAutoScroll) {
            currentSpeedRef.current = 0;
            return;
        }

        // Accelerate
        if (currentSpeedRef.current < autoScrollSpeed) {
            currentSpeedRef.current = Math.min(
                currentSpeedRef.current + acceleration,
                autoScrollSpeed
            );
        } else if (currentSpeedRef.current > autoScrollSpeed) {
            currentSpeedRef.current = Math.max(
                currentSpeedRef.current - acceleration,
                autoScrollSpeed
            );
        }

        const increment = currentSpeedRef.current;
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
        const targetPx = targetProgress * maxScroll;
        lenis.scrollTo(targetPx, { immediate: true });

        setTimeout(() => {
            setTransitionState('opening');
        }, 50);
    }, [lenis, spacerWidth, targetProgress]);

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
