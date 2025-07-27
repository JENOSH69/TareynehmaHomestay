import { useState } from "react";
import { FaUtensils, FaRupeeSign, FaBed, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import PageHero from "../components/PageHero";

const rooms = [
  {
    id: 1,
    name: "Room 1",
    description: "A cozy room with hillside views and traditional décor.",
    images: ["/ima/Ra.jpeg", "/ima/Rab.jpeg", "/ima/Rac.jpeg"],
    price: 1200,
  },
  {
    id: 2,
    name: "Room 2",
    description: "Comfortable space for two, ideal for quiet evenings.",
    images: ["/ima/Rb.jpeg", "/ima/Rba.jpeg", "/ima/Rbc.jpeg"],
    price: 1200,
  },
  {
    id: 3,
    name: "Room 3",
    description: "Spacious room with natural lighting and warm ambiance.",
    images: ["/ima/Rc.jpeg", "/ima/Rca.jpeg", "/ima/Rcb.jpeg"],
    price: 1200,
  },
];

export default function Rooms({ showHero }) {
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [bookingRoom, setBookingRoom] = useState(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState({});

  const filteredRooms =
    selectedRoom === "All"
      ? rooms
      : rooms.filter((room) => room.name === selectedRoom);

  const openBookingForm = (room) => {
    setBookingRoom(room);
    setFormModalOpen(true);
  };

  const closeBookingForm = () => {
    setFormModalOpen(false);
    setBookingRoom(null);
  };

  const handleImageChange = (roomId, direction, total) => {
    setActiveImageIndexes((prev) => {
      const current = prev[roomId] ?? 0;
      const next =
        direction === "next"
          ? (current + 1) % total
          : (current - 1 + total) % total;
      return { ...prev, [roomId]: next };
    });
  };

  const setImageDirectly = (roomId, index) => {
    setActiveImageIndexes((prev) => ({ ...prev, [roomId]: index }));
  };

  return (
    <>
      {showHero && (
        <PageHero
          pageKey="room"
          title="Our Rooms"
          subtitle="Stay in comfort with us"
        />
      )}

        <section className="bg-[#eceae5] px-4 pt-10 pb-16 sm:px-6 md:px-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#3E3B32] uppercase tracking-wide relative inline-block after:block after:w-20 after:h-[2px] after:bg-[#D2B48C] after:mx-auto after:mt-2">
            Our Rooms
          </h1>
          <p className="mt-2 text-base text-[#3E3B32] font-medium">
            Select a Room
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="border border-[#D2B48C] bg-white text-[#3E3B32] px-5 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          >
            <option value="All">All Rooms</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.name}>
                {room.name}
              </option>
            ))}
          </select>

          <select className="border border-[#D2B48C] bg-white text-[#3E3B32] px-5 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D2B48C]">
            <option>Sort by</option>
            <option>Price</option>
            <option>Name</option>
          </select>
        </div>

        {/* Room Cards */}
        <div className="space-y-8">
          {filteredRooms.map((room) => {
            const activeIndex = activeImageIndexes[room.id] ?? 0;
            return (
              <div
                key={room.id}
               className="max-w-4xl mx-auto bg-white border border-[#ddd] overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Images + Arrows */}
                  <div className="md:w-1/2 relative">
                    <img
                      src={room.images[activeIndex]}
                      alt={room.name}
                      className="w-full h-52 object-cover"
                    />

                    {/* Arrows */}
                    <button
                      onClick={() =>
                        handleImageChange(room.id, "prev", room.images.length)
                      }
                      className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-[#3E3B32]/80 hover:bg-[#3E3B32] p-2"
                    >
                      <FaArrowLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        handleImageChange(room.id, "next", room.images.length)
                      }
                      className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-[#3E3B32]/80 hover:bg-[#3E3B32] p-2"
                    >
                      <FaArrowRight size={20} />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {room.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setImageDirectly(room.id, index)}
                          className={`w-3 h-3 rounded-full ${
                            index === activeIndex
                              ? "bg-black"
                              : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-[#3E3B32] mb-2 uppercase tracking-wide">
                        {room.name}
                      </h2>
                      <p className="text-[#000000] text-base mb-4 leading-relaxed">
                        {room.description}
                      </p>
                      <div className="space-y-2 text-[#3E3B32] text-sm">
                        <div className="flex items-center gap-2">
                          <FaRupeeSign className="text-black" />
                          ₹{room.price} / night
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUtensils className="text-black" />
                          Breakfast, Lunch & Dinner Included
                        </div>
                        <div className="flex items-center gap-2">
                          <FaBed className="text-black" />
                          Cozy Beds with double occupancy
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => openBookingForm(room)}
                        className="bg-[#3E3B32] text-[#D2B48C] px-6 py-2 text-sm font-semibold tracking-wide hover:bg-[#2b2a25] transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {formModalOpen && bookingRoom && (
          <div
            className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center"
            onClick={closeBookingForm}
          >
            <div
              className="bg-white p-6 rounded shadow-md w-[95%] max-w-lg relative"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
              <BookingForm
                roomName={bookingRoom.name}
                onClose={closeBookingForm}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
