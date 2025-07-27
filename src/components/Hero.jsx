import TypedText from "./TypedText";
import heroBg from "../assets/tareynehmabg.jpeg";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("about-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Tareynhema Homestay"
    className="absolute inset-0 w-full h-full object-cover z-0"

/>

      {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-2 text-[#ffffff]">
         Tareynhema Homestay
        </h1>

        <p className="text-base md:text-xl font-thin text-white/80 mb-4">
          <TypedText />
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-4 flex-wrap justify-center">
          <Link
            to="/room"
            className="px-6 py-3 text-sm md:text-base bg-transparent text-white border border-white hover:bg-white hover:text-[#3E3B32] transition-all rounded-md"
          >
             Our Rooms
          </Link>
          <a
            href="https://wa.me/917001356966?text=Hi%20Tareynhema%2C%20I%20would%20like%20to%20book%20a%20room"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm md:text-base bg-transparent text-white border border-white hover:bg-white hover:text-[#3E3B32] transition-all rounded-md "
          >
            Book Now
          </a>
        </div>

        {/* Smooth Down Arrow */}
        <div
          onClick={handleScroll}
          className="mt-12 cursor-pointer animate-bounce text-[#ffffff] text-3xl hover:scale-110 transition"
        >
          <FaArrowDown />
        </div>
      </div>
    </section>
  );
}
