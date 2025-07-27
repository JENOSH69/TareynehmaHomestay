import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Final_logo.svg";

const HamburgerIcon = ({ isOpen }) => (
  <div className="w-6 h-6 relative flex items-center justify-center">
    <motion.span
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 6 : -6,
        backgroundColor: isOpen ? "#3E3B32" : "#D2B48C",
      }}
      className="absolute h-0.5 w-full rounded origin-center"
    />
    <motion.span
      animate={{
        opacity: isOpen ? 0 : 1,
        backgroundColor: isOpen ? "#3E3B32" : "#D2B48C",
      }}
      className="absolute h-0.5 w-full rounded"
    />
    <motion.span
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? -6 : 6,
        backgroundColor: isOpen ? "#3E3B32" : "#D2B48C",
      }}
      className="absolute h-0.5 w-full rounded origin-center"
    />
  </div>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navBackground =
    scrolled || !isHome
      ? "bg-[#eceae5]/90 backdrop-blur-md border-b border-[#dad6cc]"
      : "bg-transparent";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Room", path: "/room" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${navBackground}`}
      >
        <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
          {/* Logo */}
          <img
            src={logo}
            alt="Tareynehma Homestay Logo"
            className="h-16 w-auto md:h-20"
          />

          {/* Hamburger (Mobile) */}
          <button onClick={toggleMenu} className="md:hidden">
            <div className="hover:scale-110 transition-transform duration-300">
              <HamburgerIcon isOpen={menuOpen} />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-[15px] tracking-wide transition-all duration-300 relative after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] ${
                  location.pathname === link.path
                    ? "text-[#3E3B32] after:w-full after:bg-[#D2B48C]"
                    : "text-[#5e5a4e] hover:text-[#3E3B32] after:w-0 hover:after:w-full after:bg-[#D2B48C]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#eceae5] to-[#e7e3da] text-[#3E3B32] z-[9999] flex flex-col"
          >
            {/* Close Icon */}
            <div className="flex justify-end pr-6 pt-8">
              <button onClick={toggleMenu} className="text-2xl text-[#3E3B32]">
                <FaTimes />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-end gap-4 px-8 mt-10 text-right">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className="text-[22px] font-semibold tracking-wide hover:text-[#171614] transition-all duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Icons + Book Now */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex flex-col items-end gap-4 px-8 mb-10 mt-auto"
            >
              <div className="flex gap-4 text-xl text-[#3E3B32]">
                <a
                  href="https://www.facebook.com/share/1JFAaBxteF/?mibextid=wwXIfr"
                  className="hover:text-[#171614]"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/tareynehma"
                  className="hover:text-[#171614]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/917001356966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171614]"
                >
                  <FaWhatsapp />
                </a>
              </div>
              <button
                onClick={() => {
                  toggleMenu();
                  navigate("/booking");
                }}
                className="bg-[#D2B48C] text-[#1F1E1A] px-6 py-2 rounded hover:bg-[#c7a97a] transition"
              >
                Book Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
