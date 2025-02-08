// DomesMain.jsx

import React from "react";
import Nav1 from "../../components/Products/DomesticPage/Nav1";
import { Nav2 } from "../../components/Products/DomesticPage/Nav2";
import { Hero } from "../../components/Products/DomesticPage/Hero";
import { Shipping_Map } from "../../components/Products/DomesticPage/Shipping_Map";
import { Technology } from "../../components/Products/DomesticPage/Technology";
import { TopOffer } from "../../components/Products/DomesticPage/TopOffer";
import { CheckDemo } from "../../components/Products/DomesticPage/CheckDemo";
import { ShipRocEcommerce } from "../../components/Products/DomesticPage/ShipRocEcommerce";
import { Shipsecurity } from "../../components/Products/DomesticPage/Shipsecurity";
import Footer from "../../components/Footer";
import { MultiplePickLoca } from "../../components/Products/DomesticPage/MultiplePickLoca";
import { BrandTracking } from "../../components/Products/DomesticPage/BrandTracking";
import { CentralizeDashBorad } from "../../components/Products/DomesticPage/CentralizeDashBorad";
import { CodRemittance } from "../../components/Products/DomesticPage/CodRemittance";
import { EasyReturn } from "../../components/Products/DomesticPage/EasyReturn";
import { InternationalShipping } from "../../components/Products/DomesticPage/InternationationalShiping";
import { ShippingGrowth } from "../../components/Products/DomesticPage/ShippingGrowth";
import { AppPocket } from "../../components/Products/DomesticPage/AppPocket";
import { CustomerSaying } from "../../components/Products/DomesticPage/CustomerSaying";
import { TrustedBy } from "../../components/Products/DomesticPage/TrustedBy";
import { HowWorks } from "../../components/Products/DomesticPage/HowWorks";
import { ExploreBlog } from "../../components/Products/DomesticPage/ExploreBlog";
import { AlwaysStay } from "../../components/Products/DomesticPage/AlwaysStay";

function DomesMain() {
  return (
    <div className=" mx-4 ">
      {/* top section/ offer */}
      <TopOffer />
      {/* Main Content */}
      <div className="relative max-w-full overflow-hidden">
        {/* Skewed Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-100 to-orange-100 -z-10 transform -skew-y-4 origin-top-left"></div>

        {/* Main Content (Not Skewed) */}
        <div className=" max-w-full   pb-8">
          <Nav1 />
          <Nav2 />
          <Hero />
        </div>
      </div>

      {/* Sections */}
      <Shipping_Map />
      <Technology />
      <CheckDemo />
      <ShipRocEcommerce />
      <Shipsecurity />
      <MultiplePickLoca />
      <BrandTracking />
      <CentralizeDashBorad />
      <CodRemittance />
      <EasyReturn />
      <InternationalShipping />
      <ShippingGrowth />
      <AppPocket />
      <CustomerSaying />
      <TrustedBy />
      <HowWorks />
      <ExploreBlog />
      <AlwaysStay />
      
      <Footer />
    </div>
  );
}

export default DomesMain;  // Default export
