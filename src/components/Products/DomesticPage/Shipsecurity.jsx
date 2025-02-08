import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import securitybg from "../../../assets/Domestic/securitybg.webp";

export const Shipsecurity = () => {
  return (
    <div className="max-w-full mx-8 pt-6">
      {/* Content Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center mt-6 mb-8 bg-[#F6FFF0] rounded-xl px-8 lg:px-14 pt-12 pb-4">
        
        {/* Image Section - Default: Left | Small screens (sm) par baad me dikhayenge */}
        <div className="order-2 sm:order-2 md:order-1 flex justify-center md:justify-start">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={securitybg}
            alt="Security Background"
          />
        </div>

        {/* Content Section - Default: Right | Small screens (sm) par pehle dikhayenge */}
        <div className="order-1 sm:order-1 md:order-2 space-y-4">
          <h1 className="text-3xl lg:text-5xl">Shipment security cover</h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
            No more processing your return orders manually. Automate them <br />{" "}
            via workflows and remain stress-free.
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
