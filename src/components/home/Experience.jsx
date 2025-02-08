import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import ex1 from "../../assets/images/experiences/Desktop.webp";
import ex2 from "../../assets/images/experiences/demo-img-v-1.webp";
import ex3 from "../../assets/images/experiences/demo-img-v-3.webp";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Engage 360",
    desc: "Strengthen your marketing impact with our AI-powered, WhatsApp-focused tool: an automated, data-driven, and fully customizable solution that enhances customer communications for improved engagement and higher sales. Watch the demo to see it in action.",
    image: ex1,
    background: "#b9fd7d",
  },
  {
    title: "Shipping",
    desc: "Explore our detailed demo to see how our comprehensive shipping services and solutions can streamline and elevate your logistics operations. We serve 19,000+ unique pin codes nationwide and reach over 220 countries and territories globally, helping you scale exponentially.",
    image: ex2,
    background: "#fdd47d",
  },
  {
    title: "Checkout",
    desc: "Elevate your customers' shopping experience with our one-click, smooth checkout solution. Designed to reduce checkout time to under 40 seconds, it significantly reduces cart abandonment rate and elevates the online shopping experience. Watch the demo to know better.",
    image: ex3,
    background: "#ab8efd",
  },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(1);

  // Variants for Framer Motion
  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 3, opacity: 1 },
    left: { x: "-100%", scale: 0.8, zIndex: 1, opacity: 0.7 },
    right: { x: "100%", scale: 0.8, zIndex: 1, opacity: 0.7 },
  };

  // Determine the position of each card based on the active index
  const getCardPosition = (index) => {
    if (index === activeIndex) return "center";
    if (index < activeIndex) return "left";
    return "right";
  };

  return (
    <div
      className="flex flex-col space-y-8 p-4 md:p-14 items-center justify-center font-TWKLausanne"
      style={{
        backgroundImage:
          "linear-gradient(360deg, rgba(226,155,100,1) 0%, rgba(133,99,174,1) 35%, rgba(9,218,220,1) 57%, rgba(230,241,244,1) 87%)",
      }}
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl w-full md:w-2/3 text-left md:text-center md:font-medium">
        Experience Shiprocket Products Through Live Demos
      </h1>

      {/* Buttons */}
      <ul className="flex text-center items-center justify-evenly w-full md:w-1/2 rounded-full border border-zinc-300 shadow-xl p-2 md:p-4 mb-12">
        <li className="w-28 md:w-40 rounded-full hover:bg-black px-2 md:px-4 py-1 md:py-2 hover:text-white">
          <button onClick={() => setActiveIndex(0)}>Engage 360</button>
        </li>
        <li className="w-28 md:w-40 rounded-full hover:bg-black px-2 md:px-4 py-1 md:py-2 hover:text-white">
          <button onClick={() => setActiveIndex(1)}>Shipping</button>
        </li>
        <li className="w-28 md:w-40 rounded-full hover:bg-black px-2 md:px-4 py-1 md:py-2 hover:text-white">
          <button onClick={() => setActiveIndex(2)}>Checkout</button>
        </li>
      </ul>

      {/* Slider Container */}
      <div className="w-full max-w-6xl font-manrope flex items-center justify-center overflow-hidden relative h-[400px]">
        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`absolute flex flex-col md:flex-row items-center bg-white w-[280px] md:w-[800px] h-auto md:h-[400px] rounded-lg shadow-lg overflow-hidden px-4 md:px-6`}
            initial={getCardPosition(index)}
            animate={getCardPosition(index)}
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Text Content */}
            <div className="p-4 md:p-6 flex-1">
              <h2 className="text-xl md:text-2xl text-gray-800 mb-2 md:mb-4">
                {experience.title}
              </h2>
              <p className="text-sm md:text-base font-extrathin text-gray-400 mb-4 md:mb-8">
                {experience.desc}
              </p>
              <button className="w-fit text-white py-1 md:py-2 px-3 md:px-5 rounded-lg flex items-center border border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 cursor-pointer">
                Live Demo <BsArrowRight className="ml-2 mt-1" />
              </button>
            </div>

            {/* Image */}
            <div
              className="w-full md:w-1/2 flex items-center justify-center p-1 md:p-2 rounded-r-lg"
              style={{
                background: `linear-gradient(to right, white, ${experience.background})`,
              }}
            >
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-auto max-h-60 md:max-h-80 object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
