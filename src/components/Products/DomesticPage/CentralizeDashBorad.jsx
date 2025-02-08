import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import centradashbg from "../../../assets/Domestic/centraDashbg.webp";

export const CentralizeDashBorad = () => {
  return (
    <div className="max-w-full mx-8 pt-6">
      {/* Content Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-6 mb-8 bg-[#FCF3ED] rounded-xl px-8 lg:px-14 pt-12 pb-8">
        
        {/* Image Section - Default: Left | Small screens (sm) will show it second */}
        <div className="order-2 sm:order-2 md:order-1 flex justify-center md:justify-start">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={centradashbg}
            alt="Centralized Dashboard"
          />
        </div>

        {/* Content Section - Default: Right | Small screens (sm) will show it first */}
        <div className="order-1 sm:order-1 md:order-2 space-y-4">
          <h1 className="text-3xl lg:text-5xl">Centralised dashboard</h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
            Analyse performance for your orders, shipments, NDR, <br /> and RTO on the go.
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
