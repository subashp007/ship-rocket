import React from "react";
import { TechCard } from "./TechCard";

export const Technology = () => {
  return (
    <>
      <div className="mx-8">
        <div className="pl-4">
          <h1 className="text-purple-600 text-xl">Driven by technology</h1>

          <h2 class="text-4xl lg:text-5xl font-semibold mb-12">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-300  to-[#6849EC]">
              Make shipping easier
            </span>{" "}
            <span className="text-[#0B0757]">
              using
              <br /> tools packed with power
            </span>
          </h2>
        </div>
        {/* Tech card  */}
        <TechCard />
      </div>
    </>
  );
};
