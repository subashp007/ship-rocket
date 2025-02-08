import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import mapimg from "../../../assets/Domestic/map.webp";

export const Shipping_Map = () => {
  return (
    <div className="max-w-full mx-8 pt-6 mt-30 bg-[#F6FAFE] px-8 py-3 rounded-lg">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 items-center my-8">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-12 ">
            <span className="text-[#0B0757]">One shipping platform </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 via-green-400 to-[#6849EC]">
              to reach everywhere
            </span>
          </h1>
          <p className="text-gray-700 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
            With multiple courier partners at your service and 24000+ pin codes
            within your reach, expanding your customer base never feels like a
            pain.
          </p>
          <h1 className="text-2xl">
            <span>Start shipping</span>
            <span className="font-bold text-purple-600"> @₹20/500gm </span>
            <span>only</span>
          </h1>
          <div className="text-purple-600 text-lg mt-6 ">
            <Link className=" inline-flex items-center gap-x-1">
              View plans
              <GoArrowUpRight className="text-x" />
            </Link>
          </div>
        </div>
        <div className=" flex justify-end">
          <img
            className=" w-[full] h-[full]  md:h-[350px] md:w-[350px] lg:w-[450px] lg:h-[450px] "
            src={mapimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
