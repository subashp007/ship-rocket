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

function OurSellers() {
  const [activeSellerIndex, setActiveSellerIndex] = useState(0);

  const handleSeller = (index) => {
    setActiveSellerIndex(index);
  };

  const activeSeller = sellers[activeSellerIndex];

  return (
    <div className="font-manrope bg-zinc-200 space-y-4 py-10">
      {/* courier partner */}
      <div
        style={{ backgroundImage: `url(${bgDots})`, backgroundSize: "cover" }}
        className="relative inset-0 pb-20 bg-zinc-200"
      >
        {/* Background Overlay (For Opacity Effect) */}
        <div className="absolute inset-0 bg-zinc-200 opacity-80"></div>
        <h1 className="relative z-30 w-fit text-3xl md:text-5xl py-6 text-left px-4 md:px-8 bg-zinc-200">
          Anywhere, Anytime – With Your
          Choice of Courier Partners
        </h1>
        {/* Marquee for Logistics Partners */}
        <div className="overflow-hidden relative space-y-6">
          <div className="flex gap-2 animate-marquee">
            {logisticsPartners
              .concat(logisticsPartners)
              .map((partner, index) => (
                <div
                  key={index}
                  className="flex-none w-40 rounded-lg flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
          </div>

          {/* Reverse Marquee for E-commerce Platforms */}
          <div className="flex space-x-2 animate-marquee-reverse">
            {logisticsPartners
              .concat(logisticsPartners)
              .reverse()
              .map((platform, index) => (
                <div
                  key={index}
                  className="flex-none w-40 rounded-lg flex items-center justify-center"
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* our sellers */}
      <h1 className="text-3xl md:text-5xl leading-5 md:py-6 text-left px-8">Voices of Our Sellers</h1>

      {/* Seller Logos */}
      <div className="bg-zinc-200 border-b border-zinc-300 flex items-center justify-between gap-4 px-8">
        {sellers.map((seller, index) => (
          <button
            key={seller.company}
            className={`p-2 bg-zinc-200 opacity-30 border-b-2 hover:border-b-black hover:opacity-100 ${
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

export default OurSellers;
