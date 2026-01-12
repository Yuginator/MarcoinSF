import React, { useState } from 'react';
import FramedMedia from './FramedMedia';

// Use a placeholder image service for consistent testing
const TEST_IMG = "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80";

const FrameTestPage = () => {
    const [borderWidth, setBorderWidth] = useState(30);

    return (
        <div className="min-h-screen bg-[#f0f0f0] p-8 overflow-y-auto">
            <div className="fixed top-0 left-0 right-0 bg-white p-4 shadow z-50 flex items-center gap-4">
                <h1 className="text-xl font-bold">Frame System Test</h1>
                <label className="flex items-center gap-2">
                    Border Width: {borderWidth}px
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={borderWidth}
                        onChange={(e) => setBorderWidth(Number(e.target.value))}
                        className="w-48"
                    />
                </label>
                <div className="text-sm text-gray-500">
                    Scroll down to see various aspect ratios
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">

                {/* Case 1: Standard Landscape 16:9 */}
                <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-sm text-gray-600">Landscape (16:9)</span>
                    <FramedMedia
                        src={`${TEST_IMG}&w=800&h=450`}
                        className="w-[400px] aspect-video"
                        borderWidth={`${borderWidth}px`}
                    />
                </div>

                {/* Case 2: Portrait 9:16 */}
                <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-sm text-gray-600">Portrait (9:16)</span>
                    <FramedMedia
                        src={`${TEST_IMG}&w=450&h=800`}
                        className="w-[225px] aspect-[9/16]"
                        borderWidth={`${borderWidth}px`}
                    />
                </div>

                {/* Case 3: Square 1:1 */}
                <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-sm text-gray-600">Square (1:1)</span>
                    <FramedMedia
                        src={`${TEST_IMG}&w=600&h=600`}
                        className="w-[300px] aspect-square"
                        borderWidth={`${borderWidth}px`}
                    />
                </div>

                {/* Case 4: Panoramic 21:9 */}
                <div className="flex flex-col items-center gap-2 col-span-full">
                    <span className="font-mono text-sm text-gray-600">Panoramic (Extreme Width)</span>
                    <FramedMedia
                        src={`${TEST_IMG}&w=1200&h=400`}
                        className="w-[800px] h-[300px]"
                        borderWidth={`${borderWidth}px`}
                    />
                </div>

                {/* Case 5: Tiny */}
                <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-sm text-gray-600">Tiny (Collision Check)</span>
                    <FramedMedia
                        src={`${TEST_IMG}&w=200&h=200`}
                        className="w-[100px] h-[100px]"
                        borderWidth={`${borderWidth}px`}
                    />
                </div>

                {/* Case 6: Dynamic Sizing */}
                <div className="flex flex-col items-center gap-2 bg-blue-50 p-4 rounded">
                    <span className="font-mono text-sm text-blue-600">Responsive Container (50% parent)</span>
                    <div className="w-full max-w-[400px]">
                        <FramedMedia
                            src={`${TEST_IMG}&w=600&h=400`}
                            className="w-full aspect-[3/2]"
                            borderWidth={`${borderWidth}px`}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FrameTestPage;
