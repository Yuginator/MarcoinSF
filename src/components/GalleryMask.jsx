import React from 'react';
import { motion } from 'framer-motion';

// Initial door path from blackdoor.svg: 
// M56.2217 1C84.019 1.00001 97.7428 11.9423 104.572 22.7236C108.007 28.1454 109.727 33.5739 110.588 37.6504C111.018 39.6868 111.232 41.3808 111.339 42.5605C111.392 43.1503 111.419 43.6118 111.432 43.9219C111.438 44.0765 111.441 44.1936 111.442 44.2705C111.443 44.3089 111.444 44.3375 111.444 44.3555V146.879H1V44.3555C1.00018 44.3375 1.00117 44.3089 1.00195 44.2705C1.00353 44.1936 1.00617 44.0765 1.0127 43.9219C1.02579 43.6118 1.0521 43.1503 1.10547 42.5605C1.21224 41.3808 1.42647 39.6868 1.85645 37.6504C2.7172 33.5739 4.43767 28.1454 7.87207 22.7236C14.7015 11.9423 28.4247 1.00012 56.2217 1Z
const DOOR_PATH = "M56.2217 1C84.019 1.00001 97.7428 11.9423 104.572 22.7236C108.007 28.1454 109.727 33.5739 110.588 37.6504C111.018 39.6868 111.232 41.3808 111.339 42.5605C111.392 43.1503 111.419 43.6118 111.432 43.9219C111.438 44.0765 111.441 44.1936 111.442 44.2705C111.443 44.3089 111.444 44.3375 111.444 44.3555V146.879H1V44.3555C1.00018 44.3375 1.00117 44.3089 1.00195 44.2705C1.00353 44.1936 1.00617 44.0765 1.0127 43.9219C1.02579 43.6118 1.0521 43.1503 1.10547 42.5605C1.21224 41.3808 1.42647 39.6868 1.85645 37.6504C2.7172 33.5739 4.43767 28.1454 7.87207 22.7236C14.7015 11.9423 28.4247 1.00012 56.2217 1Z";

const GalleryMask = ({ children }) => {
    return (
        <div className="relative w-full h-full">
            {/* SVG Mask Definition */}
            {/* We use an inline SVG to define the mask, then reference it via CSS */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <mask id="door-reveal-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                        {/* White = Visible, Black = Hidden */}
                        {/* We want the DOOR SHAPE to be the window. */}
                        {/* We animate this window from small to large. */}
                        {/* Using objectBoundingBox, coordinates must be 0-1. 
                             The path is approx 113x148. 
                             Converting to 0-1 is annoying.
                             
                             Better approach: Use UserSpaceOnUse and a huge SVG overlay?
                             Or standard CSS Mask Image with an SVG data URI?
                             
                             Let's try the Mask Element with a scaling group.
                         */}
                        <rect width="1" height="1" fill="black" />
                        <motion.g
                            initial={{ scale: 0.1, transformOrigin: "center center" }} // Start small
                            animate={{ scale: 100 }} // Scale WAY up to cover everything
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        >
                            {/* 
                                Normalizing the path to roughly 0-1 range for objectBoundingBox?
                                Or just use a centered circle/rect for simplicity if path is too complex?
                                User wants the DOOR shape.
                                The input path is absolute units.
                                Let's wrap it in an SVG that uses viewBox but maps to 0-1?
                                
                                actually, let's use `maskContentUnits="userSpaceOnUse"` and center it on screen?
                            */}
                        </motion.g>
                    </mask>
                </defs>
            </svg>

            {/* Alternative: Use a black overlay with a hole (SVG) and scale the hole? */}
            {/* This is easier visually. 
                Structure: 
                - Bottom: Children (Gallery)
                - Top: SVG Overlay (Black with Hole)
            */}

            {/* Render Gallery */}
            <div className="absolute inset-0 z-0">
                {children}
            </div>

            {/* Render Expanding Reveal Overlay */}
            <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
                <motion.svg
                    viewBox="0 0 113 148"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice" // Ensure it covers screen if we scale inverted
                // Wait, we want a BLACK screen with a TRANSPARENT hole.
                // And we scale the HOLE up.
                >
                    <defs>
                        <mask id="hole-mask">
                            <rect width="1000%" height="1000%" x="-500%" y="-500%" fill="white" />
                            {/* The Hole: Black means transparent in mask */}
                            <motion.path
                                d={DOOR_PATH}
                                fill="black"
                                initial={{ scale: 0 }}
                                animate={{ scale: 60 }}
                                transition={{ duration: 4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                            />
                        </mask>
                    </defs>

                    {/* The Overlay Rect: Black, masked by the hole */}
                    {/* Debugging: changed fill to rgba(255,0,0,0.5) to see the mask if needed, but reverting to black for production fix */}
                    {/* We fix the motion props: remove translate, use origin */}
                    <rect
                        width="1000%" height="1000%" x="-500%" y="-500%"
                        fill="black"
                        mask="url(#hole-mask)"
                    />
                </motion.svg>
            </div>
        </div>
    );
};

// Re-thinking: The overlay approach above creates a "hole" in a black sheet.
// As the "hole" (black path in mask) scales UP, the transparent area grows.
// This reveals the underlying gallery.
// This matches "expanding mask".

export default GalleryMask;
