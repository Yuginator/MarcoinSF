import { useRef } from 'react';
import { useLenis } from 'lenis/react';
import walkingSprite from '../assets/doodle/walkingCharacter/walking-sprite.svg';

const TOTAL_FRAMES = 11;

const WalkingCharacter = ({ className, style, stride = 50 }) => {
    // Wrapper Ref for direct manipulation
    const divRef = useRef(null);

    // Drive animation via Lenis scroll position for perfect sync
    // We utilize a ref to track the last scroll position for manual velocity calculation
    const lastScrollRef = useRef(0);
    const smoothedDeltaRef = useRef(0); // Smoothed velocity to prevent stutter

    useLenis(({ scroll }) => {
        if (!divRef.current) return;

        // Calculate velocity manually (more reliable than lenis.velocity with immediate scroll)
        const rawDelta = Math.abs(scroll - lastScrollRef.current);

        // Smoothing (EMA): prevent "snap to stop" on single lagged frames
        // High retention (0.8) ensures animation continues through short hiccups
        smoothedDeltaRef.current = (smoothedDeltaRef.current * 0.8) + (rawDelta * 0.2);

        lastScrollRef.current = scroll;

        let frameIndex = 0;

        // If movement is negligible, reset to standing (frame 0)
        // Threshold adjusted for smoothed value. Lowered to 0.05 to hold walk longer.
        if (smoothedDeltaRef.current >= 0.05) {
            // Calculate frame based on distance traveled
            // stride = pixels per frame
            // Handle negative scroll (overscroll) with robust modulo
            frameIndex = Math.floor(scroll / stride) % TOTAL_FRAMES;
            if (frameIndex < 0) frameIndex += TOTAL_FRAMES;
        }

        // Apply Background Position directly
        // Formula for background-position percentage: (index / (total - 1)) * 100%
        // This maps the Nth frame to the viewport.
        const positionPercentage = (frameIndex / (TOTAL_FRAMES - 1)) * 100;
        divRef.current.style.backgroundPosition = `0% ${positionPercentage}%`;
    });

    return (
        <div
            ref={divRef}
            className={className}
            style={{
                ...style,
                backgroundImage: `url(${walkingSprite})`,
                backgroundSize: `100% ${TOTAL_FRAMES * 100}%`, // Width 100%, Height 1100% of container
                backgroundRepeat: 'no-repeat',
                willChange: 'background-position',
            }}
            role="img"
            aria-label="Walking Character"
        />
    );
};

export default WalkingCharacter;
