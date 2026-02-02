import { useRef, useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useIntersection } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import FramedMedia from './FramedMedia';

import ProjectorSvg from '../assets/doodle/projector/projector.svg?react';

const ArtFrame = ({ item, index, style, onToggleLightbox, isMobile, priority = false }) => {
    const mainRef = useRef(null);
    const focusRef = useRef(null);
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);



    // 0. CONSTANTS & CALCULATIONS (Move to top)
    // Calculate random scale (0.8 to 1.0) deterministically based on ID
    const randomScale = useMemo(() => {
        if (!item.id) return 1;
        const seed = String(item.id).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        // % 21 gives 0-20. /100 gives 0.00-0.20. Result: 0.80 to 1.00.
        return 0.8 + ((seed % 21) / 100);
    }, [item.id]);

    const finalHeight = 58 * randomScale;

    const unloadMedia = (videoElement) => {
        if (!videoElement) return;
        // Pause and reset
        videoElement.pause();
        videoElement.removeAttribute('src');
        videoElement.src = ""; // Explicit property clear
        videoElement.load(); // Force buffer flush
    };


    // 1. INTERSECTION OBSERVER
    // Only check intersection for videos to save resources
    // Performance: Increased threshold to 0.5 (50% visibility) to prevents
    // too many videos from loading/playing at once.
    // UPDATE: User requested "load slightly before, unload slightly after".
    // Changing logic to a larger buffer (600px) and 0 threshold.
    // Also applying to ALL media (images too) for memory management.
    const intersection = useIntersection(mainRef, {
        root: null,
        // MEMORY OPTIMIZATION: Reduce buffer on mobile to prevent OOM/Overheating
        // Desktop: 600px (~30-50vw) provides smooth experience
        // Mobile: 200px (just offscreen) ensures we unload aggressively
        rootMargin: isMobile ? '400px' : '600px',
        threshold: 0,        // Trigger as soon as it touches the buffer
    });

    // 2. Focus Detection (Center of Screen)
    // We use a separate internal ref for precise center detection
    const focusIntersection = useIntersection(focusRef, {
        root: null,
        rootMargin: '0px -49% 0px -49%', // Active only in the middle 2%
        threshold: 0, // Trigger as soon as one pixel enters this zone
    });

    const isFocused = focusIntersection && focusIntersection.isIntersecting;

    // 3. EFFECTS

    // Media Loading/Unloading
    useEffect(() => {
        const isIntersecting = intersection && intersection.isIntersecting;

        // VIRTUALIZATION:
        // If priority is true (e.g., loop boundaries), keep loaded regardless of intersection.
        if (priority || isIntersecting) {
            setIsLoaded(true);
        } else {
            // Cleanup BEFORE unmounting/hiding
            if (videoRef.current) {
                unloadMedia(videoRef.current);
            }
            setIsLoaded(false);
        }
    }, [intersection, item.type, priority]);

    // ROBUST CLEANUP ON UNMOUNT
    // Critical for preventing memory leaks when navigating away or rapid scrolling
    useEffect(() => {
        return () => {
            if (videoRef.current) {
                const video = videoRef.current;
                // Forceful cleanup sequence
                video.pause();
                video.removeAttribute('src'); // Clear attribute
                video.src = ""; // Clear property
                video.load(); // Detach media keys/buffers
                video.remove(); // Detach from DOM
            }
        };
    }, []);



    // Focus Mode Playback
    // Only play video when strictly focused (in color)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isFocused) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play was prevented
                    // usually due to browser policy if unmuted, but we are muted.
                });
            }
        } else {
            video.pause();
        }
    }, [isFocused]);
    return (
        <motion.div
            ref={mainRef}
            className={clsx(
                "relative flex-shrink-0 transition-transform duration-500 pointer-events-auto"
            )}
            style={{
                // Calculate deterministic width based on aspect ratio and frame thickness
                // Projector (Embed): 27px offset (1.5px border + 12px padding, doubled)
                // Standard Frame: 56px offset (28px border, doubled)
                width: item.aspectRatio
                    ? `calc(((${finalHeight}vh - ${item.lightboxEmbed ? '27px' : '88px'}) * ${item.aspectRatio}) + ${item.lightboxEmbed ? '27px' : '88px'})`
                    : 'auto',
                height: `${finalHeight}vh`, // Randomized height
                marginRight: '80px', // Gap between items
                ...style
            }}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                // Desktop: Contract viewport (-100px) for fade-in effect
                // Mobile: Expand viewport (+200px) to pre-load visual before entry to avoid "Late Pop-in"
                margin: isMobile ? "0px 200px" : "0px -100px"
            }}
        >
            {/* Focus Detection Trigger Layer */}
            <div ref={focusRef} className="absolute inset-0 pointer-events-none" />

            {/* Projector Doodle for Embeds (Virtualized) */}
            {item.lightboxEmbed && isLoaded && (
                <div
                    className="absolute left-1/2 -translate-x-1/2 z-20 w-[120px]"
                    style={{ top: `calc(${finalHeight / 2}vh - 35vh)` }}
                >
                    <ProjectorSvg className="w-full h-auto doodle-svg" />
                </div>
            )}

            {item.lightboxEmbed ? (
                // Custom Projector Screen Frame
                <div className="relative h-full flex flex-col items-center">
                    {/* Top Bar (Projector Screen Housing) */}
                    <div className="absolute -top-3 w-[106%] h-5 bg-white border-[1.5px] border-black z-10" />

                    {/* Main Screen Content */}
                    <div className="h-full bg-white border-[1.5px] border-black p-3 flex flex-col w-full">
                        {/* Media Container */}
                        <div
                            className={clsx(
                                "relative flex-grow overflow-hidden bg-gray-100 cursor-zoom-in transition-all duration-500",
                                isFocused ? "grayscale-0" : "md:grayscale"
                            )}
                            style={{
                                aspectRatio: item.aspectRatio,
                                height: '100%'
                            }}
                            onClick={() => {
                                setIsOpen(true);
                                onToggleLightbox?.(true);
                            }}
                        >
                            {item.type === 'video' ? (
                                isLoaded ? (
                                    <video
                                        ref={videoRef}
                                        src={item.src}
                                        className="h-full w-full object-cover fade-in-media"
                                        loop
                                        muted
                                        playsInline
                                        onLoadedMetadata={(e) => { e.target.currentTime = 0.5; }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-stone-200 animate-pulse" />
                                )
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="h-full w-full object-cover fade-in-media"
                                    loading="lazy"
                                />
                            )}
                        </div>

                    </div>
                </div>
            ) : (
                <FramedMedia
                    borderWidth="28px"
                    className="p-4 bg-white h-full flex flex-col"
                    isVisible={isLoaded} // VIRTUALIZATION: Only render heavy border when visible
                >
                    {/* Media Container */}
                    <div
                        className={clsx(
                            "relative flex-grow overflow-hidden bg-gray-100 cursor-zoom-in transition-all duration-500",
                            isFocused ? "grayscale-0" : "md:grayscale"
                        )}
                        style={{
                            aspectRatio: item.aspectRatio,
                            height: '100%'
                        }}
                        onClick={() => {
                            setIsOpen(true);
                            onToggleLightbox?.(true);
                        }}
                    >
                        {item.type === 'video' ? (
                            isLoaded ? (
                                <video
                                    ref={videoRef}
                                    src={item.src}
                                    className="h-full w-full object-cover fade-in-media"
                                    loop
                                    muted
                                    playsInline
                                    onLoadedMetadata={(e) => { e.target.currentTime = 0.5; }}
                                />
                            ) : (
                                <div className="w-full h-full bg-stone-200 animate-pulse" />
                            )
                        ) : (
                            isLoaded ? (
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="h-full w-full object-cover fade-in-media"
                                // loading="lazy" // Handled manually now
                                />
                            ) : (
                                <div className="w-full h-full bg-stone-100/50" />
                            )
                        )}
                    </div>

                    {/* Caption */}
                    <div className="mt-2 text-center text-xs font-mono opacity-50">
                        {item.caption}
                    </div>
                </FramedMedia>
            )
            }

            {/* Date Label - Positioned bottom-right outside the frame (Virtualized) */}
            {
                item.date && !item.lightboxEmbed && (
                    <div
                        className="absolute bottom-0 left-[100%] ml-6 bg-white border-[1.5px] border-black px-2 py-1 text-sm font-mono whitespace-nowrap z-20"
                    >
                        {item.date.replace(/-/g, '.')}
                    </div>
                )
            }

            {/* Lightbox Overlay */}
            {/* Lightbox Overlay */}
            {
                createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => {
                                    setIsOpen(false);
                                    onToggleLightbox?.(false);
                                }}
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-10 cursor-zoom-out"
                                style={{ margin: 0 }}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="relative flex flex-col items-center max-w-full max-h-full" // Changed to flex-col
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {item.lightboxEmbed ? (
                                        (() => {
                                            let src = item.lightboxEmbed;
                                            // Simple URL rewriting for standard links
                                            if (src.includes('vimeo.com/') && !src.includes('player.vimeo.com')) {
                                                const id = src.match(/vimeo\.com\/(\d+)/)?.[1];
                                                if (id) src = `https://player.vimeo.com/video/${id}`;
                                            } else if (src.includes('youtube.com/watch') || src.includes('youtu.be/')) {
                                                const id = src.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1];
                                                if (id) src = `https://www.youtube.com/embed/${id}`;
                                            }

                                            return (
                                                <iframe
                                                    src={src}
                                                    className="w-[80vw] h-[80vh] shadow-2xl bg-black"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            );
                                        })()
                                    ) : item.type === 'video' ? (
                                        <video
                                            src={item.src}
                                            className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                                            controls
                                            autoPlay
                                        />
                                    ) : item.type === 'vimeo' ? (
                                        <iframe
                                            src={item.videoUrl}
                                            className="w-[80vw] h-[80vh] shadow-2xl bg-black"
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : item.type === 'youtube' ? (
                                        <iframe
                                            src={item.videoUrl}
                                            className="w-[80vw] h-[80vh] shadow-2xl bg-black"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.caption}
                                            className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                                        />
                                    )}
                                    <div className="mt-4 text-center text-white/80 font-mono flex flex-col gap-1">
                                        <span className="text-lg">{item.caption}</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )
            }
        </motion.div >
    );
};

export default ArtFrame;
