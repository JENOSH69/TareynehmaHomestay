import React from "react";
import foodBanner from "../assets/foodta.jpeg";

export default function FoodSection() {
  return (
    <section className="bg-[#eceae5] py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
          <img
            src={foodBanner}
            alt="Traditional Sikkimese Food"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-[#3E3B32]">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 relative inline-block">
            Pure Vegetarian Meals
            <span className="block h-[2px] w-20 bg-[#D2B48C] mt-2" />
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            At <strong>Tareynehma Homestay</strong> in the serene village of Darap, West Sikkim, we
            proudly serve wholesome, <strong>pure vegetarian meals</strong> prepared with love.
            Enjoy locally sourced <strong>organic ingredients</strong> and traditional Sikkimese
            flavors, all cooked fresh in a peaceful and welcoming environment.
          </p>
        </div>
      </div>
    </section>
  );
}
