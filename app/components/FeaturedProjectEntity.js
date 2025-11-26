export default function FeaturedProjectEntity({ num, title, description, tags, imageUrl }) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:shadow-orange-400/50 transition-all duration-500 transform hover:scale-105 border border-orange-400/20"
         style={{
           boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(251, 146, 60, 0.2)'
         }}>      
      <div 
        className="w-full h-48 rounded-lg mb-4 flex items-center justify-center text-gray-400   font-elegant-body overflow-hidden relative "
        style={{
          backgroundImage: imageUrl ? `url('${imageUrl}')` : 'none',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        {!imageUrl && <span>3D Model Preview</span>}
      </div>
      <h3 className="text-elegant-xl font-elegant-subheading text-orange-400 mb-2 text-render-elegant">{title || `Project Title ${num}`}</h3>
      <p className="text-gray-300 text-sm mb-3 font-elegant-body leading-elegant">{description || 'Enhanced project with 3D visualization and interactive elements.'}</p>
      <div className="text-xs text-gray-400 font-mono-elegant">{tags || 'Tags: Three.js, React, WebGL'}</div>
    </div>
  );
}
