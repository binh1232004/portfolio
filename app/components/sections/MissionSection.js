import { MISSION_TEXT_CONTENT, MISSION_HIGHLIGHTS } from '../../constants/index';

export default function MissionSection({ isVisible }) {
    const renderMissionText = () => {
        let text = MISSION_TEXT_CONTENT;
        
        // Replace highlighted terms with spans
        MISSION_HIGHLIGHTS.forEach(highlight => {
            text = text.replace(
                highlight,
                `<span class="text-orange-400 font-medium">${highlight}</span>`
            );
        });
        
        return { __html: text };
    };

    return (
        <div
            className={`w-full max-w-6xl mx-auto px-4 mb-16 transition-all duration-1000 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
        >
            <div className="relative backdrop-blur-sm bg-black/30 rounded-2xl p-8 border border-orange-400/30">
                {/* Date in top left */}
                <div className="absolute top-4 left-4 text-gray-400 text-sm font-mono">
                    06/02/2025
                </div>

                {/* Mission text */}
                <div className="pt-8 text-gray-300 leading-relaxed text-lg md:text-xl lg:text-2xl w-full text-justify">
                    <p 
                        className="w-full" 
                        dangerouslySetInnerHTML={renderMissionText()}
                    />
                </div>
            </div>
        </div>
    );
}
