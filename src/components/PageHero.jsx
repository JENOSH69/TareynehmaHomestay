import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

// Images
import guest1 from "../assets/G1.jpeg";
import guest2 from "../assets/G4.jpeg";
import guest3 from "../assets/G5.jpeg";
import guest4 from "../assets/G2.jpeg";
import guest5 from "../assets/G3.jpeg";
import Ra from "../assets/Ra.jpeg";
import Rab from "../assets/Rab.jpeg";
import Rb from "../assets/Rb.jpeg";
import Rba from "../assets/Rba.jpeg";
import Rc from "../assets/Rc.jpeg";
import Rca from "../assets/Rca.jpeg";


const pageImages = {
  about: [guest1, guest2,guest3,guest4,guest5],
  room: [Ra,Rab,Rb,Rba,Rc,Rca],
  roome: [Rb,Rba,Rc,Rca],
};

export default function PageHero({
  pageKey = "rooms",
  title = "Rooms",
  subtitle = "",
  overlayColor = "bg-gradient-to-t from-black/70 via-black/50 to-transparent",
  showIcon = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = pageImages[pageKey] || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[65vh] md:min-h-[75vh] pt-28 pb-12 flex justify-center items-center overflow-hidden bg-[#fdf8f0]">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`${title} Banner`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className={`absolute inset-0 z-10 ${overlayColor}`} />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 animate-fade-in-up">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xl"
        >
          {showIcon && (
            <FaLeaf className="text-white text-3xl mb-2 drop-shadow-lg" />
          )}
          <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest border-b border-white pb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white text-base md:text-lg mt-2">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
