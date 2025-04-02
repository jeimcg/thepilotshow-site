import SignatureQuote from '../components/SignatureQuote'

const Splash = ({ setActivePage }) => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      {/* ENTER button in center */}
      <button
        onClick={() => setActivePage('home')}
        className="text-lg tracking-widest uppercase bg-white text-black px-8 py-4 rounded-lg shadow-lg hover:scale-105 hover:bg-zinc-200 transition"
      >
        Enter
      </button>

      {/* Bottom Quote + Signature (as one component) */}
      <SignatureQuote />
    </div>
  );
};

export default Splash;
