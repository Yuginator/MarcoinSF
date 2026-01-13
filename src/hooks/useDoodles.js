import { useMemo } from 'react';

// Import Doodles as React Components
// relying on Vite's glob import
const doodleModules = import.meta.glob('../assets/doodle/*.svg', { eager: true, query: '?react' });
const DoodleComponents = Object.values(doodleModules).map(mod => mod.default);

import Lamp1 from '../assets/doodle/lamps/lamp.svg?react';
import Lamp2 from '../assets/doodle/lamps/lamp-1.svg?react';
const LampConfigs = [
    { Component: Lamp1, width: 60 },  // lamp.svg (smaller)
    { Component: Lamp2, width: 120 }  // lamp-1.svg (bigger)
];
// console.log('Explicitly Loaded Lamps:', LampComponents); // Remove or update log

// Simple seeded random generator (Linear Congruential Generator)
const createSeededRandom = (seed) => {
    let value = seed;
    return () => {
        value = (value * 1664525 + 1013904223) % 4294967296;
        return value / 4294967296;
    };
};

export function useDoodles({
    spacerWidth,
    galleryDataLength,
    crowdParallax = 0.5,
    fgParallax = 1.0,
    density = 300,
    loopWidth = 0,
    bgParallax = 0.5
}) {
    return useMemo(() => {
        // Calculate max scrollable distance based on spacer
        const scrollRange = Math.max(
            spacerWidth - window.innerWidth,
            (galleryDataLength * 400) // Fallback estimate
        );

        // Calculate cycle lengths if loop is active
        // Cycle Length = ScrollLoopDistance * (1 - LayerParallax)
        // ScrollLoopDistance = loopWidth / (1 - bgParallax)
        const scrollLoopDist = loopWidth > 0 ? loopWidth / (1 - bgParallax) : 0;

        // Helper to generate cyclic layer
        const generateLayer = (parallax, scale, layerDensity = density, seedOffset = 0) => {
            const items = [];
            const distWidth = scrollRange + window.innerWidth;
            const rng = createSeededRandom(12345 + seedOffset); // Fixed seed + offset

            // Determine Cycle Length
            // If parallax == 1 (Foreground?), transform is 0?
            // Wait, calculateFixedTransform: -1 * (1 - factor).
            // If factor=1, transform is 0. Content moves with scroll (static context).
            // If factor != 1, content moves.
            // visualShift = scroll * -1 * (1 - parallax).
            // contentWidth = scrollLoopDist * (1 - parallax).
            let cycleLength = distWidth; // Default to full width
            if (scrollLoopDist > 0) {
                cycleLength = Math.abs(scrollLoopDist * (1 - parallax));
                // Safety for edge cases (parallax=1 => cycle=0)
                if (cycleLength < 100) cycleLength = distWidth;
            }

            // Generate Master Items for one cycle
            const masterItems = [];
            // Ensure density matches cycle length
            const count = Math.ceil(cycleLength / layerDensity);

            for (let i = 0; i < count; i++) {
                if (DoodleComponents.length === 0) break;
                // Pick random doodle
                const Doodle = DoodleComponents[Math.floor(rng() * DoodleComponents.length)];

                const sectionWidth = cycleLength / count;
                const basePos = i * sectionWidth;
                const jitter = (rng() - 0.5) * sectionWidth * 0.8;

                // Position within cycle
                const relativeLeft = Math.max(0, basePos + jitter);

                masterItems.push({
                    Component: Doodle,
                    relativeLeft, // Store relative pos
                    rotation: 0,
                    scaleX: rng() > 0.5 ? 1 : -1,
                    baseWidth: (420 + rng() * 80) * scale,
                });
            }

            // Replicate Master Items to fill distWidth
            // We need to cover from 0 to distWidth
            // Also might need negative buffer? simpler to just start at 0 if spacer handles offset.
            // But wait, the "Start" of real content is shifted by `startOffset`.
            // The Cyclic Pattern must align such that `Doodle(Start)` is consistent.
            // Since we generate starting at 0, and 0 aligns with "Top Left" of container.
            // As long as the pattern repeats every `cycleLength`, it should be fine.

            const numCycles = Math.ceil(distWidth / cycleLength) + 1;

            for (let k = 0; k < numCycles; k++) {
                masterItems.forEach(item => {
                    const finalLeft = item.relativeLeft + (k * cycleLength);
                    if (finalLeft < distWidth) {
                        items.push({
                            ...item,
                            left: finalLeft
                        });
                    }
                });
            }

            return items;
        };

        // Helper to generate lamps (Ceiling) - Same logic
        const generateLamps = (parallax, seedOffset = 999) => {
            const items = [];
            const distWidth = scrollRange + window.innerWidth;
            const rng = createSeededRandom(67890 + seedOffset);

            let cycleLength = distWidth;
            if (scrollLoopDist > 0) {
                cycleLength = Math.abs(scrollLoopDist * (1 - parallax));
                if (cycleLength < 100) cycleLength = distWidth;
            }

            const lampDensity = density * 4;
            const count = Math.ceil(cycleLength / lampDensity);

            const masterItems = [];
            for (let i = 0; i < count; i++) {
                if (LampConfigs.length === 0) break;
                const config = LampConfigs[Math.floor(rng() * LampConfigs.length)];
                const { Component, width } = config;

                const sectionWidth = cycleLength / count;
                const basePos = i * sectionWidth;
                const jitter = (rng() - 0.5) * sectionWidth * 0.6;
                const relativeLeft = Math.max(0, basePos + jitter);

                masterItems.push({
                    Component,
                    relativeLeft,
                    rotation: 0,
                    scaleX: rng() > 0.5 ? 1 : -1,
                    baseWidth: width,
                });
            }

            const numCycles = Math.ceil(distWidth / cycleLength) + 1;
            for (let k = 0; k < numCycles; k++) {
                masterItems.forEach(item => {
                    const finalLeft = item.relativeLeft + (k * cycleLength);
                    if (finalLeft < distWidth) {
                        items.push({
                            ...item,
                            left: finalLeft
                        });
                    }
                });
            }
            return items;
        };

        return {
            crowdDoodles: generateLayer(crowdParallax, 1.0, density, 0),
            foregroundDoodles: generateLayer(fgParallax, 1.0, density * 2, 100),
            ceilingDoodles: generateLamps(crowdParallax)
        };
    }, [crowdParallax, fgParallax, spacerWidth, galleryDataLength, density, loopWidth, bgParallax]);
}
