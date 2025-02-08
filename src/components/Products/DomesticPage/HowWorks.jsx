import React from "react";
import { Link } from "react-router-dom";
import { WorkCard } from "./WorkCard";

export const HowWorks = () => {
  return (
    <>
      <div className="max-w-full mx-8 pt-6 mt-10">
        <div className=" flex-row space-y-5  lg:flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-6xl text-[#0B0757]">How it works</h1>
            <p className="md:text-xl text-gray-500 font-Manrope">
              Shiprocket simplifies online shipping right from shipment creation
              to <br />
              delivery, providing real-time tracking updates at every stage
            </p>
          </div>
          <div>
            <Link className="bg-purple-500 text-white px-10 py-3 rounded-lg">
              Start Shipping
            </Link>
          </div>
        </div>

        {/* card  */}
        <WorkCard />
      </div>
    </>
  );
};
