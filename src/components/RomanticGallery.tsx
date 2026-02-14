import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Heart, Star, Sparkles } from 'lucide-react';

const slides = [
    {
        image: "/image1.jpg",
        quote: "أحبك بكل لغات العالم"
    },
    {
        image: "/image2.jpg",
        quote: "في حضورك يغيب الجميع، وكأن الكون اختصر في عينيكِ"
    },
    {
        image: "/image3.jpg",
        quote: "أنتِ النعمة التي أدعو الله في كل صلاة أن يديمها لي"
    },
    {
        image: "/image4.jpg",
        quote: "عيناكِ موطني، وقلبكِ ملجأي، وصوتكِ أماني الوحيد"
    },
    {
        image: "/image5.jpg",
        quote: "كل يوم معكِ هو عمر جديد، وكل لحظة بقربكِ حياة"
    },
    {
        image: "/image1.jpg",
        quote: "يا أجمل صدفة في عمري، يا وريدي ونبضي"
    },
    {
        image: "/image2.jpg",
        quote: "سأظل أحبك حتى ينتهي الحب، أو أنتهي أنا"
    },
    {
        image: "/video.mp4",
        quote: "أنتِ البداية والمسك والختام"
    }
];

const RomanticGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [imgError, setImgError] = useState<Record<number, boolean>>({});

    const handleNext = () => {
        setIsFlipped(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            setIsFlipped(false);
        }, 300);
    };

    const handlePrev = () => {
        setIsFlipped(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
            setIsFlipped(false);
        }, 300);
    };

    // Fallback for missing images in the extended list
    const getSafeImage = (idx: number) => {
        const originalSrc = slides[idx].image;
        if (slides[idx].image.endsWith('mp4')) return "/image1.jpg";
        return originalSrc;
    }

    const handleImageError = () => {
        setImgError(prev => ({ ...prev, [currentIndex]: true }));
    }

    return (
        <div className="w-full flex flex-col items-center py-6 md:py-10 gap-8 md:gap-16 relative z-10">

            {/* HERO SECTION */}
            <div className="w-full max-w-4xl px-4 flex flex-col items-center text-center mt-4 md:mt-0 relative">
                {/* Intense Floating Glows */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-soft-gold/30 rounded-full blur-[120px] animate-pulse"></div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-8 md:mb-10 relative z-10"
                >
                    <h1 className="font-arabic font-bold text-5xl md:text-8xl text-shimmer mb-6 drop-shadow-[0_0_25px_rgba(212,175,55,0.8)] leading-tight p-2 tracking-wide">
                        إلى حبيبتي رهف
                    </h1>
                    <div className="h-2 w-48 md:w-64 bg-gradient-to-r from-transparent via-soft-gold to-transparent mx-auto rounded-full shadow-[0_0_20px_#d4af37] animate-pulse"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)] border-[3px] border-soft-gold group bg-black holographic-border"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-soft-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay"></div>
                    <video
                        src="/video.mp4"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </motion.div>
            </div>

            {/* FLIPPING GALLERY SECTION */}
            <div className="w-full max-w-5xl px-4 flex flex-col items-center relative">

                {/* Dazzling Background Elements behind Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-soft-gold/10 to-transparent blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

                <div className="relative w-[85vw] max-w-md md:max-w-lg aspect-[3/4.5] md:aspect-[3/4] perspective-1000 z-10">
                    <motion.div
                        className="w-full h-full relative preserve-3d transition-transform duration-700 ease-in-out"
                        animate={{ rotateY: isFlipped ? 90 : 0 }}
                    >
                        {/* CARD CONTENT */}
                        <div className="absolute inset-0 w-full h-full glass-premium rounded-2xl md:rounded-3xl shadow-[0_0_60px_rgba(212,175,55,0.25)] overflow-hidden flex flex-col group hover:shadow-[0_0_90px_rgba(212,175,55,0.4)] transition-shadow duration-500 border-soft-gold/50">

                            {/* Sparkling Border Effect - Holographic */}
                            <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/30 z-20 pointer-events-none mix-blend-overlay"></div>

                            {/* Image Part */}
                            <div className="h-[60%] md:h-[65%] w-full relative overflow-hidden border-b-2 border-soft-gold/30 bg-black/40">
                                {imgError[currentIndex] ? (
                                    <div className="w-full h-full flex items-center justify-center bg-black/60 text-soft-gold/50 font-arabic p-4 text-center">
                                        <Sparkles className="w-8 h-8 mb-2" />
                                        <p>صورة {currentIndex + 1} تحتاج إلى تحميل</p>
                                    </div>
                                ) : (
                                    <motion.img
                                        key={currentIndex}
                                        initial={{ scale: 1.15 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 8 }}
                                        src={getSafeImage(currentIndex)}
                                        onError={handleImageError}
                                        alt="Memory"
                                        className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-700"
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>

                                {/* Image Number Badge */}
                                <div className="absolute top-4 right-4 bg-soft-gold/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-soft-gold/40 flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                    <Star className="w-3.5 h-3.5 text-soft-gold fill-current animate-pulse" />
                                    <span className="text-white font-bold text-xs font-serif tracking-widest">{currentIndex + 1} / {slides.length}</span>
                                </div>
                            </div>

                            {/* Quote Part */}
                            <div className="h-[40%] md:h-[35%] w-full bg-black/20 backdrop-blur-2xl flex flex-col items-center justify-center p-4 md:p-8 text-center relative overflow-hidden">
                                {/* Dazzling Noise */}
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-15 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-soft-gold/5 pointer-events-none"></div>

                                <span className="text-5xl md:text-7xl text-soft-gold/20 font-serif absolute top-2 left-4">“</span>

                                <div className="relative z-10 w-full flex-1 flex items-center justify-center">
                                    <AnimatePresence mode='wait'>
                                        <motion.p
                                            key={currentIndex}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            className="font-handwriting text-2xl md:text-3xl lg:text-4xl text-shimmer leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,1)] px-2 dir-rtl font-bold"
                                        >
                                            {slides[currentIndex].quote}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>

                                <span className="text-5xl md:text-7xl text-soft-gold/20 font-serif absolute bottom-2 right-4 rotate-180">“</span>

                                <div className="relative mt-4">
                                    <Heart className="w-8 h-8 text-royal-red fill-current animate-bounce drop-shadow-[0_0_15px_rgba(220,20,60,0.8)]" style={{ animationDuration: '1.5s' }} />
                                    <div className="absolute inset-0 bg-royal-red/50 blur-xl animate-pulse"></div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center gap-6 md:gap-10 mt-8 md:mt-12">
                    <button
                        onClick={handlePrev}
                        className="p-4 rounded-full bg-soft-gold/10 hover:bg-soft-gold/30 backdrop-blur-xl border border-soft-gold/50 text-soft-gold transition-all hover:scale-110 active:scale-95 group shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    >
                        <ChevronRight size={28} className="md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform drop-shadow-[0_0_5px_gold]" />
                    </button>

                    <div className="flex gap-2">
                        {slides.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 md:h-2.5 rounded-full transition-all duration-500 ${currentIndex === idx ? 'bg-soft-gold w-10 shadow-[0_0_15px_#d4af37]' : 'bg-white/10 w-2.5'}`}
                            ></div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="p-4 rounded-full bg-soft-gold/10 hover:bg-soft-gold/30 backdrop-blur-xl border border-soft-gold/50 text-soft-gold transition-all hover:scale-110 active:scale-95 group shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    >
                        <ChevronLeft size={28} className="md:w-8 md:h-8 group-hover:translate-x-1 transition-transform drop-shadow-[0_0_5px_gold]" />
                    </button>
                </div>

            </div>

        </div>
    );
};

export default RomanticGallery;
