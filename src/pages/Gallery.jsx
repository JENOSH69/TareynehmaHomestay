import { useState } from "react";
import Modal from "react-modal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ROOM IMAGES
import Ra from "../assets/Ra.jpeg";
import Rab from "../assets/Rab.jpeg";
import Rac from "../assets/Rac.jpeg";

import Rb from "../assets/Rb.jpeg";
import Rba from "../assets/Rba.jpeg";
import Rbc from "../assets/Rbc.jpeg";

import room3 from "../assets/Rc.jpeg";
import room3a from "../assets/Rca.jpeg";
import room3b from "../assets/Rcb.jpeg";

// OTHER IMAGES
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/food2.jpeg";
import food3 from "../assets/food3.jpeg";

import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";

import place1 from "../assets/place1.jpeg";
import place2 from "../assets/place2.jpeg";
import place3 from "../assets/place3.jpeg";

const galleryData = {
  Rooms: [
    {
      img: Ra,
      images: [Ra,Rab,Rac],
      title: "Room 1 - Valley View",
      description: "Scenic valley views with sunrise through the windows.",
    },
    {
      img: Rb,
      images: [Rb, Rba,Rbc],
      title: "Room 2 - Garden Facing",
      description: "Overlooks our serene garden with flowering plants.",
    },
    {
      img: room3,
      images: [room3, room3a, room3b],
      title: "Room 3 - Mountain View",
      description: "Panoramic mountain vistas perfect for sunsets.",
    },
  ],
  Events: [event1, event2, event3],
  Food: [food1, food2, food3],
  "Nearby Places": [place1, place2, place3],
};

Modal.setAppElement("#root");

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Rooms");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (images, index) => {
    setModalImages(images);
    setActiveIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  return (
    <section className="bg-[#fdf8f0] py-20 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-[#3E3B32] uppercase tracking-widest">
          Gallery
        </h2>
        <p className="text-[#3E3B32] mt-2 font-medium text-sm">Explore Our Moments</p>
      </div>

      {/* Category Tabs */}
      <div className="relative flex flex-wrap justify-center gap-6 mb-10 border-b border-[#D2B48C]">
        {Object.keys(galleryData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative pb-2 text-sm md:text-base font-bold transition-all duration-300 ${
              activeCategory === category
                ? "text-[#3E3B32]"
                : "text-[#3E3B32]/70 hover:text-[#3E3B32]"
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D2B48C]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Gallery Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeCategory === "Rooms"
          ? galleryData.Rooms.map((room, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.02] transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                onClick={() => openModal(room.images, 0)}
              >
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-[#3E3B32]">
                  <h3 className="font-semibold text-lg">{room.title}</h3>
                  <p className="text-sm mt-1 text-[#3E3B32]/80">{room.description}</p>
                </div>
              </motion.div>
            ))
          : galleryData[activeCategory].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`Gallery ${index}`}
                onClick={() => openModal(galleryData[activeCategory], index)}
                className="w-full h-60 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ))}
      </div>

      {/* Modal Viewer */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-lg p-4 max-w-xl w-[90%] outline-none"
        overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      >
        <AnimatePresence>
          <div className="relative">
            <img
              src={modalImages[activeIndex]}
              alt="Preview"
              className="w-full h-[300px] object-cover rounded"
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[#3E3B32] hover:text-[#D2B48C] p-2"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#3E3B32] hover:text-[#D2B48C] p-2"
            >
              <FaChevronRight size={24} />
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-[#3E3B32] hover:text-[#D2B48C] font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </AnimatePresence>
      </Modal>
    </section>
  );
}
