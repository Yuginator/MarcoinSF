import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryTimeline = ({ progress, markers = [], onMarkerSelect, onProgressSelect }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const barRef = useRef(null);

    const handleBarClick = (e) => {
        if (!barRef.current) return;
        const rect = barRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const pct = Math.max(0, Math.min(1, clickX / width));
        onProgressSelect(pct);
    };

    return (
        <div
            className="fixed bottom-6 left-12 right-12 h-16 flex items-center z-[60] select-none"
        // Using left-12 right-12 makes it stretch across the screen, 
        // but user might want a specific width. 
        // The previous progress bar was w-[300px] centered.
        // The reference image showed a long line. Let's make it fixed width or semi-responsive.
        // Let's stick to a wider bar for better timeline resolution.
        // But maybe not full width. Let's do a wide centered bar.
        >
            <div
                className="relative w-full max-w-4xl mx-auto h-12 flex items-center group cursor-pointer"
                ref={barRef}
                onClick={handleBarClick}
            >
                {/* 1. Track (Background Bar) */}
                <div className="absolute bottom-0 left-0 w-full h-4 bg-white border-2 border-black pointer-events-none" />

                {/* 2. Progress Fill (Current Position) */}
                <motion.div
                    className="absolute bottom-0 left-0 h-4 bg-black border-y-2 border-l-2 border-transparent origin-left pointer-events-none"
                    // Note: border-transparent is to avoid double borders if we wanted them, 
                    // but simple bg-black inside the white bordered container is cleaner.
                    // We just need to fit it inside. 
                    // Actually, simpler: Render a black div *over* the white one, masked or just scaled.
                    // To keep the border visible, the fill should be inside (h-[calc(100%-4px)]?) 
                    // Or just overlay a block.
                    // Let's try overlaying a block that is slightly shorter to fit inside borders if we want "fill" behavior,
                    // BUT usually "filled progress bar" fully fills it.
                    // If the container has border, the fill can be just a div without border, inside it.
                    // But here they are siblings. 
                    // Let's make the fill `h-4` and mixed-blend-mode or just absolute.
                    // To respect the border of the parent, we should probably put the fill INSIDE the track div if possible, OR just match geometry.
                    // Let's match geometry.
                    style={{ scaleX: progress, width: '100%' }}
                />

                {/* 2b. Re-apply border on top of fill? 
                    If the fill is on top of the track, it covers the track's border. 
                    Better strategy: 
                    Outer Div: Border container.
                    Inner Div 1: White bg.
                    Inner Div 2: Black bg (scaled).
                */}
                <div className="absolute bottom-0 left-0 w-full h-4 border-2 border-black pointer-events-none overflow-hidden bg-white">
                    <motion.div
                        className="h-full bg-black origin-left"
                        style={{ scaleX: progress, width: '100%' }}
                    />
                </div>


                {/* 3. Markers (Year Dots & Video Diamonds) */}
                {markers.map((marker, index) => (
                    <div
                        key={marker.id || index}
                        // Position: Absolute based on progress.
                        // Vertical: "Above" the bar. Bar is at bottom-0 h-4.
                        // So we want bottom-4 (top of bar) + some gap.
                        // Increased hit area: w-8 h-12 (extends down to bar)
                        className="absolute bottom-4 -translate-x-1/2 z-10 w-8 h-12 flex flex-col items-center justify-end pb-2 group/marker cursor-pointer"
                        style={{ left: `${marker.progress * 100}%` }}
                        onMouseEnter={(e) => { e.stopPropagation(); setHoveredIndex(index); }}
                        onMouseLeave={(e) => { e.stopPropagation(); setHoveredIndex(null); }}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent bar click
                            onMarkerSelect(marker);
                        }}
                    >
                        {/* Label (Always visible for years? Or only hover? Ref image implies visible) 
                            Let's keep hover for strictly dense timelines, but maybe "Year" markers are always visible?
                            The user said "The markers are on the top...".
                            Let's make the label visible on hover, AND if it is a 'banner' (year) type maybe?
                            For now, let's keep hover effect but improve the styling.
                        */}

                        {/* Floating Label */}
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="mb-2 text-sm font-bold font-mono text-black pointer-events-none whitespace-nowrap bg-white/80 backdrop-blur-sm px-1 rounded"
                                >
                                    {marker.label}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* The Marker Shape (Dot) */}
                        <motion.div
                            className={`bg-black ${marker.type === 'video' ? 'w-2 h-2 rotate-45' : 'w-2 h-2 rounded-full'}`}
                            animate={{
                                scale: hoveredIndex === index ? 1.5 : 1,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryTimeline;
