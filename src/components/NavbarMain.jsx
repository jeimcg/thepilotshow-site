import { Home, Link, Library, Image as ImageIcon, User } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const NavbarMain = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'links', label: 'Links', icon: Link },
    { id: 'music', label: 'Music', icon: Library },
    { id: 'photos', label: 'Photos', icon: ImageIcon },
    { id: 'aboutme', label: 'About Me', icon: User }, // ← NEW TAB
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-sm border-t border-zinc-800 shadow-inner rounded-t-xl">
      <div className="mx-auto flex justify-around py-3 px-4">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = location.pathname === `/${id}`

          return (
            <button
              key={id}
              onClick={() => navigate(`/${id}`)}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-md transition-all duration-150 ${
                isActive
                  ? 'text-white scale-105'
                  : 'text-zinc-400 hover:text-white hover:scale-105'
              } active:scale-95`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.6 : 1.6} />
              <span className="text-[11px] font-medium tracking-wide">
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default NavbarMain;
