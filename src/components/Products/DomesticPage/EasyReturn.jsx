import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import returnbg from "../../../assets/Domestic/Returnbg.webp";

export const EasyReturn = () => {
  return (
    <div className="max-w-full mx-8 pt-6">
      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-6 mb-8 bg-[#F7E9F6] rounded-xl px-8 lg:px-14 pt-12 pb-8">
        
        {/* Image Section - Appears Second on small screens (sm) */}
        <div className="order-2 sm:order-2 md:order-1 flex justify-center md:justify-start">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={returnbg}
            alt="Easy Returns Background"
          />
        </div>

        {/* Content Section - Appears First on small screens (sm) */}
        <div className="order-1 sm:order-1 md:order-2 space-y-4 ml-2 md:ml-8">
          <h1 className="text-3xl lg:text-5xl">Easy returns</h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 font-TWKLausanne">
            Simplify returns by accepting them through your tracking page <br />
            and process refunds instantly.
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className="inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
