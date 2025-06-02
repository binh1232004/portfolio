import { useState, useEffect } from 'react';
import { portfolioApi } from '../lib/api';

export function usePortfolioData() {
    const [projectsData, setProjectsData] = useState([]);
    const [featuredProjectsData, setFeaturedProjectsData] = useState([]);
    const [workExperienceData, setWorkExperienceData] = useState([]);
    const [certificatesData, setCertificatesData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const loadPortfolioData = async () => {
            try {
                setIsDataLoaded(false);
                
                const [projects, featuredProjects, workExperience, certificates] = await Promise.all([
                    portfolioApi.getProjects(),
                    portfolioApi.getFeaturedProjects(),
                    portfolioApi.getWorkExperience(),
                    portfolioApi.getCertificates()
                ]);

                // Check if data exists, if not, initialize the database
                if (!projects.length && !featuredProjects.length && !workExperience.length && !certificates.length) {
                    console.log('No data found, initializing database...');
                    await portfolioApi.initDatabase();
                    
                    // Reload data after initialization
                    const [newProjects, newFeaturedProjects, newWorkExperience, newCertificates] = await Promise.all([
                        portfolioApi.getProjects(),
                        portfolioApi.getFeaturedProjects(),
                        portfolioApi.getWorkExperience(),
                        portfolioApi.getCertificates()
                    ]);
                    
                    setProjectsData(newProjects);
                    setFeaturedProjectsData(newFeaturedProjects);
                    setWorkExperienceData(newWorkExperience);
                    setCertificatesData(newCertificates);
                } else {
                    setProjectsData(projects);
                    setFeaturedProjectsData(featuredProjects);
                    setWorkExperienceData(workExperience);
                    setCertificatesData(certificates);
                }
                
                setIsDataLoaded(true);
            } catch (error) {
                console.error('Failed to load portfolio data:', error);
                // Try to initialize database if loading fails
                try {
                    console.log('Attempting to initialize database...');
                    await portfolioApi.initDatabase();
                    window.location.reload(); // Reload page after initialization
                } catch (initError) {
                    console.error('Failed to initialize database:', initError);
                    setIsDataLoaded(true); // Still set to true to hide loading screen
                }
            }
        };

        loadPortfolioData();
    }, []);

    return {
        projectsData,
        featuredProjectsData,
        workExperienceData,
        certificatesData,
        isDataLoaded
    };
}
