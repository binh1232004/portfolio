export default function WorkExperienceEntity({ date, title, description }) {
  return (
    <div className="backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-orange-400/20">
      <div className="text-orange-400 text-sm font-mono bg-orange-400/20 backdrop-blur-sm px-3 py-1 rounded-lg inline-block mb-2 border border-orange-400/30">
        {date}
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}