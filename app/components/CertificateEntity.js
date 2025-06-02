export default function CertificateEntity({ date, title, badgeImage, badgeAlt }) {
  return (
    <div className="flex items-center space-x-4 backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-orange-400/20">
      <div className="w-24 h-16 bg-gray-700/50 backdrop-blur-sm rounded flex items-center justify-center text-gray-400 text-xs border border-gray-600/30">
        {badgeImage ? (
          <img 
            src={badgeImage} 
            alt={badgeAlt || 'Certificate Badge'} 
            className="w-full h-full object-contain rounded"
          />
        ) : (
          'Badge/Logo'
        )}
      </div>
      <div>
        <div className="text-orange-400 text-sm font-mono bg-orange-400/20 backdrop-blur-sm px-2 py-1 rounded inline-block mb-1 border border-orange-400/30">
          {date}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}
