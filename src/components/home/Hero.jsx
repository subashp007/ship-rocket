import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import banner1 from "../../assets/images/banners/banner-1.webp";
import banner2 from "../../assets/images/banners/banner-2.webp";
import banner3 from "../../assets/images/banners/banner-3.webp";
import banner4 from "../../assets/images/banners/banner-4.webp";
import banner5 from "../../assets/images/banners/banner-5.webp";
import bgImage from "../../assets/images/backgrounds/bg-colors-scaled-1.webp"

// Image data array
const sliders = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    desc: "This is a short description for the first banner.",
    image: banner1,
  },
  {
    title: "Incidunt quam sint sapiente!",
    desc: "This is a short description for the second banner.",
    image: banner2,
  },
  {
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    desc: "This is a short description for the third banner.",
    image: banner3,
  },
  {
    title: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    desc: "This is a short description for the fourth banner.",
    image: banner4,
  },
  {
    title:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    desc: "This is a short description for the fifth banner.",
    image: banner5,
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
    );
  };

  // Automatic slide change (every 3 seconds)
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="relative overflow-hidden w-screen h-screen flex"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
      }}
    >
      {sliders.map((slider, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex transition-opacity duration-500 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="ml-4 w-1/2 h-full flex flex-col items-start justify-center my-auto p-4">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold text-start leading-16">
              {slider.title}
            </h1>
            <p className="text-black text-start mt-2 mb-4">{slider.desc}</p>
            <button className="w-fit bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-white hover:text-blue-500">
              Sign Up for Free <BsArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2 h-full">
            <img
              src={slider.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute top-96 gap-56 inset-0 flex items-center px-6">
        <button
          onClick={prevImage}
          className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        >
          <FaChevronLeft size={12} />
        </button>
        <button
          onClick={nextImage}
          className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        >
          <FaChevronRight size={12} />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-18 left-1/7 transform -translate-x-1/2 flex space-x-2">
        {sliders.map((_, index) => (
          <span
            key={index}
            className={`w-8 h-0.5 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-green-500 scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Hero;
