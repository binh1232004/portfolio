export default function MagicalParticles() {
  return (
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
            className="absolute rounded-full"            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, ${color} 0%, ${color.replace('0.', '0.3')} 70%, transparent 100%)`,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              animationName: animation,
              animationDuration: `${duration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
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
            className="absolute rounded-full"            style={{
              width: `${sparkleSize}px`,
              height: `${sparkleSize}px`,
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(251, 146, 60, 0.8) 50%, transparent 100%)',
              left: `calc(50% + ${sparkleX}px)`,
              top: `calc(50% + ${sparkleY}px)`,
              animationName: 'twinkleSparkle',
              animationDuration: `${2 + Math.random() * 2}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
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
  );
}
