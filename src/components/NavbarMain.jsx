// src/components/NavbarMain.jsx

const NavbarMain = ({ activePage, setActivePage }) => {
    const tabs = [
      { id: 'home', label: 'Home' },
      { id: 'links', label: 'Links' },
      { id: 'music', label: 'Music' },
    ];
  
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-700 text-white">
        <div className="mx-auto flex justify-around py-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePage(tab.id)}
              className={`flex flex-col items-center text-sm transition ${
                activePage === tab.id
                  ? 'text-white font-semibold underline underline-offset-4'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
    );
  };
  
  export default NavbarMain;
  