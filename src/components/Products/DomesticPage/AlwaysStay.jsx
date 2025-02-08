import React from "react";

export const AlwaysStay = () => {
  return (
    <>
      <div className="relative w-full mt-6 mb-10 pb-14 bg-gradient-to-r from-purple-600 via-pink-300 to-orange-300 rounded-lg flex justify-center items-center pt-6 px-4 md:px-16 lg:px-32 overflow-hidden">
        <div className="flex flex-col justify-center items-center text-center space-y-4 w-full max-w-3xl">
          <div className="text-4xl md:text-5xl font-bold text-white">
            <h1>Always stay in the loop</h1>
          </div>
          <div className="xs:text-xl lg:text-2xl font-manrope text-white">
            <p>
              Keep up with what’s happening at Shiprocket and never miss a
              product update
            </p>
          </div>
          <div className="bg-white w-full max-w-lg rounded-lg text-xl flex justify-between items-center p-2">
            <input
              className="pl-2 flex-1 rounded-lg outline-none"
              type="email"
              placeholder="Enter your e-mail address"
            />
            <button className="bg-purple-400 text-white w-40 py-2 ml-2 rounded-lg">
              I'm in
            </button>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 flex justify-center items-center animate-slideup">
          <div className="opacity-20 bg-gray-100 h-70 w-70 rounded-full"></div>
          <div className="opacity-20 bg-gray-100 h-40 w-40 rounded-full"></div>
        </div>

        {/* CSS Animation */}
        <style>
          {`
            @keyframes slideup {
              0% { transform: translateY(100%); opacity: 1; }
              70% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(-50%); opacity: 0; }
            }
            .animate-slideup {
              animation: slideup 5s linear infinite;
            }
          `}
        </style>
      </div>
    </>
  );
};