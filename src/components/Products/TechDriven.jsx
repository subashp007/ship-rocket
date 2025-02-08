import React from "react";
import home1 from "../../assets/images/products/home-logo-1.svg";
import home2 from "../../assets/images/products/home-logo-2.svg";
import home3 from "../../assets/images/products/home-logo-3.svg";
import home4 from "../../assets/images/products/home-logo-4.svg";
import home5 from "../../assets/images/products/home-logo-5.svg";
import home6 from "../../assets/images/products/home-logo-6.svg";

const offerings = [
  {
    title: "35+ fulfillment centers",
    description:
      "Distribute inventory across the country without investing in warehouse infrastructure.",
    image: home1, // Corrected image reference
  },
  {
    title: "Same/next day delivery",
    description:
      "Delight your customers, drive repeat purchases, and skyrocket your growth.",
    image: home2,
  },
  {
    title: "Unified management system",
    description:
      "Easily manage warehouses, control inventory, process orders and analyze performance.",
    image: home3,
  },
  {
    title: "12+ channel integrations",
    description:
      "Get your products all-round visibility and manage every order in a single platform.",
    image: home4,
  },
  {
    title: "24000+ unique pin codes covered",
    description:
      "Expand your footprint to PAN India with 25+ reliable courier partners.",
    image: home5,
  },
  {
    title: "B2B order fulfillment",
    description:
      "From 10 to 10000, fulfill your B2B orders accurately from our smart fulfillment centers.",
    image: home6,
  },
];

function TechDriven() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-16">
      <div>
        <p className="text-basic text-left px-4 md:px-16 font-medium text-blue-500">
          Why Shiprocket Fulfillment
        </p>
        <h1 className="text-3xl md:text-5xl text-left font-bold mt-2 w-4/5 px-4 md:px-16 text-blue-950">
          A{" "}
          <span className="bg-gradient-to-r from-blue-700 to-sky-300 text-transparent bg-clip-text font-thin">
            Tech-Driven
          </span>{" "}
          Path to Simplifying Order Fulfillment
        </h1>
      </div>

      {/* Offerings Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
        {offerings.map((offer, index) => (
          <div
            key={index}
            className="relative w-72 h-60 p-6 bg-blue-100 shadow-2xl rounded-xl text-center hover:shadow-2xl transition"
          >
            <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-white rounded-xl">
              <img
                src={offer.image}
                alt={offer.title}
                className="absolute z-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 drop-shadow-2xl transition-transform duration-500 hover:scale-110"
              />
              <h2 className="text-md text-blue-950 font-semibold mt-16 px-4">
                {offer.title}
              </h2>
              <p className="text-gray-600 mt-2 px-4">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechDriven;
