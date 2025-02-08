import React from "react";
import s1 from "../../assets/images/products/s1.svg";
import s2 from "../../assets/images/products/s2.svg";
import s3 from "../../assets/images/products/s3.svg";
import s4 from "../../assets/images/products/s4.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const offers = [
  { title: "D2C fulfillment", image: s1 },
  { title: "B2B fulfillment", image: s2 },
  { title: "Marketplace fulfillment", image: s3 },
  { title: "Returns management", image: s4 },
];

const OurOffering = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative py-12">
      <h1 className="text-4xl text-blue-950 font-bold mb-12 self-start px-4 md:px-16">
        Our {" "}
        <span className="bg-gradient-to-r from-blue-700 to-sky-300 text-transparent bg-clip-text">
          Offerings
        </span>
      </h1>

      {/* Grid container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center w-64 h-64 bg-blue-100 rounded-lg shadow-2xl transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-white rounded-2xl">
              {/* 3D SVG Effect */}
              <img
                src={offer.image}
                alt={offer.title}
                className="w-80 h-80 -mt-28 drop-shadow-lg transition-transform duration-300 hover:scale-110"
              />

              {/* Offer Title */}
              <span className="flex items-center -mt-10 gap-4 justify-center">
                <Link
                  to="#"
                  className="peer text-center text-sm font-semibold text-gray-700 hover:text-blue-500  "
                >
                  {offer.title}
                </Link>

                {/* Arrow Icon */}
                <FaArrowRight className="hidden text-gray-600 hover:text-blue-500 transition-transform transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:flex peer-hover:-rotate-12" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOffering;
