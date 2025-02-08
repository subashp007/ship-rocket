import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import globally from "../../assets/images/strengths/220-CountiresGlobe.png";
import corierpartener from "../../assets/images/strengths/courierImg.webp";
import nationwide from "../../assets/images/strengths/Group-268305-1.png";
import digitalchannel from "../../assets/images/strengths/Integration-1.png";
import sellers from "../../assets/images/strengths/values-diff-1.png";
import transactions from "../../assets/images/strengths/values-diff-3.png";
import { useState } from "react";

const strengths = [
  { title: "1.5Lakh Businesses/-Sellers Annually", image: sellers },
  { title: "19,000+ Unique- Pin codes Nationwide", image: nationwide },
  { title: "220+ Countries- and Territories Globally", image: globally },
  { title: "25+ Courier- Partners", image: corierpartener },
  { title: "220+ Digital- Channel Integrations", image: digitalchannel },
  { title: "10 Lakh+ Transactions- Enabled Daily", image: transactions },
];

function OurCoreStrengths() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? strengths.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === strengths.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-zinc-200 shadow-lg py-8 px-4 md:px-8 overflow-hidden">
      <div className="realtive flex items-center justify-between">
        <h1 className="text-3xl md:text-5xl mb-8">Our Core Strengths</h1>
        <div className="flex items-center justify-between gap-2">
          <button
            className="flex items-center justify-center text-black bg-white shadow-2xl w-8 h-8 rounded-full"
            onClick={handlePrev}
          >
            <BsChevronLeft />
          </button>
          <button
            className="flex items-center justify-center text-black bg-white shadow-2xl w-8 h-8 rounded-full"
            onClick={handleNext}
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
      <div
        className="flex transition-transform gap-4 duration-500 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 30}%)` }}
      >
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="mb-4 flex flex-col w-88 items-center text-center bg-white rounded-3xl"
          >
            <div className="w-88">
              <h1 className="text-start text-xl md:text-2xl mb-2 p-4">
                <span className="flex items-center">
                  <span className="font-bold">
                    {strength.title.split(" ")[0]}
                  </span>
                  <span className="ml-1">
                    {strength.title.split("-")[0].split(" ")[1]}
                  </span>
                </span>
                <span className="block mt-1">
                  {strength.title.split("-")[1].trim()}
                </span>
              </h1>
            </div>

            <img
              src={strength.image}
              alt={`${strength.title} Image`}
              className="mt-2 w-full h-full rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCoreStrengths;
