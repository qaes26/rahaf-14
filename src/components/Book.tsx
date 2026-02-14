import { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart } from 'lucide-react';

const Book = () => {
    const [currentPage, setCurrentPage] = useState(0);
    // States:
    // 0: Closed (Front Cover visible)
    // 1: Page 1 Open (Cover flipped left, Page 2 visible on right) -> Spread 1
    // 2: Page 3 Open (Sheet 2 flipped left, Page 4 visible on right) -> Spread 2
    // 3: Closed (Back Cover visible)
    const totalStates = 3;

    const handleFlip = (direction: 'next' | 'prev') => {
        if (direction === 'next' && currentPage < totalStates) {
            setCurrentPage(curr => curr + 1);
        } else if (direction === 'prev' && currentPage > 0) {
            setCurrentPage(curr => curr - 1);
        }
    };

    // Sheet Logic:
    // Sheet 1: Front (Cover), Back (Pg1 Image1)
    // Sheet 2: Front (Pg2 Quote1), Back (Pg3 Image2)
    // Sheet 3: Front (Pg4 Quote2), Back (Back Cover)

    return (
        <div className="relative w-full max-w-6xl h-[600px] flex justify-center items-center perspective-2000">

            {/* Book Container */}
            <div className="relative w-[400px] h-[580px] preserve-3d duration-1000">

                {/* Binding/Spine Effect */}
                <div className="absolute left-0 top-1 bottom-1 w-4 bg-royal-red -translate-x-2 rounded-l-md brightness-75 z-0"></div>

                {/* SHEET 1: Cover / Page 1 */}
                <div
                    className={`absolute top-0 left-0 w-full h-full origin-left bg-white transition-transform duration-1000 preserve-3d ease-in-out cursor-pointer z-[30]`}
                    style={{
                        transform: currentPage >= 1 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                        zIndex: currentPage >= 1 ? 1 : 30 // When flipped (left), it's bottom of stack (1). When closed (right), it's top (30).
                    }}
                    onClick={() => handleFlip(currentPage >= 1 ? 'prev' : 'next')}
                >
                    {/* Front: Cover */}
                    <div className="absolute inset-0 backface-hidden leather-texture border-4 border-soft-gold rounded-r-lg flex flex-col items-center justify-center p-8 text-center text-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent pointer-events-none"></div>
                        <div className="relative z-10 w-full h-full flex flex-col items-center">
                            <div className="border-2 border-soft-gold/50 p-2 w-full h-full flex flex-col items-center justify-center outline outline-2 outline-offset-4 outline-soft-gold/30">
                                <h1 className="font-arabic font-bold text-5xl mb-6 text-soft-gold drop-shadow-lg mt-4">إلى حبيبتي رهف</h1>

                                <div className="w-full aspect-[4/3] bg-black rounded-lg overflow-hidden border-2 border-soft-gold shadow-2xl mb-8 relative group">
                                    <video src="/video.mp4" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" autoPlay loop muted playsInline />
                                    <div className="absolute inset-0 bg-soft-gold/10 pointer-events-none mix-blend-overlay"></div>
                                </div>

                                <div className="mt-auto mb-4">
                                    <Heart className="w-8 h-8 text-soft-gold fill-current animate-pulse mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back: Page 1 (Image 1) */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 paper-texture rounded-l-lg overflow-hidden flex items-center justify-center p-4">
                        <div className="w-full h-full relative border-2 border-gray-200 p-2 bg-white shadow-inner">
                            <img src="/image1.jpg" className="w-full h-full object-cover filter sepia-[0.1]" alt="Page 1" />
                            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 font-serif text-sm">- 1 -</span>
                        </div>
                        {/* Shadow Overlay for depth when sandwiched */}
                        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-1000 ${currentPage === 2 ? 'opacity-40' : 'opacity-0'} pointer-events-none`}></div>
                    </div>
                </div>


                {/* SHEET 2: Page 2 / Page 3 */}
                <div
                    className={`absolute top-0 left-0 w-full h-full origin-left bg-white transition-transform duration-1000 preserve-3d ease-in-out cursor-pointer z-[20]`}
                    style={{
                        transform: currentPage >= 2 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                        zIndex: currentPage >= 2 ? 10 : 20 // When flipped (left), it's mid stack (10). When closed (right), it's mid (20).
                        // Wait, Left Stack Stacking: 
                        // Sheet 1 is bottom (flipped first).
                        // Sheet 2 is on top of Sheet 1.
                        // So Sheet 2 zIndex MUST be > Sheet 1 zIndex when both flipped.
                        // My logic: Sheet 1 Z=1, Sheet 2 Z=10. Correct.
                    }}
                    onClick={() => handleFlip(currentPage >= 2 ? 'prev' : 'next')}
                >
                    {/* Front: Page 2 (Quote 1) */}
                    <div className="absolute inset-0 backface-hidden paper-texture rounded-r-lg flex flex-col items-center justify-center p-12 text-center border-l border-gray-300">
                        <div className="w-full h-full border border-soft-gold/20 flex flex-col items-center justify-center relative bg-white/50">
                            <span className="text-6xl text-soft-gold/30 font-serif absolute top-8 left-8">“</span>
                            <p className="font-handwriting text-4xl text-royal-red leading-relaxed drop-shadow-sm">
                                أحبك بكل لغات العالم
                            </p>
                            <span className="text-6xl text-soft-gold/30 font-serif absolute bottom-8 right-8 rotate-180">“</span>
                            <span className="absolute bottom-4 text-gray-400 font-serif text-sm">- 2 -</span>
                        </div>
                        {/* Shadow Overlay for depth when sandwiched */}
                        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-1000 ${currentPage === 1 ? 'opacity-0' : 'opacity-40'} pointer-events-none`}></div>
                    </div>

                    {/* Back: Page 3 (Image 2) */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 paper-texture rounded-l-lg overflow-hidden flex items-center justify-center p-4">
                        <div className="w-full h-full relative border-2 border-gray-200 p-2 bg-white shadow-inner">
                            <img src="/image2.jpg" className="w-full h-full object-cover filter contrast-110" alt="Page 3" />
                            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 font-serif text-sm">- 3 -</span>
                        </div>
                        {/* Shadow Overlay */}
                        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-1000 ${currentPage === 3 ? 'opacity-40' : 'opacity-0'} pointer-events-none`}></div>
                    </div>
                </div>


                {/* SHEET 3: Page 4 / Back Cover */}
                <div
                    className={`absolute top-0 left-0 w-full h-full origin-left bg-white transition-transform duration-1000 preserve-3d ease-in-out cursor-pointer z-[10]`}
                    style={{
                        transform: currentPage >= 3 ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                        zIndex: currentPage >= 3 ? 20 : 10 // When flipped (left), it's top of stack (20). When closed (right), it's bottom (10).
                    }}
                    onClick={() => handleFlip(currentPage >= 3 ? 'prev' : 'next')}
                >
                    {/* Front: Page 4 (Quote 2) */}
                    <div className="absolute inset-0 backface-hidden paper-texture rounded-r-lg flex flex-col items-center justify-center p-12 text-center border-l border-gray-300">
                        <div className="w-full h-full border border-soft-gold/20 flex flex-col items-center justify-center relative bg-white/50">
                            <span className="text-6xl text-soft-gold/30 font-serif absolute top-8 left-8">“</span>
                            <p className="font-handwriting text-4xl text-royal-red leading-relaxed drop-shadow-sm">
                                في حضورك يغيب الجميع
                            </p>
                            <span className="text-6xl text-soft-gold/30 font-serif absolute bottom-8 right-8 rotate-180">“</span>
                            <span className="absolute bottom-4 text-gray-400 font-serif text-sm">- 4 -</span>
                        </div>
                        {/* Shadow Overlay */}
                        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-1000 ${currentPage === 2 ? 'opacity-0' : 'opacity-40'} pointer-events-none`}></div>
                    </div>

                    {/* Back: Back Cover */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 leather-texture border-4 border-soft-gold rounded-l-lg flex flex-col items-center justify-center p-8 text-center text-white">
                        <div className="absolute inset-0 bg-gradient-to-bl from-black/20 to-transparent pointer-events-none"></div>
                        <div className="relative z-10 border-2 border-soft-gold/30 p-10 rounded-lg bg-black/20 backdrop-blur-sm">
                            <Heart className="w-16 h-16 text-soft-gold mx-auto mb-6 drop-shadow-lg" />
                            <p className="font-arabic text-2xl mb-4 text-soft-gold">تم بكل حب..</p>
                            <p className="font-arabic text-sm text-gray-300">من إعداد</p>
                            <h2 className="font-handwriting text-4xl mt-2 text-white">قيس جازي</h2>
                        </div>
                    </div>
                </div>

            </div>

            {/* Controls / Instructions */}
            <div className="absolute bottom-4 md:-bottom-20 flex flex-col items-center gap-4">
                <div className="flex gap-4">
                    <button
                        onClick={() => handleFlip('prev')}
                        className={`p-3 rounded-full bg-white/10 backdrop-blur-md text-soft-gold hover:bg-white/20 transition-all ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ChevronRight size={30} />
                    </button>
                    <div className="text-soft-gold font-serif text-xl self-center tracking-widest">
                        {currentPage === 0 ? "COVER" : currentPage === 3 ? "END" : `SPREAD ${currentPage}`}
                    </div>
                    <button
                        onClick={() => handleFlip('next')}
                        className={`p-3 rounded-full bg-white/10 backdrop-blur-md text-soft-gold hover:bg-white/20 transition-all ${currentPage === totalStates ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ChevronLeft size={30} />
                    </button>
                </div>
                <p className="text-soft-gold/50 text-sm font-arabic animate-pulse">اضغط على الكتاب للتقليب</p>
            </div>

        </div>
    );
};

export default Book;
