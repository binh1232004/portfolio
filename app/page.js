"use client";
import { useState, useEffect } from "react";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { useTypewriter } from "./hooks/useTypewriter";
import { TYPEWRITER_PHRASES } from "./constants/index";
import LoadingOverlay from "./components/LoadingOverlay";
import HeroSection from "./components/sections/HeroSection";
import MissionSection from "./components/sections/MissionSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import FeaturedProjectsSection from "./components/sections/FeaturedProjectsSection";
import WorkExperienceSection from "./components/sections/WorkExperienceSection";
import CertificatesSection from "./components/sections/CertificatesSection";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    
    // Custom hooks
    const {
        projectsData,
        featuredProjectsData,
        workExperienceData,
        certificatesData,
        isDataLoaded
    } = usePortfolioData();
    
    const { typedText } = useTypewriter(TYPEWRITER_PHRASES);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <LoadingOverlay isDataLoaded={isDataLoaded} />
            
            <div className="bg-gradient-to-br from-black via-gray-900 to-amber-900/20 text-white">
                <HeroSection isVisible={isVisible} typedText={typedText} />

                {/* Content Sections */}
                <div className="relative z-20 bg-gradient-to-br from-black via-gray-900 to-amber-900/20 px-4 py-16">
                    <div className="mb-32">
                        <MissionSection isVisible={isVisible} />
                    </div>
                    <ProjectsSection isVisible={isVisible} projectsData={projectsData} />
                    <FeaturedProjectsSection isVisible={isVisible} featuredProjectsData={featuredProjectsData} />
                    <WorkExperienceSection isVisible={isVisible} workExperienceData={workExperienceData} />
                    <CertificatesSection isVisible={isVisible} certificatesData={certificatesData} />
                </div>
            </div>
        </>
    );
}
