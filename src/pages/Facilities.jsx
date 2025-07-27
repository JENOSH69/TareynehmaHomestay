import {
  Phone,
  Mail,
  MapPin,
  Wifi,
  ParkingCircle,
  ShowerHead,
  Car,
  Clock,
  Utensils,
  MessageCircle,
} from "lucide-react";

import homeImage from "../assets/K1.jpeg";

export default function Facilities() {
  return (
    <div className="bg-white text-black pb-10">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#171614] uppercase text-center pt-10 mb-6 relative w-fit mx-auto">
        Our Facilities
        <span className="block h-[2px] w-20 bg-[#D2B48C] mt-2 mx-auto" />
      </h2>

      {/* Top Image */}
      <img
        src={homeImage}
        alt="Tarayenhma Facilities"
        className="w-full h-[220px] object-cover mb-10"
      />

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Enquire Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#171614] uppercase mb-4 relative w-fit">
              Enquire
              <span className="block h-[2px] w-12 bg-[#D2B48C] mt-1" />
            </h3>
            <ul className="space-y-3 text-sm">
              <InfoItem icon={<MapPin size={16} />} text="Darap, West Sikkim Near Petrol Pump" />
              <InfoItem icon={<Phone size={16} />} text="+91 7001356966" />
              <InfoItem icon={<Mail size={16} />} text="tareynehmahomestay@gmail.com" />
              <InfoItem icon={<MessageCircle size={16} />} text="+91 7001356966" />
            </ul>
          </div>

          {/* Amenities Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#171614] uppercase mb-4 relative w-fit">
              Our Amenities
              <span className="block h-[2px] w-12 bg-[#D2B48C] mt-1" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Facility icon={<Utensils size={18} />} label="Restaurant" />
              <Facility icon={<ParkingCircle size={18} />} label="Free Parking" />
              <Facility icon={<Wifi size={18} />} label="Wi-Fi" />
              <Facility icon={<ShowerHead size={18} />} label="Geyser in Rooms" />
              <Facility icon={<Car size={18} />} label="Sightseeing Car" />
              <Facility icon={<Clock size={18} />} label="24-Hour Help" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, text }) {
  return (
    <li className="flex items-center gap-2 text-[#3E3B32]">
      <span className="text-[#D2B48C]">{icon}</span>
      {text}
    </li>
  );
}

function Facility({ icon, label }) {
  return (
    <div className="flex items-center gap-4 border border-[#e0e0e0] bg-white p-4 rounded-xl">
      <div className="text-[#D2B48C]">{icon}</div>
      <span className="text-sm text-[#3E3B32] font-medium">{label}</span>
    </div>
  );
}
