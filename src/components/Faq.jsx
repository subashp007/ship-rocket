import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is next-day delivery?",
    ans: "Next-day delivery is a service that allows you to ship your orders and have them delivered the very next day, reducing delays and boosting customer satisfaction.",
  },
  {
    question: "How do I start using the next-day delivery service?",
    ans: "To start using next-day delivery, simply open the Shiprocket app or dashboard. Check if your pickup and delivery locations fall within the eligible zones, then place orders with courier partners offering next-day delivery in those areas.",
  },
  {
    question: "Can I track next-day delivery orders in real-time?",
    ans: "Yes, you can track your shipments in real-time through the Shiprocket app or dashboard.",
  },
  {
    question: "Is next-day delivery available during peak seasons?",
    ans: "Yes, next-day delivery is generally available throughout the year, including peak seasons. However, during such times, delivery timelines may vary based on courier capacity and demand.",
  },
  {
    question: "Is next-day delivery actually the next day?",
    ans: "Yes, next-day delivery means your order will arrive the day after it is shipped, provided it meets the cut-off time and service availability.",
  },
];

function Faq() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="grid md:grid-cols-2 p-6">
      <div className="md:w-2/4 mb-6">
        <h1 className="text-3xl font-manrope font-medium text-blue-950 md:text-[52px] leading-tight text-center md:text-start">
          Frequently Asked{" "}
          <span className="font-TWKLausanne bg-gradient-to-r from-yellow-400 to-purple-600 text-transparent bg-clip-text">
            Questions
          </span>
        </h1>
      </div>

      <div className="space-y-4 pr-8 font-manrope">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
            onClick={() => handleToggle(index)}
          >
            <h2 className="text-xl font-semibold cursor-pointer flex items-center space-x-3">
              <span
                className={`transform transition-transform ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              >
                {expandedIndex === index ? <FaMinus/> : <FaPlus/>}
              </span>
              <span className={`${expandedIndex === index ? "text-blue-700" :""}`}>{faq.question}</span>
            </h2>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ml-10 ${
                expandedIndex === index
                  ? "max-h-fit pt-4" 
                  : "max-h-0 pt-0"
              }`}
            >
              <p className="text-slate-500 font-thin text-[18px] tracking-wide">{faq.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
