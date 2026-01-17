import { useState, useEffect } from 'react';

const FpsMonitor = () => {
    const [fps, setFps] = useState(0);

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

    return (
        <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] bg-black/80 text-green-400 font-mono text-xs px-2 py-1 rounded border border-green-900 pointer-events-none">
            FPS: {fps}
        </div>
    );
};

export default FpsMonitor;
