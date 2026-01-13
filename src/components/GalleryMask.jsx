import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Initial door path from blackdoor.svg
const DOOR_PATH = "M56.2217 1C84.019 1.00001 97.7428 11.9423 104.572 22.7236C108.007 28.1454 109.727 33.5739 110.588 37.6504C111.018 39.6868 111.232 41.3808 111.339 42.5605C111.392 43.1503 111.419 43.6118 111.432 43.9219C111.438 44.0765 111.441 44.1936 111.442 44.2705C111.443 44.3089 111.444 44.3375 111.444 44.3555V146.879H1V44.3555C1.00018 44.3375 1.00117 44.3089 1.00195 44.2705C1.00353 44.1936 1.00617 44.0765 1.0127 43.9219C1.02579 43.6118 1.0521 43.1503 1.10547 42.5605C1.21224 41.3808 1.42647 39.6868 1.85645 37.6504C2.7172 33.5739 4.43767 28.1454 7.87207 22.7236C14.7015 11.9423 28.4247 1.00012 56.2217 1Z";

const GalleryMask = ({ children }) => {
    // We can remove the mask entirely after animation to save resources/interaction
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Render Gallery (Underneath) */}
            <div className="absolute inset-0 z-0">
                {children}
            </div>

            {/* Render Expanding Reveal Overlay (On Top) */}
            {!animationComplete && (
                <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
                    <motion.svg
                        viewBox="0 0 113 148"
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            <mask id="hole-mask">
                                {/* Base: White = Opaque Mask = Overlay Visible (Black Screen) */}
                                <rect width="1000%" height="1000%" x="-500%" y="-500%" fill="white" />

                                {/* The Hole: Black = Transparent Mask = Overlay Hidden (Gallery Visible) */}
                                <motion.path
                                    d={DOOR_PATH}
                                    fill="black"
                                    initial={{ scale: 0.001 }} // Start effectively at zero
                                    animate={{ scale: 30 }} // Reduced from 100 to 30 for smoother pacing
                                    transition={{
                                        duration: 3.5,
                                        ease: [0.7, 0, 0.2, 1],
                                        delay: 0
                                    }}
                                    onAnimationComplete={() => setAnimationComplete(true)}
                                    style={{
                                        transformBox: 'fill-box',
                                        transformOrigin: '50% 50%'
                                    }}
                                />
                            </mask>
                        </defs>

                        {/* The Overlay Itself: Black, with hole cut by mask */}
                        <rect
                            width="1000%" height="1000%" x="-500%" y="-500%"
                            fill="black"
                            mask="url(#hole-mask)"
                        />
                    </motion.svg>
                </div>
            )}
        </div>
    );
};

export default GalleryMask;
