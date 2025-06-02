"use client"
import { useState, useEffect, useRef } from "react";
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import Img from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentPhase, setCurrentPhase] = useState(0);

  // Three.js Scene Setup - Load Cloud Architecture FBX Model
  useEffect(() => {
    const phrases = [
      "Hi, my name is Binh",
      "I'm cloud engineer",
      "I'm dev-op engineer"
    ];
    
    setIsVisible(true);
    
    // Function to update timeline height based on document height

    // Typewriter effect
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
   const typeWriter = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (!isDeleting) {
        setTypedText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentPhrase.length) {
          if (phraseIndex < phrases.length - 1) {
            setTimeout(() => {
              isDeleting = true;
              setTimeout(typeWriter, 100);
            }, 2000);
          }
          return;
        }
      } else {
        setTypedText(currentPhrase.slice(0, charIndex));
        charIndex--;
        
        if (charIndex < 0) {
          isDeleting = false;
          phraseIndex++;
          charIndex = 0;
          setCurrentPhase(phraseIndex);
        }
      }
      
      setTimeout(typeWriter, isDeleting ? 50 : 100);
    };
    
    setTimeout(typeWriter, 1000);

  }, []);

  const techWords = [
    "cloud architecture", "infrastructure automation", "scalable solutions",
    "CI/CD pipelines", "containerization", "AWS", "Docker", "Kubernetes",
    "terraform", "ansible",  "load balancing", "high availability",
    "disaster recovery", "security compliance", "cost optimization"
  ];

  const missionText = (
    <>
      My passion lies in designing and implementing{" "}
      <span className="text-orange-400 font-medium">scalable cloud infrastructure</span> and{" "}
      <span className="text-orange-400 font-medium">robust DevOps pipelines</span>.
      I take{" "}
      <span className="text-orange-400 font-medium">full ownership</span>{" "}
      of the entire deployment lifecycle, from
      architecture planning to production monitoring, implementing{" "}
      <span className="text-orange-400 font-medium">Infrastructure as Code</span>{" "}
      and ensuring seamless{" "}
      <span className="text-orange-400 font-medium">CI/CD automation</span>.
      I thrive on optimizing system performance and consistently deliver{" "}
      <span className="text-orange-400 font-medium">highly available</span> solutions
      within budget and timeline constraints,
      while maintaining a strong focus on security, compliance, and cost optimization. My
      diverse expertise across cloud platforms and DevOps tools enables me to build infrastructure that
      is both{" "}
      <span className="text-orange-400 font-medium">resilient</span> and{" "}
      <span className="text-orange-400 font-medium">efficiently automated</span>.
    </>
  );

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-amber-900/20 text-white">
      {/* Full-Page 3D Model Section */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Animated background tech words overlay */}
        <div className="absolute inset-0 opacity-20 z-20 pointer-events-none">
          {techWords.map((word, index) => (
            <div
              key={index}
              className={`absolute text-gray-400 text-sm animate-pulse`}
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Header text overlay on 3D section */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-6xl font-light mb-4 min-h-[80px] flex items-center justify-center backdrop-blur-sm bg-black/20 rounded-2xl px-8 py-4">
              <span className="text-white">
                {typedText.includes("Binh") ? (
                  <>
                    {typedText.replace("Binh", "")}
                    <span className="text-orange-400 font-medium">Binh</span>
                  </>
                ) : (
                  <>
                    <span className="text-orange-400 font-medium">{typedText}</span>
                  </>
                )}
                <span className="animate-blink">|</span>
              </span>
            </h1>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center backdrop-blur-sm bg-orange-400/10"
               style={{
                 boxShadow: '0 0 15px rgba(251, 146, 60, 0.6)'
               }}>
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-20 bg-gradient-to-br from-black via-gray-900 to-amber-900/20 px-4 py-16">
        
      {/* Mission/About section */}
      <div className={`w-full max-w-6xl mx-auto px-4 mb-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="relative backdrop-blur-sm bg-black/30 rounded-2xl p-8 border border-orange-400/30">
          {/* Date in top left */}
          <div className="absolute top-4 left-4 text-gray-400 text-sm font-mono">
            06/02/2025
          </div>
          
          {/* Mission text */}
          <div className="pt-8 text-gray-300 leading-relaxed text-lg md:text-xl lg:text-2xl w-full text-justify">
            <p className="w-full">
              {missionText}
            </p>
          </div>
        </div>
      </div>


        {/* Projects section */}
        <div className={`w-full max-w-6xl mx-auto px-4 mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16 backdrop-blur-sm">
            Projects
          </h2>

          {/* Timeline container */}
          <div className="relative pl-8 md:pl-16">
            {/* Vertical line with enhanced glow - Dynamic height */}
            <div className="absolute left-8 md:left-16 top-0 bg-gradient-to-b from-orange-500 via-orange-400 to-amber-600 opacity-90 w-1.5 z-0" 
                 style={{
                   height: '400vh', // Adjust height based on viewport
                   boxShadow: '0 0 15px rgba(251, 146, 60, 1), 0 0 30px rgba(251, 146, 60, 0.8), 0 0 45px rgba(251, 146, 60, 0.6)',
                   filter: 'drop-shadow(0 0 12px rgba(251, 146, 60, 1))'
                 }}></div>
            
            {/* Enhanced symbol icon with dust particles - centered on vertical line */}
            <div className="absolute left-8 md:left-16 -top-42 flex items-center justify-center transform -translate-x-1/2 -transform-y-1/2">
              {/* Enhanced magical dust particles container */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Magical dust particles with enhanced animations */}
                {[...Array(16)].map((_, index) => {
                  const animations = ['magicalDrift', 'spiralFloat', 'cosmicPulse', 'enchantedOrbit', 'twinkleSparkle'];
                  const animation = animations[index % 5];
                  
                  // More varied particle sizes for better visual hierarchy
                  const sizes = [1.5, 2.5, 3.5, 4.5, 2, 3, 4, 5, 1.8, 2.8, 3.2, 4.2, 2.2, 3.8, 4.8, 3.5];
                  const size = sizes[index];
                  
                  // Staggered delays for more organic movement
                  const delays = [0, 0.6, 1.2, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0, 6.6, 7.2, 7.8, 8.4, 9.0];
                  const delay = delays[index];
                  
                  // Varied durations for more dynamic movement
                  const durations = [3.8, 4.5, 5.2, 6.1, 4.8, 5.7, 6.3, 4.2, 5.9, 6.0, 4.7, 5.5, 6.2, 4.9, 5.3, 5.8];
                  const duration = durations[index];
                  
                  // Position particles in multiple orbital layers
                  const layer = Math.floor(index / 4); // 4 layers of 4 particles each
                  const particlesPerLayer = 4;
                  const layerIndex = index % particlesPerLayer;
                  const angle = (layerIndex / particlesPerLayer) * 2 * Math.PI + (layer * Math.PI / 8); // Offset each layer
                  
                  // Different radius for each layer for depth
                  const radiuses = [90, 130, 170, 210];
                  const radius = radiuses[layer] + (Math.sin(index * 0.5) * 15); // Add some variation
                  
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  // Color variations for magical effect
                  const colors = [
                    'rgba(251, 146, 60, 0.9)',     // Orange
                    'rgba(245, 101, 101, 0.8)',    // Red-orange
                    'rgba(252, 211, 77, 0.9)',     // Golden yellow
                    'rgba(251, 191, 36, 0.8)',     // Amber
                    'rgba(248, 113, 113, 0.7)',    // Light red
                    'rgba(253, 224, 71, 0.9)',     // Bright yellow
                    'rgba(254, 159, 109, 0.8)',    // Light orange
                    'rgba(251, 146, 60, 0.7)',     // Orange (repeat)
                  ];
                  const color = colors[index % colors.length];
                  
                  // Enhanced glow effects
                  const glowIntensities = [
                    '0 0 8px rgba(251, 146, 60, 0.9), 0 0 16px rgba(251, 146, 60, 0.6), 0 0 24px rgba(251, 146, 60, 0.3)',
                    '0 0 10px rgba(245, 101, 101, 0.9), 0 0 20px rgba(245, 101, 101, 0.6), 0 0 30px rgba(245, 101, 101, 0.3)',
                    '0 0 12px rgba(252, 211, 77, 0.9), 0 0 24px rgba(252, 211, 77, 0.6), 0 0 36px rgba(252, 211, 77, 0.3)',
                    '0 0 6px rgba(251, 191, 36, 0.9), 0 0 12px rgba(251, 191, 36, 0.6), 0 0 18px rgba(251, 191, 36, 0.3)',
                  ];
                  const glow = glowIntensities[layer];
                  
                  return (
                    <div
                      key={index}
                      className="absolute rounded-full"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        background: `radial-gradient(circle, ${color} 0%, ${color.replace('0.', '0.3')} 70%, transparent 100%)`,
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        animation: `${animation} ${duration}s ease-in-out infinite`,
                        animationDelay: `${delay}s`,
                        boxShadow: glow,
                        filter: 'blur(0.3px)',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 5 - layer, // Closer particles appear above
                      }}
                    />
                  );
                })}
                
                {/* Additional sparkle effects for extra magic */}
                {[...Array(8)].map((_, index) => {
                  const sparkleDelay = index * 0.4;
                  const sparkleSize = 1 + Math.random() * 2;
                  const sparkleAngle = (index / 8) * 2 * Math.PI;
                  const sparkleRadius = 60 + Math.random() * 100;
                  const sparkleX = Math.cos(sparkleAngle) * sparkleRadius;
                  const sparkleY = Math.sin(sparkleAngle) * sparkleRadius;
                  
                  return (
                    <div
                      key={`sparkle-${index}`}
                      className="absolute rounded-full"
                      style={{
                        width: `${sparkleSize}px`,
                        height: `${sparkleSize}px`,
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(251, 146, 60, 0.8) 50%, transparent 100%)',
                        left: `calc(50% + ${sparkleX}px)`,
                        top: `calc(50% + ${sparkleY}px)`,
                        animation: `twinkleSparkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${sparkleDelay}s`,
                        boxShadow: '0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(251, 146, 60, 0.6)',
                        filter: 'blur(0.2px)',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                      }}
                    />
                  );
                })}
              </div>
              
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
                    animation: 'softPulse 6s ease-in-out infinite',
                  }}
                />
                
                {/* Pulsing aura behind the symbol */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, rgba(251, 146, 60, 0.1) 40%, transparent 70%)',
                    animation: 'cosmicPulse 8s ease-in-out infinite',
                    transform: 'scale(1.5)',
                    zIndex: -1,
                  }}
                />
              </div>
            </div>

            {/* Project items with enhanced styling */}
            <div className="space-y-12 pt-20">
              {[1, 2, 3].map((projectNum) => (
                <div key={projectNum} className="flex items-center">
                  {/* Enhanced timeline dot */}
                  <div className="absolute left-6 md:left-14 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-2xl border-2 border-orange-300/50 animate-pulse"
                       style={{
                         boxShadow: '0 0 15px rgba(251, 146, 60, 0.8)'
                       }}></div>
                  
                  {/* Date */}
                  <div className="absolute  -left-0 lg:-left-30 text-orange-400 text-sm font-mono bg-orange-400/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-orange-400/30">
                    09/03/2024
                  </div>
                  
                  {/* Enhanced project card */}
                  <div className="ml-32 md:ml-40 w-full max-w-md group">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-2 backdrop-blur-sm border border-orange-400/20"
                         style={{
                           boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(251, 146, 60, 0.3)'
                         }}>
                      {/* Enhanced browser mockup */}
                      <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm px-4 py-3 flex items-center space-x-2 border-b border-gray-600/50">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-gray-700/90 to-gray-600/90 backdrop-blur-sm rounded px-3 py-1 text-xs text-gray-300 border border-gray-500/30">
                          🛒-commerce
                        </div>
                      </div>
                      
                      {/* Enhanced project preview */}
                      <div className="bg-gradient-to-br from-red-200/90 via-orange-100/90 to-yellow-100/90 backdrop-blur-sm p-6 h-48 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20"></div>
                        <div className="text-center relative z-10">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">JOHN DOE</h3>
                          <p className="text-gray-600 text-sm mb-4">E-commerce Platform</p>
                          <div className="flex justify-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Featured Project section */}
        <div className={`mx-auto px-4 w-full max-w-6xl transition-all duration-1000 delay-700 mt-16 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16 backdrop-blur-sm">
            Featured Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2].map((num) => (
              <div key={num} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:shadow-orange-400/50 transition-all duration-500 transform hover:scale-105 border border-orange-400/20"
                   style={{
                     boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(251, 146, 60, 0.2)'
                   }}>
                <div className="w-full h-48 bg-gray-700/50 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center text-gray-400 border border-gray-600/30">
                  3D Model Preview
                </div>
                <h3 className="text-xl font-semibold text-orange-400 mb-2">Project Title {num}</h3>
                <p className="text-gray-300 text-sm mb-3">Enhanced project with 3D visualization and interactive elements.</p>
                <div className="text-xs text-gray-400">Tags: Three.js, React, WebGL</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Work Experience section */}
        <div className={`w-full max-w-6xl mx-auto px-4 transition-all duration-1000 delay-900 mt-16 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16 backdrop-blur-sm">
            Work Experience
          </h2>
          <div className="space-y-12">
            {[
              { date: "09/03/2024 - Present", title: "Three-month apprentice at Company X", desc: "Cloud engineering and DevOps implementation." },
              { date: "06/01/2023 - 08/30/2024", title: "Three-month apprentice at Company Y", desc: "Full-stack development and 3D visualization." }
            ].map((exp, index) => (
              <div key={index} className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-orange-400/20">
                <div className="text-orange-400 text-sm font-mono bg-orange-400/20 backdrop-blur-sm px-3 py-1 rounded-lg inline-block mb-2 border border-orange-400/30">
                  {exp.date}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <p className="text-gray-300 text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Certificates section */}
        <div className={`w-full max-w-6xl mx-auto px-4 transition-all duration-1000 delay-1000 mt-16 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16 backdrop-blur-sm">
            Certificates
          </h2>
          <div className="space-y-12">
            {[
              { date: "09/03/2024", title: "CompTIA A+" },
              { date: "08/15/2024", title: "AWS Certified Cloud Practitioner" }
            ].map((cert, index) => (
              <div key={index} className="flex items-center space-x-4 backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-orange-400/20">
                <div className="w-24 h-16 bg-gray-700/50 backdrop-blur-sm rounded flex items-center justify-center text-gray-400 text-xs border border-gray-600/30">
                  Badge/Logo
                </div>
                <div>
                  <div className="text-orange-400 text-sm font-mono bg-orange-400/20 backdrop-blur-sm px-2 py-1 rounded inline-block mb-1 border border-orange-400/30">
                    {cert.date}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center backdrop-blur-sm bg-orange-400/10"
               style={{
                 boxShadow: '0 0 15px rgba(251, 146, 60, 0.6)'
               }}>
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}