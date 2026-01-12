import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import clsx from 'clsx';
// Import Title SVG and Video
import TitleSvg from '../assets/cover/Title.svg?react';
import coverVideo from '../assets/cover/cover.mp4';
import BlackDoor from '../assets/cover/blackdoor.svg?react';

// Reusable Content Component to ensure perfect alignment between layers
const LandingContent = ({ isBackground = false, onEnter, isZooming = false, onDoorHover }) => {
    const [isDoorHovered, setIsDoorHovered] = useState(false);

    return (
        <div className={clsx(
            "flex flex-col items-center gap-12 max-w-4xl px-8 text-center transition-colors duration-0",
            isBackground ? "text-white" : "text-stone-900"
        )}>
            {/* Main Title Group */}
            <div className={clsx(
                "space-y-8 flex flex-col items-center",
                isBackground && "opacity-0"
            )}>
                <div className={clsx(
                    "relative w-full max-w-[90vw] md:max-w-[660px] transition-colors duration-0",
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

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 font-mono text-xs md:text-sm uppercase tracking-widest">
                    <span>Marco's Secret Life In SF</span>
                    <span className="hidden md:inline">•</span>
                    <span>2021—2025.12</span>
                </div>
            </div>

            {/* Enter Button / Door */}
            <div className="relative cursor-pointer group" onClick={onEnter}>
                {/* Use motion for scaling the door on click */}
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => {
                        onDoorHover?.(true);
                        setIsDoorHovered(true);
                    }}
                    onHoverEnd={() => {
                        onDoorHover?.(false);
                        setIsDoorHovered(false);
                    }}
                    layoutId="door-transition"
                >
                    <div className={clsx(
                        "w-12 md:w-16 h-auto transition-colors duration-300 relative",
                        isBackground ? "text-white" : "text-stone-900"
                    )}>
                        {/* Scale the SVG itself? Or wrapper. SVG path is black/currentcolor? */}
                        {/* The original SVG is fill="black" stroke="black". Check if we need to style it. */}
                        {/* We need it to be white in BG mod? */}
                        {/* Actually, if it's blackdoor, maybe it should always be black? */}
                        {/* But visually, if BG is black, a black door is invisible.
                             However, user said "BlackDoor" specifically.
                             In the reference img 1, it seems to be below the text.
                             If the user wants "enter door", maybe it stays black.
                             BUT in the hole (BG layer), the BG is black.
                             So we might need it white there? Or maybe just rely on Foreground.
                             Let's assume standard invert behavior: White in BG layer. */}
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
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none whitespace-nowrap"
                                >
                                    <span className={clsx("text-[12px] md:text-[18px] font-hyxyuan text-white leading-none mb-[2px]")}>
                                        进入
                                    </span>
                                    <span className={clsx("text-[8px] md:text-[10px] font-ipix text-white leading-none")}>
                                        ENTER
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements only visible on Foreground usually, but we want full invert?
            Let's keep corners on both to match. */}
            <div className="absolute top-8 left-8 font-mono text-xs opacity-40 text-left">
                LAT: 37.7749° N <br />
                LON: 122.4194° W
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-xs opacity-40 text-right">
                SYSTEM: ONLINE <br />
                V.2.0.24
            </div>
        </div>
    );
};

// Data for the background tags
const TAGS = [
    { text: "SFBestEggFriedRice", style: "font-ipix text-lg md:text-3xl" },
    { text: "🎾 网球5.0教练", style: "font-hyxyuan" },
    { text: "猴歡喜", style: "font-hyyisong" },
    { text: "AWARD-WINNING\nTRANS ACTOR", style: "font-foglihtenno text-xl md:text-3xl leading-tight" },
    { text: "江門古天樂", style: "font-hyxyuan" },
    { text: "PICKLEBALL\nAMBASSADOR", style: "font-foglihtenno text-xl md:text-3xl leading-tight" },
    { text: "冰皮月饼师傅", style: "font-hyyisong" },
    { text: "小动物检查身体专家", style: "font-ipix text-lg md:text-3xl" },
    { text: "連續戒烟成功者", style: "font-hyxyuan" },
    { text: "399HonoraryResident", style: "font-foglihtenno" },
    { text: "吉尼斯連續吃西瓜記錄保持者", style: "font-ipix text-lg md:text-3xl" },
    { text: "求佛演唱家", style: "font-hyyisong" },
    { text: "華埠老廣地陪", style: "font-hyxyuan" },
    { text: "NA TOP50 LILIA", style: "font-ipix text-2xl md:text-5xl font-bold" },
    { text: "來根小烟", style: "font-hyyisong" },
    { text: "ARKVELD 100+", style: "font-foglihtenno" },
    { text: "不用驾照的司机", style: "font-ipix text-lg md:text-3xl" },
    { text: "A-DESIGN AWARD", style: "font-foglihtenno" }
];

const LandingPage = ({ onEnter }) => {
    const containerRef = useRef(null);


    // Bouncing Ball State
    // We use motion values for performance (no React rerenders for position updates)
    const ballX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const ballY = useMotionValue(-100);

    useEffect(() => {
        let animationFrameId;

        // Physics state (local mutable variables are fine for this loop)
        let x = window.innerWidth / 2;
        let y = -100;
        let vx = (Math.random() - 0.5) * 15; // Random horizontal start speed
        let vy = 0;
        const radius = 60; // Ball radius matching visual size
        const gravity = 0.5;
        const friction = 0.999; // Very low air resistance
        const bounceDamping = 0.8; // Loss of energy on wall hit

        const updateBall = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Physics
            vy += gravity;
            vx *= friction;

            x += vx;
            y += vy;

            // Wall Collisions
            if (x + radius > width) {
                x = width - radius;
                vx *= -bounceDamping;
            } else if (x - radius < 0) {
                x = radius;
                vx *= -bounceDamping;
            }

            // Floor Collision
            if (y + radius > height) {
                y = height - radius;
                vy *= -bounceDamping;

                // Prevent micro-bouncing when near stop
                if (Math.abs(vy) < 1 && y > height - radius - 5) vy = 0;
            }

            // Update Motion Values
            ballX.set(x);
            ballY.set(y);

            animationFrameId = requestAnimationFrame(updateBall);
        };

        animationFrameId = requestAnimationFrame(updateBall);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Motion values for mouse position - Start at center
    // We use a safe default, will correct in useEffect if needed, but 50vw/50vh is good approx
    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    // Mask radius motion value - Start at 250 (Open state)
    const maskRadius = useMotionValue(250);
    const smoothRadius = useSpring(maskRadius, { damping: 20, stiffness: 150 });

    // Smooth springs for the mask position
    // We want the ball to drop to the center, so we lock these to center initially
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

    const handleEnter = (e) => {
        if (e?.currentTarget) {
            setDoorRect(e.currentTarget.getBoundingClientRect());
        }
        setIsZooming(true);
        setTimeout(() => {
            onEnter();
        }, 1200); // Wait for zoom
    };

    const handleDoorHover = (isHovering) => {
        maskRadius.set(isHovering ? 100 : 250);
    };



    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden bg-black"
        >
            {/* SVG Mask Definition */}
            {/* The SVG must occupy full screen to provide correct coordinate context for the mask. */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                    <mask id="rain-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        {/* Bouncing Ball Cutout */}
                        <motion.circle
                            cx={ballX}
                            cy={ballY}
                            r={60}
                            fill="black"
                        />
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
                {/* Tag Cloud Container */}
                <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 md:gap-4 w-full h-full content-center opacity-100 z-0 pointer-events-none">
                    {[...TAGS, ...TAGS, ...TAGS, ...TAGS].map((tag, i) => (
                        <div
                            key={i}
                            className={clsx(
                                "flex items-center justify-center px-6 border border-white rounded-full text-center cursor-default",
                                "h-12 md:h-24", // Enforce consistent height
                                tag.style ? tag.style : "text-3xl md:text-5xl font-light"
                            )}
                        >
                            <span className="whitespace-pre-wrap">{tag.text}</span>
                        </div>
                    ))}
                </div>

                {/* Inverted Content (Visible in Hole) - Now Interactable */}
                <div className="relative z-10">
                    <LandingContent isBackground={true} onEnter={handleEnter} isZooming={isZooming} onDoorHover={handleDoorHover} />
                </div>
            </div>




            {/* Foreground Layer (Hides BG) - Pointer events disabled so we interact with BG through the hole */}
            <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#fdfaf6] pointer-events-none"
                style={{
                    mask: 'url(#rain-mask)',
                    WebkitMask: 'url(#rain-mask)'
                }}
            >
                <div className="relative z-10">
                    <LandingContent isBackground={false} onEnter={handleEnter} isZooming={isZooming} />
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
