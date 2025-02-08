import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import bgGrid from "../../assets/images/innovations/grid.svg";
import devIcon from "../../assets/images/integrations/devIcon.svg";

// Define the technologies array
const technologies = [
  "React",
  "Laravel",
  "Angular",
  "Plugins",
  "GenAI",
  "NODE JS",
  "PHP",
  "Tools",
];

const integrations = [
  {
    title: "Integrations",
    desc: "Discover a wide range of SDKs, plugins, and server integration options",
  },
  {
    title: "API reference",
    desc: "In-depth resources to help you create seamless and powerful solutions",
  },
  {
    title: "Webhooks",
    desc: "Stay updated with real-time alerts for all activities and events",
  },
];

function Developers() {
  return (
    <div
      className="bg-black opacity-90 py-12 space-y-8 relative"
      style={{ backgroundImage: `url(${bgGrid})`, backgroundSize: "cover" }}
    >
      {/* Title Section */}
      <div className="text-left px-4">
        <h1 className="text-[28px] md:text-5xl md:font-bold text-white">
          Engineered for {" "}
          <span className="text-amber-300">Developers</span>
        </h1>
        <p className="text-zinc-400 mt-2 text-lg md:text-xl max-w-2xl">
          Our advanced integrations consolidate business operations, making them
          smoother and more efficient.
        </p>
      </div>

      {/* Integrations Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="flex items-start space-x-4 p-4">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <img src={devIcon} alt="devIcon" className="w-10 h-10" />
                <h1 className="text-yellow-300 text-xl md:text-2xl">
                  {integration.title}
                </h1>
              </div>
              <p className="text-white text-sm md:text-base mt-1">
                {integration.desc}
              </p>
              {/* Documentation Button */}
              <div className="flex justify-center md:justify-start"></div>
              <button className="group text-white rounded-lg flex items-center transition-all duration-300 cursor-pointer">
                Access Documentation
                <BsArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Technologies Marquee Animation */}
      <div className="relative  z-10 flex items-center justify-between  gap-8 bg-yellow-300 py-8 bg-cover overflow-hidden">
        {technologies.map((tech, index) => (
          <div key={index} className="relative group animate-marquee-dev">
            {/* Service pill with rotation */}
            <div
              className="relative w-52 z-10 flex items-center gap-2 px-4 py-1 bg-transparent text-white rounded-full border border-black transition-all duration-300 hover:-rotate-3 hover:bg-white hover:text-black cursor-pointer"
              style={{ transformOrigin: "left center" }}
            >
              <FaCircleCheck className="fill-black w-8 h-8 -ml-3" />
              <span className="inline-block">{tech}</span>
            </div>

            {/* Black background div with infinite sliding animation */}
            <div className="absolute inset-0 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developers;
