import { useState, useEffect } from 'react';

export function useGalleryMeasurement(containerRef) {
    const [contentWidth, setContentWidth] = useState(0);
    const [irisRadius, setIrisRadius] = useState(80);
    const [loopWidth, setLoopWidth] = useState(0);
    const [startOffset, setStartOffset] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const measureWidth = () => {
            const container = containerRef.current;
            if (!container) return;

            // Update Iris Radius for optimal responsiveness
            const w = window.innerWidth;
            const h = window.innerHeight;
            const ratio = Math.min(w, h) / Math.max(w, h);
            const r = 50 * Math.sqrt(1 + ratio * ratio);
            setIrisRadius(r + 1.5);

            const lastChild = container.lastElementChild;
            if (lastChild) {
                // Determine width based on last child's position relative to container
                const containerRect = container.getBoundingClientRect();
                const lastChildRect = lastChild.getBoundingClientRect();

                // Width = (LastChild Right) - (Container Left)
                const width = lastChildRect.right - containerRect.left;
                setContentWidth(width);
            } else {
                setContentWidth(0);
            }

            // MEASURE LOOP WIDTH
            const loopMarker = container.querySelector('#gallery-loop-marker');
            const startMarker = container.querySelector('#gallery-start-marker');

            if (loopMarker && startMarker) {
                // Loop Width is distance between Start Marker and Loop Marker
                // (End of Real Content minus Start of Real Content)
                // This is safer than mixing 0 and offsetLeft.
                setLoopWidth(loopMarker.offsetLeft - startMarker.offsetLeft);
                setStartOffset(startMarker.offsetLeft);
            } else if (loopMarker) {
                // Fallback if start marker not found (though it should be)
                setLoopWidth(loopMarker.offsetLeft);
            }
        };

        // Measure initially
        const timeout = setTimeout(measureWidth, 100);

        // Observe container size
        const resizeObserver = new ResizeObserver(() => {
            measureWidth();
        });
        resizeObserver.observe(containerRef.current);

        // Observe mutations (children changes)
        const mutationObserver = new MutationObserver(() => {
            measureWidth();
        });
        mutationObserver.observe(containerRef.current, { childList: true, subtree: true, attributes: true });

        window.addEventListener('resize', measureWidth);

        return () => {
            clearTimeout(timeout);
            resizeObserver.disconnect();
            mutationObserver.disconnect();
            window.removeEventListener('resize', measureWidth);
        };
    }, [containerRef]);

    return { contentWidth, irisRadius, setContentWidth, loopWidth, startOffset };
}
