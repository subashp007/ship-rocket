import React from "react";

export const TopOffer = () => {
  return (
    <div className="px-8 hidden md:flex md:text-sm lg:text-base rounded-lg justify-center items-center gap-3 bg-gradient-to-r from-purple-400 via-purple-200 to-orange-200 py-1">
      <div>
        <img
          className="w-8"
          src="https://sr-website.shiprocket.in/wp-content/uploads/2023/11/speaker.png"
          alt=""
        />
      </div>
      <div>
        <p className="text-sm text-[#0B0757] font-bold font-manrope">
          Recharge Now for
          <span className="text-[#0B0757] font-extrabold"> ₹1000 </span>& Get
          <span className="text-[#0B0757] font-extrabold"> ₹1600* </span>
          In Your Wallet. Use Code:
          <span className="text-[#0B0757] font-extrabold"> FLAT600 </span> |
          Limited Period Offer On First Recharge
        </p>
      </div>
      <div className="space-x-2 space-y-2 lg:space-y-0 text-sm">
        <button className="border-b-1 space-x-1 text-[#0B0757]">
          *T&C Apply.
        </button>
        <button className="bg-white border border-purple-700 px-1 py-1 rounded-lg">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};
