import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import PageHero from "../components/PageHero";

export default function About({ showHero = false }) {
  return (
    <>
      {showHero && (
        <PageHero
          pageKey="about"
          title="About Us"
          subtitle="Get to know our homestay"
        />
      )}

      <section className="w-full bg-[#ffffff] py-20 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl text-center"
        >
          <div className="flex justify-center mb-6">
            <FaLeaf className="text-[#D2B48C] text-4xl" />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#3E3B32] mb-6">
            About Us
          </h2>

          <p className="text-lg md:text-xl text-[#3E3B32] leading-relaxed font-light">
            <span className="font-semibold text-black">Tareynehma</span> is a
            beautiful word from the Limboo language, where “Tarey” means guest
            and “Nehma” means to stay. Together, it lovingly translates to{" "}
            <span className="italic text-black">“a home for guests.”</span>
            <br />
            <br />
            Nestled in the serene village of Darap in West Sikkim, Tareynehma
            offers more than just a place to stay. It’s a peaceful retreat
            surrounded by nature, rich traditions, and the warmth of heartfelt
            local hospitality.
            <br />
            <br />
            Whether you’re seeking rest, rejuvenation, or a deeper connection
            with Sikkimese culture, you’ll find it here where every guest is
            welcomed like family.
            <br />
            <br />
            <span className="font-semibold text-black">
              Come as a guest, leave as family.
            </span>{" "}
            Tareynehma is your home away from home, lovingly run by our family,
            for yours.
          </p>
        </motion.div>
      </section>
    </>
  );
}
