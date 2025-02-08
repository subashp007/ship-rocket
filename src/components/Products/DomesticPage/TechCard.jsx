import React from "react";
import { Data } from "./Techdata.js";
import { GoArrowUpRight } from "react-icons/go";
export const TechCard = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-x-1 mb-5 space-y-5 ">
      {Data.map((data, i) => {
        return (
          <div key={i} className="space-y-3  p-4 ">
            <img
              className="w-14 h-14 object-contain" // Ensure consistent image size
              src={data.tech}
              alt="img"
            />
            <h2 className="text-[#0B0757] font-TWKLausanne text-xl ">
              {data.facility}
            </h2>
            <p className="text-gray-800 font-manrope text-md  flex-grow">
              {data.desc}
            </p>
            <div className="text-purple-500 text-xl">
              <button className="cursor-pointer inline-flex items-center gap-x-1">
                Learn More
                <GoArrowUpRight />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
