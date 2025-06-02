export default function ProjectEntity({ projectNum, date, title, description, url }) {
  return (
    <div className="flex items-center">
      {/* Enhanced timeline dot */}
      <div className="absolute left-6 md:left-14 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-2xl border-2 border-orange-300/50 animate-pulse"
           style={{
             boxShadow: '0 0 15px rgba(251, 146, 60, 0.8)'
           }}></div>
        {/* Date */}
      <div className="absolute -left-0 lg:-left-30 text-orange-400 text-sm font-mono-elegant bg-orange-400/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-orange-400/30">
        {date}
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
              {url}
            </div>
          </div>
          
          {/* Enhanced project preview */}
          <div className="bg-gradient-to-br from-red-200/90 via-orange-100/90 to-yellow-100/90 backdrop-blur-sm p-6 h-48 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20"></div>            <div className="text-center relative z-10">
              <h3 className="text-elegant-2xl font-elegant-subheading text-gray-800 mb-2 text-render-elegant">{title}</h3>
              <p className="text-gray-600 text-sm font-elegant-body mb-4">{description}</p>
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
  );
}
