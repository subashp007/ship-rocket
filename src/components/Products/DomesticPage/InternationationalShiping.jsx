import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Internatishipbg from "../../../assets/Domestic/Internatishipbg.webp";

export const InternationalShipping = () => {
  return (
    <div className="max-w-full mx-8 pt-6">
      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-6 mb-8 bg-[#FFFBE8] rounded-xl px-8 lg:px-14 pt-12 pb-8">
        
        {/* Content Section - Appears First on small screens (sm) */}
        <div className="order-1 sm:order-1 md:order-1 space-y-4">
          <h1 className="text-3xl lg:text-5xl">International shipping</h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 font-TWKLausanne">
            Ship across the border to 220+ countries and territories with <br />
            end-to-end support.
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className="inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Image Section - Appears Second on small screens (sm) */}
        <div className="order-2 sm:order-2 md:order-2 flex justify-center md:justify-end">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={Internatishipbg}
            alt="International Shipping"
          />
        </div>

      </div>

      {/* Centered Button Below the Section */}
      <div className="text-center py-10">
        <button className="px-6 py-3 rounded-xl bg-purple-500 text-white text-lg">
          Start shipping
        </button>
      </div>

    </div>
  );
};
