import { useEffect } from "react";
import "../animations/plane.css";
import planeImg from "/plane.svg"; // or adjust path if needed

const Header = () => {
  useEffect(() => {
    const flyPlane = () => {
      const plane = document.getElementById("plane");
      if (plane) {
        plane.classList.add("fly-around");
        setTimeout(() => {
          plane.classList.remove("fly-around");
        }, 5000); // match animation duration
      }
    };

    flyPlane(); // run on mount
    const interval = setInterval(flyPlane, 69000); // repeat every 69s

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <header className="min-h-[calc(100vh-4rem)] px-6 pt-10 pb-20 text-center flex flex-col items-center justify-center relative">
      <div className="relative inline-block" id="logo-container">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2 z-10 relative">
          The Pilot Show™
        </h1>
        <img
          src={planeImg}
          alt="Plane"
          id="plane"
          className="plane-orbit-animation"
        />
      </div>
    </header>
  );
};

export default Header;
