// src/pages/Splash.jsx

const Splash = ({ setActivePage }) => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      {/* Quote */}
      <p className="text-zinc-400 text-center text-sm mb-6 px-4">
        “You Gotta Get To It, Instead of Getting Thru It”
      </p>

      {/* ENTER button */}
      <button
        onClick={() => setActivePage('home')}
        className="text-lg tracking-widest uppercase bg-white text-black px-8 py-4 rounded-lg shadow-lg hover:scale-105 hover:bg-zinc-200 transition"
      >
        Enter
      </button>

      {/* Signature */}
      <div className="absolute bottom-4 right-4 text-xs text-zinc-500 italic">
        — PilotBoyd & Jei
      </div>
    </div>
  );
};

export default Splash;
