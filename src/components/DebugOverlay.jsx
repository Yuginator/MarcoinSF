import { useEffect, useRef } from 'react';
import { debugState } from '../debugState';

const DebugOverlay = () => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let rAF;
        let lastTime = performance.now();
        let frames = 0;

        const loop = () => {
            const now = performance.now();
            frames++;
            if (now - lastTime >= 500) {
                // Update FPS every 500ms
                debugState.fps = frames * 2;
                frames = 0;
                lastTime = now;
            }

            el.innerHTML = `
                <div style="font-family: monospace; font-size: 14px; color: #00ff00; background: rgba(0,0,0,0.8); padding: 10px; pointer-events: none;">
                    <div><strong>DEBUGGER</strong></div>
                    <div>FPS: ${debugState.fps}</div>
                    <div>Scroll X: ${debugState.scrollX.toFixed(0)}</div>
                    <div>Velocity (Raw): ${debugState.velocity.toFixed(4)}</div>
                    <div>Velocity (Smooth): ${debugState.smoothedVelocity.toFixed(4)}</div>
                    <div style="border-top: 1px solid #333; margin-top: 5px; padding-top: 5px;">
                        <div>Frame Index: ${debugState.frame}</div>
                        <div style="color: ${debugState.animationDelta > 100 ? 'red' : 'white'}">
                            Anim Delta: ${debugState.animationDelta.toFixed(0)}ms
                        </div>
                    </div>
                    <div style="border-top: 1px solid #333; margin-top: 5px; padding-top: 5px;">
                        <div>Nearest Item:</div>
                        <div style="font-size: 10px; color: yellow;">${debugState.nearestItem}</div>
                    </div>
                    <div style="margin-top: 5px; color: ${debugState.velocity < 0.01 ? 'red' : '#00ff00'}">
                        STATUS: ${debugState.velocity < 0.01 ? 'STOPPED' : 'MOVING'}
                    </div>
                </div>
            `;
            rAF = requestAnimationFrame(loop);
        };
        loop();

        return () => cancelAnimationFrame(rAF);
    }, []);

    return (
        <div
            ref={ref}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 99999
            }}
        />
    );
};

export default DebugOverlay;
