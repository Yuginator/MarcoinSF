import { useState, useEffect } from 'react';

const cache = new Map();

/**
 * Fetches an SVG URL and renders it inline to allow CSS styling (e.g., stroke-width).
 * Implements basic caching to avoid re-fetching the same asset.
 */
const SvgLoader = ({ src, className, style, strokeWidthProp }) => {
    const [svgContent, setSvgContent] = useState(cache.get(src) || null);

    useEffect(() => {
        if (cache.has(src)) {
            setSvgContent(cache.get(src));
            return;
        }

        let active = true;
        fetch(src)
            .then(res => res.text())
            .then(text => {
                if (active) {
                    // Inject vector-effect to ensure stroke width remains constant regardless of scale
                    // This is more robust than CSS for inline SVGs
                    const processedText = text
                        .replace(/(<(path|rect|circle|polygon|line|polyline|ellipse))/g, '$1 vector-effect="non-scaling-stroke"')
                        .replace(/<svg/, '<svg class="w-full h-auto"'); // Ensure layout scaling

                    cache.set(src, processedText);
                    setSvgContent(processedText);
                }
            })
            .catch(err => console.warn('Failed to load SVG', src, err));

        return () => { active = false; };
    }, [src]);

    if (!svgContent) return null;

    return (
        <div
            className={`svg-loader-wrapper ${className || ''}`}
            style={{
                ...style,
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center'
            }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

export default SvgLoader;
