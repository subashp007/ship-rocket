import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import pickupbg from "../../../assets/Domestic/pickupbg.webp";

export const MultiplePickLoca = () => {
  return (
    <div className="max-w-full mx-8 pt-6 my-12">
      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-18 bg-[#F6FAFE] rounded-xl px-8 lg:px-14 pt-12 pb-14">
        
        {/* Content Section - Appears First on all screen sizes */}
        <div className="order-1 space-y-4">
          <h1 className="text-3xl lg:text-5xl">Multiple pickup locations</h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
            Add multiple pickup addresses to get your products picked up faster
            and shipped real quick.
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className="inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Image Section - Appears Second on all screen sizes */}
        <div className="order-2 flex justify-center md:justify-end">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={pickupbg}
            alt="Pickup Background"
          />
        </div>

      </div>
    </div>
  );
};
