import WorkExperienceEntity from "../WorkExperienceEntity";

export default function WorkExperienceSection({ isVisible, workExperienceData }) {
    return (
        <div
            className={`w-full max-w-6xl mx-auto px-4 transition-all duration-1000 delay-900 mt-16 ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
        >
            <h2 className="text-3xl md:text-5xl font-light text-center mb-16 backdrop-blur-sm">
                Work Experience
            </h2>
            <div className="space-y-12">
                {workExperienceData.map((exp, index) => (
                    <WorkExperienceEntity
                        key={index}
                        date={exp.date}
                        title={exp.title}
                        description={exp.description}
                    />
                ))}
            </div>
        </div>
    );
}
