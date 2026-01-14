import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useMedia } from 'react-use';
import clsx from 'clsx';
// Import Title SVG and Video
import TitleSvg from '../assets/cover/Title.svg?react';
import coverImg from '../assets/cover/cover.jpeg';
import BlackDoor from '../assets/cover/blackdoor.svg?react';
import SmokingCharacter from './SmokingCharacter';

// Reusable Content Component to ensure perfect alignment between layers
const LandingContent = ({ isBackground = false, onEnter, isZooming = false, onDoorHover, isDoorHovered }) => {
    const doorRef = useRef(null);

    const handleClick = (e) => {
        e.stopPropagation();
        if (doorRef.current) {
            onEnter(doorRef.current.getBoundingClientRect());
        }
    };

    return (
        <div className={clsx(
            "flex flex-col items-center gap-8 md:gap-16 max-w-4xl px-8 text-center transition-colors duration-0 pointer-events-none", // Allow clicks to pass through
            isBackground ? "text-white" : "text-stone-900"
        )}>
            {/* Main Title Group - Explicitly non-interactive */}
            <div className={clsx(
                "flex flex-col items-center pointer-events-none",
                isBackground && "opacity-0"
            )}>
                <div className={clsx(
                    "relative w-full max-w-[90vw] md:max-w-[720px] transition-colors duration-0",
                    isBackground ? "text-white" : "text-stone-900"
                )}>
                    {/* Image in the "口" hole */}
                    <div
                        className="absolute z-0 overflow-hidden"
                        style={{
                            left: '24.0%',
                            top: '55.5%',
                            width: '13.0%',
                            height: '29.5%',
                        }}
                    >
                        <img
                            src={coverImg}
                            alt="Cover"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* SVG Title on top */}
                    <TitleSvg className="relative z-10 w-full h-auto" />
                </div>
            </div>

            {/* Enter Button / Door Group - Re-enable pointer events ONLY for the button area */}
            <div
                className="relative cursor-pointer group mt-4 md:mt-8 pointer-events-auto w-fit" // w-fit ensures we don't block side badges
                onClick={handleClick}
                data-clickable="true" // Marker for tap detection
            >

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
                            "w-[100px] md:w-[130px] h-auto transition-colors duration-300 relative",
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
                                        <div className={clsx(
                                            "text-[12px] md:text-[26px] font-ipix tracking-widest mb-0.5",
                                            isBackground ? "text-stone-900" : "text-[#fdfaf6]"
                                        )}>进入</div>
                                        <div className={clsx(
                                            "text-[10px] md:text-[10px] font-ipix tracking-widest uppercase",
                                            isBackground ? "text-stone-900" : "text-[#fdfaf6]"
                                        )}>Enter</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Smoking Man (Right side - Absolute) */}
                    <div className={clsx(
                        "absolute left-[85%] bottom-0 ml-[-12px] w-24 md:w-[260px] h-auto mb-0 md:mb-1 pointer-events-none z-50",
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

    // Mobile Detection (still useful for default state)
    const isMobile = useMedia('(max-width: 768px)', false);
    const [isRevealed, setIsRevealed] = useState(false);

    // Initialization of Door State (HOISTED to fix ReferenceError)
    const [isZooming, setIsZooming] = useState(false);
    const [doorRect, setDoorRect] = useState(null);
    const [isGlobalDoorHovered, setIsGlobalDoorHovered] = useState(false);

    // Cursor Entry State
    const [isCursorActive, setIsCursorActive] = useState(false);

    // TAP handler for container toggle (Universal & Reliable on Mobile)
    const handleTap = (event, info) => {
        setIsCursorActive(true); // Activate cursor on interaction

        if (!containerRef.current) return;

        // Check if we clicked on the Door (using closest data-clickable)
        // event.target is the DOM element
        if (event.target.closest('[data-clickable="true"]')) {
            return;
        }

        // Always update launch point to current tap location
        // This ensures "Exit Reveal" collapses towards the new tap, not the old one
        const rect = containerRef.current.getBoundingClientRect();
        // info.point is page-relative
        const x = info.point.x - rect.left;
        const y = info.point.y - rect.top;
        mouseX.set(x);
        mouseY.set(y);

        setIsRevealed(prev => !prev);
    };

    // Mask radius motion value - Start at 0 (Hidden until interaction)
    const maskRadius = useMotionValue(0);

    // FASTER transition (Stiffness 120) with appropriate damping (30) for Ease Out
    // Formula for critical damping: 2 * sqrt(mass * stiffness). Mass=1.
    // 2 * sqrt(120) = ~21.9. Damping 30 is still overdamped (no bounce), but faster.
    const smoothRadius = useSpring(maskRadius, { damping: 30, stiffness: 120 });

    // CSS MASK (More reliable on Mobile than SVG)
    // radial-gradient(circle at X Y, transparent R, black R+1)
    // We use a small blur (smoothRadius + 1px) to avoid pixelated edges
    // transparent = hole (shows BG), black = opaque (shows FG)
    const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, transparent ${smoothRadius}px, black ${smoothRadius}px)`;

    // Handle Mask Logic (Universal, Reactive)
    useEffect(() => {
        if (isRevealed) {
            // Expand to Reveal All (3000px covers most screens)
            maskRadius.set(3000);
        } else {
            // Not revealed
            if (isGlobalDoorHovered) {
                // Hovering door (Desktop)
                maskRadius.set(50);
            } else {
                // Default State
                // Mobile: 0 (Hidden)
                // Desktop: 0 (Hidden if inactive) -> 200 (Active)
                maskRadius.set(isMobile ? 0 : (isCursorActive ? 200 : 0));
            }
        }
    }, [isRevealed, isMobile, isGlobalDoorHovered, maskRadius, isCursorActive]);

    // Smooth springs for the mask position
    // Note: We use mouseX/mouseY directly in the maskImage template above,
    // but we still want smooth movement.
    // Wait, the template uses smoothRadius. What about X/Y?
    // We should use smoothX and smoothY in the template for smooth movement.
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    // RE-DEFINE maskImage to use SMOOTH coordinates
    const smoothMaskImage = useMotionTemplate`radial-gradient(circle at ${smoothX}px ${smoothY}px, transparent ${smoothRadius}px, black ${smoothRadius}px)`;

    useEffect(() => {
        // Ensure we start at true center
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Force center on mobile so the "reveal" expands from center
            if (isMobile) {
                mouseX.set(rect.width / 2);
                mouseY.set(rect.height / 2);
            } else {
                if (mouseX.get() === 0) {
                    // Initial Desktop Position: Start at "Door" (Bottom Center)
                    mouseX.set(rect.width / 2);
                    mouseY.set(rect.height * 0.85);
                }
            }
        }
    }, [mouseX, mouseY, isMobile]);

    // Track raw mouse position for seamless transitions
    const mouseRef = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        // Activate on first move
        if (!isCursorActive) setIsCursorActive(true);

        if (!containerRef.current || isMobile) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Always track generic position
        mouseRef.current = { x, y };

        // Only update motion values if NOT revealed (mouse follow mode)
        if (!isRevealed) {
            mouseX.set(x);
            mouseY.set(y);
        }
    };

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
        // Update hover state
        setIsGlobalDoorHovered(isHovering);

        // If hovering door while revealed, revert to normal state immediately
        // and snap cursor position to current mouse to prevent "stuck" effect
        if (isRevealed && isHovering) {
            setIsRevealed(false);
            mouseX.set(mouseRef.current.x);
            mouseY.set(mouseRef.current.y);
        }
    };

    return (
        <motion.div
            ref={containerRef}
            onTap={handleTap}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden bg-black cursor-pointer"
            style={{ touchAction: 'none' }} // Prevents browser zoom/scroll handling delays
        >

            {/* Background Layer (Revealed by Hole - Interactable) */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-black text-white select-none overflow-hidden p-2 md:p-8">

                {/* Background Text Lines (Circular Clock Style) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-ipix w-full h-full">
                    {TAG_LINES.flat().map((text, i, arr) => {
                        const count = arr.length;
                        // Start from -90deg (12 o'clock)
                        const angle = (i / count) * 2 * Math.PI - (Math.PI / 2);

                        return (
                            <div
                                key={i}
                                // Added: opacity-75 (default), z-0 (default), hover:z-50, hover:opacity-100
                                className="absolute pointer-events-auto group hover:z-50 opacity-75 hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) translate(${Math.cos(angle) * 35}vmin, ${Math.sin(angle) * 35}vmin)`
                                }}
                            >
                                <div className={clsx(
                                    "whitespace-nowrap px-2 py-1 text-sm md:text-xl uppercase tracking-widest",
                                    "bg-white text-black", // Uniform styling
                                    "transition-transform duration-300 origin-center group-hover:scale-[1.4]" // Hover Effect (Robust)
                                )}>
                                    {text}
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* Inverted Content (Visible in Hole) - Now Interactable */}
                <div className="relative z-10 pointer-events-none">
                    <LandingContent isBackground={true} onEnter={handleEnter} isZooming={isZooming} onDoorHover={handleDoorHover} isDoorHovered={isGlobalDoorHovered} />
                </div>
            </div>

            {/* Foreground Layer (Hides BG) */}
            <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white pointer-events-none p-2 md:p-8"
                style={{
                    maskImage: smoothMaskImage,
                    WebkitMaskImage: smoothMaskImage
                }}
            >
                <div className="relative z-10 pointer-events-none">
                    {/* Note: Foreground LandingContent also needs pointer-events-none on wrapper to be safe, though mask usually handles it */}
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
        </motion.div >
    );
};

export default LandingPage;
