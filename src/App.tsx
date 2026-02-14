
import { useState } from 'react';
import MagicalBackground from './components/MagicalBackground';
import RomanticGallery from './components/RomanticGallery';
import Login from './components/Login';
import LoveLetter from './components/LoveLetter';
import { Play, Pause } from 'lucide-react';

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // YouTube Embed Logic
    const videoId = "O--o-O-ABBw";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}&enablejsapi=1`;

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsPlaying(true); // youtube auto plays
    };

    const toggleAudio = () => {
        // With iframe, we can't easily pause/play without full API.
        // Simple toggle: remove/add the iframe or hide it? 
        // Hiding doesn't stop sound. removing does.
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative min-h-screen bg-[#0f0505] overflow-x-hidden font-sans selection:bg-soft-gold selection:text-white pb-20">

            <MagicalBackground />

            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <>
                    {/* HIDDEN YOUTUBE PLAYER */}
                    {isPlaying && (
                        <div className="fixed opacity-0 pointer-events-none w-1 h-1 overflow-hidden bottom-0 right-0">
                            <iframe
                                width="100%"
                                height="100%"
                                src={embedUrl}
                                title="Background Music"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="relative z-10 w-full animate-fade-in-up">
                        <RomanticGallery />

                        {/* Divider */}
                        <div className="w-full flex justify-center my-10">
                            <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-soft-gold/30 to-transparent"></div>
                        </div>

                        <LoveLetter />
                    </div>

                    {/* Floating Audio Button */}
                    <button
                        onClick={toggleAudio}
                        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-soft-gold/20 backdrop-blur-md border border-soft-gold/50 text-soft-gold hover:bg-soft-gold hover:text-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-110 group"
                    >
                        {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current ml-1" />}
                    </button>

                    {/* Footer */}
                    <footer className="w-full py-8 text-center relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md mt-10">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl animate-pulse">❤️</span>
                            <p className="font-arabic text-lg text-warm-white/80">
                                تم بكل حب.. <br />
                                <span className="font-handwriting text-2xl text-soft-gold mt-1 block">من إعداد قيس جازي</span>
                            </p>
                        </div>
                    </footer>
                </>
            )}
        </div>
    )
}

export default App
