import { useState, useEffect, useMemo } from 'react';

// Import frames
import Smoking0 from '../assets/doodle/smokingMan/smoking.svg?react';
import Smoking1 from '../assets/doodle/smokingMan/smoking-1.svg?react';
import Smoking2 from '../assets/doodle/smokingMan/smoking-2.svg?react';
import Smoking3 from '../assets/doodle/smokingMan/smoking-3.svg?react';

const SmokingCharacter = ({ className, style }) => {
    // Frame sequence
    // Adjust order if needed based on visuals
    const frames = useMemo(() => [Smoking0, Smoking1, Smoking2, Smoking3], []);
    const [frameIndex, setFrameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % frames.length);
        }, 250); // 250ms per frame = 4fps

        return () => clearInterval(interval);
    }, [frames.length]);

    const CurrentFrame = frames[frameIndex];

    return (
        <div className={className} style={style}>
            <CurrentFrame className="w-full h-full" />
        </div>
    );
};

export default SmokingCharacter;
