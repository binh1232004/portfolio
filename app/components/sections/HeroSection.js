import { TECH_WORDS } from '../../constants/index';

export default function HeroSection({ isVisible, typedText }) {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Animated background tech words overlay */}
            <div className="absolute inset-0 opacity-20 z-20 pointer-events-none">
                {TECH_WORDS.map((word, index) => (
                    <div
                        key={index}
                        className={`absolute text-gray-400 text-sm animate-pulse`}
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                            animationDelay: `${index * 0.5}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                    >
                        {word}
                    </div>
                ))}
            </div>

            {/* Header text overlay on 3D section */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
                <div
                    className={`text-center transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <h1 className="text-4xl md:text-6xl font-light mb-4 min-h-[80px] flex items-center justify-center backdrop-blur-sm bg-black/20 rounded-2xl px-8 py-4">
                        <span className="text-white">
                            {typedText.includes("Binh") ? (
                                <>
                                    {typedText.replace("Binh", "")}
                                    <span className="text-orange-400 font-medium">
                                        Binh
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="text-orange-400 font-medium">
                                        {typedText}
                                    </span>
                                </>
                            )}
                            <span className="animate-blink">|</span>
                        </span>
                    </h1>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                <div
                    className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center backdrop-blur-sm bg-orange-400/10"
                    style={{
                        boxShadow: "0 0 15px rgba(251, 146, 60, 0.6)",
                    }}
                >
                    <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
