import { useRef, useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useIntersection } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import FramedMedia from './FramedMedia';

import ProjectorSvg from '../assets/doodle/projector/projector.svg?react';

const ArtFrame = ({ item, index, style, onToggleLightbox }) => {
    const ref = useRef(null);
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Only check intersection for videos to save resources
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: '200px',
        threshold: 0.1,
    });

    // 2. Focus Detection (Center of Screen)
    // We reuse the same ref but checking for a narrow center strip
    const focusIntersection = useIntersection(ref, {
        root: null,
        rootMargin: '0px -45% 0px -45%', // Active only in the middle 10%
        threshold: 0, // Trigger as soon as one pixel enters this zone
    });

    const isFocused = focusIntersection && focusIntersection.isIntersecting;

    // Calculate random scale (0.8 to 1.0) deterministically based on ID
    const randomScale = useMemo(() => {
        if (!item.id) return 1;
        const seed = String(item.id).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        // % 21 gives 0-20. /100 gives 0.00-0.20. Result: 0.80 to 1.00.
        return 0.8 + ((seed % 21) / 100);
    }, [item.id]);

    const finalHeight = 45 * randomScale;

    const unloadMedia = (videoElement) => {
        if (!videoElement) return;

        // Pause and reset
        videoElement.pause();
        videoElement.removeAttribute('src');
        videoElement.load();

        // Explicitly clear references if possible/needed
        // (Video element itself will be removed from DOM by React)
    };

    useEffect(() => {
        if (item.type !== 'video') return;

        const isIntersecting = intersection && intersection.isIntersecting;

        if (isIntersecting) {
            setIsLoaded(true);
            // Play logic handles itself via autoPlay or effects once rendered
            // Note: If we rely purely on autoPlay, we don't need explicit .play() calls here
            // unless we want to resume paused videos without unmounting.
            // But with this pattern, we unmount on exit.
        } else {
            // Cleanup BEFORE unmounting/hiding
            if (videoRef.current) {
                unloadMedia(videoRef.current);
            }
            setIsLoaded(false);
        }
    }, [intersection, item.type]);

    // Randomize rotation slightly for hand-drawn feel
    return (
        <motion.div
            ref={ref}
            className={clsx(
                "relative flex-shrink-0 transition-transform duration-500 will-change-transform pointer-events-auto"
            )}
            style={{
                width: 'auto', // Allow width to be determined by content
                height: `${finalHeight}vh`, // Randomized height
                marginRight: '80px', // Gap between items
                ...style
            }}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px -100px" }}
        >
            {/* Projector Doodle for Embeds */}
            {item.lightboxEmbed && (
                <div
                    className="absolute left-1/2 -translate-x-1/2 z-20 w-[120px]"
                    style={{ top: `calc(${finalHeight / 2}vh - 35vh)` }}
                >
                    <ProjectorSvg className="w-full h-auto" />
                </div>
            )}

            {item.lightboxEmbed ? (
                // Custom Projector Screen Frame
                <div className="relative h-full flex flex-col items-center">
                    {/* Top Bar (Projector Screen Housing) */}
                    <div className="absolute -top-3 w-[106%] h-5 bg-white border-2 border-black z-10" />

                    {/* Main Screen Content */}
                    <div className="h-full bg-white border-2 border-black p-3 shadow-lg flex flex-col w-auto">
                        {/* Media Container */}
                        <div
                            className={clsx(
                                "relative flex-grow overflow-hidden bg-gray-100 cursor-zoom-in transition-all duration-500",
                                isFocused ? "grayscale-0" : "grayscale"
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
                                        className="h-full w-full object-cover"
                                        loop
                                        muted
                                        playsInline
                                        autoPlay
                                    />
                                ) : (
                                    <div className="w-full h-full bg-stone-200 animate-pulse" />
                                )
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            )}
                        </div>

                    </div>
                </div>
            ) : (
                <FramedMedia
                    borderWidth="28px"
                    className="p-4 bg-white shadow-lg h-full flex flex-col"
                >
                    {/* Media Container */}
                    <div
                        className={clsx(
                            "relative flex-grow overflow-hidden bg-gray-100 cursor-zoom-in transition-all duration-500",
                            isFocused ? "grayscale-0" : "grayscale"
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
                                    className="h-full w-full object-cover"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                />
                            ) : (
                                <div className="w-full h-full bg-stone-200 animate-pulse" />
                            )
                        ) : (
                            <img
                                src={item.src}
                                alt={item.caption}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        )}
                    </div>

                    {/* Caption */}
                    <div className="mt-2 text-center text-xs font-mono opacity-50">
                        {item.caption}
                    </div>
                </FramedMedia>
            )
            }

            {/* Date Label - Positioned bottom-right outside the frame */}
            {
                item.date && !item.lightboxEmbed && (
                    <div
                        className="absolute bottom-0 left-[100%] ml-4 bg-white border-2 border-black px-2 py-1 text-sm font-mono whitespace-nowrap z-20"
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
