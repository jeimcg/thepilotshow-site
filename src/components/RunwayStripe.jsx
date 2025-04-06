const RunwayStripe = () => {
    return (
      <div className="absolute inset-y-0 left-1/2 w-20 -translate-x-1/2 z-0 pointer-events-none flex flex-col items-center">
        {/* Threshold bars (angled) */}
        <div className="flex flex-col items-center space-y-1 mt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`w-12 h-1 bg-white opacity-70 origin-center ${
                i % 2 === 0 ? 'rotate-45' : '-rotate-45'
              }`}
            />
          ))}
        </div>
  
        {/* Runway number */}
        <div className="mt-4 mb-4">
          <p className="text-white font-bold text-4xl tracking-widest opacity-90">01</p>
        </div>
  
        {/* Dashed centerline */}
        <div className="flex flex-col items-center space-y-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-10 bg-white opacity-50 rounded"
            />
          ))}
        </div>
      </div>
    )
  }
  
  export default RunwayStripe;  