import { motion } from "framer-motion";

const MagicalBackground = () => {
    // Generate static particles for performance, but animate them dynamically
    const particles = Array.from({ length: 60 }); // Increased count
    const stars = Array.from({ length: 30 }); // Increased count

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#0f0505]">
            {/* Base Gradient Layer - Deep Universe */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a0e0e] via-[#0f0505] to-black opacity-90"></div>

            {/* Rotating Galaxy / Nebula */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen"
            ></motion.div>

            {/* Intense Floating Particles */}
            {particles.map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        y: [null, Math.random() * -150], // Float up higher
                        opacity: [0, 0.8, 0], // Brighter
                        scale: [0, Math.random() * 2 + 0.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 4 + 2, // Faster
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                    className="absolute rounded-full bg-soft-gold"
                    style={{
                        width: Math.random() * 4 + 1, // Larger
                        height: Math.random() * 4 + 1,
                        boxShadow: `0 0 ${Math.random() * 10 + 5}px #d4af37` // Stronger glow
                    }}
                />
            ))}

            {/* Frequent Shooting Stars */}
            {stars.map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    initial={{
                        top: -50,
                        left: Math.random() * window.innerWidth,
                        opacity: 1,
                        scale: 1
                    }}
                    animate={{
                        top: window.innerHeight + 50,
                        left: Math.random() * window.innerWidth - 300,
                        opacity: 0
                    }}
                    transition={{
                        duration: Math.random() * 1.5 + 0.5, // Much Faster
                        repeat: Infinity,
                        delay: Math.random() * 8,
                        ease: "linear"
                    }}
                    className="absolute w-[2px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent rotate-45 opacity-40 shadow-[0_0_10px_white]"
                />
            ))}

            {/* Golden Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none"></div>
        </div>
    );
};

export default MagicalBackground;
