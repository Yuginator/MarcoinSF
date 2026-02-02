import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import speaker frames
import SpeakerOff from '../assets/doodle/speaker/Speaker-off.svg?react';
import SpeakerOn1 from '../assets/doodle/speaker/Speaker-on-1.svg?react';
import SpeakerOn2 from '../assets/doodle/speaker/Speaker-on-2.svg?react';
import SpeakerOn3 from '../assets/doodle/speaker/Speaker-on-3.svg?react';

// Import all BGM files
const bgmModules = import.meta.glob('../assets/BGM/*.mp3', { eager: true, as: 'url' });

const BackgroundMusic = ({ isLightboxOpen, autoPlay = false }) => {
    // 1. STATE
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [showControls, setShowControls] = useState(false);

    // Animation State
    const [currentFrame, setCurrentFrame] = useState(0); // 0=off, 1,2,3=on

    // Audio Ref
    const audioRef = useRef(new Audio());

    // Playlist
    const playlist = useMemo(() => {
        return Object.keys(bgmModules).map(path => {
            const filename = path.split('/').pop();
            const name = filename.replace('.mp3', '');
            return {
                name,
                url: bgmModules[path]
            };
        });
    }, []);

    const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
        const keys = Object.keys(bgmModules);
        const defaultIndex = keys.findIndex(key => key.includes('Under FujiMt'));
        return defaultIndex !== -1 ? defaultIndex : 0;
    });

    // 2. AUDIO LOGIC
    useEffect(() => {
        // Initialize volume
        audioRef.current.volume = volume;
        audioRef.current.loop = true;

        // Cleanup
        return () => {
            if (audioRef.current) {
                const audio = audioRef.current;
                audio.pause();
                audio.removeAttribute('src');
                audio.src = "";
                audio.load();
                audio.remove(); // Force detach
            }
        };
    }, []);

    // Handle Track Change
    useEffect(() => {
        if (playlist.length === 0) return;

        const track = playlist[currentTrackIndex];
        const wasPlaying = !audioRef.current.paused;

        if (audioRef.current.src !== track.url && !audioRef.current.src.endsWith(track.url)) {
            audioRef.current.src = track.url;
            if (wasPlaying || isPlaying) {
                audioRef.current.play().catch(e => {
                    if (e.name !== 'AbortError') console.error("Play failed:", e);
                });
            }
        }
    }, [currentTrackIndex, playlist, isPlaying]);

    // Handle Volume/Mute
    useEffect(() => {
        audioRef.current.volume = isMuted ? 0 : volume;
    }, [volume, isMuted]);

    // Handle Play/Pause & Lightbox
    useEffect(() => {
        if (isLightboxOpen) {
            // Auto-mute/pause logic
            audioRef.current.pause();
        } else {
            if (isPlaying) {
                audioRef.current.play().catch(e => {
                    if (e.name !== 'AbortError') console.error("Resume failed", e);
                });
            }
        }
    }, [isLightboxOpen, isPlaying]);

    // 3. ANIMATION LOOP
    useEffect(() => {
        if (!isPlaying || isMuted || isLightboxOpen) {
            setCurrentFrame(0); // Off state
            return;
        }

        const interval = setInterval(() => {
            // Cycle frames 1 -> 2 -> 3 -> 1
            setCurrentFrame(prev => {
                if (prev === 0 || prev === 3) return 1;
                return prev + 1;
            });
        }, 400);

        return () => clearInterval(interval);
    }, [isPlaying, isMuted, isLightboxOpen]);


    // 4. HANDLERS
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(e => {
                if (e.name !== 'AbortError') console.error("Play failed", e);
            });
            setIsPlaying(true);
        }
    };

    const Frames = [SpeakerOff, SpeakerOn1, SpeakerOn2, SpeakerOn3];
    const CurrentSpeaker = Frames[currentFrame] || SpeakerOff;

    return (
        <div className="fixed top-0 left-0 z-[60] flex flex-col items-start font-mono">
            {/* Speaker Doodle */}
            <div
                className="relative w-40 md:w-60 ml-3 cursor-pointer transition-transform hover:scale-105 active:scale-95 origin-top-left"
                onClick={() => setShowControls(prev => !prev)}
            >
                <CurrentSpeaker className="w-full h-auto drop-shadow-lg doodle-svg" />
            </div>

            {/* Control Panel */}
            <AnimatePresence>
                {showControls && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="mt-4 ml-5 bg-white/90 backdrop-blur-sm border-[1.5px] border-black p-4 rounded-lg shadow-xl w-64 flex flex-col gap-4 text-xs"
                    >
                        {/* Status Header */}
                        <div className="flex justify-between items-center border-b border-black/10 pb-2">
                            <span className="font-bold">BGM PLAYER</span>
                            <button
                                onClick={togglePlay}
                                className={`px-2 py-1 rounded ${isPlaying ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                            >
                                {isPlaying ? 'PAUSE' : 'PLAY'}
                            </button>
                        </div>

                        {/* Track List */}
                        <div className="flex flex-col gap-1 max-h-40 overflow-y-auto">
                            {playlist.map((track, i) => (
                                <button
                                    key={track.name}
                                    onClick={() => {
                                        setCurrentTrackIndex(i);
                                        if (!isPlaying) {
                                            setIsPlaying(true);
                                            audioRef.current.play();
                                        }
                                    }}
                                    className={`text-left px-2 py-1 truncate transition-colors ${currentTrackIndex === i
                                        ? 'bg-black/10 font-bold'
                                        : 'hover:bg-black/5'
                                        }`}
                                >
                                    {i + 1}. {track.name}
                                </button>
                            ))}
                        </div>

                        {/* Volume Control */}
                        <div className="flex items-center gap-2 pt-2 border-t border-black/10">
                            <button
                                onClick={() => setIsMuted(prev => !prev)}
                                className="w-6"
                            >
                                {isMuted ? '🔇' : '🔊'}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={(e) => {
                                    setVolume(parseFloat(e.target.value));
                                    setIsMuted(false);
                                }}
                                className="flex-grow accent-black h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BackgroundMusic;
