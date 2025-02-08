import React from "react";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { GrApple } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";
import pocketappbg from "../../../assets/Domestic/pocketappbg.webp";

export const AppPocket = () => {
  return (
    <div className="max-w-full px-4 sm:px-8 my-14">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-tl from-pink-100 via-purple-100 to-yellow-100 rounded-xl px-6 sm:px-12 py-12">
        
        {/* Content Section - Appears First on all screens */}
        <div className="order-1 space-y-4 xs:pl-12 md:pl-0">
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-[#0B0757]">It's all in your</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 to-[#6849EC]">
              pocket
            </span>
          </h1>

          <div className="space-y-3 grid">
            <p className="inline-flex items-center gap-x-1 text-[#0B0757] text-lg tracking-tight font-TWKLausanne">
              <IoMdCheckmark /> Process shipments in a flash
            </p>
            <p className="inline-flex items-center gap-x-1 text-[#0B0757] text-lg tracking-tight font-TWKLausanne">
              <IoMdCheckmark /> Download documents in a tap
            </p>
            <p className="inline-flex items-center gap-x-1 text-[#0B0757] text-lg tracking-tight font-TWKLausanne">
              <IoMdCheckmark /> View shipping analytics on the go
            </p>
          </div>

          {/* Store Buttons */}
          <div className="grid xs:grid-cols-1  sm:grid-cols-2 items-start  font-bold mt-6 mb-3 space-y-3">
            <Link className="flex items-center gap-x-2 px-6 py-3 rounded-lg bg-white shadow-lg  w-40 lg:w-56 justify-center">
              <GrApple />
              App Store
            </Link>
            <Link className="flex items-center gap-x-2 px-6 py-3 rounded-lg bg-white shadow-lg xs:w-42 sm:w-44 lg:w-56 justify-center">
              <BiLogoPlayStore />
              Google Play
            </Link>
          </div>
        </div>

        {/* Image Section - Appears Second on all screens */}
        <div className="order-2 flex justify-center md:justify-end">
          <img
            className="w-[80%] sm:w-[60%] md:w-[450px] lg:w-[500px] xl:w-[520px] h-auto"
            src={pocketappbg}
            alt="Pocket App"
          />
        </div>
      </div>
    </div>
  );
};
