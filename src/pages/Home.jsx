import Header from '../components/Header';

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center text-center pb-20">
      <Header />

      {/* Content */}
      <div className="mt-10 px-6">
        <p className="text-zinc-400 text-base max-w-md mb-6">
          Curated hustle. Collector. Creator. CEO.  
          Welcome to the official platform of the grind.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Home;
