import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import coverImg from '../assets/cover/cover.jpeg';
import frameSrc from '../assets/frameBorders/frame.svg?url';

const Preloader = ({ onComplete }) => {
    // We only need to wait for:
    // 1. IPIX Font
    // 2. Cover Image
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;

        const loadAssets = async () => {
            // 1. Wait for Fonts
            try {
                await document.fonts.load('1em IPix');
            } catch (e) {
                console.warn('Font load failed', e);
            }
            if (!isMounted) return;
            setProgress(50);

            // 2. Preload Cover Image
            const imgReq = new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = coverImg;
            });

            // 3. Preload Frame SVG (for Gallery) - Optional but helpful
            const frameReq = new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = frameSrc;
            });

            await Promise.all([imgReq, frameReq]);

            if (!isMounted) return;
            setProgress(100);

            // Short delay for visual smoothness
            setTimeout(() => {
                if (isMounted) onComplete();
            }, 500);
        };

        loadAssets();

        return () => { isMounted = false; };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-[#fdfaf6]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="font-ipix text-2xl md:text-4xl tracking-widest animate-pulse">
                LOADING...
            </div>
            {/* Optional Progress Bar */}
            <div className="mt-4 w-48 h-1 bg-[#333] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#fdfaf6]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
