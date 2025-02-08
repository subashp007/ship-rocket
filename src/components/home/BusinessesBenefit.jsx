import React from "react";
import card1 from "../../assets/images/businesses/cards-4.webp";
import card2 from "../../assets/images/businesses/cards-3.webp";
import card3 from "../../assets/images/businesses/offlineStores.webp";
import card4 from "../../assets/images/businesses/cards-2.webp";
import icon from "../../assets/images/businesses/h1-1.svg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const businessData = [
  {
    title: "SMB Online Retailers",
    description:
      "D2C brands, traders & drop shippers selling through their own website",
    links: ["Shipping", "ShipX", "Checkout", "Engage360"],
    benefits: [
      "Conversion increase of up to,20%",
      "Shipping cost reduction by,10-12%",
    ],
    image: card1,
    color: "#fff3db",
  },
  {
    title: "Social Sellers",
    description: "Entrepreneurs selling on Instagram, WhatsApp, Facebook etc.",
    links: ["Shipping", "ShipX", "Checkout"],
    benefits: [
      "Shipping cost reduction by, 10-12%",
      "Uplift end-to-end buyer ,experience",
    ],
    image: card2,
    color: "#faffe4",
  },
  {
    title: "Offline Stores",
    description: "Retailers, brand stores",
    links: ["Shipping", "ShipX", "Checkout", "Engage360"],
    benefits: [
      "Supply chain cost reduction by, 10-15%",
      "Omnichannel buyer ,experience",
    ],
    image: card3,
    color: "#c9ffdb",
  },
  {
    title: "Large Online & Offline Businesses",
    description:
      "Brands & sellers having multiple sales channels - website, stores etc.",
    links: ["Shipping", "ShipX", "Checkout", "Engage360"],
    benefits: ["Business optimization cost saving up to,10%"],
    image: card4,
    color: "#f2efff",
  },
];

function BusinessesBenefit() {
  return (
    <div className="bg-zinc-200 py-8 px-4 md:px-8">
      {/* Heading */}
      <h1 className="text-3xl text-zinc-900 md:text-5xl mb-8 text-left">
        Which Businesses Can Benefit from Shiprocket?
      </h1>
      <p className="hidden mb-8 text-left">
        If your business resonates with any of the below, the answer is a
        definite ‘YES’!
      </p>

      {/* Business Cards */}
      <div className="flex flex-wrap gap-6">
        {businessData.map((business, index) => (
          <div
            key={index}
            className={`p-4 rounded-3xl shadow-md flex flex-col-reverse md:flex-col text-left ${
              index === 0 || index === 3 ? "md:w-[52%]" : "md:w-[44%]"
            }`}
            style={{
              background: `linear-gradient(to top, ${business.color}, white)`,
            }}
          >
            {/* Links Section */}
            <div className="mb-4">
              {/* Title & Description */}
              <h2 className="text-2xl md:text-4xl mb-2">{business.title}</h2>
              <p className="text-gray-600 py-4">{business.description}</p>

              <h3 className="text-left text-base text-black font-manrope font-semibold">
                Products used frequently
              </h3>
              <ul className="flex gap-4 items-center text-left">
                {business.links.map((link, i) => (
                  <li
                    key={i}
                    className="flex flex-wrap items-center gap-2 rounded-3xl border border-blue-300 py-1 px-2 text-blue-600 text-xs"
                  >
                    <img src={icon} alt={link} />
                    <Link className="text-left">{link}</Link>
                    <BsArrowRight />
                  </li>
                ))}
              </ul>

              {/* Benefits Section */}
              <div>
                <ul className="grid grid-cols-2 gap-2 text-left">
                  {business.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className={
                        i === 1 ? "border-l border-zinc-300 pl-12" : ""
                      }
                    >
                      <div className="mt-4">
                        <p className="text-sm md:leading-0 text-zinc-400">
                          {benefit.split(",")[0]}
                        </p>
                        <br />
                        <p className="text-xl md:text-3xl leading-2 font-manrope">
                          {benefit.split(",")[1]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <img
              src={business.image}
              alt={business.title}
              className="w-full h-auto rounded-3xl mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessesBenefit;
