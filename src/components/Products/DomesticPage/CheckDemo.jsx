import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export const CheckDemo = () => {
  return (
    <div className="border border-1 border-sky-300 hidden md:flex rounded-lg justify-center items-center gap-3 py-3 bg-sky-100 mx-8 px-3">
      <div>
        <img
          className="w-10"
          src="https://sr-website.shiprocket.in/wp-content/uploads/2023/11/speaker.png"
          alt="speaker"
        />
      </div>
      <div>
        <p className="text-[#0B0757] font-manrope">
          Experience Shiprocket in real-time with our live demo.
          <span className="text-[#0B0757] font-bold">
            {" "}
            Sign-up not required for demo{" "}
          </span>
        </p>
      </div>
      <div className="text-purple-600">
        <Link className="text-white bg-purple-500 px-6 py-2 w-[220px] rounded-lg inline-flex items-center gap-x-2">
          Check Live Demo
          <GoArrowUpRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};
