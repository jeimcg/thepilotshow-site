const Header = () => {
  return (
    <header className="min-h-[calc(100vh-4rem)] px-6 pt-10 pb-20 text-center flex flex-col items-center justify-center relative">
      <div className="relative inline-block" id="logo-container">
        <h1 className="text-4xl font-bold spacing text-blue-500 dark:text-[#0837F5] tracking-tight mb-2 z-10 relative">
          The Pilot <span className="inline-block">✈️how</span>
        </h1>
      </div>
    </header>
  )
}

export default Header;