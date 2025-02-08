import React, { useState } from "react";

import bluedart from "../../assets/images/digital-partners/bluedart.png";
import delhivery from "../../assets/images/digital-partners/c2.png";
import aramax from "../../assets/images/digital-partners/aramex.webp";
import expressbees from "../../assets/images/digital-partners/c1.png";
import dotzot from "../../assets/images/digital-partners/c5.png";
import shadowfax from "../../assets/images/digital-partners/c6.png";
import borzo from "../../assets/images/digital-partners/c9.png";
import kerryexpress from "../../assets/images/digital-partners/c11.png";
import blitz from "../../assets/images/digital-partners/ds.png";
import dtdc from "../../assets/images/digital-partners/dtdc.png";
import ecomexpress from "../../assets/images/digital-partners/ecomexpress.webp";
import ekart from "../../assets/images/digital-partners/Group-9.png";
import loadshare from "../../assets/images/digital-partners/loadshare.png";

import blur from "../../assets/images/sellers/Blur-black.png";
import phool from "../../assets/images/sellers/logo-3.webp";
import platinum from "../../assets/images/sellers/The-Platnum-Black.png";
import adivasioil from "../../assets/images/sellers/Adivasi-Hair-Oil-Black.png";
import adilkadriperfumes from "../../assets/images/sellers/Adilqadari-Balc.png";

import riya from "../../assets/images/sellers/riyapant.webp";
import santosh from "../../assets/images/sellers/santosh.webp";
import abhay from "../../assets/images/sellers/abhay.webp";
import adivasi from "../../assets/images/sellers/adivasi.webp";
import adilkadri from "../../assets/images/sellers/adilqadri.webp";

import bgDots from "../../assets/images/backgrounds/dots.png";

// **1. Courier & Logistics Partners**
const logisticsPartners = [
  { name: "Bluedart", logo: bluedart },
  { name: "Delhivery", logo: delhivery },
  { name: "Aramex", logo: aramax },
  { name: "ExpressBees", logo: expressbees },
  { name: "DotZot", logo: dotzot },
  { name: "Shadowfax", logo: shadowfax },
  { name: "Borzo", logo: borzo },
  { name: "Kerry Express", logo: kerryexpress },
  { name: "Blitz", logo: blitz },
  { name: "DTDC", logo: dtdc },
  { name: "Ecom Express", logo: ecomexpress },
  { name: "Ekart", logo: ekart },
  { name: "Loadshare", logo: loadshare },
];

const sellers = [
  {
    logo: blur,
    desc: "Shiprocket has always strived to support business journeys driven by strong passion. One such inspiring story is that of Riya Pant, a young entrepreneur in her 20s who transformed her love for makeup into a thriving business venture. In her own words, “Shiprocket served as a reliable shipping partner, enabling me to extend the reach of my brand. Women eagerly await their makeup orders; Shiprocket’s smooth and timely deliveries helped me build long term customer loyalty”",
    image: riya,
    designation: "Riya Pant - Founder",
    company: "Blur India",
  },
  {
    logo: phool,
    desc: "Shiprocket realises the importance of warehousing facilities for an eCommerce business. Our Fulfillment services enabled the brand PHOOL to ease out their logistics and supply chain operations. “Coming from a tier 2 city like Kanpur, it was very difficult to deliver timely orders across India. Shiprocket helped us stock our products in multiple warehouses across the country, significantly reducing our delivery timelines.”",
    image: santosh,
    designation: "Santosh Kakkirala - Manager, Operations",
    company: "Phool",
  },
  {
    logo: platinum,
    desc: "I have been using ShiprocketX services to ship to the USA and UK. The user-friendly interface made it simple for me to generate shipping labels, track shipments, and manage orders effortlessly. Their integration with major e-commerce platforms was a time-saver.",
    image: abhay,
    designation: "Abhay - Founder",
    company: "The Platinum",
  },
  {
    logo: adivasioil,
    desc: "The craze for Adivasi Hair Oil is rising online, sharing their rich cultural heritage and entrepreneurial spirit. From the small town of Hunasekatte in Hunsur, Mysuru district, this group of indigenous people has turned a simple dream into a flourishing business. Despite limited resources and knowledge about digital platforms, they have managed to thrive by promoting their authentic herbal products.",
    image: adivasi,
    designation: "Prithvi Raj",
    company: "Adivasi Community",
  },
  {
    logo: adilkadriperfumes,
    desc: "Since 2018, the exquisite fragrances of Adil Qadri Perfumes have blossomed from the small town of Bilimora in Surat, Gujarat, achieving a remarkable valuation of over 100 crores. Adil’s dedication to the art of altar-making showcases the power of hard work and passion.",
    image: adilkadri,
    designation: "Adil Qadri - Founder",
    company: "Adil Qadri Perfumes",
  },
];

function OurCustomers() {
  const [activeSellerIndex, setActiveSellerIndex] = useState(0);

  const handleSeller = (index) => {
    setActiveSellerIndex(index);
  };

  const activeSeller = sellers[activeSellerIndex];

  return (
    <div className="font-manrope space-y-4 py-10 ">
      {/* our customers */}
      <h1 className="text-5xl text-center font-black text-blue-950 mb-4">
        Hear from our{" "}
        <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent font-thin">
          customers
        </span>
      </h1>
      <p className="text-center text-base text-zinc-500">
        Take a tour of how our clients are fulfilling their business goals using
        our eCommerce fulfillment solutions.
      </p>

      {/* Seller Logos */}
      <div className="bg-zinc-100 border-b border-zinc-100 flex items-center justify-between gap-4 px-8">
        {sellers.map((seller, index) => (
          <button
            key={seller.company}
            className={`p-2 opacity-30 border-b-2 hover:border-b-black hover:opacity-100 ${
              activeSellerIndex === index
                ? "border-b-black opacity-100"
                : "border-transparent"
            }`}
            onClick={() => handleSeller(index)}
          >
            <img
              src={seller.logo}
              alt={`${seller.company} Logo`}
              className="w-24 h-12 object-contain"
            />
          </button>
        ))}
      </div>
      {/* Seller Stories */}
      <div className="p-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-zinc-800 text-xl px-2 mb-2">
              {activeSeller.desc}
            </p>
            <p className="text-zinc-600 font-semibold mt-2 px-2">
              {activeSeller.designation}
            </p>
            <p className="text-gray-500 px-2">{activeSeller.company}</p>
          </div>
          <img
            src={activeSeller.image}
            alt={`${activeSeller.company} Founder`}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default OurCustomers;
