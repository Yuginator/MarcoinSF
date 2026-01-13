import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import clsx from 'clsx';
// Import Title SVG and Video
import TitleSvg from '../assets/cover/Title.svg?react';
import coverVideo from '../assets/cover/cover.mp4';
import BlackDoor from '../assets/cover/blackdoor.svg?react';
import SmokingCharacter from './SmokingCharacter';

// Reusable Content Component to ensure perfect alignment between layers
const LandingContent = ({ isBackground = false, onEnter, isZooming = false, onDoorHover, isDoorHovered }) => {
    const doorRef = useRef(null);

    const handleClick = () => {
        if (doorRef.current) {
            onEnter(doorRef.current.getBoundingClientRect());
        }
    };

    return (
        <div className={clsx(
            "flex flex-col items-center gap-8 md:gap-16 max-w-4xl px-8 text-center transition-colors duration-0",
            isBackground ? "text-white" : "text-stone-900"
        )}>
            {/* Main Title Group */}
            <div className={clsx(
                "flex flex-col items-center",
                isBackground && "opacity-0"
            )}>
                <div className={clsx(
                    "relative w-full max-w-[90vw] md:max-w-[720px] transition-colors duration-0",
                    isBackground ? "text-white" : "text-stone-900"
                )}>
                    {/* Video in the "口" hole */}
                    <div
                        className="absolute z-0 overflow-hidden"
                        style={{
                            left: '23.6%',
                            top: '55.0%',
                            width: '12.0%',
                            height: '29.3%',
                        }}
                    >
                        <video
                            src={coverVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* SVG Title on top */}
                    <TitleSvg className="relative z-10 w-full h-auto" />
                </div>
            </div>

            {/* Enter Button / Door Group */}
            <div className="relative cursor-pointer group mt-4 md:mt-8" onClick={handleClick}>

                {/* Door + Character Container */}
                <div className="relative">
                    {/* Door */}
                    <motion.div
                        ref={doorRef}
                        style={{ transformOrigin: '50% 100%' }}
                        animate={{ scale: isDoorHovered ? 1.25 : 1 }}
                        onHoverStart={() => {
                            onDoorHover?.(true);
                        }}
                        onHoverEnd={() => {
                            onDoorHover?.(false);
                        }}
                        className="relative z-10 origin-bottom"
                    >
                        <div className={clsx(
                            "w-[120px] md:w-40 h-auto transition-colors duration-300 relative",
                            isBackground ? "text-white" : "text-stone-900"
                        )}>
                            <BlackDoor className="w-full h-full fill-current" />

                            {/* Pulsing Entry Text */}
                            <AnimatePresence>
                                {!isZooming && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={isDoorHovered ? { opacity: 1 } : { opacity: [0, 1, 0] }}
                                        exit={{ opacity: 0 }}
                                        transition={isDoorHovered ? { duration: 0.2 } : {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            repeatDelay: 1
                                        }}
                                        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                                    >
                                        <div className="text-[10px] md:text-[32px] font-ipix tracking-widest text-[#fdfaf6] mb-0.5">进入</div>
                                        <div className="text-[8px] md:text-[12px] font-ipix tracking-widest text-[#fdfaf6] uppercase">Enter</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Smoking Man (Right side - Absolute) */}
                    <div className={clsx(
                        "absolute left-[85%] bottom-0 ml-[-12px] w-24 md:w-[260px] h-auto mb-1 pointer-events-none z-50",
                        isBackground ? "text-white" : "text-stone-900"
                    )}>
                        <SmokingCharacter
                            className="w-full h-full text-current"
                            style={isBackground ? { filter: 'invert(1)' } : undefined}
                        />
                    </div>
                </div>

            </div>

            {/* Bottom Text Group */}
            <div className={clsx(
                "flex flex-col items-center justify-center gap-1 md:gap-4 mt-4 font-ipix uppercase tracking-widest z-10 relative",
                isBackground && "opacity-0"
            )}>
                <span className="text-sm md:text-xl font-medium">Marco's Secret Life In SF</span>
                <span className="text-3xl md:text-5xl font-light tracking-wider">2021—2025.12</span>
            </div>
        </div>
    );
};

// New Data Structure for Lines
const TAG_LINES = [
    ["SF Best Egg-Fried-Rice Chef", "🎾 网球5.0教练", "猴子们的好朋友"],
    ["AWARD-WINNING TRANS ACTOR", "江門古天樂"],
    ["PICKLEBALL AMBASSADOR", "冰皮月饼师傅"],
    ["小动物检查身体专家", "連續戒烟成功者"],
    ["399HonoraryResident", "吉尼斯連續吃西瓜記錄保持者"],
    ["求佛演唱家", "華埠老廣地陪"],
    ["NA TOP50 LILIA"],
    ["ARKVELD 100+", "A-DESIGN AWARD"]
];

const LandingPage = ({ onEnter }) => {
    const containerRef = useRef(null);

    // Motion values for mouse position - Start at center
    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    // Mask radius motion value - Start at 250 (Open state)
    const maskRadius = useMotionValue(250);
    const smoothRadius = useSpring(maskRadius, { damping: 20, stiffness: 150 });

    // Smooth springs for the mask position
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    useEffect(() => {
        // Ensure we start at true center
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(rect.width / 2);
            mouseY.set(rect.height / 2);
        }
    }, [mouseX, mouseY]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
    };

    const [isZooming, setIsZooming] = useState(false);
    const [doorRect, setDoorRect] = useState(null);
    const [isGlobalDoorHovered, setIsGlobalDoorHovered] = useState(false);

    const handleEnter = (rect) => {
        if (rect) {
            setDoorRect(rect);
        }
        setIsZooming(true);
        setTimeout(() => {
            onEnter();
        }, 1200); // Wait for zoom
    };

    const handleDoorHover = (isHovering) => {
        maskRadius.set(isHovering ? 50 : 250);
        setIsGlobalDoorHovered(isHovering);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden bg-black"
        >
            {/* SVG Mask Definition */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <mask id="rain-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        {/* Cursor Cutout */}
                        <motion.circle
                            cx={smoothX}
                            cy={smoothY}
                            r={smoothRadius}
                            fill="black"
                        />
                    </mask>
                </defs>
            </svg>

            {/* Background Layer (Revealed by Hole - Interactable) */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-black text-white select-none overflow-hidden p-2 md:p-8">

                {/* Background Text Lines (Circular Clock Style) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-75 z-0 pointer-events-none font-ipix w-full h-full">
                    {TAG_LINES.flat().map((text, i, arr) => {
                        const count = arr.length;
                        // Start from -90deg (12 o'clock)
                        const angle = (i / count) * 2 * Math.PI - (Math.PI / 2);
                        // Radius based on viewport width/height (responsive)
                        // defined in CSS or inline style? 
                        // Using a fixed radius percentage logic for now. 
                        // We can use style vars or just calc.

                        // Assign random colors based on index for deterministic look
                        const colors = [
                            'bg-[#ff9cee] text-black', // Pink
                            'bg-[#4ade80] text-black', // Green
                            'bg-[#d6d3d1] text-black', // Grey
                            'bg-white text-black'      // White
                        ];
                        const colorClass = colors[i % colors.length];

                        // Random rotation for "collage" feel? Reference has mostly straight text.
                        // Let's keep it straight for now or slight jitter.

                        return (
                            <div
                                key={i}
                                className={clsx(
                                    "absolute whitespace-nowrap px-2 py-1 text-sm md:text-xl uppercase tracking-widest",
                                    colorClass
                                )}
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) translate(${Math.cos(angle) * 35}vmin, ${Math.sin(angle) * 35}vmin)`
                                }}
                            >
                                {text}
                            </div>
                        );
                    })}
                </div>


                {/* Inverted Content (Visible in Hole) - Now Interactable */}
                <div className="relative z-10">
                    <LandingContent isBackground={true} onEnter={handleEnter} isZooming={isZooming} onDoorHover={handleDoorHover} isDoorHovered={isGlobalDoorHovered} />
                </div>
            </div>

            {/* Foreground Layer (Hides BG) */}
            <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white pointer-events-none p-2 md:p-8"
                style={{
                    mask: 'url(#rain-mask)',
                    WebkitMask: 'url(#rain-mask)'
                }}
            >
                <div className="relative z-10">
                    <LandingContent isBackground={false} onEnter={handleEnter} isZooming={isZooming} isDoorHovered={isGlobalDoorHovered} />
                </div>
            </motion.div>

            {/* Transition Door Overlay */}
            <AnimatePresence>
                {isZooming && (
                    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
                        <motion.div
                            initial={{
                                position: 'absolute',
                                top: doorRect?.top ?? '50%',
                                left: doorRect?.left ?? '50%',
                                width: doorRect?.width ?? 64,
                                height: doorRect?.height ?? 100,
                                margin: 0
                            }}
                            animate={{ scale: 150 }}
                            transition={{ duration: 1.5, ease: [0.7, 0, 0.84, 0] }}
                            className="text-black origin-center"
                        >
                            <BlackDoor className="w-full h-full fill-current" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default LandingPage;
