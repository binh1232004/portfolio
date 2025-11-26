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
      <div className="ml-32 md:ml-40 w-full max-w-2xl group">
        <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 backdrop-blur-sm border border-orange-400/20"
             style={{
               boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(251, 146, 60, 0.3)'
             }}>
                   
          {/* Enhanced project preview with background image */}
          <div 
            className="p-8 h-72 flex items-center justify-center relative overflow-hidden"
          >
            {/* Blurred background layer */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${url}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                filter: 'blur(8px)',
                zIndex: 1
              }}
            ></div>
            
            {/* Low opacity overlay */}
            <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }}></div>
            
            {/* Content overlay */}
            <div className="text-center relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg tracking-wide" style={{ fontFamily: 'var(--font-playfair-display)' }}>{title}</h3>
              <p className="text-white text-lg font-light mb-4 drop-shadow-md leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
