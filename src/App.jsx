import { useState } from 'react';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Links from './pages/Links';
import Music from './pages/Music';
import NavbarMain from './components/NavbarMain';

function App() {
  const [activePage, setActivePage] = useState('splash');

  const renderPage = () => {
    switch (activePage) {
      case 'splash':
        return <Splash setActivePage={setActivePage} />;
      case 'home':
        return <Home />;
      case 'links':
        return <Links />;
      case 'music':
        return <Music />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <main>{renderPage()}</main>
      {/* Don't show navbar on splash screen */}
      {activePage !== 'splash' && (
        <NavbarMain activePage={activePage} setActivePage={setActivePage} />
      )}
    </div>
  );
}

export default App;

