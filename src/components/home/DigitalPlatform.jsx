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

import viniculum from "../../assets/images/digital-partners/integtration-1.png";
import easyecom from "../../assets/images/digital-partners/integtration-2.png";
import bikayi from "../../assets/images/digital-partners/integtration-3.png";
import storehippo from "../../assets/images/digital-partners/integtration-4.png";
import prestashop from "../../assets/images/digital-partners/integtration-5.png";
import etsy from "../../assets/images/digital-partners/integtration-7.png";
import indiamart from "../../assets/images/digital-partners/integtration-9.png";
import magento from "../../assets/images/digital-partners/logo-2.png";
import instamojo from "../../assets/images/digital-partners/logo-1.png";
import opencart from "../../assets/images/digital-partners/logo-3.png";
import Razorpay from "../../assets/images/digital-partners/Razorpay.webp";
import shopify from "../../assets/images/digital-partners/shopify.webp";
import woocommerce from "../../assets/images/digital-partners/woocommerce.webp";
import zoho from "../../assets/images/digital-partners/Zoho.png";

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

// **2. E-commerce & Payment Integrations**
const ecommercePlatforms = [
  { name: "Viniculum", logo: viniculum },
  { name: "EasyEcom", logo: easyecom },
  { name: "Bikayi", logo: bikayi },
  { name: "StoreHippo", logo: storehippo },
  { name: "PrestaShop", logo: prestashop },
  { name: "Etsy", logo: etsy },
  { name: "IndiaMart", logo: indiamart },
  { name: "Magento", logo: magento },
  { name: "Instamojo", logo: instamojo },
  { name: "OpenCart", logo: opencart },
  { name: "Razorpay", logo: Razorpay },
  { name: "Shopify", logo: shopify },
  { name: "WooCommerce", logo: woocommerce },
  { name: "Zoho", logo: zoho },
];

function DigitalPlatform() {
  return (
    <div
      className="relative inset-0 bg-zinc-200 space-y-8 py-20"
      style={{ backgroundImage: `url(${bgDots})`, backgroundSize: "cover"}}
    >
      {/* Background Overlay (For Opacity Effect) */}
      <div className="absolute inset-0 z-0 bg-zinc-200 opacity-80 h-full"></div>
      <h1 className="relative z-10 bg-zinc-200 w-fit text-zinc-900 md:leading-16 text-left text-semibold text-3xl md:text-5xl ml-4">
        Seamless Integrations with <br /> 220+ Digital Platforms
      </h1>

      {/* Marquee for Logistics Partners */}
      <div className="overflow-hidden relative z-10 space-y-3">
        <div className="flex gap-2 animate-marquee">
          {logisticsPartners.concat(logisticsPartners).map((partner, index) => (
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
          {ecommercePlatforms
            .concat(ecommercePlatforms)
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
  );
}

export default DigitalPlatform;
