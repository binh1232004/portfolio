export default function FeaturedProjectEntity({ num, title, description, tags }) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:shadow-orange-400/50 transition-all duration-500 transform hover:scale-105 border border-orange-400/20"
         style={{
           boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(251, 146, 60, 0.2)'
         }}>
      <div className="w-full h-48 bg-gray-700/50 backdrop-blur-sm rounded-lg mb-4 flex items-center justify-center text-gray-400 border border-gray-600/30">
        3D Model Preview
      </div>
      <h3 className="text-xl font-semibold text-orange-400 mb-2">{title || `Project Title ${num}`}</h3>
      <p className="text-gray-300 text-sm mb-3">{description || 'Enhanced project with 3D visualization and interactive elements.'}</p>
      <div className="text-xs text-gray-400">{tags || 'Tags: Three.js, React, WebGL'}</div>
    </div>
  );
}
