import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const message = `إلى حبيبتي رهف..

في يوم الحب، وأنتِ الحب كله..
أردت أن أكتب لكِ كلمات تبقى، وذكرى لا تنسى.
أنتِ النعمة التي أشكر الله عليها في كل يوم.
في عينيكِ أرى وطني، وفي صوتكِ أسمع ألحان الحياة.
كل عام وأنتِ بقلبي، بل أنتِ قلبي كله.

أحبك.. اليوم، وغداً، وإلى الأبد.

التوقيع:
قيس جازي`;

const LoveLetter = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < message.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + message[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100); // Typing speed
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <div className="w-full max-w-3xl mx-auto py-20 px-6 relative z-10">
            <div className="relative bg-black/40 backdrop-blur-xl border border-soft-gold/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center overflow-hidden group">

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-soft-gold/50 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-soft-gold/50 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-soft-gold/50 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-soft-gold/50 rounded-br-2xl"></div>

                <div className="mb-8">
                    <Heart className="w-12 h-12 text-royal-red fill-current mx-auto animate-pulse drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
                </div>

                <div className="font-arabic text-xl md:text-3xl text-warm-white leading-loose whitespace-pre-wrap dir-rtl relative z-10 min-h-[300px]">
                    {displayedText}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-1 h-6 md:h-8 bg-soft-gold ml-1 align-middle"
                    />
                </div>

                {/* Floating Hearts BG */}
                <div className="absolute inset-0 pointer-events-none">
                    <Heart className="absolute top-10 left-10 text-royal-red/10 w-8 h-8 animate-bounce" style={{ animationDuration: '3s' }} />
                    <Heart className="absolute bottom-20 right-10 text-royal-red/10 w-12 h-12 animate-bounce" style={{ animationDuration: '4s' }} />
                    <Heart className="absolute top-1/2 left-4 text-royal-red/10 w-6 h-6 animate-bounce" style={{ animationDuration: '2.5s' }} />
                </div>
            </div>
        </div>
    );
};

export default LoveLetter;
