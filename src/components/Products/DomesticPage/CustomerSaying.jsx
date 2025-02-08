import React, { useState } from "react";
import { Car1, Car2, Car3, Car4, Car5 } from "./CustomerCard"; // Import individual components
import { NavLink } from "react-router-dom";
import icon1 from "../../../assets/Domestic/cars.png";
import icon2 from "../../../assets/Domestic/car2.png";
import icon3 from "../../../assets/Domestic/car3.png";
import icon4 from "../../../assets/Domestic/car4.png";
import icon5 from "../../../assets/Domestic/car5.png";

export const CustomerSaying = () => {
  const [tab, setTab] = useState(1);
  const images = [icon1, icon2, icon3, icon4, icon5];

  // Map tab state to corresponding component
  const renderComponent = () => {
    switch (tab) {
      case 1:
        return <Car1 />;
      case 2:
        return <Car2 />;
      case 3:
        return <Car3 />;
      case 4:
        return <Car4 />;
      case 5:
        return <Car5 />;
      default:
        return <Car1 />;
    }
  };

  return (
    <div className="max-w-full mx-8 pt-6 mt-10">
      <div>
        <h1 className="text-5xl mb-4">
          <span className="text-[#0B0757]">What our customers are </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300 via-green-400 to-purple-900">
            saying
          </span>
        </h1>
        <p className="text-gray-500 text-lg tracking-tight py-2 mx-2 font-manrope">
          Take a sneak peek into how your fellow brands are shipping their dream
          with us
        </p>
      </div>

      {/* Render selected component dynamically */}
      <div>{renderComponent()}</div>

      {/* Navigation for Selecting Components */}
      <div className="flex justify-between gap-x-6 items-center my-8">
        {images.map((image, index) => (
          <NavLink
            key={index}
            onClick={() => setTab(index + 1)}
            className={`w-30 hover:opacity-80 cursor-pointer duration-200 `}
          >
            <img
              className={` rounded-md hover:scale-105 transition-transform duration-200 ${
                tab === index + 1
                  ? "opacity-100 border-b-1 border-gray-500 pb-3"
                  : "opacity-50"
              }`}
              src={image}
              alt={`image-${index + 1}`}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
