import { useState, useEffect } from 'react';

const FpsMonitor = ({ isActive = false }) => {
    const [fps, setFps] = useState(0);
    const [elapsed, setElapsed] = useState(0);

    // FPS Loop
    useEffect(() => {
        let frameCount = 0;
        let lastTime = performance.now();
        let rafId;

        const loop = () => {
            const now = performance.now();
            frameCount++;

            if (now - lastTime >= 1000) {
                setFps(Math.round((frameCount * 1000) / (now - lastTime)));
                frameCount = 0;
                lastTime = now;
            }

            rafId = requestAnimationFrame(loop);
        };

        rafId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(rafId);
    }, []);

    // Timer Loop
    useEffect(() => {
        if (!isActive) return;

        const startTime = Date.now();
        const interval = setInterval(() => {
            setElapsed(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] bg-black/80 text-green-400 font-mono text-xs px-2 py-1 rounded border border-green-900 pointer-events-none flex gap-4">
            <span>FPS: {fps}</span>
            <span>TIME: {elapsed}s</span>
        </div>
    );
};

export default FpsMonitor;
