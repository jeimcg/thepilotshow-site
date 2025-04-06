const RunwayStripe = () => {
    return (
      <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 z-0 flex flex-col justify-center items-center space-y-2 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-full h-11 bg-yellow-400 rounded-sm opacity-15" />
        ))}
      </div>
    )
  }
  
  export default RunwayStripe;
  