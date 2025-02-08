import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Codbg from "../../../assets/Domestic/Codbg.webp";

export const CodRemittance = () => {
  return (
    <div className="max-w-full mx-8 pt-6">
      {/* Responsive Grid Layout */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-8 bg-[#F6FAFE] rounded-xl px-8 lg:px-14 pt-12 pb-14">
        
        {/* Content Section - Appears First on all screen sizes */}
        <div className="order-1 space-y-4">
          <h1 className="text-3xl lg:text-5xl">Early COD remittance</h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
            Get guaranteed COD payments within 2 days* & take better control of
            your cash flow.
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
            src={Codbg}
            alt="COD Background"
          />
        </div>

      </div>
    </div>
  );
};
