import React from "react";
import icon1 from "../../../assets/Domestic/partner1.webp";
import icon2 from "../../../assets/Domestic/partner2.webp";
import icon3 from "../../../assets/Domestic/partner3.png";
import icon4 from "../../../assets/Domestic/partner4.png";
import icon5 from "../../../assets/Domestic/partner5.png";
import icon6 from "../../../assets/Domestic/partner6.webp";
import icon7 from "../../../assets/Domestic/partner7.webp";


export const TrustedBy = () => {
  const topimg = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];
  // const middimg = [icon5, icon6, icon7];

  return (
    <div className="max-w-full mx-8 mt-30 mb-12"> 
      
      <h1 className="xs:text-5xl sm:text-6xl mb-4">
        <span className="text-[#0B0757]">Trusted by </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 via-green-400 to-purple-900">
          250000+
        </span>
        <span className="text-[#0B0757]"> eCommerce businesses</span>
      </h1>

      <div className="bg-[#F6F4FD]">
        {/* slider box */}
        <div className="flex flex-col items-center gap-2.5 overflow-hidden xs:p-3 md:px-8 py-5">
          {/* topimg */}
          <div className="flex justify-between items-center w-full ">
            {topimg.concat(topimg).map((Img, i) => (
              <img
                key={i}
                src={Img}
                alt="partner"
                className={`xs:w-40 xs:h-40 sm:w-55 sm:h-55 md:w-50 md:h-40 animate-slideleft ${
                  i % 2 === 0 ? "mt-16" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
        @keyframes slideleft {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        .animate-slideleft {
            animation: slideleft 4s linear infinite;
        }
    `}
      </style>
    </div>
  );
};
