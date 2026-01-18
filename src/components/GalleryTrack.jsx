import { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useControls, folder } from 'leva';
import { useMedia } from 'react-use';
import ArtFrame from './ArtFrame';
import FramedMedia from './FramedMedia';
import WalkingCharacter from './WalkingCharacter';
import { galleryData } from '../data/useGalleryData';

import { useDoodles } from '../hooks/useDoodles';
import { useGalleryMeasurement } from '../hooks/useGalleryMeasurement';
import { useGalleryScroll } from '../hooks/useGalleryScroll';

import GalleryTimeline from './GalleryTimeline';
import BackgroundMusic from './BackgroundMusic';

const GalleryTrack = ({ onReady }) => {
    const containerRef = useRef(null);
    const { scrollX } = useScroll();
    const lenis = useLenis();

    // 0. GLOBAL STATE
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Mobile Check (Hoisted for Controls)
    const isMobile = useMedia('(max-width: 768px)');

    // 1. CONTROLS (Must be first to provide values)
    const {
        artworkGap,
        showArtworks,
        showCrowd,
        showForeground,
        crowdParallax,
        fgParallax,
        crowdScale,
        fgScale,
        crowdBottom,
        fgBottom,
        groundHeight,
        characterSize,
        charBottom,
        autoScrollSpeed,
        acceleration,
        stride,
        enableAutoScroll
    } = useControls({
        Layout: folder({
            artworkGap: { value: isMobile ? 160 : 220, min: 0, max: 500, label: 'Artwork Gap (px)' },
            crowdBottom: { value: isMobile ? 18 : 19, min: 0, max: 50, label: 'Crowd Bottom %' },
            fgBottom: { value: -5, min: -30, max: 10, label: 'FG Bottom %' },
            groundHeight: { value: 35, min: 0, max: 100, label: 'Ground Height %' },
            charBottom: { value: 10, min: 0, max: 50, label: 'Char Bottom %' }
        }),
        Visibility: folder({
            showArtworks: { value: true, label: 'Show Artworks' },
            showCrowd: { value: true, label: 'Show Crowd' },
            showForeground: { value: true, label: 'Show Foreground' }
        }),
        Parallax: folder({
            crowdParallax: { value: 0.45, min: 0, max: 3, step: 0.01, label: 'Crowd Parallax' },
            fgParallax: { value: 0.2, min: 0, max: 4, step: 0.01, label: 'FG Parallax' }
        }),
        Scaling: folder({
            crowdScale: { value: isMobile ? 0.15 : 0.22, min: 0.1, max: 2, label: 'Crowd Scale' },
            fgScale: { value: isMobile ? 0.30 : 0.5, min: 0.1, max: 2, label: 'FG Scale' },
            characterSize: { value: isMobile ? 160 : 250, min: 100, max: 600, label: 'Char Size (px)' }
        }),
        AutoScroll: folder({
            autoScrollSpeed: { value: 2.5, min: 0, max: 10, label: 'Target Speed' },
            acceleration: { value: 0.05, min: 0.001, max: 0.1, step: 0.001, label: 'Accel Factor' },
            stride: { value: 50, min: 10, max: 200, label: 'Char Stride' },
            enableAutoScroll: { value: true, label: 'Enable Auto-Scroll' }
        })
    });

    // 2. MEASUREMENT
    const { contentWidth, irisRadius, loopWidth, startOffset } = useGalleryMeasurement(containerRef);

    // 3. SCROLL LOGIC
    const {
        spacerWidth,
        transitionState,
        setTransitionState,
        performScrollJump,
        setTargetProgress
    } = useGalleryScroll({
        contentWidth,
        loopWidth, // Pass loop width for infinite scroll
        startOffset, // Pass start offset for buffer
        bgParallax: 0.5,
        autoScrollSpeed,
        acceleration,
        enableAutoScroll: enableAutoScroll && !isLightboxOpen // Pause when lightbox open
    });

    // 4. DOODLES
    const { crowdDoodles, foregroundDoodles, ceilingDoodles } = useDoodles({
        spacerWidth,
        galleryDataLength: galleryData.length,
        crowdParallax,
        fgParallax,
        loopWidth,
        bgParallax: 0.5
    });

    // --- VIRTUALIZATION LOGIC ---
    const [visibleCrowdRange, setVisibleCrowdRange] = useState({ start: 0, end: 0 });
    const [visibleFgRange, setVisibleFgRange] = useState({ start: 0, end: 0 });

    const updateVisibleRanges = (scrollVal) => {
        const viewportW = window.innerWidth;
        const buffer = viewportW * 0.5;

        // Crowd
        const crowdContentPos = scrollVal * (1 - crowdParallax);
        const crowdStart = crowdContentPos - buffer;
        const crowdEnd = crowdContentPos + viewportW + buffer;

        let cStart = 0;
        let cEnd = crowdDoodles.length;

        for (let i = 0; i < crowdDoodles.length; i++) {
            if (crowdDoodles[i].left + crowdDoodles[i].baseWidth > crowdStart) {
                cStart = i;
                break;
            }
        }
        for (let i = cStart; i < crowdDoodles.length; i++) {
            if (crowdDoodles[i].left > crowdEnd) {
                cEnd = i;
                break;
            }
        }

        // Foreground
        const fgContentPos = scrollVal * (1 - fgParallax);
        const fgStart = fgContentPos - buffer;
        const fgEnd = fgContentPos + viewportW + buffer;

        let fStart = 0;
        let fEnd = foregroundDoodles.length;

        for (let i = 0; i < foregroundDoodles.length; i++) {
            if (foregroundDoodles[i].left + foregroundDoodles[i].baseWidth > fgStart) {
                fStart = i;
                break;
            }
        }
        for (let i = fStart; i < foregroundDoodles.length; i++) {
            if (foregroundDoodles[i].left > fgEnd) {
                fEnd = i;
                break;
            }
        }

        setVisibleCrowdRange(prev => (prev.start === cStart && prev.end === cEnd) ? prev : { start: cStart, end: cEnd });
        setVisibleFgRange(prev => (prev.start === fStart && prev.end === fEnd) ? prev : { start: fStart, end: fEnd });
    };

    useEffect(() => {
        const unsubscribe = scrollX.on('change', (latest) => {
            updateVisibleRanges(latest);
        });
        updateVisibleRanges(scrollX.get());
        return () => unsubscribe();
    }, [scrollX, crowdDoodles, foregroundDoodles, crowdParallax, fgParallax]);

    const visibleCrowdDoodles = useMemo(() => crowdDoodles.slice(visibleCrowdRange.start, visibleCrowdRange.end), [crowdDoodles, visibleCrowdRange]);
    const visibleForegroundDoodles = useMemo(() => foregroundDoodles.slice(visibleFgRange.start, visibleFgRange.end), [foregroundDoodles, visibleFgRange]);

    // DEBUG: Log active counts
    useEffect(() => {
        console.log(`[Virtualization] Active Nodes - Crowd: ${visibleCrowdDoodles.length}, Foreground: ${visibleForegroundDoodles.length} (Total Generated: ${crowdDoodles.length + foregroundDoodles.length})`);
    }, [visibleCrowdDoodles.length, visibleForegroundDoodles.length, crowdDoodles.length, foregroundDoodles.length]);

    // --- PRELOADING LOGIC ---
    useEffect(() => {
        // PERF: Wait for ALL initial viewport images + buffer
        // The user complained about FPS drops on reveal.
        // We increase limit to 10 to cover the entire first screen + margin.
        const preloadLimit = 10;
        const imagesToLoad = galleryData.slice(0, preloadLimit)
            .filter(item => item.src && !item.src.endsWith('.mp4'));

        let loadedCount = 0;
        const totalToLoad = imagesToLoad.length;

        const reportReady = () => {
            // CRITICAL: Even after images "load", the browser needs a frame to Paint.
            // We force a double-RAF to ensure the pixels are ready behind the black screen.
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    onReady?.(true);
                });
            });
        };

        if (totalToLoad === 0) {
            reportReady();
            return;
        }

        const checkReady = () => {
            loadedCount++;
            if (loadedCount >= totalToLoad) {
                reportReady();
            }
        };

        imagesToLoad.forEach(item => {
            const img = new Image();
            img.src = item.src;
            if (img.complete) {
                checkReady();
            } else {
                img.onload = checkReady;
                img.onerror = checkReady;
            }
        });

        // Safety Fallback: 4s
        const timer = setTimeout(() => {
            onReady?.(true);
        }, 4000);
        return () => clearTimeout(timer);

    }, []);

    // 5. TRANSFORMS
    const bgParallax = 0.5;
    const calculateFixedTransform = (factor) => -1 * (1 - factor);

    const xHorizon = useTransform(scrollX, (val) => val * calculateFixedTransform(bgParallax));
    const xArtworks = useTransform(scrollX, (val) => val * calculateFixedTransform(bgParallax));
    const xCrowd = useTransform(scrollX, (val) => val * calculateFixedTransform(crowdParallax));
    const xFg = useTransform(scrollX, (val) => val * calculateFixedTransform(fgParallax));

    // Manually calculate progress to ensure it is 0 at start
    const maxScrollDist = Math.max(1, spacerWidth - window.innerWidth);

    // For Loop: We want progress to be 1.0 exactly at the Loop Point.
    const loopDist = loopWidth > 0 ? loopWidth / (1 - bgParallax) : maxScrollDist;
    const scrollStart = startOffset > 0 ? startOffset / (1 - bgParallax) : 0;

    const manualProgress = useTransform(scrollX, [scrollStart, scrollStart + loopDist], [0, 1]);

    // 6. TIMELINE LOGIC
    // Calculate discrete markers for years
    const timelineMarkers = useMemo(() => {
        if (!containerRef.current) return [];

        const markers = [];
        const addedYears = new Set();
        const screenPadding = window.innerWidth * 0.2; // Match the padding used in scroll logic

        // 1. YEAR MARKERS (Banners)
        const allBanners = Array.from(document.querySelectorAll('[id^="banner-"]'));
        allBanners.forEach(banner => {
            const year = banner.id.replace('banner-', '');
            if (!addedYears.has(year)) {
                // Determine layout position relative to "Start Marker"
                // The Banner is inside the transformed container.
                // startOffset is the left position of the Start Marker in that same container.
                const relativeLeft = banner.offsetLeft - startOffset;

                // Adjust for screen padding (centering logic) if needed, 
                // but simpler is: how far into the loop is this?
                // Progress = relativeLeft / loopWidth.
                const progress = Math.min(1, Math.max(0, (relativeLeft - screenPadding) / loopWidth));

                markers.push({ type: 'year', label: year, progress, id: year });
                addedYears.add(year);
            }
        });

        // 2. VIDEO MARKERS (Embeds)
        const allVideos = Array.from(document.querySelectorAll('[id^="video-marker-"]'));
        allVideos.forEach(video => {
            // ID format: video-marker-{id}
            const itemId = video.id.replace('video-marker-', '');
            const itemData = galleryData.find(item => item.id === itemId);
            const item = galleryData.find(i => i.id === itemId);
            const label = item?.timelineLabel || 'Play';

            const relativeLeft = video.offsetLeft - startOffset;
            const progress = Math.min(1, Math.max(0, (relativeLeft - screenPadding) / loopWidth));

            markers.push({ type: 'video', label: label, progress, id: video.id });
        });

        // Sort by progress
        return markers.sort((a, b) => a.progress - b.progress);
    }, [galleryData, spacerWidth, loopWidth, startOffset, contentWidth]); // Recalculate if geometry changes


    const handleMarkerSelect = (marker) => {
        // Jump to exact progress WITH IRIS
        setTargetProgress(marker.progress);
        setTransitionState('closing');
    };

    const handleProgressSelect = (progress) => {
        // Jump to arbitrary progress WITH IRIS
        setTargetProgress(progress);
        setTransitionState('closing');
    }

    // 7. RENDER HELPERS
    const renderItems = useMemo(() => {
        const items = [];
        let lastYear = null;

        galleryData.forEach((item, index) => {
            const currentYear = item.date ? item.date.split('-')[0] : null;
            if (currentYear && currentYear !== lastYear) {
                items.push({ type: 'banner', year: currentYear, id: `banner-${currentYear}` });
                lastYear = currentYear;
            }
            items.push({ type: 'artwork', data: item, index });
        });
        return items;
    }, []);

    return (
        <div className="relative w-full h-full no-callout">
            {/* BGM PLAYER */}
            <BackgroundMusic isLightboxOpen={isLightboxOpen} autoPlay={true} />

            {/* 
                VISUAL LAYER (FIXED)
            */}
            <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">

                {/* 1. Horizon (Background) */}
                <motion.div
                    className="absolute top-0 left-0 w-max h-full flex items-end z-0"
                    style={{ x: xHorizon }}
                >
                    <div
                        className="absolute z-0"
                        style={{
                            bottom: `${groundHeight}vh`,
                            left: -5000,
                            width: `${spacerWidth + 10000}px`,
                            height: '1.5px',
                            backgroundColor: '#1c1917'
                        }}
                    />
                </motion.div>

                {/* 2. Artworks (Content) */}
                {showArtworks && (
                    <motion.div
                        className="absolute top-0 left-0 w-max h-full flex pb-[30vh] z-10 box-border pl-[20vw] will-change-transform"
                        style={{ x: xArtworks }}
                    >
                        <div
                            className={`relative z-10 flex items-center h-full transition-opacity duration-300 pointer-events-auto`}
                            ref={containerRef}
                        >
                            {/* --- PRE-BUFFER CLONES (Reverse Loop) --- */}
                            {renderItems.slice(-5).map((item) => {
                                const margin = artworkGap;
                                const cloneKey = `pre-clone-${item.type === 'artwork' ? item.data.id : item.id}`;

                                if (item.type === 'banner') {
                                    return (
                                        <div
                                            key={cloneKey}
                                            className="flex-shrink-0 flex items-center justify-center"
                                            style={{
                                                height: '350px',
                                                marginLeft: `${artworkGap * 0.5}px`,
                                                marginRight: `${margin}px`
                                            }}
                                        >
                                            <div className="h-full flex items-center justify-center select-none bg-white border-[1.5px] border-black" style={{ padding: '0 50px' }}>
                                                <span className="text-[250px] font-sans font-medium text-black tracking-tighter leading-none">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={cloneKey} className="flex-shrink-0">
                                            <ArtFrame
                                                item={item.data}
                                                index={item.index}
                                                style={{ marginRight: `${margin}px` }}
                                                onToggleLightbox={setIsLightboxOpen}
                                            />
                                        </div>
                                    );
                                }
                            })}

                            {/* Marker for Start of Real Content */}
                            <div id="gallery-start-marker" className="flex-shrink-0" style={{ width: '1px', opacity: 0 }} />

                            {/* Door Doodle - Start of Gallery */}
                            <div className="relative h-full flex-shrink-0" style={{ width: '250px', marginRight: `${artworkGap}px` }}>
                                <div
                                    className="absolute left-0 w-full bg-black rounded-t-full"
                                    style={{
                                        height: '350px',
                                        // Container is effectively 70vh high (100vh - 30vh padding).
                                        // Ground is at 20vh from bottom (so 80vh from top).
                                        // We need bottom of door to be at 80vh.
                                        // Relative to 70vh container, 80vh is "-10vh" from bottom.
                                        // Formula: groundHeight - 30vh.
                                        bottom: `calc(${groundHeight}vh - 30vh)`
                                    }}
                                />
                            </div>

                            {renderItems.map((item) => {

                                // Note: item.index is unstable for banners, but render logic handles it.
                                // Actually simplistic margin specific to item type is better.
                                const margin = artworkGap;

                                if (item.type === 'banner') {
                                    return (
                                        <div
                                            key={item.id}
                                            id={item.id} // Ensure ID is present for DOM querying
                                            className="flex-shrink-0 flex items-center justify-center"
                                            style={{
                                                height: '350px',
                                                marginLeft: `${artworkGap * 0.5}px`, // slight offset
                                                marginRight: `${margin}px`
                                            }}
                                        >
                                            <div className="h-full flex items-center justify-center select-none bg-white border-[1.5px] border-black" style={{ padding: '0 50px' }}>
                                                <span className="text-[250px] font-sans font-medium text-black tracking-tighter leading-none">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    // Check if this item has an embed link to mark it on timeline
                                    if (item.data.lightboxEmbed) {
                                        return (
                                            <div
                                                key={item.data.id}
                                                id={`video-marker-${item.data.id}`}
                                                className="flex-shrink-0"
                                            >
                                                <ArtFrame
                                                    item={item.data}
                                                    index={item.index}
                                                    style={{ marginRight: `${margin}px` }}
                                                    onToggleLightbox={setIsLightboxOpen}
                                                />
                                            </div>
                                        );
                                    }

                                    return (
                                        <ArtFrame
                                            key={item.data.id}
                                            item={item.data}
                                            index={item.index}
                                            style={{ marginRight: `${margin}px` }}
                                            onToggleLightbox={setIsLightboxOpen}
                                        />
                                    );
                                }
                            })}

                            {/* --- INFINITE LOOP CLONES --- */}
                            {/* Marker to detect end of unique content */}
                            <div id="gallery-loop-marker" className="flex-shrink-0" style={{ width: '1px', opacity: 0 }} />

                            {/* 1. Clone Door */}
                            <div className="relative h-full flex-shrink-0" style={{ width: '250px', marginRight: `${artworkGap}px` }}>
                                <div
                                    className="absolute left-0 w-full bg-black rounded-t-full"
                                    style={{
                                        height: '350px',
                                        bottom: `calc(${groundHeight}vh - 30vh)`
                                    }}
                                />
                            </div>

                            {/* 2. Clone Items (First few items repeated) */}
                            {renderItems.slice(0, 5).map((item) => {
                                const margin = artworkGap;
                                const cloneKey = `clone-${item.type === 'artwork' ? item.data.id : item.id}`;

                                if (item.type === 'banner') {
                                    return (
                                        <div
                                            key={cloneKey}
                                            className="flex-shrink-0 flex items-center justify-center"
                                            style={{
                                                height: '350px',
                                                marginLeft: `${artworkGap * 0.5}px`,
                                                marginRight: `${margin}px`
                                            }}
                                        >
                                            <div className="h-full flex items-center justify-center select-none bg-white border-[1.5px] border-black" style={{ padding: '0 50px' }}>
                                                <span className="text-[250px] font-sans font-medium text-black tracking-tighter leading-none">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={cloneKey} className="flex-shrink-0">
                                            <ArtFrame
                                                item={item.data}
                                                index={item.index}
                                                style={{ marginRight: `${margin}px` }}
                                                // Disable lightbox for clones to avoid complex state sync, or keep it if easy
                                                onToggleLightbox={setIsLightboxOpen}
                                            />
                                        </div>
                                    );
                                }
                            })}

                        </div>
                    </motion.div>
                )}

                {/* 3. Crowd & Ceiling */}
                {/* 3.1. Ceiling Lamps */}
                {showCrowd && (
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full z-[15] pointer-events-none"
                        style={{ x: xCrowd }}
                    >
                        {ceilingDoodles.map((doodle, i) => (
                            <div
                                key={`lamp-${i}`}
                                className="absolute top-0"
                                style={{
                                    left: `${doodle.left}px`,
                                    width: `${doodle.baseWidth}px`,
                                    transform: `rotate(${doodle.rotation}deg) scaleX(${doodle.scaleX})`,
                                    transformOrigin: 'top center',
                                    contentVisibility: 'auto',
                                    containIntrinsicSize: `${doodle.baseWidth}px 200px`,
                                }}
                            >
                                <doodle.Component
                                    style={{ width: '100%', height: 'auto' }}
                                    className="doodle-svg"
                                />
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* 3.2. Crowd Characters */}
                {showCrowd && (
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-full z-[15] will-change-transform"
                        style={{
                            x: xCrowd,
                            height: '50vh',
                            bottom: `${crowdBottom}%`
                        }}
                    >
                        {visibleCrowdDoodles.map((doodle, i) => {
                            const absoluteIndex = visibleCrowdRange.start + i;
                            return (
                                <div key={`crowd-${absoluteIndex}`} className="absolute bottom-0" style={{ left: `${doodle.left}px`, width: `${doodle.baseWidth * crowdScale}px`, transform: `rotate(${doodle.rotation}deg) scaleX(${doodle.scaleX})`, transformOrigin: 'bottom center', contentVisibility: 'auto', containIntrinsicSize: `${doodle.baseWidth * crowdScale}px 200px` }}>
                                    <doodle.Component style={{ width: '100%', height: 'auto' }} className="doodle-svg" />
                                </div>
                            );
                        })}
                    </motion.div>
                )}

                {/* 3.5. Walking Character (Fixed Center) */}
                <div
                    className="fixed inset-0 z-[18] pointer-events-none flex items-end justify-center"
                    style={{ paddingBottom: `${charBottom}vh` }}
                >
                    <WalkingCharacter
                        className="md:drop-shadow-lg"
                        style={{ width: characterSize, height: characterSize }}
                        stride={stride}
                    />
                </div>

                {/* 4. Foreground */}
                {showForeground && (
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-full z-20 will-change-transform"
                        style={{ x: xFg, height: '60vh' }}
                    >
                        {visibleForegroundDoodles.map((doodle, i) => {
                            const absoluteIndex = visibleFgRange.start + i;
                            return (
                                <div key={`fg-${absoluteIndex}`} className="absolute bottom-0" style={{ left: `${doodle.left}px`, width: `${doodle.baseWidth * fgScale}px`, transform: `rotate(${doodle.rotation}deg) scaleX(${doodle.scaleX})`, transformOrigin: 'bottom center', marginBottom: `${fgBottom}%`, contentVisibility: 'auto', containIntrinsicSize: `${doodle.baseWidth * fgScale}px 400px` }}>
                                    <doodle.Component style={{ width: '100%', height: 'auto' }} className="doodle-svg" />
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </div>

            {/* Invisible Spacer */}
            <div
                className="pointer-events-none opacity-0"
                style={{
                    width: `${spacerWidth}px`,
                    height: '1px'
                }}
            />

            {/* Timeline Navigation - Replaces Progress Bar */}
            <GalleryTimeline
                progress={manualProgress}
                markers={timelineMarkers}
                onMarkerSelect={handleMarkerSelect}
                onProgressSelect={handleProgressSelect}
            />

            {/* IRIS TRANSITION OVERLAY */}
            <AnimatePresence>
                {transitionState !== 'idle' && (
                    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
                        <motion.svg
                            viewBox="0 0 100 100"
                            className="w-full h-full"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                <mask id="iris-mask">
                                    <rect x="0" y="0" width="100" height="100" fill="white" />
                                    <motion.circle
                                        cx="50"
                                        cy="50"
                                        fill="black"
                                        initial={transitionState === 'closing' ? { r: irisRadius } : { r: 0 }}
                                        animate={transitionState === 'closing' ? { r: 0 } : { r: irisRadius }}
                                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                        onAnimationComplete={() => {
                                            if (transitionState === 'closing') {
                                                performScrollJump();
                                            } else {
                                                setTransitionState('idle');
                                            }
                                        }}
                                    />
                                </mask>
                            </defs>
                            <rect
                                x="0" y="0" width="100" height="100"
                                fill="black" mask="url(#iris-mask)"
                            />
                        </motion.svg>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryTrack;
