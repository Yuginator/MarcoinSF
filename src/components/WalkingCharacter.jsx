import { useState, useEffect, useMemo, useRef } from 'react';
import { useLenis } from 'lenis/react';
import { debugState } from '../debugState'; // DEBUG

// Import all walking character SVGs
const walkModules = import.meta.glob('../assets/doodle/walkingCharacter/*.svg', { eager: true, query: '?react' });

const WalkingCharacter = ({ className, style, stride = 50 }) => {
    // Convert modules to array and sort by filename to ensure correct sequence
    const frames = useMemo(() => {
        return Object.keys(walkModules)
            .sort((a, b) => {
                // Robust numeric sort: extract "1" from "walk00001.svg"
                const numA = parseInt(a.match(/walk(\d+)/)?.[1] || 0, 10);
                const numB = parseInt(b.match(/walk(\d+)/)?.[1] || 0, 10);
                return numA - numB;
            })
            .map(path => walkModules[path].default);
    }, []);

    const [currentFrame, setCurrentFrame] = useState(0);

    // Drive animation via Lenis scroll position for perfect sync
    // We utilize a ref to track the last scroll position for manual velocity calculation
    const lastScrollRef = useRef(0);
    const smoothedDeltaRef = useRef(0); // Smoothed velocity to prevent stutter

    useLenis(({ scroll }) => {
        if (frames.length === 0) return;

        // Calculate velocity manually (more reliable than lenis.velocity with immediate scroll)
        const rawDelta = Math.abs(scroll - lastScrollRef.current);

        // Smoothing (EMA): prevent "snap to stop" on single lagged frames
        // High retention (0.8) ensures animation continues through short hiccups
        smoothedDeltaRef.current = (smoothedDeltaRef.current * 0.8) + (rawDelta * 0.2);

        // DEBUG
        debugState.velocity = rawDelta;
        debugState.smoothedVelocity = smoothedDeltaRef.current;
        debugState.scrollX = scroll;

        lastScrollRef.current = scroll;

        // If movement is negligible, reset to standing (frame 0)
        // Threshold adjusted for smoothed value. Lowered to 0.05 to hold walk longer.
        if (smoothedDeltaRef.current < 0.05) {
            setCurrentFrame(prev => (prev !== 0 ? 0 : prev));
            return;
        }

        // Calculate frame based on distance traveled
        // stride = pixels per frame
        // Handle negative scroll (overscroll) with robust modulo
        let frameIndex = Math.floor(scroll / stride) % frames.length;
        if (frameIndex < 0) frameIndex += frames.length;

        // DEBUG
        debugState.frame = frameIndex;

        // Track visual update frequency
        const now = performance.now();
        debugState.animationDelta = now - debugState.lastFrameTime;
        debugState.lastFrameTime = now;

        setCurrentFrame(frameIndex);
    });

    if (frames.length === 0) return null;

    const CurrentComponent = frames[currentFrame];

    return (
        <div className={className} style={style}>
            <CurrentComponent
                className="w-full h-full doodle-svg"
                style={{ vectorEffect: 'non-scaling-stroke' }}
            />
        </div>
    );
};

export default WalkingCharacter;
