import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import businessimg from "../../../assets/Domestic/bussinessbg.webp";

export const ShipRocEcommerce = () => {
  return (
    <div className="mx-8 mt-6">
       {/* Main Heading */}
       <h1 className="text-4xl lg:text-5xl font-semibold mb-12">
        <span className="text-[#0B0757]">
          Skyrocket your eCommerce <br />
          business to{" "}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 via-green-400 to-purple-900">
          new heights
        </span>
      </h1>

    <div className="max-w-full pt-6 mt-12 bg-orange-100 px-8 py-3 rounded-lg">
     

      {/* Content Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center my-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-5xl">Inventory control</h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
            Get real-time inventory insights across channels & automatic sync
            post each sale.
          </p>
          <div className="text-purple-600 text-lg mt-6">
            <Link className="inline-flex items-center gap-x-1">
              Know more
              <GoArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full md:w-[350px] lg:w-[450px] h-auto"
            src={businessimg}
            alt="Business Background"
          />
        </div>
      </div>
    </div>
    </div>
  );
};
