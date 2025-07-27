import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b border-[#f4c95d] pb-2 inline-block">
            Get in Touch
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaFacebookF className="text-[#f4c95d] text-lg" />
              <a
                href="https://www.facebook.com/share/1JFAaBxteF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                facebook.com/tareynehmahomestay
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-[#f4c95d] text-lg" />
              <a
                href="https://www.instagram.com/tareynehma?igsh=MThsaTVuMnphOGZrag%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @tareynehma_homestay
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-[#f4c95d] text-lg" />
              <a href="mailto:sodunghangsubba@gmail.com" className="hover:underline">
                tareynehmahomestay@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#f4c95d] text-lg" />
              <a href="tel:+917001356966" className="hover:underline">
                +91 7001356966
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="text-sm text-gray-300">
          <h3 className="text-lg font-semibold mb-4 border-b border-[#f4c95d] pb-2 inline-block">
            Location
          </h3>
          <p>Darap Village, West Sikkim - 737113</p>
          <p className="mt-2">Open: All Days</p>
        </div>

        {/* Map Embed (Optional) */}
        <div className="text-sm text-gray-300">
          <h3 className="text-lg font-semibold mb-4 border-b border-[#f4c95d] pb-2 inline-block">
            Find Us
          </h3>
          <iframe
            title="Tareynehma Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.2392197004347!2d88.18400997490883!3d27.30631064306627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e68794d2d632cf%3A0x83a4cf1ff96b7b7a!2sTareynehma!5e1!3m2!1sen!2sin!4v1753579682763!5m2!1sen!2sin"
            width="100%"
            height="150"
            className="rounded-md border border-[#f4c95d]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Tareynehma Homestay. All rights reserved.</p>
        <p className="mt-1">Website designed by Jenosh Limboo</p>
      </div>
    </footer>
  );
}
