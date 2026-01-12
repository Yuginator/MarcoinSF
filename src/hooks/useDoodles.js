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

export function useDoodles({
    spacerWidth,
    galleryDataLength,
    crowdParallax = 0.5,
    fgParallax = 1.0,
    density = 300
}) {
    return useMemo(() => {
        // Calculate max scrollable distance based on spacer
        const scrollRange = Math.max(
            spacerWidth - window.innerWidth,
            (galleryDataLength * 400) // Fallback estimate
        );

        // Pool generation
        const maxExpectedWidth = scrollRange + window.innerWidth;
        const poolCount = Math.max(50, Math.floor(maxExpectedWidth / 200));

        const pool = [];
        if (DoodleComponents.length > 0) {
            for (let i = 0; i < poolCount; i++) {
                pool.push(DoodleComponents[Math.floor(Math.random() * DoodleComponents.length)]);
            }
        }

        // Helper to generate layer
        const generateLayer = (parallax, scale, layerDensity = density) => {
            const items = [];
            // Calculate required coverage width
            const distWidth = scrollRange + window.innerWidth;

            // Note: The previous logic used `distWidth / density` which seems correct for loop count.
            const count = Math.floor(distWidth / layerDensity);

            for (let i = 0; i < count; i++) {
                // eslint-disable-next-line react-hooks/purity
                const Doodle = pool.length > 0 ? pool[Math.floor((items.length + (parallax * 10))) % pool.length] : null;
                if (!Doodle) break;

                // UNIFORM DISTRIBUTION (with jitter)
                const sectionWidth = distWidth / count;
                const basePos = i * sectionWidth;
                const jitter = (Math.random() - 0.5) * sectionWidth * 0.8;

                const leftPos = Math.max(0, Math.floor(basePos + jitter));

                items.push({
                    Component: Doodle,
                    left: leftPos,
                    rotation: 0,
                    scaleX: Math.random() > 0.5 ? 1 : -1,
                    baseWidth: (420 + Math.random() * 80) * scale,
                });
            }
            return items;
        };

        // Helper to generate lamps (Ceiling)
        const generateLamps = (parallax) => {
            const items = [];
            const distWidth = scrollRange + window.innerWidth;

            // Low density for lamps. For example, 1 lamp every 4 * density (e.g., 1200px)
            const lampDensity = density * 4;
            const count = Math.floor(distWidth / lampDensity);
            console.log('Generating Lamps:', { distWidth, lampDensity, count, parallax });

            for (let i = 0; i < count; i++) {
                if (LampConfigs.length === 0) break;
                const config = LampConfigs[Math.floor(Math.random() * LampConfigs.length)];
                const { Component, width } = config;

                const sectionWidth = distWidth / count;
                const basePos = i * sectionWidth;
                const jitter = (Math.random() - 0.5) * sectionWidth * 0.6;
                const leftPos = Math.max(0, Math.floor(basePos + jitter));

                items.push({
                    Component,
                    left: leftPos,
                    rotation: 0,
                    scaleX: Math.random() > 0.5 ? 1 : -1,
                    // Scale: Lamps usually serve as environmental decor.
                    // Let's use a standard size or slightly randomized.
                    // The crowd logic uses ~460px base * 0.3 scale = ~140px final.
                    // If we want lamps to look proportional, we can aim for ~100-200px final width.
                    // Assuming we use 1.0 scale factor here and let loop define baseWidth.
                    // 150 + random * 100 = 150-250px.
                    baseWidth: width,
                });
            }
            return items;
        };

        return {
            crowdDoodles: generateLayer(crowdParallax, 1.0),
            foregroundDoodles: generateLayer(fgParallax, 1.0, density * 2),
            ceilingDoodles: generateLamps(crowdParallax)
        };
    }, [crowdParallax, fgParallax, spacerWidth, galleryDataLength, density]);
}
