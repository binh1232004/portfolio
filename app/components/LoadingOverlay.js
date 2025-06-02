export default function LoadingOverlay({ isDataLoaded }) {
    if (isDataLoaded) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="text-white text-xl">Loading portfolio data...</div>
        </div>
    );
}
