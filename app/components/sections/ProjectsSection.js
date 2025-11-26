import Img from "next/image";
import ProjectEntity from "../ProjectEntity";
import MagicalParticles from "../MagicalParticles";

export default function ProjectsSection({ isVisible, projectsData }) {
    return (
        <div
            className={`w-full max-w-6xl mx-auto  px-4 mb-16 transition-all duration-1000 delay-500 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
        >
            {" "}
            <h2 className="text-elegant-3xl md:text-elegant-5xl font-elegant-heading text-center mb-16 backdrop-blur-sm text-render-elegant">
                Projects
            </h2>
            {/* Timeline container */}
            <div className="relative pl-8 md:pl-16">
                {/* Vertical line with enhanced glow - Dynamic height */}
                <div
                    className="absolute left-8 md:left-16 top-0 bg-gradient-to-b from-orange-500 via-orange-400 to-amber-600 opacity-90 w-1.5 z-0"
                    style={{
                        height: "400vh", // Adjust height based on viewport
                        boxShadow:
                            "0 0 15px rgba(251, 146, 60, 1), 0 0 30px rgba(251, 146, 60, 0.8), 0 0 45px rgba(251, 146, 60, 0.6)",
                        filter: "drop-shadow(0 0 12px rgba(251, 146, 60, 1))",
                    }}
                ></div>

                {/* Enhanced symbol icon with dust particles - centered on vertical line */}
                <div className="absolute left-8 md:left-16 -top-42 flex items-center justify-center transform -translate-x-1/2 -transform-y-1/2">
                    {/* Enhanced magical dust particles container */}
                    <MagicalParticles />

                    {/* Enhanced magical symbol with dynamic glow */}
                    <div className="relative z-10 group">
                        <Img
                            src="/symbol.png"
                            alt="Portfolio Symbol"
                            width={200}
                            height={200}
                            className="drop-shadow-2xl transition-all duration-1000 group-hover:scale-105"
                            style={{
                                filter: `
                                    drop-shadow(0 0 20px rgba(251, 146, 60, 0.8))
                                    drop-shadow(0 0 40px rgba(251, 146, 60, 0.4))
                                    drop-shadow(0 0 60px rgba(251, 146, 60, 0.2))
                                    brightness(1.1)
                                    contrast(1.1)
                                `,
                                animation: "softPulse 6s ease-in-out infinite",
                            }}
                        />

                        {/* Pulsing aura behind the symbol */}
                        <div
                            className="absolute inset-0 rounded-full opacity-30"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, rgba(251, 146, 60, 0.1) 40%, transparent 70%)",
                                animation:
                                    "cosmicPulse 8s ease-in-out infinite",
                                transform: "scale(1.5)",
                                zIndex: -1,
                            }}
                        />
                    </div>
                </div>

                {/* Project items with enhanced styling */}
                <div className="space-y-12 pt-20">
                    {projectsData.map((project) => (
                        <ProjectEntity
                            key={project.projectNum}
                            projectNum={project.projectNum}
                            date={project.date}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
