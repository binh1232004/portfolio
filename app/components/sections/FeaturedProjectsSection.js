import FeaturedProjectEntity from "../FeaturedProjectEntity";

export default function FeaturedProjectsSection({
    isVisible,
    featuredProjectsData,
}) {
    return (
        <div
            className={`mx-auto px-4 w-full max-w-6xl transition-all duration-1000 delay-700 mt-16 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
        >
            {" "}
            <h2 className="text-elegant-3xl md:text-elegant-5xl font-elegant-heading text-center mb-16 backdrop-blur-sm text-render-elegant">
                Featured Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {featuredProjectsData.map((project) => (
                    <FeaturedProjectEntity
                        key={project.num}
                        num={project.num}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    );
}
