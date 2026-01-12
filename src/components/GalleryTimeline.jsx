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
            className="fixed bottom-12 left-12 right-12 h-16 flex items-center z-[60] select-none"
        // Using left-12 right-12 makes it stretch across the screen, 
        // but user might want a specific width. 
        // The previous progress bar was w-[300px] centered.
        // The reference image showed a long line. Let's make it fixed width or semi-responsive.
        // Let's stick to a wider bar for better timeline resolution.
        // But maybe not full width. Let's do a wide centered bar.
        >
            <div
                className="relative w-full max-w-4xl mx-auto h-8 flex items-center group cursor-pointer"
                ref={barRef}
                onClick={handleBarClick}
            >
                {/* 1. Track (Background Line) */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-stone-300 pointer-events-none" />

                {/* 2. Progress Fill (Current Position) */}
                <motion.div
                    className="absolute top-1/2 left-0 h-[2px] bg-stone-900 origin-left pointer-events-none"
                    style={{ scaleX: progress, width: '100%' }}
                />

                {/* 3. Markers (Year Dots & Video Diamonds) */}
                {markers.map((marker, index) => (
                    <div
                        key={marker.id || index}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center"
                        style={{ left: `${marker.progress * 100}%` }}
                        onMouseEnter={(e) => { e.stopPropagation(); setHoveredIndex(index); }}
                        onMouseLeave={(e) => { e.stopPropagation(); setHoveredIndex(null); }}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent bar click
                            onMarkerSelect(marker);
                        }}
                    >
                        {/* The Marker Shape */}
                        <motion.div
                            className={`w-2 h-2 bg-stone-900 ${marker.type === 'video' ? 'rotate-45' : 'rounded-full'}`}
                            animate={{
                                scale: hoveredIndex === index ? 2 : 1.2, // Make diamonds distinct?
                                backgroundColor: hoveredIndex === index ? '#000000' : '#1c1917',
                                rotate: marker.type === 'video' ? [45, 225] : 0 // Spin video markers on hover? Maybe too much.
                            }}
                            // Reset rotation for non-video
                            style={marker.type === 'video' ? { rotate: 45 } : {}}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />

                        {/* Floating Label */}
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: -24 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="absolute left-1/2 -top-4 -translate-x-1/2 text-sm font-bold font-mono text-black pointer-events-none whitespace-nowrap"
                                >
                                    {marker.label}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryTimeline;
