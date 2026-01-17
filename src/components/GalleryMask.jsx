import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';

const GalleryMask = ({ children, isReady = false }) => {
    // We can remove the mask entirely after animation to save resources/interaction
    const [animationComplete, setAnimationComplete] = useState(false);

    // CSS Mask Optimization:
    // Instead of SVG masking (heavy paint), we use a CSS radial-gradient mask.
    // 0% size = All Black (Hidden)
    // 100% size = All Transparent (Revealed)

    // We animate the "size" of the transparent hole in the middle.
    const holeSize = useMotionValue(0);

    // Gradient: Transparent (hole) -> Black (cover)
    // "transparent 0px, transparent {holeSize}px, black {holeSize + 1}px"
    const maskImage = useMotionTemplate`radial-gradient(circle at center, transparent 0px, transparent ${holeSize}px, black ${holeSize}px)`;

    useEffect(() => {
        if (isReady && !animationComplete) {
            // Animate the hole from 0px to giant (covers screen diagonal)
            // Max size needed is roughly 150vw to be safe
            const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 1.5;

            animate(holeSize, maxRadius, {
                duration: 2.5, // Slightly faster than 3.5s for snappy feel
                ease: [0.7, 0, 0.2, 1], // Ease In Out
                onComplete: () => setAnimationComplete(true)
            });
        }
    }, [isReady, animationComplete, holeSize]);

    return (
        <div className="relative w-full h-full">
            {/* Render Gallery (Underneath) */}
            <div className="absolute inset-0 z-0">
                {children}
            </div>

            {/* Render Overlay (On Top) */}

            {/* Fail-safe Static Cover: Prevents "Flash of Unstyled Content" before mask initializes */}
            {(!isReady && !animationComplete) && (
                <div className="fixed inset-0 z-[60] bg-black cursor-wait" />
            )}

            {!animationComplete && (
                <motion.div
                    className="fixed inset-0 z-50 pointer-events-none bg-black"
                    style={{
                        // We mask the BLACK overlay. 
                        // The "transparent" part of the gradient PUNCHES A HOLE in the black div.
                        maskImage: maskImage,
                        WebkitMaskImage: maskImage, // Safari support
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                    }}
                />
            )}
        </div>
    );
};

export default GalleryMask;
