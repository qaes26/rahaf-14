import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Autoplay blocked usually:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Attempt autoplay with muted if needed, but user wants music.
        // We'll leave it paused by default or try to play if interacted.
        const handleInteraction = () => {
            if (audioRef.current && !isPlaying) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
            }
            document.removeEventListener('click', handleInteraction);
        };

        // Optional: Auto-play on first click anywhere
        document.addEventListener('click', handleInteraction);
        return () => document.removeEventListener('click', handleInteraction);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} src="/audio.mp3" loop />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-soft-pink text-deep-rose hover:bg-soft-pink hover:text-white transition-colors duration-300"
            >
                <AnimatePresence mode='wait'>
                    {isPlaying ? (
                        <motion.div
                            key="pause"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                        >
                            <Pause size={24} fill="currentColor" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="play"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                        >
                            <Play size={24} fill="currentColor" className="ml-1" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {isPlaying && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 right-0 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-deep-rose shadow-sm whitespace-nowrap"
                >
                    <Music size={12} className="inline mr-1 animate-bounce" />
                    Playing Love Song
                </motion.div>
            )}
        </div>
    );
};

export default AudioPlayer;
