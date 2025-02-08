import React from "react";
import bgImage from "../../assets/images/backgrounds/aiBg.webp";
import bgGrid from "../../assets/images/innovations/grid.svg";
import ai1 from "../../assets/images/innovations/ai-1.webp";
import ai2 from "../../assets/images/innovations/ai-2.webp";
import { BsArrowRight } from "react-icons/bs";

const innovations = [
  {
    title: "Sense",
    desc: "Our advanced AI-driven API refines field operations, reduces Return to Origin (RTO) rates, and improves delivery accuracy with verified addresses and autofill checkout. With precise, automated data integration, we enhance customer experience, reduce cart abandonment, and streamline the shopping process.",
    image: ai1,
  },
  {
    title: "Trends",
    desc: "Successful eCommerce businesses need in-depth insights into market intelligence, industry trends, and consumer behaviour to stay ahead of the curve. Our AI-powered platform, TRENDS, offers market data tailored to your specific filtering criteria. Harness its power to drive business growth and outperform the competition.",
    image: ai2,
  },
];

function Innovations() {
  return (
    <div
      className="relative h-fit w-full flex flex-col py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${bgGrid})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-black opacity-90"></div>
      {/* Heading */}
      <h1 className="relative z-10 text-3xl w-2/5 text-start sm:text-4xl md:text-5xl font-bold text-white mb-8">
        <span className="text-yellow-300">AI</span> Powered Innovations
      </h1>

      {/* Innovations Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {innovations.map((innovation, index) => (
          <div
            key={index}
            className="flex flex-col-reverse md:flex-row items-center bg-zinc-700 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Text Content */}
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">
                {innovation.title}
              </h2>
              <p className="text-gray-100">{innovation.desc}</p>
              <button className="w-fit text-white py-2 flex items-center hover:text-zinc-300 cursor-pointer">
                Know More <BsArrowRight className="ml-2 mt-1" />
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
              <img
                src={innovation.image}
                alt={innovation.title}
                className="w-full h-auto max-h-64 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Innovations;
