import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, KeyRound } from 'lucide-react';

interface LoginProps {
    onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === '23/11') {
            onLogin();
        } else {
            setError('التاريخ خطأ.. حاولي تتذكري 😉');
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0505] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-soft-pink/10 rounded-full blur-3xl -top-20 -left-20"></div>
            <div className="absolute w-96 h-96 bg-royal-red/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-md p-8 mx-4"
            >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl text-center">
                    <div className="mb-6 inline-block p-4 rounded-full bg-soft-gold/20 text-soft-gold border border-soft-gold/30">
                        <KeyRound size={32} />
                    </div>

                    <h2 className="font-arabic font-bold text-3xl text-warm-white mb-2">أهلاً يا أميرتي</h2>
                    <p className="font-arabic text-warm-white/60 mb-8">عشان تدخلي، لازم تكتبي تاريخنا المميز ❤️</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="اليوم / الشهر"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-center text-xl text-soft-gold placeholder-white/20 focus:outline-none focus:border-soft-gold/50 transition-all font-arabic tracking-widest"
                                autoFocus
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 font-arabic text-sm"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-soft-gold to-rich-gold text-black font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all font-arabic text-lg shadow-lg shadow-soft-gold/20"
                        >
                            دخول
                        </button>
                    </form>

                    <div className="mt-8 flex justify-center gap-2 text-soft-gold/40">
                        <Heart size={16} className="animate-bounce" style={{ animationDelay: '0s' }} />
                        <Heart size={16} className="animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <Heart size={16} className="animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
