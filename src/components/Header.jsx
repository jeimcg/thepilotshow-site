import EchoTitle from './EchoTitle' // Adjust path if needed

const Header = () => {
  return (
    <header className="min-h-[calc(100vh-4rem)] px-6 pt-10 pb-20 text-center flex flex-col items-center justify-center relative">
      <div className="relative inline-block" id="logo-container">
        <EchoTitle />

        {/* optional — keep emoji layered on top */}
        <span className="absolute top-[25%] left-[90%] text-2xl">
        </span>
      </div>
    </header>
  )
}

export default Header;