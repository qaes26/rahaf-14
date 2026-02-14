const Footer = () => {
    return (
        <footer className="py-12 bg-gradient-to-t from-soft-pink/20 to-transparent">
            <div className="container mx-auto px-4 text-center">
                <p className="font-arabic text-xl md:text-2xl text-gray-600 font-medium">
                    تم بكل حب.. من إعداد <span className="text-deep-rose font-bold">قيس جازي</span>
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                    <span className="text-red-500 animate-pulse">❤️</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
