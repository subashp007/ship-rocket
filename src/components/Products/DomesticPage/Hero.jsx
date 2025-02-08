import React from "react";
import bgimg from "../../../assets/Domestic/domesbg.webp";

export const Hero = () => {
  return (
    <div className="grid sm:grid-row md:grid-cols-2 items-center px-8 my-28">
      <div>
        <h1 className=" text-5xl md:text-6xl lg:text-7xl font-semibold mb-12">
          <span>The </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 via-green-400 to-[#6849EC]">
            simplest
          </span>
          <span className="text-[#0B0757]"> way to ship online orders</span>
        </h1>

        <p className="text-gray-600 text-lg tracking-tight py-2 mx-2 font-TWKLausanne">
          Our easy-to-use eCommerce shipping platform automates your <br />
          workflows across sales channels, saving you time as well as money.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 space-y-2 gap-x-4 md: mt-3">
          <button className="bg-purple-500 hover:bg-white hover:text-purple-600 hover:border-purple-600 hover:transition hover:duration-300 text-white rounded-md border py-2 px-6 w-full h-[40px] ">
            Get Started
          </button>
          <button className="bg-white text-purple-500 rounded-md border py-2 px-6 w-full h-[40px]">
            Check Live Demo
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img className="w-[500px] h-[320px]" src={bgimg} alt="" />
      </div>
    </div>
  );
};
