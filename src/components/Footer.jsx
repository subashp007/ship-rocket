import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronDown, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/images/sticky-image/Shiprocket-Logo-White.svg";
import Android from "../assets/images/footer/android.webp";
import IOS from "../assets/images/footer/IOS.webp";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});
  const [openSubCategories, setOpenSubCategories] = useState({});

  // Toggle for main sections
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Toggle for subcategories
  const toggleSubCategory = (subCategory) => {
    setOpenSubCategories((prev) => ({
      ...prev,
      [subCategory]: !prev[subCategory],
    }));
  };

  const menuStructure = [
    {
      title: "Products",
      items: [
        "Shiprocket Shipping",
        "ShiprocketX",
        "Shiprocket Fulfillment",
        "Shiprocket Engage 360",
        "Shiprocket Capital",
        "Shiprocket Packaging",
        "Shiprocket Checkout",
        "Shiprocket Cargo",
        "Shiprocket Omuni",
        "Shiprocket Promise",
        "Shiprocket Amplify",
        "Shiprocket Quick",
        "Delivery Boost",
        "Shiprocket Sense",
      ],
    },
    {
      title: "Features",
      items: [
        "Cash on Delivery",
        "Serviceable Pin Codes",
        "API Integration",
        "Multiple Pickup Locations",
        "Print Shipping Labels",
        "Email & SMS Notifications",
        "Amazon Self-Ship",
        "All Features",
      ],
      subCategories: [
        {
          title: "Partner",
          items: ["Carrier", "Technology", "Become a Partner"],
        },
      ],
    },
    {
      title: "Resources",
      items: [
        "Shipping Rate Calculator",
        "Volumetric Weight Calculator",
        "Free eCommerce Tools",
        "Knowledge Base",
        "Coupons",
        "FAQ’s",
        "Blog",
        "Developers",
        "Blog",
        "Web Stories",
        "Ebook",
        "Encyclopedia",
        "Videos and Podcast",
        "Showcase Your Brand",
        "Tech Sphere",
      ],
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Contact Us", "Company Updates"],
      subCategories: [
        {
          title: "Support",
          items: ["Help Center"],
        },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-10 rounded-t-3xl">
      <div className="md:flex max-w-7xl mx-auto px-5">
        {/* Logo and Social Media */}
        <div>
          <div className="text-center md:text-left">
            <img
              src={Logo}
              alt="Shiprocket Logo"
              className="w-36 md:w-48"
            />
            <div className="flex justify-start space-x-4 mt-4 mb-16">
              <Link to="/" className="text-gray-300 hover:text-white">
                <FaFacebookF className="bg-white text-black w-8 h-8 rounded-full p-2" />
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white">
                <BsTwitterX className="bg-white text-black w-8 h-8 rounded-full px-2" />
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white">
                <FaInstagram className="bg-white text-black w-8 h-8 rounded-full px-2" />
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white">
                <FaYoutube className="bg-white text-black w-8 h-8 rounded-full px-2" />
              </Link>
              <Link to="/" className="text-gray-300 hover:text-white">
                <FaLinkedinIn className="bg-white text-black w-8 h-8 rounded-full px-2" />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-6">
            <h3 className="font-semibold text-xl">Reach Us At</h3>
            <p className="mt-2 text-gray-300">📧 support@shiprocket.com</p>
            <p className="mt-2 text-gray-300">📧 sales@shiprocket.com</p>
            <p className="mt-2 text-gray-300 flex items-center">
              <FaLocationDot className="mr-2" /> Plot No. B, Khasra No. 360,
              M.G. Road, Mehrauli, Delhi, 110030
            </p>
            <p className="mt-2 text-gray-300 flex items-center">
              <FaLocationDot className="mr-2" /> Shiprocket 416, Udyog Vihar
              III, Gurugram, Haryana 122008
            </p>
          </div>

          {/* Download App */}
          <div className="mt-6">
            <h3 className="font-bold mb-4">Download App</h3>
            <div className="flex gap-4">
              <img src={Android} alt="Android Playstore" className="w-28 h-8" />
              <img src={IOS} alt="App Store" className="w-28 h-8" />
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {menuStructure.map((section, index) => (
            <div
              key={index}
              className="border-b border-gray-700 md:border-none"
            >
              <div
                className="flex justify-between items-center py-3 cursor-pointer md:cursor-default"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="font-bold text-xl">{section.title}</h3>
                <FaChevronDown
                  className={`transform transition-transform duration-300 md:hidden ${
                    openSections[section.title] ? "rotate-180" : ""
                  }`}
                />
              </div>

              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  openSections[section.title] ? "max-h-40" : "max-h-0"
                } md:max-h-full md:block`}
              >
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer text-gray-400 hover:text-white py-1 font-normal text-sm"
                  >
                    <Link>{item}</Link>
                  </li>
                ))}
              </ul>

              {/* Handle Subcategories */}
              {section.subCategories &&
                section.subCategories.map((subCategory, subIdx) => (
                  <div key={subIdx} className="mt-4">
                    <div
                      className="flex justify-between items-center py-2 cursor-pointer"
                      onClick={() => toggleSubCategory(subCategory.title)}
                    >
                      <h4 className="font-semibold text-lg">
                        {subCategory.title}
                      </h4>
                      <FaChevronDown
                        className={`transform transition-transform duration-300 md:hidden ${
                          openSubCategories[subCategory.title]
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                    <ul
                      className={`overflow-hidden transition-all duration-300 ${
                        openSubCategories[subCategory.title]
                          ? "max-h-40"
                          : "max-h-0"
                      } md:max-h-full md:block`}
                    >
                      {subCategory.items.map((item, subItemIdx) => (
                        <li
                          key={subItemIdx}
                          className="cursor-pointer text-gray-400 hover:text-white py-1 font-normal text-sm"
                        >
                          <Link>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="md:flex justify-between items-center text-center text-gray-500 mt-10 border-t border-gray-700 pt-4 mx-auto">
        <p>© {new Date().getFullYear()} Shiprocket. All Rights Reserved.</p>{" "}
        <p className="space-x2">
          <span>Terms & Conditions </span>
          <span>| Privacy Policy </span>
          <span>| Compliance </span>
          <span>| Refund & Cancellation Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
