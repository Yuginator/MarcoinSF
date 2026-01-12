import { useRef, useMemo, useState } from 'react';
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

const GalleryTrack = () => {
    const containerRef = useRef(null);
    const { scrollX } = useScroll();
    const lenis = useLenis();

    // 0. GLOBAL STATE
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
        autoScrollSpeed,
        acceleration,
        stride,
        enableAutoScroll
    } = useControls({
        Layout: folder({
            artworkGap: { value: 250, min: 0, max: 500, label: 'Artwork Gap (px)' },
            crowdBottom: { value: 28, min: 0, max: 50, label: 'Crowd Bottom %' },
            fgBottom: { value: -15, min: -30, max: 10, label: 'FG Bottom %' }
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
            crowdScale: { value: 0.3, min: 0.1, max: 2, label: 'Crowd Scale' },
            fgScale: { value: 0.7, min: 0.1, max: 2, label: 'FG Scale' }
        }),
        AutoScroll: folder({
            autoScrollSpeed: { value: 2.5, min: 0, max: 10, label: 'Target Speed' },
            acceleration: { value: 0.01, min: 0.001, max: 0.1, step: 0.001, label: 'Accel Factor' },
            stride: { value: 50, min: 10, max: 200, label: 'Char Stride' },
            enableAutoScroll: { value: true, label: 'Enable Auto-Scroll' }
        })
    });

    // 2. MEASUREMENT
    const { contentWidth, irisRadius } = useGalleryMeasurement(containerRef);

    // 3. SCROLL LOGIC
    const {
        spacerWidth,
        transitionState,
        setTransitionState,
        performScrollJump,
        setTargetProgress
    } = useGalleryScroll({
        contentWidth,
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
        fgParallax
    });

    // 5. TRANSFORMS
    const bgParallax = 0.5;
    const calculateFixedTransform = (factor) => -1 * (1 - factor);

    const xHorizon = useTransform(scrollX, (val) => val * calculateFixedTransform(bgParallax));
    const xArtworks = useTransform(scrollX, (val) => val * calculateFixedTransform(bgParallax));
    const xCrowd = useTransform(scrollX, (val) => val * calculateFixedTransform(crowdParallax));
    const xFg = useTransform(scrollX, (val) => val * calculateFixedTransform(fgParallax));

    // Manually calculate progress to ensure it is 0 at start
    const maxScrollDist = Math.max(1, spacerWidth - window.innerWidth);
    const manualProgress = useTransform(scrollX, [0, maxScrollDist], [0, 1], { clamp: true });

    // 6. TIMELINE LOGIC
    // Calculate discrete markers for years
    const timelineMarkers = useMemo(() => {
        if (!containerRef.current) return [];

        const markers = [];
        const addedYears = new Set();
        const screenPadding = window.innerWidth * 0.2; // Match the padding used in scroll logic

        // We need to access the DOM elements to measure them?
        // Since this runs during render/effect, we might not have accurate DOM positions yet if loading.
        // However, we can approximate or use a layout effect.
        // For simplicity's sake in this pass, we will iterate the DOM if available, 
        // or effectively we have to rely on `renderItems` index. But DOM is best.
        // 1. YEAR MARKERS (Banners)
        const allBanners = Array.from(document.querySelectorAll('[id^="banner-"]'));
        allBanners.forEach(banner => {
            const year = banner.id.replace('banner-', '');
            if (!addedYears.has(year)) {
                const elementLeft = banner.offsetLeft;
                const targetScroll = Math.max(0, (elementLeft - screenPadding) * 2);
                const progress = Math.min(1, Math.max(0, targetScroll / maxScrollDist));

                markers.push({ type: 'year', label: year, progress, id: year });
                addedYears.add(year);
            }
        });

        // 2. VIDEO MARKERS (Embeds)
        const allVideos = Array.from(document.querySelectorAll('[id^="video-marker-"]'));
        allVideos.forEach(video => {
            // ID format: video-marker-{id}
            const itemId = video.id.replace('video-marker-', '');
            // Find the item data to get the custom label
            const itemData = galleryData.find(item => item.id === itemId);
            const label = itemData?.timelineLabel || 'Play';

            const elementLeft = video.offsetLeft;
            const targetScroll = Math.max(0, (elementLeft - screenPadding) * 2);
            const progress = Math.min(1, Math.max(0, targetScroll / maxScrollDist));

            markers.push({ type: 'video', label: label, progress, id: video.id });
        });

        // Sort by progress
        return markers.sort((a, b) => a.progress - b.progress);
    }, [galleryData, spacerWidth, maxScrollDist, contentWidth]); // Recalculate if geometry changes


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
        <div className="relative w-full h-full">
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
                            bottom: '30vh',
                            left: -5000,
                            width: `${spacerWidth + 10000}px`,
                            height: '2px',
                            backgroundColor: '#1c1917'
                        }}
                    />
                </motion.div>

                {/* 2. Artworks (Content) */}
                {showArtworks && (
                    <motion.div
                        className="absolute top-0 left-0 w-max h-full flex pb-[30vh] z-10 box-border pl-[20vw]"
                        style={{ x: xArtworks }}
                    >
                        <div
                            className={`relative z-10 flex items-center h-full transition-opacity duration-300 pointer-events-auto`}
                            ref={containerRef}
                        >
                            {/* Door Doodle - Start of Gallery */}
                            <div
                                className="flex-shrink-0 bg-black rounded-t-full self-end"
                                style={{
                                    width: '250px',
                                    height: '350px',
                                    marginRight: `${artworkGap}px`
                                }}
                            />

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
                                            <div className="h-full flex items-center justify-center select-none bg-white border-2 border-black" style={{ padding: '0 50px' }}>
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
                        className="absolute bottom-0 left-0 w-full h-full z-[15]"
                        style={{
                            x: xCrowd,
                            height: '50vh',
                            bottom: `${crowdBottom}%`
                        }}
                    >
                        {crowdDoodles.map((doodle, i) => (
                            <div
                                key={`crowd-${i}`}
                                className="absolute bottom-0"
                                style={{
                                    left: `${doodle.left}px`,
                                    width: `${doodle.baseWidth * crowdScale}px`,
                                    transform: `rotate(${doodle.rotation}deg) scaleX(${doodle.scaleX})`,
                                    transformOrigin: 'bottom center',
                                    contentVisibility: 'auto',
                                    containIntrinsicSize: `${doodle.baseWidth * crowdScale}px 200px`,
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

                {/* 3.5. Walking Character (Fixed Center) */}
                <div className="fixed inset-0 z-[18] pointer-events-none flex items-end justify-center pb-[10vh]">
                    <WalkingCharacter
                        className="w-[320px] h-[320px] drop-shadow-lg"
                        stride={stride}
                    />
                </div>

                {/* 4. Foreground */}
                {showForeground && (
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-full z-20"
                        style={{ x: xFg, height: '60vh' }}
                    >
                        {foregroundDoodles.map((doodle, i) => (
                            <div
                                key={`fg-${i}`}
                                className="absolute bottom-0"
                                style={{
                                    left: `${doodle.left}px`,
                                    width: `${doodle.baseWidth * fgScale}px`,
                                    transform: `rotate(${doodle.rotation}deg) scaleX(${doodle.scaleX})`,
                                    transformOrigin: 'bottom center',
                                    marginBottom: `${fgBottom}%`,
                                    contentVisibility: 'auto',
                                    containIntrinsicSize: `${doodle.baseWidth * fgScale}px 400px`,
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

